---
layout: page
title: Automated Plant Care System
description: IoT smart plant keeper with automated irrigation and an up-to-date database.
img: assets/img/7.jpg
redirect:
importance: 3
category: school
---

Made by:

Arnulfo Iván Treviño Cavazos - Fernando Morán Fougerat - Jose Ignacio Paez Batallas - Julen Hoppenstedt Mandiola - Pedro Alejandro Rodriguez Gonzalez

This project allows us to keep tabs on different aspects about a plants wellbeing, taking advantage of tools such as sensores and NodeMCU ESP8266, inserting the measured data to an SQL database. The sensors that we employed are:

- Distance infrared sensor
  - We built a tank, and used HC-SR04 Ultrasonic Distance Sensor to check if the tank is empty
- Humity sensor
  - We added a humity sensor, that checks the current percentage of the plant and, if needed, turns on the water pump.
- Temperature sensor
  - This sensor returns the current temperature in °C, to see if it's okay for our plant's growth.
- Fotovoltaic resistance
  - We added a fotovoltaic resistance to see the current light it receives, and turns on a led light (in preference, turn on a LED grow bulb).
- Movement sensor
  - This PIR sensorschecks if there is movement that affects the plant, such as wind and/or animals.

Our project was configured using Arduino, we sent our data measured to a mySQL database through a Node.js connection, and we made our dashboard using Looker.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    For this project, it was our first time working with electronics, arduino and the IoT area on general. Still, we were able to succesfully connect all elements of the project online.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pl1.jpg" title="dashboard" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Here's a <a href="https://lookerstudio.google.com/reporting/98638818-5ba9-4e56-a093-f12c14b2fe23">dashboard </a> we made on Looker Studio, with our database.
</div>
