---
title: Manual Data Set-Up
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
role: Admin
level: Beginner
---

# Manual Data set-up

In this step you will create identity the required identity namespaces and five schemas and the respective data sets. It is important that you follow the order given in this tutorial.

## Create identity namespaces

1. In the left navigation go to *[!UICONTROL Customer] > [!UICONTROL Identities] > [!UICONTROL Create identity namespace]*
1. Create the following identity namespaces:

    | Display Name | Identity Symbol | Type |
    |---|---|---|
    | [!DNL Luma Loyalty ID] | [!DNL lumaLoyalty] | [!DNL Cross-device ID] |
    | [!DNL Luma CRM ID] | [!DNL lumaCRM] | [!DNL Cross-device ID] |
    | [!DNL Luma Product SKU] | [!DNL lumaProduct] | [!DNL Non-people identifier] |

Watch the video tutorial [Map identities](/help/set-up-data/map-identities.md) for more information on how to create identity namespaces.

-----

## Create schemas and datasets

In this step you will create five required schemas and ingest data.

Watch the video tutorials [Create a schema](help/set-up-data/create-schema.md) and [Create datasets and ingest data](/help/set-up-data/create-datasets-and-ingest-data.md) for more information on how to create schemas and datasets.

### Luma Loyalty

#### Create [!DNL Luma Loyalty] Schema

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
      * [! DNL Loyalty ID] > [!UICONTROL Field properties] > [!UICONTROL Identity]: Set [! DNLLoyalty ID] field as **[!UICONTROL primary identity]** using [!DNL Luma Loyalty ID] [!UICONTROL namespace] -> Apply
5. Set [!DNL CRM ID] field as an identity using Luma CRM ID namespace
   * Enable the [!DNL Luma Loyalty] schema for [!UICONTROL Profile] -> Apply
6. Save

#### Create [!DNL Luma Loyalty] Dataset
 
1. Create a dataset named *[!DNL Luma Loyalty Data]* from [!DNL Luma Loyalty schema]
   * [!UICONTROL Datasets] > [!UICONTROL Create dataset] > [!UICONTROL Create dataset from schema]
   * Select *[!DNLLuma Loyalty]*
   * Click [!UICONTROL Next]
   * Name: [!DNL Luma Loyalty Data]
   * Click [!UICONTROL Finish]
  
2. Once the dataset is created, scroll down in the right panel, enable [!UICONTROL Error diagnostics] and [!UICONTROL partial ingestion], and drag and drop the *[!DNL luma-loyalty.json]* file to upload sample data to the dataset
3. Check the batch status to confirm the file ingested correctly. It might take a couple of minutes for the data to be ingested - 375 records should have been ingested.

### Luma CRM

#### Create [!DNL Luma CRM] Schema

1. Create Schema
   * Display Name: *[!DNL Luma CRM]*
2. Add the following existing field groups:
   * [!DNL Luma Identifiers]
   * [!UICONTROL Demographic Details]
   * [!UICONTROL Personal Contact Details]
3. Set identities:
   * Luma Identifiers:
     * Set *[!DNL CRM ID]* field as primary identity using *[!DNL Luma CRM ID]* namespace -> Apply
   * Personal Contact Details
     * Set *[!DNL mobilePhone.number]* as identities using the [!UICONTROL Phone] namespace -> Apply
     * Set *[!DNL personalEmail.address]* as identities using the standard [!UICONTROL Email] and Phone namespace -> Apply

      ![xdm-profile-schema](/help/tutorial-configure-a-traing-sandbox/assets/xdm-profile-schema.jpg)

4. Enable the [!DNL XDM Profile] schema for Profile
5. Save

##### Create [!DNL Luma CRM Data] Dataset

1. Create dataset:
   Name *[!DNL Luma CRM Data]* from *[!DNL Luma CRM schema]*
2. Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the *[!DNL luma-crm.json]* file to upload sample data to the dataset
3. Check the batch status to confirm the file ingested correctly - 500 records should have been ingested.

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
