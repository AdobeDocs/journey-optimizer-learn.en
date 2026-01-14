---
title: Set up XDM Schema, Dataset and Datastream  in AEP
description: Creating XDM Schema, Dataset and Datastream
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10
recommendations: noDisplay, noCatalog
jira: KT-18258
exl-id: 1c7fe9e7-ab72-4d7b-960a-512d0e25808b
---
# Set Up XDM Schema, Dataset and Datastream in AEP

## Create XDM Schema

To use the Adobe Experience Platform Web SDK (Alloy.js) on a web page, AEP Tags must be associated with a Datastream that is mapped to an XDM Event Schema. The Web SDK (alloy.sendEvent) sends data into AEP as Experience Events, which must conform to an XDM schema based on the XDM ExperienceEvent class.

To create an XDM schema

-   Log in to Adobe Experience Platform
-   Navigate to _**Data Management -> Schemas -> Create schema**_

-   Create an XDM event based schema called **_Weather-Schema_**. If you are not familiar with creating a schema, please follow this [documentation](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/tutorials/create-schema-ui)


-   Make sure that the schema has the following fields with appropriate data type.

-   ![weather-schema](assets/weather-schema.png)

-   Add the Field Group _**Web Details**_ to the schema. This field group is required for reporting purposes.

## Create a Dataset Based on the Schema

A **dataset in Adobe Experience Platform (AEP)** is a structured storage container used to ingest, store, and activate data based on a defined XDM schema.

- Navigate to _**Data Management -> Datasets -> Create dataset**_
- Create a dataset called **_Weather-schema-dataset_** based on the XDM schema(_**Weather-Schema**_) created in the previous step.


## Create a Datastream

A datastream in Adobe Experience Platform is like a secure pipeline (or highway) that connects your website or app to Adobe services, allowing data to flow in and personalized content to flow back.

-   Navigate to _**Data Collection > Datastreams**_, then click New Datastream. Name the datastream **weather-related-datastream**


-   Provide the following details as shown in the screenshot below
![datastream](assets/datastream.png)
-   Click Save, then click on Add Mapping and add the Adobe Experience Platform service and the event Dataset with appropriate check boxes selected
![datastream-mapping](assets/datastream-service.png)

-   Save the datastream.


>[!NOTE]
>
>Please note that newly created datasets may take up to 24 hours before they are available for selection in the Ranking Formula or Personalization Editor.
