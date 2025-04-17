---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Matthew Rose
subtitle: Software Engineer & DevOps Enthusiast
cover-img: assets/img/cover-image.jpg
---

# Hello, I'm Matthew! 👋

I'm a dedicated **Software Engineer** with a passion for creating elegant solutions and debugging complex problems. My technical journey began in DoD and has evolved into the private SaaS sector.

## What I Write About

- 🚀 DevOps practices and automation
- 💻 Software engineering techniques
- 🔧 Debugging complex technical issues
- 🛠️ Tools and technologies I'm exploring

## Recent Posts

{% for post in site.posts limit:3 %}
<div class="post-preview">
  <a href="{{ post.url | relative_url }}">
    <h2 class="post-title">{{ post.title }}</h2>
    {% if post.subtitle %}
    <h3 class="post-subtitle">{{ post.subtitle }}</h3>
    {% endif %}
  </a>
  <p class="post-meta">
    Posted on {{ post.date | date: "%B %d, %Y" }}
  </p>
  <div class="post-entry-container">
    <div class="post-entry">
      {{ post.excerpt | strip_html | truncatewords: 30 }}
      <a href="{{ post.url | relative_url }}" class="post-read-more">[Read More]</a>
    </div>
  </div>
</div>
<div class="post-preview-divider"></div>
{% endfor %}

<div class="cta-container">
  <a href="/about" class="cta-button">More About Me</a>
  <a href="/blog" class="cta-button">View All Posts</a>
</div>
