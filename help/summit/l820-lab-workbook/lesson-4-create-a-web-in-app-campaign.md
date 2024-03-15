---
title: Lesson 4 - Create a web in-app campaign
description: Create and trigger a web in-app campaign.
feature: In App
role: User
level: Intermediate
doc-type: Article
duration: 0
recommendations: noDisplay, noCatalog
jira: KT-14984
thumbnail: KT-14984.jpeg
---

# Lesson 4 - Create a Web In-app Campaign

Now that you have created mobile experiences for the app, in this exercise, you will create one of the experiences you have seen on the Fréscopa website.

## Learning Objectives

* Know how to create a Web In-app campaign.
* Trigger an in-app message.

## Exercise 4.1 - Create a Web In-app Campaign

In this exercise, you create a web in-app campaign. You design and customize a your message and define a trigger that will fire the message.

### 4.1.1 Create the Campaign

In this exercise you create the campaign and define which web page the in-app message will appear on.

1. In Journey Optimizer, in the left navigation, under **JOURNEY MANAGEMENT** select **Campaigns**.

2. Click on the **Create Campaign** button.

    ![CreateCampaign](/help/summit/l820-lab-workbook/assets/4-1-create-campaign.png)

3. On the **Create Campaign** page, in the **Action** section, select the **In-app message** check box.
4. From the **Send to** dropdown select **Web.**

5. Enter the following URL: **https://dsn.adobe.com/web/adobe-summit-2024/exercise** - *This is the web page your message will appear on.*

    ![In-app URL](/help/summit/l820-lab-workbook/assets/4-1-1-in-app-url.png)


6. Click the **[!UICONTROL Create]** button.

### 4.1.2 Configure your Campaign

On this page, you define the properties of the campaign and the event that triggers the in-app message to appear in the web page. Leave all other settings on the default. For this exercise you do not need to define a specific audience.

#### 4.1.2.1 Properties section 

1. In the **Properties** section, give your campaign a unique **Name**:

    >[!NOTE]
    > Make sure to start the name with your seat number, so you can easily
    > find your campaign later.
    > 
    > For example, if your seat number is 99: 
    >
    > ![Properties Name](/help/summit/l820-lab-workbook/assets/4-1-2-properties-name.png)


#### 4.1.2.2 Set up your custom trigger rule

In this section you define what triggers for the message to appear on the website. You define a unique trigger that allows you to send the message just to yourself. 

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
   > For example: `99web`
   > 

   ![add custom trigger string value](/help/summit/l820-lab-workbook/assets/4-1-2-add-custom-trigger-dropdown.png)

6. Press the **[!UICONTROL Done]** button in the top right.

>[!SUCCESS]
>
>You have now defined your web in-app message with a custom trigger event.
>
>![Web campaign with custom trigger defined](/help/summit/l820-lab-workbook/assets/4-1-2-2-web-campaign-with-custom-trigger.png)


### 4.1.3 Edit the Content of the In-app Message

 In this section you define the content, design, and layout of your message. 

1. Click the **Edit content** button in the **Action** section to access the authoring construct.
    
   ![Edit content button](/help/summit/l820-lab-workbook/assets/4-1-3-edit-content-button.png)

2. The authoring process is the same process that you completed in the above Mobile In-app exercises. Take time to freely edit your message with your own title, body, and media content.
    
    If you use the modal or full screen layout, you can add a button. You can use this URL to open the product page: **`dxdemo://exoticVibes`** 
    
3. When you are done editing your message, click **Review to activate**.

4. If everything looks good on the review screen, click **Activate** to publish your Web In-app message.

5. This will take you back to the Campaign Dashboard. 
    Wait unit your campaign status changes to **Live** before moving to 4.1.4.

### 4.1.4 Trigger the Web In-app Message

1. Go to the Fréscopa website and navigate to the **Exercise** page on your browser.

    ![Web exercises link](/help/summit/l820-lab-workbook/assets/4-2-frescopa-web-exercise-link.png)

2. Make sure to refresh the web page.

3. Now type in your unique string value that you defined in your campaign.4-2

    ![exercise page](/help/summit/l820-lab-workbook/assets/4-2-exercise-page.png)

4. Finally, click **Send**.

>[!SUCCESS]
>
>Pressing the Send button with your unique value will trigger your Web In-app message to fire. And you should see your web in-app message appear on your screen.
>
>This exercise simulated a custom XDM send event that you saw through your Fréscopa customer experience.

## Thank You!

Thank you for your participation. Please give us feedback, on how we did
and if the lab met your expectations, by complete the Lab 820 Session survey in
the Summit App.
