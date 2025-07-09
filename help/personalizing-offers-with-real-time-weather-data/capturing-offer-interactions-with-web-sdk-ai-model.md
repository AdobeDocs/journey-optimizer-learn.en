---
title: Capturing Offer Interactions with Adobe Web SDK for AI Model Training
description: This article provides guidance on capturing user interaction data — such as offer impressions and clicks — using the Adobe Experience Platform Web SDK (alloy.js). This data serves as the foundation for training AI models in Adobe Journey Optimizer (AJO)  intelligently to rank offers based on user behavior and contextual signals.
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
> Complete  this article only if you plan to use AI-based ranking methods in Adobe Journey Optimizer to personalize which offer is shown based on predicted engagement.



This article demonstrates how to capture offer interaction events (like impressions or clicks) using the Adobe Experience Platform Web SDK by calling alloy("sendEvent," ...) directly in your JavaScript code. The data is ingested into AEP and used to train AI models in Adobe Journey Optimizer (AJO) for smarter offer ranking based on real-time behavior.

To create an AI model for offer ranking in Adobe Journey Optimizer, your dataset must be based on a schema that includes the Proposition Interactions field group. This field group supports key decisioning events like decisioning.propositionDisplay and decisioning.propositionInteract, along with required fields such as involvedPropositions, display, and interact.

There are two valid approaches to achieve this:

- Create a new schema, dataset, and datastream configured specifically for interaction tracking
- Update an existing schema — which is what is done in this tutorial


 
## Update Existing Schema to capture Offer Interaction Events

Instead of creating a new schema,  the existing Experience Event schema used for weather-related offers is updated to support interaction tracking.

In Adobe Experience Platform:

-   Open the existing _**Weather-Schema**_ Experience Event schema that you are using for weather-based offers.

-   Add the field group:
Experience Event – Proposition Interactions

You do not need to create a new dataset or datastream — continue using your existing setup for weather offers. The events that are sent align with Adobe Journey Optimizer's expectations for training AI models and tracking offer performance.


Continue using the current dataset (no need to create a new one)

The existing datastream is already configured and in use in the Adobe Experience Platform Tags property — no changes are needed there.

The Web SDK automatically routes new interaction events to the correct destination.

This streamlined setup ensures that all decisioning and weather events are ingested into a single, unified dataset, which is ideal for training AI models in Adobe Journey Optimizer.


## Capture Offer Display Events (Impressions)

The HTML structure of the offer was modified to include interactive elements — specifically `<a>` and `<button>` tags — allowing users to engage with the offer (for example, "Claim Offer" or "Learn More" buttons).

Each button includes a data-offer-id attribute so the corresponding interaction can be properly tracked.



To log when offers are shown to users, the existing JavaScript file used for rendering weather offers was updated to include display event tracking.

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

When a click is detected, a decisioning.propositionInteract event is sent using the Adobe Web SDK. The event includes the necessary interact: 1 flag and references the specific offer ID and decisioning scope.

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

With, offer impressions and clicks now captured via the Web SDK and stored in Adobe Experience Platform, this data can be used to train an AI model that predicts which offers are most likely to drive engagement.

This AI model is referenced in a ranking formula or selection strategy to determine which offers are prioritized for each user.
- Log in to Journey Optimizer
- Navigate to Decisioning -> Strategy setup -> AI models ->Create AI Model
- Make sure to use the correct Dataset
![ai-model](assets/ai-model.png)
- Save and activate the AI model.
- Update the selection strategy created in the earlier step to use the AI model for the Ranking method
![update-selection-strategy](assets/update-selection-strategy.png)

## Test the solution

Include the [updated JavaScript file](assets/ai-model.js) in the [existing web page](assets/weather-offers.html) 