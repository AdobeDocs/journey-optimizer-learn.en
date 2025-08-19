---
title: Mobile learning hub
description: This is the go-to space for developers, administrators, marketers, and data analysts to discover everything from setting inbound and ouyt bound mobile channels to weaving them into powerful campaigns. Explore best practices,learn how to drive adoption, and master reporting — all in one place — so teams can deliver impactful, data-driven mobile experiences that connect with users anytime, anywhere.
feature: Overview
role: User, Admin, Developer
level: Beginner, Intermediate
last-substantial-update: 2025-08-04
---

# Journey Optimizer - Mobile Learning Hub

Jumpstart or level up with mobile channels in Adobe Journey Optimizer. This is the go-to space for developers, administrators, marketers, and data analysts to discover everything from setting inbound and ouyt bound mobile channels to weaving them into powerful campaigns. Explore best practices,learn how to drive adoption, and master reporting — all in one place — so teams can deliver impactful, data-driven mobile experiences that connect with users anytime, anywhere.

>[!VIDEO](https://video.tv.adobe.com/v/3432681?quality=12&learn=on){transcript=true}

If you are new to Journey Optimizer, familiarize yourself with the concepts and functionality (REPLACE WITH LINKS TO COURSES!):

* [Introduction to Adobe Jounrey Optimizer for Marketers](https://experienceleague.adobe.com/en/playlists/journey-optimizer-introduction-to-adobe-journey-optimizer-for-marketers)
* [Configure and Manage Data in Journey Optimizer for Data Engineers](https://experienceleague.adobe.com/en/playlists/journey-optimizer-configure-and-manage-data-for-data-engineers)


## Mobile channel overview

Understand which mobile channels are available in Journey Optimizer and what they are used for.

| ![Push Notifications](/help/mobile-learning-hub/assets/mobile-phone.webp) <br> **[Push Notifications](/help/mobile-learning-hub/channels/push-notifications.md)** | ![In-App Messages](https://via.placeholder.com/150) <br> **[In-App Messages](help/mobile-learning-hub/channels/in-app-messages.md)/** | ![Content Cards](https://via.placeholder.com/150) <br> **[Content Cards](/help/mobile-learning-hub/channels/content-cards.md)** |
|-------------------------------------|------------------------------------|-------------------------------|
| Time-sensitive updates, re-engagement, interactive content | Messages inside app, contextual & real-time, high engagement | Persistent inbox content, non-intrusive, visual and CTA-rich |

| ![SMS/MMS/RCS](https://via.placeholder.com/150) <br> **[SMS / MMS / RCS](/help/mobile-learning-hub/channels/sms-mms-rcs.md)** | ![WhatsApp](https://via.placeholder.com/150) <br> **[WhatsApp](/help/mobile-learning-hub/channels/whatsapp.md)** | ![Code-Based Experience](https://via.placeholder.com/150) <br> **[Code-Based Experience](/help/mobile-learning-hub/channels/code-based-experience.md)** |
|-------------------------------------|------------------------------------|-------------------------------|
| Direct mobile messaging, high visibility | Conversational, rich media, two-way communication | Custom logic & APIs, deep personalization |


+++Push notifications

### What is it?

**Push notifications** are short messages that pop up on a phone, tablet, or computer — even when the user is not using the app that sent them. They're a way for apps to "tap you on the shoulder" and get your attention.

For example:

* A shopping app might alert you to a big sale.
* A delivery app might let you know your order is on the way.
* An airline app might let you know that your flight is ready to check in.

**Important:** The user has to give the app permission (opt-in) before it can send you push notifications. This usually happens when the app is first opened after downloading it, or later if the app asks again during use. Without the user's permission, the app can't send push notifications to their device.

### Use Cases

Choose push notifications as your preferred messaging channel when you need to:

| # | Benefit | Why | Example Use Cases |
|---|---------|-----|-------------------|
| 1 | Time-sensitive updates| Push messages can appear on the lock screen or as banners without requiring the user to open the app. |  <ul><li> Urgent alerts (service outages, safety warnings)</li><li>Time-sensitive offers (flash sales)</li><li> Real-time updates (sports scores, order delivery)</ul> |
| 2 | Re-engagement | Push can bring inactive users back into the app by delivering personalized and relevant prompts. | <ul><li> Abandoned cart or browse reminders — e.g., "You left items in your cart — checkout now for 10% off."</li></ul> |
| 3 | Reduce dependency on costlier channels | Push is generally free to send once you've built the infrastructure, unlike SMS or email where there are per-message costs. |<ul><li> Use push instead of paid SMS for frequent updates.</li></ul>|
| 4 | Deliver rich, interactive content | Modern push APIs allow images, videos, quick actions (e.g., "Accept" / "Decline"), or deep links to specific app screens. | <ul><li>Marketing campaigns with visual appeal</li><li>Quick user actions without fully opening the app.</li></ul> |
| 5 | Leverage device-native capabilities | Push notifications integrate with iOS/Android OS features like vibration, sounds, badges, and geofencing triggers. | <ul><li> Location-based offers when near a store</li><li> Reminders triggered at specific times.</li></ul> |
| 6 | When opt-in is likely | Push only works for users who have explicitly opted in. If the app offers high value or the brand already has trust, opt-in rates can be strong. |<ul><li> Apps with loyal user bases</li><li> Onboarding flows that explain the value of notifications.</li></ul> |

### When NOT to use push as the primary channel

* Low opt-in rates or user resistance to notifications.
* Need for long-form content (email may be better).
* Sensitive or highly private information (push can be seen on lock screens).
* Users are mostly on desktop and not in the mobile app.

+++

+++In-app messages

### What is it?

In-app messages are messages that appear inside an app while the user is actively using it. They are overlay-type messages that sit on top of your app. They don't pop up on the lock screen or outside the app — instead, they show up as banners, pop-ups, or small cards while the user is exploring the app. 

In-app messages are triggered by specific user actions or conditions, such as viewing a certain page, completing a purchase, or being part of a targeted audience segment.


For example:

* A game might show a pop-up explaining a new feature the moment the user unlocks it.

* A shopping app might display a banner with a coupon code while the user is browsing items.

* A social media app might show a message suggesting the user follow new accounts.

### Use Cases

| **Benefits**                     | **Why**                                                                 | **Example Use Cases**                                                                 |
|----------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| High user engagement| Captures users while they're active in the app, ensuring higher visibility and action | <ul><li>Onboarding walkthroughs</li><li>Feature announcements</li><li>Real-time support popups</li></ul>|
| Contextually relevant| Allows messages to be triggered by user behavior, making them timely and personalized | <ul><li> Upsell after feature use</li><li> Inactivity nudges</li><li> Error or success messages</li></ul>|
| Real-time delivery| Enables immediate communication for time-sensitive or critical updates | <ul><li> System outages</li><li>Transaction confirmations</li><li>Payment failures</li></ul>|
| No dependency on external channels | Keeps the user experience contained within your product without relying on email/SMS |<ul><li> Tutorial completion reminders</li><li>Trial expiry alerts</li></ul>|
| Better conversion potential| Messages placed in-context convert better than off-platform messages| <ul><li> Upgrade prompts after hitting plan limits</li><li>In-app surveys</li></ul>|
| Customization & segmentation|Can be personalized based on user data or app events|<ul><li> Messages tailored to user tier or activity level</li><li> Role-specific alerts </li></ul>|
| Non-intrusive (when designed well) | Allows subtle yet effective communication without breaking user flow| <ul><li> Tooltips</li><li>Slide-ins with updates</li><li>Chat widget nudges</li></ul>|


### When *not* to use in-app communication

* **User is not actively using the app**  
  In-app messages won't be seen if the user isn't currently logged in or engaging with your product. Use email or push instead.

* **Critical or time-sensitive issues requiring immediate attention**  
  For urgent messages (e.g., security alerts, payment failures), use channels that can reach the user outside the app, like SMS or email.

* **Regulatory or legal communications**  
  Compliance-related messages (e.g., terms updates, policy changes) may require delivery and read confirmation — better suited to email.

* **Account reactivation or win-back campaigns**  
  If the user is inactive or churned, they won't see in-app messages. Use re-engagement campaigns via email or push notifications.

* **High-volume transactional updates**  
  Notifications like shipping updates or receipts are often better sent via email for archival and convenience.

* **Overuse leads to banner blindness or annoyance**  
  Bombarding users with too many in-app messages can hurt UX and lead to frustration or ignored messages.

* **No connectivity / offline scenarios**  
  In-app relies on the user being online and in-session — it won't help in offline-first environments.

+++

+++Content Cards

>[!VIDEO](https://video.tv.adobe.com/v/3458224/?learn=on&enablevpops){transcript=true}

### What is it?

**Content Cards** are persistent, in-app messages that live inside a dedicated inbox or feed within your app. Unlike push notifications, they don't interrupt the user and can be viewed at the user's convenience.  
They're ideal for delivering **non-urgent**, **informative**, or **promotional content** that benefits from visibility over time.

Think of Content Cards as an in-app "message center" or personalized newsfeed.

#### Examples:

- A bank might show a new credit card offer inside your account dashboard.  
- A fitness app might surface new workouts or challenges in a feed.  
- A retail app might display personalized recommendations or promotions.

**Important:** Content Cards are silent, persistent, and don't require OS-level permissions.

### Use Cases

Choose **Content Cards** as your preferred messaging channel when you need to:

| # | Benefit | Why | Example Use Cases |
|---|---------|-----|-------------------|
| 1 | Persistent visibility | Cards stay visible until dismissed — ideal for non-urgent updates | <ul><li>New feature announcements</li><li>Ongoing promotions</li><li>Educational tips</li></ul> |
| 2 | Non-intrusive delivery | Doesn't interrupt user flow; engages when they're ready | <ul><li>Product nudges</li><li>Account status messages</li><li>Non-critical reminders</li></ul> |
| 3 | Works without push opt-in | Great fallback for users who disabled push | <ul><li>Trial expiry notices</li><li>Offers & promos</li><li>Profile nudges</li></ul> |
| 4 | Visually rich messaging | Cards can include media, copy, and CTA buttons | <ul><li>Banner campaigns</li><li>Product spotlights</li><li>Promo carousels</li></ul> |

### When *not* to use content cards]

Not every message belongs in a card. Avoid this channel when urgency or external reach is key.

* **Time-sensitive alerts** — use push or email for urgency (e.g., downtime, safety, payment issues).
* **Inactive users** — cards only work when users are *inside* the app.
* **Sensitive or secure info** — use secure email or in-app modals for privacy-critical communication.
* **Urgent CTAs** — if it needs immediate action (e.g., flash sale expiring in 1 hour), cards are too passive.
+++

+++Code-Based experience

### What is it

**Code-based experiences** refer to personalized, dynamic content or messaging built using custom code (JavaScript, APIs, or templating languages) within platforms like Adobe Journey Optimizer.  
This allows you to create highly tailored, data-driven customer journeys and messaging beyond standard drag-and-drop tools.

Examples:
- Customizing email or push notification content based on complex user attributes or behavior.
- Integrating third-party APIs to fetch real-time data and inject it into messages.
- Building advanced decision logic or multi-step campaigns triggered by specific events.

**Important:** Requires developer skills and testing to ensure correct data handling and delivery.

### Use cases

Choose code-based experiences when you need to:

| # | Benefit | Why | Example use cases |
|---|---------|-----|-------------------|
| 1 | Deep personalization | Enables highly tailored messaging using complex logic and real-time data | <ul><li>Dynamic product recommendations based on recent browsing</li><li>Personalized discounts calculated from user loyalty status</li></ul> |
| 2 | Integrate external systems | Fetch and display external data directly in communications | <ul><li>Weather-based promotions</li><li>Real-time inventory updates in email</li></ul> |
| 3 | Create advanced workflows | Build multi-step, conditional journeys that adapt per user actions | <ul><li>Abandoned cart follow-ups with timed reminders</li><li>Reactivation campaigns triggered after inactivity thresholds</li></ul> |
| 4 | Go beyond platform limits | Add features or messaging formats not supported out-of-the-box | <ul><li>Custom interactive email elements</li><li>Complex SMS message variations</li></ul> |
| 5 | Improve campaign flexibility | Quickly adjust logic or content without waiting for platform updates | <ul><li>Seasonal content toggles</li><li>Real-time error handling in journeys</li></ul> |

### When not to use code-based experiences

* When you need quick, simple campaigns that can be built with no-code tools.
* If you don't have access to developer resources or testing environments.
* When timeline or budget constraints limit custom development.
* For standard messaging that fits well with built-in platform features.
* When maintainability is a concern — custom code requires ongoing support.
+++

+++SMS/MMS/RCS

### What is it

**SMS (Short Message Service)**, **MMS (Multimedia Messaging Service)**, and **RCS (Rich Communication Services)** are mobile messaging channels that let you reach users directly on their phone number — without requiring an app or internet connection (SMS/MMS).

- SMS: Plain text messages up to 160 characters.
- MMS: Messages with media (images, video, audio) or longer text.
- RCS: Modern evolution of SMS with features like read receipts, rich media, carousels, and branded sender profiles. (Support varies by device and carrier.)

These channels are device-native, high-visibility, and widely accessible. They're ideal when immediacy, reach, or guaranteed delivery matters.

Examples:
- A bank sends a fraud alert via SMS.  
- A retailer shares a coupon image through MMS.  
- A travel company sends a boarding pass using RCS with quick reply buttons.

**Important:** SMS/MMS/RCS require explicit user opt-in for compliance with privacy and carrier regulations (e.g., TCPA, GDPR).

### Use cases

Choose SMS/MMS/RCS when you need to:

| # | Benefit | Why | Example use cases |
|---|---------|-----|-------------------|
| 1 | Maximize reach and immediacy | SMS works on nearly all mobile phones — no internet or app required | <ul><li>Critical alerts (fraud, outages)</li><li>One-time passcodes (2FA)</li><li>Urgent time-bound reminders</li></ul> |
| 2 | Guarantee visibility | Text messages typically have extremely high open rates (90%+ within minutes) | <ul><li>Appointment confirmations</li><li>Delivery status updates</li><li>Flash sale alerts</li></ul> |
| 3 | Send rich content (MMS/RCS) | Use images, video, carousels, or buttons for interactive messaging | <ul><li>Promotional flyers</li><li>Event invitations with RSVP</li><li>RCS messages with quick replies</li></ul> |
| 4 | Reach users without app access | Works even if users haven't downloaded or opened your app | <ul><li>Win-back campaigns</li><li>Re-engagement nudges</li><li>Pre-install customer updates</li></ul> |
| 5 | Drive high-urgency actions | Ideal for prompts that require a fast response | <ul><li>"Your payment is past due" reminders</li><li>"Your table is ready" alerts</li><li>"Sale ends in 1 hour" messages</li></ul> |
| 6 | Layer with other channels | Combine with in-app, email, or push to create multi-channel experiences | <ul><li>Send SMS if push is ignored</li><li>Email + SMS for confirmations</li><li>Cross-channel journey orchestration</li></ul> |

### When not to use SMS/MMS/RCS

Use these channels with care — they can be powerful but also costly and potentially intrusive.

- When cost is a concern — SMS/MMS can incur per-message fees, especially at scale.
- For long-form or complex content — Email or in-app is better for detailed explanations or structured layouts.
- When you don't have user opt-in — Sending without permission can lead to legal consequences and user distrust.

+++

+++WhatsApp

### What is it

**WhatsApp** is a popular messaging app that allows businesses to engage customers through personalized, conversational messaging using the WhatsApp Business API.  
Within Adobe Journey Optimizer, WhatsApp enables rich, interactive marketing and customer service messages delivered directly to users' WhatsApp accounts.

Examples:
- Sending order updates or delivery notifications.  
- Providing customer support via chat.  
- Sharing promotional offers with rich media like images, videos, or buttons.

**Important:** WhatsApp requires explicit user opt-in and compliance with WhatsApp Business policies and local regulations.

### Use cases

Choose WhatsApp as your preferred channel when you need to:

| # | Benefit | Why | Example use cases |
|---|---------|-----|-------------------|
| 1 | Reach users on a widely used messaging platform | WhatsApp has a large active user base globally with high engagement | <ul><li>Order and delivery updates</li><li>Customer support conversations</li></ul> |
| 2 | Deliver rich, interactive messages | Supports images, videos, documents, buttons, and quick replies | <ul><li>Promotional campaigns with CTAs</li><li>Interactive surveys or feedback requests</li></ul> |
| 3 | Enable two-way conversational experiences | Facilitate real-time dialogue with customers within the app | <ul><li>Customer service chats</li><li>Appointment scheduling</li></ul> |
| 4 | Maintain compliance and trust | Messages are delivered via an official API with strict opt-in requirements | <ul><li>Subscription confirmations</li><li>Regulatory notifications</li></ul> |
| 5 | Integrate with other channels | Combine with email, push, or SMS for seamless multi-channel journeys | <ul><li>Cross-channel re-engagement</li><li>Follow-up on abandoned carts</li></ul> |

### When not to use WhatsApp

* If your audience does not actively use WhatsApp.
* When users have not explicitly opted in to receive WhatsApp messages.
* For urgent notifications requiring guaranteed immediate attention (consider SMS or push).
* For lengthy or complex content better suited to email or in-app experiences.
* If real-time conversational support is not feasible due to resource constraints.

+++

### How do the mobile channels differ

* **In-app messages**  
  Delivered while users are actively using your app, these messages are real-time and interactive. They're perfect for engaging customers "in the moment."

* **Push notifications**  
  Sent outside the app, push messages grab attention immediately. They're ideal for time-sensitive updates and encouraging users to return to your app.

* **Content cards**  
  These are non-intrusive, persistent messages users can access anytime within the app. Content cards work well for sharing ongoing offers or helpful information.

* **SMS/MMS/RCS**  
  Direct messages sent to users' mobile phones without needing the app. Great for urgent alerts, reminders, and rich media content like images or videos.

* **WhatsApp**  
  A conversational channel through a widely used messaging app, allowing personalized, two-way communication and interactive campaigns.

* **Code-based experiences**  
  Custom-coded messages enable highly personalized and dynamic campaigns, integrating real-time data and complex customer journeys.

### How can mobile channels work together

By combining these channels, you can create a seamless and effective customer experience:

1. Use **push notifications** to quickly grab attention and bring users back to your app (e.g., "Sale starts now!").

2. Once inside, deliver **in-app messages** with personalized promotions (e.g., "Here's your 15% discount for today's sale").

3. Offer **content cards** so users can revisit the promotion anytime before it expires (e.g., "Your 15% discount ends Friday").

4. Use **SMS/MMS/RCS** to send timely reminders or rich media offers directly to users who may not be in the app.

5. Engage customers in meaningful conversations through **WhatsApp**, ideal for customer support or interactive campaigns.

6. Leverage **code-based experiences** to tailor every message based on user behavior and preferences, creating a truly personalized journey across channels.



## Customer use cases

* [Take Flight with Personalization: How Airlines Can Elevate Offers with Adobe Journey Optimizer](https://experienceleaguecommunities.adobe.com/t5/journey-optimizer-blogs/take-flight-with-personalization-how-airlines-can-elevate-offers/ba-p/767513)


## Build your foundation

Learn the concepts and how to    

<table style="table-layout:fixed">
  <tr style="border: 0;">
    <td>
    <a href="configure-and-launch.md"><img src="./assets/configure-message.jpg"></a>
    <div><strong>Configure & Launch</strong><br/>Configure the mobile channeles and integrate with mobile apps.</div>
    </td>
    <td>
    <a href="design-and-deliver.md"><img src="./assets/create-message.webp"></a>
    <div><strong>Design & Deliver</strong><br/>Use mobile channels to build personalized journeys and campaigns that engage customers in real time.</div>
    </td>
    <td>
    <a href="measure-and-optimize.md"><img src="./assets/reports.webp"></a>
    <div><strong>Measure & Optimize</strong><br/>Access reports, analyze performance, and refine strategies for better outcomes.
    </div>
    </td>
  </tr>
</table>

## Common Mobile Business Use Cases

| Use Case | Description | Mobile Channel Usage |
|---------|-------------|----------------------|
| **App Onboarding and Adoption** | Guides new users through the initial stages of app engagement—installing the app, completing setup, and discovering key features. The goal is to maximize retention and long-term usage. | - Push notifications and SMS welcome users and prompt profile completion.<br>- In-app messages highlight features and encourage first actions.<br>- Deep links in emails or ads direct users to specific app screens for seamless onboarding. |
| **Location-Based Engagement** | Delivers personalized, timely messages to users based on their physical proximity to stores, events, or other relevant locations. | - Geo-fencing and beacon tech trigger push notifications when users enter targeted zones.<br>- SMS/MMS deliver localized offers and updates.<br>- In-app banners and cards adapt content based on real-time location. |
| **Abandonment Re-Engagement** | Targets users who abandon carts, forms, or browsing sessions, aiming to bring them back and complete the intended action. | - Push notifications remind users of abandoned carts or incomplete actions.<br>- SMS follow-ups include incentives or direct links to resume.<br>- In-app prompts appear when users return, offering personalized recommendations. |
| **Upsell and Cross-Sell Campaigns** | Promotes additional products or upgrades to existing customers based on their behavior, preferences, or purchase history. | - Push notifications highlight relevant upsell opportunities.<br>- In-app messages and content cards showcase complementary items.<br>- SMS campaigns target segmented audiences with exclusive offers. |
| **Churn Prevention** | Identifies users at risk of leaving and engages them with personalized retention strategies to maintain loyalty. | - Predictive analytics trigger mobile outreach to at-risk users.<br>- Push notifications and SMS offer loyalty rewards or personalized content.<br>- In-app surveys gather feedback to improve retention strategies. |
| **Multi-Channel Messaging** | Orchestrates consistent messaging across multiple mobile channels to ensure users receive timely and relevant communications. | - Push, in-app, SMS, and email are coordinated for unified messaging.<br>- SDKs enable real-time personalization across channels.<br>- Content cards persist across sessions to reinforce key messages. |
| **Mobile SDK Personalization** | Uses mobile SDKs to dynamically personalize app experiences without requiring app store updates, enabling agile experimentation and optimization. | - SDKs allow updates to app UI elements without app releases.<br>- Experiences are personalized based on user segments and behavior.<br>- A/B testing is conducted directly within the app to optimize layouts and messaging. |
