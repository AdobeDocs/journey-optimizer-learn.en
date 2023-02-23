---
title: Configure a training sandbox - introduction
description: Learn how to configure a sandbox for training purposes. Go through the steps required to configure the schemas, ingest sample data, and create events.
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
hide: yes
exl-id: 8fa673de-9be9-4ab2-94cf-cfa8ac518223
---
# Configure a training sandbox - Introduction and prerequisites

![Banner Tutorial- Configure a training sandbox](./assets/ajo-banner-configure-training-sandbox.png)

This tutorial is designed for administrators and data engineers who are tasked with providing an Adobe Journey Optimizer training environment. Learn the steps required to configure the schemas, ingest sample data, and create events. You also create three test profiles that allow the learners to check their work.

The provided sample data is based on a fictional athletic apparel company called _[!DNL Luma]_. [!DNL Luma] has stores in multiple countries, an online presence with a website, and mobile apps. [!DNL Luma] uses Adobe Journey Optimizer to deliver connected, contextual, and personalized experiences to their customers.

At the end of this tutorial, you have a sandbox that supports the [!DNL Luma] use cases covered in the hands-on exercises in the [Journey Optimizer Challenges](/help/challenges/introduction-and-prerequisites.md) section.

## Prerequisites

Before you can begin to set up your training sandbox, ensure that you have:

1. A dedicated development [sandbox](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/create-and-manage-sandboxes.html?lang=en).

1. [Email Message presets](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/set-up-email-channel.html?lang=en) configured for marketing and transactional messaging.

1. **[!UICONTROL Journey Administrator]** and **[!UICONTROL Data Manager]** rights for the training sandbox.

1. Your [organization ID](https://experienceleague.adobe.com/docs/core-services/interface/administration/organizations.html?lang=en).

1. The JSON files with the sample data, configured to your Journey Optimizer instance:

   1. Download the `luma-sample-data.zip` file [here](/help/tutorial-configure-a-training-sandbox/assets/luma-data/luma-sample-data.zip), which contains all JSON files required for this tutorial.

   1. From your downloads folder, move the `luma-data.zip` file to the desired location on your computer, and unzip it.

      These files hold the sample data for your  training sandbox.

   1. Open each file and find **`yourOrganizationID`** and replace it with your [organization ID](https://experienceleague.adobe.com/docs/core-services/interface/administration/organizations.html?lang=en).
   
   1. Save the files.

## Let's get started

Start with the [Manual data set up](/help/tutorial-configure-a-training-sandbox/manual-data-set-up.md). 

In this step, you define the require data structure. After you complete the data set up, you can ingest data into your sandbox, then set up events.
