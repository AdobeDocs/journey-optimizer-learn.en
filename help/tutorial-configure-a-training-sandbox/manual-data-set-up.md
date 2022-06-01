---
title: Manual Data Set-Up
description: Manual data management configuration and the data ingestion
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
---

# Manual Data set-up

This section guides you through the manual data management configuration.

* Create namespaces
* Define the required structure of the data by creating the five required [[!UICONTROL schemas]](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html)
   1. [!DNL Luma Loyalty]
   2. [!DNL Luma Products]
   3. [!DNL Luma CRM]
   4. [!DNL Luma Product Interactions]
   5. [!DNL Luma Product Inventory Events]

>[!TIP]
>
>Watch the video tutorial [Map identities](/help/set-up-data/map-identities.md) before you begin.

## Step 1: Create identity namespaces

In this step, you create identity namespaces for Luma's custom identity fields, `loyaltyId`, `crmId`, and `lumaProduct`. Identity namespaces play a critical role in building real-time customer profiles, as two matching values in the same namespace allow two data sources to form an identity graph.

Let's start by creating a namespace for the Luma Loyalty Schema:

1. In the Platform user interface, go to **[!UICONTROL Identities]** in the left navigation
2. Select the **[!UICONTROL Create identity namespace]** button
3. Provide the following details:

   | Display Name | Identity Symbol | Type |
   |---|---|---|
   | `Luma Loyalty ID` | `lumaLoyalty` | [!UICONTROL Cross-device ID]|

4. Select **[!UICONTROL Create]**

   ![Create Namespaces](assets/createNamespace.png)

Now create two more namespaces following the same steps:

| Display Name | Identity Symbol | Type |
|---|---|---|
| `Luma CRM ID` | `lumaCRM` | [!UICONTROL Cross-device ID] |
| `Luma Product` | `lumaProduct` |[!UICONTROL Non-people identifier]|

## Step 2: Create Schemas

In this step you define the required structure of the data by creating the five required [[!UICONTROL schemas]](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html):

* [!DNL Luma Loyalty]
* [!DNL Luma Products]
* [!DNL Luma CRM]
* [!DNL Luma Product Interactions]
* [!DNL Luma Product Inventory Events]

### Create [!DNL Luma Loyalty] [!UICONTROL Schema]

In this step, you model Luma’s data into schemas.

>[!TIP]
>
>Watch the video tutorial: [Create a schema](/help/set-up-data/create-schema.md) before you begin.

#### Create the schema

Let's start by creating the [!DNL Luma Loyalty] schema:

1. Go to [!UICONTROL DATA MANAGEMENT] -> **[!UICONTROL Schemas]** in the left navigation
1. Select the **[!UICONTROL Create Schema]** button on the top right
1. From the dropdown menu, select **[!UICONTROL XDM Individual Profile]**, since you are modeling attributes of an individual customer (points, status, and so on).

![Create schema](assets/loyaltyCreateSchema.png)

#### Add existing field groups

Next you are prompted to add field groups to the schema. All fields must be added to schemas using groups. You are adding existing field groups and must create a new field group.

>![NOTE]
>
>If you aren't prompted before the schema's detail page opens, select **[!UICONTROL Add]** under the **[!UICONTROL Schema Field Groups]** heading.
>
>![Add field group](assets/add_field_group.png)

1. In the **[!UICONTROL Add Field groups]** modal, select following field groups:

   a. **[!UICONTROL Demographic Details]** for basic customer data like name and birthdate
   b. **[!UICONTROL Personal Contact Details]** for basic contact details like email address and phone number
   c. **[!UICONTROL Loyalty Details]** for the loyalty details such as points, joined date, or status. The loyalty field group is far down the list, so it is easiest to search for it.

1. Select **[!UICONTROL Add field group]** to add all three field groups to the schema.

![Select standard field groups](assets/addstandardFieldGroups.png)

1. Select the top node of the schema
1. Enter `Luma Loyalty` as the [!UICONTROL Display name]

#### Create a new [!UICONTROL field group]

To help ensure consistency across the schemas, you will manage all system identifiers in a single group:

1. From the middle [!UICONTROL Composition] section, under [!UICONTROL Field groups], select **[!UICONTROL Add]**
2. Select **[!UICONTROL Create new field group]**
3. Use `Luma Identifiers` as the **[!UICONTROL Display name]**
4. Use `system identifiers for XDM Individual Profile class` as the **[!UICONTROL Description]**
5. Select **[!UICONTROL Add field groups]**

![Create new field group](assets/addnewfieldgroup.png)

#### Add fields to the new [!UICONTROL field group]

The new, empty field group is added to your schema. With the + buttons, you can add new fields to any location in the hierarchy. In this case you must add fields at the root level:

1. Select **[!UICONTROL +]** next to the name of the schema. Which adds a field under your tenant id namespace to manage conflicts between your custom fields and any standard fields
2. In the **[!UICONTROL Field properties]** sidebar, add the details of the new field

      * Field name: `systemIdentifier`
      * [!UICONTROL Display name]: `System Identifier`
      * Type: Object
      * [!UICONTROL Assign field group]: [!DNL Luma identifiers]
3. Select **[!UICONTROL Apply]**

![Add System Identifier](assets/addsysteidentifier.png)

Now add two fields under the `systemIdentifier` object:

|[!UICONTROL Fieldname] |[!UICONTROL Display Name]|[!UICONTROL Type]|
|-------------|-----------|----------|
| `loyaltyId`|`Loyalty ID`|[!UICONTROL String]|
| `crmId`| `CRM Id`|[!UICONTROL String]|

![fields](./assets/add_fields.png)

#### Set identities

You now have the namespace and the Luma Loyalty schema configured. Before you can ingest data, you must label the identity fields. Each schema used with Real-time Customer Profile is required to have a primary identity specified. And each record ingested must have a value for that field.

1. Set the **primary Identity:**
From the `Luma Loyalty` schema
   1. Select the `Luma Identifiers` field group
   2. Select the `loyaltyId` field
   3. In the **[!UICONTROL Field properties]**, check the **[!UICONTROL Identity]** box
   4. Check the **[!UICONTROL Primary Identity]** box, too
   5. Select the `Luma Loyalty Id` namespace from **[!UICONTROL Identity namespaces]** dropdown
   6. Select **[!UICONTROL Apply]**

      ![primary identity](/help/tutorial-configure-a-training-sandbox/assets/primary_identity.png)

2. Set a **secondary identity:**
From the `Luma Loyalty` schema
    1. Select the `Luma Identifiers` field group
    2. Select the `crmId` field
    3. In the **[!UICONTROL Field properties]**, check the **[!UICONTROL Identity]** box
    4. Select the `Luma CRM Id` namespace from **[!UICONTROL Identity namespaces]** dropdown
    5. Select **[!UICONTROL Apply]**
  
#### Enable for profile and save the schema

1. Select the top node of the schema
1. In the [!UICONTROL Field properties] enable [!UICONTROL Profile]

The schema should look like this:

![Luma Loyalty schema](assets/lumaloyaltyschema.png)

1. Select **[!UICONTROL Save]**

### Create [!DNL Luma Products] [!UICONTROL Schema]

1. Go to [!UICONTROL DATA MANAGEMENT] -> **[!UICONTROL Schemas]** in the left navigation
1. Select the **[!UICONTROL Create Schema]** button on the top right
1. From the dropdown menu, select **[!UICONTROL Browse all schema types]**, which allows you to create a new class.
1. Select **[!UICONTROL Create new class]
1. Add the display name: `Luma Products` 
1. Assign class
1. Create a new [!UICONTROL field group]
   * Display name: `Luma Product Info`
1. Add the following field to the Luma Product Info field group
   * Field name: `product`
   * Display name: `Product` 
   * Type: [!UICONTROL Object] 
   * Field group: [!DNL Luma Product info]
1. Select[!UICONTROL Apply]
1. Add the following fields to the **[!DNL Product]** object: 
| [!UICONTROL Fieldname] |[!UICONTROL Display Name]|[!UICONTROL Type]|
|-------------|-----------|----------|
| `sku`|`SKU`|[!UICONTROL String]|
| `name`| `Name`|[!UICONTROL String]|
| `category`| `Category`|[!UICONTROL String]|
|`color`|`Color`|[!UICONTROL String]|
|`size`|`Size`| [!UICONTROL String]|
|`price`|`Price`| [!UICONTROL Double]|
|`description`|`Description`|[!UICONTROL String]|
|`productImageURL`|`Product Image URL`|[!UICONTROL String]|
|`productURL`|`Product URL`| [!UICONTROL String]|
|`stockQuantity`|`Stock Quantity`| [!UICONTROL String]|
1. Add the **[!UICONTROL Display name]** `Luma Products` to the schema
1. Select [!UICONTROL Save] 

### Create [!DNL Luma Product Inventory Event] [!UICONTROL Schema]

1. Go to [!UICONTROL DATA MANAGEMENT] -> **[!UICONTROL Schemas]** in the left navigation
1. Select the **[!UICONTROL Create Schema]** button on the top right
1. From the dropdown menu, select **[!UICONTROL Browse all schema types]**,
1. Select **[!UICONTROL Create new class]
1. Add the display name: `Business Event` 
1. Select type: *[!UICONTROL Time-series]*
1. Assign class
1. Create a new [!UICONTROL field group]
   * Display name: `Product Inventory Event Details`
1. Add the **[!UICONTROL Display name]** `Luma Product Inventory Event Schema` to the schema
1. Add the following field to the Luma Product Info field group
   * Field name: `inventoryEvent`
   * Display name: `Inventory Event` 
   * Type: [!UICONTROL Object] 
   * Field group: [!DNL Product Inventory Event Details]
1. Add the following fields to the **[!DNL Product Inventory Event Details]** object:
   | [!UICONTROL Fieldname] |[!UICONTROL Display Name]|[!UICONTROL Type]|
   |-------------|-----------|----------|
   | `productId`| `Product ID`|[!UICONTROL String]|
   | `sku`|`SKU`|[!UICONTROL String]|
   | `stockEventType`| `Stock Event Type`|**[!UICONTROL Enum]** with `restock` and `outOfStock` as values |

   1. to set the `stockEventType` to Enum, select type: `string` 
   2. Scroll down to the bottom of the **[!UICONTROL Field properties]**
   3. Check **[!UICONTROL Enum]**
   4. Enter **[!UICONTROL values] ([!UICONTROL label)]**: `restock` (`restock`)
   5. Select **[!UICONTROL Add row]**
   6. Enter **[!UICONTROL values] ([!UICONTROL label)]**: `outOfStock` (`out of stock`)
   7. Select **[!UICONTROL Apply]**

   ![enum](assets/enum.png)

1. Set `productId` field as **[!UICONTROL primary identity]** using **[!DNL Luma Product namespace]**
1. Select the `sku` field and define a relationship to the `product.sku` field in the **[!DNL Luma Products]** Schema:
   1. Scroll down to the bottom of the **[!UICONTROL Field properties]**
   2. Check **[!UICONTROL Relationship]**
      1. **[!UICONTROL Reference schema]**: [!DNL Luma Products]
      2. **[!UICONTROL Reference identity namespace]**: [!DNL Luma Product]
   3. Select **[!UICONTROL Apply]**
   The schema should look like this:

   ![SKU relationship](assets/sku_relationship.png)

1. Enable for Profile
1. Select [!UICONTROL Save] to save the schema.

### Create the two additional schemas

Create the following additional [!UICONTROL schemas]:

|[!UICONTROL Display name]|[!DNL Luma CRM]| [!DNL Luma Product Interactions] |
|  ---| ------- | ---- |
|  **[!UICONTROL Type]**| [!UICONTROL XDM Individual Profile]| [!UICONTROL XDM Experience Event]|
|  **[!UICONTROL Add existing field group]**| Luma Identifiers<br>Demographic Details<br>Personal Contact Details | Identity Map<br>Commerce Details|
|  **[!UICONTROL Relationship]**||*[!DNL productListItems.SKU]*:<br> Reference schema *[!DNL Luma Products]* <br>[!DNL Reference identiy namespace] *[!DNL Luma Product]* schema|
|  **[!UICONTROL Primary Identity] [!UICONTROL namespace])** | systemIdentifier.crmId<br>(Luma CRM Id)| |
|  **[!UICONTROL Secondary Identity][!UICONTROL namespace]** | personalEmail.address (Email)<br>mobilePhone.number (Phone)| |
|   **[!UICONTROL Enable for profile]**| yes | yes |

## Next

Now that the you have created the data structure, can [create data sets and ingest sample data.](/help/tutorial-configure-a-training-sandbox/manual-data-ingestion.md).
