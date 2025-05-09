---
title: Create a web form
description: Create a form in your HTML page that allows users to select their investment preference
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-04-30
recommendations: noDisplay, noCatalog
jira: KT-17923
exl-id: 20de8dec-aac8-43ed-8305-e723f82a5dd9
---
# Create a web form

The following HTML form was created to capture the users preference
![html-form](assets/web-form.png)

When a user clicks the button on the webpage, their selected financial preference (such as Stocks, Bonds, or CDs) is captured and pushed into the Adobe Data Layer. This event (assetClassSelection) stores the user's choice in real-time. Adobe Launch then listens for this event, retrieves the selected investment option (PreferredFinancialInstrument), and can trigger actions like sending the data to Adobe Experience Platform (AEP) or updating personalization rules

The following JavaScript was written to handle the form submission

```javascript
function handleSubmission() {
  window.adobeDataLayer = window.adobeDataLayer || [];

  const selectedAssetClass = document.querySelector('input[name="assetclass"]:checked');
  const errorMessage = document.getElementById("error-message");
  const messageBox = document.getElementById("message");

  if (!selectedAssetClass) {
    errorMessage.textContent = "Please select a financial instrument.";
    messageBox.textContent = "";
    return;
  }

  errorMessage.textContent = "";

  const subscriptionEvent = {
    event: "assetClassSelection",
    xdm: {
      eventType: "assetClassSelection",
      eventID: "investment_preference_event",
      timestamp: new Date().toISOString(),
      FinancialInterest: {
        PreferredFinancialInstrument: selectedAssetClass.value
      }
    }
  };

  console.log("📩 Sending asset class data to AEP:", subscriptionEvent);
  window.adobeDataLayer.push(subscriptionEvent);

  // ✅ Show thank-you message
  messageBox.textContent = `Thank you for selecting "${selectedAssetClass.value}". We'll use this to personalize your experience.`;
}
```

[The sample HTML form is provided as part of this tutorial](assets/webform.zip)
