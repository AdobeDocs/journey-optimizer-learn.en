---
title: Challenge 1 - Create segments
description: Apply what you learned about creating segments and test your skills.
kt: 8417
feature: Segments
role: User
level: Beginner
---

# Challenge 1 - Create segments

## The story

Luma, a fictional athletic apparel company, is looking to promote its latest apparel and gear collection and to drive sales for existing customers. To support the new collection campaign, the Luma marketing team asks you to create the [segments](/help/set-up-resources/create-segments.md) that are required to  build the journey for the campaign.

## Your Challenge

Create the following segments in Journey Optimizer.

### Segment #1 – Active Customers

Create an audience to target with the new summer collection announcement:

* Name this segment *your name – Active Customers*
* The audience must include only active Luma customers. Active customers are defined as customers who have a tier in Luma’s loyalty program (silver, gold, platinum, or diamond)

**SUCESS CRITERIA** 

1. In the segment builder, you can see the estimated number of qualified profiles. If you are working in the training sandbox, this number should be equal or greater than 0.
2. A qualifying profile has been added to the segment:
    * You can check if a profile has been added to the segment by navigating to one of the profiles listed on the Detail tab.  
    * On the profile page, check the attributes to confirm that they qualify and then check the segment membership.

+++**CHECK YOUR WORK**
Select the Tier (CDM individual Profile >Loyalty> Tier)

This is what your segment should look like:

![Segment #1 - Active Customers](/help/challenges/assets/C1-S1.png)

Check the code on the bottom right corner of the Edit segment screen, under Events. The code should look like this:

loyalty.tier.equals("diamond", false) or loyalty.tier.equals("gold", false) or loyalty.tier.equals("platinum", false) or loyalty.tier.equals("silver", false)

+++

## Segment #2 – Out-of-stock Wishlist items

To target potential interested customers when products are restocked, create an audience that consists of customers

* who have added an item to their wishlist (Save For Later event type)
* that was out of stock in the last three months,
* and have not since purchased the item.

Name this segment: *your name – Out-of-stock-Wishlist*

**SUCESS CRITERIA**

TBD