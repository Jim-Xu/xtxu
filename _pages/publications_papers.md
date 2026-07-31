---
layout: page
permalink: /publications/papers/
title: Papers
nav: false
---

<p><small><sup>*</sup> Corresponding author.</small></p>

<div class="publications">
  <h2 class="bibliography">In preparation</h2>

  {% bibliography --file papers --group_by none --query @*[inprep=true]* %}

  {% bibliography --file papers --query @*[year>=2023&&inprep!=true]* %}

  <h2 class="bibliography">Before PhD</h2>

  {% bibliography --file papers --group_by none --query @*[year<2023]* %}
</div>
