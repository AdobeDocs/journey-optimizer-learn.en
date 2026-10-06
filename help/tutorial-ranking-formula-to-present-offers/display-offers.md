---
title: Create a Web Page to Test the Solution
description: Web page to test the personalized offers delivered using decisioning.
role: User
level: Beginner
doc-type: Tutorial
feature: Decisioning
last-substantial-update: 2025-05-31T00:00:00.000Z
jira: KT-18188
recommendations: noDisplay, noCatalog
exl-id: 6b1eec78-153c-4ea5-acfe-2dcc6f1e6078
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: a984631b-2bae-4860-9b15-69c41a799dcb
    internal-label: APIs and SDKs
subfeature_v2:
  - id: a7a194a0-75e2-4913-8a83-14714fbf68e6
    internal-label: Decisioning API
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Create a Web Page to Test the Solution

This sample application simulates a real-world login flow where user credentials are validated on the server side before the CRM ID is sent to Adobe Experience Platform (AEP). A local Node.js server is used to securely serve the web pages, handle basic authentication logic, and avoid browser restrictions (such as blocked local file access or missing CORS headers) that could interfere with Adobe Launch or Web SDK functionality. This setup ensures that the experience is closer to a real production environment.

Personalized offers are displayed only after the user logs in, at which point identity stitching between the user's CRM ID and ECID (Experience Cloud ID) is completed. This identity stitching ensures that Adobe Journey Optimizer (AJO) can accurately recognize the profile and return targeted offers.

After successful login, a personalization request is sent to AJO to retrieve available offers for the user. These offers are returned as HTML fragments, each embedded with a data-tags attribute — such as data-tags="ajo offer-vacation-based-cd zip-92128 income-high" — which includes the offer name and segmentation details like ZIP code and income level.

JavaScript then parses these HTML blocks and wraps each one inside a carousel-item container. The items are arranged horizontally within a carousel-track, enabling swipeable navigation. Previous and next buttons (◀ and ▶) allow users to flip through the personalized offers one at a time.

This setup provides a responsive and tailored experience, ensuring that each user sees offers relevant to their financial profile — only after their identity has been securely stitched across platforms.

## Test this solution

*   Create a folder named ranking-formula inside your existing Node.js project.

*   Unzip the [provided files into this ranking-formula folder.](assets/ranking-formula.zip)

*   Run the app by navigating into the folder and starting the server:
    * `cd ranking-formula`

    * `node server.js`
    

*   Open your browser and go to http://localhost:3000/formula.html.

*   Login using alice/pass123

Since Alice resides in the 92128 zip code, offers tailored to that location are displayed.
