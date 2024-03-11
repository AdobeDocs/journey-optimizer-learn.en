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

In this lesson, you put on your marketing hat on and dive into Adobe Journey Optimizer. 

First you log in to Journey Optimizer and review the profile and the related profile attributes that were created when you registered on the Fréscopa website during lesson 1.
 
You then create a push notification. Push notifications are used to keep app users informed, even when they are not using the app, but also to reengage them with the app. 

In exercise 2.3, you create a push campaign and send a push notification to your own device.  

## Learning Objectives

* Understand profiles and profile attributes.
* Know how to create a push campaign.
* Understand how to design and personalize a push message.

## Exercises

### Exercise 2.1 - Log in to Journey Optimizer
 
1. Open [Adobe Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:summit-ajo-lab/journey-optimizer/home){target="_blank"} 
2. Login using the following details:
    <br>
    **Username:** L820+**your seat number**@adobeeventlab.com
    **Password:**   Adobe2024! 
   <br>
   You can find the details for your login on your lab machine desktop. Use the Adobe ID and the Password.
   ![desktop](/help/summit/l820-lab-workbook/assets/locate-seat-number.png)

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

<br>
<br>

### Exercise 2.2 - Review your profile

1. In Adobe Journey Optimizer left navigation, navigate to **[!UICONTROL CUSTOMER]** -> **[!UICONTROL Profiles]**.<br>
2. On the **[!UICONTROL Profiles]** overview page, navigate to the [!UICONTROL Browse] tab.<br>
3. In the **[!UICONTROL Identity Namespace]**  field, type in `email` and select the option **Email** from the drop-down that appears:

   ![Select identity namespace](/help/summit/l820-lab-workbook/assets/2-2-1-select-identity-namespace.png)

4. In the **[!UICONTROL Identity Value]** field, enter the email address you used when you registered with Fréscopa.

   ![identity value field](/help/summit/l820-lab-workbook/assets/2-2-identity-value-field.png)
   <br>
5. Click the **[!UICONTROL Profile ID]** link to access the profile data.
   ![Profile ID](/help/summit/l820-lab-workbook/assets/2-2-2-profiles.png)
   <br>
6. On the profile details page, review the information: 

   1. On the **[!UICONTROL Details]** tab:   

      Check the customer profile that was created. All the data was collected through the mobile website and the mobile app and has been added to the profile.

      ![customer profile - detail tab](/help/summit/l820-lab-workbook/assets/2-2-profile-detail-page.png)
   <br>
   2. On the **[!UICONTROL Audience Membership]** tab: Check the audience membership.
      <br>
      ![Audience membership](/help/summit/l820-lab-workbook/assets/2-2-3-audience-membership.png)

>[!SUCCESS] 
> Make sure the profile is part of an audience named:
> 
> **Lab-Seat *your seat number*** (for example, Lab-Seat 99)
> <br>
>
>You require the lab-seat audience in the next exercises. It guarantees that you are only sending the push messages and in-app notifications to your own device. 
>
>**Speak to a teaching assistant, ff you see that you are member of an audience with a seat number different to yours.**
>

### Exercise 2.3 - Create a push campaign

In this exercise, you create a push campaign, design, and customize the push notification, and send the push notification to your own device.

#### 2.3.1 Create the campaign

1. In Journey Optimizer, in the left navigation, in the **[!UICONTROL JOURNEY MANAGEMENT]** section, select **Campaigns**.
2. Click the **[!UICONTROL Create Campaign]** button
   ![Create Campaign](/help/summit/l820-lab-workbook/assets/2-3-1-1-create-campaign.png)
   <br>
3. On the **[!UICONTROL Create Campaign]** page, in the  **[!UICONTROL Action]** section, select the **[!UICONTROL Push notification] check box.
4. From the **[!UICONTROL App surface]** dropdown, select *[!DNL Frecopa-Push]*.
5. Click the **[!UICONTROL Create]** button to create a push campaign.
   ![App surface](/help/summit/l820-lab-workbook/assets/2-3-1-2-app-surface.png)

>[!SUCCESS]
>
>You should now be on the Campaign properties page:
> ![Campaign properties](/help/summit/l820-lab-workbook/assets/2-3-1-2-campaign-properties.png)

#### 2.3.2 Configure your campaign

On this page, you configure the properties, audience, actions, and schedule of your campaign.

##### 2.3.2.1 [!UICONTROL Properties section]

Give your campaign a name. Make sure to start the name with your seat number, so you can easily find your campaign when you search for it. 

   For example, if your seat number is 99: `99 - 10% Discount Campaign`. 
![properties section](/help/summit/l820-lab-workbook/assets/2-3-1-4-properties-section.png)

##### 2.3.2.2 **[!UICONTROL Audience section]**
   
1. In the audience section, click the **[!UICONTROL Select audience]** button.

   ![audience section](/help/summit/l820-lab-workbook/assets/2-3-2-5-audience-section.png)
   <br>
2. On the **[!UICONTROL Select audience]** screen, search for the audience:
   <br>
    **Lab - Seat `your seat number`**
    <br>
   >[!NOTE]
   >It should be the Lab audience that the profile you created on [!DNL Fréscopa] is assigned to.
   
3. Select the audience and click **[!UICONTROL Save]**

   ![audience selection](/help/summit/l820-lab-workbook/assets/2-3-2-7-select-audience.png)

#### 2.3.3. Edit the content of the push notification

In this exercise, you design and customize the push notification.

1. In the **[!UICONTROL Action]** section, click the **[!UICONTROL Edit Content] button**.

   ![Edit content button](/help/summit/l820-lab-workbook/assets/2-3-action-edit-content-button.png)
   <br>

1. On the next screen, depending on the mobile device you have, select either the [!DNL iOS] or [!DNL Android&trade;&trade;] tab to configure your content. 

>[!BEGINTABS] 

>[!TAB iOS]

![iOS tab](/help/summit/l820-lab-workbook/assets/2-3-ios-tab.png)

>[!TAB Android]

![Android tab](/help/summit/l820-lab-workbook/assets/2-3-android-tab.png)

>[!ENDTABS]

##### **2.3.3.1 [!UICONTROL Compose Message] section**

1. **Compose your message** - feel free to add any text you would like; here are examples that you can use:
   <br>
      * Title: `Get 10% off today!`
      * Body text: `Today only! Get 10% off on your House Blend coffee purchase!` 
   <br>
   ![Compose message](/help/summit/l820-lab-workbook/assets/2-3-compose-message.png)

2. **Personalize your body text** - add the recipient's first name:
   1. Click the **personalization dialogue icon** next to the **[!UICONTROL Body]** field.

      ![personalization button](/help/summit/l820-lab-workbook/assets/2-3-personalization-button.png)

   2. On the **personalization dialogue** screen, place the cursor where you want to add the first name in the text.

   3. Make sure that the Profile attributes are selected in the left navigation.

      ![Profile attribute](/help/summit/l820-lab-workbook/assets/2-3-personalize-body-profile-attributes.png)
   <br>
   4. In the **Search field**, search for: `first name`.
   5. Click the **+** next to  the **First name (Profile attributes>Person>Full name)** to add the personalization field to your text. 
   <br>
   ![Search for first name](/help/summit/l820-lab-workbook/assets/2-3-personalize-search-first-name.png)
    <br>

      >[!SUCCESS]
      >
      > This is what your text should look like:
      > ![Personalization token](/help/summit/l820-lab-workbook/assets/2-3-personalization-token.png)
   
   <br>
   6. Click the **[!UICONTROL Save]** button to save the personalization.

##### **2.3.3.2 [!UICONTROL On click behavior] - Section**

1. Select **[!UICONTROL Deeplink]** from the **[!UICONTROL Body click behavior]** dropdown.
2. Copy and paste the following URL into the **URL field**: `dxdemo://exoticVibes`

   ![deeplink](/help/summit/l820-lab-workbook/assets/2-3-deeplink.png)

##### **2.3.3.3 [!UICONTROL Add media] - Section** 

1. Click the **[!UICONTROL Add media] button**.
   ![add media buttons](/help/summit/l820-lab-workbook/assets/2-3-3-3-add-media-buttons.png)
   
2.   On the **[!UICONTROL Select Assets] screen**, in the left navigation, open the **Fréscopa>Products folder** and select an image from that folder. 

      For example: `HouseBlend.png`

3. Click the image and click the **[!UICONTROL Select] button** to add the image to your push notification.

   ![select image](/help/summit/l820-lab-workbook/assets/2-3-3-3-select-image.png)

>[!SUCCESS]
>
> 1. On the preview screen, click **[!UICONTROL Expand View]**.
> 2. Preview your message.
> <br>
>
> ![expand view](/help/summit/l820-lab-workbook/assets/2-3-3-expand-view.png)
>

#### 2.3.4. Review and activate

If you are happy with the content of your message, you can activate the message:

1. Click the **[!UICONTROL Review to activate] button**.
   ![review and activat button](/help/summit/l820-lab-workbook/assets/2-3-4-review-and-activate-button.png)
   <br>
2. On the **[!UICONTROL Review to activate] screen**, click the **[!UICONTROL Activate] button**.
   ![review to activate screen](/help/summit/l820-lab-workbook/assets/2-3-4-review-to-activate.png)

>[!SUCCESS]
> On the **Campaigns overview page**, find your campaign and check the status. 
>
> ![campaign status](/help/summit/l820-lab-workbook/assets/2-3-push-completed.png)
> 
> The status changes from processing to live, to completed – this might take a couple of minutes.
> Once the status has changed to completed:
>
> ![push results](/help/summit/l820-lab-workbook/assets/2-3-push-notification-result.png)
