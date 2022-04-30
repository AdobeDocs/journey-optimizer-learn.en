---
title: COnfigure events
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
role: Admin
level: Beginner
---

# Configure events

Configure the following events:

## Luma Online Purchase Event
LumaOnlinePurchase
Unitary event, rule-based
Schema: Luma Product Interactions
Fields:
EventType
priceTotal
purchaseOrderNumber
In Product List Items > Luma Products > _wwfovlab011 > Product
Name
Price
ProductImageURL
ProductURL
product.quantity
Condition: “in(@{LumaOnlinePurchase.eventType}, ["commerce.purchases"])”
LumaWishlistAdd
Unitary event, rule-based
Schema: Luma Product Interactions
Fields:
EventType
In Product List Items > Luma Products > _wwfovlab011 > Product
Name
Price
ProductImageURL
ProductURL
product.quantity
Condition: “in(@{LumaOnlinePurchase.eventType}, ["commerce.saveForLaters"])”
LumaProductRestock
Business event, rule-based
Schema: Luma Product Inventory Events
Fields:
productID
stocktype
In Product > Luma Products > _wwfovlab011 > Product
Name
Price
ProductImageURL
Description
Condition: “in(@{LumaProductRestock._wwfovlab011.stocktype}, ["restock"])”