---
title: Send CRMID to Adobe Experience Platform
description: Create Adobe Experience Platform Tags to send CRMID received from the browser to Adobe Experience Platform
feature: Profiles
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-19T00:00:00.000Z
recommendations: noDisplay, noCatalog
jira: KT-18089
exl-id: 894ad6b7-c4b4-465e-8535-3fdcd77e00eb
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: d2971708-e780-44bb-9e2a-72f139796afd
    internal-label: Customer
subfeature_v2:
  - id: ef9a83ca-eefa-47cf-aa34-f1a34715583a
    internal-label: Profiles
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
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

Create a rule called LoginEvent with the following event and actions

Event
![event](assets/data-pushed-event1.png)

Update Variable Action
![update-variable](assets/update-variable1.png)
Send Event Action
![send-event](assets/send-event1.png)

## Save and Build

Save your changes, create and build the library.
