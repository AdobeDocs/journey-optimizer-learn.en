---
title: Personalize Offers with Ranking formulas Based on Zip Code and Income
description: Use Adobe Journey Optimizer's ranking formulas to dynamically serve the most relevant financial offers—tailored to each user's ZIP code and income level—for higher engagement and smarter personalization.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-27T00:00:00.000Z
jira: KT-18188
exl-id: 11685f7c-8048-4318-9c28-71bd7da8f7ff
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: a984631b-2bae-4860-9b15-69c41a799dcb
    internal-label: APIs and SDKs
subfeature_v2:
  - id: a7a194a0-75e2-4913-8a83-14714fbf68e6
    internal-label: Decisioning API
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Personalize offers with ranking formulas based on user zip code and income

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
