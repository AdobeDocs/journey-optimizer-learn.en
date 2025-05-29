---
title: Personalizing offers with Ranking formulas based on user zip code and income
description: Use Adobe Journey Optimizer's ranking formulas to dynamically serve the most relevant financial offers—tailored to each user's ZIP code and income level—for higher engagement and smarter personalization.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-27
jira: KT-18188

---
# Personalizing offers with Ranking formulas based on user zip code and income

This use case demonstrates how to deliver personalized financial offers by leveraging user attributes like ZIP code and annual income within Adobe Journey Optimizer. By using ranking formulas, offers are intelligently scored and prioritized based on location-specific promotions and income-based eligibility. For example, high-yield CDs can be promoted to users in affluent ZIP codes, while diversified investment options are shown to emerging investors. Ranking formulas ensures that each user receives offers that are both relevant and financially appropriate. Ranking criteria are defined using profile attributes, contextual signals, and optional AI models to further enhance decision precision. Offers are delivered in real-time through web or email channels, driving higher engagement and conversion. This approach combines business logic with data-driven personalization to elevate the user experience and marketing impact.

## Prerequisites

This tutorial builds on key Adobe Journey Optimizer and Adobe Experience Platform concepts. Before proceeding, ensure that the following prerequisites are met:

*   [The Identity Stitching Tutorial](https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorial-on-identity-stitching-in-aep/introduction) has been completed, with CRM IDs successfully associated with ECIDs in Adobe Experience Platform.

*   Familiar with creating Offer Items in AJO, including content definition, metadata setup, and eligibility rules.

*   Familiar with configuring Channels (such as Web or Email) for offer delivery.

*   Familiar with creating and activating Campaigns in AJO.

*   Familiar with using Adobe Launch (Tags) to deploy the Web SDK and send events containing identity and profile data.

This tutorial covers the next steps in offer decisioning:

*   Creating a Ranking Method using profile attributes such as ZIP code and annual income.

*   Defining a Selection Strategy to group and prioritizing offers.

*   Building a Decision Policy to deliver the most relevant offer to each individual.


