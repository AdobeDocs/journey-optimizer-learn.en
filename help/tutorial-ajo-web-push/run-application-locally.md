---
title: Run the Application Locally
description: Setting up the sample applicatoin locally to explore the web push notification flow using AJO.
feature: Push
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-04-21T00:00:00.000Z
jira: KT-20879
exl-id: 2635641b-5ae2-4303-bac7-02c3702950f0
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: 66e1fd99-672d-5d64-aa58-eca107f0fbae
    internal-label: Push
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Run the Application Locally

This page guides you through setting up the sample application locally so you can test and explore the web push notification flow using Adobe Journey Optimizer. You will clone the repository, configure environment variables, and run the application on your local system.


Follow these steps to run the sample application on your local system.

## 1. Install Node.js

Make sure you have **Node.js (version 16 or higher)** installed on your system.

You can [download it here:](https://nodejs.org/)

Verify the installation

`node -v`

`npm -v`


## 2. Clone the Repository

`git clone https://github.com/gbedekar489/ajo-web-push.git`

`cd ajo-web-push`

## 3. Install Dependencies

  `npm install`

## 4. Configure Environment Variables

Create a .env file in the root directory and add the following:

```
DATASTREAM_ID=your_datastream_id
ORG_ID=your_org_id
VAPID_PUBLIC_KEY=your_vapid_public_key
APP_ID=your_app_id
DATASET_ID=your_event_dataset_id
PORT=3000
```


When running locally, these values are read from the .env file. In production (e.g., Render), they are configured as environment variables.
