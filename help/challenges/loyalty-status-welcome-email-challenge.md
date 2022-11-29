---
title: Create a loyalty status welcome email - Challenge
description: Understand the basics of building a journey in the journey canvas.
kt: 8109
feature: Journeys
role: User
level: Beginner
hide: yes
exl-id: 6fd58b8e-7178-495d-a85d-eb67fc4f3acf
---
# Create a loyalty status welcome email - Challenge

![AJO Loyalty status welcome email - Challenge Banner](/help/challenges/assets/email-assets/luma-transactional-onboarding-1.png)

|Challenge|Create a loyalty status welcome email|
|---|---|
|Persona|Journey Manager|
|Required skills|<ul><li>[Create email content with the message editor](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-messages/create-email-content-with-the-message-editor.html?lang=en)</li> <li>[Use contextual event information for personalization](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/personalize-content/use-contextual-event-information-for-personalization.html?lang=en)</li><li>[Use helper functions for personalization](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/personalize-content/use-helper-functions-for-personalization.html?lang=en)</li></ul>|
|Assets to download|[Order confirmation assets](/help/challenges/assets/email-assets/order-confirmation-assets.zip)|

## The Story

Luma offers a loyalty program as a way to attract and retain their customers. The program offers four different levels: Silver, gold, platinum, and diamond.

Each loyalty tier receives different levels or rewards, discounts, and other special incentives as a reward for their repeat business.

To underline the special diamond status. Luma wants to send a welcome email to customers, when they reach the diamond tier.

## Your Challenge

You have been tasked to set up a journey that automatically sends a welcome email to customers when they reach the diamond loyalty tier.

>[!NOTE]
> If you are working in a shared training sandbox, it is best practice to add your name or initials as a pre-fix to the name of any element you create.

>[!BEGINTABS]

>[!TAB Task]

Send an email when a loyalty customer moves to a the Diamond tier to congratulate and inform them of their new benefits. The 

1.   Create a segment in Journey Optimizer called **your name – Luma – Diamond Status**
2.   Create a journey triggered when a customer moves into Diamond new loyalty tier (specifically when the customer enters the segment defined for a new Diamond level member) to send the "Luma – New Status – Diamond – Transactional" email
    1. Create a transactional email message titled `(your name)_Luma – New Status – Diamond – Transactional email message`.
    2. Give the email a subject line `Welcome to Diamond Status, (recipient's first name)!`.
    3. Use the provided HTML file **[DiamondStatusEmail.html](/help/challenges/assets/email-assets/DiamondStatusEmail.html)** for the email body.
3.  Once completed, put the journey in test mode and trigger the journey to send to yourself  


### Create the Luma – New Status – Diamond – Transactional email message

Create a welcome email message 

1. 

### **Journey #3 – Diamond status upgrade welcome email**


>[!TAB Success criteria]

Test your journey: 

1. Make sure the segment qualification event has the  Namespace  = Email 
2. Override the default email parameters and set it to your own email address 
3. Set the journey to test mode 
4. Trigger an event 
5. Add the following email address into the Profile Identifier field: Jenna_Palmer9530@emailsim.io 

You should receive the personalized "Luma – New Status- Diamond-Transactional" email. 

>[!TAB Check your work]

This is what your journey should look like: 

![Diamond-status-upgrade-journey](/help/challenges/assets/journey-luma-diamond-status-upgrade.png)

>[!ENDTABS]
