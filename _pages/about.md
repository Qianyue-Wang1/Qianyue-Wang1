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

I am a master's student in Software Engineering at South China University of Technology (SCUT), advised by Prof. [Mingkui Tan](https://tanmingkui.github.io/). I received my B.Eng. in Software Engineering from SCUT in 2024 and expect to graduate in July 2027. My current research focuses on reliable and efficient LLM reasoning. Starting from model-centric test-time enhancement, I found that static knowledge augmentation and additional computation alone cannot reliably handle errors and uncertainty emerging during reasoning, which motivated my shift toward process-level interactive reasoning, where external knowledge and human feedback dynamically guide and correct the reasoning process. My work has appeared at venues including ICML and NAACL, and Journal of Software.


## 🧠 Research Interests

Reliable and efficient LLM reasoning is explored through human–LLM collaboration, controllable content generation, and test-time knowledge enhancement. The research focus has evolved from model-centric test-time enhancement toward process-level interactive reasoning, where external knowledge and feedback dynamically guide and correct the reasoning process.

### Human–LLM Collaborative Reasoning
Human–LLM collaborative reasoning uses feedback during inference to adapt reasoning depth and direction, with applications in personalized education and complex problem solving. Future work aims to develop adaptive collaborators that recognize when guidance is needed and incorporate human input to support reliable decisions.

### Controllable Content Generation
Dynamic planning, memory, and evidence construction support coherent long-form text and consistent text–chart reports. The long-term goal is to make complex content generation traceable and steerable, allowing users to inspect supporting evidence and refine outputs through interaction.

### Test-time Knowledge Enhancement
Knowledge retrieval and precedent learning ground LLM outputs and reduce redundant reasoning at test time. Future work will explore how useful experience can be accumulated, selected, and transferred across tasks to solve unfamiliar problems more reliably with less repeated exploration.



## 🔥 Recent News

<div style="max-height: 300px; overflow-y: auto; padding: 0;">
  <ul style="list-style-type: none; margin: 0; padding: 0;">
    <li>2026: Our Work on test-time intervention for efficient deep reasoning is accepted by <strong>ICML 2026</strong>.</li>
    <li>2026: Our work on trustworthy government question answering is published in the <strong>Journal of Software</strong>.</li>
    <li>2025: Our work on long-form story generation appears at <strong>NAACL 2025</strong>.</li>
  </ul>
</div>


## 📝 Publications

Check the full list on [Google Scholar](https://scholar.google.com/citations?hl=en&user=AsLKc_gAAAAJ). Published papers and preprints are grouped by research direction below.

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
    <section class="publication-group" data-publication-direction="collaboration" aria-labelledby="publication-collaboration-heading">
      <h3 id="publication-collaboration-heading">Human–LLM Collaborative Reasoning and Interaction</h3>
      <ul>
        <li>
          <a href="https://arxiv.org/abs/2601.11252">Intervene When It Doubts: Conjunction-Guided Interactive Reasoning</a><br>
          <strong>Qianyue Wang</strong>, Jinwu Hu, Zhiquan Wen, Bolin Chen, Huanxiang Lin, Yaofo Chen, Yu Rong, Yuanqing Li, Mingkui Tan<sup>✉</sup><br>
          ICML, 2026.<br>
          <a href="https://arxiv.org/abs/2601.11252">[paper]</a>
        </li>
      </ul>
    </section>
    <section class="publication-group" data-publication-direction="generation" aria-labelledby="publication-generation-heading">
      <h3 id="publication-generation-heading">Controllable Content Generation</h3>
      <ul>
        <li>
          <a href="https://aclanthology.org/2025.naacl-long.63">Generating long-form story using dynamic hierarchical outlining with memory-enhancement</a><br>
          <strong>Qianyue Wang</strong>, Jinwu Hu, Zhengping Li, Yufeng Wang, Daiyuan Li, Yu Hu, Mingkui Tan<sup>✉</sup><br>
          NAACL, 2025.<br>
          <a href="https://aclanthology.org/2025.naacl-long.63">[paper]</a>
          <a href="https://github.com/Qianyue-Wang/Generating-Long-form-Story-Using-Dynamic-Hierarchical-Outlining-with-Memory-Enhancement">[code]</a>
        </li>
        <li>
          <a href="https://arxiv.org/abs/2601.05487">EvidFuse: Writing-Time Evidence Learning for Consistent Text-Chart Data Reporting</a><br>
          Huanxiang Lin, <strong>Qianyue Wang</strong>, Jinwu Hu, Bailin Chen, Qing Du, Mingkui Tan<br>
          Preprint. Under review at TKDE.<br>
          <a href="https://arxiv.org/abs/2601.05487">[paper]</a>
        </li>
      </ul>
    </section>
    <section class="publication-group" data-publication-direction="knowledge" aria-labelledby="publication-knowledge-heading">
      <h3 id="publication-knowledge-heading">Test-time Knowledge Enhancement</h3>
      <ul>
        <li>
          <a href="https://doi.org/10.13328/j.cnki.jos.007435">Towards Trustworthy Government Q&amp;A based on Large Language Model</a><br>
          <strong>Qianyue Wang</strong>, Jinwu Hu, Yufeng Wang, Yu Hu, Haoran Gao, Zhouqiang Qiu, Mingui Tan<sup>✉</sup><br>
          Journal of Software, 2025.<br>
          <a href="https://doi.org/10.13328/j.cnki.jos.007435">[paper]</a>
        </li>
        <li>
          <a href="https://arxiv.org/abs/2602.14451">Precedent-Informed Reasoning: Mitigating Overthinking in Large Reasoning Models via Test-Time Precedent Learning</a><br>
          <strong>Qianyue Wang</strong>, Jinwu Hu, Huanxiang Lin, Bolin Chen, Zhiquan Wen, Yaofo Chen, Yu Rong, Mingkui Tan<sup>✉</sup><br>
          arXiv preprint, 2026.<br>
          <a href="https://arxiv.org/abs/2602.14451">[paper]</a>
        </li>
      </ul>
    </section>
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
