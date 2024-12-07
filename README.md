# Credit Card Fraud Detection

## Overview

This project focuses on building a machine learning model to detect fraudulent credit card transactions. By leveraging data analysis and advanced algorithms, the system aims to identify suspicious activities and minimize financial losses for users and organizations.

## Features

Data Preprocessing: Handling missing values, normalizing data, and addressing class imbalance with techniques like SMOTE.

Exploratory Data Analysis (EDA): Visualizing transaction patterns and feature correlations.

Machine Learning Models: Implementation of algorithms like Logistic Regression, Random Forest, and Gradient Boosting.

Evaluation Metrics: Precision, Recall, F1-score, and AUC-ROC for performance evaluation.

Real-Time Prediction: Provides a framework for deploying the model to predict transaction legitimacy in real-time.

Customizable Thresholds: Adjustable fraud detection sensitivity based on business requirements.

Dataset

The project uses the publicly available Credit Card Fraud Detection Dataset, containing anonymized features of transactions and labels indicating legitimate or fraudulent activities.
You can find the dataset in kaggle - https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud.

Results

The model achieved an F1-score of 0.92 and an AUC-ROC of 0.97 on the test set.

Insights from EDA revealed:

Fraudulent transactions typically have smaller amounts.

Certain features exhibit strong correlations with fraudulent behavior.
