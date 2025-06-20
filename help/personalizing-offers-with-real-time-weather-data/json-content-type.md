---
title: Delivering Personalization with JSON Content in Adobe Journey Optimizer
description: Leverage the JSON content type in Adobe Journey Optimizer (AJO) to build flexible, data-driven personalization experiences.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-18
jira: KT-18387
recommendations: noDisplay, noCatalog
exl-id: a09beca4-9266-4004-9831-d3c706b631a5
---
# Delivering Personalization with JSON Content in Adobe Journey Optimizer

This section is provided as an additional resource for advanced users who want greater control over how offers are rendered on the front end.

Using the JSON content type in a Code-Based Experience (CBE) allows you to return structured offer data and handle rendering dynamically using JavaScript. JSON content type is particularly useful for scenarios that require custom layouts, conditional logic, or integration with contextual data, such as weather, location, or device type.

While not required for basic offer delivery, this approach offers flexibility for developers building personalized, data-driven experiences beyond the capabilities of standard HTML rendering.

## Create a Code-Based Experience (CBE) with JSON Content Type.

Begin by creating a new Code-Based Experience (CBE) in Adobe Journey Optimizer and set the Content Format to JSON. The content type tells AJO to return structured offer data (like offerText, images, or metadata) as a JSON object rather than rendered HTML. Define the platform (for example, Web), the target URL where the offer appears, and the location on the page (such as a container ID like offerContainer). This configuration enables your web application to receive offer data and dynamically render it using JavaScript.

![json-content-type](assets/cbe-json-content.png)

## Associate the CBE with a Campaign with a Decision Policy

Once the Code-Based Experience (CBE) with JSON content type is created, it is linked to a campaign through a Decision Policy. The Decision Policy defines the logic for offer eligibility, ranking, and delivery based on profile or contextual data.

When inserting the Decision Policy into the Personalization Editor (for example, for in-app messages or email), it's important to ensure that the output maintains a valid JSON structure. 

When you insert a Decision Policy into the Personalization Editor (PE) within a campaign, Adobe Journey Optimizer automatically generates a Handlebars loop based on the selected policy. For example:
![default-code](assets/handlebar-code-default.png)
This loop iterates through all decision items returned by the policy and injects the offerText field from each offer. This default structure works well for HTML content types, but when working with JSON content, it may require restructuring to produce a valid JSON array or object, especially if the result is being parsed programmatically.

![restructured-code](assets/restructured-code.png)

This Handlebars template is designed to output a JSON array of offer objects, where each object contains a single offerText field. It loops through the decision items returned by the specified Decision Policy and wraps each offerText in a JSON object format.

## Parse JSON Offer Response

The response from AJO contains personalized decision items in JSON format under the `propositions[].items[].data.content[]` structure. Each content item includes fields such as offerText.

```javascript
(response.propositions || []).forEach(p => {
  (p.items || []).forEach(item => {
    const contents = item.data?.content || [];
    contents.forEach(contentItem => {
      const html = contentItem.offerText || "";
      const wrapper = document.createElement("div");
      wrapper.className = "offer";
      wrapper.innerHTML = html;
      document.getElementById("offerContainer").appendChild(wrapper);
    });
  });
});

```

### Sample assets

To help you get started, download the sample HTML file and JavaScript file that demonstrate how to consume JSON-based offers and render them dynamically on your web page.

[JavaScript code](assets/weather-related-offers-script-multiple-json.js)
[HTML File](assets/multiple-json.html)
