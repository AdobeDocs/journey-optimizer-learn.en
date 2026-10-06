---
title: Enable Frequency Capping for an AJO Campaign
description: Frequency capping in Adobe Journey Optimizer is applied at the individual offer level and relies on capturing both offer impression and click events. This requires tracking decisioning.propositionDisplay and decisioning.propositionInteract events using the Adobe Web SDK and mapping them to an updated XDM Experience Event schema in Adobe Experience Platform.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-01-21T00:00:00.000Z
jira: KT-18526
exl-id: 34027499-0037-4ea1-813b-51be15eafe24
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
# Enable Frequency Capping for an AJO Campaign

To apply frequency capping to offers, complete the following steps:

## Update the event schema

* Update the exisiting event schema by adding the field group as shown
* ![event-schema](assets/schema.png)

## Update the frequency capping for the offer


* ![offer](assets/offer-capping.png)

## Add tracking token to the offer

Edit the decision policy used in the campaign by adding a fallback offer
![fallback](assets/fallback.png)

The trackingToken and ItemID can be added by clicking on the Decision policy icon in the left navigation and drill down the decisioning tree to select the itemID and trackingToken.

Add the item id and the tracking token to the div containing the offer as shown below
![id-and-tracking-token](assets/id-and-tracking-token.png)

This ensures that each rendered offer includes a data-tracking-token, which is essential for accurate impression and click event tracking.


Activate the modified campaign.


## Send impression and tracking events

Modify the existing JavaScript code to capture and send offer impression and interaction events to Adobe Experience Platform using the Adobe Web SDK. Refer to the [sample code provided here.](capture-impression-click-events.md)
