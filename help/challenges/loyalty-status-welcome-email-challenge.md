---
title: Create a loyalty status welcome email - Challenge
description: Understand the basics of building a journey in the journey canvas.
kt: 8109
feature: Journeys
role: User
level: Beginner
hide: yes
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

To underline the special diamond status. Luma wants to send a welcome email to the customers, when they reach the diamond tier.

## Your Challenge

You have been tasked to set up a journey that automatically sends a welcome email to customers when they reach the diamond loyalty tier.

>[!NOTE]
> If you are working in a shared training sandbox, it is best practice to add your name or initials as a pre-fix to the name of any element you create.

### Create a Luma Diamond Status segment.

Create a segment in Journey Optimizer called **your name – Luma – Diamond Status**.

### Create the Luma – New Status – Diamond – Transactional email message

Create a welcome email message 

1. Create a transactional email message titled `(your name)_Luma – New Status – Diamond – Transactional email message`.
2. Give the email a subject line `Welcome to Diamond Status, (recipient's first name)!`.
3. Use the provided HTML file **[DiamondStatusEmail.html](/help/challenges/assets/email-assets/DiamondStatusEmail.html)** for the email body.


### **Journey #3 – Diamond status upgrade welcome email**

Send an email when a loyalty customer moves to a new tier to congratulate and inform them of their new benefits.

1. Create a journey triggered when a customer moves into Diamond new loyalty tier (specifically when the customer enters the segment defined for a new Diamond level member) to send the "Luma – New Status – Diamond – Transactional" email
2. Once completed, put the journey in test mode and trigger the journey to send to yourself  

SUCCESS CRITERIA

You should receive the personalized "Luma – New Status- Diamond-Transactional" email.
