---
layout: page
title: Implementation of substitution decryption
description: Python code that decripts text using parallel programming.
img: assets/img/p1.jpg
importance: 1
category: school
related_publications: true
---

On this project, my team (Monica Sóberon, Bernardo Willis) and I were tasked with decrypting different texts that used a monoalphabetic substitution cipher.
For our program, we created a function to count letters in a given message; then create the dictionary "key" by pairing the frequencies based on the average of english alphabet; and finally replace the letter using said key.

We applied parallel programming in 2 different ways: to process text by chunks, and create key with joint results; running different files using multiprocessing, each proccess in a sequential manner. When comparing results, individually there was some underperformance against a sequential approach on our .txt files, however there was a massive improvement on performance when running all files at the same time, compared to one by one.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/p1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, picture from <a href="https://unsplash.com/es/@flyd2069?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">FlyD</a> on <a href="https://unsplash.com/es/fotos/candado-de-amor-rojo-y-negro-zAhAUSdRLJ8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  . Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.

This was a cool project to get to know a useful technique and to understand when it's better to use this tool (heavier or larger tasks,preferably that can be solved independently) against a sequential approach (tasks with dependencies on same resources or variables.)

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
