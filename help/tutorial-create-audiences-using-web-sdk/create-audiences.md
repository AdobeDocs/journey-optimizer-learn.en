---
title: Creating Audiences in Adobe Journey Optimizer
description: Learn how to define and build targeted audiences in AJO to power personalized customer journeys and real-time decisioning
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-04-30
jira: KT-17923
exl-id: d90f1868-0514-49b2-832d-82460883b6e4
---
# Creating Audiences in Adobe Journey Optimizer


Audiences in Adobe Experience Platform are groups of users created based on their actions, preferences, or profile information to deliver personalized experiences.

* Log in to Journey Optimizer
* Navigate to Customer -> Audiences ->Create audience
* Create Audiences using the Build Rule method
 
   ![audience](assets/rule-based-audience.png)

*   Create the following 3 Audiences 

    *   Customers Interested in Stocks

    *   Customers Interested in Bonds

    *   Customers Interested in CD


*   Ensure that the evaluation method for each audience is set to _**Edge**_ for real-time qualification.
![edge-audience](assets/audience-edge.png)

*   Use the PreferredFinancialInstrument field to segment users based on their selected investment interest—such as Stocks, Bonds, or CDs

 ![event](assets/event-attribute.png)

![PreferredFinancialInstrument](assets/stock-customers.png)




>[!NOTE]
>
>>If the PreferredFinancialInstrument field is not visible in the events tab, click the settings icon and toggle the Show the full XDM schema.



![toggle-full-xdm-schema](assets/show-custom-fields.png)
