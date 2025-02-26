---
layout: post-comments
title:  "Dockerizing a Next.js App"
date:   2025-02-25 00:39:19 -0500
tags: [docker, nextjs, webdev]
comments: true
--- 

# Dockerizing a Next.js Application: Challenges and Solutions

Deploying a Next.js application is straightforward with platforms like Vercel and Netlify. However, when you want full control over your deployment and opt for Docker, the available guidance is sparse. This blog post covers the challenges of creating a Docker image for a Next.js application, including the multi-stage build process, differences between local and production environments, and necessary tweaks for the entrypoint script.

## Multi-Stage Build Process

Using a multi-stage build significantly reduces the final image size and ensures that only necessary files are included in production. The Dockerfile uses the following stages:

### 1. Base Stage
This stage installs system dependencies and prepares the base image:

```dockerfile
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat bash
WORKDIR /app
```

### 2. Dependency Installation
This stage installs dependencies while ensuring caching optimizations:

```dockerfile
FROM base AS deps
COPY package.json package-lock.json* entrypoint.sh ./
RUN npm ci --ignore-scripts
```

### 3. Build Stage
Here, the application is built using the dependencies from the previous stage:

```dockerfile
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY npx next build --no-lint
```

### 4. Runner Stage
This stage prepares the final image, ensuring a minimal and secure environment:

```dockerfile
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["node", "server.js"]
```

## Using the Image Locally vs. In Production

### Local Development
For local development, you can build and run the container with:

```sh
docker build -t nextjs-app .
docker run --env-file=.env -p 3000:3000 nextjs-app
```

This ensures that environment variables are correctly injected at runtime. 

### Production Deployment
In production, the image should be pushed to a registry and deployed with an orchestration tool like Kubernetes or a simple Docker Compose setup:

```yaml
version: '3'
services:
  app:
    image: your-registry/nextjs-app:latest
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: "your-database-url"
      NODE_ENV: "production"
```

## The Importance of the EntryPoint Script

Next.js does not automatically replace `NEXT_PUBLIC_` environment variables at runtime. To work around this, we modify the `.next` build output dynamically using `entrypoint.sh`:

```bash
#!/bin/bash
test -n "$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
test -n "$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#CLERK_PUBLISHABLE_KEY#$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#STRIPE_PUBLISHABLE_KEY#$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY#g"
exec "$@"
```

This ensures that all `NEXT_PUBLIC_` variables are correctly populated when the container starts.

## Conclusion

Creating a Docker image for a Next.js application involves several challenges, from efficient multi-stage builds to ensuring proper runtime environment variable handling. By following these steps, you can build and deploy a streamlined, secure, and production-ready Next.js container that functions seamlessly in both local and cloud environments.





