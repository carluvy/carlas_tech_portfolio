---
title: "Bellabeat Case Study: Smart Device Data Analysis"
summary: "A comprehensive data analysis of Fitbit smart device usage to derive actionable insights for Bellabeat’s marketing strategy."
tags: 
  - R
  - Tidyverse
  - SQL
  - Data Cleaning
  - Data Wrangling
  - Data Analysis
  - Data Visualization
  - FitBit
cover: "/projects/bellabeat-case-study/distance vs steps.png"
# screenshots:
#   - "/projects/bellabeat/activity-trend.png"
#   - "/projects/bellabeat/sleep-patterns.png"
#   - "/projects/bellabeat/engagement-insights.png"
repo: "https://www.kaggle.com/code/carlaaluvai/bellabeat-case-study-in-r"
public: true
featured: true
---

## The Problem

Bellabeat, a wellness technology company, tasked itself with deriving meaningful consumer insights from smart device usage data. The goal of this case study was to **explore patterns in physical activity, sleep behavior, and overall engagement** using publicly available Fitbit data, and then consider how those insights might inform *Bellabeat’s* product strategy and marketing. The original dataset—Fitbit Fitness Tracker Data from *Kaggle*—contains multiple tables covering activity, sleep, hourly and daily measures collected from consenting device users.

## The Approach

To tackle the problem, I employed a combination of **SQL for structured data preprocessing** and **R (with tidyverse)** for statistical cleaning, transformation, and visualization. First, multiple CSV tables from the Fitbit dataset were loaded and cleaned — including resolving inconsistencies in date and time formats, standardizing variables, handling missing values, and aggregating key metrics. SQL was used to efficiently filter, join, and inspect large tables, while R provided flexible tools for nuanced wrangling and plotting. Visualizations were generated to examine trends in daily activity, hourly patterns, and sleep behavior. Key summaries were crafted using summary statistics and trend analyses to uncover patterns and support data-driven recommendations.

## Outcome

The analysis produced a well-organized, cleaned dataset and a suite of visual insights depicting user behavior patterns. Highlights of the results included trends in step counts and sleep duration, engagement distributions across users, and patterns that could inform **marketing and user engagement strategies** for Bellabeat. The project demonstrates an end-to-end workflow from data ingestion and cleaning through analysis and visualization, using real-world wearable device data.
