---
layout: page
title: Blog
---

{% for post in site.posts %}
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
