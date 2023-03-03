---
title: Configure events
description: Configure three events required for the hands-on Journey Optimizer Challenges
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
recommendations: noDisplay, noCatalog
exl-id: c7826818-c28a-493b-8aba-9d8a8102336d
---
# Configure events

In this section, you set up the three events that are required for the hands-on exercises in the [Journey Optimizer Challenges](/help/challenges/introduction-and-prerequisites.md).

The following video explains how to create events:

>[!VIDEO](https://video.tv.adobe.com/v/336253?quality=12)

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

## Create *[!DNL Luma Wishlist Add]* event

|[!UICONTROL Parameter]|[!UICONTROL Value]|
|-------------|-----------|
|[!UICONTROL NAME]|`LumaWishlistAdd`|
|[!UICONTROL TYPE]| [!UICONTROL Unitary] |
|[!UICONTROL Event ID Type]|[!UICONTROL Rule Based]|
|[!UICONTROL Schema]| `Luma Product Interactions`|
|[!UICONTROL Fields]| EventType<br>productListItem.quantity<br><b>In Product List Items > Luma Products > _*[!DNL yourOrganizationID]* > Product:</b> <br>Name<br>Price<br> ProductImageURL<br>ProductURL|
|[!UICONTROL Condition]| [!DNL LumaWishlistAdd.eventType is commerce.saveForLaters]|
|[!UICONTROL Namespace]| Email(EMail)|

## Create *[!DNL Luma Product Restock]* event

|[!UICONTROL Parameter]|[!UICONTROL Value]|
|-------------|-----------|
|[!UICONTROL NAME]|`LumaProductRestock`|
|[!UICONTROL TYPE]|[!UICONTROL Business]|
|[!UICONTROL Schema]|[!DNL Luma Product Inventory Events]|
|[!UICONTROL Fields]|SKU <br> stockEventType<br><b> yourOrganizationID > product:</b> <br>name<br>price<br> ImageURL<br>description|
|[!UICONTROL Condition]|LumaProductRestock._`your organization's ID`.inventoryEvent.stockEventType is restock|

Congratulations! Your sandbox is now ready to use.
