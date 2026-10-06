---
title: Test the solution
description: Create journey to send email on form submission
feature: Journeys
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-12-25T00:00:00.000Z
jira: KT-20014
exl-id: 9b4a3e0c-d153-4a6b-a7de-b926bd669f6a
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: d998adac-2f81-400b-a669-d07bb196e4eb
    internal-label: Journeys
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Test the solution


Test the solution
>[!VIDEO](https://video.tv.adobe.com/v/3478546)

## Deploy the sample assets

If you don't have Node.js installed, download and [install it from here](https://nodejs.org/)

Verify installation by running:

`node -v`

`npm -v`

## Set up the project folder

Create a new directory for the sample app using the following commands:

`mkdir trigger-journey `

`cd trigger-journey`

## Initialize the Project

`npm init -y`

## Install the required frameworks

`npm install express dotenv axios cors`

## Copy asset files

*   Unzip and place the contents of [project-root.zip](assets/project-root.zip) in the `trigger-journey` folder.

*   Create a folder called `public` in the `trigger-journey` folder
*   update the `.env` file with the appropriate values. These values are available from the cURL command downloaded while creating the HTTP Source connection.
*   Unzip the contents of [index.zip](assets/index.zip) into the `public` folder

## Run the server

Make sure you are in the `trigger-journey` directory.
Execute the command `node server.js`
Point your browser to [web page](http://localhost:3000/)
Fill and submit the form. The journey gets triggered, and an email is sent to the email id entered in the form.
