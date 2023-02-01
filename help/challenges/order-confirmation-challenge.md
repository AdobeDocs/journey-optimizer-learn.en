---
title: Create an order confirmation email
description: Test your knowledge on how to create and personalize transactional messages
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
|Required skills|<ul><li>[Create email content with the message editor](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-messages/create-email-content-with-the-message-editor.html?lang=en)</li> <li>[Use contextual event information for personalization](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/personalize-content/use-contextual-event-information-for-personalization.html?lang=en)</li><li>[Use helper functions for personalization](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/personalize-content/use-helper-functions-for-personalization.html?lang=en)</li></ul>|
|Assets to download|[Order confirmation assets](/help/challenges/assets/email-assets/order-confirmation-assets.zip)|

## The Story

Luma, is launching their online store and want to ensure a good customer experience by providing an order confirmation email once a customer has placed an order.



## Your Challenge

Create a journey that sends an order confirmation email when a Luma customer completes an online order.

>[!BEGINTABS]

>[!TAB Task]

1.  Create a journey called `Luma - Order Confirmation` 
2.  Use the event: `LumaOnlinePurchase`
3.  Create the order confirmation email called `Luma - Order Confirmation`:
  
  * Category transactional - make sure to select the transactional email surface
  * The subject line must be personalized with the recipients' first name and must include the phrase "thank you for your purchase"
  * Use the `Luma - Order summary` template and modify it:
    * Remove the `You may also like` sections
    * Add the unsubscribe link at the bottom of the email 

The email should be structured as follows:
<table>
<tr>
<td>
  <div>
     <strong> Header Section</strong>
      </div>
  </td>
  <td>
      <p>
     <li>luma_logo.png</li>
    <li>It should have a link to the luma website: https://publish1034.adobedemo.com/content/luma/us/en.html</li>
    <p>
    </td>
  </tr>
  <tr>
  <td>
  <div>
    <strong>Order Confirmation Section
    </strong>
  </td>
  <td>
    <p>
    <strong>Text</strong><p>
    <em>Hey {firstName}</em><p>
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
      <li>Replace the hard coded address in the template with the <b>shipping address</b>
      <li>The address details are contextual attributes from the event (street 1, city, postal code, state)
      <li> Remove the Discount, Total, Arriving</p>
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
     <strong>Order Details Section</strong>
      </div>
       <p><li>Add this section below the <b>Ship to</b> section.
      </p><br>
      <p><b>Tips:</b>
      <li>Use the structure component `1:2 column left` for this section
      <li>This is contextual event information.
      <li>Use the [!UICONTROL helper function]: [!UICONTROL Each]
      <li>Switch to the code editor format to add the contextual data.
  </td>
  <td>
    <strong>Header</strong>
    <p>
    <em>Order: `purchaseOrderNumber`</em>
    </p>
    <strong>List of products that were ordered:
  </strong>
  <p>Each of the items should be formatted like this:
   <img alt="order" src="./assets/c2-order.png"> 
</p>
</td>
  </tr>
</table>


>[!TIP]
>
>To allow you to troubleshoot your journeys, best practice is to add an alternative path to all message actions in case of timeout or error.

>[!TAB Success Criteria]

Trigger the Journey you created in test mode and send the email to yourself:

1.  Show the hidden values by clicking the eye symbol:
    1.  In the Email parameters click on the T symbol (enable parameter override
      ![Override email parameters](/help/challenges/assets/c3-override-email-paramters.jpg)
    2.  Click into the Address field
    3.  On the next screen add your email address in parentheses: *yourname@yourdomain* in the expression editor and click ok.  
2.  Put the journey into test mode
3.  Trigger the event with the following parameters:
    * Set the profile identifier to: Identity value:`a8f14eab3b483c2b96171b575ecd90b1`
    * Event Type: commerce.purchases
    * `Quantity`: 1
    * `Price Total:` 69
    * `Purchase Order Number:` 6253728
    * `SKU:` LLMH09
    * `City:` Washington
    * `Postal Code:` 20099
    * `State`: DC
    * `Street:` Thierer Terrace

You should receive the personalized purchase confirmation email, with the specified product.

*   The subject line should have the test profile's first name: Leora
*   The order detail section should be populated with the order details you entered while testing

>[!TAB Check your work]

**Journey**

![Journey](/help/challenges/assets/c2-journey.png)


**Email**

**Subject line:**

Thank you for your purchase, {{ profile.person.name.firstName }}!

This is what your email body should look like:

![Email](//help/challenges/assets/c2-email.png)

**Ship to section:**

This is what your code should look like:

```javascript
{{ profile.person.name.firstName }} {{ profile.person.name.lastName }}
{{context.journey.events.454181416.commerce.shipping.address.street1}}
{{context.journey.events.454181416.commerce.shipping.address.city}}, {{context.journey.events.454181416.commerce.shipping.address.state}} {{context.journey.events.454181416.commerce.shipping.address.postalCode}}
```

*event.45481416* will be a different number for you. 

TIP: Personalize each line separately

**Oder detail section:**

This is what your code should look like:

Header:

```javascript
Order #: {{context.journey.events.1627840522.commerce.order.purchaseOrderNumber}}
```

**List of products:**

Use the helper function "each" to create the list of products. Display them in a table. This is what your code should look like (with your specific variables such as your event ID - instead of `454181416` and the your Organization I instead of `techmarketingdemos` ):

```javascript
{{#each context.journey.events.454181416.productListItems as |product|}}<tr> <th class="colspan33"><div class="acr-fragment acr-component image-container" data-component-id="image" style="width:100%;text-align:center;" contenteditable="false"><!--[if mso]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="text-align: center;" ><![endif]--><img src="{{context.journey.events.454181416.productListItems.VYG__902489191a0a40e67f51f17f3ea9e2dfaf2dea3bd0bebe8b._techmarketingdemos.product.imageUrl}}" style="height:auto;width:100%;" height="233" width="233"><!--[if mso]></td></tr></table><![endif]--></div></th> <th class="colspan66"><div class="acr-fragment acr-component" data-component-id="text" contenteditable="false"><div class="text-container" contenteditable="true"><p><span style="font-weight:700;">{{context.journey.events.454181416.productListItems.VYG__902489191a0a40e67f51f17f3ea9e2dfaf2dea3bd0bebe8b._techmarketingdemos.product.name}}</span></p></div></div><div class="acr-fragment acr-component" data-component-id="text" contenteditable="false"><div class="text-container" contenteditable="true"><p>${{context.journey.events.454181416.productListItems.VYG__902489191a0a40e67f51f17f3ea9e2dfaf2dea3bd0bebe8b._techmarketingdemos.product.price}}.00</p><p>Quantity: {{context.journey.events.454181416.productListItems.quantity}}</p></div></div></th></tr> {{/each}}
```

**Price total:**

Total:`${{context.journey.events.1627840522.commerce.order.priceTotal}}.00` 


>[!ENDTABS]