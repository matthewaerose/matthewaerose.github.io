---

---
<h3>console</h3>
<ul>
    {% for post in site.posts %}
        <li>
            {% if post.categories contains 'console' %}
                <a href="{{ post.url }}">{{ post.title }}</a>
            {% endif %}
        </li>
    {% endfor %}
</ul>
