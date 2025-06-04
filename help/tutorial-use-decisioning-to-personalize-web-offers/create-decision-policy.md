---
title: Create a Decision Policy
description: Use a decision policy to define the logic to determine which offers are delivered to a user during personalization.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-05
recommendations: noDisplay, noCatalog
jira: KT-17728
exl-id: 186e4a7d-6077-401f-9958-2f955214bc35
---
# Create a decision policy

Decision policies are containers for your offers that leverage the [!UICONTROL Decisioning] engine in order to pick the best content to deliver, depending on the audience.

1. In the personalization editor, click **[!UICONTROL Decison policy]** item in the left navigation, then click **[!UICONTROL Add decision policy]**.

    ![create-decision-policy](assets/decision-policy.png)

1. Click **[!UICONTROL Add]** to select the selection strategy.

    ![decision-policy](assets/decision-policy2.png)

1. Click **[!UICONTROL Select fallback]** to select the fall back offer.
1. Click **[!UICONTROL Next]** to review the decision policy.
1. Click **[!UICONTROL Create]** to complete the process of creating the decison policy.

## Use the decision policy in the code editor

1. From the personalization editor, click **[!UICONTROL Insert policy]**. 

    The code corresponding to the decision policy is added.

    At this stage, you can include any required decision attributes directly within the code. These attributes are defined in the schema used by the Offers catalog. Standard attributes are organized under the `__experience` namespace, while any custom attributes specific to your organization are stored under the `_<imsOrg>` namespace.

    ![using_decision_polcy](assets/Insert-policy.png)

    This code goes through a list of personalized offers chosen for the user and displays the text for each one on the web page. It shows the message (called `offerText`) from each offer inside a paragraph, so users can see their tailored content clearly.

    If no personalized offer is available, a fallback offer is shown to ensure the space isn't left blank.

1. Click **[!UICONTROL Save]**, then activate the campaign.
