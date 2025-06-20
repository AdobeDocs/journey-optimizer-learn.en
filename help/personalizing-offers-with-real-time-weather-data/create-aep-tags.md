---
title: Create Adobe Experience Platform Tags
description: Creating AJO Audiences Based on User Investment Preferences (Stocks, Bonds, CDs)
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-04-30
recommendations: noDisplay, noCatalog
jira: KT-18258
exl-id: 04fad076-e897-4831-9147-768721858a80
---
# Creating AEP Tags

Adobe Experience Platform Tags (formerly Adobe Launch) help manage and deploy* marketing and analytics technologies on your website without needing to change the site's code.

This [video describes the process of creating Adobe Experience Tags](https://experienceleague.adobe.com/en/playlists/experience-platform-get-started-with-tags)

*   Log in to Data Collection
*   Click on Tags -> New Property
*   Create an Adobe Experience Platform Tag called _**personalization-on-weather**_.

*   Add the following extensions to the Tag
![tags-extensions](assets/tags-extensions1.png)

*   Make sure to configure the Adobe Experience Platform Web SDK to use the correct environment and the **weather-related-datastream** created in the earlier step.
![web-sdk-configuration](assets/tags-extensions.png)



## Build and deploy the AEP Tags


Create a new library and add all the modified resources to it, as illustrated in the screenshots below.

**Add library**

![new-library](assets/tag-add-library.png)

**Create a library**

In the create library screen specify the library name and the environment.

Add all the changed resources to this library
![tag-library](assets/tag-build-library.png)

Then click on the Save and Build to Development button to build the library

## Include AEP Tags in the HTML page

When you publish a AEP Tags property, Adobe gives you a script tag that you must place inside your HTML ``` <head>``` or at the bottom of the ``` <body>``` tags.

*   Go to Tags(personalization-on-weather) property.

*   Click on Environments and click the install icon of the environment you want (for example, Development, Staging, Production).

*   Make a note of the embedded code. It is needed at a later stage of this tutorial.
