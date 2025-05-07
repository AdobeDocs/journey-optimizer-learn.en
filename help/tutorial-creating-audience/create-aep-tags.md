---
title: Create Adobe Experience Platform Tags
description: Creating AJO Audiences Based on User Investment Preferences (Stocks, Bonds, CDs)
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-04-30
jira: KT-17923
exl-id: 244fcb09-3b16-4e3b-b335-4e84bc93095e
---
# Creating AEP Tags

Adobe Experience Platform Tags (formerly Adobe Launch) help manage and deploy* marketing and analytics technologies on your website without needing to change the site's code.

This [video describes the process of creating Adobe Experience Tags](https://experienceleague.adobe.com/en/playlists/experience-platform-get-started-with-tags)

*   Log in to Data Collection
*   Click on Tags -> New Property
*   Create an Adobe Experience Platform Tag called Financial Advisors.

*   Add the following extensions to the Tag
![tags-extensions](assets/tags-extensions.png)

*   Make sure to configure the Adobe Experience Platform Web SDK to use the correct environment and the Financial Advisors DataStream created in the earlier step.
![web-sdk-configuration](assets/web-sdk-configuration.png)

*   No additional configuration is needed for Adobe Client Data Layer and Core extensions

## Create Data Elements

Data Elements are used to collect, organize, and deliver data across web-based marketing and advertising technology.

Create the following Data Elements

| Element Name                 | Extension                         | Data Element Type | Additional Comments                                                                                                                                              |
|------------------------------|-----------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PreferredFinancialInstrument | Core                              | Custom Code       | See the note below |
| XDM Object                  | Adobe Experience Platform Web SDK | XDM object          | Select your environment and Financial Advisors Schema                                                                                                            |


For the custom code, open the code editor and copy and paste the following code

```javascript

return window.adobeDataLayer
  ?.slice()
  .reverse()
  .find(event => event.event === "assetClassSelection")
  ?.xdm?.FinancialInterest?.PreferredFinancialInstrument || "undefined";

```

## Code explanation

Look at the adobeDataLayer array (which stores events happening on your webpage).

Make a copy of the array using.slice() so the original is not changed.

Reverse the order of the events to check the newest events first.

Find the first event (starting from the newest) where event.event is exactly "assetClassSelection."

If found, go into that event's xdm data and get the value from FinancialInterest.PreferredFinancialInstrument.

If nothing is found, return the string "undefined,"



## Create Rule

The Rule Builder in Adobe Experience Platform Tags lets you define when and how specific actions should run on your website based on user behavior or events.

*   Create a Rule named Send Preferred Financial Instrument. This rule contains an event and an action


*   Create an event configuration named Preferred Asset Class Selected as shown below. This event listens to assetClassSelection events.
![rule-event](assets/rule-event.png)


*   Create an Action to send the updated XDM schema to AEP
![send-event](assets/rule-send-event.png)

*   Your final rule should look like below
![final-rule](assets/final-rule.png)

## Build and deploy the AEP Tags


Create a new library and add all the modified resources to it, as illustrated in the screenshots below.

Add library

![new-library](assets/tag-add-library.png)

Create a library

In the create library screen specify the library name and the environment.
You need to add all the changed resources to this library
![tag-library](assets/tag-build-library.png)

Then click on the Save and Build to Development button to build the library

## Include AEP Tags in the HTML page

When you publish a AEP Tags property, Adobe gives you a script tag that you must place inside your HTML ``` <head>``` or at the bottom of the ``` <body>``` tags.

*   Go to your Tags(Financial Advisors) property.

*   Click on Environments and click the install icon of the environment you want (for example, Development, Staging, Production).

*   Make a note of the embedded code. It is needed at a later stage of this tutorial.
