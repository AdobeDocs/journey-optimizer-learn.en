---
title: In-app messages
description: In-app messages are messages that appear inside an app while the user is actively using it. They are overlay-type messages that sit on top of your app. They don't pop up on the lock screen or outside the app — instead, they show up as banners, pop-ups, or small cards while the user is exploring the app. 
feature: In-app
role: User, Developer, Admin
level: Beginner
last-substantial-update: 2025-08-04
---

# In-app messages

## What are in-app messages?

In-app messages are messages that appear inside an app while the user is actively using it. They are overlay-type messages that sit on top of your app. They don't pop up on the lock screen or outside the app — instead, they show up as banners, pop-ups, or small cards while the user is exploring the app. 

In-app messages are triggered by specific user actions or conditions, such as viewing a certain page, completing a purchase, or being part of a targeted audience segment.


For example:

* A game might show a pop-up explaining a new feature the moment the user unlocks it.

* A shopping app might display a banner with a coupon code while the user is browsing items.

* A social media app might show a message suggesting the user follow new accounts.

## Use Cases

| **Benefits**                     | **Why**                                                                 | **Example Use Cases**                                                                 |
|----------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| High user engagement| Captures users while they're active in the app, ensuring higher visibility and action | <ul><li>Onboarding walkthroughs</li><li>Feature announcements</li><li>Real-time support popups</li></ul>|
| Contextually relevant| Allows messages to be triggered by user behavior, making them timely and personalized | <ul><li> Upsell after feature use</li><li> Inactivity nudges</li><li> Error or success messages</li></ul>|
| Real-time delivery| Enables immediate communication for time-sensitive or critical updates | <ul><li> System outages</li><li>Transaction confirmations</li><li>Payment failures</li></ul>|
| No dependency on external channels | Keeps the user experience contained within your product without relying on email/SMS |<ul><li> Tutorial completion reminders</li><li>Trial expiry alerts</li></ul>|
| Better conversion potential| Messages placed in-context convert better than off-platform messages| <ul><li> Upgrade prompts after hitting plan limits</li><li>In-app surveys</li></ul>|
| Customization & segmentation|Can be personalized based on user data or app events|<ul><li> Messages tailored to user tier or activity level</li><li> Role-specific alerts </li></ul>|
| Non-intrusive (when designed well) | Allows subtle yet effective communication without breaking user flow| <ul><li> Tooltips</li><li>Slide-ins with updates</li><li>Chat widget nudges</li></ul>|


## When *not* to use in-app communication

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