---
layout: page
title: Matthew Rose
subtitle: Software Engineer
cover-img: assets/img/cover-image-1.jpg
---

{% include index.html %}

# Hello, I'm Matthew! 👋

I'm a **Software Engineer** specializing in cloud infrastructure and distributed systems. My expertise includes Kubernetes orchestration, containerization, GitOps workflows, and AWS cloud services.

## What I Write About

🚀 DevOps practices and automation
💻 Software engineering techniques
🔧 Debugging complex technical issues
🛠️ Tools and technologies I'm exploring

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
  <!-- <a href="/blog" class="cta-button">View All Posts</a> -->
</div>
