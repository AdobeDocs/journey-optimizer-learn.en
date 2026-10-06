---
title: Create Audience
description: Define a segment in Adobe Experience Platform that targets users eligible to receive push notifications.
feature: Push
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-04-21T00:00:00.000Z
jira: KT-20879
exl-id: 427bb35a-d607-48be-845d-9587c4cad86b
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: 66e1fd99-672d-5d64-aa58-eca107f0fbae
    internal-label: Push
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Create Audience

To create an audience for the campaign, define a segment in Adobe Experience Platform that targets users eligible to receive push notifications. In this tutorial, users who have an active push subscription (Push Token exists), have not opted out of notifications (Denylist Flag is false), and are associated with the specified application configuration (Application Identifier equals `my-first-push`). These users are fully eligible to receive web push notifications through campaigns or journeys in Adobe Journey Optimizer.After creating the audience, make sure it has been evaluated so that profiles are populated and ready for targeting.
 This audience is then used in the campaign to deliver scheduled web push messages only to subscribed users.
 
![create-audience](assets/push-audience.png)
