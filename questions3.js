const qPart3 = [
    {
        question: "In TP3, what is the target variable (the one we want to predict) separated from the dataset?",
        options: ["age", "fare", "survived", "pclass"],
        answer: 2,
        difficulty: "LOW",
        explanation: "The notebook strictly uses `y = df['survived']` as the target label."
    },
    {
        question: "What does the `VarianceThreshold` feature selector do in TP3?",
        options: ["Removes features with low/zero variance (constant values)", "Removes features highly correlated with others", "Removes features with missing values", "Selects features with the highest variance"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "VarianceThreshold removes all features whose variance doesn't meet some threshold. By default (threshold=0), it removes features that have the same value in all samples."
    },
    {
        question: "According to the TP3 notebook, how many constant features were removed using VarianceThreshold?",
        options: ["0", "2", "5", "10"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "The text/output of Q1 indicates that VarianceThreshold removed 2 constant engineered features."
    },
    {
        question: "When initializing VarianceThreshold to remove zero-variance features, what parameter is used?",
        options: ["threshold=0", "variance=0", "remove_zeros=True", "None parameter required"],
        answer: 0,
        difficulty: "LOW",
        explanation: "The specific instantiation is `selector = VarianceThreshold(threshold=0)`."
    },
    {
        question: "After transforming the dataframe with VarianceThreshold, it becomes a Numpy array. Which function is used to get the names of the retained columns?",
        options: [".columns()", ".get_feature_names()", ".get_support()", ".list_features()"],
        answer: 2,
        difficulty: "HIGH",
        explanation: "To rebuild the DataFrame, `selector.get_support()` is used to get a boolean mask of the selected columns."
    },
    {
        question: "Which statistical test was used with `SelectKBest` in TP3 for feature selection?",
        options: ["f_regression", "chi2 (Chi-Square)", "mutual_info_classif", "ANOVA"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "The code explicitly imports and uses `chi2` for SelectKBest."
    },
    {
        question: "What was the parameter 'k' set to when calling `SelectKBest` in TP3?",
        options: ["k=all", "k=5", "k=10", "k=20"],
        answer: 2,
        difficulty: "LOW",
        explanation: "In Q2, the notebook states 'Select the top 10 features' using `k=10`."
    },
    {
        question: "True or False: SelectKBest was chosen because of its ability to select the strongest continuous and categorical features based on linear regression metrics.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "False. `chi2` specifically tests independence between non-negative features and the class label, mostly suited for categorical or appropriately scaled variables, not linear regression."
    },
    {
        question: "For model evaluation, what was the test_size ratio used in `train_test_split`?",
        options: ["0.2 (20%)", "0.3 (30%)", "0.5 (50%)", "0.1 (10%)"],
        answer: 0,
        difficulty: "LOW",
        explanation: "The code uses `test_size=0.2`."
    },
    {
        question: "What parameter in `train_test_split` ensures that the data is split identically if the code is run multiple times?",
        options: ["shuffle=False", "random_seed=1", "random_state=42", "fixed=True"],
        answer: 2,
        difficulty: "LOW",
        explanation: "Using `random_state=42` ensures reproducibility."
    },
    {
        question: "Which Baseline Model was the first to be trained in TP3?",
        options: ["Random Forest", "Support Vector Machines", "K-Nearest Neighbors", "Logistic Regression"],
        answer: 3,
        difficulty: "LOW",
        explanation: "Logistic Regression is used as the foundational baseline model in Q4."
    },
    {
        question: "In the instantiation `LogisticRegression(max_iter=200)`, what does `max_iter` do?",
        options: ["Maximum number of trees to build", "Maximum number of iterations taken for the solvers to converge", "Maximum features allowed", "Sets the regularizer limit"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "It sets the maximum iterations for optimization algorithms to converge."
    },
    {
        question: "Which of these metric functions was NOT explicitly referenced to evaluate the baseline model's classification performance?",
        options: ["accuracy_score", "mean_squared_error", "confusion_matrix", "classification_report"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Mean Squared Error is for regression tasks. TP3 explicitly used Accuracy, Confusion Matrix, and Classification Report."
    },
    {
        question: "Based on the TP3 notebook, what was the rough Test Accuracy for the Logistic Regression baseline model?",
        options: ["~50%", "~80%", "~95%", "100%"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "The notebook output showed ~0.804 (80.4%) test accuracy for Logistic Regression."
    },
    {
        question: "How did the notebook evaluate if the Logistic Regression model was overfitting?",
        options: ["By validating checking cross-validation standard deviation", "By plotting the learning curve", "By comparing the training accuracy and test accuracy", "It didn't evaluate overfitting"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Q4 asks to compare Training accuracy (~81.2%) vs Test accuracy (~80.4%), noting they are close, meaning no significant overfitting."
    },
    {
        question: "True or False: If Training Accuracy = 99% and Test Accuracy = 65%, the model is suffering from underfitting.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "False. That is the classic definition of Overfitting, not underfitting."
    },
    {
        question: "What does the `confusion_matrix` typically plot or return in a binary classification like Titanic (Survived 0/1)?",
        options: ["A 2x2 matrix containing True Positives, True Negatives, False Positives, False Negatives", "A single accuracy number", "A bar chart of probabilities", "A list of feature arrays"],
        answer: 0,
        difficulty: "LOW",
        explanation: "A confusion matrix for 2 classes is a 2x2 matrix (TP, TN, FP, FN)."
    },
    {
        question: "Which library provides all these metric functions (accuracy, confusion matrix) in TP3?",
        options: ["sklearn.model_selection", "sklearn.metrics", "sklearn.evaluation", "scipy.stats"],
        answer: 1,
        difficulty: "LOW",
        explanation: "They are imported from `sklearn.metrics`."
    },
    {
        question: "What specific visualization function is used in `sklearn` to produce a nice heatmap image of the confusion matrix?",
        options: ["DecisionBoundaryDisplay", "sns.confusion_matrix()", "ConfusionMatrixDisplay.from_predictions()", "plot_matrix()"],
        answer: 2,
        difficulty: "HIGH",
        explanation: "Modern Sklearn uses `ConfusionMatrixDisplay.from_predictions(y_test, y_pred, cmap='Blues')` as shown in similar implementations and standard practice."
    },
    {
        question: "In the Logistic Regression classification report, what metric shows the ratio of true positive predictions to total predicted positives?",
        options: ["Recall", "Precision", "F1-Score", "Accuracy"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Precision is calculated as TP / (TP + FP)."
    },
    {
        question: "In the classification report, what metric represents the harmonic mean of Precision and Recall?",
        options: ["F1-Score", "Support", "Macro Average", "R2 Score"],
        answer: 0,
        difficulty: "LOW",
        explanation: "F1-Score balances Precision and Recall."
    },
    {
        question: "If a model predicts 0 passengers survived accurately, but correctly predicts all passengers who died, its recall for class '1 (Survived)' is:",
        options: ["0.0", "1.0", "0.5", "Undefined"],
        answer: 0,
        difficulty: "HIGH",
        explanation: "Recall for class 1 is TP / (TP+FN). If it never predicts 1 correctly, TP=0, so Recall is 0.0."
    },
    {
        question: "Which function must be executed on a scaler or selector object applied to the TRAINING data, but NOT the testing data to avoid data leakage?",
        options: [".transform()", ".fit()", ".predict()", ".evaluate()"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "You `.fit()` or `.fit_transform()` the training data, but strictly only `.transform()` on test data."
    },
    {
        question: "True or False: Using SelectKBest with `k=10` ensures better accuracy unconditionally vs using all features.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "False. Feature selection reduces noise and dimensionality, but doesn't guarantee better accuracy unconditionally. It often requires tuning."
    },
    {
        question: "After feature selection, the number of input variables sent to the Logistic Regression model is:",
        options: ["Just 'survived'", "20 features", "Exactly 10 features", "All original non-constant features"],
        answer: 2,
        difficulty: "LOW",
        explanation: "SelectKBest was configured with k=10, leaving 10 features."
    },
    {
        question: "When applying `train_test_split`, what format are the resulting output variables natively?",
        options: ["Pandas Series / DataFrames (if inputs were Pandas)", "Numpy arrays exclusively", "Python lists", "Dictionaries"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "They retain their original Pandas DataFrame/Series structure unless a numpy transform was done right before."
    }
];
