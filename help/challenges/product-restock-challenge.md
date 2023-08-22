---
title: Product Replenishment Challenge
description: Apply what you learned about creating segments and test your skills.
jira: KT-8417
feature: Segments
role: User
level: Beginner
hide: yes
hidefromtoc: yes
exl-id: 305aaf4c-7f5d-4f6f-abeb-466208f1fe48
---
# Product Replenishment Challenge

|Challenge|Product Replenishment|
|---|---|
|Persona|Journey Manager|
|Required skills|<ul><li>[Create segments](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/profiles-segments-subscriptions/create-segments.html?lang=en)</li><li> [Import and author HTML email content](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/email-channel/import-and-author-html-email-content.html?lang=en)</li><li>[Use Case - Read segment](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-journeys/use-case-read-segment.html?lang=en)</li>|
|Assets to download|[Product restock email file](/help/challenges/assets/email-assets/ProductRestockEmail.html.zip)|

## The story

When browsing the Luma website, customers can add products they are interested to a wishlist, which allows Luma to send the customers targeted marketing messages and information on the products.

## Your Challenge

Luma asks you to implement a journey in Journey Optimizer that notifies customers, who have an item on their wishlist that was previously out-of-stock, when this item is back in stock. The creative team provides you with the [Product restock email file](/help/challenges/assets/email-assets/ProductRestockEmail.html.zip).

>[!BEGINTABS]

>[!TAB Task] 

## 1. Define the segment – Out-of-stock Wishlist Items

To target potential interested customers when products are restocked, create an audience that consists of customers:

* Who have added at least one item to their wish list (Use the event type: [!UICONTROL Commerce Save For Laters])
* Which was out of stock in the last three months (use stock quantity = 0)
* And have not since purchased the item.

>[!TIP] 
>Exclude all the Purchases event types where the SKU matches the SKU from the *Save For Later event*. You can find the field in the *Browse Variables* section.

Name this segment: `Out-of-stock-Wishlist`


### 2. Create the journey – Product restock notification

When a previously out-of-stock item is back in stock, notify customers who had added an out-of-stock item with a call to start shopping now that the item is back in stock.

1. Call the journey: `Product Restock`
2. The journey should be triggered when a product is back in stock
3. Send the *Product restock email* to
4. Users who had added this item to their wishlist while it was out of stock

>[!TAB Success criteria]

Test your journey:

1. Make sure that the read segment event has the Namespace  = `Luma CRM ID`
1. Override the default email parameters and set it to your own email address (see email #1 for instructions)
1. Set the journey to test mode
1. Trigger an event - enter the following data:

   * Description: Forget fancy machines and costly memberships - the Harmony Lumaflex Strength Band Kit is all you need for an amazing workout. The kit has everything you need for a range of strengthening and toning exercises.
   * Name: Harmony Lumaflex Strength Band Kit
   * Price: 22
   * Product ID: 24-UG03
   * Product Image URL: https://publish1034.adobedemo.com/content/dam/luma/en/products/gear/fitness-equipment/ug03-bk-0.jpSKU: 24-UG03
   * Stock Event Type: restock
   * Profile Identifier: Jenna_Palmer9530@emailsim.io

You should receive the "Luma Email Product Replenishment" email with the product details and the personalization for Jenna.

>[!TAB Check your work]

This is what your segment should look like:

![Segment - Out-of-stock Wishlist Items](/help/challenges/assets/C1-S2.png)


This is what your journey should look like:

![Product replenishment journey](/help/challenges/assets/c3-j3-journey.png)

Condition: In wishlist

![Condition - in wishlist](/help/challenges/assets/c3-j3-condition.png)

Condition code:

```in(@{LumaProductRestock._wwfovlab065.sku},#{ExperiencePlatform.ExperienceEvents.experienceevent.all(currentDataPackField.eventType=="commerce.saveForLaters").productListItems.all().SKU})```


>[!TIP]
> * Select the SKU under the Save for Laters in the *Browse Variables* section 
> * Use the compare option when dropping the SKU under Save for later into the event field

Check the code on the bottom-right corner of the Edit segment screen, under Events. The code should look like this:

Code:
```(Include have at least 1 Save For Laters event where ((Stock Quantity equals 0)) THENExclude all  Purchases events where ((SKU equals Save For Laters1 SKU)) ) and occurs in last 3 month(s)```

>[!ENDTABS]

### Create Email - Luma-Product Replenishment

Notify customers who had added an out-of-stock item with a call to start shopping now that the item is back in stock.



>[!TIP]
>
> Use the existing business event. Add a condition that checks that the restock SKU is included in (any) event type save for laters.
>




