---
title: "WeRateDogs Tweets Data Wrangling & Analysis"
summary: "A data wrangling and analysis project on the WeRateDogs Twitter dataset as part of my Udacity Data Analyst Nanodegree coursework."
tags:
- Python
- pandas
- NumPy
- Tweepy
- Data Wrangling
- Data Visualization


screenshots:
- "/projects/we-rate-dogs/data-cleaning.png"
- "/projects/we-rate-dogs/retweet-vs-favorite.png"
- "/projects/we-rate-dogs/dog-stage-frequency.png"



repo: "https://github.com/carluvy/We_rate_dogs-udacity"
public: true
featured: true
article: "https://medium.com/@carngie/data-wrangling-weratedogs-tweets-389d405cde9c"
cover: "/projects/we-rate-dogs/retweet-vs-favorite.png"
---

## The Problem

Real-world data is messy. The WeRateDogs project provided three different partial data sources — a Twitter archive CSV, an image prediction TSV, and additional tweet metadata from the Twitter API — that had to be gathered, assessed, cleaned, merged, and analyzed. The data contained missing values, duplicate entries, inconsistent formatting, and structural quality issues before it could be used for meaningful insights, and the challenge was to apply systematic data wrangling techniques to make it reliable and interpretable. 

## The Approach

I used Python and its data libraries — **pandas**, **NumPy**, **json**, and **requests** — to gather and preprocess all three datasets, including downloading prediction files and collecting additional tweet stats via the **Tweepy** Twitter client. I read each dataset into a DataFrame, then conducted **assessing** to identify quality issues (e.g., missing or incorrect data) and tidiness issues (e.g., inconsistent column names). I applied iterative cleaning steps: removing duplicates, handling missing values, standardizing formats, and merging the tables into a master dataset. After producing a tidy dataset, I performed exploratory analysis and built visualizations to derive insights such as the relationship between retweets and favorite counts, and dog stage popularity.

## Outcome

The final dataset was clean, well-structured, and suitable for analysis. Key observations included a strong positive correlation between retweet and favorite counts, and the identification of dog stages most frequently featured and most engaged with by Twitter users. I documented each part of the process — gathering, assessing, cleaning, storing, and analyzing — in a project report and notebook, demonstrating a robust end-to-end data wrangling workflow appropriate for real-world datasets.



