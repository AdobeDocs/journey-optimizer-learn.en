---
title: L731 Cheat Sheet
description: This page has text and links that are being used in the L731 Summit Lab.
feature: In App, SMS, Push, Email
doc-type: article
role: User
level: Beginner
recommendations: noDisplay, noCatalog
hide: yes
hidefromtoc: yes
exl-id: ffc5e8c8-8729-4e7e-aa51-d74f91b0cf29
---
# Summit Lab L731 - Cheat Sheet

This page has text and links that are being used in the L731 Summit Lab. It allows you to copy and paste the content into your Journey Optimizer messages.

## Exercise 1.1 - Download and install the app

Scan the QR code to download the app

>[!BEGINTABS]

>[!TAB iOS]

![QR code for iOS](/help/assets/lab731-ios-qr-code.png)

>[!TAB Android&trade;]

![QR code for Android](/help/assets/lab731-android-qr-code.png)

>[!ENDTABS]

## Exercise 1.3: Log in to Adobe Journey Optimizer

[Click here to log in to Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:summit-2023-ajo-lab/journey-optimizer/home)

**Login Details:**

* **Username:** `L731+<your seat number>@summitlab.us` (example: L731+001@summitlab.us)
* **Password:** Adobe2023!


## Exercise 2.1 Create an In-App Campaign

|Field|Text|Links|
|----|----|----|
|Campaign Name| `<your seat number> March Vegas Campaign`||
|Matcher|booknow||
|Media URL option|| https://mcfadyen.com/wp-content/uploads/2023/01/Adobe-Summit-2023-Banner.png| 
|Title|It's Happening & It's Live!||
|Body|Adobe Summit returns to Las Vegas March 21-23, 2023. Get ready for inspiring speakers, skill-expanding sessions, and new connections.||
|Button|Book hotel now and save 10% |lab://booking?suite=presidential&discount=10|
|Button: Interactive event|In-app CTA||
|Base URL||iOS: lab:// <br>Android&trade;: https://lab|


## Lesson 3 Create an Omni-Channel Journey

>[!BEGINTABS]

>[!TAB Push Message]

**Title:**  
Welcome to Vegas Stay!

**Body:**   
Skip the line and check-in with the mobile app

**Deeplink:** lab://checkin

**Media:**

https://experienceleague.adobe.com/docs/journey-optimizer-learn/assets/vegas_online_check_in.jpg?lang=en


This is the image that we are using for the push notification:

![Online Check In](/help/assets/vegas_online_check_in.jpg)

>[!TAB SMS Message]

**Message:**
Welcome to Vegas Stay. Skip the line and check-in with the mobile app: lab://checkin

>[!TAB Email Message]

**Subject Line:**
{{profile.person.name.firstName}}, you're checked in, now check out our offers for your stay!

>[!ENDTABS]