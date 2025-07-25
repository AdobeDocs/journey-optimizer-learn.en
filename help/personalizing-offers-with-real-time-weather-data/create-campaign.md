---
title: Create a Campaign
description: Learn how an AJO campaign connects audiences, decision policies, and channels to deliver personalized offers at the right moment across customer touchpoints.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-30
recommendations: noDisplay, noCatalog
jira: KT-18258
exl-id: c3e4f760-9b10-4a99-bc53-9245e76c1bab
---
# Create a campaign

To deliver personalized offers to users on the web page, a campaign was created in Adobe Journey Optimizer and configured with the correct channel, Code-based experience channel. This configuration ensures that the offers are delivered via real-time decisioning to users interacting with the website.

Within this campaign, a decision policy was defined to control how offers are selected. The decision policy includes a selection strategy, which consists of:

- A collection of offer items (for example, based on weather related tags),
- Eligibility rules that determine which offers apply to a user, and
- A ranking formula that assigns scores to eligible offers to prioritize the most relevant ones.

When a user visits the website, the system detects their location and fetches the current temperature using a weather API. This temperature data is then sent to Adobe Experience Platform via the Web SDK (Alloy). Based on this real-time contextual data, Adobe Journey Optimizer evaluates predefined offers that are tagged for specific weather conditions—such as hot, mild, or cold. The most relevant offer using the selection strategy and the ranking formula is automatically rendered on the webpage using Adobe's decisioning engine, ensuring the user receives personalized content aligned with the current weather in their area.


## High-Level Steps to Create a Campaign in AJO

-   Create a Channel Configuration 
    -   Define where and how the offers appear (for example, a web page with code-based experience).
    -   Log in to Journey Optmizer
    -   Navigate to _**Administration ->Channels->Create channel configuration**_
    -   **Name**: `offers-by-weather`  
  Identifies this configuration for personalized web offer delivery.
  -   **Channel**:
     `Code-based experience`  
      Offers are not directly injected into the DOM. Instead, AJO returns raw HTML which is parsed using custom JavaScript.
    -   **Platform**: `Web`  
  Targeted specifically for web browsers. No mobile channels are enabled.
    
    -   **Page URL**: `https://gbedekar489.github.io/weather/weather-offers.html`  
      The channel is configured for a specific test page used during development.
    -   **Location on Page**: `offerContainer`  
  Returned offers are dynamically parsed and rendered into this container using frontend logic.

    -   **Content Format**: `HTML`  
  The offers are delivered as raw HTML fragments, allowing full control over how they're styled, filtered, and displayed.


-   **Start a New Campaign**  
    -   Navigate to the Campaigns section and create a new scheduled marketing campaign. Name the campaign appropriately.
    -   **Add Action**  
        - Add code-based-experience action and link the action to a  previously created channel configuration.



    -   **Audience**  
        -   All Visitors (Default).
        -   Identity type: ECID (Experience Cloud ID)
           This setting uses the ECID as the primary identity for recognizing users. 


-   **Create Decision Policy**
    - The action is linked to a **Decision Policy** that defines how offers are selected and how many offers are returned for display. This policy uses a **Selection Strategy** that was created earlier in the tutorial.
    - To insert the decision policy click **_Edit content_** in the Actions sections and then click **_Edit code_** to open the personalization editor.
    - Select _**Decision policy**_ icon on the left and click on **Add decision policy** button to open the **Create decision policy** screen. Provide a meaningful name to the decision policy, and select the number of items the decision policy should return. Default is 1.
    - Click **_next_**, and add the selection strategy created in the earlier step to the decision policy and click **next** to  complete the process of creating the decision policy. No fallback offers have been associated with the decision policy.



-   **Insert Decision Policy**
    ![personalization-editor](assets/personalization-editor.png)

    Insert the newly created decision policy by clicking on the _**Insert policy**_ button. This inserts a for loop in the personalization editor on the right hand side.
    Place your cursor between the each loop on line two and insert the offerText by navigating to the offer by drilling down the `tenant name`. Wrap the offer in a Div with the class offer-item as shown in the screenshot.

    
    
-   **Publish the Campaign**  
   Activate the campaign to begin delivering personalized offers in real time.
