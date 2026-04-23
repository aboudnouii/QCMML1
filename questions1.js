const qPart1 = [
    {
        question: "Which pandas method is used in Exercise 1 to calculate the absolute number of missing values per column?",
        options: ["df.isna().count()", "df.isnull().sum()", "df.count()", "df.missing()"],
        answer: 1,
        difficulty: "LOW",
        explanation: "Based on Exercise 1, Q1, df.isnull().sum() is used to count missing values per feature."
    },
    {
        question: "According to the notebook, what is the formula used to calculate the percentage of missing values?",
        options: ["(df.isnull().sum() / len(df)) * 100", "(df.isna() / df.shape[0]) * 100", "df.isnull().sum() * 100", "df.count() / 100"],
        answer: 0,
        difficulty: "MEDIUM",
        explanation: "Exercise 1, Q2 computes percentages as: (df.isnull().sum() / len(df)) * 100."
    },
    {
        question: "Which of the following describes the threshold for dropping a column due to missing values as shown in TP2?",
        options: ["Drop columns with > 30% missing values", "Drop columns with > 50% missing values", "Drop columns with any missing values", "Drop columns with > 80% missing values"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "In Q5 of Exercise 1, the code checks for columns with more than 50% missing values and drops the 'deck' column."
    },
    {
        question: "Which column was dropped from the dataset because it had more than 50% missing values?",
        options: ["age", "fare", "deck", "embark_town"],
        answer: 2,
        difficulty: "LOW",
        explanation: "The 'deck' column was dropped because its missing value percentage exceeded the 50% threshold."
    },
    {
        question: "True or False: The missingno library's 'matrix' function was used to visually represent the missing values.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "LOW",
        explanation: "Yes, 'msno.matrix(df)' is explicitly used in Q3 to visualize the missing data."
    },
    {
        question: "Which alternative visualization method is provided in TP2 to plot a heatmap of missing values?",
        options: ["plt.plot(df.isnull())", "sns.heatmap(df.isnull(), cbar=False, cmap='viridis')", "sns.boxplot(df.isnull())", "msno.heatmap(df)"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Q3 uses sns.heatmap(df.isnull(), cbar=False, cmap='viridis') as an alternative visualization tool."
    },
    {
        question: "How were the missing numerical values in the 'age' column imputed?",
        options: ["Filled with 0", "Filled with the column's mean", "Filled with the column's median", "Forward fill"],
        answer: 2,
        difficulty: "LOW",
        explanation: "In Q6, numerical missing values ('age') were filled using the median: df['age'].fillna(df['age'].median(), inplace=True)."
    },
    {
        question: "How were the missing categorical values in the 'embark_town' and 'embarked' columns imputed?",
        options: ["Filled with 'Unknown'", "Filled with the column's mode", "Filled with the column's median", "Backward fill"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "In Q6, categorical missing values were filled with the mode: df[col].fillna(df[col].mode()[0], inplace=True)."
    },
    {
        question: "After handling all missing values in Exercise 1, what is the total number of missing values remaining in the dataset?",
        options: ["10", "127", "1", "0"],
        answer: 3,
        difficulty: "LOW",
        explanation: "Q7 confirms that the total missing values remaining after cleaning is 0."
    },
    {
        question: "Which method is used in Exercise 2 to check whether any duplicate rows exist in the dataset?",
        options: ["df.has_duplicates()", "df.duplicated().any()", "df.duplicate_rows()", "df.duplicated().sum()"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "Q1 of Exercise 2 uses 'has_duplicates = df.duplicated().any()' to return a boolean True/False."
    },
    {
        question: "How many duplicate rows were artificially added to the Titanic dataset in Exercise 2 to make the exercise meaningful?",
        options: ["50", "20", "127", "100"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Looking at the setup block of Exercise 2: df = pd.concat([df, df.sample(20, random_state=42)], ignore_index=True) adds 20 duplicates (though others were inherently present)."
    },
    {
        question: "What is the total number of duplicate rows found in Exercise 2 (Q2) before cleaning?",
        options: ["20", "127", "195", "911"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Q2 outputs 'Number of duplicate rows: 127'."
    },
    {
        question: "When displaying all duplicate rows (showing both copies), how many rows are shown in total?",
        options: ["127", "195", "254", "0"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "In Q3, 'df[df.duplicated(keep=False)]' results in 195 rows showing both copies."
    },
    {
        question: "Which pandas method is used to remove duplicate rows from the dataset?",
        options: ["df.remove_duplicates()", "df.drop_duplicates()", "df.delete_dups()", "df.clean_duplicates()"],
        answer: 1,
        difficulty: "LOW",
        explanation: "Q4 uses 'df_no_dup = df.drop_duplicates()' to clean the dataset."
    },
    {
        question: "What is the dataset size (number of rows) before and after duplicate removal in Exercise 2?",
        options: ["Before: 891, After: 784", "Before: 911, After: 784", "Before: 911, After: 891", "Before: 1000, After: 900"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Q5 prints 'Size before removal: 911 rows' and 'Size after removal: 784 rows'."
    },
    {
        question: "What happens to the standard deviation of the 'fare' column after removing duplicates?",
        options: ["It decreases", "It stays exactly the same", "It increases", "It becomes 0"],
        answer: 2,
        difficulty: "HIGH",
        explanation: "Q7 shows the Fare Std before removal is 49.248, and after removal is 52.160, therefore it increases."
    },
    {
        question: "How did the percentage of 'survived = 1' change after removing duplicates?",
        options: ["Decreased from 41.2% to 38.64%", "Increased from 38.64% to 41.2%", "Stayed at 38.64%", "Decreased to 0%"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "Q7 output shows survived distribution changed from 38.64% (Before) to 41.2% (After)."
    },
    {
        question: "True or False: According to TP2, missing numerical values can be robustly filled using the median to avoid outlier influence.",
        options: ["True", "False"],
        answer: 0,
        difficulty: "LOW",
        explanation: "Yes, using the median is a standard practice shown in the code to fill the 'age' column."
    },
    {
        question: "Which parameter is used in `df.duplicated(keep=False)` to show ALL copies of duplicated rows?",
        options: ["show=All", "keep='all'", "keep=False", "duplicates=True"],
        answer: 2,
        difficulty: "MEDIUM",
        explanation: "In Q3, standard pandas syntax keep=False is used to flag all duplicates as True."
    },
    {
        question: "What library is used in TP2 to load the initial Titanic dataset?",
        options: ["pandas", "sklearn", "seaborn", "nltk"],
        answer: 2,
        difficulty: "LOW",
        explanation: "The notebook uses `sns.load_dataset('titanic')` from the seaborn library."
    },
    {
        question: "In TP2, to check if ANY missing values exist in the entire dataset at once, which combination is correct?",
        options: ["df.isnull().sum()", "df.isnull().any().any()", "df.isnull().all()", "df.isna().sum()"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "In Q4 of Exercise 1, df.isnull().any().any() or similar logic is used to get a single boolean."
    },
    {
        question: "When dropping the 'deck' column, which argument specifies that the operation should happen along columns?",
        options: ["axis=0", "axis=1", "columns=True", "drop_col=True"],
        answer: 1,
        difficulty: "LOW",
        explanation: "In pandas, axis=1 (or specifying columns=['deck']) refers to column operations."
    },
    {
        question: "What was the percentage of missing values roughly calculated for the 'deck' column before it was dropped?",
        options: ["20%", "50%", "Over 70%", "Exactly 100%"],
        answer: 2,
        difficulty: "HIGH",
        explanation: "The notebook text notes 'deck' has > 50% missing values, specifically around 77% in typical Titanic sets."
    },
    {
        question: "True or False: The impact of removing duplicates was visualized using a scatter plot for class distribution.",
        options: ["True", "False", "No visualization was used", "Only histograms were used"],
        answer: 1,
        difficulty: "MEDIUM",
        explanation: "False. Bar charts (.plot(kind='bar')) were used in Q7 to show Class Distribution before and after."
    },
    {
        question: "What colors were explicitly used in the bar charts for visualizing survived vs not survived classes?",
        options: ["Blue and Red", "['#e74c3c','#2ecc71']", "Black and White", "Default pandas colors"],
        answer: 1,
        difficulty: "HIGH",
        explanation: "The matplotlib code explicitly defines visually appealing colors: color=['#e74c3c','#2ecc71']."
    },
    {
        question: "After calling drop_duplicates(), what remaining duplicate count was explicitly verified?",
        options: ["10", "1", "0", "20"],
        answer: 2,
        difficulty: "LOW",
        explanation: "Q6 verifies the remaining duplicate rows as 0: `remaining_dup = df_no_dup.duplicated().sum()`."
    }
];
