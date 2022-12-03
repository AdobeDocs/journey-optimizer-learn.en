---
title: Create a Summer Collection Announcement - Challenge
description: Send a summer collection announcement to a segment of existing customers' to promote the new Luma summer collection.
kt: 8109
role: User
level: Beginner
last-substantial-update: 2022-11-16
hide: yes
exl-id: ae457be7-2c67-4950-a072-1d7030b0e17b
---
# Create a Summer Collection Announcement - Challenge

![AJO Summer Collection Announcement Banner](/help/challenges/assets/email-assets/luma-transactional-onboarding-3.png)

|Challenge|Create a Summer Collection Announcement|
|---|---|
|Persona|Journey Manager|
|Required skills|<ul><li>[Create segments](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/profiles-segments-subscriptions/create-segments.html?lang=en)</li><li> [Import and author HTML email content](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-messages/create-emails/import-and-author-html-email-content.html?lang=en)</li><li>[Use Case - Read segment](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-journeys/use-case-read-segment.html?lang=en)</li>|
|Assets to download|[Seasonal Collection email files](/help/challenges/assets/email-assets/emails-seasonal-collection-announcement.zip)|

## The Story

Luma, a fictional athletic apparel company, is looking to promote its latest apparel and gear collection and to drive sales for existing customers. Luma is launching the new summer collection and would like to specifically target different customer segments.  

## Your Challenge

The Luma marketing team asks you to implement a summer collection marketing campaign in Journey Optimizer. Your challenge is to:

* Create a segment defining which profiles qualify to receive the promotion.
* Build the journey 

### Step 1: Define the Segment – Active Customers

>[!BEGINTABS]

>[!TAB Task]

#### Create a segment in Journey Optimizer

* Create a segment in Journey Optimizer called `Active Customers`.
* The segment must include only active Luma customers.
* Active customers are defined as customers who have a tier in Luma's loyalty program (silver, gold, platinum, or diamond).


>[!TAB Success Criteria]

In the segment builder, you can see the estimated number of qualified profiles. If you are working with the training sandbox data, you will have around 753 qualified profiles out of 1.29 K.

>[!NOTE]
>It can take up to 24 hours for the segment membership to appear for existing profiles, as the existing profiles need to be backfilled.

**A qualifying profile has been added to the segment:**

You can check the profiles that have been added to the segment qualify by navigating to one of in the profiles listed on your Segment's Detail view. 

On the profile page, check the [!UICONTROL Attributes] tab to confirm that they qualify: The tier should be silver, gold, platinum, or diamond.

![Profile attributes](assets/C1-S1-profile-attributes.png)

You can also check the [!UICONTROL Segment membership] tab: Your segment should be listed.

   ![Segment membership](assets/C1-S1-profile-segment-membership.png)

>[!TAB Check Your Work]

Segment fields: [!UICONTROL Attributes] > [!UICONTROL XDM individual Profile] > [!UICONTROL Loyalty] > [!UICONTROL Tier]

This is what your segment should look like:

![Segment – Active Customers](/help/challenges/assets/C1-S1.png)

The code should look like this:

```javascript

stringCompare("equals", loyalty.tier, ["diamond", "gold", "platinum", "silver"], false)

```

>[!ENDTABS]


### Step 2: Create the Journey – Summer collection announcement

>[!BEGINTABS]

>[!TAB Task]

#### Send a summer collection announcement 

An agency provided you with four HTML files with the design for the emails: 

* SeasonalCollectionEmail.html
* Luma Men's Collection email
* Luma Women's Collection email
* Luma - 20 % off Collection email

1. [Download the Seasonal Collection email files](/help/challenges/assets/email-assets/emails-seasonal-collection-announcement.zip). 

2. Create a journey called `Luma - Summer collection announcement` based on the following guidelines:

   1.  Send *Luma - New Summer Collection Announcement* email to the *Active Customers* segment, holding out 10% of the audience as a control group 
       * Message title `Luma - Summer Collection Announcement`.
       * Subject line `(recipient's first name), the new Luma summer collection is here!`.
       * Use the provided HTML file *SeasonalCollectionEmail.html* for the email body.
   2.  Wait two days then send a follow-up email message with more targeted content:
          *   Male customers should receive the **Luma Men's Collection** email.
               * Message title: `Luma Men's Collection`
               * Subject line: `(recipient's first name), explore Men's New athletic gear!`
               * Email body: *MensCollectionEmail.html* for the email body.
          *   Female customers should receive the **Luma Women's Collection** email.
               * Message title: `Luma Women's Collection`
               * Subject line: `(recipient's first name), explore Luma's Women Collection!`
               * Email body: *WomensCollectionEmail.html*
          *   Other customers should receive the **Luma - 20 % off Collection** email.
               * Message title: `Luma - 20 % off Collection`
               * Subject line: `(recipient's first name), enjoy 20% off sales!`
               * Email body: *20OOffCollectionEmail.html* 
   3.  After sending the targeted emails above, wait two days for the email to be opened
   4.  If the targeted email is not opened within 2 days, send the **Luma - 20 %off Collection email** as a final retargeting attempt


>[!TAB Success Criteria]

#### Preview the emails

**Email Message #1 – Luma -  Summer collection announcement**

Preview the email:

1. Add a test profile: Louise Petti:
   1. Identity namespace: *Luma CRM ID* 
   2. Identity value: *d1f132f9f9502bba047a6ec86c4b61f9*

Result:
* The subject line should read: Louise, the new Luma collection is here!
* The email body should match what you have seen in the preview: [New Seasonal collection announcement](/help/challenges/assets/email-assets/SeasonalCollectionEmail.html)


**Email Message #2 - Luma Men's Collection**

Send a proof to yourself:

1. Add a test profile: Stanleigh Stooke:
   1. Identity namespace: *Luma CRM ID* 
   2. Identity value: `4f34057d9d9e792c28ba18ecae378e98`
1. Select the test profile: Stanleigh Stooke
2. Send a proof to yourself

Result:  
You should receive an email. The subject line should read "Stanleigh, explore Men's New athletic gear!" and the email body should match what you have seen in the preview: [Luma Men's Collection](/help/challenges/assets/email-assets/MensCollectionEmail.html)

>[!NOTE]
>It can take a couple of minutes for you to receive the proof.

**Email Message #3 - Luma Women's Collection**

Preview the email with the test profile 'Louise Petti'.

* The subject line should read: *Louise, explore Luma's Women Collection!*
* The email body should match what you have seen in the preview: [Luma Women's Collection](/help/challenges/assets/email-assets/WomensCollectionEmail.html)


**Email Message #4 - Luma 20 % off Collection**

Preview the email with the test profile 'Louise Petti'.

* The subject line should read: *Louise, enjoy 20% off sales!*
* The email body should match what you have seen in the preview: [Luma 20 % off Collection](/help/challenges/assets/email-assets/20OOffCollectionEmail.html)

**Don't forget to publish your emails!** 

#### Test your journey

>[!IMPORTANT]
>
>Before you set the journey into test mode:
>
>1. Make sure that the Read Segment Activity has the namespace set to **Luma CRM id(lumaCrmId)**
>1. For each email, override the default Email parameters for the emails so that they are sent to your email address:
>    * Show the hidden values by clicking the eye symbol.
>    * In the Email parameters, click on the T symbol (enable parameter override
>
>      ![Override email parameters](/help/challenges/assets/c3-override-email-paramters.jpg)
> 
>    *   Click into the Address field
>    *   On the next screen add your email address in parentheses: `"yourname@yourdomain"` in the expression editor and click ok.
>

Test the journey and have the emails sent to your own account:

1.  Put the journey into test mode
2.  Select single profile at a time
3.  Wait time: Set the timer to 120 seconds (type it into the field).
4.  Trigger profile entrance
5.  You can test each branch by using one of the following email addresses as profile identifiers:
       * Female: Louise Petti, Identity value: *d1f132f9f9502bba047a6ec86c4b61f9*
       * Male: Stanleigh Stooke,  Identity value: `4f34057d9d9e792c28ba18ecae378e98`
       * Gender not specified: Leora Dietsche, a8f14eab3b483c2b96171b575ecd90b1

6.  Once you trigger the profile entrance, you should receive the first email, the header should be personalized according to the profile you chose.
7.  The journey should continue into the respective branch and you should receive the related email (for example, if you chose Jenna, you should receive the "Luma Women's Collection" email).
8.  Open the second email and the journey should end
9.  You can repeat step 4. - 7. for all three profiles to check if all your branches are working correctly.
10.  To test the time outs, set the wait time to 30 seconds and trigger the entry again.
11.  Do not open the emails you receive (do not preview the email (!)) and let the wait time laps.

You should receive the following emails:

*   Luma – New Seasonal Collection Announcement
*   Depending on which test profile you used, you should receive one of the following emails:
    * Jenna: Luma Women's Collection
    * Chris: Luma Men's Collection
    * Benny: Luma – 20% Off Collection
*   If you did not open the second email: The Luma – 20% Off Collection

>[!TAB Check your work]

This is what your journey should look like:

![Journey](/help/challenges/assets/c3-j1-journey.png)

**Condition – Control Group:**

![Control Group](/help/challenges/assets/c3-j1-condition-control-group.png)

**Condition – Gender:**\

![Condition - Gender](/help/challenges/assets/c3-j1-condition-gender.png)
>[!ENDTABS]
