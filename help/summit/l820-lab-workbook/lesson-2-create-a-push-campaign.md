---
title: Lesson 2 - Create a push campaign
description: Review profile data and learn how to create and send audiences a push notifications in Journey Optimizer.
feature: Push
role: User
level: Intermediate
doc-type: Tutorial
duration: 0
last-substantial-update: 2024-02-17
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

>[!TAB Exercise 2.2 - Review your profile]

### Exercise 2.2 - Review your profile

1. In Adobe Journey Optimizer > left navigation: Navigate to the Profiles section.  
2. From the **[!UICONTROL Identity Namespace]** dropdown, select **[!UICONTROL Email]** 
3. Enter the email address you registered with in the **[!UICONTROL Identity value]** field. 
4. Click [!UICONTROL View]
5. Click the **[!UICONTROL Profile ID]** to access the profile data
6. Review the information on each of the tabs: **[!UICONTROL Details] | [!UICONTROL Attributes] | [!UICONTROL Events] | [!UICONTROL Segment Membership]**. 

All the data  was collected through the mobile website and the mobile app and has been added to the profile. It available to use to personalize the messages you send.

>[!TAB Exercise 2.3 - Create a push campaign]

### Exercise 2.3 - Create a push campaign

1. In Journey Optimizer, use the left navigation and click Campaigns. 

In Journey Optimizer, use the left navigation and click Campaigns.  
 

In the Campaign Repository, select the campaign with the title "Summit push campaign2023" 

 Graphical user interface, table

Description automatically generated 

 

Click Review to activate in the top right corner.  
 
Graphical user interface, text, application, email

Description automatically generated 

 
 

Click the Duplicate button.  
 
Graphical user interface, application

Description automatically generated 

 

Rename your campaign by adding in your seat number to the beginning of the Title. (Ex. 1 Summit push campaign – 2023) and then click Duplicate.  
 
Graphical user interface, application

Description automatically generated 

 

Select your newly created campaign from the repository screen. 
 

In the Audience section, click the Replace audience button to open the Select Audience options. 
 

Select the audience that corresponds with you seat number. (Ex. Seat_1) and click Save.  

 

 

To open the authoring construct, click Edit content in the Action section. 
 

For the title, click the Personalization button on the right of the text box.   

Shape, arrow

Description automatically generated 

This opens the Personalization editor.  
 

 

 
(Depending on your personal device platform, select either the iOS or Android tab.) 

 

In the Text editor (right hand screen), move your cursor between, 'Hey' and '!' and press your space bar once. 
 

In the search dialog, type in first name. 
 

Shape, arrow

Description automatically generatedClick the + symbol.  
 
This adds the first name personalization token to the text editor. It should read,  
'Hey {{profile.person.name.firstName}}!'. 
 

 

 

Click Save.  
 

Graphical user interface, application, Word

Description automatically generated 

  
 

Click Save.  

 

Under the live preview screen, click the Expand view button. This shows you the full push notification.  
 
Graphical user interface, application

Description automatically generated 

 

In the top right corn, click the Simulate content button. This brings up the simulate content feature.  
 

 

 

Click Manage test profile. 
 

Graphical user interface, application

Description automatically generated 

 

In the Identity namespace, click the button on the right and select ECID, then click Select.  
 
Graphical user interface, application

Description automatically generated 

 

Type your email address that you provided for your app's profile, click Add profile, then click the back arrow to take you back to the authoring construct.  
 
Graphical user interface, application

Description automatically generated 

 

Shape, arrow

Description automatically generatedYou will be able to see a generated preview of you message with the personalized token substituted with the profiles first name attribute.  
 

Shape, arrow

Description automatically generatedTo see the full push notification, click Expand view.  
 

Graphical user interface, application

Description automatically generated 

 

Click Close when you are done reviewing the message.  
 

Shape, arrow

Description automatically generatedThis takes you back to the campaign properties construct. 

  

 

Shape, arrow

Description automatically generatedFrom the authoring construct, click Review to activate.  
 
This takes you to the final summary page.  

 

Click Activate to publish your campaign.  
 
Graphical user interface, application

Description automatically generated 


>[!ENDTABS]
