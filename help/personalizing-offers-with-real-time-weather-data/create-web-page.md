---
title: Test the solution
description: Create a simple web page to test contextual offer personalization using real-time temperature data.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10
recommendations: noDisplay, noCatalog
jira: KT-18258
exl-id: 609a5ddf-d6c6-4f19-bd7f-bca8c266b759
---
# Test the solution

A web page is built to test contextual offer personalization using real-time temperature data. When a user visits the page, the browser prompts for geolocation access. Upon approval, the page fetches the current weather details—such as temperature, condition, and city—via the OpenWeatherMap API. This contextual data is displayed to the user and sent to Adobe Experience Platform using the Adobe Web SDK (Alloy).

The sendEvent call is configured with renderDecisions: false, meaning offers returned by Adobe Journey Optimizer are handled manually. The script processes the decisioning response, decodes the content, and dynamically inserts the most relevant offer into a designated container (#offerContainer). 

## What the JavaScript does

The JavaScript dynamically fetches weather information based on the user's location and uses Adobe Experience Platform (AEP) to deliver personalized offers. Here's a breakdown of the steps:

1.  **Waits for Alloy to Load**

    The script ensures the Adobe Web SDK (Alloy) is fully loaded before making any personalization requests.

2.  **Gets the User's Location**

    It uses the browser's Geolocation API to retrieve the user's current latitude and longitude.

3.  **Fetches Weather Data**

    It calls the OpenWeatherMap API to get current weather details:

    Temperature (in °F)

    Weather Condition (for example, "Rain," "Clear")

    City Name

    Humidity

4.  **Display Weather Info on the Web Page**

    Updates the DOM with a message like:

    "Current temperature in San Diego is 72°F with Clear skies."

5.  **Sends Weather Context to AEP**

    Uses alloy("sendEvent") to send contextual weather data to AEP

    ```javascript
    xdm: {
    eventType: "decisioning.request",
    _techmarketingdemos: {
    temperature: temp,
    weatherConditions: condition,
    cityName: city
      }
    }

    ```

6. **Retrieves and Renders Offers**

    Receives offers returned by AJO.

    Decodes the HTML content.

    Dynamically injects the offers into the <div id="offerContainer"> element.

7. **Sample Assets**

    The web page used to test the solution is available for downloading

    [Web Page](assets/weather-offers.html)

    [JavaScript code](assets/weather-related-offers-script.js)
