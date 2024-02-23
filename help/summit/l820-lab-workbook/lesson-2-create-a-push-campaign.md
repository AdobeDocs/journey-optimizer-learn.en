---
title: Lesson 2 - Create a push campaign
description: Review profile data and learn how to create and send audiences a push notifications in Journey Optimizer.
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

In this lesson, you will review the profile and the related profile attributes that were created when you registered on the Frescopa website and completed the survey. You will then learn how to create a push campaign and send a message.

## Learning Objectives

* Understand profiles and profile attributes
* Know how to create a push campaign
* Understand how to design and personalize a push message

## Exercises

>[!BEGINTABS]

>[!TAB Excercise 2.1 - Login to Journey Optimizer]

### Excercise 2.1 - Login to Journey Optimizer

1. Open [Adobe Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:summit-ajo-lab/journey-optimizer/home){target="_blank"} 
2. Login using the following details:
    
    **Username:**   L820+**your seat number**@adobeeventlab.com
    **Password:**   Adobe2024! 

    ![Login screen](/help/summit/l820-lab-workbook/assets/2-1-1-ajo-sign-in.png)

3. you can skip the next two screens:

    ![Phone number](/help/summit/l820-lab-workbook/assets/2-1-3-ajo-add-phone.png)

     ![Personalization pop up](/help/summit/l820-lab-workbook/assets/2-1-4-ajo-personalization-pop-up.png)


>[!SUCCESS]
>
>You should be logged in to Journey Optimizer and on the homepage:
>
>![AJO Homepage](/help/summit/l820-lab-workbook/assets/2-1-5-ajo-homepage.png)

>[!TAB Exercise 2.2 - Review your profile]

### Exercise 2.2 - Review your profile

1. In Adobe Journey Optimizer left navigation, navigate to **[!UICONTROL CUSTOMER]** -> **[!UICONTROL Profiles]**.
2. On the **[!UICONTROL Profiles]** overview page, navigate to the [!UICONTROL Browse] tab.
3. From the **[!UICONTROL Identity Namespace]** dropdown, select **[!UICONTROL Email]** 
![Select identity namespace](/help/summit/l820-lab-workbook/assets/2-2-1-select-identity-namespace.png)
4. Click the **[!UICONTROL Profile ID]** link to access the profile data
![Profile ID](/help/summit/l820-lab-workbook/assets/2-2-2-profiles.png)
5. On the profile details page: Review the information: 

All the data  was collected through the mobile website and the mobile app and has been added to the profile. It available to use to personalize the messages you send.

1.  On the **[!UICONTROL Segment Membership]** tab:
    1. Check the audience membership 
    2. Make sure the profile is part of an audience named:
    
        **Lab-Seat *your seat number*** (e.g. Lab-Seat)
        
        ![Audience membership](/help/summit/l820-lab-workbook/assets/2-2-3-audience-membership.png)

>[!NOTE]
>
>You require the lab-seat audience in the next exercises. It will guarantee that you are only sending the push messages and in-app notifications to your own device. 
>
>If you see that you are member of an audience with a seat number different to yours, you might receive messages from the lab attendee at that seat. 

>[!TAB Exercise 2.3 - Create a push campaign]

### Exercise 2.3 - Create a push campaign

In this exercise, you will create a push campaign, design and customize the push notification, and send the push notification to you own device. 

## 2.3.1 - Create the campaign

1. In Journey Optimizer, in the left navigation, select Campaigns.
2. Click on the **[!UICONTROL Create Campaign]** button
3. On the **[!UICONTROL Create Campaign]** page, in the  **[!UICONTROL Action]** section, select the **[!UICONTROL Push notification] check box
4. From the **[!UICONTROL App surface]** dropdown select *[!DNL Frecopa-Push]*
5. Click the **[!UICONTROL Create]** button

### 2.3.2 - Configure your campaign

In this section you will configure the properties, audience, actions, and schedule of your campaign:

1. **[!UICONTROL Properties section]**

   1. Give your campaign a name. Make sure to start the name with your seat number, so you can easily find your campaign again. For example if your seat number is 99: `99 - 10% Discount Campaign`. 
   2. If you like,you can add a description but it is not required for this exercise.
2. **[!UICONTROL Audience section]**
   1. In the audience section, click on the **[!UICONTROL Select audience]** button.
   2. On the **[!UICONTROL Select audience]** screen, search for the audience **Lab - Seat `your seat number`**. It should be the Lab audience that the profile you created on [!DNL Frescopa] is assigned to.
   3. Select the audience and click [!UICONTROL Save]

2.3.3. - Edit the content of the push notification

1. In the **[!UICONTROL Action] section, click the [!UICONTROL Edit Content] button.

In this section you will design and customize the push notification. 

1. Depending on the mobile device you have, select either the [!DNL iOS] or [!DNL Android] tab to configure your content. 

Feel free to add any text you would like, we will give you examples that you can use:

1. Add the title to the title field: 
`10% today!`
2. Add the body text: 
   `Today only! Get 10% off on your House Blend coffee purchase!` 
3. Personalize your body text - add the recipeint's first name:
   1. Click on the **personalization dialogue icon** next to the **[!UICONTROL Body]** field
   2. On the ** personalization dialogue** screen, place the cursor where you want to add the name in the text.
   3. Make sure the **Profile attributes** are selected in the left navigation.
   4. In the **Search field**, search for:
   `first name`
   5.  In the central navigation click on the **+** next to  the **First name (Profile attributes>Person>Fullname)** to add the personalization field to your text.

    >[!SUCCESS]
    >
    >This is what your text should look like
    >

    6. Click the **[!UICONTROL Save]** button to save the personalization
4. **[!UICONTROL On click behavior]:** 
   1. Select **[!UICONTROL Deeplink]** from the **[!UICONTROL Body click behavior]** dropdown.
   2. Copy and paste the following URL into the **URL field**: TBD
5. **[!UICONTROL Add media]:** Click on the **[!UICONTROL Add media] button**
   1. On the **[!UICONTROL Select Assets] screen, scroll down to the Frescopa>Products folder and select an image.
   2. Click on the image and click the **[!UICONTROL Select] button** to add the image to your push notification. 

    >[!SUCCESS]
    >
    > 1. On the preview screen, click on **[!UICONTROL Expand View]**
    > 2. Preview your message.
    >

2.3.4. - Edit the content of the push notification



   
 

>[!ENDTABS]
