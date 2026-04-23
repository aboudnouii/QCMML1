const qPart2 = [
    {
        question: "Which visualization tool was used in TP2 Exercise 3 to initially detect outliers in the 'fare' column?",
        options: ["Histogram", "Scatter Plot", "Boxplot", "Pie Chart"],
        answer: 2,
        difficulty: "LOW",
        explanation: "sns.boxplot(x=df['fare']) was used to visualize the distribution and outliers visually."
    },
    {
        question: "In the IQR method for outlier detection, what does IQR stand for?",
        options: ["Internal Quality Ratio", "Interquartile Range", "Inertia Quantile Rate", "Inclusive Query Range"],
        answer: 1,
        difficulty: "LOW",
        explanation: "It stands for Interquartile Range, calculated as Q3 - Q1."
    },
    {
        question: "According to the notebook, what are the values of Q1, Q3, and IQR for the 'fare' column?",
        options: ["Q1=0, Q3=100, IQR=100", "Q1=7.91, Q3=31.0, IQR=23.09", "Q1=10, Q3=50, IQR=40", "Q1=5, Q3=20, IQR=15"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "The notebook explicitly calculates Q1=7.91, Q3=31.0, IQR=23.09 for the fare."
    },
    {
        question: "According to the IQR method in TP2, what represents the upper bound formula?",
        options: ["Q3 + 1.5 * IQR", "Q3 + 2.0 * IQR", "Q1 + 1.5 * IQR", "Maximum value of array"],
        answer: 0,
        difficulty: "LOW",
        explanation: "Upper bound = Q3 + 1.5 * IQR is the standard formula used in Q2."
    },
    {
        question: "Based on the IQR calculation in the notebook, what is the lower bound for the 'fare' column?",
        options: ["0", "-26.72", "7.91", "-1.5"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Lower bound is Q1 - 1.5 * IQR = 7.91 - 1.5 * (23.09) = -26.72."
    },
    {
        question: "How many outliers were detected using the Z-score method for the 'fare' column?",
        options: ["116", "20", "0", "911"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "In Q4, using a Z-score threshold of 3, the length of the outlier array is exactly 20."
    },
    {
        question: "What Z-score threshold was used to classify a data point as an outlier in Exercise 3?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        difficulty: "LOW",
        explanation: "The notebook uses condition > 3 to classify z-score outliers."
    },
    {
        question: "Which numpy function was used to calculate the absolute Z-score of the 'fare' values?",
        options: ["np.abs(stats.zscore(df['fare']))", "np.zscore_abs(df['fare'])", "np.std(df['fare'])", "np.mean()"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "Q4 uses `np.abs(stats.zscore(df_no_dup['fare']))` to calculate the absolute Z-scores."
    },
    {
        question: "Instead of dropping outliers, which technique was applied in Q6 to limit extreme values to the upper and lower bounds?",
        options: ["Z-normalization", "MinMax Scaling", "Clipping (Winsorization)", "Rounding"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "Np.clip() was used, which replaces outliers with the calculated boundary values (Winsorization)."
    },
    {
        question: "Which numpy function performs the data clipping in the notebook?",
        options: ["np.clamp()", "np.limit()", "np.clip()", "np.winsorize()"],
        answer: 2,
        difficulty: "LOW",
        explanation: "`df_no_dup['fare_clipped'] = np.clip(df_no_dup['fare'], lower_bound, upper_bound)` was used."
    },
    {
        question: "What is the primary advantage of Clipping over dropping rows with outliers as noted in TP2?",
        options: ["It removes all outliers completely", "It retains dataset size and prevents extreme values from distorting models", "It is computationally faster than dropping rows", "It converts the data to a normal distribution"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "The text explains bagging/clipping prevents loss of data while controlling the impact of extreme values."
    },
    {
        question: "In TP2, to encode structural text data into numbers, which preprocessing tool from Scikit-Learn was used?",
        options: ["OneHotEncoder", "LabelEncoder", "TextToNum", "StandardScaler"],
        answer: 1,
        difficulty: "LOW",
        explanation: "LabelEncoder from sklearn.preprocessing was explicitly applied to categorical columns."
    },
    {
        question: "True or False: The pandas `pd.get_dummies()` function is used for One-Hot Encoding in standard machine learning workflows.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "LOW",
        explanation: "True. It's listed in the explanation as an alternative to handle nominal categorical variables without implying order."
    },
    {
        question: "What is the purpose of the 'StandardScaler' applied to the dataset?",
        options: ["To shift values between 0 and 1", "To rescale features to have a mean of 0 and a variance/standard deviation of 1", "To clip outlier values strictly", "To replace missing values with the mean"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "StandardScaler transforms columns by subtracting the mean and dividing by the standard deviation."
    },
    {
        question: "Which scaler is better to use when your data contains numerous large outliers and you don't want them to skew the scaling?",
        options: ["StandardScaler", "MinMaxScaler", "RobustScaler", "LabelEncoder"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "RobustScaler is less sensitive to outliers because it uses the median and interquartile range."
    },
    {
        question: "In the notebook, how was the 'age' feature segmented into multiple groups?",
        options: ["Using pd.group()", "Using pd.cut() for Discretization (Binning)", "Using np.split()", "Using LabelEncoder"],
        answer: 1,
        difficulty: "LOW",
        explanation: "Feature engineering steps included using `pd.cut()` to create bins like (Child, Teen, Adult, Senior)."
    },
    {
        question: "What are the bins explicitly used for 'age' discretization in TP2?",
        options: ["[0, 12, 18, 60, 100]", "[0, 10, 20, 30, 40]", "Every 10 years", "[0, 18, 100]"],
        answer: 0,
        difficulty: "HIGH",
        explanation: "The custom bins provided for age groups were typically [0, 12, 18, 60, 100]."
    },
    {
        question: "True or False: Normalization using MinMaxScaler preserves the shape of the original distribution.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "True. MinMaxScaler scales linearly, thus preserving the relative shape while squashing values into [0, 1]."
    },
    {
        question: "When applying Z-score for outlier detection via `stats.zscore(df['fare'])`, which library must be imported?",
        options: ["numpy as np", "pandas as pd", "scipy.stats as stats", "matplotlib.pyplot as plt"],
        answer: 2,
        difficulty: "LOW",
        explanation: "The notebook imports stats from scipy (`from scipy import stats`)."
    },
    {
        question: "Which method creates dummy variables in pandas directly and drops the first category to avoid multicollinearity?",
        options: ["pd.get_dummies(drop_first=True)", "pd.dummy(drop_first=False)", "pd.onehot()", "LabelEncoder()"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "pd.get_dummies() has a parameter `drop_first=True` often used to prevent the dummy variable trap."
    },
    {
        question: "What happens if you apply LabelEncoder to a non-ordinal categorical feature (like City names) before feeding it to a linear regression model?",
        options: ["The model works perfectly", "The model might wrongly interpret the integer assignments as having numerical order/importance", "The model converts it back to strings automatically", "The code throws an error"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "LabelEncoder assigns arbitrary integers. A linear model assumes order/magnitude, which biases the model incorrectly."
    },
    {
        question: "In TP2, the 'fare_clipped' column was created. Did boxplotting it still show outliers visually?",
        options: ["Yes, exactly the same", "No, all points are now within the 'whiskers' of the boxplot at maximum", "Yes, but they were different", "Boxplot function cannot plot clipped data"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "After clipping, all extreme values are moved to exactly the upper/lower bounds, meaning no data points lie beyond the boxplot whiskers."
    },
    {
        question: "How does the formula for Standard Scaling (Z-score normalization) look conceptually?",
        options: ["z = (x - mean) / std", "z = (x - min) / (max - min)", "z = (x - median) / IQR", "z = x * mean"],
        answer: 0,
        difficulty: "LOW",
        explanation: "Standard scaling uses the specific formula `(x - mean) / standard_deviation`."
    },
    {
        question: "Which object is explicitly created in Python to perform standard scaling in the notebook?",
        options: ["scaler = Normalizer()", "scaler = MinMaxScaler()", "scaler = StandardScaler()", "scaler = RobustScaler()"],
        answer: 2,
        difficulty: "LOW",
        explanation: "The code creates the instance: `scaler = StandardScaler()` before using `.fit_transform()`."
    },
    {
        question: "True or False: In TP2, the missing values must be handled BEFORE outlier detection and feature scaling?",
        options: ["True", "False"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "True. Functions like z-score calculation or StandardScaler will throw errors or behave incorrectly if NaN values exist."
    },
    {
        question: "Before calculating the IQR bounds, what pandas function is useful for quickly getting the 25th and 75th percentiles of a series?",
        options: ["Series.describe()", "Series.quantile([0.25, 0.75])", "Both A and B", "Series.percentile()"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "`df['fare'].quantile(0.25)` is used explicitly in code, and `.describe()` also provides these values."
    }
];
