---
title: Test the solution
description: Create a simple web page to capture impression and click events on the offers.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-07-18
recommendations: noDisplay, noCatalog
jira: KT-18526
exl-id: 6b6c66d3-218d-4f5b-adb0-a2eca05989ab
---
# Test the solution

## Deploy the sample assets

If you don't have Node.js installed, download and [install it from here](https://nodejs.org/)

Verify installation by running:

`node -v`

`npm -v`

## Set up the project folder

Create a new directory for the sample app using the following commands:

`mkdir frequency-capping `

`cd frequency-capping `

## Initialize the Project

`npm init -y`

## Install the required frameworks

`npm install express`

## Copy asset files

*   Unzip and place the contents of [server.zip](assets/server.zip) in the `frequency-capping` folder.
* Extract the content of [public.zip](assets/public.zip)into the 'frequency-capping' folder

## Update the surface url in the javascript file

Open the `frequency-capping.js` located in the `public\scripts` and update the surfaces property to match with the channel configuration used in the campaign

## Start node js server

Naviagte to `c:\frequency-capping` folder. Execute the `node server.js` command to start the node js server on port 3000


## Update the Adobe Experience Platform Tags Property

Open the `frequency-capping.html` file located in the `public` folder  in text editor and replace the script tag with the script tag of your Adobe Experience Platform Tag Property created in the earlier step of this tutorial. Make sure to save the file

```
<script src="https://assets.adobedtm.com/AEM_TAGS/launch-ENabcd1234.min.js" async></script>
```

## Interact with the offers

* Open the [webpage](http://localhost:3000) in your favorite browser.
* Interact with the offer
* Refresh the page
* Depending on the frequency capping rules,you should see a new offer

## View the report

* Login to Journey Optimizer
* Navigate to Journey Management ->Campaigns
* Click on the campaign and then select the appropriate report from the report menu.
