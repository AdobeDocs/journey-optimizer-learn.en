---
title: Create Ranking formula
description: An offer item in decisioning represents a single piece of personalized content, such as a message, image, promotion, or recommendation, that can be delivered to a user based on defined rules and conditions.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-30
jira: KT-18188
---

# Create Ranking formula

A ranking formula in Adobe Journey Optimizer is used during offer decisioning, specifically within a selection strategy to determine the priority order of eligible offers. This comes into play after eligibility filtering, when multiple offers qualify for a given profile but only the top one (or few) should be presented based on business logic or profile context.

* Login to Journey Optimizer
Decisioning ->Strategy setup ->Ranking formulas ->Create formula

Ranking Formula 
![name_description](assets/formuala-ranking.png)

A criteria in a ranking formula refers to a conditional rule used to assign a score to an offer. These criteria compare attributes from the offer and the profile or context to determine how relevant an offer is for a specific individual.



Criteria 1
![criteria_one](assets/criteria1.png)

Criteria 1 contains three criteria:

* offer._techmarketingdemos.offerDetails.zipCode == "92128" – checks the ZIP code associated with the offer.

* _techmarketingdemos.zipCode == "92128" – checks the ZIP code on the user's profile.

* _techmarketingdemos.annualIncome > 100000 – checks the income level from the user's profile.

If all of these criteria are met, the offer gets a score of 40.






Criteria 2
![criteria_two](assets/criteria2.png)

Criteria 2 contains three criteria

* offer._techmarketingdemos.offerDetails.zipCode == "92126" – checks the ZIP code associated with the offer.

* _techmarketingdemos.zipCode == "92126" – checks the ZIP code on the user's profile.

* _techmarketingdemos.annualIncome < 100000 – checks the income level from the user's profile.

If all of these criteria are met, the offer gets a score of 30.




