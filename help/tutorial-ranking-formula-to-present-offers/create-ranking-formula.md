---
title: Create Ranking formula
description: A ranking formula in Adobe Journey Optimizer is used during offer decisioning, specifically within a selection strategy to determine the priority order of eligible offers.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-05-30T00:00:00.000Z
recommendations: noDisplay, noCatalog
jira: KT-18188
exl-id: eee1b86e-b33f-408e-9faf-90317bc5e861
product_v2:
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: a984631b-2bae-4860-9b15-69c41a799dcb
    internal-label: APIs and SDKs
subfeature_v2:
  - id: a7a194a0-75e2-4913-8a83-14714fbf68e6
    internal-label: Decisioning API
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
---
# Create Ranking formula

A ranking formula in Adobe Journey Optimizer is used during offer decisioning, specifically within a selection strategy to determine the priority order of eligible offers. The ranking formula comes into play after eligibility filtering, when multiple offers qualify for a given profile but only the top one (or few) should be presented based on business logic or profile context.

*   Log in to Journey Optimizer

*   Decisioning ->Strategy setup ->Ranking formulas ->Create formula

Ranking Formula 
![name_description](assets/formuala-ranking.png)

A criterion in a ranking formula refers to a conditional rule used to assign a score to an offer. These criteria compare attributes from the offer and the profile or context to determine how relevant an offer is for a specific individual.



Criteria 1

This condition filters decision items (offers) **to include only** the offers tagged with "IncomeLevel."
These filtered offers will then proceed to the next step — such as ranking or delivery — based on additional logic you define.
![criteria_one](assets/income-related-formula.png)


The following expression is used to create the ranking score

``` pql

if(   offer._techmarketingdemos.offerDetails.zipCode = _techmarketingdemos.zipCode,   _techmarketingdemos.annualIncome / 1000 + 10000,   if(     not offer._techmarketingdemos.offerDetails.zipCode,     _techmarketingdemos.annualIncome / 1000,     -9999   ) )

```

What the Formula Does

*   If the offer has the same ZIP code as the user, give it a very high score so it gets picked first.

*   If the offer doesn't have a ZIP code at all (it's a general offer), give it a normal score based on the user's income.

*   If the offer has a different ZIP code than the user, give it a very low score so it's not selected.

This way, the system:

*   Always tries to show a ZIP-matching offer first,

*   Falls back to a general offer if no match is found, and avoids showing offers meant for other ZIP codes.


If an offer item does not meet any of the filter criteria (like not having the "IncomeLevel" tag), the offer receives a default ranking score of 10.




