---
title: Create Decision Policy 
description: A decision policy defines the logic used to determine which offers are delivered to a user during personalization.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-05
jira: KT-17728
---

# Create Decision Policy

Decision policies are containers for your offers that leverage the Decisioning engine in order to pick the best content to deliver, depending on the audience.

In the personalization editor, click on the Decison policy item in the left navigation and then click on Add decision policy

![create-decision-policy](assets/decision-policy.png)

Click on Add to select the selection strategy
Click on Select fallback to select the fall back offer.
Click next to review the decision policy and click create to complete the process of creating the decison policy.


![decision-policy](assets/decision-policy2.png)


## Use the decision policy in the code editor

From the personalization editor,click on Insert policy.The code corresponding to the decision policy is added.

At this stage, you can include any required decision attributes directly within the code. These attributes are defined in the schema used by the Offers catalog. Standard attributes are organized under the __experience namespace, while any custom attributes specific to your organization are stored under the `_<imsOrg>` namespace.

![using_decision_polcy](assets/Insert-policy.png)

This code goes through a list of personalized offers chosen for the user and displays the text for each one on the web page. It shows the message (called offerText) from each offer inside a paragraph, so users can see their tailored content clearly.
If no personalized offer is available, a fallback offer—is shown to ensure the space isn't left blank.

Click on Save, and then Activate the campaing