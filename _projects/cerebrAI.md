---
layout: page
title: CerebrAI
description: CerebrAI is a web application intended to be an all-in-one investigation tool, powered by AI.
img: assets/img/2.jpg
importance: 1
category: hackathons
giscus_comments: true
---

Created by:

Fernando Morán | Sergio González | Luis Amado | Rodrigo García

It can summarize multiple document types (videos, webpages, and text), as well as extract main keywords, and related links. It also has an AI chatbot, which can answer questions about the uploaded text or document

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2.jpg" title="Open screen" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On here, we have our initial window. 
</div>

Our program could extract text from different media files, using simple functions to get information from them, and then we could use an OpenAI API connection to either discuss our text, or just make general questions about a topic.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/c1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Here's an example of a summary generated from a website with some suggested keywords.
</div>

This project was a finalist in the 10th edition of the biggest student Hackathon in Mexico, HACKMTY (2023).

## Repository:

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% assign repo = 
      {
        "name": "HackMty-System32",
        "url": "https://github.com/fermofou/HackMty-System32"
      } 
    %}
    {% include repository/repo.liquid repository=repo %}
</div>
