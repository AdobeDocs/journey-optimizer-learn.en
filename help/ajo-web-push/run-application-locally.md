---
title: Run the Application Locally
description: Setting up the sample applicatoin locally to explore the web push notification flow using AJO.
feature: Push
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-04-21
jira: KT-20879

---
## Run the Application Locally

This page guides you through setting up the sample application locally so you can test and explore the web push notification flow using Adobe Journey Optimizer. You will clone the repository, configure environment variables, and run the application on your local system.


Follow these steps to run the sample application on your local system.

### 1. Install Node.js

Make sure you have **Node.js (version 16 or higher)** installed on your system.

You can [download it here:](https://nodejs.org/)

Verify the installation

```node -v```

```npm -v```


### 2. Clone the Repository

```git clone https://github.com/gbedekar489/ajo-web-push.git```

```cd ajo-web-push```

### 3. Install Dependencies

  ```npm install```

### 4. Configure Environment Variables

Create a .env file in the root directory and add the following:
```
DATASTREAM_ID=your_datastream_id
ORG_ID=your_org_id
VAPID_PUBLIC_KEY=your_vapid_public_key
APP_ID=your_app_id
DATASET_ID=your_profile_dataset_id
PORT=3000
```

When running locally, these values are read from the .env file. In production (e.g., Render), they are configured as environment variables.