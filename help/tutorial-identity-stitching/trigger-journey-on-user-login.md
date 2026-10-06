---
title: Trigger Adobe Journey Optimizer Journey using Adobe Web SDK
description: Learn to start an Adobe Journey Optimizer journey from site events like user logins by leveraging the AEP Web SDK configured through Adobe Experience Platform Tags
feature: Profiles
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-09-24T00:00:00.000Z
recommendations: noDisplay, noCatalog
jira: KT-19287
exl-id: c6d4f720-3780-4012-a2bd-8eae23599144
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: d2971708-e780-44bb-9e2a-72f139796afd
    internal-label: Customer
subfeature_v2:
  - id: ef9a83ca-eefa-47cf-aa34-f1a34715583a
    internal-label: Profiles
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Trigger Adobe Journey Optimizer Journey using Adobe Web SDK

In this extension of the Identity Stitching tutorial, Adobe Journey Optimizer journey is triggered that emails the logged-in user using their stitched profile. **This article assumes you are familiar with the e-mail channel and  creating content for the e-mail channel.**

## Create E-mail channel configuration

* Log in to _**Journey Optimizer**_
* Navigate to _**Administration -> Channels -> Create channel configuration**_
* Select **Email** from the channel list. Provide a meaningful name and description.
* Fill out the email settings.
* Provide execution details as shown below. The email is sent to the profile's email address stored in the field
* ![email-channel](assets/email-channel-execution.png)
* Activate the Email channel configuration

## Create Event

*   Log in to _**Journey Optimizer**_
*   Navigate to _**Administration -> Configurations**_
*   Click on the Manage button of the Events card and click on Create Event. Specify the values as shown below
*   ![journey-event](assets/journey-event1.png)

*   Check whether the event's eventType equals LoginEvent. The `LoginEvent` type is set in the Adobe Experience Platform Tag. 
*   Save the event

## Create Journey

* Log in to _**Journey Optimizer**_
* Navigate to _**Journey Management -> Journeys -> Create Journey**_
* Drag and drop the _**UserLoggedIn**_ event on to the canvas
* Drag and drop Email from the actions menu. Configure the email action to use the email channel configuration created earlier.
* Publish the journey.

## How the journey is triggered

The journey is triggered when the event payload sent via the Web SDK, matches what is configured in the journey. In this example, the event is `UserLoggedIn` event type is `LoginEvent`.

* Verify this by viewing the journey report
* ![journey-report](assets/journey-triggered-report.png)
