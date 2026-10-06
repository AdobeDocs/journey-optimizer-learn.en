---
title: Using Editable Form Fields in AJO Code-Based Experiences
description: Learn how to create editable content blocks using inline form fields in Adobe Journey Optimizer's Code-Based Experience templates to empower marketers with dynamic, reusable campaign content.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-22T00:00:00.000Z
recommendations: noDisplay, noCatalog
jira: KT-18416
exl-id: 0ba695d6-becb-440d-b0d0-de5b51b42562
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
# Using Editable Form Fields in AJO Code-Based Experiences

In many marketing journeys, particularly in regulated industries, it's essential to include a legal disclaimer that can vary depending on the campaign, geography, or product. By using an [editable field](https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/channels/code-based-experience-channel/form-fields-in-code-based-experiences) directly in the AJO Personalization Editor, marketers and legal teams can maintain full control over the disclaimer text without involving developers or modifying decision logic.

This enables quick updates and ensures compliance across campaigns while leveraging decisioned content like offers.

## Insert editable field in personalization editor

- Open the campaign created in the earlier step. 
- Click _**Modify campaign**_
- Navigate to _**Content**_ tab
- Click on _**Edit code**_ and insert a editable field called legalDisclaimer with a default value  using the following syntax in the personalization editor

- `{{#inline "legalDisclaimer" name="Legal Disclaimer"}} Legal Disclaimer will go here {{/inline}}`

- Use the `{{{legalDisclaimer}}}` variable in the template as shown below

- ![editable-fields](assets/editable-fields.png)

- Marketers can easily edit the Legal Disclaimer field without having to open the personalization editor.
- ![editable-field-marketer](assets/editable-field-marketer-view.png)



## Publish the campaign

Activate the campaign to begin delivering personalized offers in real time.
