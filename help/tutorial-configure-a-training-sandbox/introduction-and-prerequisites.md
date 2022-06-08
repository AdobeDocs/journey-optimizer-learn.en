---
title: Introduction and prerequisites
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
---

# Configure a training sandbox - Introduction and prerequisites

![Banner Tutorial- Configure a training sandbox](./assets/ajo-banner-configure-training-sandbox.png)

This tutorial is designed for administrators and data engineers who are tasked with providing an Adobe Journey Optimizer training environment. It walks you through all the steps required to configure the schemas, ingest sample data, and create events.

The provided sample data is based on a fictional athletic apparel company called Luma. Luma has stores in multiple countries, an online presence with a website, and mobile apps. Luma uses Adobe Journey Optimizer to deliver connected, contextual, and personalized experiences to their customers.

At the end of this tutorial, you will have a sandbox that supports the Luma use cases covered in the hands-on exercises in the [Journey Optimizer Challenges](https://experienceleague.adobe.com/docs/journey-optimizer-learn/challenges/introduction-and-prerequisites.html) section.

## Prerequisites

Before you can begin to set up your training sandbox, you must make sure that you have:

1. A dedicated development [sandbox](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/create-and-manage-sandboxes.html?lang=en).
2. [Email Message presets](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/channel-configuration/set-up-email-channel.html?lang=en configured for marketing and transactional messaging.
3. **Journey Administrator** and **Data Manager** rights for the training sandbox.
4. Your organization's ID.

   >[!TIP]
   >
   > **Where can I find my organization ID?**
   >
   > Navigate to [Adobe Experience Cloud Home](https://experience.adobe.com). Once you log in, your Organization's ID is visible in your URL, it should look something like:
   >
   > `https://experience.adobe.com/#/@your_organization's_id/home`
   >

5. The JSON files with the sample data, configured to your Journey Optimizer instance:

   1. Download the [[!DNL luma-data.zip file]](/help/tutorial-configure-a-training-sandbox/assets/luma-data.zip), which contains all Jason files required for this tutorial.
   1. From your downloads folder, move the `luma-data.zip` file to the desired location on your computer, and unzip it.
   1. There should be three JSON files: luma-crm.json, luma-loyalty.json, luma-products.json.
      These files hold the sample data that you will ingest into your sandbox.
   1. Open each of the files and find **`yourOrganizationID`** and replace it with your **organization’s ID**.
   1. Save the files.

## Let's get started

Start with the [Manual data set up](/help/tutorial-configure-a-training-sandbox/manual-data-set-up.md). In this step you will configure the Define the require data structure. Once you have completed the data set up, you will ingest data into your sandbox and then set up events.
