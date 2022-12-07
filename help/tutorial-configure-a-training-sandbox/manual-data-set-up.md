---
title: Set up data structure manually
description: Create the required identity namespaces and define the Luma sample data structure.
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
recommendations: noDisplay, noCatalog
hide: yes
exl-id: de870229-d9a6-4051-9f76-13d402cce3b4
---
# Set up data manually

 In this section, you create the required identity namespaces and define the [!DNL Luma] sample data structure by creating the [[!UICONTROL schemas]](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html).

>[!TIP]
>Watch the video tutorial [Map identities](/help/set-up-data/map-identities.md) before you begin.

## Step 1: Create identity namespaces

In this step, you create identity namespaces for the [!DNL Luma] custom identity fields named `lumaLoyaltyId`, `lumaCrmId`, and `lumaProductSKU`. Identity namespaces play a critical role in building real-time customer profiles, as two matching values in the same namespace allow two data sources to form an identity graph.

Begin by creating a [!UICONTROL namespace] for the [!DNL Luma Loyalty ID] schema:

1. In the Journey Optimizer user interface, go to ***[!UICONTROL Customer]** > **[!UICONTROL Identities]** in the left navigation.

1. Select **[!UICONTROL Create identity namespace]**.

1. Provide the following details:

   | Display Name | Identity Symbol | Type |
   |---|---|---|
   | `Luma Loyalty ID` | `lumaLoyaltyId` | [!UICONTROL Cross-device ID]|

1. Select **[!UICONTROL Create]**.

   ![Create Namespaces](assets/createNamespace.png)

1. Create two more namespaces following the same steps:

   | Display Name | Identity Symbol | Type |
   |---|---|---|
   | `Luma CRM ID` | `lumaCrmId` | [!UICONTROL Cross-device ID] |
   | `Luma Product SKU` | `lumaProductSKU` |[!UICONTROL Non-people identifier]|

## Step 2: Create schemas

In this step, you define the structure of the sample data by creating six [[!UICONTROL schemas]](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html):

* [[!DNL Luma Loyalty Schema]](#create-luma-loyalty-schema)

* [[!DNL Luma Product catalog Schema]](#create-luma-product-catalog-schema)

* [[!DNL Luma Product Inventory Events]](#create-luma-product-inventory-event-schema)

* [[!DNL Luma CRM Schema]](#create-luma-crm-and-luma-product-interactions-schemas)

* [[!DNL Luma Web Events Schema]](#create-luma-crm-and-luma-product-interactions-schemas)

* [[!DNL Luma Test Profiles Schema]](#create-luma-crm-and-luma-product-interactions-schemas)

>[!TIP]
>
>Watch the video tutorial: [Create a schema](/help/set-up-data/create-schema.md) before you begin.

### Create [!DNL Luma Loyalty] [!UICONTROL Schema] {#create-luma-loyalty-schema}

#### Create the schema

Begin by creating the [!DNL Luma Loyalty] schema:

1. Go to **[!UICONTROL DATA MANAGEMENT]** > **[!UICONTROL Schemas]** in the left navigation.

1. Select **[!UICONTROL Create Schema]** on the top right.

1. From the dropdown menu, select **[!UICONTROL XDM Individual Profile]**, since you are modeling attributes of an individual customer (points, status, and so on).

   ![Create schema](assets/loyaltyCreateSchema.png)

#### Add existing field groups

Next you are prompted to add field groups to the schema. You must add all fields to schemas using groups. You are adding existing field groups and must create a field group.

>[!NOTE]
>
>If the [!UICONTROL Field groups] modal doesn't automatically open on the [!UICONTROL Schemas] page, select **[!UICONTROL Add]** (as shown in the following image).

![Add field group](assets/add_field_group.png)

1. On the **[!UICONTROL Add Field groups]** page, enable the following field groups:

   * **[!UICONTROL Demographic Details]** for basic customer data like name and birth date.
   
   * **[!UICONTROL Personal Contact Details]** for basic contact details like email address and phone number.
   
   * **[!UICONTROL Loyalty Details]** for the loyalty details such as points, joined date, or status. The loyalty field group is far down the list, so it is easiest to search for it.

1. Select **[!UICONTROL Add field group]** to add all three field groups to the schema.

   ![Select standard field groups](assets/addstandardFieldGroups.png)

1. Select the top node of the schema.

1. Enter `Luma Loyalty Schema` as the [!UICONTROL Display name].

#### Create a [!UICONTROL field group]

To help ensure consistency across the schemas, Adobe recommends managing all system identifiers in a single group:

1. From the **[!UICONTROL Composition]** section under [!UICONTROL Field groups], select **[!UICONTROL Add]**.

1. Select **[!UICONTROL Create new field group]**.

1. Add `Luma Identity Profile Field Group` as the **[!UICONTROL Display name]**.

1. Add `system identifiers for XDM Individual Profile class` as the **[!UICONTROL Description]**.

1. Select **[!UICONTROL Add field groups]**.

   ![Create new field group](assets/addnewfieldgroup.png)

#### Add fields to the new [!UICONTROL field group]

The new, empty field group is added to your schema. Using the + buttons, you can add new fields to any location in the hierarchy. In this case, you must add fields at the root level:

1. Select **[!UICONTROL +]** next to the name of the schema.

   This step adds a field under **your tenant id** namespace, to manage conflicts between your custom fields and any standard fields.

1. In the **[!UICONTROL Field properties]** sidebar, add the details of the new field:

   * **Field name:** `systemIdentifier`

   * **[!UICONTROL Display name]:** `System Identifier`

   * **Type:** Object

   * **[!UICONTROL Assign field group]:** [!DNL Luma identifiers]

1. Select **[!UICONTROL Apply]**.

   ![Add System Identifier](assets/addsysteidentifier.png)

   Add two fields under the `systemIdentifier` object:

   |[!UICONTROL Fieldname] |[!UICONTROL Display Name]|[!UICONTROL Type]|
   |-------------|-----------|----------|
   | `loyaltyId`|`Loyalty ID`|[!UICONTROL String]|
   | `crmId`| `CRM Id`|[!UICONTROL String]|

![fields](./assets/add_fields.png)

#### Set identities

You now have the [!UICONTROL namespace] and the [!DNL Luma Loyalty schema] configured. Before you can ingest data, you must label the identity fields. Each schema used with [!UICONTROL Real-time Customer Profile] is required to have a primary identity specified and each record ingested must have a value for that field.

1. Set the **primary Identity**:

   From the **[!DNL Luma Loyalty Schema]**:

   1. Select the **[!DNL Luma Identity Profile Field Group]**.

   2. Select the **[!DNL loyaltyId]** field.
   
   3. In the **[!UICONTROL Field properties]**, enable the **[!UICONTROL Identity]** box.
   
   4. Enable the **[!UICONTROL Primary Identity]** box.
   
   5. Select the `Luma Loyalty Id` namespace from **[!UICONTROL Identity namespaces]** dropdown.
   
   6. Select **[!UICONTROL Apply]**.

      ![primary identity](/help/tutorial-configure-a-training-sandbox/assets/primary_identity.png)

2. Set a **secondary identity**:

   From the **[!DNL Luma Loyalty Schema]**:
   
    1. Select the **[!DNL Luma Identity Profile Field Group]**..
   
    2. Select the `crmId` field.
   
    3. In the **[!UICONTROL Field properties]**, enable the **[!UICONTROL Identity]** box.
   
    4. Select the `Luma CRM Id` namespace from **[!UICONTROL Identity namespaces]** dropdown.
   
    5. Select **[!UICONTROL Apply]**.
  
#### Enable for profile and save the schema

1. Select the top node of the schema.

1. In the [!UICONTROL Field properties] enable **[!UICONTROL Profile]**.

   The schema should look like this:

   ![Luma Loyalty schema](assets/lumaloyaltyschema.png)

1. Select **[!UICONTROL Save]**.

### Create [!DNL Luma Product catalog Schema] {#create-luma-product-catalog-schema}


1. Go to [!UICONTROL DATA MANAGEMENT] -> **[!UICONTROL Schemas]** in the left navigation.

1. Select the **[!UICONTROL Create Schema]** button on the top right.

1. From the dropdown menu, select **[!UICONTROL Browse all schema types]**, which allows you to create a class.

1. Select **[!UICONTROL Create new class].

1. Add the display name: `Luma Product Catalog Class`.

1. Assign class.

1. Create a [!UICONTROL field group]:

   * Display name: `Luma Product Catalog Field Group`

1. Add the following field to the **[!DNL Luma Product Catalog Field Group]**.

   * Field name: `product`

   * Display name: `Product` 

   * Type: [!UICONTROL Object] 

   * Field group: [!DNL Luma Product Catalog Field Group]

1. Select **[!UICONTROL Apply]**.

1. Add the following fields to the **[!DNL Product]** object: 

   | [!UICONTROL Fieldname] |[!UICONTROL Display Name]|[!UICONTROL Type]|
   |-------------|-----------|----------|
   |`sku`|`SKU`|[!UICONTROL String]|
   |`name`| `Name`|[!UICONTROL String]|
   |`category`| `Category`|[!UICONTROL String]|
   |`color`|`Color`|[!UICONTROL String]|
   |`size`|`Size`| [!UICONTROL String]|
   |`price`|`Price`| [!UICONTROL Double]|
   |`description`|`Description`|[!UICONTROL String]|
   |`ImageURL`|`Image URL`|[!UICONTROL String]|
   |`stockQuantity`|`Stock Quantity`| [!UICONTROL String]|

1. Add the **[!UICONTROL Display name]** `Luma Product Catalog Field Group` to the [!UICONTROL field group].

1. Select **[!UICONTROL Save]**.


### Create [!DNL Luma Product Inventory Event Schema] {#create-luma-product-inventory-event-schema}


1. Go to **[!UICONTROL DATA MANAGEMENT]** -> **[!UICONTROL Schemas]** in the left navigation.

1. Select the **[!UICONTROL Create Schema]** button on the top right.

1. From the dropdown menu, select **[!UICONTROL Browse all schema types]**.

1. Select **[!UICONTROL Create new class]**.

1. Add the display name: `Luma Business Event`.

1. Select type: *[!UICONTROL Time-series]*.

1. Assign class.

1. Create a [!UICONTROL field group]:

   * Display name: `Product Inventory Event Details`

1. Add the **[!UICONTROL Display name]** `Luma Product Inventory Event Schema` to the schema.

1. Add the following field to the Luma Product Info field group:

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

   1. to set the `stockEventType` to Enum, select type: `string`.

   1. Scroll down to the bottom of the **[!UICONTROL Field properties]**.

   1. Enable **[!UICONTROL Enum]**.

   1. Enter **[!UICONTROL values] ([!UICONTROL label)]**: `restock` (`restock`).

   1. Select **[!UICONTROL Add row]**.

   1. Enter **[!UICONTROL values] ([!UICONTROL label)]**: `outOfStock` (`out of stock`).

   1. Select **[!UICONTROL Apply]**.

      ![enum](assets/enum.png)

1. Set `productId` field as **[!UICONTROL primary identity]** using **[!DNL Luma Product namespace]**.

1. Select the `sku` field and define a relationship to the `product.sku` field in the **[!DNL Luma Product catalog Schema]** Schema:

   1. Scroll down to the bottom of the **[!UICONTROL Field properties]**.

   1. Enable **[!UICONTROL Relationship]**.

      1. **[!UICONTROL Reference schema]**: [!DNL Luma Product catalog Schema].

      1. **[!UICONTROL Reference identity namespace]**: [!DNL Luma Product].

   1. Select **[!UICONTROL Apply]**.

      The schema should look like this:

      ![SKU relationship](assets/sku_relationship.png)

1. Enable for **Profile**.

1. Select [!UICONTROL Save] to save the schema.

### Create the [!DNL Luma CRM] and [!DNL Luma Product Interactions] schemas {#create-luma-crm-and-luma-product-interactions-schemas}

Create the following additional [!UICONTROL schemas]:

|[!UICONTROL Display name]|[!DNL Luma CRM]| [!DNL Luma Product Interactions]| [!DNL Luma Test Profiles]|
|  ---| ------- | ---- |----|
|  **[!UICONTROL Type]**| [!UICONTROL XDM Individual Profile]| [!UICONTROL XDM Experience Event]|[!UICONTROL XDM Individual Profile]|
|  **[!UICONTROL Add existing field group]**| Luma Identifiers<br>Demographic Details<br>Personal Contact Details| Identity Map<br>Commerce Details| Luma Identifiers<br>Demographic Details<br>Personal Contact Details<br>Profile test details|
|  **[!UICONTROL Relationship]**||*[!DNL productListItems.SKU]*:<br> Reference schema *[!DNL Luma Product catalog Schema]* <br>[!DNL Reference identity namespace] *[!DNL Luma Product]* schema|
|  **[!UICONTROL Primary Identity] [!UICONTROL namespace])** | systemIdentifier.crmId<br>(Luma CRM Id)| | personalEmail.address<br>(Email)|
|  **[!UICONTROL Secondary Identity] [!UICONTROL namespace]** | personalEmail.address (Email)<br>mobilePhone.number (Phone)| |
|   **[!UICONTROL Enable for profile]**| yes | yes |yes|

## Next steps

Now that you have created the data structure, you [create data sets and ingest sample data](/help/tutorial-configure-a-training-sandbox/manual-data-ingestion.md).
