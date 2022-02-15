---
title: Create a loyalty status welcome email - Challenge
description: Understand the basics of building a journey in the journey canvas.
kt: 8109
feature: Journeys
role: User
level: Beginner
---

# Create a loyalty status welcome email - Challenge

## The Story

Luma, a fictional athletic apparel company, is looking to promote its latest apparel and gear collection and to drive sales for existing customers. The Luma marketing team asks you to implement a summer collection marketing campaign and additional use cases that improve the customer experience and increase retention.

Your challenge is to create journeys to implement the following use cases:

1. To promote the new Luma summer collection, send a summer collection announcement to a segment of existing customers email
2. Send an order confirmation email when someone completes an online purchase
3. Send an email when a loyalty customer moves to a new tier to congratulate and inform them of their new benefits
4. When a previously out-of-stock item is back in stock, notify customers who had favorited the out-of-stock item with a call to start shopping now that the item is back in stock

## YOUR CHALLENGE

### **Journey #3 – Diamond status upgrade welcome email**

Send an email when a loyalty customer moves to a new tier to congratulate and inform them of their new benefits.

1. Create a journey triggered when a customer moves into Diamond new loyalty tier (specifically when the customer enters the segment defined for a new Diamond level member) to send the “Luma – New Status – Diamond – Transactional” email
2. Once completed, put the journey in test mode and trigger the journey to send to yourself  

SUCCESS CRITERIA

You should receive the personalized “Luma – New Status- Diamond-Transactional” email.

### **Journey #4 – Product restock email**

When a previously out-of-stock item is back in stock, notify customers who had favorited the out-of-stock item with a call to start shopping now that the item is back in stock.

1. Create a journey that is triggered when Product ABC123 is back in stock. It should an email (*Luma Email Product Replenishment*) to notify users who had favorited the product while it was out of stock. The email has a call-to-action to start shopping.

   * In the journey, check whether the restocked item is in the customer’s wish list before sending the email.
   * Map contextual information from the *LumaProductRestock* event to personalize the email

2. To generate a wish list event for yourself, run the *Student Onboarding* Journey . Use either *LLWH06* as the SKU or another SKU of choice found on the [Luma website](https://publish1034.adobedemo.com/content/luma/us/en.html).

3. Once completed, put the journey in test mode and trigger the journey to send to yourself. Be sure to use the same SKU in the test event as you used when triggering the wish list event in the “Student Onboarding – Wishlist Event” journey

SUCCESS CRITERIA

You should receive the product restock email with the product you specified in the wish list event and test restock event.
