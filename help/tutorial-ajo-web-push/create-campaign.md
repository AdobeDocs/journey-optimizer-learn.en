---
title: Create campaign
description: Create a campaign to target users who have opted in to receive push notifications and delivers the message at the scheduled time.
feature: Push
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-04-21
jira: KT-20879
exl-id: 94fda23f-e26a-494b-8e5c-6c442bae61c4
---
# Create Campaign

In this step, you will create a campaign in Adobe Journey Optimizer to send scheduled web push notifications to users who have opted in. The campaign targets an eligible audience and delivers messages at a predefined time, enabling planned and audience-based engagement.

* Log in to Journey Optimizer
* Navigate to Journey Management | Campaigns | Create Campaigns

## Specify  Campaign Settings

Specify the campaign name

![campaign-name](assets/campign-push-notification.png)

## Associate Action with the campaign

Associate the push channel configuration created earlier in this tutorial

![campaign-action](assets/campign-push-notification-action.png)

## Associate Audience with the campaign

Associate the audience `AudienceForPush` with the campaign

![campaign-audience](assets/campign-push-notification-audience.png)

## Create content for the push notification

Create basic push content for testing the push notification. Specify title and body of the message as shown below

![content-for-push-notification](assets/campign-push-notification-content.png)

## Schedule the campaign

Schedule the campaign as per your needs

![schedule-campaing](assets/campign-push-notification-schedule.png)

Finally make sure you activate the campaign.

## Test the campaign

To test the campaign, first enable notifications on the [web page by opting in](http://localhost:3000) when prompted. Once you have opted in, wait for the campaign to run at its scheduled time. When the campaign executes, you should receive the push notification in your browser.
