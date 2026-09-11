---
layout: page
permalink: /publications/papers/
title: Publications
nav: true
nav_order: 1
---

<p><small><sup>*</sup> Corresponding author.</small></p>

<div class="publications">
  <section class="publication-group publication-pending">
    <h2 class="bibliography">In preparation / Under review</h2>

{% bibliography --file papers --group_by none --query @*[publication_status]* %}
  </section>

  <section class="publication-group publication-peer-reviewed">
{% bibliography --file papers --query @*[year>=2023&&publication_status!~.+]* %}
  </section>

  <section class="publication-group publication-before-phd">
    <h2 class="bibliography">Before PhD</h2>

{% bibliography --file papers --group_by none --query @*[year<2023]* %}
  </section>
</div>
