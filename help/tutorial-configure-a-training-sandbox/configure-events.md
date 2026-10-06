---
title: Configure events
description: Configure three events required for the hands-on Journey Optimizer Challenges
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
jira: KT-9382
role: Admin
level: Beginner
recommendations: noDisplay, noCatalog
exl-id: c7826818-c28a-493b-8aba-9d8a8102336d
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: aeebb91a-f216-4d5f-8da1-3a7e6f696ed0
    internal-label: Data management activity
  - id: d556b755-390a-43f0-be32-a08cf6236126
    internal-label: Configuration
  - id: bb359667-ec7d-4d4b-8663-5850fc219d32
    internal-label: Administration
subfeature_v2:
  - id: d2e8a157-b3b0-4143-9ff3-809bf400be56
    internal-label: Sandboxes
  - id: efb19423-4da4-4fd1-88d8-5ee8c71ae766
    internal-label: Application settings
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Configure events

In this section, you set up the three events that are required for the hands-on exercises in the [Journey Optimizer Challenges](/help/challenges/introduction-and-prerequisites.md).

The following video explains how to create events:

>[!VIDEO](https://video.tv.adobe.com/v/336253?quality=12&learn=on){transcript=true}

## Create the Luma online purchase event

When using this event, Journey Optimizer receives information when a person purchases luma products online.

1. Create an event with the following parameters:

   |[!UICONTROL Parameter] |[!UICONTROL Value]|
   |-------------|-----------|
   | [!UICONTROL NAME]|`LumaOnlinePurchase`|
   | [!UICONTROL TYPE]| [!UICONTROL Unitary] |
   | [!UICONTROL Event ID Type]|[!UICONTROL Rule Based]|
   | [!UICONTROL Schema]| `Luma Web Events Schema`|
   | [!UICONTROL Fields]| `eventType` <br>`commerce.order.priceTotal`<br>`commerce.order.purchaseOrderNumber`<br>`commerce.shipping.adress.street1`<br>`commerce.shipping.adress.city`<br>`commerce.shipping.adress.postalCode`<br>`commerce.shipping.adress.state`<br>`productListItems.quantity`<br>`productListItems.Luma Product Catalog Schema._your Organization_ID.name`<br>`productListItems.Luma Product Catalog Schema._your Organization_IDprice`<br>`productListItems.Luma Product Catalog Schema._your Organization_ID.imageURL`<br>`productListItems.Luma Product Catalog Schema._your Organization_ID.url`|

1. Add the [!UICONTROL Event ID condition]: `LumaOnlinePurchase.eventType is commerce.purchases`:

   1. Select the pencil icon to edit the field.

   1. On the **[!UICONTROL Add an event id condition]** modal, drag and drop the `eventType` onto the canvas.
   1. Select `commerce.purchases`.
   1. Select **[!UICONTROL Ok]** on the canvas.
   1. Select **[!UICONTROL Ok]** on the modal.

   ![Add event condition](/help/tutorial-configure-a-training-sandbox/assets/Event-lumaOnlinePurchase-condition-1.png)

1. Select [!UICONTROL NAMESPACE]: `Luma CRM ID (lumaCrmId)`

1. Select **[!UICONTROL Save]**.

## Create *[!DNL Luma Product Restock]* event

|[!UICONTROL Parameter]|[!UICONTROL Value]|
|-------------|-----------|
|[!UICONTROL NAME]|`LumaProductRestock`|
|[!UICONTROL TYPE]|[!UICONTROL Business]|
|[!UICONTROL Schema]|[!DNL Luma Product Inventory Event Schema]|
|[!UICONTROL Fields]|SKU <br> stockEventType<br><b>LumaProductCatalogSchema._yourOrganizationID.product :</b> <br>name<br>price<br> ImageURL<br>description|
|[!UICONTROL Condition]|LumaProductRestock._`your organization's ID`.inventoryEvent.stockEventType is restock|

Congratulations! Your sandbox is now ready to use.
