---
title: Create Datastream
description: This page guides you through creating a datastream in Adobe Experience Platform, which is required to collect data from the Web SDK and route it to AEP and Adobe Journey Optimizer. The datastream acts as the connection between your web application and Adobe services, enabling push subscription and event data to be processed.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-04-21T00:00:00.000Z
jira: KT-20879
exl-id: d419f6a4-67d5-46b5-9ae7-5a317300d1ad
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
# Create Datastream

A datastream in Adobe Experience Platform (AEP) acts as the endpoint that receives data sent from the Web SDK. It routes this data to configured services such as AEP, Adobe Analytics, or Adobe Journey Optimizer. In this tutorial, the datastream is used to send web push subscription data and price.drop events into AEP for activation.

## Create  event schema for tracking push notifications

Create a new XDM ExperienceEvent schema named `SchemaForPushNotification`. Add the `Push Notification Tracking` and `Commerce Details` field groups to this schema. The fields from the Commerce Details field group will be used to capture product information and trigger the custom price.drop event.

![event-schema](assets/event-schema.png)

## Create profile schema to save user's consent

For this tutorial, we use the out-of-the-box `AJO Push Profile Schema`. This schema stores the user's push subscription details, including the push token required to deliver web push notifications.

![profile_schema](assets/profile-schema.png)

## Create datasets for the schema

Create a dataset named `DataSetForPushNotification` using the event schema created earlier. For profile data, use the out-of-the-box `AJO Push Profile Dataset`, which is associated with the push profile schema. Make a note of the `DataSetForPushNotification` ID, as it will be required later in the tutorial when configuring the application via the .env file.

## Create Datastream using the event and profile dataset

Create a new datastream named WebPushDataStream using the event and profile datasets created in the previous step. Make a note of the Datastream ID, as it will be required later in the tutorial when configuring the application via the .env file.

![datastream](assets/datastream.png)
