---
title: L535 Cheat Sheet
description: This page has text and links that are being used in the L535 Summit Lab.
feature: In App, SMS, Push, Email
doc-type: article
role: User
level: Beginner
recommendations: noDisplay, noCatalog
hide: yes
hidefromtoc: yes
exl-id: 1c3f4341-1293-463d-bee0-57440fcff23a
---
# Summit Lab L535- Cheat Sheet

This page has text and links that are being used in the L535 Summit Lab. It allows you to copy and paste the content into your Journey Optimizer messages.

## Links

* [Adobe Journey Optimizer](https://experience.adobe.com/#/@techmarketingdemos/sname:ajo-summit-lab/journey-optimizer/journeys)
* [SecurFinancial Website](https://dsn.adobe.com/web/hausmann-FTTN?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFub255bW91cyIsImVtYWlsIjoiYW5vbnltb3VzQGFkb2JlLmNvbSIsIm5hbWUiOiJBbm9ueW1vdXMiLCJpc1N1cGVyVXNlciI6ZmFsc2UsImlzc3VlciI6ImhhdXNtYW5uIiwicHJvamVjdHMiOnsiaGF1c21hbm4tRlRUTiI6InZpZXcifSwiaWF0IjoxNzQwNzU2NTYxLCJleHAiOjE3NDMzNDg1NjF9.ryOTsqDH9B33436RlIo4AHFxx8aGjNEMqv9FAxLZb9U)
* [Download the app](https://demo-system-next.s3.amazonaws.com/dxdemo/summit/index.html)

## Copy and paste for exercises

### Exercise 2.1 - Login to Journey Optimizer

Log in using the following details: 

Email Address:    L535+*your seat number*@adobeeventlab.com  
 
Password:       Adobe4Summit!


### Exercise 2.3 - Compose the email message

#### Prompt

```
Generate a welcome email for new SecurFinancial customers who just opened a new savings account. 
Add a call to action to install the SecurFinancial mobile app.
```

### Exercise 3.1 - Apply dynamic content to the SMS message

#### Code

```
{%#if select _Push_details1 from profile.pushNotificationDetails where
_Push_details1.token.isNotNull()%}
Welcome to your new SecurFinancial checking account! Discover the
SecurFinancial mobile app, designed for effortless banking. Manage accounts,
transfer funds, and monitor transactions securely, anytime, anywhere. Open the
app
{%else%}
Welcome to your new SecurFinancial checking account! Discover the
SecurFinancial mobile app, designed for effortless banking. Manage accounts,
transfer funds, and monitor transactions securely, anytime, anywhere. Click here
to install the app: https://demo-systemnext.
s3.amazonaws.com/dxdemo/summit/index.html
{%/if%} 
```

### Exercise 4.2 - Configure the treatments

#### Title

```
Welcome to SecurFinancial
```

#### Body Text

```
Did you know you can find an ATM near in the SecurFinancial app? Try it now!
```

#### URL

```
dxdemo://atm
```

### Exercise 6 - Content Cards

#### Title

```
Welcome to SecurFinancial!
```

#### Body

```
Thank you for downloading the app. You can find ATMs, track your spending and more. All within the app.
```

#### Media URL

```
https://demo-system-next.s3.amazonaws.com/assets/securfinancial/home-loan.jpg
```

#### Button Title

```
Find ATMs
```

#### Target URL

```
dxdemo://atm
```

## Images

![SecureFinancial logo](/help/summit-lab-assets/assets/SecureFinancial-logo.png)


![Mobile Phone](/help/summit-lab-assets/assets/online-banking-app-01.png)


