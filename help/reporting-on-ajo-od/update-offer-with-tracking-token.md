---
title: Track and Report Adobe Jouney Optimizer (AJO) Offers delivered  vi AJO Offer Decisioning
description: This tutorial extends an existing Adobe Journey Optimizer (AJO) implementation that delivers personalized offers based on contextual data such as temperature. It outlines how to capture impression and interaction events and prepare the data for reporting within Jouney Optimizer.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10
jira: KT-18526

---
# Add tracking tokens to offer items

To modify the code in the personalization editor, please follow the steps:

Navigate to _**Journey management ->Campaigns**_

Open the appropriate campaign and click the _**Stop campaign**_ button to stop the campaign.

Open the stopped campaign and click on _**Modify campaign**_ button.

Click on _**Content**_ tab and then click on _**Edit code**_ button to open the personalization editor.

Add two new data attributes  to the div as shown in the screenshot
![tracking-token](assets/offer-item-with-tracking-code.png)

The trackingToken and ItemID can be added by clicking on the Decision policy icon in the left navigation and drill down the decisioning tree to select the itemID and trackingToken.
![tracking-token](assets/insert-tracking-token.png)

This ensures that each rendered offer includes a data-tracking-token, which is essential for accurate impression and click event tracking.

Save the changes and activate the campaign.
