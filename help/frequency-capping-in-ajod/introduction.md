---
title: Implement frequency capping on Adobe Journey Optimizer (AJO) Offers delivered via AJO Decisioning
description: This tutorial extends an existing Adobe Journey Optimizer (AJO) implementation by enabling frequency capping on offers served using AJO Decisioning. It outlines how to capture impression and interaction events used in frequency capping.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-01-21
jira: KT-18526
exl-id: ae74485f-9ea1-428d-9c07-5db0c5cf93fb
---
# Implement frequency capping on Adobe Journey Optimizer (AJO) Offers delivered via AJO Decisioning

This tutorial demonstrates how to apply frequency capping to offers in Adobe Journey Optimizer to control how often users see the same offer over time.

This tutorial assumes you have already set up an AJO campaign by following the  [tutorial on personalizing offers based on weather conditons](https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/personalizing-offers-with-real-time-weather-data/introduction)

By capturing decisioning.propositionDisplay and decisioning.propositionInteract events through the Adobe Web SDK and mapping them to XDM schemas in Adobe Experience Platform (AEP), Adobe Journey Optimizer can accurately track offer impressions and interactions, enabling frequency capping to limit how often an offer is shown to a user.

## Pre-requisites for this tutorial

Before proceeding, ensure that you have a valid Adobe Journey Optimizer campaign using  Decisioning that is actively serving offers to a web surface.

This tutorial assumes that offer delivery is already working and focuses exclusively on configuring and validating frequency capping behavior.




