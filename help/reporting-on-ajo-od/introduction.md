---
title: Track and Report Adobe Jouney Optimizer (AJO) Offers delivered  vi AJO Offer Decisioning
description: This tutorial extends an existing Adobe Journey Optimizer (AJO) implementation that delivers personalized offers based on contextual data such as temperature. It outlines how to capture impression and interaction events and prepare the data for reporting within Jouney Optimizer.

.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10
jira: KT-18526

---
# Use case description

This use case focuses on enabling reporting and performance analysis for offers delivered through Adobe Journey Optimizer (AJO). When offers are personalized and delivered based on contextual signals (such as weather or location), it's essential to track both impressions and user interactions to evaluate their effectiveness.

By capturing decisioning.propositionDisplay and decisioning.propositionInteract events via the Adobe Web SDK and mapping them to structured XDM schemas in Adobe Experience Platform (AEP), offer-level engagement data becomes available for analysis. This data can then be used in Customer Journey Analytics (CJA) to build dashboards, measure key metrics such as click-through rate (CTR), and compare offer performance across different audience segments and contextual conditions.

The goal is to provide clear, data-driven insights into how well personalized offers are performing and inform future decisioning strategies.



    
![reporting-dashboard](assets/dashboard-reporting.png)



## Pre-requisites for this tutorial

Before beginning, complete the [Personalizing Offers with Real-Time Weather Data tutorial.](https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/personalizing-offers-with-real-time-weather-data/introduction) It establishes all foundational components, including:

-   Web SDK integration

-   Offer setup in Adobe Journey Optimizer (AJO)

-   Decisioning using contextual attributes such as weather and temperature

-   Real-time offer rendering on a webpage

This tutorial builds directly on that implementation and focuses specifically on capturing offer impressions and interactions for reporting and analysis in Journey Optimizer.

