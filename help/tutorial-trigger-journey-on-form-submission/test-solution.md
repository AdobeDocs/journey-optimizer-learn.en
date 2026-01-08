---
title: Test the solution
description: Create journey to send email on form submission
feature: Journeys
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-12-25
jira: KT-20014

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
*   Unzip the contents of [index.zip] into the public folder
*   update the `.env` file with the appropriate values. These values are available from the cURL command downloaded while creating the HTTP Source connection

## Run the server

Make sure you are in the `trigger-journey` directory.
Execute the command `node server.js`
Point your browser to [web page](http://localhost:3000/)
Fill and submit the form. The journey gets triggered, and an email is sent to the email id entered in the form.


