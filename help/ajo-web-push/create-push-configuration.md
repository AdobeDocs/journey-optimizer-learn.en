---
title: Create push channel
description: Push channel configuration defines how web push notifications are delivered, including the application settings and platform-specific details. It also links your push setup to the required credentials, such as the VAPID keys, enabling AJO to send notifications to subscribed users.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2026-01-21
jira: KT-20879

---
# Create push channel

The first step is to create a Push Channel in Adobe Journey Optimizer. As part of this setup, you will need to generate VAPID keys, which are required to authenticate and enable web push notifications. These keys are then used in the push channel configuration, allowing AJO to securely send notifications to subscribed users.

## Generate VAPID Keys

VAPID (Voluntary Application Server Identification) is a web push standard that lets your server identify itself to push services (like Chrome, Edge, etc.) using public/private key pairs, so the push provider knows who is sending the notification.

It is generated using a tool like web-push generate-vapid-keys, which creates a public key (shared with the browser) and a private key (kept on your server) used together to authenticate and securely send push messages.

For this tutorial we have used Node.js to generate the VAPID keys.

Make sure you have Node.js installed. Then issue the following command
```npm install web-push -g ```

![web-push](assets/install-web-push.png)

```web-push generate-vapid-keys```

![vapid](assets/vapid-keys.png)

## Create Push Credential

*   Login to Journey Optimizer

*   Navigate to Administration | Channels | PUSH SETTINGS | Push Credentials| Create push credential

*   ![push credential](assets/push-credential.png)

## Create Channel Configuration

*   Login to Journey Optimizer

*   Navigate to Administration | Channels | Create Channel Configuration
![channel-configuration](assets/push-channel.png)
