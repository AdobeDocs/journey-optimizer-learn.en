---
title: Set up a training sandbox
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
role: Admin
level: Beginner
---
# Manually set up a training sandbox

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
4. Download the required data: [[!DNK Luma Data JSON files]](/help/challenges/assets/luma-data.zip) and extract them there should be three filed:
   * luma-crm.json
   * luma-loyalty.json
   * luma-products.json
These files hold the data that you will populate your sandbox with.

## Data set-up

### Create identity namespaces

1. In the left navigation go to *[!UICONTROL Customer] > [!UICONTROL Identities] > [!UICONTROL Create identity namespace]*
1. Create the following identity namespaces:

    | Display Name | Identity Symbol | Type |
    |---|---|---|
    | [!DNL Luma Loyalty ID] | [!DNL lumaLoyalty] | [!DNL Cross-device ID] |
    | [!DNL Luma CRM ID] | [!DNL lumaCRM] | [!DNL Cross-device ID] |
    | [!DNL Luma Product SKU] | [!DNL lumaProduct] | [!DNL Non-people identifier] |

### Create schemas and datasets

#### Data Set: [!DNL Luma Loyalty]

##### Create [!DNL Luma Loyalty] Schema

1. Create the schema:
   * **Left navigation**: *[!UICONTROL Data Management] > [!UICONTROL Schemas] > [!UICONTROL Create schema] > [!UICONTROL XDM Individual Profile])* (click cancel on the [!UICONTROL Add Field groups] screen)
   * Display name: **[!DNL Luma Loyalty]**
2. Create new [!UICONTROL field group]: **[!DNL Luma Identifiers]**
      * Add [!DNL System Identifier] field to [!DNL Luma Identifiers] [!UICONTROL field group]
         Fieldname:[!DNL systemIdentifier]
         Type: [!UICONTROL Object]
      * Within the [!DN System Identifier] object, add **[!DNL CRM ID] ([!DNL crmId])** and **[!DNL Loyalty ID] ([!DNL loyaltyId)]** fields, type [!UICONTROL String]
3. Add existing [!UICONTROL field groups]:
      * Demographic Details
      * Personal Contact Details
      * Loyalty Details
4. Set Loyalty ID field as primary identity using Luma Loyalty ID namespace:
      * [! DNL Loyalty ID] > [!UICONTROL Field properties] > [!UICONTROL Identity]: Set [! DNLLoyalty ID] field as **[!UICONTROL primary identity]** using [!DNL Luma Loyalty ID] [!UICONTROL namespace]
5. Set [!DNL CRM ID] field as an identity using Luma CRM ID namespace
   * Enable the [!DNL Luma Loyalty] schema for [!UICONTROL Profile]  
6. Save

##### Create [!DNL Luma Loyalty] Dataset
 
1. Create a dataset named *[!DNL Luma Loyalty Data]* from [!DNL Luma Loyalty schema]
   * [!UICONTROL Datasets] > [!UICONTROL Create dataset] > [!UICONTROL Create dataset from schema]
   * Select *Luma Loyalty
   * Click [!UICONTROL Next]
   * Name: Luma Loyalty Data
   * Click [!UICONTROL Finish]
2. Once the dataset is created, scroll down in the right panel, enable [!UICONTROL Error diagnostics] and [!UICONTROL partial ingestion], and drag and drop the *[!DNL luma-loyalty.json]* file to upload sample data to the dataset
3. Check the batch status to confirm the file ingested correctly. It will might take a couple of minutes for the data to be ingested.

#### Create [!DNL XDM Profile) Schema

1. Create Schema
   * Display Name: *[!DNLLuma CRM]*
2. Add Field Groups:
   * Luma Identifiers
   * Demographic Details
   * Personal Contact Details
3. Set CRM ID field as primary identity using Luma CRM ID namespace
4. Set personalEmail.address and mobilePhone.number as identities using the standard Email and Phone namespaces, respectively
5. Enable for Profile
6. Save

##### Create [!DNL Luma CRM Data] Dataset





Create dataset Name “Luma CRM Data” from Luma CRM schema – Datasets > Create dataset > Create dataset from schema
Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the “luma-crm.json” file to upload sample data to the dataset
Check the batch status to confirm the file ingested correctly
