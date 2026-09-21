# Live activities

## What is it

**Live activities** let you deliver real-time, persistent updates that keep customers informed as an activity progresses — such as an order being prepared, a delivery in transit, or a ride on its way. Instead of sending a new notification for every update, a single live activity is created, then updated and ended as the activity evolves, keeping the customer's Lock Screen or notification shade in sync with what's happening.

Adobe Journey Optimizer supports live activities on both major mobile platforms:

* **[iOS Live Activities](/help/channels/ios-live-activities.md)** — Rich, real-time updates on the iPhone Lock Screen and Dynamic Island.
* **[Android Live Updates](/help/channels/android-live-updates.md)** — Real-time, persistent updates in the Android notification shade.

To configure the Mobile SDK and use the APIs to start, update, and end live experiences across your customer journeys, see [Configure Live Activity](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/live-activity/configure-live-activity/mobile-live-configuration-sdk){target="_blank"}.

## Use cases

Choose live activities as your preferred channel when you need to:

| # | Benefit | Why | Example use cases |
|---|---------|-----|-------------------|
| 1 | Ongoing progress at a glance | Updates appear directly on the Lock Screen or Dynamic Island / notification shade, without the user opening the app | <ul><li>Food delivery tracking</li><li>Ride-hailing status</li><li>Live sports scores</li></ul> |
| 2 | Reduce notification fatigue | A single activity is updated in place instead of firing repeated push notifications | <ul><li>Order preparation and delivery stages</li><li>Flight boarding and gate updates</li></ul> |
| 3 | Time-critical, short-lived context | Ideal for activities with a clear start and end | <ul><li>Curbside pickup countdowns</li><li>Workout or timer sessions</li></ul> |
| 4 | Native, glanceable UI | Uses OS-native surfaces (Dynamic Island, Lock Screen, notification shade) for a high-visibility, low-friction experience | <ul><li>Package tracking</li><li>Queue or wait-time updates</li></ul> |

## When *not* to use live activities

* For long-running or open-ended states without a clear end — end the activity once the underlying process completes.
* For promotional or marketing content — use push notifications, in-app messages, or content cards instead.
* When the update cadence is very high — frequent updates can be throttled by the OS or feel noisy to the user.
* If your app doesn't support the minimum OS versions required for iOS Live Activities or Android Live Updates.
