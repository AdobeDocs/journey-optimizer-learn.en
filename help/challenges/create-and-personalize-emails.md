---
title: Create and personalize messages
description: Test your knowledge on how to create and personalize emails.
kt: 7531
feature: Journeys
role: User
level: Beginner
---

# Create and personalize messages

## The Story

Luma, a fictional athletic apparel company, is looking to promote its latest apparel and gear collection and to drive sales for existing customers. To support the new collection campaign, the Luma marketing team asks you to create two email messages that are sent to customers as part of the campaign.

## Have everything you need?

### SYSTEM REQUIREMENTS

* Access to a Journey Optimizer Journey instance  
* Make sure you have either Journey Manager or Journey Administrator rights
* AEM Assets Essentials must be provisioned for your sandbox
* The following assets should be available in your sandbox:
  * Luma Logo.png
  * Luma - Transactional - Order Confirmation 2.jpeg

>[!NOTE]
>
>If the assets are not available in your sandbox, [download all Luma assets](/help/challenges/assets/email-assets/luma-assets.zip).

### SKILLS YOU MIGHT NEED

To develop the knowledge and skills needed for this challenge, complete the following course:

* [Getting started with Journey Optimizer for Journey Managers and Administrators](https://experienceleague.adobe.com/?recommended=JourneyOptimizer-U-1-2021.1)  

### REQUIRED ACTIONS

If you haven’t already done so, from the Journey Optimizer Home Page, find the Create Test Profiles use case and complete it to create a test profile for yourself, using Email as the identity namespace. Optionally you can add  a street address (*street1*) to your test profile.

## Let’s jump in

### Email Message #1 – Summer collection announcement

Create an email to announce the arrival of the new Summer collection. You have received an html file from an agency with the design for the email body: [SeasonalCollectionEmail.html](/help/challenges/assets/SeasonalCollectionEmail.html)

1. Create an email message titled *(your name)_Luma – New Seasonal Collection*
2. Give the email a subject line: *(recipient’s first name), the new Luma collection is here!*
3. Use the provided HTML file for the email body  

SUCCESS CRITERIA

Preview the email using your test profile, and send a proof to yourself.

* The subject line should have your name in it
* The email body should match what you have seen in the preview.

### Email Message #2 – Order confirmation transactional email

Create an order confirmation email to be sent when a Luma customer completes an online order.  

1. Create an email message titled “(your name)_ Luma – Order confirmation”  

   * The subject line must be personalized with the recipients’ first name and must include the phrase “thank you for your purchase”  
   * In accordance to the Luma brand guideline the email should be structured as follows:

   * Header:
     * Luma logo (Luma_Logo.png)
     * Size 35%, centered white background  
     * It should have a link to the luma website: https://publish1034.adobedemo.com/content/luma/us/en.html 

   * Body Section 1:  
      * Image:  
        * Luma - Transactional - Order Confirmation 2.jpg
        * Margin: Top, bottom (10)
      * Text:
        * Heading: “Thank you for your purchase!”
        * Body: “Your order has been placed. Once your package ships, we will send you an email with a tracking number so you can track your order.”
         * Alignment: left  
         * Padding: left(95), right (95)  
       * A button: “View your order”
         * Background color: rgb (25, 121, 195)
         * Text color: rgb (101, 106, 119); font-size: 14 px
         * No border 
         * Height: 40 
         * Add a link to a website of your choice  
         * Left align with the text above (tip: use the container margin)  
       * A divider line:  
         * Line color:  #d3d3d3 rgb (211, 211, 211)
       * Text:  
         * *We are here to help you. If you have any questions, or need some help please let us know.*
         * *Let us know* should have a link to the support email: support.luma@emailcim.io  

     * Body Section 2: Order details with the following contextual information
       * Header: Purchase Order Number
       * List of products that were ordered  
       * Product price total  
       * Product name
       * Product quantity
       * Total price of the order
  
        >
        >[!TIP]
        >The order details section contains contextual event information. It is only possible to add the contextual information once the message has been added to a workflow. Do not publish the email before you have added it to the workflow and modified it with the contextual event information! Also, use the helper function.

     * Body Section 3: The customer information  
       * Header customer information
       * Shipping (first name, last name, street1, city), and billing addresses (first name, last name, street1, city), which should be listed next to each other (tip: add two columns for this section). It should populate the data from the customer profile.  
     * Footer
       * Social media links to Facebook and LinkedIn
       * Unsubscribe link 
       * Text color:  #afafaf rgb (175, 175, 175)

2. Create a journey that is triggered when a customer completes an online purchase on the Luma website site to send the *(your name)_ Luma – Website – Order confirmation* email

   * Call the journey “your name _Luma-Order Confirmation”
   * Use the event: LumaOnlinePurchase  

SUCCESS CRITERIA

1. Preview your message using the test profile you created. The personalization should reflect the data in your test profile:  
   * Subject line should start with your test profile’s first name 
   * The customer information should have your test profile’s first and last name, and the city. If you added the street address, it should appear, if not that field remains blank. 
2. Publish the email and send it to yourself by running the journey you created in test mode: 
   * Select event type “commerce.purchases” 
   * Use “LLWH06” for the product SKU when triggering the test event in test mode.  
   * Add any additional information  
   * Image URL: https://publish1034.adobedemo.com/content/dam/luma/en/products/women/tops/hoodies-&-sweatshirts/wh06-purple_main.jpg 
   * You should receive the email, and all personalization fields should be populated correctly.

>[!INFO]
>
>[Check your work](/help/challenges/check-your-work/create-and-personalize-emails.md) to see what the emails should look like.
