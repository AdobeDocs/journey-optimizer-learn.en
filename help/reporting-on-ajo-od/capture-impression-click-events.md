---
title: Capture impressions and interactions events
description: Capture impression and interaction events and prepare the data for reporting within Journey Optimizer.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
recommendations: noDisplay, noCatalog
last-substantial-update: 2025-07-18
jira: KT-18526
exl-id: 7e6014b5-c5a6-467b-8e31-58c5d966464c
---
# Capture impressions and interactions events

To enable reporting on AJO offer impressions and clicks, the following components must be configured:
>[!NOTE]
>
> These prerequisites were already completed in the create schema and dataset section of the [previous tutorial](https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/personalizing-offers-with-real-time-weather-data/create-schema-and-dataset)

## 1. Dataset in Adobe Experience Platform (AEP)

- A dataset based on an **XDM ExperienceEvent** schema.

The schema must include `Web Details` field group which captures page URL, referrer, etc.
 
## 2. Datastream Configuration

- A **Datastream** must be created in Adobe Experience Platform.
- This datastream must be linked to the dataset configured above to ensure that all Web SDK events are properly ingested into the right destination.

## 3. Adobe Experience Platform Tags Property

- AEP Web SDK extension configured to use the datastream created in the earlier step.
- Experience Cloud ID Service configured
- A data element called ECID is added to the property
- Implemented on the site where offers are rendered.


To enable reporting on offer performance, the first step is to capture when offers are displayed (impressions) and when they are clicked (interactions). These events provide the foundation for measuring engagement, calculating click-through rates, and analyzing offer effectiveness within Adobe Experience Platform.

The alloy("sendEvent") function is used to log user interactions with offers returned by Adobe Journey Optimizer (AJO).

The sendEvent payload captures offer interactions by including the event type (decisioning.propositionDisplay for impressions or decisioning.propositionInteract for clicks), a unique event ID, timestamp, and user identity (identityMap). It also includes the list of offers (propositions) shown or clicked, along with tracking tokens to ensure accurate attribution. This structure enables reporting and optimization of personalized offer performance in Adobe Journey Optimizer.

Two types of interaction events are captured:

## Impression Event

An impression occurs when an offer is rendered on the page and becomes visible to the user. The event is tracked using the decisioning.propositionDisplay event type.


```javascript
 alloy("sendEvent", {
            xdm: {
              _id: generateUUID(),
              timestamp: new Date().toISOString(),
              eventType: "decisioning.propositionDisplay",
              identityMap: {
                    ECID: [{
                      id: _satellite.getVar("ECID"),
                      authenticatedState: "authenticated",
                      primary: true
                    }]
                  },
              _experience: {
                decisioning: {
                  propositionEventType: {
                    display: 1
                  },
                    propositionAction: {
                            id: offerId,
                            tokens: [trackingToken]
                  },
                  
                   propositions: window.latestPropositions
                  
                }
              }
            }
          });
        }
```

## Offer Interaction

An interaction is recorded when a user clicks a call-to-action (CTA) inside the rendered offer. The event is tracked using the decisioning.propositionInteract event type.

```javascript
alloy("sendEvent", {
                xdm: {
                  _id: generateUUID(),
                  timestamp: new Date().toISOString(),
                  eventType: "decisioning.propositionInteract",
                  identityMap: {
                    ECID: [{
                      id: _satellite.getVar("ECID"),
                      authenticatedState: "ambiguous",
                      primary: true
                    }]
                  },
                  _experience: {
                    decisioning: {
                      propositionEventType: {
                        interact: 1
                      },
                      propositionAction: {
                        id: offerId,
                        tokens: [trackingToken]
                      },
                       propositions: window.latestPropositions
                    }
                  }
                }
              })
```

Including propositions in click and impression events is essential for accurate offer reporting in Adobe Journey Optimizer. These propositions represent the exact offers that were presented to the user, allowing Adobe to attribute user interactions (for example, impressions or clicks) back to the specific decisions made by the system.

Each offer within a proposition includes a tracking token, which is a unique identifier generated by Adobe. This token must be passed exactly as received — without alteration — in the corresponding click or impression event. Matching tracking tokens ensure that Adobe can precisely associate the user action with the correct offer decision, enabling downstream reporting and AI-based optimization.
