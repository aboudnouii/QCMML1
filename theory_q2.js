const qPart2 = [
    {
        question: "Theoretically, why does algorithm convergence speed up dramatically when features are normalized to similar scales?",
        options: ["Because the loss landscape becomes more symmetric, allowing Gradient Descent to step directly toward the minimum without oscillating.", "Because numbers closer to 0 consume less RAM.", "Because unscaled numbers cause integer overflow.", "Because machine learning algorithms cannot mathematically process numbers larger than 1.0."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "In an unscaled loss landscape, the contours become elongated ellipses. Gradient descent bounces back and forth across elongations. Scaled features make contours circular, allowing a direct path to the minimum."
    },
    {
        question: "Why do 'tree-based' models (like Decision Trees or Random Forests) theoretically NOT require continuous feature scaling (like StandardScaler)?",
        options: ["Because they automatically apply a scaler internally during fit.", "Because trees create orthogonal splits based on absolute value thresholds, ignoring relative magnitudes between independent features.", "Because trees only work with categorical data.", "Because tree algorithms divide every numeric column by its maximum."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "A Decision Tree simply searches for a threshold value 'if X > 50' to split data. It doesn't calculate distances or gradients between features, making it entirely invariant to monotonous transformations."
    },
    {
        question: "What is the theoretical reasoning behind creating a 'Binning' threshold at 'Age=18' instead of 'Age=17'?",
        options: ["Algorithms prefer even numbers.", "To perfectly normalize the distribution geometrically.", "To inject domain knowledge representing a socio-behavioral phase change (Child vs Adult) that a purely mathematical linear model might miss.", "To prevent overfitting entirely."],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Binning is a feature engineering step that introduces non-linear human domain knowledge to help models capture qualitative state changes (like legal adulthood affecting survival conditions)."
    },
    {
        question: "When dealing with extreme positive skew (long right tail), applying a logarithmic transformation intuitively does what mathematically?",
        options: ["Stretches out the lower values and compresses the high extreme values, pulling the distribution closer to a Normal (Gaussian) shape.", "Reverses the sorting of the array.", "Converts the data to boolean True/False.", "Eliminates the mean entirely."],
        answer: 0,
        difficulty: "LOW",
        explanation: "Log transformations penalize large values much more heavily than small ones rapidly, effectively 'reeling in' extreme right-skewed outliers to create a bell-curve shape."
    },
    {
        question: "True or False: Standard Scaler modifies the underlying shape of the distribution, making previously non-normal data perfectly Gaussian.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "LOW",
        explanation: "False. Scaling only shifts (subtracts mean) and compresses/stretches (divides by standard dev). It preserves the exact shape/skew of the original distribution."
    },
    {
        question: "Why might a mathematical model suffer from 'Heteroscedasticity' (unequal variance of errors) without proper outlier handling?",
        options: ["Because models optimize for average error. Extreme outliers act as high-leverage points, drastically pulling the regression line and corrupting the error variance.", "Because heteroscedasticity only applies to text data.", "Because the target labels are misaligned.", "Because cross-validation fails."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "In OLS Regression, outliers possess massive squared error weighting. The regression line tilts toward them to minimize that huge error, destabilizing the variance of the residuals elsewhere."
    },
    {
        question: "What does the Bias-Variance tradeoff imply when you arbitrarily remove hundreds of rows just to eliminate a few outliers?",
        options: ["You drastically decrease model variance at no cost.", "You increase your Sample Variance (fewer data points to train on), thus risking Overfitting to a very specific subgroup (High Variance).", "You eliminate all Bias natively.", "The tradeoff is broken and becomes linear."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Data is the anchor that prevents overfitting. Discarding massive amounts of data just to handle outliers reduces the generalization capacity of the model, increasing Variance (overfitting risks)."
    },
    {
        question: "If a Machine Learning model incorrectly thinks a 'Passenger Class 1' is mathematically 'better or larger' than 'Passenger Class 3' when in reality 1 is socio-economically higher, what is the theoretical error?",
        options: ["A categorical/ordinal magnitude inversion due to unencoded ordinal labels.", "Missing Value error.", "Multicollinearity.", "Zero Variance Trap."],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "Label Encoding strictly maps numerical size. If Class 1 is better, but numerically 1 < 3, a linear model might learn a backward negative correlation. It requires correct ordering mapping."
    },
    {
        question: "Between the concepts of 'Euclidean Distance' and 'Standard Scaler', why is one dependent on the other?",
        options: ["Euclidean distance calculates the shortest straight line between vectors. If 'Fare' ranges 0-500 and 'Age' ranges 0-10, 'Fare' mathematically dominates the distance entirely without scaling.", "They are not related.", "Standard Scaler computes Euclidean Distance internally.", "Standard Scaler forces Euclidean Distance to equal zero."],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "Distance algorithms (KNN, SVMs) give equal theoretical weight to numerical units. A 1-unit change in Fare shouldn't outweigh a 1-year change in Age, therefore both must be scaled to equal dimensionality."
    },
    {
        question: "If a model predicts completely opposite outcomes for a user when their Age is 29.99 vs 30.00 after discretization, this demonstrates perfectly what theoretical weakness of binning?",
        options: ["Loss of continuous gradient information and introduction of unnatural rigid boundary thresholds.", "Lack of data.", "Algorithmic bias.", "Scaling error."],
        answer: 0,
        difficulty: "LOW",
        explanation: "Binning destroys the continuous nuance of the data. The model loses the ability to differentiate between someone who is 20 vs 29 if they fall in the exact same bin, acting as an artificial rigid wall."
    },
    {
        question: "True or False: A model trained on a MinMax Scaled dataset bounding [0, 1] will fail or perform unpredictably if Test data contains a value larger than any seen in the Training data.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "True. If train data max is 100, the scaler divides by 100. If the test data has 200, the scaler transforms it to 2.0. The model has strictly learned weights for inputs between 0 and 1, causing unpredictable extrapolation."
    },
    {
        question: "In statistical theory, why does the threshold 1.5 * IQR identify outliers effectively in a Normal Distribution?",
        options: ["Because 1.5 * IQR roughly aligns with +/- 2.7 Standard Deviations, covering approx 99.3% of a Gaussian distribution.", "Because 1.5 is a random number.", "Because the median is 1.5.", "Because 1.5 * IQR covers 50% of the data."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "John Tukey selected 1.5 exactly because in a normal distribution, Q1 - 1.5*IQR and Q3 + 1.5*IQR captures approximately 99.3% of the data, similar to a 3-sigma Z-score bounds but calculated robustly."
    },
    {
        question: "When an engineer chooses to 'clip' (winsorize) outlier values at exactly the 95th percentile, what are they structurally assuming about the data generating process?",
        options: ["That the original feature is completely useless.", "That extreme observations beyond the 95th percentile possess no additional structural information/magnitude relevant to the target label.", "That the data is text.", "That all data below the 5th percentile is also noise."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Clipping assumes the 'magnitude' of the outlier is meaningless noise. Setting a Fare of $500 down to $150 assumes that anyone paying over $150 behaves identically, and the extra $350 offers no predictive signal."
    },
    {
        question: "Why might categorical encoding negatively impact the performance of algorithms if there is incredibly 'High Cardinality' (thousands of unique categories)?",
        options: ["It causes the algorithms to run too quickly.", "One-Hot encoding thousands of categories results in thousands of sparse, extremely low-variance new columns, leading to the Curse of Dimensionality.", "It converts them to negative integers.", "It completely randomizes the target label."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "High cardinality yields massive sparse matrices when one-hot encoded. Most columns will consist of 99.9% zeros, flooding the model with low-information noise and requiring exponentially more data to prevent overfitting (Curse of Dimensionality)."
    },
    {
        question: "If a Machine Learning architecture is built entirely on 'Distance Metrics' (e.g. K-Means), what explicit mathematical property must the feature space possess?",
        options: ["All features must be textual.", "All features must be completely missing.", "All dimensions must be Isotropic (uniformly scaled), otherwise distances are skewed along axes with naturally larger domains.", "The target must be binary."],
        answer: 2,
        difficulty: "HIGH",
        explanation: "Isotropic means having identical physical/mathematical properties in all directions. If one axis is scaled 0-1 and another 0-1000, distance functions generate a squeezed, stretched space that ruins spatial clustering."
    },
    {
        question: "What is theoretically problematic about using a simple Mean Imputation on a variable that has a distinct Bimodal (two-peaked) distribution?",
        options: ["The mean will perfectly represent both peaks.", "The mean will fall directly into the 'valley' between the peaks, replacing missing values with a number that barely exists in nature.", "It makes the variance infinite.", "Bimodal data cannot be imputed."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "If a dataset has peaks at 10 and 90, the mean is 50. Imputing 50 places artificial data right in the empty valley, severely distorting the actual probability density of the real distinct groups."
    },
    {
        question: "True or False: If a feature is a completely constant value across every single row, it mathematically provides zero predictive power for a classification model.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "LOW",
        explanation: "True. A constant offers zero variance. It cannot be used to distinguish or split classes, as it affects all classes identically."
    },
    {
        question: "Why is 'Feature Engineering' (creating new columns from existing data) often theoretically necessary for Linear models?",
        options: ["To delete columns.", "To increase the dataset size indefinitely.", "Because Linear Models can only map additive straight-line relationships. Combining features (like Age * Fare) allows a linear model to capture interaction effects implicitly.", "To confuse the validation sets."],
        answer: 2,
        difficulty: "HIGH",
        explanation: "A Linear Regression equation `Y = W1*X1 + W2*X2` cannot naturally multiply X1 and X2 to find a relationship dependent on both variables simultaneously. You must engineer the interaction feature `X3 = X1*X2` for it to learn it."
    },
    {
        question: "What theoretical property defines 'Sparse Data' generated by preprocessing steps?",
        options: ["Data comprised almost entirely of negative numbers.", "Data arrays mathematically dominated by zeroes, carrying very low information density per element.", "Data containing high variance.", "Data strictly composed of strings."],
        answer: 1,
        difficulty: "LOW",
        explanation: "Sparsity refers to matrices where the vast majority of elements are zero (common after One-Hot Encoding text/categorical data)."
    },
    {
        question: "Why do we theoretically check the 'Correlation Matrix' of features before training a linear model?",
        options: ["To find out which feature is longest.", "To satisfy the independence assumption of linear models. Highly correlated features (Multicollinearity) make regression coefficients highly unstable and uninterpretable.", "To automatically scale the data.", "To delete the target variable."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Multicollinearity occurs when independent variables are deeply correlated with each other. The model cannot mathematically decide which feature is driving the target, causing wild swings in coefficient weights (unstable variance)."
    },
    {
        question: "What does standard deviation physically represent regarding the probability density of a normally distributed feature?",
        options: ["The average distance of all the data points from the dataset's central mean.", "The peak value.", "The minimum value possible.", "The exact midpoint of the sorted line."],
        answer: 0,
        difficulty: "LOW",
        explanation: "Standard deviation evaluates spread. It is fundamentally the root mean squared calculation of how far, on average, individual points deviate from the statistical center."
    },
    {
        question: "What is the theoretical risk of applying a Z-score outlier removal threshold of 1.5 locally rather than 3.0?",
        options: ["You will delete practically no data.", "A threshold of 1.5 std devs will delete around 13% of perfectly valid data in a Normal distribution, systematically destroying natural variance instead of removing true outliers.", "The model will become infinitely fast.", "You cannot apply a 1.5 z-score."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "In a normal distribution, 68% of data falls within 1 std dev, and 95% within 2. A threshold of 1.5 is too tight and will treat massive chunks of natural 'tail' variance as anomalies."
    },
    {
        question: "What problem does 'Data Leakage' during preprocessing fundamentally cause regarding the end result of your ML architecture?",
        options: ["It deletes the target variable.", "It causes a systematic overfitting illusion, making you believe your model generalizes far better than it truly will in a real-world unseen production environment.", "It stops the code from compiling.", "It forces the model pipeline to use GPU instead of CPU."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Leakage provides the model with 'future' information (like the global mean of the test set). Testing on it yields high metric scores, but in production with truly unseen data, it collapses."
    },
    {
        question: "If 'Age' has a variance of 200, and 'Fare' has a variance of 2000, which feature will inherently dominate the initial gradient descent steps of an unscaled Neural Network?",
        options: ["Age", "Fare", "Neither, they balance out natively.", "The target variable."],
        answer: 1,
        difficulty: "LOW",
        explanation: "Without scaling, the algorithm calculates gradients mathematically. A massive variance in Fare creates massive derivatives with respect to its weights, dominating the network's updates while ignoring 'Age'."
    },
    {
        question: "What does the statistical term 'Robustness' mean strictly in the context of outlier detection?",
        options: ["The algorithm runs fast.", "The ability of a statistical estimator (like median) to remain unaffected or stable in the presence of extreme contaminations or violations of assumptions.", "The model is immune to hacking.", "The model always outputs an accuracy of 1.0."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "A robust method is one that maintains its theoretical guarantees and output stability even when the data acts wildly un-normally (e.g. massive outliers)."
    },
    {
        question: "True or False: Using a Boxplot mathematically proves a point is an invalid data entry.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "LOW",
        explanation: "False. A boxplot just flags extreme statistical variance (points beyond 1.5 IQR). These points could be perfectly valid, natural extreme cases. Outliers are not necessarily 'errors'."
    }
];
