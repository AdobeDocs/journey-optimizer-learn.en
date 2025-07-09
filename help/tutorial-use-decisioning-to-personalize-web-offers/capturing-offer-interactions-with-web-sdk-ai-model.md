---
title: Capturing Offer Interactions with Adobe Web SDK for AI Model Training
description: This article focuses on capturing user interaction data—such as offer impressions and clicks—using the Adobe Experience Platform Web SDK (alloy.js). This data serves as the foundation for training AI models in Adobe Journey Optimizer (AJO) to intelligently rank offers based on user behavior and contextual signals..
feature: Decisioning
topic: Integrations
role: User
level: Beginner
doc-type: Article
last-substantial-update: 2025-07-08
jira: KT-18451

---

# Capturing Offer Interactions with Adobe Web SDK for AI Model Training

This article demonstrates how to capture offer interaction events (like impressions or clicks) using the Adobe Experience Platform Web SDK by calling alloy("sendEvent", ...) directly in your JavaScript code. The data will be ingested into AEP and used to train AI models in Adobe Journey Optimizer (AJO) for smarter offer ranking based on real-time behavior.

## Prerequisites

Before you begin, ensure the following are in place:

-   A working Adobe Launch property with the Adobe Experience Platform Web SDK extension installed.

-   A [datastream](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/decisioning/experience-decisioning/collect-event-data/create-dataset
) configured and mapped to your AEP sandbox.

-   A website where Launch is deployed.


## Create Schema and Dataset for Offer Interaction Events

To collect experience events, you first need to create a dataset where these events will be sent.

Follow the steps mentioned in this [article to create the required schema and dataset](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/decisioning/experience-decisioning/collect-event-data/create-dataset)

## Create a Datastream in AEP

![data-stream](assets/ai-model-data-stream.png)
Add Adobe Experience Platform Service to the datastream
![data-stream-service](assets/data-stream-service.png)

## Configure Adobe Experience Platform Tag with the Web SDK

In the extension settings:

Configure Adobe Experience Platform Web SDK extension to use the Datastream created
