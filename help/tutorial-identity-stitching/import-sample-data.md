---
title: Import sample CRM data into AEP profile dataset
description: Import sample records (e.g., with CRMID, email, income, zip code) to validate whether AEP can correctly stitch those profiles with anonymous web visitors based on shared identifiers like ECID.
feature: Profiles
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-19
recommendations: noDisplay, noCatalog
jira: KT-18089
exl-id: 33c8c386-f417-45a8-83cf-7312d415b47a
---
# Import sample CRM data into AEP profile dataset

To begin the identity stitching, import sample CRM profile data into a dataset tied to a profile-enabled schema in Adobe Experience Platform

## Create a custom namespace

* Navigate to Customer -> Identities -> Create identity namespace
* Select Individual cross-device ID and provide the display name and identity symbol as shown in the screen-shot below.
![custom-namespace](assets/custom-namespace.png)

## Create a profile enabled schema

Create an individual profile schema called **_FinWiseProfileSchema_**. Include fields, such as annualIncome, email,firstName,lastName and loyaltyStatus.
Add an identity field **_crmid_** as shown. Mark the crmid field as identity and primary.


![profile-schema](assets/finwise-profile-schema.png)

## Prepare sample data

Update the dummy email addresses to real ones. These will be used later when sending messages with Adobe Journey Optimizer.

|   | crmId  | firstName | lastName | email                   | loyaltyStatus | zipCode | annualIncome | 
|---|--------|-----------|----------|-------------------------|---------------|---------|--------------|
|   | FIN001 | Alice     | Wong     | alice.wong@example.com  | Gold          | 92128   | 120000       |
|   | FIN002 | Bob       | Smith    | bob.smith@example.com   | Silver        | 92126   | 85000        |
|   | FIN003 | Charlie   | Kim      | charlie.kim@example.com | Platinum      | 60614   | 175000       |
|   | FIN004 | Diana     | Lee      | diana.lee@example.com   | Gold          | 30303   | 98000        |
|   | FIN005 | Ethan     | Brown    | ethan.brown@example.com | Bronze        | 75201   | 60000        |

## Ingest the CSV file

*   Create a dataset called **_FinWiseCustomerDataSetWithAnnualIncome_** based on the **_FinWiseProfileSchema_** created in the earlier .Make sure the dataset is enabled for profile.

*   Navigate to Connections -> Sources -> Local system
*   Select the **_Add Data_** under the Local file upload. Make sure to select the _**FinWiseCustomerDataSetWithAnnualIncome**_ as the target dataset.
![ingest-csv](assets/ingest-csv-into-dataset.png)
*   Navigate to the next screen. Upload the [csv file](assets/finwise_profiles.csv) and verify the mappings 
![mappings](assets/mappings.png)

*   Click Finish to start the data ingestion process

## Verify profile

*   Navigate to Customer ->Profiles and search for FinWise CRM ID equal to FIN001 or any other valid value
![verify-profile](assets/verify-profiles.png)
