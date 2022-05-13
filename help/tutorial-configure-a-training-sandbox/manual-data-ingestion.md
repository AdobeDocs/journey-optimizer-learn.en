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

 You will create five [!UICONTROL datasets] based on the Luma !UICONTROL schemas] you created in the previous section. Once the datasets have been created you will ingest data from the JSON files you downloaded and modified (see [Introduction and pre-requisites](/help/tutorial-configure-a-training-sandbox/introduction-and-pre-requisites.md) section for instructions).

Follow the step by step instructions to create the first [!UICONTROL schema]: 

1. Create a dataset named *[!DNL Luma Loyalty Data]* from [!DNL Luma Loyalty schema]
   * From the left navigation select [!UICONTROL Datasets] > [!UICONTROL Create dataset] > [!UICONTROL Create dataset from schema]
   * Select *[!DNLLuma Loyalty]*
   * Click [!UICONTROL Next]
   * Name: [!DNL Luma Loyalty Data]
   * Click [!UICONTROL Finish]
  
2. Once the [!UICONTROL dataset], is created, scroll down in the right panel, enable [!UICONTROL Error diagnostics] and [!UICONTROL partial ingestion], and drag and drop the *[!DNL luma-loyalty.json]* file to upload sample data to the dataset
3. Check the batch status to confirm the file ingested correctly. It might take a couple of minutes for the data to be ingested - 375 records should have been ingested.

Next, create the fours additional [!UICONTROL datasets]:

| Dataset Name                         | From Schema                         | File to ingest              | Records |
| -------------------------------------| ----------------------------------- | ----------------------------| ------- |
| *[!DNL Luma Loyalty Data]* (done)    | *[!DNL Luma Loyalty schema]*        |  *[!DNL luma-loyalty.json]* | 375     |
| [!DNL Luma CRM Data]                 | [!DNL Luma CRM schema]              | [!DNL luma-crm.json]        | 500     |
| [!DNL Luma Products Data]            | [!DNL Luma Products]                |  [!DNL luma-products.json]  | 92      |
| [!DNL Luma Product Interactions Data]| [!DNL Luma Product Interactions]    |   [!DNL luma-crm.json]      | 500     |
| [!DNL Luma Product Inventory Events] | [!DNL Luma Product Inventory Events]|  [!DNL luma-crm.json]       | 500     |
