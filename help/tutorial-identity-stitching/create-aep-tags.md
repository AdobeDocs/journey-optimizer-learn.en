---
title: Send CRMID to Adobe Experience Platform
description: Create Adobe Experience Platform Tags to send CRMID received from the browser to Adobe Experience Platform
feature: Profiles
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-19
recommendations: noDisplay, noCatalog
jira: KT-18089
exl-id: 894ad6b7-c4b4-465e-8535-3fdcd77e00eb
---
# Send CRMID to Adobe Experience Platform

Adobe Experience Platform Tags is used to send the CRMID to Adobe Experience Platform (AEP) because it provides a flexible, event-driven mechanism for transmitting identity data directly from the browser. Sending CRMID after user login allows AEP to link the anonymous ECID with the known CRM profile, enabling accurate identity stitching. This linkage forms the foundation for building unified customer profiles, qualifying audiences, and delivering real-time personalized experiences in Adobe Journey Optimizer (AJO).

An Experience Platform Tags property called _**FinWise**_ is created. The following extensions were added to the Tags property

![tags-extensions](assets/tags-extensions.png)

Configure the AEP Web SDK extension using the Financial Advisors DataStream created in the previous step.
Experience Cloud ID Service is an optional extension added to the tag property for debugging purposes.

## Tag Data Elements

Create the following Data Elements

| Data Element | Extension                         | Data Element Type         | Custom Settings                        |
|--------------|-----------------------------------|---------------------------|----------------------------------------|
| crmid        | Adobe Client Data Layer           | Data Layer Computed State | user.crmid                             |
| ECID         | Experience Cloud ID Service       | ECID                      |                                        |
| identity     | Adobe Experience Platform Web SDK | Identity map              | ![image](assets/identity-settings.png) |
| XDMVariable  | Adobe Experience Platform Web SDK | Variable                  | ![image](assets/xdmvariable.png)       |

## Create Rule

Create a rule called userLoggedin with the following event and actions

Event
![event](assets/data-pushed-event.png)

Update Variable Action
![update-variable](assets/update-variable.png)
Send Event Action
![send-event](assets/send-event.png)

## Save and Build

Save your changes, create and build the library.
