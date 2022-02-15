---
title: Challenge 1 - Create segments
description: Apply what you learned about creating segments and test your skills.
kt: 8417
feature: Segments
role: User
level: Beginner
---

# Challenge 1 - Create segments

## The story

Luma, a fictional athletic apparel company, is looking to promote its latest apparel and gear collection and to drive sales for existing customers. To support the new collection campaign, the Luma marketing team asks you to create the [segments](/help/set-up-resources/create-segments.md) that are required to  build the journey for the campaign.

## Your Challenge

## Segment #2 – Out-of-stock Wishlist Items

Name this segment: *your name – Out-of-stock-Wishlist*

To target potential interested customers when products are restocked, create an audience that consists of customers

* Who have added at least one item to their wish list (Use event type: Commerce Save For Laters)
* That was **out of stock** in the last 3 months (use stock quantity = 0)
* And have not since purchased the item.

+++**CHECK YOUR WORK**

This is what your segment should look like:

![Segment #2 - Out-of-stock Wishlist Items](/help/challenges/assets/C1-S2.png)

Customers who have added an item to their wish list that was out of stock in the last 3 months:

* Event: Save for Laters
  * Include at least 1
  * Where the Stock quantity is 0

and have not since purchased the item:

* Exclude all the Purchases event types where the SKU matches the SKU from the **Save For Later event**.

>[!TIP]
> * Select the SKU under the Save for Laters in the *Browse Variables* section 
> * Use the compare option when dropping the SKU under Save for later into the event field

Check the code on the bottom right corner of the Edit segment screen, under Events. The code should look like this:

Code:
(Include have at least 1 Save For Laters event where ((Stock Quantity equals 0)) THENExclude all  Purchases events where ((SKU equals Save For Laters1 SKU)) ) and occurs in last 3 month(s)

+++
