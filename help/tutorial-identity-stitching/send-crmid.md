---
title: Build the sample application to mimic login activity
description: Build  a sample Node.js application to simualte a login flow
feature: Profiles
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-19
jira: KT-18089
exl-id: e080149c-0ac0-4559-b99d-ebad9f03b98b
---
# Build the sample application to mimic login activity

This sample application, built and deployed on a Node.js server, demonstrates how to send a CRM ID to Adobe Experience Platform (AEP) when a user logs in. The application simulates a login flow where user credentials are validated on the server side. Upon successful login, the user's CRM ID is retrieved and pushed to the adobeDataLayer, triggering a corresponding rule in Adobe Experience Platform Tags (formerly Adobe Launch).

The attachLoginHandler function attaches a submit event listener to a login form. On form submission, it prevents the default action, validates the credentials against a predefined user's object, and retrieves the CRM ID if valid. The function pushes a userloggedin event with the CRM ID and authentication state to the adobeDataLayer, and Adobe Experience Platform Tags picks it up to send the data to Adobe Experience Platform (AEP).


```javascript
function attachLoginHandler() {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (users[username] && users[username].password === password) {
            const crmid = users[username].crmid;
            window.adobeDataLayer = window.adobeDataLayer || [];
            debugger;
            window.adobeDataLayer.push({
                event: "userloggedin",
                user: {
                    crmid: crmid,
                    authenticatedState: "authenticated"
                }
            });
        }
    });
}


```

The Adobe Experience Platform tags script is included in the HTML page's `<head>` Section using a `<script>` tag, typically like this:

`<script src="https://assets.adobedtm.com/b5eu4857867/4e4d84957/launch-b69e276bb9b5-development.min.js" async crossorigin="anonymous"></script>`

The AEP Tags script was obtained by publishing a Web SDK-enabled property created in the earlier step and copying the embed code from the Environments tab.
