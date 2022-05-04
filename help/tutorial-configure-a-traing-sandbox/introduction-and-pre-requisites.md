---
title: Introduction and pre-requisites
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
role: Admin
level: Beginner
---
# Introduction and pre-requisites

Learn how to configure a sandbox for training purposes. This tutorial will give you a step by step guidance on how to configure a sandbox and ingest data. It has been designed for administrators and data engineers.

Once you complete this tutorial, you will have an environment available which allows Journey Managers to practice their Journey Optimizer knowledge without impacting your live data. The data in the training sandbox supports the hands-on exercises in the [Journey Optimizer Challenges](/help/challenges/introduction-and-pre-requisites.md) section.

## Prerequisites

Before you can begin to set up your training sandbox, you need to make sure that you have:

1. [Administrator rights](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/access-management.html?lang=en) 
   * To your organization's Journey Optimizer instance
   * **Journey Administrator** and **Data Manager** right for the training sandbox.
2. Dedicated Sandbox
    Create a development [sandbox](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/create-and-manage-sandboxes.html?lang=en) which will be used for training and exercise purposes only.
3. [Email Message presets](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/channel-configuration/set-up-email-channel.html?lang=en) for marketing and transactional messaging.
4. You need to know your organization's ID
   >[!TIP]
   > **Where can I find my organization ID?**
   >
   > Navigate to [Adobe Experience Cloud Home](https://experience.adobe.com/. Once you log in, your Organization's ID will be visible in your URL, it should look something like:
   > 
   > https://experience.adobe.com/#/@**your_organization's_id**/home.
   > 

5. Download the required data: [[!DNK luma-data.zip file]](/help/challenges/assets/luma-data.zip)
   1. Extract the zip file there should be three JSON files:
      * luma-crm.json
      * luma-loyalty.json
      * luma-products.json
      These files hold the dummy data that you will use to populate your sandbox with.
   2. Open each of the files and find and replace *[!DNL yourOrganizationID]* with your organization’s ID and save the files.

## What to Expect

This tutorial will walk you through the required [data set-up](/help/tutorial-configure-a-traing-sandbox/manual-data-set-up.md) and will guide you through [setting up events](/help/tutorial-configure-a-traing-sandbox/configure-events.md).

During the data set-up you will need to configure the required identity namespaces, create and configure five schemas and the datasets for these schemas, as well as upload the dummy data.

The event set up section will walk you trough setting up the three events that are required for the hands-on exercises in the [Journey Optimizer Challenges](/help/challenges/introduction-and-pre-requisites.md).

## Additional resources

* [Map identities](/help/set-up-data/map-identities.md)
* [Create a schema](help/set-up-data/create-schema.md)
* [Create datasets and ingest data](/help/set-up-data/create-datasets-and-ingest-data.md)
* [Create Events](/help/set-up-journeys/create-events.md)
