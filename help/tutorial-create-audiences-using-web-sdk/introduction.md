---
title: Create audiences using Web SDK
description: In this tutorial, you learn how to capture user preferences through a web form, send that data to Adobe Experience Platform (AEP) in real time, and dynamically qualify users into targeted audiences based on their selections. By combining Adobe Tags (Launch), the AEP Web SDK (Alloy.js), and Edge Segmentation, you enable immediate personalization opportunities for customers interested in Stocks, Bonds, or Certificates of Deposit (CDs).
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-04-30
jira: KT-17923
exl-id: ebaa3aa5-0a08-43fd-8d06-8e4b5d8dee05
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
