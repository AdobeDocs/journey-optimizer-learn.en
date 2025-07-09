---
title: Capturing Offer Interactions with Adobe Web SDK for AI Model Training
description: This article focuses on capturing user interaction data—such as offer impressions and clicks—using the Adobe Experience Platform Web SDK (alloy.js). This data serves as the foundation for training AI models in Adobe Journey Optimizer (AJO) to intelligently rank offers based on user behavior and contextual signals..
feature: Decisioning
topic: Integrations
role: User
level: Beginner
doc-type: Article
last-substantial-update: 2025-07-08
jira: KT-18451

---

# Capturing Offer Interactions with Adobe Web SDK for AI Model Training

>[!NOTE]
>
> Complete this only if you plan to use AI-based ranking methods in Adobe Journey Optimizer to personalize which offer is shown based on predicted engagement.



This article demonstrates how to capture offer interaction events (like impressions or clicks) using the Adobe Experience Platform Web SDK by calling alloy("sendEvent", ...) directly in your JavaScript code. The data will be ingested into AEP and used to train AI models in Adobe Journey Optimizer (AJO) for smarter offer ranking based on real-time behavior.

## Prerequisites

Before you begin, ensure the following are in place:

-   The existing schema _**Weather-Schema**_ used for weather offers has been updated to include the Proposition Interactions field group

-   The exisiting Adobe Launch property _**personalization-on-weather**_ with the Adobe Experience Platform Web SDK extension installed.


-   A website where Launch is deployed.

 
## Update Existing Schema and Dataset for Offer Interaction Events

Instead of creating a new schema, we'll update the existing Experience Event schema used for weather-related offers to support interaction tracking.

In Adobe Experience Platform:

-   Open the existing _**Weather-Schema**_ Experience Event schema you are using for weather-based offers.

-   Add the field group:
Experience Event – Proposition Interactions
This field group enables the schema to support:

        eventType: "decisioning.propositionDisplay" — for offer impressions

        eventType: "decisioning.propositionInteract" — for offer clicks

        involvedPropositions — for linking offer IDs and scopes

        Required flags such as display: 1 and interact: 1

You do not need to create a new dataset or datastream — continue using your existing setup for weather offers. The events you send will now align with Adobe Journey Optimizer's expectations for training AI models and tracking offer performance.


Continue using the current dataset (no need to create a new one)

The exisiting datastream is already configured and in use in Adobe Experience Platform Tags property — no changes are needed there.

The Web SDK will automatically route new interaction events to the correct destination

⚠️ This streamlined setup ensures that all decisioning and weather events are ingested into a single, unified dataset, which is ideal for training AI models in Adobe Journey Optimizer.


## Capture Offer Display Events (Impressions)

The HTML structure of the offer was modified to include interactive elements — specifically `<a>` and `<button>` tags — allowing users to engage with the offer (e.g., "Claim Offer" or "Learn More" buttons).

Each button includes a data-offer-id attribute so the corresponding interaction can be properly tracked.



To log when offers are shown to users, we updated the existing JavaScript file already used for rendering weather offers.

A decisioning.propositionDisplay event is now sent using the Adobe Web SDK (alloy.sendEvent) when one or more offers are displayed. This event includes the required display: 1 flag and references the involved propositions.


```javascript

if (offerIds.length > 0) {
  alloy("sendEvent", {
    xdm: {
      _id: generateUUID(),
      timestamp: new Date().toISOString(),
      eventType: "decisioning.propositionDisplay",
      _experience: {
        decisioning: {
          propositionEvent: {
            display: 1
          },
          involvedPropositions: offerIds.map(id => ({
            id,
            scope: "web://gbedekar489.github.io/weather/weather-offers.html#offerContainer"
          }))
        }
      }
    }
  });
}
```

## Capture Offer Click Events (Interactions)

To track when a user clicks on an offer, we updated the existing JavaScript to listen for clicks on both `<a>` and `<button>` elements rendered inside the offer container.

When a click is detected, a decisioning.propositionInteract event is sent using the Adobe Web SDK. This includes the necessary interact: 1 flag and references the specific offer ID and decisioning scope.

```javascript
// Attach click tracking to <a> and <button> elements
wrapper.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("click", () => {
    const offerId = el.getAttribute("data-offer-id") || item.id;
    console.log("Clicked element offerId:", offerId);

    alloy("sendEvent", {
      xdm: {
        _id: generateUUID(),
        timestamp: new Date().toISOString(),
        eventType: "decisioning.propositionInteract",
        _experience: {
          decisioning: {
            propositionEvent: {
              interact: 1
            },
            involvedPropositions: [{
              id: offerId,
              scope: "web://gbedekar489.github.io/weather/weather-offers.html#offerContainer"
            }]
          }
        }
      }
    });
  });
});

```

## Create an AI Model for Offer Ranking in Adobe Journey Optimizer Offer Decisioning

With offer impressions and clicks now being captured via the Web SDK and stored in Adobe Experience Platform, you can use this data to train an AI model that predicts which offers are more likely to be clicked or engaged with under specific conditions.

This AI model will later be referenced in a ranking formula or a selection strategy to determine which offers should be prioritized for each user.

- Login to Journey Optimizer
- Navigate to Decisioning -> Strategy setup -> AI models ->Create AI Model
- Make sure to use the correct Dataset
![ai-model](assets/ai-model.png)
- Save and activate the AI model.
- Update the selection strategy created in the earlier step to use the AI model for the Ranking method
![update-selection-strategy](assets/update-selection-strategy.png)

## Test the solution

Include the [updated javscript file](assets/ai-model.js) in the [exisiting web page](assets/weather-offers.html) 