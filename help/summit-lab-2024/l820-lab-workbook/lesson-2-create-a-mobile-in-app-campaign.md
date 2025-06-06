---
title: Lesson 2 - Create a mobile in-app campaign
description: Create and trigger a mobile in-app campaign.
feature: In App
role: User
level: Intermediate
doc-type: Article
duration: 0
recommendations: noDisplay, noCatalog
jira: KT-14983
thumbnail: KT-14983.jpeg
exl-id: fe18eca7-229c-4867-ab34-1862bad63124
---
# Lesson 2 - Create a mobile in-app campaign

In this lesson, you create and trigger mobile in-app messages.

## Learning Objectives

* Understand how in-app messages are triggered.
* Know how to create a mobile in-app campaign.
* Trigger an in-app message.

## Exercise 2.1 - Log in to Journey Optimizer
 
1. Open [Adobe Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:summit-ajo-lab/journey-optimizer/home){target="_blank"} 
2. Login using the following details:
    <br>
    **Username:** L820+**`<your seat number>`**@adobeeventlab.com
    **Password:**   Adobe2024! 
   <br>
   You can find the details for your login on your lab machine desktop. Use the Adobe ID and the Password.
   ![desktop](/help/summit-lab-2024/l820-lab-workbook/assets/desk-top.png)

    ![Login screen](/help/summit-lab-2024/l820-lab-workbook/assets/2-1-1-ajo-sign-in.png)
   <br>
3. You can skip the next two screens:
   <br>
    ![Phone number](/help/summit-lab-2024/l820-lab-workbook/assets/2-1-3-ajo-add-phone.png)
   <br>
     ![Personalization pop up](/help/summit-lab-2024/l820-lab-workbook/assets/2-1-4-ajo-personalization-pop-up.png)


>[!SUCCESS]
>
>You should be logged in to Journey Optimizer and on the homepage:
>
>![AJO Homepage](/help/summit-lab-2024/l820-lab-workbook/assets/2-1-5-ajo-homepage.png)


## Exercise 2.2 Create a mobile in-app campaign

In this exercise, you create an in-app messaging campaign, which is triggered, when you open the app. 

1. In Journey Optimizer, in the left navigation, select **[!UICONTROL Campaigns]**.

1. Click **[!UICONTROL Create Campaign]**.

   ![Create Campaign](/help/summit-lab-2024/l820-lab-workbook/assets/2-3-1-1-create-campaign.png)

1. On the **[!UICONTROL Create Campaign]** page, in the  **[!UICONTROL Action]** section, select the **[!UICONTROL In-app message]** check box.

1. From the **[!UICONTROL Send to]** dropdown, select **[!DNL Mobile]**.

1. From the **[!UICONTROL App surface]** dropdown, select **[!DNL Frecopa Mobile App]**.

1. Click **[!UICONTROL Create]**.

   ![App surface](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-1-1-create.png)

>[!SUCCESS]
>
>You should now be on the Campaign properties:
>
> ![Campaign properties](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-1-2-campaign-properties.png)

## Exercise 2.3 Configure your campaign

### 2.3.1 [!UICONTROL Properties section]

Give your campaign a name. Make sure to start the name with your seat number, so you can easily find your campaign again. 

For example if your seat number is 99:  `99 - Welcome Campaign`. 

![properties section](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-2-1-properties-section.png)

### 2.3.2 Set up your custom trigger rule

1. Scroll down to the **[!UICONTROL Triggers section]**, then click **[!UICONTROL Edit triggers]**.

   ![modify](/help/summit-lab-2024/l820-lab-workbook/assets/3-2-1-2-edit-triggers.png)
   
1. In the rule builder, click on **[!UICONTROL Application Launch]** and from the dropdown select  *Sent data to Platform*.
   ![Sent to data platform](/help/summit-lab-2024/l820-lab-workbook/assets/trigger-drop-down-sent-to-platform.png)

1. Add a condition by clicking **[!UICONTROL Add condition]**.

   ![add condition button](/help/summit-lab-2024/l820-lab-workbook/assets/3-2-1-3-add-condition.png)

1. From the **[!UICONTROL Select a trait]** drop down, select **[!UICONTROL XDM event type]**.

   ![XDM event type](/help/summit-lab-2024/l820-lab-workbook/assets/4-1-2-dropdown-xdm-event.png)

1. In the following text field, add a *`<custom string value>`* that you can remember.

1. To save the value, click **[!UICONTROL Add**] `<custom string value>`. 

   This custom string value is used later to fire you message. 

   >[!TIP]
   > Adding your seat number to the custom string value makes it unique and easier for you to remember.
   > 
   > For example: `99exerciseTrigger`

   ![add custom trigger string value](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-2-2-add-custom-trigger.png)

1. Click **[!UICONTROL Done]** in the top right.

>[!SUCCESS]
>
>You have now defined your In-app message with a custom trigger event.
>
>![Campaign with custom trigger defined](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-2-2-campaign-with-custom-trigger.png)


### 2.3.3 Edit the content of the in-app message

In the **[!UICONTROL Action]** section, click **[!UICONTROL Edit Content]**.

![Edit content button](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-1-edit-content-button.png)

The [!UICONTROL In-App message] editor displays, where you configure the in-app message content.

#### 2.3.3.1 Layout

Select which layout should be applied to your message. 

For example, click **[!UICONTROL Modal]** to make your in-app message a modal layout.

![modal button](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-2-modal-button.png)

#### 2.3.3.2 Authoring your message and publishing your campaign

1. In the media section, paste in the following URL:  `https://t3.ftcdn.net/jpg/02/79/42/52/240_F_279425217_Hr9VBkknMr4fTpuZbxZXfcYdC7jSvGl2.jpg`
   <br>
   When you click out of the value field, your image should appear.
   
   ![media shown on the preview](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-2-media.png)
 
2. In the following **[!UICONTROL Content]** section, add in your own custom text that you want to be displayed in your message for the **[!UICONTROL Header]** and **[!UICONTROL Body]**.

   ![Header and Body](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-2-content.png)

3. Additional Options:
   1. **Buttons:** 

        ![Buttons section](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-2-buttons.png)

      1. In this section of the editor, you can customize the text for your CTA button by editing the Button Text field.

      2. The **[!UICONTROL Interact event]** field is used to define the value that is passed to the SDK when the CTA is pressed by the user.

      3. The **[!UICONTROL Target]** field is used to define where you would like the CTA to take the user. This includes URLs and Deeplinks. For example, you can add this deeplink to a product page such as `dxdemo://exoticVibes`.
           
      4. You can add additional buttons by pressing **[!UICONTROL + Add button]**.

      5. When a second button is added to your message, you now have the option to change the button layout with the drop-down box.
       
   
   2. **Advanced formatting**
          
      ![advanced formatting toggle](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-2-advanced-formatting-toggle.png)

      Enabling this toggle will give additional customization options in the editor.

      1. Media Size
      1. Font   
      1. Pt size
      1. Font color 
      1. Alignment

      ![advanced formatting options](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-2-advanced-formatting-options.png)
   
   3. **Settings Tab**
      
      By shifting over to this tab and in the **[!UICONTROL Preview]** section, you can change the **App Preview**.
      <br>   
      ![Settings tab](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-1-settings-tab.png)
       <br>

      1. The **[!UICONTROL Layout]** section gives you option to use an image as the background or a solid color.

      2. The **[!UICONTROL Message]** section provides custom interactions that can be enabled for your message:
         1. Custom Gestures
         2. UI Takeover
         3. Custom UI takeover
         4. Custom size
         5. Custom position
         6. Custom animation
         7. Message round corner
   <br>
4. When you are done authoring your content and are satisfied with you message click the **[!UICONTROL Review to activate] button**.

   >[!SUCCESS]
   >
   > You have now completed authoring your mobile In-app message. You should now be on the Campaign **[!UICONTROL Review to activate]** page.
   >
   >![review and activate](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-4-1-review-and-activate.png)
   >
   > Here you will be able to see a complete summary of your message. 
   >
   > *Please take note of the custom value that you used as you trigger rule. This value will be used to fire your In-app message. The value that used can be found on in the highlight area of the summary page.*

   >[!NOTE] 
   >The current trigger for the in-app message is the default **Application launch event happens**, which means that the in-app message is triggered when the app launches. You can see this in the **[!UICONTROL Schedule section]**.

5. If you are done reviewing your Campaign, press the Activate button to publish the Campaign.
   <br>
   ![activate](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-4-2-activate.png)


>[!SUCCESS]
>
> You should now see the Campaigns dashboard. Locate your campaign by scrolling or by using the search feature. When your Campaign changes status to **[!UICONTROL Live]** (~1min), your Campaign has now been published. 
>
> ![Published campaign](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-2-published-campaign.png)
>


## Exercise 2.4 Trigger the mobile in-app message

To refresh the payload and download your newly published Campaign:

1. On your mobile device, completely close out the Fréscopa app. 
2. Reopen the Fréscopa app.
3. Now navigate to the Exercise tab on the app.
    
   ![Exercise button](/help/summit-lab-2024/l820-lab-workbook/assets/3-2-3-app-exercise-button.png)

4. In the text field, type in your custom trigger value that you defined in you Campaign. Then press Submit.


    ![modify](/help/summit-lab-2024/l820-lab-workbook/assets/3-2-2-1-app-condition.PNG){width="250" align="center" zoomable="yes"}

>[!SUCCESS]
>
>By clicking submit, you manually fired a trigger and the in-app notification you created pops up:
>
>![In-app message](/help/summit-lab-2024/l820-lab-workbook/assets/3-1-3-3-in-app-message.png)
>
> *If you are having issues triggering your message, check for the following:*
> 
> * *In the Event name field on your mobile app, make sure that you type in your trigger rule value exactly how you had it in the Campaign.*
> * *Make sure capitalization is correct and that you do not have a leading or ending space.*
> * *You can look up your trigger rule value that you used if  you go back to your Campaign review page by clicking back into your campaign on the Campaign Dashboard.*

You just authored and published your first Journey Optimizer In-app message!


## Bonus Exercise: Duplicate Campaign and Preview on device

The **Duplicate campaign** and **Preview on device** features are out-of-the-box functionality that allows you to duplicate your Campaigns and test and review your In-app messages directly on your device before activating it. In this exercise you will learn how to use this feature and preview the message you created in exercise 3.1.

1. Open the campaign you just created, by clicking on the name of the campaign in the Campaigns dashboard page to open the campaign. This will take you back to the **[!UICONTROL Review campaign]** page. 
1. Press the **[!UICONTROL Duplicate button]**. This will open a new prompt to name your new campaign that is being duplicated. Add in a new name that you easily remember or used the default name where **[!DNL _copy]** is added by default.

   ![duplicate campaign](/help/summit-lab-2024/l820-lab-workbook/assets/3-2-duplicate-campaign.png)

1. Once you hit the duplicate button, your duplicate campaign will be created, and you will be taken back to the Campaigns Dashboard. 
1. Once your campaign is duplicated, open your new campaign.

1. You can access the Preview on device feature on the **[!UICONTROL Campaign review]** page or on the **[!UICONTROL Campaign author]** step.

   ![preview on device button](/help/summit-lab-2024/l820-lab-workbook/assets/3-3-1-1-preview-on-device-button.png)
   <br>

1. Next, click the **[!UICONTROL start button]** from the connect to device screen. 

   ![start button](/help/summit-lab-2024/l820-lab-workbook/assets/3-3-1-2-connect-to-device-start.png)
   <br>

1. Enter the base url which has been configured to launch the Fréscopa app: `dxdemo://`

   ![preview url](/help/summit-lab-2024/l820-lab-workbook/assets/3-3-1-3-preview-url.png)
   
   <br>

1. Follow the instructions on the screen: 
   1. Scan the QR code with your mobile device, and the Fréscopa app opens with a screen that allows you to enter a pin displayed. 
   2. Enter the pin shown in AJO on the Assurance screen on your device and click  the Connect button which appears at the bottom right once you have entered the pin. 


   ![enter pin](/help/summit-lab-2024/l820-lab-workbook/assets/3-3-1-5-enter-pin.PNG){width="250" align="center" zoomable="yes"}
   <br>
1. This pop-up appears on your computer screen
   
   ![pop-up](/help/summit-lab-2024/l820-lab-workbook/assets/3-3-pop-up.png)

1. Click the Done button. This will close the dialog box and your phone is now connected to Preview on device.

  
>[!SUCCESS]
>
> Your in-app message appears on your device. 
>
> *Once connected, your in-app message should display each time, you click the **[!UICONTROL Preview on device] button**.

## Additional resources

**How to videos:**

* [Create an in-app campaign](/help/channels/create-an-in-app-campaign.md)
* [Author an in-app message](/help/channels/author-in-app-messages.md)

**Product documentation:**

* [Get started with In-app channel](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/get-started-in-app)
* [Create an Mobile In-app message](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/create-in-app)
* [Design your In-app content](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/design-in-app)
* [Check and send your In-app notification](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/send-in-app)
