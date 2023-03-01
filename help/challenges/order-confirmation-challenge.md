---
title: Create an order confirmation email
description: Test your knowledge on how to create and personalize transactional messages.
kt: 7531
feature: Journeys
role: User
level: Beginner
hide: yes
exl-id: ec86e2ac-081d-47aa-a948-007107baa2b4
---

# Create an order confirmation email

![Order confirmation](/help/challenges/assets/email-assets/luma-transactional-order-confirmation.png)

|Challenge|Create an order confirmation transactional email|
|---|---|
|Persona|Journey Manager|
|Required skills|<ul><li>[Create email content with the message editor](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/email-channel/create-content-with-the-email-designer.html?lang=en)</li> <li>[Use contextual event information for personalization](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/personalize-content/use-contextual-event-information-for-personalization.html?lang=en)</li><li>[Use helper functions for personalization](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/personalize-content/use-helper-functions-for-personalization.html?lang=en)</li></ul>|
|Assets to download|[Order confirmation assets](/help/challenges/assets/email-assets/order-confirmation-assets.zip)|

{style="table-layout:auto"}

## The story

Luma is launching their online store and want to ensure a good customer experience. They are providing an order confirmation email once a customer has placed an order.

## Your challenge

Create a journey that sends an order confirmation email when a Luma customer completes an online order.

>[!BEGINTABS]

>[!TAB Task]

1. Create a journey called `Luma - Order Confirmation`.

1. Use the event: `LumaOnlinePurchase`.

1. Create a **transactional**  email called `Luma - Order Confirmation`.

   * The subject line "Thank you for your purchase, `FirstName`"

   * Use the `Luma - Order summary` template and modify it:

     * Remove the `You may also like` sections

     * Add the unsubscribe link at the bottom of the email 

The email should be structured as follows:
<table>
<tr>
<td>
  <div>
     <strong> Header section</strong>
      </div>
  </td>
  <td>
      <p>
     <li>luma_logo.png</li>
    <li>It should link to the luma website: https://luma.enablementadobe.com/content/luma/us/en.html</li>
    <p>
    </td>
  </tr>
  <tr>
  <td>
  <div>
    <strong>Order confirmation section
    </strong>
  </td>
  <td>
    <p>
    <strong>Text</strong><p>
    <em>Hey {firstName},</em><p>
   <div>
    <p>
     <em>Your order has been placed.
    <p>Once your package ships, we will send you an email with a tracking number so you can track your order.</p></em>
    </strong>
    </tr>
  </td>
 <td>
  <div>
     <strong> Ship to section</strong>
      </div>
      <p>
      <li>First name and last name are from the profile
      <li>Replace the hard-coded address in the template with the <b>shipping address</b>
      <li>The address details are contextual attributes from the event (street 1, city, postal code, state)
      <li> Remove <i>Discount, Total, Arriving</i></p>
  </td>
  <td>
  <p> Ship to:</p>
      <em>{firstName} {lastName}<br>
     {Street 1}<br>
     {City}, {State} {postalCode}<br></em></p>
  </td>
 <tr>
<td>
  <div>
     <strong>Order details section</strong>
      </div>
       <p><li>Add this section below the <b>Ship to</b> section.
      </p><br>
      <p><b>Tips:</b>
      <li>Use the structure component <b>1:2 column left</b> for this section
      <li>This is contextual event information.
      <li>Use the [!UICONTROL helper function]: [!UICONTROL Each]
      <li>Switch to the code editor format to add the contextual data.
  </td>
  <td>
    <strong>Header</strong>
    <p>
  Order: <em>{purchaseOrderNumber}</em>
    </p>
    <strong>List of products that were ordered:
  </strong>
  <p>List each product in the order with an image, the price, and the name.
  <p>The layout of each item should look like this:
   <img alt="order" src="./assets/c2-order.png"> 
<p><b>Add the link to the cart</b>
<p>Replace the order ID in the URL  with the purchase order number:
   <i>https://luma.enablementadobe.com/content/luma/us/en/user/account/order-history/order-details.html?orderId=90845952-c2ea-4872-8466-5289183e4607</i>
</td>
  </tr>
</table>

>[!TIP]
>
>To allow you to troubleshoot your journeys, best practice is to add an alternative path to all message actions if there is a timeout or error.

>[!TAB Success Criteria]

Trigger the Journey that you created in test mode and send the email to yourself:

1. Before you switch to test mode, override the email parameters to send to the test email to your email address:
    1. Open the email details view.
    1. In the Email parameters section, click on the T symbol (enable parameter override
    1. Click into the Address field
    1. On the next screen add your email address in parentheses: *"yourname@yourdomain"* in the expression editor and click ok.  
1. Put the journey into test mode
1. Trigger the event with the following parameters:
    * Set the profile identifier to: Identity value:`a8f14eab3b483c2b96171b575ecd90b1`
    * Event Type: commerce.purchases
    * `Quantity`: 1
    * `Price Total:` 69
    * `Purchase Order Number:` 90845952-c2ea-4872-8466-5289183e4607
    * `SKU:` LLMH09
    * `City:`San Jose
    * `Postal Code:` 95119
    * `State`: CA
    * `Street:` 245 Park Avenue

You should receive the personalized purchase confirmation email. 

*  The subject line should have the test profile's first name: Leora

* This is what your email body should look like:

![Email](/help/challenges/assets/c2-email.png)

>[!TAB Check your work]

**Journey**

![Journey](/help/challenges/assets/c2-journey.png)


**Email**

**Subject line:**

Thank you for your purchase, {{ profile.person.name.firstName }}!

**Ship to section:**

This is what your code should look like:

```javascript
{{ profile.person.name.firstName }} {{ profile.person.name.lastName }}
{{context.journey.events.454181416.commerce.shipping.address.street1}}
{{context.journey.events.454181416.commerce.shipping.address.city}}, {{context.journey.events.454181416.commerce.shipping.address.state}} {{context.journey.events.454181416.commerce.shipping.address.postalCode}}
```

*event.45481416* is a different number for you. 

TIP: Personalize each line separately

**Order detail section:**

This is what your code should look like:

Header:

```javascript
Order #: {{context.journey.events.1627840522.commerce.order.purchaseOrderNumber}}
```

**List of products:**

Use the helper function "each" to create the list of products. Display them in a table. This is what your code should look like (with your specific variables such as your event ID - instead of `454181416` and your Organization I instead of `techmarketingdemos` ):

```javascript
{{#each context.journey.events.454181416.productListItems as |product|}}<tr> <th class="colspan33"><div class="acr-fragment acr-component image-container" data-component-id="image" style="width:100%;text-align:center;" contenteditable="false"><!--[if mso]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="text-align: center;" ><![endif]--><img src="{{context.journey.events.454181416.productListItems.VYG__902489191a0a40e67f51f17f3ea9e2dfaf2dea3bd0bebe8b._techmarketingdemos.product.imageUrl}}" style="height:auto;width:100%;" height="233" width="233"><!--[if mso]></td></tr></table><![endif]--></div></th> <th class="colspan66"><div class="acr-fragment acr-component" data-component-id="text" contenteditable="false"><div class="text-container" contenteditable="true"><p><span style="font-weight:700;">{{context.journey.events.454181416.productListItems.VYG__902489191a0a40e67f51f17f3ea9e2dfaf2dea3bd0bebe8b._techmarketingdemos.product.name}}</span></p></div></div><div class="acr-fragment acr-component" data-component-id="text" contenteditable="false"><div class="text-container" contenteditable="true"><p>${{context.journey.events.454181416.productListItems.VYG__902489191a0a40e67f51f17f3ea9e2dfaf2dea3bd0bebe8b._techmarketingdemos.product.price}}.00</p></div></div></th></tr> {{/each}}
```

**View order button:**

`https://luma.enablementadobe.com/content/luma/us/en/user/account/order-history/order-details.html?orderId={{context.journey.events.454181416.commerce.order.purchaseOrderNumber}}`

**Price total:**

Total:`${{context.journey.events.1627840522.commerce.order.priceTotal}}.00` 


>[!ENDTABS]