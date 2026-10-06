---
title: Personalizing Offers with Real-Time Weather Data in Adobe Journey Optimizer using Web SDK
description: This tutorial demonstrates how to deliver dynamic, weather-aware offers in Adobe Journey Optimizer using real-time contextual data and the Adobe Web SDK Personalization API. You'll learn how to pass weather attributes (like temperature and conditions) from your website into Adobe Experience Platform, map them to your event schema, and use them in decision rules and ranking formulas to personalize offers at the moment of page load. Ideal for marketers and developers looking to enhance digital experiences with real-time environmental context.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10T00:00:00.000Z
jira: KT-18258
exl-id: f40dd541-470c-4f42-8181-eb1c277ebaa3
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: a984631b-2bae-4860-9b15-69c41a799dcb
    internal-label: APIs and SDKs
subfeature_v2:
  - id: a7a194a0-75e2-4913-8a83-14714fbf68e6
    internal-label: Decisioning API
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Use case description

Using weather-related data in Adobe Journey Optimizer (AJO) to serve offers allows businesses to personalize customer experiences based on real-world, real-time environmental conditions. Weather is a powerful contextual signal. People's needs and behavior shift depending on the weather. By using weather data:

Deliver relevant offers that align with customer mood and environment

On a hot day, show an offer for cold beverage or AC units. On a rainy day, promote jackets or umbrella's

Example of on weather based offer

    
![weather-offers](assets/offers-use-case.png)



## Pre-requisites for this tutorial

*   Access to Experience Platform.

*   Basic understanding of Adobe Experience Platform Tags.

*   Basic understanding of Experience Platform concepts (Profiles, Audiences, Datasets).

*   Familiarity with Journey Optimizer.

*   Basic JavaScript knowledge (reading and writing simple functions).

*   Ability to use Browser DevTools (Console and Network tabs).
