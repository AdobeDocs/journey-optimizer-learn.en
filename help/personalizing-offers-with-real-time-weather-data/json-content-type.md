---
title: Delivering Personalization with JSON Content in Adobe Journey Optimizer
description:  Leverage the JSON content type in Adobe Journey Optimizer (AJO) to build flexible, data-driven personalization experiences.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10
jira: KT-18258
recommendations: noDisplay, noCatalog
---
# Delivering Personalization with JSON Content in Adobe Journey Optimizer

Leverage the JSON content type in Adobe Journey Optimizer (AJO) to build flexible, data-driven personalization experiences.

## Create a Code-Based Experience (CBE) with JSON Content Type.

Begin by creating a new Code-Based Experience (CBE) in Adobe Journey Optimizer and set the Content Format to JSON. This tells AJO to return structured offer data (like offerText, images, or metadata) as a JSON object rather than rendered HTML. You'll also define the platform (e.g., Web), the target URL where the offer will appear, and the location on page (such as a container ID like offerContainer). This configuration enables your web application to receive offer data and dynamically render it using JavaScript.

![json-content-type](assets/cbe-json-content.png)

## Associate the CBE to a Campaign with a Decision Policy

Once the Code-Based Experience (CBE) with JSON content type is created, it is linked to a campaign through a Decision Policy. The Decision Policy defines the logic for offer eligibility, ranking, and delivery based on profile or contextual data.

When inserting the Decision Policy into the Personalization Editor (e.g., for in-app messages or email), it's important to ensure that the output maintains a valid JSON structure. 

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