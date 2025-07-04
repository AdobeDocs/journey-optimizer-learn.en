---
title: Use Decisioning to personalize web offers
description: Learn how to use Journey Optimizer (AJO) Decisioning to deliver personalized offers on a web page by leveraging audience segmentation built in Experience Platform (AEP).
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-05
jira: KT-17728
exl-id: 382ee746-e8cd-4843-bfe9-913df8914136
---
# Use Decisioning to personalize web offers

This tutorial builds on a previously created audience segmentation setup using the Adobe Experience Platform (AEP) Web SDK. In the [previous tutorial](https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/create-audiences-using-web-sdk/introduction), user preferences, such as interest in Stocks, Bonds, or Certificates of Deposit (CDs) were captured and used to segment individuals into targeted audiences within Experience Platform. This tutorial builds on that foundation by using Adobe Journey Optimizer (AJO) Decisioning to deliver personalized financial offers to those audiences in real time, enhancing both engagement and conversion outcomes.


## Pre-requisites for this tutorial

* Access to Experience Platform

* Basic understanding of Experience Platform concepts (Profiles, Audiences, Datasets)

* Familiarity with Journey Optimizer

* Basic JavaScript knowledge (reading and writing simple functions)

* Ability to use Browser DevTools (Console and Network tabs)


## Goal

This tutorial guides you through delivering personalized investment offers, such as Stocks, Bonds, or CDs, on a website using Journey Optimizer. By leveraging audience segmentation and Decisioning strategies, you learn how to ensure that each visitor sees the most relevant offer based on their preferences.

## Tools used

* Adobe Experience Platform (AEP)
* Adobe Journey Optimizer (AJO)
* Adobe Experience Platform Tags
* AEP Web SDK (`Alloy.js`)
* AEP Edge Segmentation
* A webpage to display the offers
