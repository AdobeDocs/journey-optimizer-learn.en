---
title: Create a Campaign
description: Learn how an AJO campaign connects audiences, decision policies, and channels to deliver personalized offers at the right moment across customer touchpoints.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-30
recommendations: noDisplay, noCatalog
jira: KT-18188
exl-id: deb16dd5-23cd-495a-ac91-d22fd77f49bd
---
# Create a campaign

To deliver personalized offers to users on the web page, a campaign was created in Adobe Journey Optimizer and configured with the correct channel, Web channel. This configuration ensures that the offers are delivered via real-time decisioning to users interacting with the website.

Within this campaign, a decision policy was defined to control how offers are selected. The decision policy includes a selection strategy, which consists of:

A collection of offer items (for example, based on ZIP code or income),

Eligibility rules that determine which offers apply to a user, and

A ranking formula that assigns scores to eligible offers to prioritize the most relevant ones.

When a logged-in user visits the site, a personalization request is sent to AJO. Based on the user's stitched identity and profile attributes (like ZIP code and annual income), the decision policy evaluates all available offers. It applies the selection strategy and ranking logic to determine the best match.

The result is a tailored set of offers, returned as HTML content, and displayed to the user in a carousel on the website, creating a seamless, real-time personalized experience.


## High-Level Steps to Create a Campaign in AJO

1. **Create a Channel Configuration**  
   Define where and how the offers appear (for example, a web page with code-based experience).
    - Log in to Journey Optmizer
      Navigate to _**Administration ->Channels->Create channel configuration**_
   - **Name**: `finwise-web-personalization`  
  Identifies this configuration for FinWise's personalized web offer delivery.

    - **Experience Type**: `Code-based experience`  
  Offers are not directly injected into the DOM. Instead, AJO returns raw HTML which is parsed using custom JavaScript.
  
    - **Platform**: `Web`  
  Targeted specifically for web browsers. No mobile channels are enabled.


    - **Page URL**: `http://localhost:3000/formula.html`  
  The channel is configured for a specific test page used during development.

    - **Location on Page**: `offers-div`  
  Returned offers are dynamically parsed and rendered into this container using frontend logic.

    - **Content Format**: `HTML`  
  The offers are delivered as raw HTML fragments, allowing full control over how they're styled, filtered, and displayed.


2. **Start a New Campaign**  
   Navigate to the Campaigns section and create a new scheduled marketing campaign. Name the campaign appropriately.


3. **Add Action**  
  Navigate to _**Actions**_ tab
   Add code-based-experience action and link the action to a  previously created channel configuration.



4. **Audience**  
  Navigate to _**Audience**_ tab
   All Visitors (Default).

   Identity type: ECID (Experience Cloud ID)
   This setting uses the ECID as the primary identity for recognizing users. When identity stitching is in place, ECID is linked to CRM ID for Personalized Targeting Select or create a decision policy that defines the offer logic.

5. **Decision Policy**
    
    
    The action is linked to a **Decision Policy** that defines how offers are selected and how many offers are returned for display. This policy uses a **Selection Strategy** that was created earlier in the tutorial.

    To insert the decision policy click **_Edit content_** in the _**Actions**_ tab and then click **_Edit code_** to open the personalization editor.

    Select _**Decision policy**_ icon on the left and click on **Add decision policy** button to open the **Create decision policy** screen. Provide a meaningful name to the decision policy, and select the number of items the decision policy should return. Default is 1.
    Click **_next_**, and add the selection strategy created in the earlier step to the decision policy and click **next** to  complete the process of creating the decision policy. Make sure to select the appropriate fallback offer.

6.  **Insert Decision Policy**
    
    Insert the newly created decision policy by clicking on the _**Insert policy**_ button. This inserts a for loop in the personalization editor on the right hand side.
    Place your cursor between the each loop on line two and insert the offerText by navigating to the offer by drilling down the `tenant name`

    Decision Policy inserted in the personalization editor
    
    ![personalization-editor](assets/personalization-editor.png)



    The  Handlebars code loops through the offers returned by a specific decision policy in Adobe Journey Optimizer and creates a `<div>` for each offer. Each `<div>` uses a data-tags attribute with the offer's internal name to help the carousel group and organize offers by category for smooth navigation. The content inside each `<div>` displays the personalized offer text, enabling dynamic and visually segmented presentation of multiple offers.

7.  **Save the campaign**

    Save the campaign by clicking on _**Review to Activate**_ button


