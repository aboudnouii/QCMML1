const qPart4 = [
    {
        question: "In TP3, which of these models was NOT evaluated as part of the Model Comparison section?",
        options: ["K-Nearest Neighbors (KNN)", "Decision Tree", "Random Forest", "Naive Bayes"],
        answer: 3,
        difficulty: "LOW",
        explanation: "The notebook compares Logistic Regression against KNN, Decision Tree, and Random Forest."
    },
    {
        question: "When instantiating the K-Nearest Neighbors classifier, which sklearn class is used?",
        options: ["KNeighbors()", "KNNClassifier()", "KNeighborsClassifier()", "NeighborsClassifier()"],
        answer: 2,
        difficulty: "LOW",
        explanation: "The correct class in sklearn is `KNeighborsClassifier`."
    },
    {
        question: "Why does the notebook recommend setting an explicit `random_state` for DecisionTreeClassifier and RandomForestClassifier?",
        options: ["To make them train faster", "To reduce overfitting", "To ensure reproducibility since they rely on random initialization", "To increase their accuracy natively"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Random states allow randomized algorithms to produce identical results when re-run."
    },
    {
        question: "True or False: According to the notebook, a lone Decision Tree is generally more prone to overfitting than a Random Forest on complex data.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "True. Decision Trees easily overfit, while Random Forests mitigate this by averaging many trees."
    },
    {
        question: "To improve the Random Forest model, TP3 explores Hyperparameter Tuning. What tool from sklearn is used for this?",
        options: ["RandomizedSearchCV", "GridSearchCV", "ParameterSearch", "HyperTuner"],
        answer: 1,
        difficulty: "LOW",
        explanation: "The notebook explicitly uses `GridSearchCV` to find the best parameters."
    },
    {
        question: "When using `GridSearchCV(rf, param_grid, cv=5)`, what does `cv=5` indicate?",
        options: ["Cost Value of 5", "Create 5 trees", "5-Fold Cross-Validation", "Class validation threshold = 5"],
        answer: 2,
        difficulty: "LOW",
        explanation: "cv=5 configures the grid search to use 5-Fold Cross-Validation."
    },
    {
        question: "In the param_grid for Random Forest, what is the hyperparameter `n_estimators`?",
        options: ["The number of iterations", "The number of features to consider at each split", "The number of trees in the forest", "The maximum depth of the tree"],
        answer: 2,
        difficulty: "LOW",
        explanation: "n_estimators defines how many internal decision trees the Random Forest should build."
    },
    {
        question: "Which hyperparameter combination grid for Random Forest was investigated?",
        options: ["{'n_estimators': [50, 100, 200], 'max_depth': [None, 10, 20]}", "{'learning_rate': [0.1, 0.01]}", "{'k_neighbors': [3, 5, 7]}", "{'C': [0.1, 1, 10]}"],
        answer: 0,
        difficulty: "HIGH",
        explanation: "n_estimators, max_depth, and min_samples_split were the parameters specified for the ensemble model."
    },
    {
        question: "How do you access the optimal parameters found by GridSearchCV after calling `.fit()`?",
        options: ["grid_search.optimal_params()", "grid_search.best_params_", "grid_search.params_best", "grid_search.get_best()"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "The dictionary of the best parameter values is stored in the `.best_params_` attribute."
    },
    {
        question: "After retrieving the best Random Forest parameters, what method is used to directly get the best underlying Model object?",
        options: ["grid_search.best_estimator_", "grid_search.best_model_", "grid_search.model()", "grid_search.optimal_model()"],
        answer: 0,
        difficulty: "HIGH",
        explanation: "The underlying fitted model containing the best params is `.best_estimator_`."
    },
    {
        question: "Why is 5-Fold Cross-Validation generally a better metric of model performance than a single train/test split?",
        options: ["It completely removes outliers", "It increases model training speed", "It provides a more robust performance estimate by testing completely unseen splits of the data multiple times", "It eliminates the need for any test data entirely"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Cross-validation limits selection bias and variance, providing a more robust average metric over different subsets."
    },
    {
        question: "Which function in TP3 generates the cross-validation score array? ",
        options: ["evaluate_cv()", "cross_val_score()", "ScoreCV()", "validation_score()"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Scikit-learn's `cross_val_score()` is used to execute standard cross-validation."
    },
    {
        question: "When evaluating the outputs of `cross_val_score()`, how is the primary model performance represented?",
        options: ["By simply taking the maximum score achieved in the folds", "By calculating the mean of the score array", "By taking the minimum score", "By multiplying all scores"],
        answer: 1,
        difficulty: "LOW",
        explanation: "Typically, `scores.mean()` is taken to compute the average expected accuracy."
    },
    {
        question: "In TP3 Q6, ROC Curves are introduced. What does ROC stand for?",
        options: ["Receiver Operating Characteristic", "Random Overlap Curve", "Recall Optimization Chart", "Region of Convergence"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "ROC stands for Receiver Operating Characteristic."
    },
    {
        question: "What does the Area Under the Curve (AUC) score tell us?",
        options: ["How long the model takes to run", "The model's ability to distinguish between the classes", "The total number of errors made", "The exact percentage of True Positives linearly"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "AUC measures the entire 2D area under the ROC curve indicating overall structural classification probability (1.0 is perfect, 0.5 is guessing)."
    },
    {
        question: "What does the x-axis of an ROC curve represent?",
        options: ["True Positive Rate (Sensitivity)", "False Positive Rate (1 - Specificity)", "Precision", "Recall"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "The x-axis is the False Positive Rate (FPR)."
    },
    {
        question: "What does the y-axis of an ROC curve represent?",
        options: ["True Positive Rate (Recall / Sensitivity)", "False Positive Rate", "Precision", "Accuracy"],
        answer: 0,
        difficulty: "HIGH",
        explanation: "The y-axis is the True Positive Rate (TPR)."
    },
    {
        question: "To plot an ROC curve, we need a specific type of output from the binary classifier. Instead of absolute 0/1 predictions, what is needed?",
        options: ["Probability estimates using `.predict_proba()`", "Absolute predictions using `.predict()`", "The loss/cost curve of the training step", "The random state seed"],
        answer: 0,
        difficulty: "HIGH",
        explanation: "ROC curves analyze different probability thresholds, thus needing `.predict_proba(X_test)`."
    },
    {
        question: "If a plotted ROC curve is perfectly mirroring the diagonal line connecting (0,0) and (1,1), what is its approximate AUC score?",
        options: ["1.0", "0.0", "0.5", "-1.0"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "A diagonal line corresponds to an AUC of 0.5, which implies random guessing."
    },
    {
        question: "True or False: According to the analysis in TP3, Random Forest completely eliminated overfitting by achieving 100% on the test set.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "LOW",
        explanation: "False. No model achieved 100%, and ensemble methods limit overfitting but rarely eliminate it or hit perfect scores on unseen real-world data like Titanic."
    },
    {
        question: "Which of the following describes the difference in output produced between `.predict()` and `.predict_proba()`?",
        options: [".predict() outputs [0, 1] class labels; .predict_proba() outputs likelihood percentages/arrays per class", ".predict() gives text; .predict_proba() gives integers", ".predict() is for test data; .predict_proba() is for train data", "They output exactly the same data types"],
        answer: 0,
        difficulty: "LOW",
        explanation: "`.predict()` provides discrete decisions, whilst `.predict_proba()` yields the continuous probability values."
    },
    {
        question: "Which library function directly computes the TPR, FPR, and thresholds for an ROC curve in sklearn?",
        options: ["roc_curve()", "build_roc()", "roc_score()", "plot_metrics()"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "The function `roc_curve(y_true, y_score)` from `sklearn.metrics` performs this."
    },
    {
        question: "In TP3, when visualizing the ROC curve using Matplotlib, what does `plt.plot([0, 1], [0, 1], 'k--')` draw?",
        options: ["The optimal model boundary", "The decision tree baseline", "The random guessing (AUC=0.5) baseline diagonal dashed line", "The maximum possible accuracy line"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "It draws the diagonal line representing a fundamentally random or baseline classifier's performance."
    },
    {
        question: "Given a dataset where surviving passengers (class 1) are a minority, why are Precision, Recall, and F1-score more insightful than raw Accuracy?",
        options: ["They are computationally cheaper to calculate", "Accuracy is misleading when classes are imbalanced; a model could just predict '0' for everyone to get high accuracy", "Accuracy doesn't work for binary classification", "Sklearn doesn't support Accuracy properly for minority sets"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "In class imbalance situations, predicting only the majority class gives high accuracy but the model actually fails at identifying the minority class. Precision and Recall capture these dynamics."
    },
    {
        question: "During Grid Search CV on Random Forest with param_grid containing 3 values for n_estimators, 3 values for max_depth, and 2 values for min_samples_split across 5 folds, how many total Models (fits) does the Search build?",
        options: ["5 fits total", "3 * 3 * 2 = 18 fits", "18 * 5 folds = 90 fits", "1 fit with optimal params"],
        answer: 2,
        difficulty: "HIGH",
        explanation: "Grid search explores every combination: 3 * 3 * 2 = 18. For each combination, it does 5-Fold cross validation. 18 * 5 = 90 model fits."
    },
    {
        question: "If TP3 resulted in Logistic Regression getting an AUC of 0.84, and a tuned Random forest getting an AUC of 0.86, which model is statistically considered better at structurally ordering the predicted probabilities?",
        options: ["Logistic Regression", "Tuned Random Forest", "They are exactly identical", "Cannot be determined"],
        answer: 1,
        difficulty: "LOW",
        explanation: "A higher AUC (Area Under the Curve) means the model has a better measure of separability between the classes."
    },
    {
        question: "True or False: According to overall conclusions of such Machine Learning processes (like TP3), complex models (Random Forest) always universally completely outperform simple models (Logistic Regression).",
        options: ["True", "False"],
        answer: 1,
        difficulty: "LOW",
        explanation: "False. Sometimes simple models like Logistic Regression perform very closely to complex ones while being much faster and more interpretable. They don't 'always universally' completely outperform."
    }
];
