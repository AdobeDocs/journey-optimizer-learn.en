---
title: Configure and launch
description: Configure the mobile channels in Journey Optimizer and Platform, integrate with mobile apps, and ensure readiness for marketing campaign execution.
feature: Overview
role: Developer, Admin
level: Beginner, Intermediate
last-substantial-update: 2025-08-04
---

# Configure and launch

Configure the mobile channels in Journey Optimizer and Platform, integrate with mobile apps, and ensure readiness for marketing campaign execution.

## Understand which mobile capabilities Adobe Journey Optimizer offers developers.

>[!VIDEO](https://video.tv.adobe.com/v/342103?quality=12&learn=on){transcript=true}


## Prerequisites

Make sure you have:

* Adobe Journey Optimizer (AJO) provisioned for your org.
* Adobe Experience Platform (AEP) SDK credentials.
* Admin rights in AJO for configuration.
* Access to your app's source code.
* Your app has the required OS-level capabilities enabled (push permissions, notification service extensions, etc.).


## Mobile SDK and app configuration

**Configure a Mobile Property**

1. Log in to Adobe Experience Platform Data Collection.
2. Create a Mobile Property for your app.
3. Add the Mobile Core and AJO Messaging Extension packages to the property.
4. Retrieve your Environment File ID — the developer will need it.


## Adobe Journey Optimizer Setup

**Configure Each Mobile Channel**

* Push Notifications
    * iOS – Upload your APNs Auth Key in AJO under Mobile App Configuration.
    * Android – Add your Firebase Cloud Messaging (FCM) Server Key.
    * Enable Push Channel for the mobile property.

* In-App Messaging
    * Enable the In-App Messaging toggle in the property.
    * Make sure your app has the In-App Messaging extension included.

* Content Cards
    * Enable Content Cards in AJO Channels configuration.

* WhatsApp
    * Configure the WhatsApp Business API account in AJO Channels.
    * Add approved WhatsApp message templates in AJO Assets.
