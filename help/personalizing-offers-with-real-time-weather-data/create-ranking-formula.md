---
title: Create Ranking formula
description: A ranking formula in Adobe Journey Optimizer is used during offer decisioning, specifically within a selection strategy to determine the priority order of eligible offers.
feature: Decisioning
role: User
level: Beginner
doc-type: Tutorial
last-substantial-update: 2025-06-10
recommendations: noDisplay, noCatalog
jira: KT-18258
exl-id: 23a9d36f-ac2c-42a5-b08d-79c7118920c9
---
# Create Ranking formula

A ranking formula in Adobe Journey Optimizer is used during offer decisioning, specifically within a selection strategy to determine the priority order of eligible offers. The ranking formula comes into play after eligibility filtering, when multiple offers qualify for a given profile but only the top one (or few) should be presented based on business logic or profile context.

*   Log in to Journey Optimizer

*   Navigate to _**Decisioning ->Strategy setup ->Ranking formulas ->Create formula**_

Name the formula _**Weather - Related - Offers**_



A criterion in a ranking formula refers to a conditional rule used to assign a score to an offer. These criteria compare attributes from the offer and the  context to determine how relevant an offer is for a specific individual.

The following 3 criteria are defined to filter offers and then assign a ranking score to the qualifying offer. The criteria is defined using the criteria builder. The context data can also be used in defining the criteria as shown in the screenshot below
![contxt-data](assets/context-data.png)

All the 3 criteria used an offer attribute(tag) and a context data atttribute(temperature) in defining the criteria.

## Criteria One

| **Offer Tag** | **Context data condition**       | **Score Logic**                     |
|------------------|---------------------|-------------------------------------|
| **hot**         | temperature > 80    |score=Temperature     |


## Criteria Two

| **Weather Tag** | **Context data condition**             | **Score Logic**                              |
|------------------|---------------------------|----------------------------------------------|
| **spring**        | temperature > 65 and  < 80     | score=temperature × 4 |

## Criteria Three

| **Weather Tag** | **Context data condition**             | **Score Logic**                              |
|------------------|---------------------------|----------------------------------------------|
| **cold**        | temperature < 65     |  score =temperature  |
