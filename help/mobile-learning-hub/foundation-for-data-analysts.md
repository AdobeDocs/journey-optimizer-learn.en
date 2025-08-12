---
title: Foundation for data analysts
description: Lorem Ipsum
feature: Overview
role: User
level: Beginner, Intermediate
last-substantial-update: 2025-08-04
---

# Foundation for data analysts

Lorem Ipsum


## Understand which mobile capabilities Adobe Journey Optimizer offers marketers.

>[!VIDEO](https://video.tv.adobe.com/v/3426021?quality=12&learn=on){transcript=true}

## Implement mobile

### Prerequisites

Make sure you have:

* Adobe Journey Optimizer (AJO) provisioned for your org.
* Adobe Experience Platform (AEP) SDK credentials.
* Admin rights in AJO for configuration.
* Access to your app's source code (for the developer tasks).
* Your app has the required OS-level capabilities enabled (push permissions, notification service extensions, etc.).



### Admin Tasks – Adobe Journey Optimizer Setup

These are mostly done in Admin Console and Data Collection UI.

A. Configure a Mobile Property
Log in to Adobe Experience Platform Data Collection.

Create a Mobile Property for your app.

Add the Mobile Core and AJO Messaging Extension packages to the property.

Retrieve your Environment File ID — the developer will need it.

B. Configure Each Mobile Channel
Push Notifications
iOS – Upload your APNs Auth Key in AJO under Mobile App Configuration.

Android – Add your Firebase Cloud Messaging (FCM) Server Key.

Enable Push Channel for the mobile property.

In-App Messaging
Enable the In-App Messaging toggle in the property.

Make sure your app has the In-App Messaging extension included.

Contact Cards
Enable Contact Cards in AJO Channels configuration.

Upload your contact card templates if applicable.

WhatsApp
Configure the WhatsApp Business API account in AJO Channels.

Add approved WhatsApp message templates in AJO Assets.

