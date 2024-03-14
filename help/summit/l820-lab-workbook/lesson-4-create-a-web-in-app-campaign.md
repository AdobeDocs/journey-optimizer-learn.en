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

#### 4.1.2.2 Define the Trigger 

In this section you define what triggers for the message to appear on the website. You define a unique trigger that allows you to send the message just to yourself. 

1. In the **Triggers section**, click **Edit triggers**.
2. On the **In-app message trigger page,** clear the current trigger, by clicking on the **X**.

    ![In-app message trigger](/help/summit/l820-lab-workbook/assets/4-1-2-in-app-message-trigger.png)

3. Click the **Add condition button**.

    ![add condition button](/help/summit/l820-lab-workbook/assets/4-1-2-add-condition.png)

4. From the **Select an event drop down,** select the **Sent data to platform** option:

    ![event drop down- sent data to platform](/help/summit/l820-lab-workbook/assets/4-1-2-event-drop-down.png)

5. Click the **add condition button** again.

6. From the **Select trait dropdown,** select the **XDM event type**.

   ![dropdown XDM Event](/help/summit/l820-lab-workbook/assets/4-1-2-dropdown-xdm-event.png) 

7. Add your **custom trigger name** to the **text field** to the right.You can use any term you like, just make sure to add your **seat number** to the action. That way you can ensure that it is unique.
    
    For example, **99web**.
    
    >[!TIP]
    >Create a unique string that is easy for you to remember. This will be needed later in the exercise.

8. Click on the dropdown arrow of the field and select **Add "your custom trigger name"** to save your value.
    
    ![Add custom trigger](/help/summit/l820-lab-workbook/assets/4-1-2-add-custom-trigger-dropdown.png)

    Make sure your event appears under the dropdown:

     ![Show message if - cofigured](/help/summit/l820-lab-workbook/assets/4-1-2-show-message-if-configured.png)

9. Click **Done** on the top right. This will close the **Rules Builder**.

### 4.1.3 Edit the Content of the In-app Message

 In this section you define the content, design, and layout of your message. 

1. Click the **Edit content** button in the **Action** section to access the authoring construct.
    
   ![Edit content button](/help/summit/l820-lab-workbook/assets/4-1-3-edit-content-button.png)

2. The authoring process is the same process that you completed in the above Mobile In-app exercises. Take time to freely edit your message with your own title, body, and media content.
   
3. When you are done editing your message, click **Review to activate**.

4. If everything looks good on the review screen, click **Activate** to publish your Web In-app message.

5. This will take you back to the Campaign Dashboard. 
    Wait unit your campaign status changes to **Live** before moving to 4.1.4.

### 4.1.4 Trigger the Web In-app Message

1. Go to the Fréscopa website and navigate to the **Exercise** page on your browser or through this link [Exercise page](https://dsn.adobe.com/web/adobe-summit-2024/exercise).

    ![Web exercises link](/help/summit/l820-lab-workbook/assets/4-2-frescopa-web-exercise-link.png)

2. Make sure to refresh the web page.

3. Now type in your unique string value that you defined in your campaign.4-2

    ![exercise page](/help/summit/l820-lab-workbook/assets/4-2-exercise-page.png)

4. Finally, click **Send**.

>[!SUCCESS]
>
>Pressing the Send button with your unique value will trigger your Web In-app message to fire. And you should see your web in-app message appear on your screen.
>
>This exercise has simulated a custom XDM send event that you saw through your Fréscopa customer experience.

## Thank You!

Thank you for your participation. Please give us feedback, on how we did
and if the lab met your expectations, by complete the Session survey on
the Summit App.
