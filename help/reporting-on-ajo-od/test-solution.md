---
title: Test the solution
description: Create a simple web page to capture impression and click events on the offers.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-07-18
recommendations: noDisplay, noCatalog
jira: KT-18526

---
# Test the solution

To test the solution end-to-end, the [weather-offers.html](assets/weather-offers.html)  and [capture-impressions-click-events.js](assets/capture-impressions-click-events.js) files must be hosted on a web server or a public hosting service such as Github Pages. This is necessary because the  browser's geolocation API only works over HTTPS or localhost

## Download the provided files

[HTML File](assets/weather-offers.html)

[Javascript File](assets/capture-impressions-click-events.js)

## Update the surface url in the javascript file

Open the `capture-impressions-click-events.js` and update the  ` "web://yourdomain.com/weather/weather-offers.html#offerContainer"`by replacing `yourdomain.com` with the actual domain where the HTML file is hosted.


## Update the Adobe Experience Platform Tags Property

Open the weather-offers.html file in text editor and replace the script tag with the script tag of your Adobe Experience Platform Tag Property created in the earlier step of this tutorial. Make sure to save the file

```
<script src="https://assets.adobedtm.com/AEM_TAGS/launch-ENabcd1234.min.js" async></script>
```

## Interact with the offers

-   Open the webpage in your favorite browser.

-   Allow _**location tracking**_. This is required to get the weather details based on your location.

-   Click on the button in the offers to trigger interact event.

## View the report

-   Login to Journey Optimizer

-   Navigate to Journey Management ->Campaigns

-   Click on the campaign and then select the appropriate report from the report menu.
