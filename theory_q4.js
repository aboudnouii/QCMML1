const qPart4 = [
    {
        question: "Why does a solitary, unconstrained Decision Tree almost invariably succumb to overfitting in theoretical applications?",
        options: ["Because it ignores all features except one.", "Because without depth limits, it will continue geometrically splitting the feature space until every single leaf node contains exactly 1 unique training sample, essentially memorizing the noise entirely.", "Because its mathematical splits are completely random.", "Because it inherently computes distances wrong."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Trees partition space iteratively. Unconstrained, they create hyperspecific rules (e.g. 'if age>25 and fare<10 and embarked='S'...') until they isolate every single point, yielding 100% training accuracy but massive variance."
    },
    {
        question: "What specific metric does a standard Decision Tree theoretically minimize to decide exactly where to draw its threshold split lines?",
        options: ["The distance between coordinates.", "The mean squared error strictly.", "Impurity mathematical metrics, typically measuring 'Gini Impurity' or maximizing 'Information Gain' (Entropy reduction).", "Log loss probabilities."],
        answer: 2,
        difficulty: "HIGH",
        explanation: "At each split, the tree evaluates all features and all values. It calculates the Entropy/Gini of the split halves, choosing the threshold that separates the classes most cleanly (highest purity)."
    },
    {
        question: "The Random Forest algorithm is considered an 'Ensemble' method. What does Bagging (Bootstrap Aggregation) mathematically do to reduce variance?",
        options: ["It replaces all algorithms with a deep neural network.", "It mathematically averages the independent predictions of numerous high-variance, deep trees. Because the trees are trained on stochastic subsets, their individual noisy errors average out structurally to zero.", "It drops all incorrect predictions from the final output.", "It forces every tree to be exactly identical."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "A single tree has High Variance. If you build 100 trees on slightly randomized data subsets, their individual structural errors are somewhat random. Mathematically, the average of random noise converges to zero, revealing the true robust signal."
    },
    {
        question: "Apart from bootstrapping row data, what critical process does a Random Forest mathematically perform during column selection that differentiates it from normal bagging?",
        options: ["It selects a purely random subset of Features at each internal split, physically forcing trees to be structurally decorrelated from each other by ignoring identical dominant features.", "It scales columns automatically.", "It drops columns entirely from the start.", "It only selects continuous features."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "If one feature is incredibly dominant, normal bagging would cause every tree to split on it first, making all trees highly correlated. By locking out random features at each split, the Forest explores entirely different structural paths."
    },
    {
        question: "In the context of the K-Nearest Neighbors (KNN) algorithm, why is it theoretically classified as 'Lazy Learning'?",
        options: ["Because it requires immense mathematical training time.", "Because it never actually 'learns' a mathematical formula or weight boundary during Training. It merely stores reality, deferring all physical distance calculations until Inference/Test time.", "Because it drops missing values automatically.", "Because it only uses 1 feature at a time."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Unlike Logistic Regression which distills gigabytes of data into a tiny equation during `.fit()`, KNN's `.fit()` simply memorizes the data array. During prediction, it must calculate geometric distances between the new point and every memorized point."
    },
    {
        question: "What is the theoretical effect on the Decision Boundary geometry of K-Nearest Neighbors if you decrease 'K' from 50 down to 1?",
        options: ["The boundary becomes a perfectly straight line.", "The boundary becomes insanely jagged and complex, wrapping immediately around every single localized data point (Highest Variance / Overfitting).", "The boundary becomes entirely smooth (High Bias).", "The algorithm stops functioning."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "If K=1, the classification of a region belongs solely to whichever 1 training point it touches. This creates ultra-complex Voronoi tessellation borders that memorize isolated noise points completely."
    },
    {
        question: "Why is 5-Fold Cross-Validation (CV) theoretically vastly superior to a single 80-20 Train-Test split, especially on smaller sample sizes?",
        options: ["Because it forces neural networks to compile faster.", "A single split might randomly put all 'easy' or 'hard' data into the test set, giving a skewed illusion of accuracy. CV systematically cycles the test block, mathematically proving algorithmic stability across the entire dataset structure.", "It entirely eliminates bias.", "It runs the training completely unsupervised."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "CV ensures every single data point gets to be in the Test set exactly once. You compute the Mean accuracy across the 5 cycles, capturing the variance of the model's performance on subsets, yielding a highly conservative true-metric."
    },
    {
        question: "What is universally considered the primary computational theoretical disadvantage of employing GridSearchCV for hyperparameter optimization?",
        options: ["It reduces accuracy.", "It forces you to use Linear Models only.", "Combinatorial Explosion: Evaluating 3 features with 5 variations each over 5 CV folds mathematically requires 5 x 5 x 5 x 5 = 625 complete model training cycles, scaling disastrously.", "It cannot handle continuous data."],
        answer: 2,
        difficulty: "LOW",
        explanation: "GridSearchCV is an exhaustive brute-force algorithm. It guarantees finding the best combination within the grid, but the computational time grows exponentially with every new parameter added."
    },
    {
        question: "In standard mathematical ML definitions, what is the exact difference between a 'Model Parameter' and a 'Hyperparameter'?",
        options: ["There is no difference.", "Parameters are set by humans (e.g. tree depth); Hyperparameters are learned by the algorithm from data directly (e.g. regression slope).", "Parameters are learned autonomously by the math directly from data (e.g. weights, slopes); Hyperparameters are structural boundary rules defined explicitly by the engineer before training starts.", "Hyperparameters only apply to GPUs."],
        answer: 2,
        difficulty: "HIGH",
        explanation: "The slope (y=mx+b) 'm' is a parameter the model finds on its own via gradients. The 'Maximum Depth' of a tree is a hyperparameter governed by the human engineer to restrict the math."
    },
    {
        question: "Structurally, what happens to the Bias-Variance tradeoff of a Random Forest if you decrease the `max_depth` hyperparameter from None (infinite) to 5?",
        options: ["Variance increases massively.", "Variance decreases (stopping overfitting), but Bias increases mathematically (risking underfitting if it can't capture the true depth of the pattern).", "Both bias and variance hit exactly 0.", "There is no theoretical change."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Restricting tree depth physically stops the trees from carving out hyperspecific noise leaves. This drops Variance. However, if the true relationship required 10 logic steps, stopping at 5 means the model fails to capture the true signal (increases Bias)."
    },
    {
        question: "In an ROC Curve analysis, the y-axis is the True Positive Rate (TPR). What is the theoretical mathematical alternate name for TPR?",
        options: ["Recall (Sensitivity)", "Precision", "Negative Predictive Value", "Accuracy"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "TPR is exactly identical to Recall. It represents the proportion of actual positives that were correctly mathematically identified. (TP / (TP + FN))."
    },
    {
        question: "In an ROC Curve analysis, what does the x-axis, the False Positive Rate (FPR), conceptually measure?",
        options: ["The number of false negatives.", "Of all the ACTUAL Negatives that exist in reality, what structural percentage did the model incorrectly guess as Positive?", "The false positive count divided by true positive count.", "Precision minus Recall."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "FPR = FP / (FP + TN). It is the mathematical failure rate on the Negative class. If there are 100 actual non-survivors, and the model falsely claims 20 survived, the FPR is 20%."
    },
    {
        question: "What theoretical state is structurally represented by the extreme top-left corner coordinate (0, 1) on an ROC graph?",
        options: ["A completely random model guessing blindly.", "The model classifying every single item as Positive, hitting 100% TPR and 100% FPR.", "The geometric impossibility of perfection: Zero False Positives and 100% True Positives simultaneously.", "A Logistic regression crash."],
        answer: 2,
        difficulty: "LOW",
        explanation: "The top-left corner means X is 0 (FPR is 0%) and Y is 1 (TPR is 100%). This represents a perfect mathematical discriminator that catches every positive case without ever making a false positive error."
    },
    {
        question: "Why do we theoretically calculate the Area Under the Curve (AUC) instead of just comparing ROC curves visually?",
        options: ["Because visual curves are not supported in Jupyter.", "AUC distills the complex 2-dimensional probability discrimination capability across ALL possible classification thresholds into a single overarching scalar metric for robust comparative ranking.", "Because AUC calculates execution time.", "AUC transforms to Neural Networks natively."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "ROC plots multiple points based on moving the probability threshold from 0.0 to 1.0. AUC integrates that geometry to yield one number representing the overall structural capability to rank positives above negatives."
    },
    {
        question: "What does an AUC score of exactly 0.50 structurally indicate about the model?",
        options: ["It predicts correctly 50% of the time, making it average.", "Its probability ranking capability is perfectly orthogonal to reality; it possesses zero discrimination power and is mathematically equivalent to flipping a coin.", "It is underfitting.", "It handles imbalanced data perfectly."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "An AUC of 0.5 means the ROC curve tracks the diagonal line. For any random positive sample and random negative sample, the model is completely unable to distinguish which is which probabilistically."
    },
    {
        question: "What physical mechanism in Logistic Regression allows us to actually plot the multiple threshold points of an ROC curve?",
        options: ["The fact that it natively outputs discrete 0s and 1s directly.", "The fact that it mathematically outputs floating-point probabilities (e.g. 0.72) via the Sigmoid function, allowing us to slide the 'Yes/No' decision boundary from 0.00 to 1.00 iteratively.", "The regression coefficients themselves.", "The max_iter parameter."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Models like raw SVMs output direct boundaries. Logistic Regression, however, translates everything to probability scalars. We can say 'mark positive if probability > 0.1', plot it, then 'if > 0.2', plot it... generating the curve."
    },
    {
        question: "True or False: If Model A has a higher absolute test Accuracy than Model B, Model A will invariably and mathematically always possess a higher AUC-ROC score.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "False. Accuracy evaluates a specific snapshot at a single fixed threshold (usually 0.50). AUC evaluates the global architecture across *all* thresholds simultaneously. Model B might have worse accuracy at 0.5, but superior overall separability architecture."
    },
    {
        question: "When applying `scoring='accuracy'` vs `scoring='roc_auc'` during cross-validation, what underlying theoretical assumption are we changing?",
        options: ["Accuracy assumes classes are perfectly balanced and thresholds are strictly 0.5; ROC_AUC assumes we care about global class separation regardless of the specific optimal deployment threshold.", "ROC_AUC speeds up training.", "Accuracy is for linear models only.", "ROC_AUC requires continuous targets."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "Accuracy is an inflexible point-estimate relying entirely on the default 0.5 threshold logic. ROC-AUC looks at the model's structural probability sorting, making it structurally superior for analyzing imbalanced models."
    },
    {
        question: "What happens mathematically if an algorithm gets an AUC-ROC score of exactly 0.0?",
        options: ["The algorithm crashed.", "The algorithm is functionally perfect but is mapping the probabilities completely backward (e.g. assigning 99% survival probability to guaranteed non-survivors). You could simply invert its predictions to achieve a 1.0.", "The algorithm predicts zero variables.", "Data is missing uniformly."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "An AUC of 0.0 implies perfect separability, but the labels are geometrically reversed. It ranks every single negative example higher than every single positive example."
    },
    {
        question: "In theoretical probability mapping, what issue does 'Log Loss' (binary cross-entropy) heavily penalize that traditional Error Rates ignore?",
        options: ["It penalizes the model for running slowly.", "It strictly penalizes algorithmic over-confidence. Gaining an accuracy point while being 51% sure yields a different loss compared to gaining an accuracy point while being 99% sure.", "It ignores False Positives entirely.", "It requires a tree structure."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Accuracy/Error simply looks at right/wrong. Log-Loss heavily analyzes the probability magnitude. If the truth is 1, a prediction of 0.51 and 0.99 both grant 'Accuracy', but 0.51 incurs vastly higher Log-Loss."
    },
    {
        question: "In Random Forest hyperparameter tuning, if you increase `min_samples_split` from 2 to 20, what structural effect are you theoretically designing?",
        options: ["You are forcing the tree algorithms to stop branching entirely unless a node contains at least 20 samples, structurally halting deep hyperspecific noisy partitions (Increasing Bias, Dropping Variance).", "You are forcing the model to split the data 20 times geometrically.", "You are creating 20 features.", "You are dropping 20 rows of data from tracking."],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "min_samples_split dictates how much data a node must possess to be allowed to halve again. Raising it forces 'wider, shallower' logic networks, preventing overfitting on small 2-sample noise points."
    },
    {
        question: "What theoretical characteristic prevents generic K-Means Clustering from being utilized efficiently to predict 'Survived' based on the feature sets provided in TP3?",
        options: ["K-means only predicts continuous targets.", "K-means is an Unsupervised mathematical learning algorithm. It clusters point distances blindly and possesses entirely no mathematical awareness of the actual labeled target (y) vectors during its gradient optimization.", "K-means requires text data exclusively.", "K-Means is a Deep Learning architecture."],
        answer: 1,
        difficulty: "LOW",
        explanation: "Algorithms like Logistic Regression directly use the 'Survived' column to adjust their error curves (Supervised). K-Means ignores labels entirely and just clumps geometric distances blindly (Unsupervised)."
    },
    {
        question: "Geometrically, what does Logistic Regression's mathematical formula physically define inside the multi-dimensional feature space?",
        options: ["A hyper-sphere encapsulating the core features.", "A singular linear hyperplane boundary that geometrically partitions the n-dimensional space into two halves.", "A sequence of orthogonal geometric boxes (hyperrectangles).", "A continuous polynomial loop."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Because the equation is `w1x1 + w2x2 + b`, it generates a perfectly flat multi-dimensional surface (a line in 2D, plane in 3D, hyperplane in nD) slicing the universe of data into positive and negative hemispheres."
    },
    {
        question: "What geometric structure does a Decision Tree draw to separate classes in a 2-dimensional feature graph?",
        options: ["A smooth linear slope cutting diagonally.", "A continuous circular boundary.", "A series of strictly axis-parallel rectangular boundaries (orthogonal lines) mapping out step-like borders.", "A logarithmic curve."],
        answer: 2,
        difficulty: "HIGH",
        explanation: "Trees split one feature at a time at specific points (e.g. `X > 5`). On a 2D graph, this translates exclusively to vertical and horizontal lines forming bounding boxes, never diagonal slopes."
    },
    {
        question: "If TP3 theoretically concluded that Logistic Regression scored 0.81 AUC and Random Forest scored 0.86 AUC, what structural disadvantage must the engineer still weigh before unconditionally deploying Random Forest?",
        options: ["Random forests invariably delete user data.", "Random Forest architectures are 'Black Boxes' requiring geometrically more memory and inference time, making their specific multidimensional rule networks exceedingly difficult to explain or interpret compared to a single simple mathematical equation.", "Logistic Regression algorithms cost money to license.", "Random Forests cannot be run locally."],
        answer: 1,
        difficulty: "LOW",
        explanation: "A major theoretical tradeoff is Interpretability vs Complexity. A logistic regression equation is transparent; you can read the weights directly. Analyzing the interactions of 200 random deep decision trees is functionally opaque to humans."
    },
    {
        question: "True or False: The 'Curse of Dimensionality' implies that if you have 10 features, you need exactly 10 times more rows of data to maintain mathematically identical sample density as 1 feature.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "False. The volume expands exponentially, not linearly. If you add dimensions without bounds, you require exponentially more data rows to fill the feature space adequately for distance algorithms to function."
    },
    {
        question: "In evaluation theory, if you evaluate your trained model directly on the exact same data it trained on, the resulting metric is called:",
        options: ["Validation Loss.", "Generalization Error.", "Resubstitution Error (Training Accuracy), representing a highly biased theoretical illusion of true field capability.", "Precision Recall Margin."],
        answer: 2,
        difficulty: "LOW",
        explanation: "Testing on training data gives Training Accuracy (Resubstitution Error). It demonstrates exactly how well the model memorized the past, offering virtually zero mathematical proof of its ability to predict the future unseen reality."
    }
];
