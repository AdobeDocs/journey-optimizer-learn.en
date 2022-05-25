---
title: Configure events
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
---

# Configure events

In this section will you will set up the three events that are required for the hands-on exercises in the [Journey Optimizer Challenges](/help/challenges/introduction-and-pre-requisites.md).

Watch the video [Create Events](/help/set-up-journeys/create-events.md) for guidance on how to create events.

## Create the Luma Online Purchase Event

1. From the left navigation, navigate to [!UICONTROL ADMINISTRATION] and select *[!UICONTROL Configuration]*
2. From the [!UICONTROL Dashboard], select *[!UICONTROL Manage*]* Events

![Manage events](assets/create-events.png)

1. Click *[!UICONTROL Create Event]
1. Fill in the event details and parameters:

 |[!UICONTROL Parameter] |[!UICONTROL Value]|
   |-------------|-----------|
   | [!UICONTROL NAME]|`LumaOnlinePurchase`|
   | [!UICONTROL TYPE]| [!UICONTROL Unitary] |
  |[!UICONTROL Event ID Type]|[!UICONTROL Rule Based]
  | [!UICONTROL Schema]| Luma Product Interactions
| [!UICONTROL Fields]| EventType <br>Order.priceTotal<br>purchaseOrderNumber<br>productListItems.quantity<br><b>In Product List Items > Luma Products > _*[!DNL yourOrganizationID]* > Product:</b> <br> Name<br>Price<br> ProductImageURL<br>ProductURL|

1. Add the [!UICONTROL Event ID condition]: **[!DNLLumaOnlinePurchase.eventType is commerce.purchases]**
   1. Select the pencil icon to edit the fielf
   2. On the [!UICONTROL Add an event id condition] modal, drag and drop the `eventType` onto the canvas
   3. Select `commerce.purchases`
   4. Select ok on the canvas
   5. Select ok on the modal 

![Add event condition](/help/tutorial-configure-a-training-sandbox/assets/Event-lumaOnlinePurchase-condition-1.png)

1. Select [!UICONTROL NAMESPACE]: `Email(Email)`
1. Save

## Create *[!DNL Luma Wishlist Add]* Event

[!UICONTROL Parameter] |[!UICONTROL Value]|
   |-------------|-----------|
   | [!UICONTROL NAME]|`LumaWishlistAdd`|
   | [!UICONTROL TYPE]| [!UICONTROL Unitary] |
  |[!UICONTROL Event ID Type]|[!UICONTROL Rule Based]
  | [!UICONTROL Schema]| Luma Product Interactions
| [!UICONTROL Fields]| EventType<br>productLisrItem.quantity<br><b>In Product List Items > Luma Products > _*[!DNL yourOrganizationID]* > Product:</b> <br>Name<br>Price<br> ProductImageURL<br>ProductURL|
|[!UICONTROL Condition]| [!DNL LumaWishlistAdd.eventType is commerce.saveForLaters]|
|[!UICONTROL Namespace]| Email(EMail)|

## Create *[!DNL Luma Product Restock] Event

[!UICONTROL Parameter] |[!UICONTROL Value]|
   |-------------|-----------|
   | [!UICONTROL NAME]|`LumaProductRestock`|
   | [!UICONTROL TYPE]| [!UICONTROL Business] |
  | [!UICONTROL Schema]| [!DNL Luma Product Inventory Events]|
| [!UICONTROL Fields]| productID <br> stockEventType<br><b>In Product > Luma Products > *[!DNL yourOrganizationID]* > Product:</b> <br>Name<br>Price<br> ProductImageURL<br>Description|
|[!UICONTROL Condition]| LumaProductRestock._techmarketingdemos.inventoryEvent.stockEventType is restock|


## Congratulations

**Your sandbox is now ready to use!**
