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
-----

## Create schemas and datasets

In this step you will create all required schemas and ingest data

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
   * Select *Luma Loyalty
   * Click [!UICONTROL Next]
   * Name: Luma Loyalty Data
   * Click [!UICONTROL Finish]
2. Open the *[!DNL luma-loyalty.json]* file you previously downloaded with a text editing program and find and replace *[!DNL wwfovlab065]* with you instance's name and save the file.

   You can easily find it in the structure of the the luma loyalty schema:

   ![Instance Name](/help/tutorial-configure-a-traing-sandbox/assets/instance-name.jpg)

3. Once the dataset is created, scroll down in the right panel, enable [!UICONTROL Error diagnostics] and [!UICONTROL partial ingestion], and drag and drop the *[!DNL luma-loyalty.json]* file to upload sample data to the dataset
4. Check the batch status to confirm the file ingested correctly. It will might take a couple of minutes for the data to be ingested - 375 records should have been ingested.

### Luma CRM

#### Create [!DNL Luma CRM] Schema

1. Create Schema
   * Display Name: *[!DNL Luma CRM]*
2. Add the following existing field groups:
   * Luma Identifiers
   * Demographic Details
   * Personal Contact Details
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
2. Open the *[!DNL luma-crm.json]* file you previously downloaded with a text editing program and find and replace *[!DNL wwfovlab065]* with you instance's name and save the file.
3. Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the *[!DNL luma-crm.json]* file to upload sample data to the dataset
4. Check the batch status to confirm the file ingested correctly - 500 records should have been ingested.

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
   * SKU (string)
   * name (string)
   * category (string)
   * color (string}
   * size (string)
   * price (double)
   * description (string)
   * productImageURL (string)
   * productURL (string)
   * stockQuantity (long)
5. Save schema

##### Create [!Luma Products Dataset]

1. Create dataset named *[!DNL Luma Products Data] from *[!DNL Luma Products] schema
   * Datasets > Create dataset > Create dataset from schema
2. Open the *[!DNL luma-products.json]* file you previously downloaded with a text editing program and find and replace *[!DNL wwfovlab065]* with you instance's name and save the file.
3. Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the *[!DNL luma-products.json]* file to upload sample data to the dataset
4. Check the batch status to confirm the file ingested correctly - 92 records should have been ingested.
-------

CONTINUE HERE

### Luma Product Interactions

#### Create [!DNL Luma Products Interactions] Schema

Create Luma Product Interactions schema and dataset – Schemas > Create schema > XDM Experience Event
Name the schema “Luma Product Interactions”
Add Luma Identifiers, Demographic Details and Personal Contact Details field groups
Set CRM ID field as primary identity using Luma CRM ID namespace
Set personalEmail.address and mobilePhone.number as identities using the standard Email and Phone namespaces, respectively
Enable for Profile and save

##### Create [!Luma Product Interactions Data] Dataset

Create dataset named “Luma Product Interactions Data” from Luma Product Interacticons schema – Datasets > Create dataset > Create dataset from schema
Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the “luma-crm.json” file to upload sample data to the dataset
Check the batch status to confirm the file ingested correctly

### Luma Product Inventory Events

#### Create [!DNL Luma Product Inventory Events] Schema

1.Create Luma Product Inventory Events schema and dataset – Schemas > Create schema > Browse > Create new class
Name the schema “Luma Product Inventory Events”
Add Luma Identifiers, Demographic Details and Personal Contact Details field groups
Set CRM ID field as primary identity using Luma CRM ID namespace
Set personalEmail.address and mobilePhone.number as identities using the standard Email and Phone namespaces, respectively
Enable for Profile and save

##### Create [!Luma Product Interactions Data] Dataset

1. Create dataset named “Luma Product Interactions Data” from Luma Product Interactions schema
2. Once the dataset is created, scroll down in the right panel, enable error logs and partial ingestion, and drag and drop the “luma-crm.json” file to upload sample data to the dataset
3. Check the batch status to confirm the file ingested correctly
