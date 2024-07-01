---
layout: page
title: Pdf to CSV
description: Turns pdf to csv separating items on bold keyword.
img: assets/img/12.jpg
importance: 1
category: personal
---

This was a fun project where I managed to use the library pdfminer.six to separate a pdf according to a keyword with a bold format.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pdf1.jpg" title="input pdf" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pdf2.jpg" title="output csv" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the left, my input pdf. As seen, the keyword can appear inside an item, but while it isn't in the specified format, it doesn't identify it as a new Track. Also, a word in bold that isn't the keyword can be added without problem to the item. Right, my csv output with all songs on my pdf.
</div>
