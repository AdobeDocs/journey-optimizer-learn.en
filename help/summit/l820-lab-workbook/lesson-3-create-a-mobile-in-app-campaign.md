---
title: Lesson 3 - Create a mobile in-app campaign
description: Create and trigger a mobile in-app campaign.
feature: In App
role: User
level: Intermediate
doc-type: Article
duration: 0
recommendations: noDisplay, noCatalog
jira: KT-14983
thumbnail: KT-14983.jpeg
---

# Lesson 3 - Create a mobile in-app campaign

In this lesson, you create and trigger mobile in-app messages.

## Learning Objectives

* Understand how in-app messages are triggered.
* Know how to create a mobile in-app campaign.
* Trigger an in-app message.


## Exercise 3.1 Create a mobile in-app campaign

In this exercise, you create an in-app messaging campaign, which is triggered, when you open the app. 

### 3.1.1 Create the campaign

1. In Journey Optimizer, in the left navigation, select Campaigns.
2. Click the **[!UICONTROL Create Campaign]** button.
   ![Create Campaign](/help/summit/l820-lab-workbook/assets/2-3-1-1-create-campaign.png)
3. On the **[!UICONTROL Create Campaign]** page, in the  **[!UICONTROL Action]** section, select the **[!UICONTROL In-app message]** check box.
4. From the **[!UICONTROL Send to]** dropdown select *[!DNL Mobile]*.
5. From the **[!UICONTROL App surface]** dropdown, select *[!DNL Frecopa Mobile App]*.
6. Click the **[!UICONTROL Create]** button.
   ![App surface](/help/summit/l820-lab-workbook/assets/3-1-1-1-create.png)

>[!SUCCESS]
>
>You should now be on the Campaign properties:
> ![Campaign properties](/help/summit/l820-lab-workbook/assets/3-1-1-2-campaign-properties.png)

### 3.1.2 Configure your campaign

#### 3.1.2.1 [!UICONTROL Properties section]

Give your campaign a name. Make sure to start the name with your seat number, so you can easily find your campaign again. 

For example if your seat number is 99: `99 - Welcome Campaign`. 

![properties section](/help/summit/l820-lab-workbook/assets/3-1-2-1-properties-section.png)
   
#### 3.1.2.2 **[!UICONTROL Audience section]**
   
1. In the audience section, click the **[!UICONTROL Select audience]** button.

![audience section](/help/summit/l820-lab-workbook/assets/2-3-2-5-audience-section.png)
2. On the **[!UICONTROL Select audience]** screen, search for the audience **Lab - Seat `<your seat number>`**. 

>[!NOTE]
>It should be the Lab audience that the profile you created on [!DNL Fréscopa] is assigned to.

3. Select the audience and click [!UICONTROL Save]

![audience selection](/help/summit/l820-lab-workbook/assets/2-3-2-7-select-audience.png)

### 3.1.3 Edit the content of the in-app message

In the **[!UICONTROL Action]** section, click the **[!UICONTROL Edit Content]** button.

![Edit content button](/help/summit/l820-lab-workbook/assets/3-1-3-1-edit-content-button.png)
  
 <br>

You are now in the In-App message editor, where you configure the in-app message content.

#### 3.1.3.1 [!UICONTROL Message layout section]

Select which layout should be applied to your message. 

For example, click on the **[!UICONTROL Modal]** button to make your in-app message a modal layout.


   ![modal button](/help/summit/l820-lab-workbook/assets/3-1-3-2-modal-button.png)
   <br>

#### **3.1.3.2 [!UICONTROL Media section:]**

1. Click the **[!UICONTROL Add media] button**
   
   ![Media button](/help/summit/l820-lab-workbook/assets/3-1-add-media-button.png)

2. On the **[!UICONTROL Select Assets] screen, scroll down to the Fréscopa>Products folder and select an image.

   ![Media Section](/help/summit/l820-lab-workbook/assets/3-1-3-2-media-section.png)

<br>

3. Click the image and click the **[!UICONTROL Select] button** to add the image to your push notification. 

#### **3.1.3.3 [!UICONTROL Content section:]**

**Compose your message content** - feel free to add any header and body text you like. For example:

   * **Header:** `Welcome to Fréscopa app!`
   * **Body text:** `Explore the latest coffee offers.` 

#### 3.1.3.4 [!UICONTROL Buttons section:]

Add a button to you in-app message:

1. Change the default Button #1 text. 
   For example: `Shop now`
2. Interact event: Clicked
3. Add a product page as the **target**: dxdemo://exoticVibes

<br>

   ![Button configuration](/help/summit/l820-lab-workbook/assets/3-1-3-4-button-config.png)

You can add additional buttons if you like.

### 3.1.4 Review and activate

If you are happy with the content of your message, you can activate the message:

1. Click the **[!UICONTROL Review to activate] button**.

    ![review and activate](/help/summit/l820-lab-workbook/assets/3-1-4-1-review-and-activate.png)
    <br>

   >[!NOTE] 
   >The current trigger for the in-app message is the default **Application launch event happens**, which means that the in-app message will be triggered when the app launches. You can see this in the **[!UICONTROL Schedule section]**.

2. On the **[!UICONTROL Review to activate] screen**, click the **[!UICONTROL Activate] button**.

![activate](/help/summit/l820-lab-workbook/assets/3-1-4-2-activate.png)


>[!SUCCESS]
>
> 1. Close the app on your phone.
> 2. On the Campaigns overview page, find your campaign and check the status. The status will change from Activating to Live, to Completed:
>     
>  ![in-app status activating](/help/summit/l820-lab-workbook/assets/3-1-4-activating.png)
>     
> 3. Once the status is live: Open the app.
> 
> ![in-app status live](/help/summit/l820-lab-workbook/assets/3-1-4-live.png)
>
> The in-app notification you created will pop up:
>
> ![in-app notification](/help/summit/l820-lab-workbook/assets/3-1-success-in-app-notification.png){width="250" align="center" zoomable="yes"}
>
> Click on the button. You will be re directed to the House Blend product page:
>
> ![product page](/help/summit/l820-lab-workbook/assets/3-1-product-page.png){width="250" align="center" zoomable="yes"}


## Exercise - 3.2 Create a custom trigger

Events are usually programmed into the app and triggered through the user's interaction with the app, like in exercise 3.1, where the message is triggered when the app is opened , or when you view  a specific page, click on a button etc. In this exercise, you define your own trigger and manually execute it from the app directly to test your message. 

### 3.2.1 Create the custom trigger

1. Select the campaign you just created from the left navigation pane
2. Click the **[!UICONTROL Modify campaign button]** 

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-1-modify-campaign.png)
    <br>

3. Scroll down to the **[!UICONTROL Triggers section]** and select the **[!UICONTROL Edit triggers button]**

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-2-edit-triggers.png)
    <br>

4. In the  In-app message trigger page, clear the current trigger, by clicking on the **X**.

   ![in-app message trigger page](/help/summit/l820-lab-workbook/assets/4-1-2-in-app-message-trigger.png)

5. Click the **[!UICONTROL Add condition] button.

   ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-3-add-condition.png)
    
   <br>
6. Select the **[!UICONTROL Track action]** option from the dropdown
    
    ![track action option](/help/summit/l820-lab-workbook/assets/3-2-track-action.png)

7. Click the **Add condition** button again, and from the **Select a trait dropdown**, select the **Action** option.

   ![action optiom](/help/summit/l820-lab-workbook/assets/3-2-1-3-action-option.png)

8. Now, add your custom trigger name to the text field to the right.

   You can use any term you like, just make sure to add your seat number to the action.
   <br>

   >[!TIP]
   > Create a unique string that is easy for you to remember. This will be needed later in the exercise.
   >
   >  For example: `99track`


    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-4-add-custom-action-name.png)
    <br>

9. Click the done button on the top right.

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-5-done-editing-trigger.png)
    <br>

>[!SUCCESS]
>You should see the following information in the Triggers section of the campaign overview page:
>
>![success](/help/summit/l820-lab-workbook/assets/3-2-success.png)

### 3.2.2 Activate your campaign:

1. Click on the Review to activate button.
2. On the Review to activate page, click the Activate button to activate your campaign.
3. Wait until your campaign is live before you move to exercise 3.2.3.

### 3.2.3 Send the custom event

You now have a custom event that will trigger the in-app message whenever a call with the event name you defined (in our example"99track") is sent from the mobile app. We have implemented a feature in the lab mobile app that allows you to manually trigger your event.

To send this custom event from the mobile app, simply do the following:

1. Open the Fréscopa mobile app
2. In the navigation at the bottom of the screen, click on the Exercise logo.

![Exercise button](/help/summit/l820-lab-workbook/assets/3-2-3-app-exercise-button.png)

1. Enter your chosen custom trigger name  in the Event Name field.
2. Click the Submit button


    ![modify](/help/summit/l820-lab-workbook/assets/3-2-2-1-app-condition.PNG){width="250" align="center" zoomable="yes"}
    <br>

>[SUCCESS]
>
>By clicking submit, you manually fired a trigger and the in-app notification you created will pop up:

## Exercise 3.3 Preview on device

The preview on device feature is an out of the box functionality that allows you to test and review your in-app messages directly on your device before activating it. In this exercise you will learn how to use this feature and preview the message you created in exercise 3.1.

1. Open the campaign you just created, by clicking on the name of the campaign in the Campaigns overview page to open the campaign. 
2. In the content section, click on the **[!UICONTROL Preview on device button]** below phone.

   ![preview on device button](/help/summit/l820-lab-workbook/assets/3-3-1-1-preview-on-device-button.png)
   <br>

3. Next, click the **[!UICONTROL start button]** from the connect to device screen. 

   ![start button](/help/summit/l820-lab-workbook/assets/3-3-1-2-connect-to-device-start.png)
   <br>

4. Enter the base url which has been configured to launch the Fréscopa app: `dxdemo://`

   ![preview url](/help/summit/l820-lab-workbook/assets/3-3-1-3-preview-url.png)
   
   <br>

5. Follow the instructions on the screen: 
6. Scan the QR code with your mobile device, and the Fréscopa app will open with a pin screen displayed. 
7. Enter the pin shown in AJO on the Assurance screen on your device and click  the Connect button which appears at the bottom right once you have entered the pin. 


   ![enter pin](/help/summit/l820-lab-workbook/assets/3-3-1-5-enter-pin.PNG){width="250" align="center" zoomable="yes"}

>[!SUCCESS]
> 
> 1. This pop up will appear on your computer screen
>  
>     ![pop-up](/help/summit/l820-lab-workbook/assets/3-3-pop-up.png)
>  
> 2. You should see the adobe logo with a green bubble on your app screen: 
>     ![logo with bubble](/help/summit/l820-lab-workbook/assets/3-3-logo-assurance.png)
>     
> 3. Click **Done** on the pop up on your computer.
>
> Your in-app message will appear on your device. 
> Once connected, your in-app message should display each time you click the Preview on device button.
