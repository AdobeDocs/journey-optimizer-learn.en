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

You will be asked to install Testflight, steps 1 to 4. Once you have installed Testflight follow steps 5 to 8 to install the Vegas Stay App:

<table>
<tr>
</tr>
<tr>
<td>
 <div>
      <p>
      <b>Step 1 </b>
      <p>
      <a>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-1.png"/>
      </a>
      </div>
  </td>
  <td>
 <div>
      <p>
      <b>Step 2 </b>
      <p>
      <a>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-2.PNG"/>
      </a>
      </div>
  </td>
  <td>
 <div>
      <p>
      <b>Step 3 </b>
      <p>
      <a>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-3.PNG"/>
      </a>
      </div>
  </td>
  <td>
 <div>
      <p>
      <b>Step 4 </b>
      <p>
      <a>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-4.PNG"/>
      </a>
      </div>
  </td>
  </tr>
  <tr>
<td>
 <div>
      <p>
      <b>Step 5 </b>
      <p>
      <a>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-5.PNG"/>
      </a>
      </div>
  </td>
  <td>
 <div>
      <p>
      <a>
      <b>Step 6 </b>
      <p>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-6.PNG"/>
      </a>
      </div>
  </td>
  <td>
 <div>
      <p>
      <a>
      <b>Step 7 </b>
      <p>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-7.PNG"/>
      </a>
      </div>
  </td>
  <td>
 <div>
      <p>
      <a>
      <b>Step 8 </b>
      <p>
        <img alt="testflight 1" src="../assets/l731-ios-install/ios-install-8.PNG"/>
      </a>
      </div>
  </td>
  </tr>
</table>

>[!TAB Android]

![QR code for Android](/help/assets/lab731-android-qr-code.png)

As the app is not registered with the Google Play Store, you will receive a warning message:

![Android warning screen](/help/assets/lab731-install-android.png)

Click **Install anyway**

>[!ENDTABS]

## Exercise 1: Log in to Adobe Journey Optimizer

[Click here to log in to Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:summit-2023-ajo-lab/journey-optimizer/home)

**Login Details:**

* **Username:** `L731+<your seat number>@summitlab.us` (example: L731+001@summitlab.us)
* **Password:** Adobe2023!


## Exercise 2 Create an In-App Campaign

|Field|Text|Links|
|----|----|----|
|Campaign Name| `<your seat number> Vegas Stay Campaign`||
|Matcher|booknow||
|Media URL option||https://i.ibb.co/NstLhjW/Firefly-Poster-with-heading-Adobe-Max-84773.jpg|
|Title|Get your early bird discount!||
|Body|Adobe Max returns to Las Vegas. Get ready for inspiring speakers, skill-expanding sessions, and new connections. Book your suite now and get 10% off.||
|Button|Get your 10% discount!|lab://booking?suite=presidential&discount=10|
|Button: Interactive event|In-app CTA||
|Base URL to be used for preview on device||**iOS:** lab:// <br>**Android**: https://lab|


## Exercise 3: Create a Push Notification

|Field|Text|Links|
|----|----|----|
|Campaign Name| `<your seat number> Max Push Campaign`||
|Media URL option||https://i.ibb.co/1M0BnZn/Firefly-Big-conference-big-stage-with-ADBE-text-on-screen-40178.jpg| 
|Title|Hey!||
|Body|Did you know Adobe Max is coming back to Vegas. Book your room now and get 10% discount.||
