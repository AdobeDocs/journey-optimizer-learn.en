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
4. Download the required data: [[!DNK JSON files]](/help/challenges/assets/luma-data.zip)

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

1. **Left navigation**:  Select *[!UICONTROL Data Management] > [!UICONTROL Schemas] > [!UICONTROL Create schema] > [!UICONTROL XDM Individual Profile])* (click cancel on the [!UICONTROL Add Field groups] screen)
2. [!UICONTROL Schemas] screen, in the *[!UICONTROL Composition]* section : 
3. !UICONTROL Schemas] screen: Name the schema **[!DNL Luma Loyalty]**
4. Create new [!UICONTROL field group]: **[!DNL Luma Identifiers]**
      1. Add [!DNL System Identifier) to [!DNL Luma Identifiers] [!UICONTROL field group] : 
        Fieldname:([!DNL systemIdentifier]) 
        Type: [!UICONTROL Object]
      2. Within the [!DN System Identifier] object, add **[!DNL CRM ID] ([!DNL crmId])** and **[!DNL Loyalty ID] ([!DNL loyaltyId)]** fields, type [!UICONTROL String]
5. Add existing [!UICONTROL field groups]: 
   * Demographic Details
   * Personal Contact Details
   * Loyalty Details
6. Select the [!UICONTROL Schema]:
   * [! DNL Loyalty ID] > [!UICONTROL Field properties] > [!UICONTROL Identity]: Set [! DNLLoyalty ID] field as **[!UICONTROL primary identity]** using [!DNL Luma Loyalty ID] [!UICONTROL namespace]
   * [!DNL CRM ID] > [!UICONTROL Field properties] > [!UICONTROL Identity]: Set [!DNL CRM ID] field as an [!UICONTROL identity] using [!DNL Luma CRM ID] [!UICONTROL namespace]
7. Enable the [!DNL Luma Loyalty] schema for [!UICONTROL Profile] and save

##### Create [!DNL Luma Loyalty] Dataset
 
 1. Create dataset named “Luma Loyalty Data” from Luma Loyalty schema – Datasets > Create dataset > Create dataset from schema
 2. Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the “luma-loyalty.json” file to upload sample data to the dataset
 3. Check the batch status to confirm the file ingested correctly
