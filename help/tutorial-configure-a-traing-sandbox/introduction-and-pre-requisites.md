---
title: Introduction and pre-requisites
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
role: Admin
level: Beginner
---
# Introduction and pre-requisites

Learn how to configure a sandbox for training purposes. This tutorial will give you step by step guidance on how to ingest training data into a sandbox and how to configure it.

## Objective

Have a dedicated environment for training purposes available. We will be populating the sandbox with dummy profiles based on the retail use case.

## Prerequisites

Before you can begin to set up your training sandbox, you need to make sure that you have:

1. [Administrator rights](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/access-management.html?lang=en) 
   *  To your organization's Journey Optimizer instance
   *  **Journey Administrator** and **Data Manager** right for the training sandbox.
2. Dedicated Sandbox
    Create a development [sandbox](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/create-and-manage-sandboxes.html?lang=en) which will be used for training and exercise purposes only.
3. [Email Message presets](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/channel-configuration/set-up-email-channel.html?lang=en) for marketing and transactional messaging.
4. Download the required data: [[!DNK Luma Data JSON files]](/help/challenges/assets/luma-data.zip)
   1. Extract the zip file there should be three files:
      * luma-crm.json
      * luma-loyalty.json
      * luma-products.json
   These files hold the dummy data that you will use to populate your sandbox with.

## What to expect

### Data Set-Up

This part of the tutorial is divided into two sections:

1. [The manual data configuration](/help/tutorial-configure-a-traing-sandbox/manual-data-set-up.md)
2. Automated configuration with a script

