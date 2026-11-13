---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
## 🙋‍♂️ About Me

I am a master's student in Software Engineering at South China University of Technology (SCUT), advised by Prof. [Mingkui Tan](https://tanmingkui.github.io/). I received my B.Eng. in Software Engineering from SCUT in 2024 and expect to graduate in July 2027. My current research focuses on reliable and efficient LLM reasoning by invistigating process-level interactive reasoning, where external knowledge and human feedback dynamically engage in the reasoning process to work with LLM-based assitant, instead of being replaced by LLMs. My work has appeared at venues including ICML and NAACL, and Journal of Software.


## 🧠 Research Interests

- **Human–LLM Collaborative Reasoning:** Studies how human feedback and LLM reasoning can interact to adapt the depth and direction of problem solving.
- **Controllable Content Generation:** Develops planning, memory, and evidence-construction methods for coherent long-form writing and consistent text–chart reports.
- **Test-time Knowledge Enhancement:** Uses retrieved knowledge and prior experience to ground LLM outputs and reduce redundant reasoning at inference time.



## 🔥 Recent News

<div style="max-height: 300px; overflow-y: auto; padding: 0;">
  <ul style="list-style-type: none; margin: 0; padding: 0;">
    <li>2026: Our Work on test-time intervention for efficient deep reasoning is accepted by <strong>ICML 2026</strong>.</li>
    <li>2026: Our work on trustworthy government question answering is published in the <strong>Journal of Software</strong>.</li>
    <li>2025: Our work on long-form story generation appears at <strong>NAACL 2025</strong>.</li>
  </ul>
</div>


## 📝 Publications

Check the full list on [Google Scholar](https://scholar.google.com/citations?hl=en&user=AsLKc_gAAAAJ). Selected papers and preprints are listed in reverse chronological order.

{% include base_path %}
<link rel="stylesheet" href="{{ base_path }}/assets/css/publication-filter.css">

<div id="research-publications">
  <div class="publication-filters" role="group" aria-label="Filter publications by research direction" hidden>
    <button type="button" data-publication-filter="all" aria-pressed="true" aria-controls="publication-results">All</button>
    <button type="button" data-publication-filter="collaboration" aria-pressed="false" aria-controls="publication-results">Human–LLM Collaborative Reasoning and Interaction</button>
    <button type="button" data-publication-filter="generation" aria-pressed="false" aria-controls="publication-results">Controllable Content Generation</button>
    <button type="button" data-publication-filter="knowledge" aria-pressed="false" aria-controls="publication-results">Test-time Knowledge Enhancement</button>
  </div>
  <p class="publication-filter-status" role="status" aria-live="polite" aria-atomic="true" hidden></p>
  <div id="publication-results">
    <article class="publication-entry" data-publication-entry data-publication-direction="collaboration" aria-labelledby="publication-cgi-title">
      <a class="publication-figure" href="https://arxiv.org/abs/2601.11252" aria-label="Open paper: Intervene When It Doubts">
        <img src="{{ base_path }}/images/publications/cgi.jpg" alt="Method diagram for conjunction-guided interactive reasoning" loading="lazy">
      </a>
      <div class="publication-details">
        <h3 id="publication-cgi-title"><a href="https://arxiv.org/abs/2601.11252">Intervene When It Doubts: Conjunction-Guided Interactive Reasoning</a></h3>
        <p><strong>Qianyue Wang</strong>, Jinwu Hu, Zhiquan Wen, Bolin Chen, Huanxiang Lin, Yaofo Chen, Yu Rong, Yuanqing Li, Mingkui Tan.</p>
        <p class="publication-meta">ICML, 2026.</p>
        <p class="publication-links"><a href="https://arxiv.org/abs/2601.11252">Paper</a></p>
      </div>
    </article>

    <article class="publication-entry" data-publication-entry data-publication-direction="knowledge" aria-labelledby="publication-government-title">
      <a class="publication-figure" href="https://doi.org/10.13328/j.cnki.jos.007435" aria-label="Open paper: Towards Trustworthy Government Q&A">
        <img src="{{ base_path }}/images/publications/government-qa.jpg" alt="Method diagram for trustworthy government question answering" loading="lazy">
      </a>
      <div class="publication-details">
        <h3 id="publication-government-title"><a href="https://doi.org/10.13328/j.cnki.jos.007435">Towards Trustworthy Government Q&amp;A based on Large Language Model</a></h3>
        <p><strong>Qianyue Wang</strong>, Jinwu Hu, Yufeng Wang, Yu Hu, Haoran Gao, Zhouqiang Qiu, Mingui Tan.</p>
        <p class="publication-meta">Journal of Software, 2026.</p>
        <p class="publication-links"><a href="https://doi.org/10.13328/j.cnki.jos.007435">Paper</a></p>
      </div>
    </article>

    <article class="publication-entry" data-publication-entry data-publication-direction="knowledge" aria-labelledby="publication-pir-title">
      <a class="publication-figure" href="https://arxiv.org/abs/2602.14451" aria-label="Open paper: Precedent-Informed Reasoning">
        <img src="{{ base_path }}/images/publications/pir.jpg" alt="Method diagram for test-time precedent-informed reasoning" loading="lazy">
      </a>
      <div class="publication-details">
        <h3 id="publication-pir-title"><a href="https://arxiv.org/abs/2602.14451">Precedent-Informed Reasoning: Mitigating Overthinking in Large Reasoning Models via Test-Time Precedent Learning</a></h3>
        <p><strong>Qianyue Wang</strong>, Jinwu Hu, Huanxiang Lin, Bolin Chen, Zhiquan Wen, Yaofo Chen, Yu Rong, Mingkui Tan.</p>
        <p class="publication-meta">arXiv preprint, 2026.</p>
        <p class="publication-links"><a href="https://arxiv.org/abs/2602.14451">Paper</a></p>
      </div>
    </article>

    <article class="publication-entry" data-publication-entry data-publication-direction="generation" aria-labelledby="publication-evidfuse-title">
      <a class="publication-figure" href="https://arxiv.org/abs/2601.05487" aria-label="Open paper: EvidFuse">
        <img src="{{ base_path }}/images/publications/evidfuse.jpg" alt="Method diagram for writing-time evidence construction in text-chart reports" loading="lazy">
      </a>
      <div class="publication-details">
        <h3 id="publication-evidfuse-title"><a href="https://arxiv.org/abs/2601.05487">EvidFuse: Writing-Time Evidence Learning for Consistent Text-Chart Data Reporting</a></h3>
        <p>Huanxiang Lin, <strong>Qianyue Wang</strong>, Jinwu Hu, Bailin Chen, Qing Du, Mingkui Tan.</p>
        <p class="publication-meta">arXiv preprint, 2026. Under review at TKDE.</p>
        <p class="publication-links"><a href="https://arxiv.org/abs/2601.05487">Paper</a></p>
      </div>
    </article>

    <article class="publication-entry" data-publication-entry data-publication-direction="generation" aria-labelledby="publication-dome-title">
      <a class="publication-figure" href="https://aclanthology.org/2025.naacl-long.63" aria-label="Open paper: Generating Long-form Story Using Dynamic Hierarchical Outlining">
        <img src="{{ base_path }}/images/publications/dome.jpg" alt="Method diagram for dynamic outlining and memory-enhanced long-form story generation" loading="lazy">
      </a>
      <div class="publication-details">
        <h3 id="publication-dome-title"><a href="https://aclanthology.org/2025.naacl-long.63">Generating Long-form Story Using Dynamic Hierarchical Outlining with Memory-Enhancement</a></h3>
        <p><strong>Qianyue Wang</strong>, Jinwu Hu, Zhengping Li, Yufeng Wang, Daiyuan Li, Yu Hu, Mingkui Tan.</p>
        <p class="publication-meta">NAACL, 2025.</p>
        <p class="publication-links">
          <a href="https://aclanthology.org/2025.naacl-long.63">Paper</a>
          <a href="https://github.com/Qianyue-Wang/Generating-Long-form-Story-Using-Dynamic-Hierarchical-Outlining-with-Memory-Enhancement">Code</a>
        </p>
      </div>
    </article>
  </div>
</div>
<script src="{{ base_path }}/assets/js/publication-filter.js" defer></script>

## 🏆 Award
- National Scholarship for Graduate Students, 2026.
- National Scholarship for Graduate Students, 2025.
- Tencent Scholarship, Grand Prize, 2025.
- Excellent Service Award, Chinese Society of Image and Graphics, 2024.
- Second Prize in The 19th "Challenge Cup" National College Students' Extracurricular Academic and Technological Works Competition, 2024.
- Excellent Undergraduate's Dissertation Award, 2024.
- National Scholarship for Undergraduate Students, 2023.


## 📘 Grants
- Guangdong Provincial College Student Innovation Project, Project Participant, 2022-2023.

## 💻 Internships
- 2026.07-2026.08, China Southern Power Grid Technology Co., Ltd, **Algorithm Intern**.
Research on the efficient adjustment of large-scale power grid parameters, and the accumulation and application of adjustment experience.
- 2025.06–present, Pazhou Laboratory, **Algorithm Intern**. Contributed to team research and developed MindTock, an in-house LLM experience platform.

## 🤝 Industry Collaboration

- 2025.10–2028.10, core member of an industry collaboration with China Southern Power Grid on AI-based main grid planning and decision support. Designed a data-driven analytical report writing system and traceable links between planning results, conclusions, and report content, with support for targeted revisions.

## 🎓 Professional Activities
- ICLR 2027, Reviewer.
- IEEE BIBM 2024, Reviewer.
- CSIG student member, 2024.
