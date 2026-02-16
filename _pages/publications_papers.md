---
layout: page
permalink: /publications/papers/
title: Papers
nav: false
---

{% include bib_search.liquid %}

<div class="publications">
  {% bibliography --file papers --query @*[year>=2021]* %}

  <h2 class="bibliography">Before 2021</h2>

  {% bibliography --file papers --group_by none --query @*[year<2021]* %}
</div>
