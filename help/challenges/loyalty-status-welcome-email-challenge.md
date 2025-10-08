---
title: Create a loyalty status welcome email - Challenge
description: Build a journey that automatically sends a welcome email to customers when they reach loyalty tier.
jira: KT-8109
feature: Journeys
role: User
level: Beginner
last-substantial-update: 2023-02-01
exl-id: 6fd58b8e-7178-495d-a85d-eb67fc4f3acf
---
# Create a loyalty status welcome email - Challenge

|Challenge|Create a loyalty status welcome email|
|---|---|
|Persona|Journey Manager|
|Required skills|<ul><li>[Create segments](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/profiles-segments-subscriptions/create-segments.html)</li> <li>[Segment qualification](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/journeys/use-case-read-segment-qualification.html)</li><li>[Import HTML content](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/email-channel/import-and-author-html-email-content.html)</li></ul>|
|Assets to download|[StatusUpgradeEmail.zip](/help/challenges/assets/email-assets/StatusUpgradeEmail.zip)|

{style="table-layout:auto"}

## The story

Luma offers a loyalty program as a way to attract and retain their customers. The program offers four different tiers: Bronze, silver, gold, and platinum. Each loyalty tier receives different rewards, discounts, and other special incentives as a reward for their repeat business.

To underline the special platinum status, Luma wants to send a welcome email to customers when they reach the platinum tier.

## Your challenge

You have been asked to set up a journey that automatically sends a welcome email to customers when they reach the platinum loyalty tier.

>[!BEGINTABS]

>[!TAB Task]

When a loyalty customer qualifies for the platinum tier, they should receive an email to congratulate and inform them of their new benefits. The creative team has provided an HTML file **[Luma - status upgrade - welcome eMail](/help/challenges/assets/email-assets/StatusUpgradeEmail.zip)** with the email body.

1. Create a [!UICONTROL segment] in Journey Optimizer called `Luma - platinum status`.

1. Create a journey called `Luma - New Status - platinum`. 

   1. A customer moves into the journey when they qualify for the platinum loyalty tier.

   1. The customer should receive an email message labeled `Luma - Platinum Status - Welcome`, with the subject line `Welcome to Platinum Status, {firstName}!` with the email body provided by the creative team. This is a [!UICONTROL transactional] email.

   1. When uploading the HTML file, you notice that the email is referring to "diamond" status, rather than "platinum". Rather than requesting a new file from the creative team, update the email in the [!UICONTROL Email Designer].

>[!TAB Success criteria]

Test your journey: 

1. Ensure that the [!UICONTROL Read Segment Activity] has the [!UICONTROL namespace] set to **[!DNL Luma CRM id(lumaCrmId)]**.

1. Override the default [!UICONTROL email parameters] and set it to your own email address: 
    * In the **[!UICONTROL Email parameters]**, click the T symbol (enable parameter override)

    * Click the **[!UICONTROL Address]** field.

    * On the next screen, add your email address in parentheses: `"yourname@yourdomain"` in the expression editor, then click **[!UICONTROL OK]**.

1. Set the journey to test mode.

1. Select **[!UICONTROL Trigger an event]**.

1. Add the following `CRM ID` for `Stanleigh Stooke` in the **[!UICONTROL Profile Identifier]** field: `4f34057d9d9e792c28ba18ecae378e98`

**Result:** You should receive the personalized *Luma - platinum Status - Welcome* email. 

This is what the email should look like:

![Luma - status upgrade - welcome eMail](/help/challenges/assets/status-upgrade-welcome-email.png)

>[!TAB Check your work]

This is what the segment should look like: 

![Luma - platinum status- segment](/help/challenges/assets/segment-luma-platinum-status.png)

This is what your journey should look like: 

![platinum-status-upgrade-journey](/help/challenges/assets/journey-luma-status-upgrade.png)

>[!ENDTABS]
