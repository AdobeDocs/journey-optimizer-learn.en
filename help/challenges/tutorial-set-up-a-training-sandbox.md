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

1. **Left navigation**:  Select *[!UICONTROL Data Management] > [!UICONTROL Schemas] > [!UICONTROL Create schema] > [!UICONTROL XDM Individual Profile])*
2. **[!UICONTROL Add field groups] screen** (you can also add the field group on the [!UICONTROL Schemas] screen ): Select *[!UICONTROL Create new field group]* > [!UICONTROL Displayname]: [!DNL Luma Identifiers] > [!UICONTROL Add new fiedlgroup]
3. [!UICONTROL Schemas] screen, in the *[!UICONTROL Composition]* section : 
   1. Select the [!UICONTROL Schema]: Name the schema *[!DNL Luma Loyalty]*
4. Add and modify [!UICONTROL Field groups]:
   1. [!DNL Luma Identifiers] [!UICONTROL field group]:
      1. Add [!DNL System Identifier) ([!DNL systemIdentifier]) object to [!DNL Luma Identifiers] [!UICONTROL field group] 
      2. Within the [!DN System Identifier] object, add **[!DNL CRM ID] ([!DNL crmId])** and **[!DNL Loyalty ID] ([!DNL loyaltyId)]** fields
   2. Add Demographic Details, Personal Contact Details, and Loyalty Details field groups
5. Set Loyalty ID field as primary identity using Luma Loyalty ID namespace
6. Set CRM ID field as an identity using Luma CRM ID namespace
7. Enable for Profile and save
8.  Create dataset named “Luma Loyalty Data” from Luma Loyalty schema – Datasets > Create dataset > Create dataset from schema
9.  Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the “luma-loyalty.json” file to upload sample data to the dataset
10. Check the batch status to confirm the file ingested correctly
