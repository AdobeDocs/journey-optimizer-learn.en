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

Create a journey that sends an order confirmation email when a Luma customer completes an online order. The Luma 

>[!BEGINTABS]

>[!TAB Task]

1.  Create a journey called `Luma - Order Confirmation` 
2.  Use the event: `LumaOnlinePurchase` as a trigger
3.  Create the order confirmation email called `Luma - Order Confirmation`:
  
  * Category transactional - make sure to select the transactional email surface
  * The subject line must be personalized with the recipients' first name and must include the phrase "thank you for your purchase"
  * Use the `Luma - Order summary` template and modify it:

The email should be structured as follows:
<table>
<tr>
<td>
  <div>
     <strong> Header Section</strong>
      </div>
  </td>
  <td>
    <strong>Luma logo</strong>
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
    <em>Hey {first name}</em><p>
    <li>Alignment: left  </li>
   <li>Text color: rgb(69, 97, 162) #4461a2; 
   <li>font-size: 20px</li>
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
      <p><li>Replace the hard coded address in the template with the shipping address 
      <li>The details are contextual attributes from the event (street, city, postal code, state)
      <li>First name and last name are from the profile
      <li> Remove the Discount, Total, Arriving</p>
  </td>
  <td>
  <p> Ship to:</p>
      <em>First Name Last Name<br>
      Address<br></em></p>
  </td>
 <tr>
<td>
  <div>
     <strong>Order Details Section</strong>
      </div>
       <p><li>Add this section between the <b>Ship to</b> section and the <b>View Order</b> button
      </p><br>
      <p><b>Tips:</b>
      <li>This is contextual event information.
      <li>Use the [!UICONTROL helper function]: [!UICONTROL Each]
      <li>Switch to the code editor format to add the contextual data.
      <li>Put the information into containers using DIV tags.
  </td>
  <td>
    <strong>Header</strong>
    <p>
    <em>Order {Purchase Order Number}</em>
    </p>
    <strong>List of products that were ordered:
  </strong>
  <p>Each of the items should be formatted like this:
   <img alt="order" src="./assets/c2-order.png"> 
</p>
<strong>Product Image:</strong>
<li>class: cart-item-chair
<li>style: border-box: min-height:40px</li>
<li>padding top and bottom:20px</li>
<li>padding-left:80px</li>
<li>border-radius:0px</li>
<li>Use as background image for the container</li>
<li>background-position: 0% 50%</li>
<li>background-size: 60px</li>
<li>background-repeat: no-repeat</li>
<p>
<strong>Price:</strong>
<li>Format = H5</li>
<li>style = box-sizing:border-box</li>
<li>margin-bottom:5px</li>
<li>margin-top:0px;</li>
<p>
<strong>Name and Quantity:</strong>
<li>class=text-small</li>
<li>style=box-sizing: border-box</li>
<li>padding-top: 5px</li>
<li>color: rgb(101, 106, 119)</li>
<li>font-size:14px</li>
<p>
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
    * Set the profile identifier to: Jenna_Palmer9530@emailsim.io
    * Event Type: commerce.purchases
    * Name: Sprite Yoga Companion Kit
    * Quantity: 1
    * Price Total: 61
    * Order number: 6253728
    * SKU: 24-WG080
    * productImageURL: <https://publish1034.adobedemo.com/content/dam/luma/en/products/gear/fitness-equipment/luma-yoga-kit-2.jpg>

You should receive the personalized purchase confirmation email, with the specified product.

*   The subject line should start with your test profile's first name: Jenna
*   The order detail section should be populated with the order details you entered while testing
*   The customer information should have your test profile's city and postal code:

    43913 Thierer Terrace,
    Washington DC 20099



>[!TAB Check your work]

** Journey

![Journey](/help/challenges/assets/c2-journey.png)


** Email

**Subject line:**

{{ profile.person.name.firstName }}, thank you for your purchase!


**Oder detail section:**

![Order detail section](/help/challenges/assets/c2-order-detail-section.png)

This is what your code should look like:

Header:

```javascript
Order: {{context.journey.events.1627840522.commerce.order.purchaseOrderNumber}}
```

List of products:

Use the helper function "each" to create the list of products. This is what your code should look like:

```javascript
{{#each context.journey.events.1911672547.productListItems as|product|}}
<div class="cart-item-chair" style="box-sizing:border-box;min-height:40px;padding-top:20px;padding-bottom:20px;padding-left:80px;border-radius:0px;background-image:url({{product._wwfovlab065.productImageURL}});background-position:0% 50%;background-size:60px;background-repeat:no-repeat;">
<h5 style="box-sizing:border-box;margin-bottom:5px;font-size:16px;line-height:20px;margin-top:0px;">${{product.priceTotal}}.00</h5>
<div class="text-small" style="box-sizing:border-box;padding-top:5px;color:rgb(101, 106, 119);font-size:14px;">{{product.name}}</div><div class="text-small" style="box-sizing:border-box;padding-top:5px;color:rgb(101, 106, 119);font-size:14px;">Quantity: {{product.quantity}}</div></div><div class="divider-small" style="box-sizing:border-box;height:1px;margin-top:10px;margin-bottom:10px;background-color:rgb(209, 213, 223);"> </div>
{{/each}}

Total: ${{context.journey.events.1627840522.commerce.order.priceTotal}} 
```

**Customer information Section**

![Customer address](assets/c2-customer-information.png)

The personalization should look like this:

```javascript
{{profile.homeAddress.street1}}
{{profile.homeAddress.city}},{{profile.homeAddress.state}} {{profile.homeAddress.postalCode}}
```

>[!ENDTABS]