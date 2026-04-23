// Will hold all questions from the loaded JS files
let allQuestions = [];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = 0;

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

const ui = {
    totalQDisplay: document.getElementById('total-q-display'),
    progressText: document.getElementById('progress-text'),
    scoreText: document.getElementById('score-text'),
    correctText: document.getElementById('correct-text'),
    progressBar: document.getElementById('progress-bar'),
    
    questionNumber: document.getElementById('question-number'),
    difficultyBadge: document.getElementById('difficulty-badge'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    
    feedbackContainer: document.getElementById('feedback-container'),
    feedbackTitle: document.getElementById('feedback-title'),
    explanationText: document.getElementById('explanation-text'),
    
    nextBtn: document.getElementById('next-btn'),
    startBtn: document.getElementById('start-btn'),
    resetBtn: document.getElementById('reset-btn'),
    playAgainBtn: document.getElementById('play-again-btn'),
    
    finalPercentage: document.getElementById('final-percentage'),
    finalCorrect: document.getElementById('final-correct'),
    finalTotal: document.getElementById('final-total')
};

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Combine questions from global variables defined in other scripts
    if (typeof qPart1 !== 'undefined') allQuestions = allQuestions.concat(qPart1);
    if (typeof qPart2 !== 'undefined') allQuestions = allQuestions.concat(qPart2);
    if (typeof qPart3 !== 'undefined') allQuestions = allQuestions.concat(qPart3);
    if (typeof qPart4 !== 'undefined') allQuestions = allQuestions.concat(qPart4);
    
    ui.totalQDisplay.textContent = allQuestions.length;
    
    // Event listeners
    ui.startBtn.addEventListener('click', startQuiz);
    ui.nextBtn.addEventListener('click', loadNextQuestion);
    ui.resetBtn.addEventListener('click', resetQuiz);
    ui.playAgainBtn.addEventListener('click', resetQuiz);
});

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function updateDashboard() {
    ui.progressText.textContent = `${answeredQuestions} / ${allQuestions.length}`;
    ui.correctText.textContent = score;
    
    let percentage = answeredQuestions === 0 ? 0 : Math.round((score / answeredQuestions) * 100);
    ui.scoreText.textContent = percentage;
    
    let progressPercent = allQuestions.length === 0 ? 0 : (answeredQuestions / allQuestions.length) * 100;
    ui.progressBar.style.width = `${progressPercent}%`;
}

function startQuiz() {
    if (allQuestions.length === 0) {
        alert("No questions loaded!");
        return;
    }
    
    // Optional: Shuffle questions here if desired.
    // allQuestions.sort(() => Math.random() - 0.5);
    
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    
    updateDashboard();
    showScreen('quiz');
    renderQuestion();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    updateDashboard();
    
    ui.feedbackContainer.classList.add('hidden');
    ui.nextBtn.disabled = true;
    
    showScreen('start');
}

function renderQuestion() {
    const q = allQuestions[currentQuestionIndex];
    
    ui.questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${allQuestions.length}`;
    
    ui.difficultyBadge.textContent = q.difficulty;
    ui.difficultyBadge.className = `badge ${q.difficulty.toLowerCase()}`;
    
    ui.questionText.textContent = q.question;
    
    ui.optionsContainer.innerHTML = '';
    ui.feedbackContainer.classList.add('hidden');
    ui.nextBtn.disabled = true;
    
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        const letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = letters[index] || '•';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = option;
        
        btn.appendChild(letterSpan);
        btn.appendChild(textSpan);
        
        btn.addEventListener('click', () => selectOption(index, btn, q));
        
        ui.optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex, selectedBtn, q) {
    // Disable all options
    const allOptions = ui.optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.disabled = true);
    
    answeredQuestions++;
    
    const isCorrect = selectedIndex === q.answer;
    
    if (isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
        showFeedback(true, 'Correct!', q.explanation);
    } else {
        selectedBtn.classList.add('wrong');
        // Highlight correct answer
        allOptions[q.answer].classList.add('correct');
        showFeedback(false, 'Incorrect', q.explanation);
    }
    
    updateDashboard();
    
    // Enable next button
    if (currentQuestionIndex < allQuestions.length - 1) {
        ui.nextBtn.textContent = "Next Question ➔";
    } else {
        ui.nextBtn.textContent = "See Results ★";
    }
    ui.nextBtn.disabled = false;
}

function showFeedback(isCorrect, title, explanation) {
    ui.feedbackContainer.classList.remove('hidden', 'success', 'error');
    ui.feedbackContainer.classList.add(isCorrect ? 'success' : 'error');
    
    ui.feedbackTitle.textContent = title;
    
    if (explanation && explanation.trim() !== '') {
        ui.explanationText.innerHTML = explanation;
    } else {
        ui.explanationText.textContent = "No additional explanation provided.";
    }
}

function loadNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < allQuestions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    showScreen('results');
    
    ui.finalCorrect.textContent = score;
    ui.finalTotal.textContent = allQuestions.length;
    
    let percentage = allQuestions.length === 0 ? 0 : Math.round((score / allQuestions.length) * 100);
    ui.finalPercentage.textContent = `${percentage}%`;
    
    // Could add different colors based on score here
}
