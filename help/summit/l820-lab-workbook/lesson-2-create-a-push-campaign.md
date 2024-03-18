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
---

# Lesson 2 - Create a push campaign

In the previous exercise, you were a coffee enthusiast, a Fréscopa customer. You interacted with the brand through their website and the Fréscopa app and received many transactional messages. These messages are triggered through the user's interaction with the website or the application. 
 
In this exercise, you will put your marketer hat on and implement a marketing campaign for Frésopa, which will utilize the push channel to target the Fréscopa app users. Push notifications are used to keep app users informed, even when they are not using the app, but also to reengage them with the app. The objective is to incentivize the customer to buy the house blend, by offering a 10% discount.

## Learning Objectives

* Know how to create a push campaign.
* Understand how to design a push message.

## Exercise 2.1 - Log in to Journey Optimizer
 
1. Open [Adobe Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:summit-ajo-lab/journey-optimizer/home){target="_blank"}.

1. Login using the following details:
   
   * **Username:** L820+**`<your seat number>`**@adobeeventlab.com
   * **Password:**   Adobe2024! 
   
   You can find the details for your login on your lab machine desktop. Use the Adobe ID and the Password.

   ![desktop](/help/summit/l820-lab-workbook/assets/desk-top.png)

   ![Login screen](/help/summit/l820-lab-workbook/assets/2-1-1-ajo-sign-in.png)
   
1. You can skip the next two screens:
   
   ![Phone number](/help/summit/l820-lab-workbook/assets/2-1-3-ajo-add-phone.png)
   
   ![Personalization pop up](/help/summit/l820-lab-workbook/assets/2-1-4-ajo-personalization-pop-up.png)

>[!SUCCESS]
>
>You should be logged in to Journey Optimizer and on the homepage:
>
>![AJO Homepage](/help/summit/l820-lab-workbook/assets/2-1-5-ajo-homepage.png)

## Exercise 2.2 - Create a push campaign

In this exercise, you create the push campaign, design, and customize the push notification, and send the push notification to your own device.

1. In Journey Optimizer, in the left navigation, in the **[!UICONTROL JOURNEY MANAGEMENT]** section, select **Campaigns**.

1. Click **[!UICONTROL Create Campaign]**.
   
   ![Create Campaign](/help/summit/l820-lab-workbook/assets/2-3-1-1-create-campaign.png)
   
1. On the **[!UICONTROL Create Campaign]** page, in the  **[!UICONTROL Action]** section, select the **[!UICONTROL Push notification]** check box.

1. From the **[!UICONTROL App surface]** dropdown, select *[!DNL Frecopa-Push]*.

1. Click **[!UICONTROL Create]** to create a push campaign.
   
   ![App surface](/help/summit/l820-lab-workbook/assets/2-3-1-2-app-surface.png)

>[!SUCCESS]
>
>You should now be on the Campaign properties page:
> ![Campaign properties](/help/summit/l820-lab-workbook/assets/2-3-1-2-campaign-properties.png)

## Exercise 2.3 - Configure your campaign

On this page, you configure the properties, audience, actions, and schedule of your campaign.

### 2.3.1 [!UICONTROL Properties] section

Give your campaign a name. Make sure to start the name with your seat number, so you can easily find your campaign when you search for it. 

   For example, if your seat number is 99: `99 - 10% Discount Campaign`. 

   ![properties section](/help/summit/l820-lab-workbook/assets/2-3-1-4-properties-section.png)

### 2.3.2 **[!UICONTROL Audience] section**
   
1. In the audience section, click **[!UICONTROL Select audience]**.

   ![audience section](/help/summit/l820-lab-workbook/assets/2-3-2-5-audience-section.png)
   
1. On the **[!UICONTROL Select audience]** screen, search for the audience:
  
   **Lab - Seat `your seat number`**
   
1. Select the audience, then click **[!UICONTROL Save]**.

   ![audience selection](/help/summit/l820-lab-workbook/assets/2-3-2-7-select-audience.png)

### 2.3.3 Edit the content of the push notification

In this exercise, you design and customize the push notification.

1. In the **[!UICONTROL Action]** section, click the **[!UICONTROL Edit Content] button**.

   ![Edit content button](/help/summit/l820-lab-workbook/assets/2-3-action-edit-content-button.png)

1. On the next screen, depending on the mobile device you have, select either the [!DNL iOS&trade;] or [!DNL Android&trade;] tab to configure your content. 

>[!BEGINTABS] 

>[!TAB iOS]

![iOS tab](/help/summit/l820-lab-workbook/assets/2-3-ios-tab.png)

>[!TAB Android]

![Android tab](/help/summit/l820-lab-workbook/assets/2-3-android-tab.png)

>[!ENDTABS]

#### 2.3.3.1 [!UICONTROL Compose Message] section

1. **Compose your message:** Feel free to add any text you would like. Here are examples that you can use:
   
   * Title: `Get 10% off today!`
   * Body text: `Today only! Get 10% off on your House Blend coffee purchase!` 
   
      ![Compose message](/help/summit/l820-lab-workbook/assets/2-3-compose-message.png)

#### 2.3.3.2 Change the on click behavior of the message to **open a product page**

   1. In the **[!UICONTROL On click behavior]** section, select **[!UICONTROL Deeplink]** from the **[!UICONTROL Body click behavior]** dropdown.
   
   1. Copy and paste the following URL into the **URL field**:
   
      `dxdemo://exoticVibes`

      ![deep link](/help/summit/l820-lab-workbook/assets/2-3-deeplink.png)

#### 2.3.3.3 Add an image to the message

1. In the **[!UICONTROL Add media]** section, click **[!UICONTROL Add media]**.
      
   ![add media buttons](/help/summit/l820-lab-workbook/assets/2-3-3-3-add-media-buttons.png)

1. On the **[!UICONTROL Select Assets]** screen, in the left navigation, open the **Fréscopa folder** and select an image from that folder. 

   For example: `HouseBlend.png`

1. Click the image and click the **[!UICONTROL Select] button** to add the image to your push notification.

   ![select image](/help/summit/l820-lab-workbook/assets/2-3-3-3-select-image.png)

   >[!SUCCESS]
   >
   > 1. On the preview screen, click **[!UICONTROL Expand View]**.
   > 1. Preview your message.
   > <br>
   >
   > ![expand view](/help/summit/l820-lab-workbook/assets/2-3-3-expand-view.png)

### Bonus Exercise

If you completed this part of the exercise and still have some time, try the bonus exercise:

+++ Bonus exercise

#### Personalize the message that you are sending by adding the recipient's first name

1. Click **personalization dialogue** next to the **[!UICONTROL Body]** field.

   ![personalization button](/help/summit/l820-lab-workbook/assets/2-3-personalization-button.png)

1. On the **personalization dialogue** screen, place the cursor where you want to add the first name in the text.

1. Ensure that the **Profile attributes** are selected in the left navigation.

   ![Profile attribute](/help/summit/l820-lab-workbook/assets/2-3-personalize-body-profile-attributes.png)
  
1. In the **Search field**, search for: `first name`.

1. Click **+** next to the **First name (Profile attributes>Person>Full name)** to add the personalization field to your text. 
   
   ![Search for first name](/help/summit/l820-lab-workbook/assets/2-3-personalize-search-first-name.png)
   
   >[!SUCCESS]
   >
   > This is what your text should look like:
   > 
   >![Personalization token](/help/summit/l820-lab-workbook/assets/2-3-personalization-token.png)
   
1. Click **[!UICONTROL Save]** to save the personalization.
   
      
   >[!SUCCESS]
   >
   > 1. On the preview screen, click **[!UICONTROL Expand View]**.
   > 1. Preview your message.
   > 
   > ![expand view](/help/summit/l820-lab-workbook/assets/2-3-3-expand-view.png)

+++

### 2.3.4. Review and activate

If you are happy with the content of your message, you can activate the message:

1. Click **[!UICONTROL Review to activate]**.
   
   ![review and activate button](/help/summit/l820-lab-workbook/assets/2-3-4-review-and-activate-button.png)

1. On the **[!UICONTROL Review to activate]** screen, click **[!UICONTROL Activate]**.

   ![review to activate screen](/help/summit/l820-lab-workbook/assets/2-3-4-review-to-activate.png)

>[!SUCCESS]
> On the **Campaigns overview page**, find your campaign and check the status. 
>
> ![campaign status](/help/summit/l820-lab-workbook/assets/2-3-push-completed.png)
> 
> The status changes from processing to live, to completed - this might take a couple of minutes.
> Once the status has changed to completed:
>
> ![push results](/help/summit/l820-lab-workbook/assets/2-3-push-notification-result.png)
