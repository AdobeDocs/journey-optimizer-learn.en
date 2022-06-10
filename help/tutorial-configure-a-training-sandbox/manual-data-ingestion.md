---
title: Ingest data manually
description: Learn how to create data sets and ingest sample data manually.
feature: Sandboxes, Data Management, Application Settings
doc-type: tutorial
kt: 9382
role: Admin
level: Beginner
recommendations: noDisplay, noCatalog
---

# Ingest data manually

This section guides you through the required steps to create data sets and ingest sample data.

>[!TIP]
>
> Watch the video tutorial [Create datasets and ingest data](/help/set-up-data/create-datasets-and-ingest-data.md) before you begin.

 You will create five [!UICONTROL datasets] based on the Luma [!UICONTROL schemas] you created in the [previous section](/help/tutorial-configure-a-training-sandbox/manual-data-set-up.md). After the datasets have been created, you can ingest data from the JSON files you downloaded and modified. (See [Introduction and prerequisites](/help/tutorial-configure-a-training-sandbox/introduction-and-prerequisites.md) for instructions).

## Create the first dataset

Create a dataset named *[!DNL Luma Loyalty Data]* from [!DNL Luma Loyalty schema]

1. From the left navigation, under [!UICONTROL DATA MANAGEMENT], select **[!UICONTROL Datasets]**.

1. Select **[!UICONTROL Create dataset]**.

   ![Create a dataset](assets/create-dataset.png)

1. On the next page, select [!UICONTROL Create dataset from schema].

   ![Create a dataset from schema](assets/create-dataset-from-schema.png)

1. On the next page, search for the *[!DNL Luma Loyalty]* schema you created earlier.

1. Select *[!DNL Luma Loyalty]*.

1. Click **[!UICONTROL Next]**.

   ![Search and select schema](assets/create-dataset-select-schema.png)

1. Configure the dataset:

   * Name: `Luma Loyalty Data`

1. Click **[!UICONTROL Finish]**.

   ![Configure dataset](assets/create-dataset-configure.png)

## Ingest sample data

After creating a dataset, you can ingest data into the dataset.

1. On the [!DNL Luma Loyalty Data] page, scroll down the bottom of the right panel to the [!UICONTROL ADD DATA] section and enable:

   * **[!UICONTROL Error diagnostics]** and

   * **[!UICONTROL Partial ingestion]**

   ![Ingest Data](assets/ingest-data.png)

1. Drag and drop the `luma-loyalty.json` file to upload sample data to the dataset.

1. Refresh the page and check the batch status to confirm that the file ingested correctly.

   375 records should have been ingested. It might take a couple of minutes for the data to be ingested.

>[!TIP]
>
>If the batch fails, make sure that you replaced the organization ID in the `luma-loyalty.json` file with your [organization ID](https://experienceleague.adobe.com/docs/core-services/interface/administration/organizations.html?lang=en).

## Create fours additional [!UICONTROL datasets]

Next, create the following fours additional [!UICONTROL datasets] and ingest the data into the `Luma CRM Data` and the `Luma Products Data` data sets.

| Dataset Name | From Schema| File to ingest| Records |
| -----| ------ | -------| ------- |
| `Luma CRM Data` | `Luma CRM` | `luma-crm.json` | 500     |
| `Luma Products Data`| `Luma Products`| `luma-products.json`| 92|
| `Luma Product Interactions Data`|`Luma Product Interactions` |none|0|
|`Luma Product Inventory Events`|`Luma Product Inventory Events`|none| 0 |

## Next steps

You have successfully created all required data sets and ingested the sample data. The final step is to [configure events](/help/tutorial-configure-a-training-sandbox/configure-events.md).
