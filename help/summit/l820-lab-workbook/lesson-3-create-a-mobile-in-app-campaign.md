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

Create and trigger a mobile in-app campaign.

## Learning Objectives

* Understand how in-app messages are triggered
* Know how to create a mobile in-app campaign
* Trigger an in-app message

## Exercises

>[!BEGINTABS]

>[!TAB 3.1 - Create a mobile in-app campaign]

### Excercise 3.1 - Create a mobile in-app campaign

In this exercise, you will create an in-app messaging campaign, design and customize the in-app message, and send the in-app message to your own device.

#### 3.1.1 - Create the campaign

1. In Journey Optimizer, in the left navigation, select Campaigns.
2. Click on the **[!UICONTROL Create Campaign]** button
   ![Create Campaign](/help/summit/l820-lab-workbook/assets/2-3-1-1-create-campaign.png)
3. On the **[!UICONTROL Create Campaign]** page, in the  **[!UICONTROL Action]** section, select the **[!UICONTROL In-app message]** check box
4. From the **[!UICONTROL Send to]** dropdown select *[!DNL Mobile]*
5. From the **[!UICONTROL App surface]** dropdown select *[!DNL Frecopa Mobile App]*
6. Click the **[!UICONTROL Create]** button
   ![App surface](/help/summit/l820-lab-workbook/assets/3-1-1-1-create.png)

>[!SUCCESS]
>
>You should now be on the Campaign properties:
> ![Campaign properties](/help/summit/l820-lab-workbook/assets/3-1-1-2-campaign-properties.png)

#### 3.1.2 - Configure your campaign

##### 1. [!UICONTROL Properties section]

![properties section](/help/summit/l820-lab-workbook/assets/3-1-2-1-properties-section.png)

1. Give your campaign a name. Make sure to start the name with your seat number, so you can easily find your campaign again. For example if your seat number is 99: `99 - Welcome Campaign`. 
2. If you like, you can add a description but it is not required for this exercise.
   

##### 2. **[!UICONTROL Audience section]**

![audience section](/help/summit/l820-lab-workbook/assets/2-3-2-5-audience-section.png)
   
1. In the audience section, click on the **[!UICONTROL Select audience]** button.
2. On the **[!UICONTROL Select audience]** screen, search for the audience **Lab - Seat `your seat number`**. It should be the Lab audience that the profile you created on [!DNL Frescopa] is assigned to.
3. Select the audience and click [!UICONTROL Save]

![audience selection](/help/summit/l820-lab-workbook/assets/2-3-2-7-select-audience.png)

#### 3.1.3 - Edit the content of the in-app message

In the **[!UICONTROL Action]** section, click the **[!UICONTROL Edit Content]** button.

   ![Edit content button](/help/summit/l820-lab-workbook/assets/3-1-3-1-edit-content-button.png)
   <br>

You are now in the In-App message editor. We will now configure the in-app message content.

##### **[!UICONTROL Message layout section]**

First, click on the **[!UICONTROL Modal]** button to make your in-app message a modal layout.

   ![modal button](/help/summit/l820-lab-workbook/assets/3-1-3-2-modal-button.png)
   <br>

##### **[!UICONTROL Media section:]**

1. Click on the **[!UICONTROL Add media] button**
2. On the **[!UICONTROL Select Assets] screen, scroll down to the Frescopa>Products folder and select an image.
3. Click on the image and click the **[!UICONTROL Select] button** to add the image to your push notification. 

##### **[!UICONTROL Content section:]**

**Compose your message content** - feel free to add any header and body text you like, we will give you examples that you can use:

   <br>
      * Header: `Welcome to Frescopa app!`
      * Body text: `` 
   <br>

##### **[!UICONTROL Buttons section:]**

**Compose your buttons** - You can now add buttons, and configure them how you like, we will simply edit the existing button's text for now.

Change the default Button #1 text to **Get started**

#### 3.1.4 - Review and activate

If you are happy with the content of your message, you can activate the message:

1. Click on the **[!UICONTROL Review to activate] button**.

    ![review and activate](/help/summit/l820-lab-workbook/assets/3-1-4-1-review-and-activate.png)
    <br>

2. Note that the current trigger for the in-app message is the default **Application launch event happens**, which means that the in-app message will be triggered when the app launches. You can see this in the **[!UICONTROL Schedule section]**.
3. On the **[!UICONTROL Review to activate] screen**, click the **[!UICONTROL Activate] button**.

![activate](/help/summit/l820-lab-workbook/assets/3-1-4-2-activate.png)

>[!TAB 3.2 - Create a custom trigger for your in-app message]

### 3.2 - Create a custom trigger

In this exercise, you will create a custom trigger for your in-app message, and send it from your mobile app.

#### 3.2.1 - Create the custom trigger

1. Select the campaign you just created from the left navigation pane
2. Click the **[!UICONTROL Modify campaign button]** 

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-1-modify-campaign.png)
    <br>

3. Scroll down to the **[!UICONTROL Triggers section]** and select the **[!UICONTROL Edit triggers button]**

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-2-edit-triggers.png)
    <br>

4. Clear the current trigger, and click the **[!UICONTROL Add condition button]**
5. Select the **[!UICONTROL Track action]** option from the dropdown
    
    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-3-add-condition.png)
    <br>

6. Click the add condition button again, and select the **[!UICONTROL Action]** option from the drop down
7. Now, add your custom trigger name to the text field to the right. We will use "99track" as an example. 

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-4-add-custom-action-name.png)
    <br>

8. Click the done button on the top right.

    ![modify](/help/summit/l820-lab-workbook/assets/3-2-1-5-done-editing-trigger.png)
    <br>

#### 3.2.2 - Send the custom event

You now have a custom trigger that will trigger the in-app message whenever a track call with the "99track" option is sent from the mobile app.

To send this custom event from the mobile app, simply do the following:

1. Open the Frescopa mobile app
2. Navigate to the **[!UICONTROL Exercise tab]** on the bottom.
3. Enter **99track** (or whatever you chose as your custom event name) in the text field and hit the **[!UICONTROL Submit button]**.


    ![modify](/help/summit/l820-lab-workbook/assets/3-2-2-1-app-condition.png)
    <br>

>[!TAB 3.3 - Preview on device

### 3.3 - Preview on device

You can use the preview on device feature to preview your in-app messages on your device, without having to go through the set trigger process.

1. In the **[!UICONTROL Action]** section, click the **[!UICONTROL Edit Content]** button.

   ![Edit content button](/help/summit/l820-lab-workbook/assets/3-1-3-1-edit-content-button.png)
   <br>

2. Now, click on the **[!UICONTROL Preview on device button]** below the device

   ![preview on device button](/help/summit/l820-lab-workbook/assets/3-3-1-1-preview-on-device-button.png)
   <br>

3. Next, click on the **[!UICONTROL start button]** from the connect to device screen. 

   ![start button](/help/summit/l820-lab-workbook/assets/3-3-1-2-connect-to-device-start.png)
   <br>

4. Now, you will enter the base url which has been configured to launch the Frescopa app. In this case it will be `dxdemo://`

   ![preview url](/help/summit/l820-lab-workbook/assets/3-3-1-3-preview-url.png)
   <br>

5. Now, scan the QR code with your mobile device, and the Frescopa app will open with a pin screen displayed. Enter the pin shown

   ![preview qr code](/help/summit/l820-lab-workbook/assets/3-3-1-4-preview-qr-code.png)

   ![enter pin](/help/summit/l820-lab-workbook/assets/3-3-1-5-enter-pin.png)

Once connected, your in-app message should display each time you click the **[!UICONTROL Preview on device button]**.

>[!ENDTABS]
