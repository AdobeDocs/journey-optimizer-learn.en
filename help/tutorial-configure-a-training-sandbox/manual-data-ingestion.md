---
title: Manual data ingestion
description: Create data sets and ingest sample data
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
---

# Manual data ingestion

This section guides you through the required steps to create data sets and ingest sample data

> [!TIP]
> Watch the video tutorial [Create datasets and ingest data](/help/set-up-data/create-datasets-and-ingest-data.md) before you begin.

 You will create five [!UICONTROL datasets] based on the Luma !UICONTROL schemas] you created in the [previous section](/help/tutorial-configure-a-training-sandbox/manual-data-set-up.md). Once the datasets have been created you will ingest data from the JSON files you downloaded and modified (see [Introduction and pre-requisites](/help/tutorial-configure-a-training-sandbox/introduction-and-pre-requisites.md) section for instructions).

Follow the step by step instructions to create the first [!UICONTROL schema]:

1. Create a dataset named *[!DNL Luma Loyalty Data]* from [!DNL Luma Loyalty schema]
   1. From the left navigation, under [!UICONTROL DATA MANAGEMENT], select [!UICONTROL Datasets]
   2. Select [!UICONTROL Create dataset]
   3. On the next page select [!UICONTROL Create dataset from schema]
   4. Select *[!DNL Luma Loyalty]*
   5. Click [!UICONTROL Next]
   6. Name: `Luma Loyalty Data`
   7. Click [!UICONTROL Finish]
  
Once the [!UICONTROL dataset] is created, on the *[!DNL Luma Loyalty Data]* screen:
1.  Scroll down the the bottom of  the right panel and enable 
    * [!UICONTROL Error diagnostics] and 
    * [!UICONTROL partial ingestion]
2. Drag and drop the *[!DNL luma-loyalty.json]* file to upload sample data to the dataset
3. Refresh the page and check the batch status to confirm the file ingested correctly: 375 records should have been ingested. - It might take a couple of minutes for the data to be ingested.

>!TIP
>If the batch fails, make sure that you replaced the organization ID in the *[!DNL luma-loyalty.json]* file with your own organization's ID!

Next, create the fours additional [!UICONTROL datasets]:

| Dataset Name                         | From Schema                         | File to ingest              | Records |
| -------------------------------------| ----------------------------------- | ----------------------------| ------- |
| `Luma CRM Data`                 | [!DNL Luma CRM]              | [!DNL luma-crm.json]        | 500     |
| `Luma Products Data`            | [!DNL Luma Products]                |  [!DNL luma-products.json]  | 92      |
| `Luma Product Interactions Data`| [!DNL Luma Product Interactions]    |   none      |      |
|`Luma Product Inventory Events` | [!DNL Luma Product Inventory Events]|  none       |    |

## Next...

[Configure events](/help/tutorial-configure-a-training-sandbox/configure-events.md)
