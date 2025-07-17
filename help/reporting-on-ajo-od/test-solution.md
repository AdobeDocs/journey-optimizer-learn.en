---
title: Test the solution
description: Create a simple web page to test contextual offer personalization using real-time temperature data.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10
recommendations: noDisplay, noCatalog
jira: KT-18526

---
# Test the solution

To test the solution end-to-end, the [weather-offers.html](assets/weather-offers.html)  and [capture-impressions-click-events.js](assets/capture-impressions-click-events.js) files must be hosted on a web server or a public hosting service such as Github Pages. This is necessary because:
    -  The browser's geolocation API only works over HTTPS or localhost

## Download the provided files

[HTML File](assets/weather-offers.html)

[Javascript File](assets/capture-impressions-click-events.js)

## Update the Adobe Experience Platform Tags Property

Open the weather-offers.html file in text editor and replace the script tag with the script tag of your Adobe Experience Platform Tag Property created in the earlier step of this tutorial. Make sure to save the file

```
<script src="https://assets.adobedtm.com/AEM_TAGS/launch-ENabcd1234.min.js" async></script>
```

## Interact with the offers

Click on the button in the offers to trigger interact event.