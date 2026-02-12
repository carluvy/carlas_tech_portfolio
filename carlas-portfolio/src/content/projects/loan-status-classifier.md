---
title: "Loan Status Classifier (Hugging Face Space)"
summary: "A machine learning model deployed on Hugging Face to classify loan default risk using customer and financial features."
tags: 
    - Python
    - Machine Learning
    - Numpy
    - Scikit-learn
    - Gradio
    - Hugginface

cover: "/projects/loan-status-classifier/cover.png"
featured: true
public: true
domain: "https://huggingface.co/spaces/esteele/Loan_Classifier"
screenshots:
- "/projects/loan-status-classifier/cover.png"
---

Lenders need to assess loan applicants quickly and accurately to minimize risk while approving credit. Traditional rule-based decisions can be brittle and not account for subtle patterns in borrower data. The problem here was to build a **predictive model** capable of estimating whether a loan applicant is likely to default or not, and to **deploy** the model into an interactive application where users can input features and receive a prediction in real time.

## The Approach

Using Python and widely adopted machine learning libraries, I trained and evaluated classification algorithms to separate low- and high-risk loan applicants. The dataset was cleaned, feature engineered, and split for training and validation. Models such as **Random Forest**, **Gradient Boosting**, or **Logistic Regression** were evaluated with cross-validation and tuned for performance. Once a reliable model was selected, I deployed it to a **Hugging Face Space** with a simple form interface that allows users to input loan characteristics and see the predicted risk. Feature importance visualization helps interpret which attributes most influence predictions.


## Outcome

The deployed classifier offers a simple, interactive way to assess loan risk without installing software. Users can explore feature effects and obtain predictions instantly. The model achieved competitive accuracy on validation sets and illustrates an end-to-end machine learning workflow: from data preparation and modeling to deployment and user interaction. This project demonstrates practical application of ML classification and the ability to deploy to a public space for live usage.