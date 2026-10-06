---
title: Create audiences using Web SDK
description: In this tutorial, you learn how to capture user preferences through a web form, send that data to Adobe Experience Platform (AEP) in real time, and dynamically qualify users into targeted audiences based on their selections. By combining Adobe Tags (Launch), the AEP Web SDK (Alloy.js), and Edge Segmentation, you enable immediate personalization opportunities for customers interested in Stocks, Bonds, or Certificates of Deposit (CDs).
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-04-30T00:00:00.000Z
jira: KT-17923
exl-id: ebaa3aa5-0a08-43fd-8d06-8e4b5d8dee05
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: d2971708-e780-44bb-9e2a-72f139796afd
    internal-label: Customer
subfeature_v2:
  - id: b32bb433-f8c6-4931-8e52-e657230a3bf2
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Create audiences using Web SDK

In this tutorial, you learn how to capture user preferences through a web form, send that data to Adobe Experience Platform (AEP) in real time, and dynamically qualify users into targeted audiences based on their selections. By combining Adobe Tags (Launch), the AEP Web SDK (Alloy.js), and Edge Segmentation, you enable immediate personalization opportunities for customers interested in Stocks, Bonds, or Certificates of Deposit (CDs).

## Pre-requisites for This Tutorial

*   Access to Adobe Experience Platform

*   Basic understanding of Adobe Experience Platform concepts (Profiles, Audiences, Datasets)

*   Familiarity with Adobe Tags (Launch) — setting up Data Elements and Rules

*   Basic JavaScript knowledge (reading and writing simple functions)

*   Ability to use browser DevTools (Console and Network tabs)


## GOAL

The objective of this tutorial is to build and qualify three distinct audiences in Adobe Experience Platform (AEP):

*   Customers interested in Stocks

*   Customers interested in Bonds

*   Customers interested in CDs

Users submit their preferences through a web form, and those preferences are ingested via the AEP Web SDK using Adobe Launch, enabling real-time audience qualification.

## Tools Used

*   Adobe Experience Platform (AEP)

*   Adobe Experience Platform Tags

*   AEP Web SDK (Alloy.js)

*   AEP Edge Segmentation

*   A webpage with a preference form
