---
title: Testing the solution
description: Test the solution
feature: Audiences
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-19
recommendations: noDisplay, noCatalog
jira: KT-18089
exl-id: b7bad65d-c978-4981-a914-6cb039433c8b
---
# Test the identity stitching

This sample application simulates a real-world login flow where user credentials are validated on the server side before the CRM ID is sent to Adobe Experience Platform (AEP). A local Node.js server is used to securely serve the web pages, handle basic authentication logic, and avoid browser restrictions (such as blocked local file access or missing CORS headers) that could interfere with Adobe Launch or Web SDK functionality. This setup ensures the experience is closer to a real production environment.

## Install node.js

If you don't have Node.js installed, download and [install it from here](https://nodejs.org/)

Verify installation by running:

`node -v`

`npm -v`

## Setup the project folder

Create a new directory for the sample app using the following commands

`mkdir aep-demo`

`cd aep-demo`

## Initialize the Project

`npm init -y`

## Install Express (Web Server Framework)

`npm install express`

## Create server.js file

``` javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

```

## Add HTML/Assets

Copy all the provided [HTML and CSS files](assets/login-app-files.zip) into this folder. Copy and paste the AEP Tags script inside the `<head>` section of the index.html file.

## Run the server

`node server.js`

## Test

Open the `http://localhost:3000` url. Login is using alice/pass123

## Use the AEP Debugger

The Adobe Experience Platform Debugger is a powerful browser extension that helps validate data being sent from your website to Adobe Experience Platform. It's especially useful for checking whether the identityMap is correctly configured and transmitted via the Adobe Web SDK (alloy.js).

Use the AEP Debugger when testing login events, verifying identity stitching (e.g., ECID and CRMID being passed), and ensuring AEP Tags rules and Data Elements are firing as expected. It provides real-time visibility into outgoing events, identity information, and XDM payloads — critical for troubleshooting profile enrichment and audience qualification.

The following screen shot shows the id "FIN001" being passed correctly.
![aep-debugger](assets/aep-debugger.png)

## Steps to Verify Identity Stitching in AEP

* Login to AEP
* Navigate to Customer -> Profiles ->Browse
* Search for FinWise CRM ID = FIN001
* Open the profile and look at the Identities section. You should see both the CRMID and the ECID listed.   This confirms that the two identities were stitched into a single profile.
* The journey should also get triggered.Verify this by viewing the journey report
* ![journey-report](assets/journey-triggered-report.png)


