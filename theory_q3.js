const qPart3 = [
    {
        question: "What is the theoretical principle behind using the VarianceThreshold feature selector to remove constant vectors?",
        options: ["Constant vectors use too much memory in Python.", "A mathematically constant feature offers zero information entropy regarding the variance of the target label. It fundamentally cannot differentiate classes.", "Algorithms will crash immediately if a column is constant.", "Constant columns always have a mean of zero."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Information Theory states that variance is information. If a feature is the exact same for every data point, it contains zero information to help split the data. It is mathematically useless."
    },
    {
        question: "When applying `SelectKBest`, you rely on a statistical test. What does the `Chi-Square (chi2)` test fundamentally measure in feature selection?",
        options: ["The geometric Euclidean distance between vectors.", "The linear slope of the feature against the target.", "The statistical dependence/independence between a non-negative feature and the target classes via expected vs observed frequencies.", "The standard deviation of the feature."],
        answer: 2,
        difficulty: "HIGH",
        explanation: "Chi-Square compares the 'observed' frequency distribution of a feature against the 'expected' distribution if it were completely independent of the target. High Chi2 score = highly dependent on the target."
    },
    {
        question: "Why should `Chi-Square` only be applied to non-negative features?",
        options: ["Because negative numbers crash pandas.", "Because Chi-Square observes frequencies/counts of categorical elements occurring, and you cannot have a negative count or mathematically calculate expected frequencies properly with negatives.", "Because negative target labels do not exist.", "Because squaring negative numbers makes them positive, creating duplicate data."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Chi-Square is rooted in frequency distributions (how often something happens). You can't observe something happening -5 times. The math expects non-negative inputs."
    },
    {
        question: "What is the 'Curse of Dimensionality' that Feature Selection methods like SelectKBest attempt to theoretically solve?",
        options: ["Adding dimensions geometrically expands the structural volume of the feature space. Data becomes uniformly sparse, making distance-based classification indistinguishable and causing massive overfitting.", "More dimensions cause neural networks to output matrices instead of vectors.", "High dimensions cause features to become negatively correlated.", "It makes the model underfit completely."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "As you add features (dimensions), the mathematical space expands exponentially. The amount of data you need to fill that space grows exponentially too. Without enough data, everything is far apart, and the model merely memorizes the training data (overfits)."
    },
    {
        question: "In the theoretical framework of Logistic Regression, what is the curve called that transforms linear predictions (from -infinity to +infinity) into bounded probabilities (0 to 1)?",
        options: ["The ReLU function.", "The Gaussian distribution.", "The Sigmoid (Logistic) Function.", "The Decision Boundary."],
        answer: 2,
        difficulty: "LOW",
        explanation: "The sigmoid function equation `1 / (1 + e^-x)` squashes output strictly between 0 and 1, making it perfect for probability mapping."
    },
    {
        question: "True or False: Logistic Regression mathematically minimizes the Mean Squared Error (MSE) to find its optimal weights.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "False. Logistic Regression minimizes the Log-Loss (Cross-Entropy). Minimizing MSE for classification creates a non-convex loss function with local minima that gradient descent fails on."
    },
    {
        question: "Why does Logistic Regression serve as an excellent 'Baseline' model in practical machine learning comparisons against Random Forests?",
        options: ["Because it has exactly zero variance.", "Because it perfectly handles non-linear relationships natively.", "Because it represents a fast, interpretable, linear probability boundary that acts as a benchmark to see if complex non-linear models actually add any real value.", "Because it's the only model that outputs probabilities."],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "If a highly complex Random Forest gets 81% accuracy, and a simple interpretable Logistic Regression gets 80%, the added complexity might not be worth the 1%. The baseline establishes the floor."
    },
    {
        question: "What does an L2 Regularization term (Ridge penalty) do theoretically inside a Logistic Regression model?",
        options: ["It forces all weights to become exactly zero, acting as feature selection.", "It adds the squared magnitude of coefficients to the loss function, penalizing massive parameter weights and preventing the model from 'over-trusting' any single feature, thus reducing overfitting.", "It increases the number of dimensions automatically.", "It converts the output to discrete classes."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "L2 adds `lambda * sum(weights^2)`. If a weight becomes huge (overfitting to noise), the loss explodes. The model is forced to keep weights small and distributed smoothly."
    },
    {
        question: "What is the theoretical definition of Model 'Bias' in the Bias-Variance tradeoff?",
        options: ["Algorithmic prejudice against certain groups.", "The error introduced by approximating a highly complex real-world problem with a too-simple mathematical system (e.g. trying to fit a curved relationship with a straight line).", "The standard deviation of model predictions.", "The random noise in the labels."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "High bias = Underfitting. The model makes strong assumptions (e.g., assuming a relationship is perfectly linear) and systematically fails to capture true complex patterns."
    },
    {
        question: "What is the theoretical definition of Model 'Variance' in the Bias-Variance tradeoff?",
        options: ["The variance calculation of the input features.", "The amount that the model's structure/predictions would wildly change if estimated using entirely different training data (e.g. hypersensitivity to the noise/specifics of the training set).", "The bias calculation.", "The squared error sum."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "High variance = Overfitting. The model memorizes the training data so heavily that exposing it to a slightly different dataset causes its structure to collapse and change entirely."
    },
    {
        question: "When evaluating a model, if the Training Accuracy is 99.5% but the Test Accuracy is 65.0%, what explicit theoretical failure state has occurred?",
        options: ["Underfitting (High Bias).", "Overfitting (High Variance).", "Optimal Convergence.", "Data Under-representation."],
        answer: 1,
        difficulty: "LOW",
        explanation: "The model memorized the specific noise of the training data perfectly (99.5%), but mathematically failed to generalize the true underlying pattern to unseen data (65%)."
    },
    {
        question: "Why should we technically NOT trust raw Accuracy alone when evaluating a model on an imbalanced dataset (e.g. 99% non-fraud, 1% fraud)?",
        options: ["Because accuracy cannot handle probabilities.", "Because accuracy requires numbers between 0 and 100.", "Because a completely useless model mathematically achieves 99% accuracy by simply guessing 'non-fraud' for everything, hiding its absolute failure to detect any fraud.", "Because the test set requires stratification."],
        answer: 2,
        difficulty: "LOW",
        explanation: "Accuracy is (Correct Predictions / Total). If the structure is 99/1, predicting the majority class exclusively nets 99% accuracy despite 0% capability of minority detection."
    },
    {
        question: "In the context of the Confusion Matrix, what does a False Positive theoretically represent?",
        options: ["The model correctly identifying a positive case.", "The model failing to identify a positive case (predicting negative when it's positive).", "The model predicting a positive outcome for an instance that is actually negative in reality (Type I Error).", "The model predicting a negative outcome when the truth is negative."],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "False Positive = 'False Alarm'. E.g. Predicting a healthy patient has a disease. It statistically signifies an over-sensitive model boundary."
    },
    {
        question: "What does 'Precision' answer conceptually regarding the model's predictions?",
        options: ["Out of all the actual positive cases in reality, how many did the model find?", "Out of all the instances the model *claimed* were positive, what proportion were actually truly positive?", "What is the overall ratio of correct predictions?", "How many false negatives occurred?"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Precision evaluates the 'trustworthiness' of a positive claim. TP / (TP + FP). If I predict 10 people survived, and only 2 did, my Precision is terrible (20%)."
    },
    {
        question: "What does 'Recall' (Sensitivity) answer conceptually regarding the model's capabilities?",
        options: ["Out of all the actual positive cases that physically exist, what proportion did the model manage to find/catch?", "Out of all predictions, how many were right?", "How many false positives occurred?", "What is the harmonic mean?"],
        answer: 0,
        difficulty: "HIGH",
        explanation: "Recall evaluates 'detection capability'. TP / (TP + FN). If 100 people actually survived in reality, and the model only caught 50, its Recall is 50%."
    },
    {
        question: "True or False: You can always maximize both Precision and Recall simultaneously perfectly.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "False. There is a fundamental mathematical tradeoff. To increase Recall (catch everything), you widen the net, grabbing more False Positives (dropping Precision). To increase Precision (be absolutely sure), you tighten the net, missing true positives (dropping Recall)."
    },
    {
        question: "Why is the F1-Score calculated as the 'Harmonic Mean' of Precision and Recall rather than a simple Arithmetic Mean?",
        options: ["Because harmonic means compute faster on CPUs.", "Because an arithmetic mean would allow a model with 100% Precision and 0% Recall to look artificially decent (50%), whereas a Harmonic Mean punishes extreme imbalances and drops drastically if either metric approaches zero.", "Because F1-score relies on distances.", "Because arithmetic means are not valid on ratios."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "The formula `2 * (P * R) / (P + R)` geometrically requires both terms to be high to get a high score. A 1.0 and 0.0 arithmetic average is 0.5. Their harmonic mean is 0.0."
    },
    {
        question: "What is the theoretical purpose of splitting data strictly into Train and Test sets?",
        options: ["To slow down the algorithm.", "To simulate an out-of-sample environment mathematically, allowing us to gauge how the learned structural weights will perform on strictly unseen future data.", "To give the variance threshold something to work on.", "To maximize the bias of the model."],
        answer: 1,
        difficulty: "LOW",
        explanation: "You must prove that the model learned a generalizable mathematical truth, rather than just memorizing the specific numbers it saw. A Test block mathematically proves generalization capability."
    },
    {
        question: "If dropping 5 out of 10 features via feature selection results in the exact same test accuracy, what does this imply theoretically?",
        options: ["The 5 dropped features contained pure noise or were fully collinear/redundant with the kept features, therefore offering zero unique predictive vectors.", "The model is underfitting.", "The 5 dropped features were the most important.", "Accuracy is broken."],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "If you remove half your data and performance holds, that data contained no unique structural signal. Deleting it saves compute and prevents the curse of dimensionality."
    },
    {
        question: "What does the assumption of 'Independent and Identically Distributed' (I.I.D.) mean when we randomly train_test_split the dataset?",
        options: ["Both sets are completely identical row for row.", "That the probability distribution mapping inputs to outputs is mathematically the same in the test set as it is in the training set.", "That the data contains no identical rows.", "That the features do not interact."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "We assume the laws of reality don't change between train and test. If the training set is all rich people, and the test set is all poor people, IID is violated and ML fails because the structural distributions differ."
    },
    {
        question: "In Logistic Regression, what happens to the decision boundary mathematically if the probability threshold is moved from 0.5 to 0.8?",
        options: ["The model requires much higher mathematical certainty to predict a positive class, reducing False Positives (raising Precision) but increasing False Negatives (lowering Recall).", "The model becomes linearly independent.", "The model predicts positive for almost everything.", "The coefficients double in size."],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "Moving the threshold up makes the model strictly conservative. It only predicts 1 if it is >80% sure. This kills Recall but spikes Precision."
    },
    {
        question: "True or False: Chi-Square feature selection observes multi-feature interactions, allowing it to keep features that are weak alone but strong when combined.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "False. SelectKBest evaluating Chi2 is a univariate method. It tests each feature completely independently against the target. It cannot theoretically see multi-feature combining effects."
    },
    {
        question: "If a dataset has highly overlapping class distributions (the data point clouds mix completely in 3D space), what happens to a Linear model's accuracy theoretically?",
        options: ["It hits 100%.", "It will be hard capped at a relatively low ceiling because there exists no perfect linear hyperplane that can geometrically slice through and separate the classes perfectly.", "The model will crash.", "It will automatically build non-linear trees."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Linear models draw straight lines/flat planes. If classes are tangled like yarn, a straight knife cannot separate the colors. This is called a non-linear separable problem."
    },
    {
        question: "What does a model's 'Support' metric inside a classification report mathematically indicate?",
        options: ["The weight of the coefficients.", "How much computational GPU memory was required.", "The absolute structural count of actual true occurrences of each class in the specified dataset testing block.", "The accuracy of the specific class."],
        answer: 2,
        difficulty: "LOW",
        explanation: "Support is simply the sample size physically existing in the test set for that specific class (e.g., 50 fraud cases, 1000 non-fraud cases). It helps identify class imbalances."
    },
    {
        question: "What happens to the Logistic Loss function mathematically if the model predicts a probability of 0.001 for a sample, but the true label is 1?",
        options: ["The loss is zero.", "The loss logarithmically explodes toward infinity, heavily penalizing the model for being absolutely confident in a completely wrong answer.", "The loss becomes negative.", "The gradient descent stops immediately."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Log-loss evaluates ` -log(prediction)`. And `-log(0.001)` is massive. The model is brutally punished for being confidently wrong."
    },
    {
        question: "Why might Logistic Regression completely fail to converge its weights using gradient descent if the features are heavily Multicollinear?",
        options: ["Because it causes the loss landscape to become flat in infinite directions. The model cannot mathematically resolve which correlated feature deserves the weight, causing the gradients to bounce wildly around.", "Because multicollinearity makes all weights zero.", "Because the target becomes purely Gaussian.", "Because the sigmoid function reverses."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "If height in cm and height in inches are included, their correlation is ~1.0. The math cannot decide whether the weight should be 10 on cm and 0 on inches, or vice-versa, causing optimization instability."
    }
];
