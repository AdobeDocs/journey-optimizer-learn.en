---
title: Set up a training sandbox
description: Learn how to configure a sandbox for training purposes 
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
role: Admin
level: Beginner
---
# Manually set up a training sandbox

Learn how to configure a sandbox for training purposes. This tutorial will give you step by step guidance on how to ingest training data into a sandbox and how to configure it.

## Objective

Have a dedicated environment for training purposes available. We will be populating the sandbox with dummy profiles based on the retail use case.

## Prerequisites

Before you can begin to set up your training sandbox, you need to make sure that you have:

1. [Administrator rights](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/access-management.html?lang=en) 
   *  To your organization's Journey Optimizer instance
   *  **Journey Administrator** and **Data Manager** right for the training sandbox.
2. Dedicated Sandbox
    Create a development [sandbox](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/access-control/create-and-manage-sandboxes.html?lang=en) which will be used for training and exercise purposes only.
3. [Email Message presets](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/channel-configuration/set-up-email-channel.html?lang=en) for marketing and transactional messaging.
4. Download the following assets:


## Data set-up

### Create identity namespaces
1. In the left navigation go to *[!UICONTROL Customer] > [!UICONTROL Identities] > [!UICONTROL Create identity namespace]*
1. Create the following identity namespaces:

    | Display Name | Identity Symbol | Type |
    |---|---|---|
    | [!DNL Luma Loyalty ID] | [!DNL lumaLoyalty] | [!DNL Cross-device ID] |
    | [!DNL Luma CRM ID] |  lumaCRM | Cross-device ID |
    | [!DNL Luma Product SKU] | [!DNL lumaProduct] | [!DNL Non-people identifier] |

### Create schemas and datasets

1.  In the left navigation go to *[!UICONTROL Data Management] > [!UICONTROL Schemas] > [!UICONTROL Create schema] ([!UICONTROL XDM Profile])*
2.  Create the following schema

    | Name | Identity Symbol | Type |
    |---|---|---|
    | Luma Loyalty ID | lumaLoyalty | Cross-device ID |
    | Luma CRM ID |  lumaCRM | Cross-device ID |
    | Luma Product SKU | lumaProduct | Non-people identifier |


