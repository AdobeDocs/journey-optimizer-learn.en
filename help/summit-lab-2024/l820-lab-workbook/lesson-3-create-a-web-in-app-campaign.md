---
title: Lesson 3 - Create a web in-app campaign
description: Create and trigger a web in-app campaign.
feature: In App
role: User
level: Intermediate
doc-type: Article
duration: 0
recommendations: noDisplay, noCatalog
jira: KT-13983
thumbnail: KT-13983.jpeg
exl-id: 0f84adfb-edb1-47fa-b696-58eec2b33bb1
---
# Lesson 3 - Create a Web In-app Campaign

Now that you have created mobile experiences for the app, in this lesson, you create one of the experiences you have seen on the Fréscopa website. You create a web in-app campaign. You design and customize a your message and define a trigger that fires the message.

## Learning objectives

* Know how to create a Web In-app campaign.
* Trigger an in-app message.

## Exercise 3.1 Create a web in-app campaign

In this exercise you create the campaign and define which web page the in-app message appeara on.

1. In Journey Optimizer, in the left navigation, under **JOURNEY MANAGEMENT** select **Campaigns**.

1. Click **Create Campaign**.

    ![CreateCampaign](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-1-create-campaign.png)

1. On the **Create Campaign** page, in the **Action** section, select the **In-app message** check box.

1. From the **Send to** dropdown, select **Web.**

1. Enter the following URL: **https://dsn.adobe.com/web/adobe-summit-2024/exercise** - *This is the web page your message will appear on.*

    ![In-app URL](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-1-1-in-app-url.png)

1. Click **[!UICONTROL Create]**.

## Exercise 3.2 Configure your Campaign

On this page, you define the properties of the campaign and the event that triggers the in-app message to appear in the web page. Leave all other settings on the default. For this exercise you do not need to define a specific audience.

### 3.2.1 [!UICONTROL Properties section]

1. In the **Properties** section, give your campaign a unique **Name**:

    >[!NOTE]
    > Make sure to start the name with your seat number, so you can easily
    > find your campaign later.
    > 
    > For example, if your seat number is 99: 
    >
    > ![Properties Name](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-1-2-properties-name.png)


### 3.2.2 Set up your custom trigger rule

In this section you define what triggers for the message to appear on the website. You define a unique trigger that allows you to send the message just to yourself. 

1. Scroll down to the **[!UICONTROL Triggers section]**, then click **[!UICONTROL Edit triggers]**.

    ![modify](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/3-2-1-2-edit-triggers.png)

1. In the rule builder, click on **[!UICONTROL Application Launch]** and from the dropdown select  *Sent data to Platform*.
    ![trigger event drop-down](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/trigger-drop-down-sent-to-platform.png)

1. Add a condition by clicking **[!UICONTROL + Add condition]**.

   ![add condition button](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/3-2-1-3-add-condition.png)

1. From the **[!UICONTROL Select a trait]** drop down, select **[!UICONTROL XDM event type]**.

   ![XDM event type](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-1-2-dropdown-xdm-event.png)


1. In the following text field, add a *`<custom string value>`* that you can remember, and press **[!UICONTROL Add]** `<custom string value>` to save the value. 

   This custom string value is used later to fire you message. 

   >[!TIP]
   > Adding your seat number to the custom string value, will make it unique and easier for you to remember.
   > 
   > For example: `99web`
   > 

   ![add custom trigger string value](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-1-2-add-custom-trigger-dropdown.png)

1. Press the **[!UICONTROL Done]** button in the top right.

>[!SUCCESS]
>
>You have now defined your web in-app message with a custom trigger event.
>
>![Web campaign with custom trigger defined](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-1-2-2-web-campaign-with-custom-trigger.png)


### 3.2.3 Edit the content of the in-app message

 In this section you define the content, design, and layout of your message. 

1. Click the **Edit content** button in the **Action** section to access the authoring construct.
    
    ![Edit content button](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/3-1-3-1-edit-content-button.png)

1. The authoring process is the same process that you completed in the above Mobile In-app exercises. Take time to freely edit your message with your own title, body, and media content.
    
    If you use the modal or full screen layout, you can add a button. You can use this URL to open the product page: **https://dsn.adobe.com/web/adobe-summit-2024/P2WsaDPf_** 
    
1. When you are done editing your message, click **[!UICONTROL Review to activate]**.

1. If everything looks good on the review screen, click **[!UICONTROL Activate]** to publish your Web In-app message.

1. You are returned to the Campaign Dashboard.

   Wait unit your campaign status changes to **Live** before moving to 4.1.4.

## Exercise 3.3 Trigger the web in-app message

1. Go to the Fréscopa website and navigate to the **Exercise** page on your browser.

    ![Web exercises link](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-2-frescopa-web-exercise-link.png)

1. Make sure to refresh the web page.

1. Type your unique string value that you defined in your campaign.

    ![exercise page](/help/summit-labs/summit-lab-2024/l820-lab-workbook/assets/4-2-exercise-page.png)

1. Click **[!UICONTROL Send]**.

>[!SUCCESS]
>
>Clicking the Send button with your unique value will trigger your Web In-app message to fire. And you should see your web in-app message appear on your screen.
>
>This exercise simulated a custom XDM send event that you saw through your Fréscopa customer experience.


## Additional resources

**How to videos:**

* [Create an in-app campaign](/help/channels/create-an-in-app-campaign.md)
* [Author an in-app message](/help/channels/author-in-app-messages.md)

**Product documentation:**

* [Get started with In-app channel](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/get-started-in-app)
* [Create a Web In-app message](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/create-in-app-web)
* [Design your In-app content](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/design-in-app)
* [Check and send your In-app notification](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/in-app/send-in-app)
