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
     On the left is the input PDF. Notice how the keyword, when not formatted in bold, is not recognized as a new item. Additionally, bold words that are not the designated keyword are correctly added to the same item. On the right is the generated CSV output, listing all songs from the PDF.
</div>

The program was written in Python, and I created a Bash script to streamline execution.

<!-- <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% include repository/repo.liquid repository='fermofou/HackMty-System32' %}

</div> -->
