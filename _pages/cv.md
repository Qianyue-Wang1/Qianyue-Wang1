---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% assign cv_url = '/files/Qianyue_Wang_CV.pdf' | relative_url %}

<div class="notice--primary" markdown="1">
#### Latest CV

<a class="btn" href="{{ cv_url }}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Open PDF</a>
<a class="btn btn--inverse" href="{{ cv_url }}" download><i class="fas fa-download" aria-hidden="true"></i> Download PDF</a>
</div>

<object data="{{ cv_url }}" type="application/pdf" width="100%" style="height: 1100px; border: 1px solid #e5e5e5; border-radius: 4px;">
  <p>Your browser cannot display this PDF inline. <a href="{{ cv_url }}">Open or download the CV.</a></p>
</object>
