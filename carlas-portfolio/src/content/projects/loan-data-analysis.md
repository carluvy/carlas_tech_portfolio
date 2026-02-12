---
title: "Loan Data Analysis Dashboard"
summary: "An interactive web dashboard for exploring loan dataset characteristics, visual trends, and summary statistics using Streamlit."
tags: 
    - Python
    - Numpy
    - Pandas
    - Plotly
    - Seaborn
    - Matplotlib
    - Streamlit
    - Hugginface
    - Data Visualization
    - Exploratory Data Analysis

cover: "/projects/loan-data-analysis/cover.png"
screenshots:
- "/projects/loan-data-analysis/correlation-heatmap.png"
- "/projects/loan-data-analysis/loan-amount-across-incomeranges.png"
- "/projects/loan-data-analysis/mean-value-per-incomerange.png"
# - "/projects/loan-data-analysis/feature-distributions.png"
# - "/projects/loan-data-analysis/2026-02-12T16-34_export.csv"

featured: true
public: true
repo: "https://github.com/carluvy/loan_data_analysis"
---


## The Problem

Understanding the structure of a loan dataset is crucial before developing any machine learning model. Raw data often contains missing values, inconsistent formats, and hidden patterns that need careful examination. The goal of this project was to build an **interactive dashboard** that allows stakeholders to explore the loan dataset’s features, distributions, and relationships without writing code, and to surface insights that guide model building or business decisions.

## The Approach

I built a web dashboard using **Streamlit** (and optionally Gradio components) to present interactive data exploration tools. The app loads the loan dataset and provides users with:

- **Summary statistics** for numerical and categorical fields
- **Distribution plots** (histograms, box plots) for loan features
- **Correlation heatmap** to visualize relationships between variables
- **Interactive filters** so users can focus on segments of interest

Data is cleaned and preprocessed using pandas before visualization. Plotly and Seaborn are used to create dynamic, responsive charts that update with user filters. The dashboard enables both high-level summaries and detailed drill-downs.

## Outcome

The resulting dashboard empowers users to visually inspect key loan metrics, uncover patterns in borrower characteristics, and spot outliers or trends that impact risk or approval decisions. By lowering the barrier to exploration, the dashboard supports better data-driven decisions for model development, reporting, or stakeholder communication. The project demonstrates EDA best practices and the ability to synthesize analytical results into a usable interface.
