---
title: Create a loyalty status welcome email - Challenge
description: Understand the basics of building a journey in the journey canvas.
kt: 8109
feature: Journeys
role: User
level: Beginner
hide: yes
hide from toc: yes
exl-id: 6fd58b8e-7178-495d-a85d-eb67fc4f3acf
---
# Create a loyalty status welcome email - Challenge

![Loyalty status welcome email - Challenge Banner](/help/challenges/assets/email-assets/luma-transactional-onboarding-1.png)

|Challenge|Create a loyalty status welcome email|
|---|---|
|Persona|Journey Manager|
|Required skills|<ul><li>[Create segments](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/profiles-segments-subscriptions/create-segments.html)</li> <li>[Segment qualification](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-journeys/use-case-read-segment-qualification.html)</li><li>[Import HTML content](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-messages/create-emails/import-and-author-html-email-content.html)</li></ul>|
|Assets to download|[StatusUpgradeEmail.zip](/help/challenges/assets/email-assets/StatusUpgradeEmail.zip)|

## The Story

Luma offers a loyalty program as a way to attract and retain their customers. The program offers four different tiers: Bronze, silver, gold, and platinum. Each loyalty tier receives different rewards, discounts, and other special incentives as a reward for their repeat business.

To underline the special platinum status. Luma wants to send a welcome email to customers, when they reach the platinum tier.

## Your Challenge

You have been asked to set up a journey that automatically sends a welcome email to customers when they reach the platinum loyalty tier.

>[!BEGINTABS]

>[!TAB Task]

When a loyalty customer qualifies for the platinum tier, they should receive and email to congratulate and inform them of their new benefits. The creative team has provided an HTML file **[Luma – status upgrade - welcome eMail](/help/challenges/assets/email-assets/StatusUpgradeEmail.zip)** with the email body.

1.   Create a [!UICONTROL segment] in Journey Optimizer called `Luma – status upgrade`.
2.   Create a journey called `Luma – New Status – platinum`. 
     1. A customer moves into the journey, when they qualify for the platinum loyalty tier. 
     2. The customer should receive an email message labeled `Luma – Platinum Status - Welcome`, with the subject line `Welcome to Platinum Status, (recipient's first name)!` with the email body provided by the creative team. This is a [!UICONTROL transactional] eMail.
     3. When uploading the HTML file, you notice that the email is referring to "diamond" status, rather than "platinum". Rather than requesting a new file from the creative team, update the email in the Email Designer.

>[!TAB Success criteria]

Test your journey: 

1.  Make sure that the [!UICONTROL Read Segment Activity] has the [!UICONTROL namespace] set to **[!DNL Luma CRM id(lumaCrmId)]**
2.  Override the default [!UICONTROL email parameters] and set it to your own email address 
       * Show the hidden values by clicking the eye symbol.
       * In the [!UICONTROL Email parameters], click on the T symbol (enable parameter override

        ![Override email parameters](/help/challenges/assets/c3-override-email-paramters.jpg)
    
       * Click into the [!UICONTROL Address field]
       * On the next screen add your email address in parentheses: `"yourname@yourdomain"` in the expression editor and click ok.
    
3.  Set the journey to test mode 
4.  Trigger an event 
5.  Add the following [!DNL CRM ID] for [!DNL Stanleigh Stooke] into the [!UICONTROL Profile Identifier] field: `4f34057d9d9e792c28ba18ecae378e98`

**Result:** You should receive the personalized *Luma – platinum Status - Welcome* email. 

>[!TAB Check your work]

This is what your journey should look like: 

![platinum-status-upgrade-journey](/help/challenges/assets/journey-luma-status-upgrade.png)


This is what the email should look like:

![Luma – status upgrade - welcome eMail](/help/challenges/assets/status-upgrade-welcome-email.png)

>[!ENDTABS]
