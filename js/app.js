/**
 * LinguoCards - Vanilla JS PWA
 */

// 1. Data Store
const DATA_STORE = {
    'vietnamese-numbers': {
        title: 'Vietnamese Numbers (0-10)',
        lang: 'vi-VN',
        items: [
            { id: 1, term: "Không", translation: "Zero", category: "Numbers" },
            { id: 2, term: "Một", translation: "One", category: "Numbers" },
            { id: 3, term: "Hai", translation: "Two", category: "Numbers" },
            { id: 4, term: "Ba", translation: "Three", category: "Numbers" },
            { id: 5, term: "Bốn", translation: "Four", category: "Numbers" },
            { id: 6, term: "Năm", translation: "Five", category: "Numbers" },
            { id: 7, term: "Sáu", translation: "Six", category: "Numbers" },
            { id: 8, term: "Bảy", translation: "Seven", category: "Numbers" },
            { id: 9, term: "Tám", translation: "Eight", category: "Numbers" },
            { id: 10, term: "Chín", translation: "Nine", category: "Numbers" },
            { id: 11, term: "Mười", translation: "Ten", category: "Numbers" }
        ]
    },
    'korean-numbers': {
        title: 'Korean Numbers (0-10)',
        lang: 'ko-KR',
        items: [
            { id: 1, term: "영", translation: "Zero", category: "Numbers" },
            { id: 2, term: "일", translation: "One", category: "Numbers" },
            { id: 3, term: "이", translation: "Two", category: "Numbers" },
            { id: 4, term: "삼", translation: "Three", category: "Numbers" },
            { id: 5, term: "사", translation: "Four", category: "Numbers" },
            { id: 6, term: "오", translation: "Five", category: "Numbers" },
            { id: 7, term: "육", translation: "Six", category: "Numbers" },
            { id: 8, term: "칠", translation: "Seven", category: "Numbers" },
            { id: 9, term: "팔", translation: "Eight", category: "Numbers" },
            { id: 10, term: "구", translation: "Nine", category: "Numbers" },
            { id: 11, term: "십", translation: "Ten", category: "Numbers" }
        ]
    }
};

// ... (State Management and Elements remain the same) ...

function speak(text) {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    // Get available voices
    // Use cached voices
    if (voices.length === 0) {
        voices = window.speechSynthesis.getVoices();
    }

    // Determine language based on current topic or detect
    let targetLang = 'vi-VN';
    if (currentState.topicId && DATA_STORE[currentState.topicId]) {
        targetLang = DATA_STORE[currentState.topicId].lang;
    }

    // Try to find a voice for the target language
    let voice = voices.find(v => v.lang === targetLang);

    // Fallback if strict match fails (e.g. ko-KR vs ko_KR)
    if (!voice) {
        voice = voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));
    }

    if (voice) {
        utterance.voice = voice;
        utterance.lang = targetLang;
    } else {
        console.warn(`Voice ${targetLang} not found in the system.`);
        utterance.lang = targetLang;
    }

    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', init);

// 2. State Management
let currentState = {
    topicId: null,
    items: [],
    currentIndex: 0,
    isFlipped: false,
    quiz: {
        score: 0,
        isComplete: false
    }
};

// 3. DOM Elements
const elements = {
    homeScreen: document.getElementById('home-screen'),
    learningScreen: document.getElementById('learning-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    // startBtn removed as we'll have dynamic buttons
    settingsBtn: document.getElementById('settings-btn'), // For future use
    backBtn: document.getElementById('back-home-btn'),
    // Quiz Elements
    quizBackBtn: document.getElementById('quiz-back-btn'),
    quizQuestion: document.getElementById('quiz-question'),
    quizOptions: document.getElementById('quiz-options'),
    quizProgress: document.getElementById('quiz-progress'),
    quizScore: document.getElementById('quiz-score'),

    card: document.getElementById('flashcard'),
    cardTerm: document.getElementById('card-term'),
    cardTranslation: document.getElementById('card-translation'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    progressIndicator: document.getElementById('progress-indicator'),
    speakBtn: document.getElementById('speak-btn'),
    homeTitle: document.querySelector('#home-screen h1'),
    topicList: document.getElementById('topic-list')
};

// Voice Management
let voices = [];

function initVoices() {
    voices = window.speechSynthesis.getVoices();
}

// 4. Methods

function init() {
    renderHome();
    setupEventListeners();

    // Initialize voices
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = initVoices;
    }
    initVoices();

    handleRoute(); // Handle initial load
}

function renderHome() {
    elements.topicList.innerHTML = '';

    Object.keys(DATA_STORE).forEach(key => {
        const topic = DATA_STORE[key];
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div>
                <h3>${topic.title}</h3>
                <span class="badge">${topic.items.length} cards</span>
            </div>
            <div class="topic-actions">
                <button class="btn-sm btn-action" data-action="learn">Practice</button>
                <button class="btn-sm btn-action secondary" data-action="quiz">Test</button>
            </div>
        `;

        // Event delegation for buttons
        card.querySelector('[data-action="learn"]').addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.hash = `/learn/${key}`;
        });

        card.querySelector('[data-action="quiz"]').addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.hash = `/quiz/${key}`;
        });

        elements.topicList.appendChild(card);
    });
}

function setupEventListeners() {
    // History API listener
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);

    elements.backBtn.addEventListener('click', goHome);
    if (elements.quizBackBtn) elements.quizBackBtn.addEventListener('click', goHome);

    elements.card.addEventListener('click', flipCard);

    // Speak button
    if (elements.speakBtn) {
        elements.speakBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentState.items.length > 0) {
                const item = currentState.items[currentState.currentIndex];
                speak(item.term);
            }
        });
    }

    elements.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextCard();
    });
    elements.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevCard();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const isLearnActive = elements.learningScreen.classList.contains('active');
        const isQuizActive = elements.quizScreen && elements.quizScreen.classList.contains('active');

        if (e.key === 'Escape') {
            goHome();
            return;
        }

        if (isLearnActive) {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                if (currentState.isFlipped && e.key === 'ArrowRight') {
                    nextCard();
                } else if (!currentState.isFlipped && e.key === ' ') {
                    flipCard();
                }
            } else if (e.key === 'ArrowLeft') {
                prevCard();
            }
        }
    });
}

function handleRoute() {
    const hash = window.location.hash;

    if (hash.startsWith('#/learn/')) {
        const topicId = hash.replace('#/learn/', '');
        if (DATA_STORE[topicId]) {
            startLearning(topicId);
        } else {
            window.location.hash = '#/';
        }
    } else if (hash.startsWith('#/quiz/')) {
        const topicId = hash.replace('#/quiz/', '');
        if (DATA_STORE[topicId]) {
            startQuiz(topicId);
        } else {
            window.location.hash = '#/';
        }
    } else {
        showHomeScreen();
    }
}

function showHomeScreen() {
    elements.learningScreen.classList.remove('active');
    if (elements.quizScreen) elements.quizScreen.classList.remove('active');

    setTimeout(() => {
        elements.learningScreen.style.display = 'none';
        if (elements.quizScreen) elements.quizScreen.style.display = 'none';
        elements.homeScreen.style.display = 'flex';
        requestAnimationFrame(() => {
            elements.homeScreen.classList.add('active');
        });
    }, 300);

    window.speechSynthesis.cancel();
}

function startLearning(topicId) {
    if (currentState.topicId === topicId && elements.learningScreen.classList.contains('active')) {
        return;
    }

    const topic = DATA_STORE[topicId];
    currentState.topicId = topicId;
    currentState.items = topic.items;
    currentState.currentIndex = 0;
    currentState.isFlipped = false;

    updateCardUI();

    elements.homeScreen.classList.remove('active');
    if (elements.quizScreen) elements.quizScreen.classList.remove('active');

    setTimeout(() => {
        elements.homeScreen.style.display = 'none';
        if (elements.quizScreen) elements.quizScreen.style.display = 'none';

        elements.learningScreen.style.display = 'flex';
        requestAnimationFrame(() => {
            elements.learningScreen.classList.add('active');
        });
    }, 300);
}

function startQuiz(topicId) {
    const topic = DATA_STORE[topicId];
    currentState.topicId = topicId;
    currentState.items = [...topic.items].sort(() => Math.random() - 0.5); // Shuffle for quiz
    currentState.currentIndex = 0;
    currentState.quiz = { score: 0, isComplete: false };

    renderQuizQuestion();

    elements.homeScreen.classList.remove('active');
    elements.learningScreen.classList.remove('active');

    setTimeout(() => {
        elements.homeScreen.style.display = 'none';
        elements.learningScreen.style.display = 'none';

        elements.quizScreen.style.display = 'flex';
        requestAnimationFrame(() => {
            elements.quizScreen.classList.add('active');
        });
    }, 300);
}

function renderQuizQuestion() {
    if (currentState.currentIndex >= currentState.items.length) {
        showQuizResults();
        return;
    }

    const item = currentState.items[currentState.currentIndex];

    // Update Progress
    elements.quizProgress.textContent = `Question ${currentState.currentIndex + 1}/${currentState.items.length}`;
    elements.quizQuestion.textContent = item.term;

    // Generate Options
    // 1 correct, 3 random wrong
    let options = [item];
    const allItems = DATA_STORE[currentState.topicId].items;
    const wrongItems = allItems.filter(i => i.id !== item.id).sort(() => Math.random() - 0.5).slice(0, 3);

    options = [...options, ...wrongItems].sort(() => Math.random() - 0.5);

    elements.quizOptions.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt.translation;
        btn.addEventListener('click', () => handleQuizAnswer(item, opt, btn));
        elements.quizOptions.appendChild(btn);
    });
}

function handleQuizAnswer(correctItem, selectedItem, btn) {
    if (btn.disabled) return; // Prevent double click

    // Disable all buttons
    const allBtns = elements.quizOptions.querySelectorAll('button');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = correctItem.id === selectedItem.id;

    if (isCorrect) {
        btn.classList.add('correct');
        currentState.quiz.score++;
    } else {
        btn.classList.add('wrong');
        // Highlight correct one
        allBtns.forEach(b => {
            if (b.textContent === correctItem.translation) b.classList.add('correct');
        });
    }

    // Play sound
    speak(correctItem.term);

    // Next question delay
    setTimeout(() => {
        currentState.currentIndex++;
        renderQuizQuestion();
    }, 1500);
}

function showQuizResults() {
    elements.quizQuestion.textContent = "Quiz Complete!";
    elements.quizProgress.textContent = "";
    elements.quizOptions.innerHTML = `
        <div class="quiz-result">
            <h2>Score: ${currentState.quiz.score}/${currentState.items.length}</h2>
            <p>${currentState.quiz.score === currentState.items.length ? 'Perfect!' : 'Keep practicing!'}</p>
            <button onclick="window.location.hash='#/'" class="btn-primary" style="margin-top: 2rem;">Back to Menu</button>
        </div>
    `;
}

function goHome() {
    // If we have history, go back, otherwise force home hash
    if (window.history.state || window.location.hash !== '') {
        window.history.back();
    } else {
        window.location.hash = '#/';
    }
}

function flipCard() {
    currentState.isFlipped = !currentState.isFlipped;
    elements.card.classList.toggle('flipped', currentState.isFlipped);
}

function updateCardUI() {
    if (currentState.items.length === 0) return;

    const item = currentState.items[currentState.currentIndex];

    if (currentState.isFlipped) {
        elements.card.classList.remove('flipped');
        currentState.isFlipped = false;
    }

    // Update Content
    elements.cardTerm.textContent = item.term;
    elements.cardTranslation.textContent = item.translation;

    // Update Progress
    elements.progressIndicator.textContent = `${currentState.items.length} Cards • ${currentState.currentIndex + 1}/${currentState.items.length}`;

    // Update Button States
    elements.prevBtn.disabled = currentState.currentIndex === 0;
    elements.nextBtn.disabled = currentState.currentIndex === currentState.items.length - 1;

    // Auto-play speech
    setTimeout(() => {
        speak(item.term);
    }, 300);
}

function nextCard() {
    if (currentState.currentIndex < currentState.items.length - 1) {
        currentState.currentIndex++;
        updateCardUI();
    }
}

function prevCard() {
    if (currentState.currentIndex > 0) {
        currentState.currentIndex--;
        updateCardUI();
    }
}

function speak(text) {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    // Use cached voices
    if (voices.length === 0) {
        voices = window.speechSynthesis.getVoices();
    }

    let voice = voices.find(v => v.lang === 'vi-VN');
    if (!voice) {
        voice = voices.find(v => v.name.toLowerCase().includes('vietnam'));
    }

    if (voice) {
        utterance.voice = voice;
        utterance.lang = 'vi-VN';
    } else {
        utterance.lang = 'vi-VN';
    }

    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// Initialize
document.addEventListener('DOMContentLoaded', init);
