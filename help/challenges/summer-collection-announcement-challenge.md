---
title: Create a Summer Collection Announcement - Challenge
description: Send a summer collection announcement to a segment of existing customers' to promote the new Luma summer collection.
kt: 8109
role: User
level: Beginner
---

# Create a Summer Collection Announcement - Challenge

![AJO Summer Collection Announcement Banner](/help/challenges/assets/email-assets/luma-transactional-onboarding-3.png)

|Challenge|Create a Summer Collection Announcement|
|---|---|
|Persona|Journey Manager|
|Required skills|<ul><li>[Create segments](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-segments.html?lang=en)</li><li> [Import and author HTML email content](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-messages/import-and-author-html-email-content.html?lang=en)</li><li>[Use Case - Read segment](https://experienceleague.adobe.com/docs/journey-optimizer-learn/tutorials/create-journeys/use-case-read-segment.html?lang=en)</li>|
|Assets to download|[Seasonal Collection email files](/help/challenges/assets/email-assets/emails-seasonal-collection-announcement.zip)|

## The Story

Luma, a fictional athletic apparel company, is looking to promote its latest apparel and gear collection and to drive sales for existing customers. Luma is launching the new summer collection and would like to specifically target different customer segments.  

## YOUR CHALLENGE

The Luma marketing team asks you to implement a summer collection marketing campaign in Journey Optimizer.
Your challenge is to create a journey in Journey Optimizer. Specifically, you must create the required segment, create four messages, and build the journey.

>![NOTE]
> If you are working in a shared training sandbox, it is best practice to add your name or initials as a pre-fix to the name of any element you create. That allows you to identify your work and 

### Define the Segment – Active Customers

Create a segment in Journey Optimizer called **your name – Active Customers**.
  * The segment must include only active Luma customers.
  * Active customers are defined as customers who have a tier in Luma’s loyalty program (silver, gold, platinum, or diamond).

+++**Success Criteria**

* In the segment builder, you can see the estimated number of qualified profiles. If you are working in a training sandbox, this number should be greater than 0. It might take some time for the estimates to appear.
* A qualifying profile has been added to the segment: 
* You can check the profiles that have been added to the segment qualify by navigating to one of in the profiles listed on your Segment’s Detail view.
* On the profile page, check the Basic attributes to confirm that they qualify (check the tier that they are in) and then check the segment membership on the profile’s Segment Membership. Your segment should be listed.

+++

+++**Check Your Work**

Select the Tier (CDM individual Profile >Loyalty> Tier)

This is what your segment should look like:

![Segment – Active Customers](/help/challenges/assets/C1-S1.png)

Check the code on the bottom-right corner of the Edit segment screen, under Events. 

The code should look like this:

```javascript

loyalty.tier.equals("diamond", false) or loyalty.tier.equals("gold", false) or loyalty.tier.equals("platinum", false) or loyalty.tier.equals("silver", false)

```

+++

### Create Emails - From HTML

Create the emails you need for the Summer collection announcement journey. You have received for HTML filed from an agency with the design for the email bodies:

[Download the Seasonal Collection email files](/help/challenges/assets/email-assets/emails-seasonal-collection-announcement.zip)

#### Email Message #1– New Seasonal collection announcement

Create an email which announces the arrival of the new summer collection to active Luma customers.

1. Create an email message titled **(your name)_Luma New Seasonal Collection Announcement**.
2. Give the email a subject line **(recipient’s first name), the new Luma collection is here!**
3. Use the provided HTML file *SeasonalCollectionEmail.html* for the email body.

+++**Success Criteria**

Preview the email using the Identity namespace: *Email* and the Identity value: *Jenna_Palmer9530@emailsim.io*
* The subject line should read: Jenna, the new Luma collection is here!
* The email body should match what you have seen in the preview: [New Seasonal collection announcement](/help/challenges/assets/SeasonalCollectionEmail.html)

+++

#### Email Message #2 - Luma Men’s Collection

Create a follow-up email announcing the arrival of the new summer collection to male Luma customers.

1. Create an email message titled **(your name)_Luma Men’s Collection**.
2. Give the email a subject line **(recipient’s first name), explore Men's New athletic gear!**
3. Use the provided HTML file * MensCollectionEmail.html* for the email body.

+++**Success Criteria**

Send a proof to yourself

* Enter your email address
* Select the test profile: Chris_Scott1244@emailsim.io
  
  You should receive an email. The subject line should read “Chris, explore Men's New athletic gear!” and the email body should match what you have seen in the preview: [Luma Men’s Collection](/help/challenges/assets/email-assets/MensCollectionEmail.html)

+++

#### Email Message #3 - Luma Women’s Collection

Create a follow-up email announcing the arrival of the new summer collection to female Luma customers.

1. Create an email message titled **(your name)_Luma Women’s Collection**.
2. Give the email a subject line **(recipient’s first name), explore Luma's Women Collection!**
3. Use the provided HTML file *WomensCollectionEmail.html* for the email body.

+++**Success Criteria**

Preview the email using the Identity namespace: *Email* and the Identity value: *Jenna_Palmer9530@emailsim.io*

* The subject line should read: *Jenna, explore Luma's Women Collection!*
* The email body should match what you have seen in the preview: [Luma Women’s Collection](/help/challenges/assets/email-assets/WomensCollectionEmail.html)

+++

#### Email Message #4 - Luma 20 % off Collection

Create a follow-up email announcing the arrival of the new summer collection to Luma customers that don't have the gender defined on their profile.

1. Create an email message titled **(your name)_Luma - 20 % off Collection**.
2. Give the email a subject line **(recipient’s first name), enjoy 20% off sales!**
3. Use the provided HTML file *20OOffCollectionEmail.html* for the email body.

+++**Success Criteria**

Preview the email using the Identity namespace: *Email* and the Identity value: *Benny_Steer4909@emailsim.io*

* The subject line should read: *Benny, enjoy 20% off sales!*
* The email body should match what you have seen in the preview: [Luma 20 % off Collection](/help/challenges/assets/email-assets/20OOffCollectionEmail.html)

+++

### Create the Journey – Summer collection announcement**

Send a summer collection announcement to a segment of existing customers' email promoting the new Luma summer collection.

1. Create a journey called “your name - Summer collection announcement”
2. Send Luma – New Seasonal Collection Announcement email to the Luma-Active Customers segment, holding out 10% of the audience as a control group  
3. Wait two days then send a follow-up email message with more targeted content:
   * Male customers should receive the **Luma Men’s Collection email**
   * Female customers should receive the **Luma Women’s Collection email**
   * Other customers should receive the **Luma - 20 % off Collection email**
4. After sending the targeted emails above, wait two days for the email to be opened
5. If the targeted email is not opened within 2 days, send the **Luma - 20 %off Collection email** as a final retargeting attempt

+++**Success Criteria**

Test the journey and have the emails sent to your own account:

Before you set the journey into test mode:

1. Make sure that the Read Segment Activity has the namespace  set to Email
2. For each email, override the default Email parameters for the emails so that they are sent to your email address:
   1. Show the hidden values by clicking the eye symbol. 
   2. In the Email parameters click on the T symbol (enable parameter override

      ![Override email parameters](/help/challenges/assets/c3-override-email-paramters.jpg)
   3. Click into the Address field
   4. On the next screen add your email address in parentheses: *yourname@yourdomain* in the expression editor and click ok.

**Test:**

1. Put the journey into test mode
2. Select single profile at a time
3. Wait time: Set the timer to 120 seconds (type it into the field).
4. Trigger profile entrance
5. You can test each branch by using one of the following email addresses as profile identifiers:

   * Female: Jenna Palmer: Jenna_Palmer9530@emailsim.io
   * Male: Chris Scott: Chris_Scott1244@emailsim.io
   * Gender not specified: Benny Steer: Benny_Steer4909@emailsim.io

6. Once you trigger the profile entrance, you should receive the first email, the header should be personalized according to the profile you chose.
7. The journey should continue into the respective branch and you should receive the related email (for example, if you chose Jenna, you should receive the “Luma Women’s Collection” email).
8. Open the second email and the journey should end
9. You can repeat step 4. - 7. for all three profiles to check if all your branches are working correctly.
10. To test the time outs, set the wait time to 30 seconds and trigger the entry again.
11. Do not open the emails you receive (do not preview the email (!)) and let the wait time laps.

You should receive the following emails:

* Luma – New Seasonal Collection Announcement
* Depending on which test profile you used, you should receive one of the following emails:
  * Jenna: Luma Women’s Collection
  * Chris: Luma Men’s Collection
  * Benny: Luma – 20% Off Collection
* If you did not open the second email: The Luma – 20% Off Collection

+++

+++**Check your work+++

**Journey**

This is what your journey should look like:

![Journey](/help/challenges/assets/c3-j1-journey.png)

**Condition – Control Group:**

![Control Group](/help/challenges/assets/c3-j1-condition-control-group.png)

**Condition – Gender:**\

![Condition - Gender](/help/challenges/assets/c3-j1-condition-gender.png)

+++
