---
layout: page
permalink: /publications/presentations/
title: Conference Presentations
nav: false
---

<style>
  .conference-presentations .abbr {
    display: none;
  }

  .conference-presentations .row > [id] {
    flex: 0 0 100%;
    max-width: 100%;
  }

  /* Continuous reverse numbering across the per-year lists.
     The number itself is set by the script below so it auto-updates
     when presentations are added/removed. */
  .conference-presentations ol.bibliography li {
    position: relative;
    padding-left: 2.4rem;
  }

  .conference-presentations ol.bibliography li::before {
    content: var(--talk-num, "");
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 600;
    color: var(--global-theme-color);
  }
</style>

<div class="publications conference-presentations">
  {% bibliography --file presentations %}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(
      ".conference-presentations ol.bibliography li"
    );
    var total = items.length;
    items.forEach(function (li, i) {
      li.style.setProperty("--talk-num", '"' + (total - i) + '."');
    });
  });
</script>
