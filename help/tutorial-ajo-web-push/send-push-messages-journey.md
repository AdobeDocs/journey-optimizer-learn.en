---
title: Send push messages in a journey
description: Frequency capping in Adobe Journey Optimizer is applied at the individual offer level and relies on capturing both offer impression and click events. This requires tracking decisioning.propositionDisplay and decisioning.propositionInteract events using the Adobe Web SDK and mapping them to an updated XDM Experience Event schema in Adobe Experience Platform.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-01-21T00:00:00.000Z
jira: KT-18526
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
# Send push messages in a journey

Triggering a journey based on a price drop event enables real-time, behavior-driven engagement with users. In real-world scenarios, this event typically originates from a backend pricing system when a product's price is updated. In this tutorial, we simulate that behavior by sending a custom price.drop event through the Adobe Data Layer using AEP Tags, including product details such as name and SKU. This event is ingested into Adobe Experience Platform and used as an entry trigger for a journey in Adobe Journey Optimizer. Once received, the journey can immediately send a personalized push notification to eligible users, informing them about the price drop and encouraging timely action.

Triggering a journey using custom event involves the following steps

## Creating custom event in Journey Optimizer

Log in to Adobe Journey Optimizer and navigate to Administration → Configurations → Events, then select Create Event. Create a new event named PriceDropEvent and associate it with the event schema SchemaForPushNotification that was created earlier in the tutorial. Ensure that the event properties are configured as shown in the reference image.

![event-properties](assets/price-drop-event.png)

From the schema, select the required fields to make them available for personalization. Specifically, include `Name` and `SKU` from the ProductListItems object, as well as the identifier from the identityMap. These fields will then be accessible within the personalization editor, allowing you to dynamically compose push notification messages based on the product and user context.

## Creating Tag Property

This property is configured with the AEP Web SDK, which is connected to the WebPushDataStream created earlier in the tutorial. The tag property listens for the price.drop event on the Adobe Data Layer and maps the relevant product details by updating the ProductListItems data element. Once the data is prepared, a rule in the tag property fires and sends the price.drop event to AEP through the Web SDK. This event then serves as the entry point for a journey in Adobe Journey Optimizer, enabling immediate delivery of push notifications based on the price drop.



