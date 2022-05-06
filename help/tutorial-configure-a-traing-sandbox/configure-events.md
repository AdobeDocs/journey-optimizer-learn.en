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

The following video explains how to set up events

Watch the video [Create Events](/help/set-up-journeys/create-events.md) for guidance on how to create events.

## Create the Luma Online Purchase Event

LumaOnlinePurchase
Unitary event, rule-based
Schema: Luma Product Interactions
Fields:
EventType
priceTotal
purchaseOrderNumber
In Product List Items > Luma Products > _*[!DNL yourOrganizationID]* > Product
Name
Price
ProductImageURL
ProductURL
product.quantity
Condition: “in(@{LumaOnlinePurchase.eventType}, ["commerce.purchases"])”

## Create the Luma Wishlist Add

LumaWishlistAdd
Unitary event, rule-based
Schema: Luma Product Interactions
Fields:
EventType
In Product List Items > Luma Products > _*[!DNL yourOrganizationID]* > Product
Name
Price
ProductImageURL
ProductURL
product.quantity
Condition: “in(@{LumaOnlinePurchase.eventType}, ["commerce.saveForLaters"])”

## Create the Luma Product Restock

Name: LumaProductRestock
Business event, rule-based
Schema: Luma Product Inventory Events
**Fields:**
    * productID
    * stocktype
    * In Product > Luma Products > _wwfovlab011 > Product
      * Name
      * Price
      * ProductImageURL
      * Description
    * Condition: “in(@{LumaProductRestock._*[!DNL yourOrganizationID]*.stocktype}, ["restock"])”