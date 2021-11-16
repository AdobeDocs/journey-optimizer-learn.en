---
title: Create Journeys - Challenge
description: Understand the basics of building a journey in the journey canvas.
kt: 8109
feature: Journeys
role: User
level: Beginner
---

# Create Journeys - Challenge

## The Story

Luma, a fictional athletic apparel company, is looking to promote its latest apparel and gear collection and to drive sales for existing customers. The Luma marketing team asks you to implement a summer collection marketing campaign and additional use cases that improve the customer experience and increase retention.

Your challenge is to create journeys to implement the following use cases:

1. To promote the new Luma summer collection, send a summer collection announcement to a segment of existing customers email
2. Send an order confirmation email when someone completes an online purchase
3. Send an email when a loyalty customer moves to a new tier to congratulate and inform them of their new benefits
4. When a previously out-of-stock item is back in stock, notify customers who had favorited the out-of-stock item with a call to start shopping now that the item is back in stock

## Let’s jump in

Create the following journeys in Journey Optimizer:

### **Journey #1 – Summer collection announcement**

YOUR CHALLENGE

To promote the new Luma summer collection, send a summer collection announcement to a segment of existing customers email.

1. Send “Luma – New Seasonal Collection Announcement” email to the Active Customer segment, holding out 10% of the audience as a control group.
2. If a recipient opens the *Luma – New Seasonal Collection Announcement* email within two days, send a follow-on email message with more targeted content:
   * Male customers should receive the *Luma Collection - Men’s* email
   * Female customers should receive the *Luma Collection- Women’s* email
   * Other customers should receive the *Luma – 20% off collection* email
3. After sending the targeted emails above, wait an hour, then listen for the email to be opened.
4. If the targeted email is not opened within 2 days, send the *Luma – 20% off sales* email as a final retargeting attempt.
5. Once completed, put the journey in test mode and trigger the journey to send to yourself.

SUCCESS CRITERIA

You should receive the following emails:

* *Luma – New Seasonal Collection Announcement*
* If you open the first email: The Luma collection email for either men or women if you added the gender, if not the Luma 20% off collection email
* If you did not open the second email: The *Luma – 20% off sales* email

### **Journey #2 – Order confirmation transactional email**

YOUR CHALLENGE

Send an order confirmation email when someone completes an online purchase.

>[!INFO]
>
>If you completed the [Create and Personalize Messages challenge](/help/challenges/create-and-personalize-emails.md), you can skip this journey and move to Journey #3.

1. Create a journey that is triggered when a customer completes a web purchase on the Luma site to send the “Luma – Website – Order confirmation” email.
2. Map contextual information from the *LumaOnlinePurchase* event to personalize the email. To personalize with contextual information, you must duplicate the *Luma – Website – Order confirmation* email and prefix it with your name and use that in the journey.
3. Once completed, put the journey in test mode and trigger the journey to send to yourself. You can use “LLWH06” for the product SKU (Stock Keeping Unit) when triggering the test event, or browse the products on the [Luma website](https://publish1034.adobedemo.com/content/luma/us/en.html) if you would like to pick a different product. The SKU can be found on each product page, but leave off the suffix that denotes color/size, for example “.1-XS”

SUCCESS CRITERIA

You should receive the personalized purchase confirmation email, with the specified product.

### **Journey #3 – Diamond status upgrade welcome email**

YOUR CHALLENGE

Send an email when a loyalty customer moves to a new tier to congratulate and inform them of their new benefits.

1. Create a journey triggered when a customer moves into Diamond new loyalty tier (specifically when the customer enters the segment defined for a new Diamond level member) to send the “Luma – New Status – Diamond – Transactional” email
2. Once completed, put the journey in test mode and trigger the journey to send to yourself  

SUCCESS CRITERIA

You should receive the personalized “Luma – New Status- Diamond-Transactional” email.

### **Journey #4 – Product restock email**

YOUR CHALLENGE

When a previously out-of-stock item is back in stock, notify customers who had favorited the out-of-stock item with a call to start shopping now that the item is back in stock.

1. Create a journey that is triggered when Product ABC123 is back in stock. It should an email (*Luma Email Product Replenishment*) to notify users who had favorited the product while it was out of stock. The email has a call-to-action to start shopping.

   * In the journey, check whether the restocked item is in the customer’s wish list before sending the email.
   * Map contextual information from the *LumaProductRestock* event to personalize the email

2. To generate a wish list event for yourself, run the *Student Onboarding* Journey . Use either *LLWH06* as the SKU or another SKU of choice found on the [Luma website](https://publish1034.adobedemo.com/content/luma/us/en.html).

3. Once completed, put the journey in test mode and trigger the journey to send to yourself. Be sure to use the same SKU in the test event as you used when triggering the wish list event in the “Student Onboarding – Wishlist Event” journey

SUCCESS CRITERIA

You should receive the product restock email with the product you specified in the wish list event and test restock event.

>[!INFO]
>
>[Check your work](/help/challenges/check-your-work/create-journeys.md) to see what the journeys should look like.
