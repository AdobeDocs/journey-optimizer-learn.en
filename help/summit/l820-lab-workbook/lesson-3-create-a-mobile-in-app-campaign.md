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

For example if your seat number is 99:  `99 - Welcome Campaign`. 

![properties section](/help/summit/l820-lab-workbook/assets/3-1-2-1-properties-section.png)


#### 3.1.2.2 Set up your custom trigger rule

1. Scroll down to the **[!UICONTROL Triggers section]** and click the **[!UICONTROL Edit triggers button]**

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-2-edit-triggers.png)
    <br>
2. In the rule builder, select the first drop down box and change **[!UICONTROL Application Launch]** to *Sent data to Platform*.
3. Add a condition by pressing the + Add condition button

   ![add condition button](/help/summit/l820-lab-workbook/assets/3-2-1-3-add-condition.png)

4. From the Select a trait drop down, select XDM event type.

   ![XDM event type](/help/summit/l820-lab-workbook/assets/4-1-2-dropdown-xdm-event.png)


5. In the following text field, add a *`<custom string value>`* that you can remember, and press **[!UICONTROL]Add** `<custom string value>` to save the value. 

   This custom string value will be used later to fire you message. 

   >[!TIP]
   > Adding your seat number to the custom string value, will make it unique and easier for you to remember.
   > 
   > For example: `99exerciseTrigger`
   > 

   ![add custom trigger string value](/help/summit/l820-lab-workbook/assets/3-1-2-2-add-custom-trigger.png)

6. Press the **[!UICONTROL Done]** button in the top right.

>[!SUCCESS]
>
>You have now defined your In-app message with a custom trigger event.
>
>![Campaign with custom trigger defined](/help/summit/l820-lab-workbook/assets/3-1-2-2-campaign-with-custom-trigger.png)


### 3.1.3 Edit the content of the in-app message

In the **[!UICONTROL Action]** section, click the **[!UICONTROL Edit Content]** button.

![Edit content button](/help/summit/l820-lab-workbook/assets/3-1-3-1-edit-content-button.png)
  
 <br>

You are now in the In-App message editor, where you configure the in-app message content.

#### 3.1.3.1 Layout

Select which layout should be applied to your message. 

For example, click the **[!UICONTROL Modal]** button to make your in-app message a modal layout.


   ![modal button](/help/summit/l820-lab-workbook/assets/3-1-3-2-modal-button.png)
   <br>

#### 3.1.3.2 Authoring your message and publishing your campaign

1. In the media section, paste in the following URL:  `https://t3.ftcdn.net/jpg/02/79/42/52/240_F_279425217_Hr9VBkknMr4fTpuZbxZXfcYdC7jSvGl2.jpg`
   <br>
   When you click out of the value field, your image should appear.
   
   ![media shown on the preview](/help/summit/l820-lab-workbook/assets/3-1-3-2-media.png)
 
2. In the following **[!UICONTROL Content]** section, add in your own custom text that you want to be displayed in your message for the **[!UICONTROL Header]** and **[!UICONTROL Body]**.

   ![Header and Body](/help/summit/l820-lab-workbook/assets/3-1-3-2-content.png)

3. Additional Options:
   1. **Buttons:** 

        ![Buttons section](/help/summit/l820-lab-workbook/assets/3-1-3-2-buttons.png)

      1. In this section of the editor, you can customize the text for your CTA button by editing the Button Text field.

      2. The **[!UICONTROL Interact event]** field is used to define the value that is passed to the SDK when the CTA is pressed by the user.

      3. The **[!UICONTROL Target]** field is used to define where you would like the CTA to take the user. This includes URLs and Deeplinks. For example, you can add this deeplink to a product page such as `dxdemo://exoticVibes`.
           
      4. You can add additional buttons by pressing **[!UICONTROL + Add button]**.

      5. When a second button is added to your message, you now have the option to change the button layout with the drop-down box.
       
   
   2. **Advanced formatting**
          
      ![advanced formatting toggle](/help/summit/l820-lab-workbook/assets/3-1-3-2-advanced-formatting-toggle.png)

      Enabling this toggle will give additional customization options in the editor.

      1. Media Size
      1. Font   
      1. Pt size
      1. Font color 
      1. Alignment

      ![advanced formatting options](/help/summit/l820-lab-workbook/assets/3-1-3-2-advanced-formatting-options.png)
   
   3. **Settings Tab**
      
      By shifting over to this tab and in the **[!UICONTROL Preview]** section, you can change the **App Preview**.
      <br>   
      ![Settings tab](/help/summit/l820-lab-workbook/assets/3-1-3-1-settings-tab.png)
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
   >![review and activate](/help/summit/l820-lab-workbook/assets/3-1-4-1-review-and-activate.png)
   >
   > Here you will be able to see a complete summary of your message. 
   >
   > *Please take note of the custom value that you used as you trigger rule. This value will be used to fire your In-app message. The value that used can be found on in the highlight area of the summary page.*

   >[!NOTE] 
   >The current trigger for the in-app message is the default **Application launch event happens**, which means that the in-app message is triggered when the app launches. You can see this in the **[!UICONTROL Schedule section]**.

5. If you are done reviewing your Campaign, press the Activate button to publish the Campaign.
   <br>
   ![activate](/help/summit/l820-lab-workbook/assets/3-1-4-2-activate.png)


>[!SUCCESS]
>
> You should now see the Campaigns dashboard. Locate your campaign by scrolling or by using the search feature. When your Campaign changes status to **[!UICONTROL Live]** (~1min), your Campaign has now been published. 
>
> ![Published campaign](/help/summit/l820-lab-workbook/assets/3-1-3-2-published-campaign.png)
>


#### 3.1.3.3 Firing your In-app Message

To refresh the payload and download your newly published Campaign:

1. On your mobile device, completely close out the Fréscopa app. 
2. Reopen the Fréscopa app.
3. Now navigate to the Exercise tab on the app.
    
   ![Exercise button](/help/summit/l820-lab-workbook/assets/3-2-3-app-exercise-button.png)

4. In the text field, type in your custom trigger value that you defined in you Campaign. Then press Submit.


    ![modify](/help/summit/l820-lab-workbook/assets/3-2-2-1-app-condition.PNG){width="250" align="center" zoomable="yes"}

>[!SUCCESS]
>
>By clicking submit, you manually fired a trigger and the in-app notification you created pops up:
>
>![In-app message](/help/summit/l820-lab-workbook/assets/3-1-3-3-in-app-message.png)
>
> *If you are having issues triggering your message, check for the following:*
> 
> * *In the Event name field on your mobile app, make sure that you type in your trigger rule value exactly how you had it in the Campaign.*
> * *Make sure capitalization is correct and that you do not have a leading or ending space.*
> * *You can look up your trigger rule value that you used if  you go back to your Campaign review page by clicking back into your campaign on the Campaign Dashboard.*

You just authored and published your first Journey Optimizer In-app message!


## Exercise 3.2 Duplicate Campaign and Preview on device

The **Duplicate campaign** and **Preview on device** features are out-of-the-box functionality that allows you to duplicate your Campaigns and test and review your In-app messages directly on your device before activating it. In this exercise you will learn how to use this feature and preview the message you created in exercise 3.1.

1. Open the campaign you just created, by clicking on the name of the campaign in the Campaigns dashboard page to open the campaign. This will take you back to the **[!UICONTROL Review campaign]** page. 
1. Press the **[!UICONTROL Duplicate button]**. This will open a new prompt to name your new campaign that is being duplicated. Add in a new name that you easily remember or used the default name where **[!DNL _copy]** is added by default.

   ![duplicate campaign](/help/summit/l820-lab-workbook/assets/3-2-duplicate-campaign.png)

1. Once you hit the duplicate button, your duplicate campaign will be created, and you will be taken back to the Campaigns Dashboard. 
1. Once your campaign is duplicated, open your new campaign.

1. You can access the Preview on device feature on the **[!UICONTROL Campaign review]** page or on the **[!UICONTROL Campaign author]** step.

   ![preview on device button](/help/summit/l820-lab-workbook/assets/3-3-1-1-preview-on-device-button.png)
   <br>

1. Next, click the **[!UICONTROL start button]** from the connect to device screen. 

   ![start button](/help/summit/l820-lab-workbook/assets/3-3-1-2-connect-to-device-start.png)
   <br>

1. Enter the base url which has been configured to launch the Fréscopa app: `dxdemo://`

   ![preview url](/help/summit/l820-lab-workbook/assets/3-3-1-3-preview-url.png)
   
   <br>

1. Follow the instructions on the screen: 
   1. Scan the QR code with your mobile device, and the Fréscopa app opens with a screen that allows you to enter a pin displayed. 
   2. Enter the pin shown in AJO on the Assurance screen on your device and click  the Connect button which appears at the bottom right once you have entered the pin. 


   ![enter pin](/help/summit/l820-lab-workbook/assets/3-3-1-5-enter-pin.PNG){width="250" align="center" zoomable="yes"}
   <br>
1. This pop-up appears on your computer screen
   
   ![pop-up](/help/summit/l820-lab-workbook/assets/3-3-pop-up.png)

1. Click the Done button. This will close the dialog box and your phone is now connected to Preview on device.

  
>[!SUCCESS]
>
> Your in-app message appears on your device. 
>
> *Once connected, your in-app message should display each time, you click the **[!UICONTROL Preview on device] button**.*
