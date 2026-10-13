---
layout: null
title: "CV"
permalink: /cv/
redirect_from:
  - /resume
---

{% include base_path %}
{% assign cv_url = base_path | append: 'files/Qianyue_Wang_CV.pdf' %}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url={{ cv_url }}">
    <link rel="canonical" href="{{ cv_url }}">
    <title>Opening CV…</title>
    <script>window.location.replace({{ cv_url | jsonify }});</script>
  </head>
  <body>
    <p>Opening <a href="{{ cv_url }}">CV PDF</a>…</p>
  </body>
</html>
