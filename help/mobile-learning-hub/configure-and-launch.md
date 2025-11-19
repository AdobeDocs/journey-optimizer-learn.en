---
title: Configure and launch
description: Configure the mobile channels in Adobe Journey Optimizer (AJO) and Adobe Experience Platform (AEP), integrate with mobile apps, and ensure readiness for marketing campaign execution.
feature: Overview
role: Developer, Admin
level: Beginner, Intermediate
hide: yes
index: no
last-substantial-update: 2025-08-22
exl-id: d8ffe406-b54b-455f-bd41-7d1fef0a4714
---
Configure the mobile channels in Adobe Journey Optimizer and Adobe Experience Platform, integrate with mobile apps, and ensure readiness for marketing campaign execution.

> **Note**  
> If you are new to Journey Optimizer and Experience Platform, familiarize yourself with the core concepts by taking these course:
> - [Configure and administer Adobe Journey Optimizer](https://experienceleague.adobe.com/en/courses/ajo-configure-and-administrate-ajo-environment)
>*In this course, you will learn to configure and manage the Journey Optimizer environment, including user roles, permissions, sandboxes, and email channels, ensuring efficient and secure operations.*
> - [Engineer Data for Intelligent Journey Activation in Adobe Journey Optimizer](https://experienceleague.adobe.com/en/courses/ajo-engineer-data-for-intelligent-journey-activation)
>*In this course, you will learn how to set up and manage real-time customer profile data for Journey Optimizer using Experience Platform. Understand data modeling, identity mapping, and data ingestion to create unified profiles for personalized customer journeys.*


## Mobile capabilities in Adobe Journey Optimizer

Understand which mobile capabilities Adobe Journey Optimizer offers for developers, marketers, and product teams, including push messaging, in‑app messaging, and content personalization.

>[!VIDEO](https://video.tv.adobe.com/v/342103?quality=12&learn=on){transcript=true}


## Mobile SDK and app configuration 

Mobile implementations in Journey Optimizer begin with the **Adobe Experience Platform Mobile SDK** integration in your app. SDKs are essential for data collection and interaction with Adobe Experience Platform (AEP) and its applications, such as Adobe Journey Optimizer (AJO).

The Mobile SDK:

- Collects app events (screen views, taps, purchases, lifecycle events, etc.) and sends them to the **Adobe Experience Platform Edge Network**.
- Manages **identity** and **consent**, so Journey Optimizer can safely build and use customer profiles.
- Registers and updates **push tokens**, and sends **push and in‑app tracking events** back to Adobe Experience Platform.
- Integrates with **Journey Optimizer mobile extensions** (push, in‑app, content cards, decisioning) so messages can be delivered, rendered, and measured end‑to‑end.

Without the Mobile SDK integrated in your app, Journey Optimizer cannot reliably:

- Deliver and track mobile push and in‑app messages.
- Render and track content cards.
- Use real‑time in‑app behavior to trigger journeys and personalize experiences.


### Prerequisites

Make sure you have:

- Adobe Journey Optimizer (AJO) provisioned for your org.
- Adobe Experience Platform access with Data Collection and Journey Optimizer permissions.
- Admin rights in AJO for channel and configuration setup.
- Access to your mobile app's source code (iOS, Android, or cross‑platform framework).
- Your app has the required OS‑level capabilities enabled (for example, push permissions, notification service extensions, background modes).


### Required Mobile SDK components for Journey Optimizer

To use Journey Optimizer mobile channels (push, in‑app, content cards, code‑based experiences), you must install and configure a set of **core** and **channel‑specific** extensions in your mobile app.

#### Core extensions (required for all mobile use cases)

| Purpose              | Extension examples (iOS / Android)           | Notes |
|----------------------|-----------------------------------------------|-------|
| Event hub & services | Mobile Core / AEP Core, AEP Services         | Foundation for all other extensions. Provides event hub, networking, storage, and shared state. |
| Edge Network         | Adobe Experience Platform Edge Network       | Sends app events to the Adobe Experience Platform Edge Network. |
| Identity             | Identity for Edge Network                    | Manages ECID and other identities used for profile and segmentation. |
| Consent              | Consent for Edge Network                     | Collects and enforces user consent preferences. |
| Assurance            | Adobe Experience Platform Assurance          | Used to validate and debug SDK and channel configuration end‑to‑end. |

#### Channel‑specific extensions for Journey Optimizer

| Channel / capability   | Additional key extensions (on top of core)                          | What they enable |
|------------------------|---------------------------------------------------------------------|------------------|
| Push notifications     | Journey Optimizer mobile extension (push)                           | Register and update push tokens, send push tracking events, connect to AJO push configuration. |
| In‑app messaging       | Journey Optimizer mobile extension (in‑app), Messaging UI components | Fetch and display in‑app messages in context, send impressions and interaction events. |
| Content cards          | Messaging SDK with content card support                             | Fetch, render, and track content cards for accurate Journey Optimizer reporting. |
| Code‑based experiences | Journey Optimizer / decisioning extensions, or Edge Server API      | Fetch decisions for specific "surfaces" in your app; your app controls how content is rendered. |

#### Mobile tag property and configuration

You configure these extensions in a **mobile tag property** in AEP Data Collection (tags). This property controls:

- Which Mobile SDK extensions are installed.
- Which events in your app trigger calls to the Edge Network.
- How data is mapped into XDM and forwarded to Adobe solutions (Journey Optimizer, Analytics, etc.).

You can create and configure this mobile property manually, or use **Guided Channel Setup** to auto‑create the required tag property, datastream, and channel configuration for iOS or Android.

> **Tip**  
> For new implementations, **Guided Channel Setup** is the recommended starting point. It reduces the risk of misconfigured datastreams or missing extensions and walks you through SDK validation with Assurance.

Get started with the Mobile SDK:

- Adobe Experience Platform Mobile SDK overview  
  https://experienceleague.adobe.com/en/docs/platform-learn/data-collection/mobile-sdk/overview
- Implement Adobe Experience Cloud in mobile apps tutorial  
  https://experienceleague.adobe.com/en/docs/platform-learn/implement-mobile-sdk/overview
- Adobe Experience Platform Mobile SDK Documentation  
  https://experienceleague.adobe.com/en/docs/mobile


> **Mobile SDK readiness checklist**
> - [ ] Core SDK installed (Core, Edge, Identity, Consent, Assurance).
> - [ ] Journey Optimizer mobile extensions added for the channels you will use (push, in‑app, content cards, code‑based).
> - [ ] Datastream correctly configured to event and profile datasets.
> - [ ] Identity and consent implemented and validated with Assurance.
> - [ ] Push token registration and tracking validated end‑to‑end.
> - [ ] In‑app and/or content cards display validated on a device.
> - [ ] Guided Channel Setup used for new implementations, or configuration manually aligned to the documented steps.



## Adobe Journey Optimizer Channel Configuration

Learn how the channel configure your **mobile channels** using the guided channel setuo functionality. Understand how to configure the **WhatsApp channel**:

<!-- CARDS
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/web-and-mobile-channels/guided-channel-setup
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/whatsapp-channel/set-up-whatsapp-channel
-->
<!-- START CARDS HTML - DO NOT MODIFY BY HAND -->
<div class="columns">
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Guided channel setup">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/web-and-mobile-channels/guided-channel-setup" title="Guided channel setup" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3433053/?format=jpeg&nocache=1763590669754" alt="Guided channel setup"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/web-and-mobile-channels/guided-channel-setup" target="_blank" rel="referrer" title="Guided channel setup">Guided channel setup</a>
                    </p>
                    <p class="is-size-6">The guided channel setup helps you rapidly set up and validate web and mobile channels with the necessary resources across Experience Platform, Journey Optimizer, and Data Collection so that your marketing team can start building Campaigns and Journeys. Learn how to set up and validate a push channel notification on a sample iOS mobile marketing app.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/web-and-mobile-channels/guided-channel-setup" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Set up the WhatsApp channel">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/whatsapp-channel/set-up-whatsapp-channel" title="Set up the WhatsApp channel" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3470268/?format=jpeg&nocache=1763590669838" alt="Set up the WhatsApp channel"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/whatsapp-channel/set-up-whatsapp-channel" target="_blank" rel="referrer" title="Set up the WhatsApp channel">Set up the WhatsApp channel</a>
                    </p>
                    <p class="is-size-6">This tutorial walks you through setting up the WhatsApp channel in Adobe Journey Optimizer to enable real-time business messaging.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/whatsapp-channel/set-up-whatsapp-channel" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- END CARDS HTML - DO NOT MODIFY BY HAND -->
 

Learn how to configure **SMS/MMS/RCS channels** with the standard providers (Twilio,Synch or Infobip) or using a custom SMS provider:

<!-- CARDS
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-sms-channel
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-custom-sms-provider
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-mms-api-credentials-and-channel-surfaces
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-rcs
-->
<!-- START CARDS HTML - DO NOT MODIFY BY HAND -->
<div class="columns">
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Configure SMS API credentials and channel surfaces">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-sms-channel" title="Configure SMS API credentials and channel surfaces" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3413355?format=jpeg&nocache=1763590670249" alt="Configure SMS API credentials and channel surfaces"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-sms-channel" target="_blank" rel="referrer" title="Configure SMS API credentials and channel surfaces">Configure SMS API credentials and channel surfaces</a>
                    </p>
                    <p class="is-size-6">Learn how to connect Journey Optimizer to an SMS service provider and how to create an SMS channel surface.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-sms-channel" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Configure a custom SMS provider">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-custom-sms-provider" title="Configure a custom SMS provider" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3431625/?format=jpeg&nocache=1763590670246" alt="Configure a custom SMS provider"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-custom-sms-provider" target="_blank" rel="referrer" title="Configure a custom SMS provider">Configure a custom SMS provider</a>
                    </p>
                    <p class="is-size-6">Learn how to configure an SMS provider other than Sinch, Twilio, or Infobip in Adobe Journey Optimizer, set up API credentials and webhooks for inbound messaging, manage opt-in/opt-out keywords, and launch personalized SMS campaigns using native tools and custom payloads.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-custom-sms-provider" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Configure MMS API credentials and channel surfaces">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-mms-api-credentials-and-channel-surfaces" title="Configure MMS API credentials and channel surfaces" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3428872/?format=jpeg&nocache=1763590670257" alt="Configure MMS API credentials and channel surfaces"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-mms-api-credentials-and-channel-surfaces" target="_blank" rel="referrer" title="Configure MMS API credentials and channel surfaces">Configure MMS API credentials and channel surfaces</a>
                    </p>
                    <p class="is-size-6">Learn how to connect Journey Optimizer to an MMS service provider and how to create an MMS channel surface.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/configure-mms-api-credentials-and-channel-surfaces" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Set up RCS in Journey Optimizer">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-rcs" title="Set up RCS in Journey Optimizer" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3464755/?format=jpeg&nocache=1763590670239" alt="Set up RCS in Journey Optimizer"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-rcs" target="_blank" rel="referrer" title="Set up RCS in Journey Optimizer">Set up RCS in Journey Optimizer</a>
                    </p>
                    <p class="is-size-6">Learn how to configure and send branded, interactive RCS messages in Adobe Journey Optimizer using a custom SMS provider. This tutorial walks through setting up API credentials, webhooks, and channel configurations, then building a journey to deliver rich, personalized messaging experiences - all within the native messaging app.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/configuration/channel-configuration/sms-mms-channel/set-up-rcs" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- END CARDS HTML - DO NOT MODIFY BY HAND -->
## Blog posts

* [Using CDN based client side personalization (ODD) on mobile for faster personalizations.](https://experienceleaguecommunities.adobe.com/t5/journey-optimizer-blogs/using-cdn-based-client-side-personalization-odd-on-mobile-for/ba-p/761626)
* [Mobile Activation for Adobe Experience Cloud](https://experienceleaguecommunities.adobe.com/t5/adobe-target-blogs/mobile-activation-for-adobe-experience-cloud/ba-p/541595)

## Ensure compliance with privacy laws and platform guidelines.

<!-- CARDS
* https://experienceleague.adobe.com/en/docs/journey-optimizer/using/privacy/privacy-landing-page{image=../mobile-learning-hub/assets/privacy.webp}{title = Privacy Features in Adobe Journey Optimizer}{description = Learn how to process privacy requests, audit user actions, manage consent, apply governance rules, and leverage advanced security options like Customer Managed Keys.}
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/data-governance-framework
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/classify-data-using-lables{cta = Watch}
* https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/create-data-usage-policies
-->
<!-- START CARDS HTML - DO NOT MODIFY BY HAND -->
<div class="columns">
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Privacy Features in Adobe Journey Optimizer">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer/using/privacy/privacy-landing-page" title="Privacy Features in Adobe Journey Optimizer" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="../mobile-learning-hub/assets/privacy.webp" alt="Privacy Features in Adobe Journey Optimizer"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer/using/privacy/privacy-landing-page" target="_blank" rel="referrer" title="Privacy Features in Adobe Journey Optimizer">Privacy Features in Adobe Journey Optimizer</a>
                    </p>
                    <p class="is-size-6">Learn how to process privacy requests, audit user actions, manage consent, apply governance rules, and leverage advanced security options like Customer Managed Keys.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer/using/privacy/privacy-landing-page" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Learn more</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Data Governance Framework Overview">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/data-governance-framework" title="Data Governance Framework Overview" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/29708/?format=jpeg&nocache=1763590670669" alt="Data Governance Framework Overview"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/data-governance-framework" target="_blank" rel="referrer" title="Data Governance Framework Overview">Data Governance Framework Overview</a>
                    </p>
                    <p class="is-size-6">Understand the governance features in Adobe Experience Platform.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/data-governance-framework" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Classify data using labels">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/classify-data-using-lables" title="Classify data using labels" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/29709?format=jpeg&nocache=1763590670670" alt="Classify data using labels"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/classify-data-using-lables" target="_blank" rel="referrer" title="Classify data using labels">Classify data using labels</a>
                    </p>
                    <p class="is-size-6">Learn how to apply labels to your schemas and datasets.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/classify-data-using-lables" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Create Data Usage Policies">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/create-data-usage-policies" title="Create Data Usage Policies" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/32977/?format=jpeg&nocache=1763590670654" alt="Create Data Usage Policies"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/create-data-usage-policies" target="_blank" rel="referrer" title="Create Data Usage Policies">Create Data Usage Policies</a>
                    </p>
                    <p class="is-size-6">Learn how to create and manage data usage policies.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/journey-optimizer-learn/tutorials/data-governance-and-privacy/create-data-usage-policies" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- END CARDS HTML - DO NOT MODIFY BY HAND -->

### Common implementation pitfalls and how to avoid them

Most mobile issues originate in **SDK or data collection configuration**, not in the Journey Optimizer journeys or campaigns themselves. Use this checklist during implementation.

#### 1. SDK versions and extensions not aligned with channel requirements

**Symptoms**

- Push or in‑app activities do not reach the device.
- Guided Channel Setup or channel validation fails.
- Assurance shows missing Journey Optimizer, Edge, or Identity extensions.

**How to avoid**

- Use the minimum **Mobile Core** and **Journey Optimizer** extension versions documented under Guided Channel Setup prerequisites.
- After installing the SDK, always connect your app to **Assurance** and verify:
  - The expected extensions are loaded.
  - Events are sent to the Edge Network and acknowledged.

See: Set up mobile and web  
https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/guided-setup/set-mobile-config


#### 2. Misconfigured datastreams or datasets

**Symptoms**

- Events or push tracking batches fail in Platform datasets.
- Data ingestion errors (for example, "Updates are not supported for events").
- Push or in‑app reports show little or no tracking.

**How to avoid**

- Do not modify **system schemas or datasets** created for Journey Optimizer tracking.
- Ensure your **datastream** is configured correctly:
  - Experience events map to an **event dataset**.
  - Profile attributes map to a **profile dataset**.
- Prefer Guided Channel Setup or documented datastream steps instead of manually changing system resources.

See: Push Notification flow in Adobe Journey Optimizer  
https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/push/push-config/push-gs


#### 3. Missing or inconsistent identity and consent

**Symptoms**

- Journeys don't trigger as expected for app users.
- Personalization doesn't match the user's behavior in other channels.
- Events appear in Experience Platform, but profiles look fragmented.

**How to avoid**

- Implement **Identity for Edge Network** and send stable identifiers (for example, login IDs) consistently.
- Implement **Consent for Edge Network** and update it when user preferences change.
- In Assurance, check that:
  - Consent values are present and correct on outbound events.
  - Identity information (ECID and your primary IDs) is included and stable over time.

See: Implement consent for Platform Mobile SDK implementations  
https://experienceleague.adobe.com/en/docs/platform-learn/implement-mobile-sdk/app-implementation/consent


#### 4. Push token registration and tracking not wired correctly

**Symptoms**

- Users never receive push notifications, even though campaigns or journeys run.
- Push reports show no opens, dismisses, or interactions.

**How to avoid**

- Update your app to:
  - Register the push token with the Journey Optimizer mobile extension after each install/update and whenever the token changes.
  - Send **push interaction events** (open, dismiss, custom actions) via the Mobile SDK.
- Use Assurance to confirm:
  - Push registration events fire when the token is created or refreshed.
  - Push tracking events are sent when users interact with notifications.

See: Push Notification flow in Adobe Journey Optimizer  
https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/push/push-config/push-gs


#### 5. In‑app messages or content cards not displaying

**Symptoms**

- In‑app messages or content cards do not appear, despite active campaigns or journeys.
- Reporting shows 0 impressions.

**How to avoid**

- Confirm that the **Journey Optimizer mobile messaging / in‑app extension** and **Messaging SDK** are installed and registered.
- Ensure you have defined the correct **triggers** in Data Collection tags:
  - For example, screen views or custom events that should load or show the message.
- For content cards, call the Messaging SDK APIs to fetch, display, and track card interactions.
- In Assurance, verify that:
  - Requests for in‑app or content card decisions are sent on the expected events.
  - Responses are returned from the Edge Network.

See:  
- Create and send in‑app messages  
  https://experienceleague.adobe.com/en/docs/platform-learn/implement-mobile-sdk/experience-cloud/journey-optimizer/journey-optimizer-inapp  
- Configure content cards support in Mobile SDK  
  https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/content-card/configure/content-card-lp

