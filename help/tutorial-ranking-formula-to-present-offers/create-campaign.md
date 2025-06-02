---
title: Create a Campaign
description: Learn how an AJO campaign connects audiences, decision policies, and channels to deliver personalized offers at the right moment across customer touchpoints.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-30
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
   - **Name**: `finwise-web-personalization`  
  Identifies this configuration for FinWise's personalized web offer delivery.

    - **Platform**: `Web`  
  Targeted specifically for web browsers. No mobile channels are enabled.

    - **Experience Type**: `Code-based experience`  
  Offers are not directly injected into the DOM. Instead, AJO returns raw HTML which is parsed using custom JavaScript.

    - **Page URL**: `http://localhost:3000/formula.html`  
  The channel is configured for a specific test page used during development.

    - **Location on Page**: `offers-div`  
  Returned offers are dynamically parsed and rendered into this container using frontend logic.

    - **Content Format**: `HTML`  
  The offers are delivered as raw HTML fragments, allowing full control over how they're styled, filtered, and displayed.


2. **Start a New Campaign**  
   Navigate to the Campaigns section and create a new campaign with the Web channel.

3. **Add Action**  
   Add code-based-experience action and link the action to a  previously created channel configuration.



4. **Audience**  
   All Visitors (Default).

   Identity type: ECID (Experience Cloud ID)
   This setting uses the ECID as the primary identity for recognizing users. When identity stitching is in place, ECID is linked to CRM ID for Personalized Targeting Select or create a decision policy that defines the offer logic.

5. **Decision Policy**
    
    
    The action is linked to a **Decision Policy** that defines how offers are selected and how many offers are returned for display. This policy uses a **Selection Strategy** that was created earlier in the tutorial.

    The selection strategy is **formula-based**, meaning it uses a ranking formula to assign scores to eligible offers and determine which ones should be prioritized.

    The strategy includes:

    -   **Offer Collection**  
  A predefined set of offers relevant to the campaign, such as ZIP code–specific or income-based offers.

    -   **Eligibility Rules**  
  Eligibility was set to **_All visitors_** 

    -   **Ranking Formula**  
  A logic expression that scores each eligible offer. The offer with the highest score is rendered in the personalized experience.


6.  **Insert Decision Policy**

    ![personalization-editor](assets/personalization-editor.png)

    The  Handlebars code loops through the offers returned by a specific decision policy in Adobe Journey Optimizer and creates a `<div>` for each offer. Each `<div>` uses a data-tags attribute with the offer's internal name to help the carousel group and organize offers by category for smooth navigation. The content inside each `<div>` displays the personalized offer text, enabling dynamic and visually segmented presentation of multiple offers.


7.  **Publish the Campaign**  
   Activate the campaign to begin delivering personalized offers in real time.

   ![img](assets/personalization-editor.png)
