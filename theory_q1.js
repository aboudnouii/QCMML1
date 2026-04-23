const qPart1 = [
    {
        question: "Why is the median often preferred over the mean when imputing missing values for continuous data that contains extreme outliers?",
        options: ["The median is mathematically simpler to compute for large datasets.", "The median minimizes the mean squared error natively.", "The median is robust to extreme outliers, whereas the mean is pulled heavily by them.", "The median allows for better gradients during neural network training."],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "As explained in preprocessing theory, the median represents the 50th percentile. Extreme values drastically shift the mean, but only move the median incrementally, making it robust against skewed data."
    },
    {
        question: "What is the primary theoretical drawback of strictly dropping all rows that contain ANY missing values?",
        options: ["It increases the variance of the remaining features.", "It introduces a bias if the missingness is not entirely at random (MCAR) and reduces the statistical power of the dataset.", "It causes overfitting during training because models learn to ignore Null values.", "It breaks indexing rules in mathematical matrices."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Dropping rows arbitrarily decreases sample size (reducing statistical power) and creates systemic bias if the missing data relates to a specific unseen subgroup (MNAR/MAR)."
    },
    {
        question: "When applying imputation specifically for Categorical variables, what is statistically the most standard baseline method?",
        options: ["Mean Imputation", "Median Imputation", "Mode Imputation (Most frequent value)", "Random variable assignment"],
        answer: 2,
        difficulty: "LOW",
        explanation: "Categorical variables lack numerical order or distance, making mean/median impossible to calculate. The statistical mode (most frequent category) is the correct logical choice."
    },
    {
        question: "Why do we typically drop a feature if it has an excessively high percentage (e.g. > 50-70%) of missing values, rather than imputing it?",
        options: ["Imputing the majority of a feature's values artificially reduces its variance and overrides any original signal with statistical noise from the imputation metric.", "It takes too much computational power to impute large quantities of Nulls.", "Pandas and scikit-learn functions crash if imputation exceeds 50%.", "The labels will become perfectly separable, causing overfitting."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "If you impute >50% of a column with a single value (e.g., median), you destroy the natural distribution and variance of the feature, introducing massive bias to your model instead of signal."
    },
    {
        question: "What does the presence of duplicated rows theoretically represent in a machine learning dataset if they are NOT caused by error?",
        options: ["A failure in data architecture.", "A natural probability distribution where multiple identical independent events occurred naturally.", "Overfitting in the pipeline.", "A violation of the Central Limit Theorem."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Sometimes identical rows are mathematically valid (e.g. two 25-yr-old males in 3rd class). Dropping them blindly disrupts the algorithmic prior probabilities of those natural instances."
    },
    {
        question: "What happens mathematically to the Standard Deviation of a dataset if you remove heavily skewed duplicate rows that represented the 'majority' baseline?",
        options: ["The standard deviation remains entirely unchanged.", "The standard deviation goes to exactly 1.0.", "The standard deviation typically increases as the data becomes less grouped uniformly around the mean.", "The standard deviation drops to zero."],
        answer: 2,
        difficulty: "HIGH",
        explanation: "Duplicates artificially group mass at specific points. Removing them flattens the distribution density, increasing the spread (variance and standard deviation) of the remaining data."
    },
    {
        question: "True or False: Mean imputation reduces the variance of the overall dataset.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "True. By filling missing values directly on the center point (the mean) without adding spread, you are dragging the variance of the overall feature downwards conceptually."
    },
    {
        question: "Why must Data Preprocessing pipelines impute numerical nulls BEFORE applying distance-based models like KNN?",
        options: ["Because KNN algorithms cannot legally be compiled in Python otherwise.", "Because evaluating the Euclidean or Manhattan distance between a number and 'NaN' is mathematically undefined.", "Because missing values automatically get assigned a distance of zero.", "Because KNN only works on categorical targets."],
        answer: 1,
        difficulty: "LOW",
        explanation: "Distance metrics require vector calculations involving every dimension. If one dimension is NaN, the mathematical distance calculation (e.g., Euclidean distance) mathematically fails."
    },
    {
        question: "What is the key theoretical assumption when deciding to fill missing 'Age' values with the median of 'Age'?",
        options: ["That Age is uniformly distributed.", "That the missing values in Age are Missing Completely At Random (MCAR) or that the central tendency provides an expected baseline unaffected by skewness.", "That Age represents a non-linear relationship with survival.", "That Age is perfectly correlated to the target label."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Mean/Median imputation operates on the assumption that missing values don't have a systemic meaning that requires a sub-model to predict them and that the baseline central tendency is a safe substitute."
    },
    {
        question: "When plotting the distribution of a dataset using a heatmap (like missingno), what are we trying to theoretically identify regarding missing data?",
        options: ["Whether missing values are correlated with each other across different features.", "The absolute standard deviation of the features.", "The coefficients for a logistic regression model.", "The final prediction boundaries."],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "Heatmaps of missing data are crucial to see if data is MAR (Missing at Random) vs MNAR (Missing Not At Random). If multiple columns miss data together in blocks, the missingness has a pattern."
    },
    {
        question: "What is the theoretical definition of the Interquartile Range (IQR)?",
        options: ["The difference between the maximum and minimum values.", "The mathematical spread representing the middle 50% of the data (75th percentile minus 25th percentile).", "The standard deviation squared.", "The distance of all points from the mean."],
        answer: 1,
        difficulty: "LOW",
        explanation: "IQR is statistically defined as Q3 (75th percentile) - Q1 (25th percentile). It focuses on the core distribution, ignoring the tails."
    },
    {
        question: "Why is the IQR calculation considered a 'Robust Statistic' compared to Standard Deviation?",
        options: ["Because it requires more computing power.", "Because it ignores the specific magnitude of extreme outliers on the tails of the distribution when calculating spread.", "Because it always equals precisely 1.0.", "Because it guarantees the data is normally distributed."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "A robust statistic is not severely affected by isolated outliers. Since IQR only looks at the 25% and 75% marks, an extreme outlier at the 99th percentile doesn't change it at all."
    },
    {
        question: "In the context of the Z-score equation: Z = (x - mean) / std. What exactly is a Z-score measuring conceptually?",
        options: ["The percentage of the dataset that is below value x.", "The absolute distance to the median in raw units.", "How many standard deviations the raw score 'x' is above or below the mean.", "The correlation coefficient of x and y."],
        answer: 2,
        difficulty: "LOW",
        explanation: "The Z-score standardizes the data by measuring deviation mathematically in units of 'Standard Deviations' from the central mean."
    },
    {
        question: "What is a major theoretical vulnerability of using the Z-score method to detect outliers?",
        options: ["It relies heavily on the Mean and Standard Deviation, both of which are themselves heavily distorted by the very outliers you are trying to detect.", "It can only detect outliers in categorical data.", "It requires an exact normal distribution to run in Python.", "It always identifies exactly 5% of the data as outliers."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "If you have massive outliers, the calculated mean gets pulled toward them, and the standard deviation blasts outwards. This means the outliers essentially 'hide' themselves by increasing the thresholds."
    },
    {
        question: "What is the theoretical principle behind 'Winsorization' (clipping values) compared to Truncation (dropping rows)?",
        options: ["It removes the columns with outliers completely.", "It caps extreme deviations at defined percentiles to preserve sample size while eliminating the infinite leverage of extreme points.", "It shifts the mean of the dataset to exactly zero.", "It randomizes the order of rows to confuse outliers."],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Winsorization preserves statistical power (number of rows) by capping the extreme values at defined bounds, thus removing their disproportionate mathematical pull on algorithms (like regression slopes) without tossing valid data."
    },
    {
        question: "A feature with a heavy 'right skew' (long tail to the right) will typically have its statistical measures arranged in what order?",
        options: ["Mean < Median < Mode", "Mode < Median < Mean", "Mean = Median = Mode", "Median < Mode < Mean"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "In a right-skewed distribution, the mass of data (Mode) is on the left. The extreme high outliers pull the Mean far to the right, placing the Median in between. (Mode < Median < Mean)."
    },
    {
        question: "True or False: If two features have the exact same variance, they must have the exact same distribution shape.",
        options: ["True", "False"],
        answer: 1,
        difficulty: "LOW",
        explanation: "False. Variance only measures the average squared deviation from the mean. Completely different shapes (bimodal, uniform, normal) can theoretically share the exact same variance."
    },
    {
        question: "Why must One-Hot Encoding be used instead of Label Encoding (1, 2, 3...) for target-independent Nominal variables (e.g. 'City') in Linear Regression?",
        options: ["Because Label Encoding takes up more memory.", "Because words cannot be used in Random Forests either.", "Because Linear Regression calculates slopes based on numerical magnitude, and would falsely interpret 'City=3' as mathematically 3x greater than 'City=1'.", "Because One-Hot Encoding acts as a scaler natively."],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Label Encoding establishes a mathematical ordinality. A linear model interprets numerical increases as literal magnitude changes. One-Hot circumvents this by creating orthogonal binary dimensions."
    },
    {
        question: "In the 'Dummy Variable Trap', what error does creating One-Hot Encoded columns for ALL categories of a feature cause theoretically?",
        options: ["Perfect Multicollinearity: The last category is perfectly predictable if you know the states of the other columns, causing matrix inversion issues mathematically.", "Overfitting on the training set.", "Zero variance: It makes the columns constant.", "Heteroskedasticity in the residuals."],
        answer: 0,
        difficulty: "HIGH",
        explanation: "If a feature has categories A, B, C; creating columns for A, B, and C means C = 1 - A - B. They are perfectly linearly dependent, which mathematically breaks models relying on calculating inverse matrices (like OLS Regression)."
    },
    {
        question: "What is the mathematical goal of Normalization (MinMaxScaler) in data preprocessing?",
        options: ["To shift the data so it has a standard deviation of 1.", "To force the feature's minimum value to map to 0 and maximum value map to 1 linearly, bounding the data space.", "To make the data perfectly Gaussian.", "To eliminate all outliers automatically."],
        answer: 1,
        difficulty: "LOW",
        explanation: "MinMaxScaler uses the formula (X - X_min) / (X_max - X_min). It compresses or stretches the data specifically to fit bounds, usually [0, 1]."
    },
    {
        question: "Why might StandardScaler (Z-score scaling) be theoretically superior to MinMaxScaler for an algorithm like Support Vector Machines or Logistic Regression?",
        options: ["Because it operates solely on categorical variables.", "Because MinMaxScaler compresses the 'inlier' data tightly into an infinitesimally small range if massive outliers exist, whereas StandardScaler preserves unit variance for gradients.", "It reduces the size of the dataframe.", "StandardScaler forces the data to be independent."],
        answer: 1,
        difficulty: "HIGH",
        explanation: "If you have an outlier of 1,000,000, MinMaxScaler maps it to 1, and squashes the rest of the normal data (values 0-10) all into the 0.0000X range, making gradients unstable. Standard scaling is slightly more robust for gradient-descent stability."
    },
    {
        question: "What is the theoretical intention behind 'Discretization' or 'Binning' a continuous variable like 'Age' into categories?",
        options: ["To convert a potentially complex, non-linear relationship into step-wise linear relationships that simpler models can understand.", "To increase the computational precision of the feature.", "To automatically eliminate missing values.", "To satisfy the requirements of the Central Limit Theorem."],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "Linear models assume a constant slope. If Age is non-linear (kids survive, elders survive, middle-age perish), discretization allows the model to assign unique independent weights to different 'Age groups' ignoring linearity."
    },
    {
        question: "When applying scaling strategies exclusively, what theoretically occurs to the correlation coefficient between two features?",
        options: ["It becomes strictly 1 or -1.", "It goes to 0.", "It remains entirely unchanged because linear transformations do not affect linear correlations.", "It matches the normalized spread."],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Pearson correlation is invariant to linear transformations (like adding constants or multiplying by scalars). Scaling does not change the core linear relationship structure."
    },
    {
        question: "Why is it theoretically critical that preprocessing steps (like Imputing with the Median or applying StandardScaler) 'fit' ONLY on the Training data, and simply 'transform' the Test data?",
        options: ["To save processing power during inference.", "Because Test Data must always be kept exactly as original strings.", "To strictly prevent Information Leakage: The model must not learn about the global statistics (like the future median/mean) of data it is supposed to be blind to.", "Because sklearn throws an error otherwise."],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Data Leakage. If you 'fit_transform' your whole dataset together before splitting, your Training set 'knows' the mean of your Testing set, causing overly optimistic accuracy scores because the test data isn't truly unseen."
    },
    {
        question: "True or False: RobustScaler is theoretically immune to extreme outliers shifting its final mathematical scale boundaries.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "True. By using the Median and Interquartile Range, extreme outliers cannot fundamentally alter the center point or scaling width the way they warp the Mean/Variance in StandardScaler."
    },
    {
        question: "What aspect of a data column is mathematically isolated when calculating missing value percentages?",
        options: ["The covariance with the target.", "The ratio of Null states against total cardinality/length of the vector.", "The Boolean true positive rate.", "The logarithmic decay of integers."],
        answer: 1,
        difficulty: "LOW",
        explanation: "A missing percentage purely isolates the density of non-existance (Null counts divided by the total number of rows)."
    }
];
