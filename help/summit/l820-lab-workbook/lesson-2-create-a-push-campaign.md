---
title: Lesson 2 - Create a push campaign
description: Review profile data and learn how to create and send audiences a push notification in Journey Optimizer.
feature: Push
role: User
level: Intermediate
doc-type: Tutorial
duration: 0
recommendations: noDisplay, noCatalog
jira: KT-14980
thumbnail: KT-14980.jpeg
---

# Lesson 2 - Create a push campaign

In this lesson, you review the profile and the related profile attributes that were created when you registered on the Frescopa website and completed the survey. Then you create a push campaign and send a push notification to your own device.

## Learning Objectives

* Understand profiles and profile attributes
* Know how to create a push campaign
* Understand how to design and personalize a push message

## Exercises

>[!BEGINTABS]

>[!TAB 2.1 - Log in to Journey Optimizer]

### Exercise 2.1 - Login to Journey Optimizer
 
1. Open [Adobe Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:summit-ajo-lab/journey-optimizer/home){target="_blank"} 
2. Login using the following details:
    
    **Username:**   L820+**your seat number**@adobeeventlab.com
    **Password:**   Adobe2024! 
   <br>
    ![Login screen](/help/summit/l820-lab-workbook/assets/2-1-1-ajo-sign-in.png)
   <br>
3. You can skip the next two screens:
   <br>
    ![Phone number](/help/summit/l820-lab-workbook/assets/2-1-3-ajo-add-phone.png)
   <br>
     ![Personalization pop up](/help/summit/l820-lab-workbook/assets/2-1-4-ajo-personalization-pop-up.png)


>[!SUCCESS]
>
>You should be logged in to Journey Optimizer and on the homepage:
>
>![AJO Homepage](/help/summit/l820-lab-workbook/assets/2-1-5-ajo-homepage.png)

>[!TAB Exercise 2.2 Review your profile]

### Exercise 2.2- Review your profile

1. In Adobe Journey Optimizer left navigation, navigate to **[!UICONTROL CUSTOMER]** -> **[!UICONTROL Profiles]**.<br>
2. On the **[!UICONTROL Profiles]** overview page, navigate to the [!UICONTROL Browse] tab.<br>
3. From the **[!UICONTROL Identity Namespace]** dropdown, select **[!UICONTROL Email]** <br>
![Select identity namespace](/help/summit/l820-lab-workbook/assets/2-2-1-select-identity-namespace.png)
4. Click the **[!UICONTROL Profile ID]** link to access the profile data
![Profile ID](/help/summit/l820-lab-workbook/assets/2-2-2-profiles.png)
5. On the profile details page: Review the information: 

   1. On the **[!UICONTROL Details]** tab:
   All the data  was collected through the mobile website and the mobile app and has been added to the profile.
   2. On the **[!UICONTROL Segment Membership]** tab: Check the audience membership.
   <br>

>[!SUCCESS] 
> Make sure the profile is part of an audience named:
> 
> **Lab-Seat *your seat number*** (for example, Lab-Seat 99)
> <br>
>       
>![Audience membership](/help/summit/l820-lab-workbook/assets/2-2-3-audience-membership.png)
>
>You require the lab-seat audience in the next exercises. It guarantees that you are only sending the push messages and in-app notifications to your own device. 
>

>[!NOTE]
>If you see that you are member of an audience with a seat number different to yours, you might receive messages from the lab attendee at that seat. 

>[!TAB 2.3 - Create a push campaign]

### Exercise 2.3 - Create a push campaign

In this exercise, you create a push campaign, design, and customize the push notification, and send the push notification to your own device. 

#### 2.3.1 Create the campaign

1. In Journey Optimizer, in the left navigation, select Campaigns.
2. Click the **[!UICONTROL Create Campaign]** button
   ![Create Campaign](/help/summit/l820-lab-workbook/assets/2-3-1-1-create-campaign.png)
3. On the **[!UICONTROL Create Campaign]** page, in the  **[!UICONTROL Action]** section, select the **[!UICONTROL Push notification] check box
4. From the **[!UICONTROL App surface]** dropdown, select *[!DNL Frecopa-Push]*
5. Click the **[!UICONTROL Create]** button
   ![App surface](/help/summit/l820-lab-workbook/assets/2-3-1-2-app-surface.png)

>[!SUCCESS]
>
>You should now be on the Campaign properties:
> ![Campaign properties](/help/summit/l820-lab-workbook/assets/2-3-1-2-campaign-properties.png)

#### 2.3.2 Configure your campaign

In this section, you configure the properties, audience, actions, and schedule of your campaign:

##### 2.3.2.1 [!UICONTROL Properties section]

![properties section](/help/summit/l820-lab-workbook/assets/2-3-1-4-properties-section.png)

1. Give your campaign a name. Make sure to start the name with your seat number, so you can easily find your campaign again. For example, if your seat number is 99: `99 - 10% Discount Campaign`. 
2. If you like, you can add a description, but it is not required for this exercise.
   

##### 2.3.2.2 **[!UICONTROL Audience section]**

![properties section](/help/summit/l820-lab-workbook/assets/2-3-2-5-audience-section.png)
   
1. In the audience section, click the **[!UICONTROL Select audience]** button.
2. On the **[!UICONTROL Select audience]** screen, search for the audience **Lab - Seat `your seat number`**. It should be the Lab audience that the profile you created on [!DNL Frescopa] is assigned to.
3. Select the audience and click **[!UICONTROL Save]**

![audience selection](/help/summit/l820-lab-workbook/assets/2-3-2-7-select-audience.png)

#### 2.3.3. Edit the content of the push notification

In this exercise, you design and customize the push notification. 

1. In the **[!UICONTROL Action] section, click the [!UICONTROL Edit Content] button.

   ![Edit content button](/help/summit/l820-lab-workbook/assets/2-3-action-edit-content-button.png)
   <br>

1. On the next screen, depending on the mobile device you have, select either the [!DNL iOS] or [!DNL Android&trade;] tab to configure your content. 

|[!DNL iOS]|[!DNL Android]|
|---|---|
|![iOS tab](/help/summit/l820-lab-workbook/assets/2-3-ios-tab.png)|![Android tab](/help/summit/l820-lab-workbook/assets/2-3-android-tab.png)|

##### **2.3.3.1 [!UICONTROL Compose Message] - Section**

1. **Compose your message** - feel free to add any text you would like; here are examples that you can use:
   <br>
      * Title: `Get 10% off today!`
      * Body text: `Today only! Get 10% off on your House Blend coffee purchase!` 
   <br>
   ![Compose message](/help/summit/l820-lab-workbook/assets/2-3-compose-message.png)

2. **Personalize your body text** - add the recipient's first name:
   1. Click the **personalization dialogue icon** next to the **[!UICONTROL Body]** field.

      ![personalization button](/help/summit/l820-lab-workbook/assets/2-3-personalization-button.png)

   2. On the **personalization dialogue** screen, place the cursor where you want to add the name in the text.

   3. Make sure that the Profile attributes are selected in the left navigation.

   ![Profile attribute](/help/summit/l820-lab-workbook/assets/2-3-personalize-body-profile-attributes.png)
   <br>
   4. In the **Search field**, search for: `first name` and click the **+** next to  the **First name (Profile attributes>Person>Full name)** to add the personalization field to your text. 
   <br>
   ![Search for first name](/help/summit/l820-lab-workbook/assets/2-3-personalize-search-first-name.png)
    <br>

      >[!SUCCESS]
      >
      > This is what your text should look like:
      > ![Personalization token](/help/summit/l820-lab-workbook/assets/2-3-personalization-token.png)
   
   <br>
   5. Click the **[!UICONTROL Save]** button to save the personalization.

##### **2.3.3.2 [!UICONTROL On click behavior] - Section**

1. Select **[!UICONTROL Deeplink]** from the **[!UICONTROL Body click behavior]** dropdown.
2. Copy and paste the following URL into the **URL field**: `dxdemo://exoticVibes`

![deeplink](/help/summit/l820-lab-workbook/assets/2-3-deeplink.png)

##### **2.3.3.3 [!UICONTROL Add media] - Section** 

1. Click the **[!UICONTROL Add media] button**
   ![add media buttons](/help/summit/l820-lab-workbook/assets/2-3-3-3-add-media-buttons.png)
2. On the **[!UICONTROL Select Assets] screen, scroll down to the Frescopa>Products folder and select an image.
3. Click the image and click the **[!UICONTROL Select] button** to add the image to your push notification. 

   ![select image](/help/summit/l820-lab-workbook/assets/2-3-3-3-select-image.png)

>[!SUCCESS]
>
> 1. On the preview screen, click **[!UICONTROL Expand View]**.
> 2. Preview your message.
> ![expand view](/help/summit/l820-lab-workbook/assets/2-3-3-expand-view.png)
>

#### 2.3.4. Review and activate

If you are happy with the content of your message, you can activate the message:

1. Click the **[!UICONTROL Review to activate] button**.
   ![review and activat button](/help/summit/l820-lab-workbook/assets/2-3-4-review-and-activate-button.png)

2. On the **[!UICONTROL Review to activate] screen**, click the **[!UICONTROL Activate] button**.
   ![review to activate screen](/help/summit/l820-lab-workbook/assets/2-3-4-review-to-activate.png)

>[!SUCCESS]
> On the **Campaigns overview page**, find your campaign and check the status. 
>
> ![campaign status](/help/summit/l820-lab-workbook/assets/2-3-push-completed.png)
> 
> The status changes from processing to live, to completed – this might take a couple of minutes
> Once the status has changed to completed:
>
> ![push results](/help/summit/l820-lab-workbook/assets/2-3-push-notification-result.png)
> 
> 
>[!ENDTABS]
