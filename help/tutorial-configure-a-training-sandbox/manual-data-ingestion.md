---
title: Manual data ingestion
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
---

# Manual data ingestion

This section guides you through the required steps to ingest sample data

> [!TIP]
> Watch the video tutorial [Map identities](/help/set-up-data/map-identities.md) before you begin.





### Luma Products

#### Create [!DNL Luma Products] Schema

1. Schemas > Create schema > Browse all schema types> Create new class
   * Display name: *[!DNL Luma Products] 
   * Assign class
2. Name the schema “Luma Products”
3. Create a new [!UICONTROL field group]
   * Display name: *[!DNL Luma Product Info]* 
   * Add [!UICONTROL field group]
4. Add a *[!DNL Product (product)]* object to the [!UICONTROL field group], and within the Product object add the following fields:
   * [!DNL SKU (string)]
   * [!DNL name (string)]
   * [!DNL category (string)]
   * [!DNL color (string)]
   * [!DNL size (string)]
   * [!DNL price (double)]
   * [!DNL description (string)]
   * [!DNL productImageURL (string)]
   * [!DNL productURL (string)]
   * [!DNL stockQuantity (long)]
5. Save schema

##### Create [!Luma Products Dataset]

1. Create dataset named *[!DNL Luma Products Data] from *[!DNL Luma Products] schema
   * [!UICONTROL Datasets] > [!UICONTROL Create dataset] > [!UICONTROL Create dataset from schema]
2. Once the dataset is created, scroll down in the right panel, enable [!UICONTROL error logs] and [!UICONTROL partial ingestion], and drag and drop the *[!DNL luma-products.json]* file to upload sample data to the dataset
3. Check the [!UICONTROL batch status] to confirm the file ingested correctly - 92 records should have been ingested.

### Luma Product Interactions

#### Create [!DNL Luma Products Interactions] Schema

1. [!UICONTROL Schemas] > [!UICONTROL Create schema] > [!UICONTROL XDM Experience Event]
   * [!UICONTROL Display Name]: *[!DNL Luma Product Interactions]*
2. Add the following field groups:
   * [!DNL Luma Identifiers]
   * [!UICONTROL Demographic Details]
   * [!UICONTROL Personal Contact Details]
3. Set [!DNL CRM ID] field as [!UICONTROL primary identity} using [!DNL Luma CRM ID] [!UICONTROL namespace]
4. Set *[!DNL personalEmail.address]* and *[!DNL mobilePhone.number]* as [!UICONTROL  identities] using the standard [!UICONTROL Email] and [!UICONTROL Phone] [!UICONTROL namespaces], respectively.
5. [!UICONTROL Enable for Profile] and save

##### Create [!DNL Luma Product Interactions Data] Dataset

1. Create dataset named *[!DNL Luma Product Interactions Data] from *[!DNL Luma Product Interacticons] schema
   * [!UICONTROL Datasets] > [!UICONTROL Create dataset] > [!UICONTROL Create dataset from schema]
2. Once the dataset is created, scroll down in the right panel, enable [!UICONTROL error logs] and [!UICONTROL partial ingestion], and drag and drop the *[!DNL luma-crm.json]* file to upload sample data to the dataset
3. Check the [!UICONTROL batch status] to confirm the file ingested correctly - 500 records should have been ingested.

### Luma Product Inventory Events

#### Create [!DNL Luma Product Inventory Events] Schema

1. [!UICONTROL Schemas] > [!UICONTROL Create schema] > [!UICONTROL Browse] > [!UICONTROL Create new class]
   * [!UICONTROL Display Name]: *[!DNL Luma Product Inventory Events]*
2. Add the following field groups:
   * [!DNL Luma Identifiers]
   * [!UICONTROL Demographic Details]
   * [!UICONTROL Personal Contact Details]
3. Set [!DNL CRM ID] field as [!UICONTROL primary identity} using [!DNL Luma CRM ID] [!UICONTROL namespace]
4. Set *[!DNL personalEmail.address]* and *[!DNL mobilePhone.number]* as [!UICONTROL  identities] using the standard [!UICONTROL Email] and [!UICONTROL Phone] [!UICONTROL namespaces], respectively.
5. [!UICONTROL Enable for Profile] and save

##### Create [!Luma Product Inventory Events] Dataset

1. Create dataset named *[!DNL Luma Product Inventory Events] from *[!DNL Luma Product Inventory Events] schema
   * [!UICONTROL Datasets] > [!UICONTROL Create dataset] > [!UICONTROL Create dataset from schema]
2. Once the dataset is created, scroll down in the right panel, enable [!UICONTROL error logs] and [!UICONTROL partial ingestion], and drag and drop the *[!DNL luma-crm.json]* file to upload sample data to the dataset
3. Check the [!UICONTROL batch status] to confirm the file ingested correctly - 500 records should have been ingested.



### Create [!UICONTROL Datasets]

In this step you will create five [!UICONTROL datasets] based on the [!UICONTROL schemas] you created in the previous step. Once the datasets have been created you will ingest data from the JSON files you downloaded and modified (see [Introduction and pre-requisites](/help/tutorial-configure-a-training-sandbox/introduction-and-pre-requisites.md) section for instructions).

> [!TIP]
> For more guidance on how to create [!UICONTROL datasets], watch the video tutorial: [Create datasets and ingest data](/help/set-up-data/create-datasets-and-ingest-data.md).

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

#### Schemas

**Schema:*[!DNL Luma CRM]***

1. Add the following existing field groups:
* [!DNL Luma Identifiers]
* [!UICONTROL Demographic Details]
* [!UICONTROL Personal Contact Details]

2. Set identities:
* [!UICONTROL Primary indentity]:
   * [!DNL Luma Identifiers]: *[!DNL CRM ID]*, using *[!DNL Luma CRM ID]* namespace
* [!UICONTROL Indentity (not primary!)]
  *  [!UICONTROL Personal Contact Details]:
   * *[!DNL mobilePhone.number]*
      [!UICONTROL Identity namespace]: [!UICONTROL Phone]
   * *[!DNL personalEmail.address]* 
      [!UICONTROL Identity namespace]:[!UICONTROL Phone]
3. Enable the [!DNL XDM Profile] schema for Profile



