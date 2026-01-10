/**
 * LinguoCards - Vanilla JS PWA
 */

// 1. Data Store
const DATA_STORE = {
    'vietnamese-numbers': {
        title: 'Vietnamese Numbers',
        lang: 'vi-VN',
        categories: [
            {
                name: 'Numbers 0-10',
                items: [
                    { id: 1, term: "Không", transcription: "[Khong]", translation: "Zero", category: "Numbers 0-10" },
                    { id: 2, term: "Một", transcription: "[Mot]", translation: "One", category: "Numbers 0-10" },
                    { id: 3, term: "Hai", transcription: "[Hai]", translation: "Two", category: "Numbers 0-10" },
                    { id: 4, term: "Ba", transcription: "[Ba]", translation: "Three", category: "Numbers 0-10" },
                    { id: 5, term: "Bốn", transcription: "[Bon]", translation: "Four", category: "Numbers 0-10" },
                    { id: 6, term: "Năm", transcription: "[Nam]", translation: "Five", category: "Numbers 0-10" },
                    { id: 7, term: "Sáu", transcription: "[Sau]", translation: "Six", category: "Numbers 0-10" },
                    { id: 8, term: "Bảy", transcription: "[Bay]", translation: "Seven", category: "Numbers 0-10" },
                    { id: 9, term: "Tám", transcription: "[Tam]", translation: "Eight", category: "Numbers 0-10" },
                    { id: 10, term: "Chín", transcription: "[Chin]", translation: "Nine", category: "Numbers 0-10" },
                    { id: 11, term: "Mười", transcription: "[Muoi]", translation: "Ten", category: "Numbers 0-10" }
                ]
            },
            {
                name: 'Tens',
                items: [
                    { id: 21, term: "Hai Mươi", transcription: "[Hai Muoi]", translation: "Twenty", category: "Tens" },
                    { id: 31, term: "Ba Mươi", transcription: "[Ba Muoi]", translation: "Thirty", category: "Tens" },
                    { id: 41, term: "Bốn Mươi", transcription: "[Bon Muoi]", translation: "Forty", category: "Tens" },
                    { id: 51, term: "Năm Mươi", transcription: "[Nam Muoi]", translation: "Fifty", category: "Tens" },
                    { id: 61, term: "Sáu Mươi", transcription: "[Sau Muoi]", translation: "Sixty", category: "Tens" },
                    { id: 71, term: "Bảy Mươi", transcription: "[Bay Muoi]", translation: "Seventy", category: "Tens" },
                    { id: 81, term: "Tám Mươi", transcription: "[Tam Muoi]", translation: "Eighty", category: "Tens" },
                    { id: 91, term: "Chín Mươi", transcription: "[Chin Muoi]", translation: "Ninety", category: "Tens" }
                ]
            }
        ]
    },
    'vietnamese-market': {
        title: 'Vietnamese Market',
        lang: 'vi-VN',
        categories: [
            {
                name: 'Market Basics',
                items: [
                    { id: 201, term: "Bao nhiêu?", transcription: "", translation: "How much?", category: "Market Basics", audio: "market_how_much" },
                    { id: 202, term: "Đắt quá!", transcription: "", translation: "Too expensive!", category: "Market Basics", audio: "market_expensive" },
                    { id: 203, term: "Giảm giá không?", transcription: "", translation: "Discount?", category: "Market Basics", audio: "market_discount" },
                    { id: 204, term: "Tôi mua cái này", transcription: "", translation: "I buy this", category: "Market Basics", audio: "market_buy_this" },
                    { id: 205, term: "Hoa quả", transcription: "", translation: "Fruit", category: "Market Basics", audio: "market_fruit" },
                    { id: 206, term: "Nước", transcription: "", translation: "Water", category: "Market Basics", audio: "market_water" },
                    { id: 207, term: "Sữa", transcription: "", translation: "Milk", category: "Market Basics", audio: "market_milk" },
                    { id: 208, term: "Cân", transcription: "", translation: "Kilogram", category: "Market Basics", audio: "market_kg" },
                    { id: 209, term: "Thịt", transcription: "", translation: "Meat", category: "Market Basics", audio: "market_meat" },
                    { id: 210, term: "Cá", transcription: "", translation: "Fish", category: "Market Basics", audio: "market_fish" },
                    { id: 211, term: "Rau", transcription: "", translation: "Vegetables", category: "Market Basics", audio: "market_veg" },
                    { id: 212, term: "Trứng", transcription: "", translation: "Eggs", category: "Market Basics", audio: "market_eggs" }
                ]
            }
        ]
    },
    'vietnamese-basics': {
        title: 'Vietnamese Basics',
        lang: 'vi-VN',
        categories: [
            {
                name: 'Essential Phrases',
                items: [
                    { id: 301, term: "Xin chào", transcription: "[Sin chao]", translation: "Hello", category: "Basics", audio: "basic_hello" },
                    { id: 302, term: "Cảm ơn", transcription: "[Cam on]", translation: "Thank you", category: "Basics", audio: "basic_thanks" },
                    { id: 303, term: "Vâng", transcription: "[Vang]", translation: "Yes", category: "Basics", audio: "basic_yes" },
                    { id: 304, term: "Không", transcription: "[Khong]", translation: "No", category: "Basics", audio: "basic_no" },
                    { id: 305, term: "Xin lỗi", transcription: "[Sin loi]", translation: "Sorry", category: "Basics", audio: "basic_sorry" },
                    { id: 306, term: "Tạm biệt", transcription: "[Tam biet]", translation: "Goodbye", category: "Basics", audio: "basic_goodbye" },
                    { id: 307, term: "Đàn ông", transcription: "[Dan ong]", translation: "Man", category: "Basics", audio: "basic_man" },
                    { id: 308, term: "Phụ nữ", transcription: "[Phu nu]", translation: "Woman", category: "Basics", audio: "basic_woman" },
                    { id: 309, term: "Tốt", transcription: "[Tot]", translation: "Good", category: "Basics", audio: "basic_good" },
                    { id: 310, term: "Tôi không hiểu", transcription: "[Toi khong hieu]", translation: "I don't understand", category: "Basics", audio: "basic_dont_understand" },
                    { id: 311, term: "Tên tôi là", transcription: "[Ten toi la]", translation: "My name is", category: "Basics", audio: "basic_my_name" },
                    { id: 312, term: "Ở đâu", transcription: "[O dau]", translation: "Where is", category: "Basics", audio: "basic_where_is" },
                    // v1.3.45 Additions
                    { id: 313, term: "Làm ơn nói chậm lại", transcription: "", translation: "Speak slower, please", category: "Basics", audio: "basic_speak_slower" },
                    { id: 314, term: "Cái này là gì?", transcription: "", translation: "What is this?", category: "Basics", audio: "basic_what_is_this" },
                    { id: 315, term: "Tôi hiểu", transcription: "", translation: "I understand", category: "Basics", audio: "basic_understand" },
                    { id: 316, term: "Nhà vệ sinh ở đâu?", transcription: "", translation: "Where is the toilet?", category: "Basics", audio: "basic_toilet" },
                    { id: 317, term: "Bạn có thể giúp tôi không?", transcription: "", translation: "Can you help me?", category: "Basics", audio: "basic_help_me" },
                    { id: 318, term: "Một lần nữa", transcription: "", translation: "One more time", category: "Basics", audio: "basic_one_more_time" },
                    { id: 319, term: "Chờ một chút", transcription: "", translation: "Wait a minute", category: "Basics", audio: "basic_wait_minute" },
                    { id: 320, term: "Không có gì", transcription: "", translation: "No problem", category: "Basics", audio: "basic_no_problem" }
                ]
            }
        ]
    },
    'korean-numbers': {
        title: 'Korean Numbers',
        lang: 'ko-KR',
        categories: [
            {
                name: 'Numbers 0-10',
                items: [
                    { id: 1, term: "영", transcription: "[Yeong]", translation: "Zero", category: "Numbers 0-10" },
                    { id: 2, term: "일", transcription: "[Il]", translation: "One", category: "Numbers 0-10" },
                    { id: 3, term: "이", transcription: "[I]", translation: "Two", category: "Numbers 0-10" },
                    { id: 4, term: "삼", transcription: "[Sam]", translation: "Three", category: "Numbers 0-10" },
                    { id: 5, term: "사", transcription: "[Sa]", translation: "Four", category: "Numbers 0-10" },
                    { id: 6, term: "오", transcription: "[O]", translation: "Five", category: "Numbers 0-10" },
                    { id: 7, term: "육", transcription: "[Yuk]", translation: "Six", category: "Numbers 0-10" },
                    { id: 8, term: "칠", transcription: "[Chil]", translation: "Seven", category: "Numbers 0-10" },
                    { id: 9, term: "팔", transcription: "[Pal]", translation: "Eight", category: "Numbers 0-10" },
                    { id: 10, term: "구", transcription: "[Gu]", translation: "Nine", category: "Numbers 0-10" },
                    { id: 11, term: "십", transcription: "[Sip]", translation: "Ten", category: "Numbers 0-10" }
                ]
            },
            {
                name: 'Tens',
                items: [
                    { id: 21, term: "이십", transcription: "[Isip]", translation: "Twenty", category: "Tens" },
                    { id: 31, term: "삼십", transcription: "[Samsip]", translation: "Thirty", category: "Tens" },
                    { id: 41, term: "사십", transcription: "[Sasip]", translation: "Forty", category: "Tens" },
                    { id: 51, term: "오십", transcription: "[Osip]", translation: "Fifty", category: "Tens" },
                    { id: 61, term: "육십", transcription: "[Yuksip]", translation: "Sixty", category: "Tens" },
                    { id: 71, term: "칠십", transcription: "[Chilsip]", translation: "Seventy", category: "Tens" },
                    { id: 81, term: "팔십", transcription: "[Palsip]", translation: "Eighty", category: "Tens" },
                    { id: 91, term: "구십", transcription: "[Gusip]", translation: "Ninety", category: "Tens" }
                ]
            },
            {
                name: 'Numbers 21-99',
                items: [
                    { id: 101, val: 21, term: "이십일", transcription: "[Isip-il]", translation: "Twenty-one", category: "Numbers 21-99" },
                    { id: 105, val: 25, term: "이십오", transcription: "[Isip-o]", translation: "Twenty-five", category: "Numbers 21-99" },
                    { id: 114, val: 34, term: "삼십사", transcription: "[Samsip-sa]", translation: "Thirty-four", category: "Numbers 21-99" },
                    { id: 127, val: 47, term: "사십칠", transcription: "[Sasip-chil]", translation: "Forty-seven", category: "Numbers 21-99" },
                    { id: 138, val: 58, term: "오십팔", transcription: "[Osip-pal]", translation: "Fifty-eight", category: "Numbers 21-99" }
                ]
            }
        ]
    }
};

// ... (State Management and Elements remain the same) ...

function speak(text, langCode, audioOverride = null) {
    // 4. UI/UX: Cancel previous speech (TTS & Audio)
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio = null;
    }
    if (window.speechTimeout) {
        clearTimeout(window.speechTimeout);
        window.speechTimeout = null;
    }

    const debugEl = document.getElementById('debug-info-log');

    // ... (inside speak)
    // 4a. Logic for limit 21-99 (Composite Audio)
    const num = parseInt(text);

    // STRICTLY BYPASS numeric stitching if override provided (v1.3.42)
    if (!audioOverride) {
        // Extended Logic for Vietnamese Numbers (Up to 999,999,999)
        if (langCode === 'vi' && !isNaN(num) && num > 10) {
            if (typeof getVietnameseAudioPaths === 'function') {
                const paths = getVietnameseAudioPaths(num);
                if (paths.length > 0) {
                    console.log(`Stitching audio for ${text}:`, paths);
                    playSequence(paths);
                    if (debugEl) {
                        debugEl.innerHTML = `<div>Text: ${text}</div><div>Source: <span style="color: #a855f7; font-weight: bold;">Composite (Stitched)</span></div><div>Paths: ${paths.join(', ')}</div>`;
                    }
                    return;
                }
            }
        }

        if (!isNaN(num) && num >= 21 && num <= 99) {
            const tens = Math.floor(num / 10) * 10;
            const unit = num % 10;
            if (unit !== 0) {
                let unitFile = `${unit}.mp3`;

                // Vietnamese Exceptions
                if (langCode === 'vi') {
                    if (unit === 1) unitFile = '1_mot.mp3'; // Mốt
                    if (unit === 5) unitFile = '5_lam.mp3'; // Lăm
                    // Note: 4 is 'Tư' in some contexts but 'Bốn' is often accepted. Keeping standard for now unless requested.
                }

                const paths = [
                    `assets/audio/${langCode}/${tens}.mp3`,
                    `assets/audio/${langCode}/${unitFile}`
                ];

                console.log(`Stitching audio for ${text}:`, paths);
                playSequence(paths);
                if (debugEl) {
                    debugEl.innerHTML = `<div>Text: ${text}</div><div>Source: <span style="color: #a855f7; font-weight: bold;">Composite (Stitched)</span></div><div>Paths: ${paths.join(', ')}</div>`;
                }
                return;
            }
        }
    }



    // MP3 Logic (Standard)
    // If audioOverride is present, use it. Otherwise use text.
    const filename = audioOverride || text;
    const path = `assets/audio/${langCode}/${filename}.mp3`;
    const audio = new Audio(path);
    window.currentAudio = audio;

    // Error Handler -> Fallback to TTS
    audio.onerror = () => {
        console.warn(`MP3 not found at ${path}, falling back to System TTS.`);
        useSystemTTS();
    };

    // Attempt to play MP3
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Playing MP3:", path);
            if (debugEl) {
                debugEl.innerHTML = `<div>Text: ${text}</div><div>Source: <span style="color: #3b82f6; font-weight: bold;">MP3 File</span></div><div>Path: ${path}</div>`;
            }
        }).catch(err => {
            // Auto-play policy or other error
            console.warn("Audio play error (auto-play blocked or 404), trying TTS:", err);
            useSystemTTS();
        });
    }

    function useSystemTTS() {
        if (!window.speechSynthesis) return;

        // Get available voices
        if (voices.length === 0) {
            voices = window.speechSynthesis.getVoices();
        }

        // Try to find a voice for the target language (starts with langCode, e.g. 'vi', 'ko')
        let voice = voices.find(v => v.lang.startsWith(langCode));

        if (voice) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = voice;
            utterance.lang = voice.lang;
            utterance.rate = 0.9;

            console.log("Speaking term (TTS):", text);
            window.speechSynthesis.speak(utterance);

            if (debugEl) {
                debugEl.innerHTML = `<div>Text: ${text}</div><div>Lang: ${voice.lang}</div><div>Voice: ${voice.name}</div><div>Source: System TTS</div>`;
            }
        } else {
            console.warn(`Voice for language ${langCode} not found.`);
            if (debugEl) {
                debugEl.innerHTML = `<div>Text: ${text}</div><div>Lang: ${langCode}</div><div style="color: #ef4444; font-weight: bold;">Voice: NOT FOUND</div><div>Source: System TTS (Failed)</div>`;
            }
        }
    }
}

// Service Worker Registration
// Service Worker & PWA Logic
let deferredPrompt;

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

// Capture install prompt
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
});

function showInstallPromotion() {
    const installBtn = document.getElementById('install-app-btn');
    if (installBtn) {
        installBtn.classList.remove('hidden');
    }
}

async function installApp() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
    document.getElementById('install-app-btn').classList.add('hidden');
}

async function checkForUpdates() {
    // 1. Confirmation / Message
    if (!confirm("Force Update: This will clear the cache and reload the latest version (v1.3.7). Continue?")) {
        return;
    }

    // UI Feedback (Loading state)
    const updateBtn = document.getElementById('check-update-btn');
    if (updateBtn) {
        updateBtn.textContent = "Clearing Cache...";
        updateBtn.disabled = true;
    }

    try {
        // 2. Clear All Caches
        if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(key => caches.delete(key)));
            console.log('Caches cleared.');
        }

        // 3. Unregister Service Worker
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (const registration of registrations) {
                await registration.unregister();
            }
            console.log('Service Workers unregistered.');
        }

        // 4. Final Alert & Reload
        alert("App cache cleared. Reloading to version v1.3.7...");
        window.location.reload(true);

    } catch (error) {
        console.error("Update failed:", error);
        alert("An error occurred during update. Please manually refresh.");
        if (updateBtn) {
            updateBtn.textContent = "Check for Updates";
            updateBtn.disabled = false;
        }
    }
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

// Global Audio State
window.currentAudio = null;
window.speechTimeout = null;

// 3. DOM Elements
const elements = {
    homeScreen: document.getElementById('home-screen'),
    learningScreen: document.getElementById('learning-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    // startBtn removed as we'll have dynamic buttons
    settingsBtn: document.getElementById('settings-btn'),
    settingsModal: document.getElementById('settings-modal'),
    closeSettingsBtn: document.getElementById('close-settings-btn'),
    backBtn: document.getElementById('back-home-btn'),
    // Quiz Elements
    // Quiz Elements
    quizBackBtn: document.getElementById('quiz-back-btn'),
    quizContainer: document.querySelector('.quiz-container'),
    quizTitle: document.getElementById('quiz-header-title'),
    quizPlayBtn: document.getElementById('quiz-play-btn'),
    quizDisplay: document.getElementById('quiz-input-display'),
    quizKeypad: document.getElementById('quiz-keypad'),
    quizSubmitBtn: document.getElementById('quiz-submit-btn'),
    quizProgress: document.getElementById('quiz-progress'), // Added v1.3.45
    quizStats: document.getElementById('quiz-stats'),
    quizVictoryOverlay: document.getElementById('quiz-victory-overlay'),
    quizFinalScore: document.getElementById('quiz-final-score'),
    quizRetryBtn: document.getElementById('quiz-retry-btn'),
    quizExitBtn: document.getElementById('quiz-exit-btn'),
    // Calculator Elements
    calcScreen: document.getElementById('calculator-screen'),
    calcBackBtn: document.getElementById('calc-back-btn'),
    calcDisplay: document.getElementById('calc-input-display'),
    calcKeypad: document.getElementById('calc-keypad'),
    calcSpeakBtn: document.getElementById('calc-speak-btn'),

    card: document.getElementById('flashcard'),
    cardTerm: document.getElementById('card-term'),
    cardTranscription: document.getElementById('card-transcription'),
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
    renderLanguageMenu();
    setupEventListeners();

    // Initialize voices
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = initVoices;
    }
    initVoices();

    // Explicitly hide modal on init
    if (elements.settingsModal) {
        elements.settingsModal.classList.add('hidden');
    }

    handleRoute(); // Handle initial load
}

function renderLanguageMenu() {
    // 1. Reset Container Styles
    elements.topicList.removeAttribute('style');
    // Use our defined CSS class instead of utility classes
    elements.topicList.className = 'topic-grid';

    elements.topicList.innerHTML = '';

    // Update instruction text
    const instruction = document.querySelector('#home-screen p');
    if (instruction) instruction.textContent = "Select a Language";

    const processedLangs = new Set();

    Object.keys(DATA_STORE).forEach(key => {
        const topic = DATA_STORE[key];
        const langFamily = topic.lang.split('-')[0]; // vi, ko

        // Check if we already handled this language family's main hub
        if (processedLangs.has(langFamily)) return;

        let cardTitle = topic.title;
        let cardAction = `#/menu/${key}`;
        let totalCount = topic.categories.reduce((acc, cat) => acc + cat.items.length, 0);

        // Special Case: Vietnamese Hub
        if (langFamily === 'vi') {
            cardTitle = "Vietnamese Language";
            cardAction = `#/hub/vi`;
            // Maybe aggregate count if multiple VI topics exist?
            // For now, simple.
            totalCount = 0; // Or just hide count? 
            // Let's count all VI cards
            Object.values(DATA_STORE).filter(t => t.lang.startsWith('vi')).forEach(t => {
                totalCount += t.categories.reduce((acc, cat) => acc + cat.items.length, 0);
            });
        }

        const card = document.createElement('div');
        // Clean card classes
        card.className = 'topic-card w-full';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div style="width: 100%; text-align: center; padding: 1rem;">
                <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">${cardTitle}</h3>
                <span class="badge">${totalCount} words</span>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.hash = cardAction;
        });

        elements.topicList.appendChild(card);
        processedLangs.add(langFamily);
    });
}

function renderCategoryMenu(topicId) {
    const topic = DATA_STORE[topicId];

    // Hide default instruction
    const instruction = document.querySelector('#home-screen p');
    if (instruction) instruction.style.display = 'none';

    // Scroll Reset (Mobile Fix)
    window.scrollTo(0, 0);

    // FIX: Push Main Title down to avoid overlapping with fixed buttons (User Req)
    if (elements.homeTitle) {
        elements.homeTitle.style.marginTop = '1rem';
    }

    // 1. Reset Container Styles (Mental Model: "Scrollable Wrapper")
    elements.topicList.removeAttribute('style');
    elements.topicList.innerHTML = '';

    // Apply Scrollable Container Styles
    elements.topicList.style.display = 'block';
    elements.topicList.style.height = 'auto';
    elements.topicList.style.pointerEvents = 'auto';
    // Removed specific overflow/maxHeight here to let parent .screen handle scrolling

    // 2. Add Header (Directly to block container)
    // Header Container (Flex Centered)
    const header = document.createElement('div');
    // Fix Header Overlap (v1.3.21) -> Reduced spacing (v1.3.41)
    header.style.cssText = 'position: relative; display: flex; justify-content: center; align-items: center; width: 100%; min-height: 4rem; margin-bottom: 2rem; padding-top: 1rem;';

    header.innerHTML = `
        <button id="menu-back-btn" class="btn-menu" style="position: fixed; top: 1rem; left: 1rem; z-index: 50;">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
             </svg>
             Back
        </button>
        <button id="menu-rules-btn" class="btn-menu" style="position: fixed; top: 1rem; right: 1rem; z-index: 50; display: ${topic.lang === 'vi-VN' ? 'flex' : 'none'};">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
             </svg>
             Rules
        </button>
        <h2 style="margin: 0; margin-top: 1rem; text-align: center; width: 100%; font-size: 1.5rem; padding: 0 1rem;">${topic.title}</h2>
    `;
    elements.topicList.appendChild(header);

    // 3. Create Grid Wrapper for Cards
    const gridContainer = document.createElement('div');
    gridContainer.className = 'topic-grid';
    elements.topicList.appendChild(gridContainer);

    header.querySelector('#menu-back-btn').addEventListener('click', () => {
        // Hub Navigation Logic
        if (topic.lang === 'vi-VN') {
            window.location.hash = '#/hub/vi';
        } else {
            const instruction = document.querySelector('#home-screen p');
            if (instruction) instruction.style.display = 'block';
            window.location.hash = '#/';
        }
    });

    const rulesBtn = header.querySelector('#menu-rules-btn');
    if (rulesBtn) {
        rulesBtn.addEventListener('click', () => {
            showRulesModal();
        });
    }

    // 4. Populate Cards (Append to Grid Container)
    topic.categories.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'topic-card'; // Grid handles gap
        card.style.width = '100%';

        card.innerHTML = `
            <div>
                <h3>${cat.name}</h3>
                <span class="badge">${cat.items.length} cards</span>
            </div>
            <div class="topic-actions">
                <button class="btn-sm btn-action" data-action="learn">Practice</button>
                <button class="btn-sm btn-action secondary" data-action="quiz">Test</button>
            </div>
        `;

        // Event delegation
        card.querySelector('[data-action="learn"]').addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.hash = `/learn/${topicId}/${index}`;
        });

        card.querySelector('[data-action="quiz"]').addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.hash = `/quiz/${topicId}/${index}`;
        });

        gridContainer.appendChild(card);
    });

    // Special Cards (Infinite Mode & Rules)
    // FIX: Only show for Numbers topic (v1.3.41)
    if (topicId === 'vietnamese-numbers') {
        // 4 Levels of Infinite Mode
        const addInfCard = (title, mode, color) => {
            const c = document.createElement('div');
            c.className = 'topic-card';
            c.style.width = '100%';
            c.innerHTML = `
                <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3>${title}</h3>
                        <span class="badge" style="background: ${color}; color: white;">Infinite</span>
                    </div>
                    <button class="btn-sm btn-action" style="background: ${color.replace('0.5', '0.2')}; color: white;">Start</button>
                </div>
            `;
            c.addEventListener('click', () => { window.location.hash = `#/infinite/${topicId}/${mode}`; });
            gridContainer.appendChild(c);
        };

        addInfCard("Infinite: Tens (21-99)", "tens", "rgba(168, 85, 247, 0.5)"); // Purple
        addInfCard("Infinite: Hundreds (100-999)", "hundreds", "rgba(59, 130, 246, 0.5)"); // Blue
        addInfCard("Infinite: Round Thousands", "thousands", "rgba(16, 185, 129, 0.5)"); // Green
        addInfCard("Infinite: Absolute (1-1M)", "absolute", "rgba(239, 68, 68, 0.5)"); // Red

        // Calculator Card
        const calcCard = document.createElement('div');
        calcCard.className = 'topic-card';
        calcCard.style.width = '100%';
        calcCard.innerHTML = `
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3>Pronunciation Calculator</h3>
                    <p style="font-size: 0.8rem; color: #94a3b8;">Type any number to hear it in Vietnamese.</p>
                </div>
                <button class="btn-sm btn-action" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8;">Open</button>
            </div>
        `;
        calcCard.addEventListener('click', () => { window.location.hash = `#/calculator/${topicId}`; });
        gridContainer.appendChild(calcCard);

    } else if (topic.lang !== 'vi-VN') { // Fallback for Korean, etc (SKIP for Vietnamese Market)
        // Korean Infinite Mode (Fallback)
        const infCard = document.createElement('div');
        infCard.className = 'topic-card';
        infCard.style.width = '100%';
        infCard.innerHTML = `
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3>Infinite Practice (21-99)</h3>
                    <span class="badge" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">Random Mode</span>
                </div>
                <button class="btn-sm btn-action" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">Start</button>
            </div>
        `;
        infCard.addEventListener('click', () => {
            window.location.hash = `#/infinite/${topicId}`; // Defaults to tens
        });
        gridContainer.appendChild(infCard);
    }
}

// Vietnamese Language Hub
function renderVietnameseHub() {
    // Hide default instruction
    const instruction = document.querySelector('#home-screen p');
    if (instruction) instruction.style.display = 'none';
    window.scrollTo(0, 0);

    // FIX: Push Main Title down
    if (elements.homeTitle) elements.homeTitle.style.marginTop = '1rem';

    // Reset container
    elements.topicList.removeAttribute('style');
    elements.topicList.innerHTML = '';
    elements.topicList.style.display = 'block';

    // Header
    const header = document.createElement('div');
    header.style.cssText = 'position: relative; display: flex; justify-content: center; align-items: center; width: 100%; min-height: 4rem; margin-bottom: 2rem; padding-top: 1rem;';
    header.innerHTML = `
        <button id="hub-back-btn" class="btn-menu" style="position: fixed; top: 1rem; left: 1rem; z-index: 50;">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
             </svg>
             Back
        </button>
        <h2 style="margin: 0; margin-top: 1rem; text-align: center; width: 100%; font-size: 1.5rem; padding: 0 1rem;">Vietnamese Language</h2>
    `;
    elements.topicList.appendChild(header);

    // Grid
    const gridContainer = document.createElement('div');
    gridContainer.className = 'topic-grid';
    elements.topicList.appendChild(gridContainer);

    // Back Logic
    header.querySelector('#hub-back-btn').addEventListener('click', () => {
        instruction.style.display = 'block';
        window.location.hash = '#/';
    });

    // Card A: Numbers Master
    const numbersCard = document.createElement('div');
    numbersCard.className = 'topic-card w-full';
    numbersCard.style.cursor = 'pointer';
    numbersCard.innerHTML = `
        <div style="width: 100%; text-align: center; padding: 1rem;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔢</div>
            <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Numbers Master</h3>
            <span class="badge">Learn & Calculator</span>
        </div>
    `;
    numbersCard.addEventListener('click', () => {
        window.location.hash = '#/menu/vietnamese-numbers';
    });
    gridContainer.appendChild(numbersCard);

    // Card B: Market & Shopping
    const marketCard = document.createElement('div');
    marketCard.className = 'topic-card w-full';
    marketCard.style.cursor = 'pointer';
    marketCard.innerHTML = `
        <div style="width: 100%; text-align: center; padding: 1rem;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🛍️</div>
            <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Market & Shopping</h3>
            <span class="badge">Basics</span>
        </div>
    `;
    marketCard.addEventListener('click', () => {
        window.location.hash = '#/menu/vietnamese-market';
    });
    gridContainer.appendChild(marketCard);

    // Card C: Basics
    const basicsCard = document.createElement('div');
    basicsCard.className = 'topic-card w-full';
    basicsCard.style.cursor = 'pointer';
    basicsCard.innerHTML = `
        <div style="width: 100%; text-align: center; padding: 1rem;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">👋</div>
            <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Basics</h3>
            <span class="badge">Essential Phrases</span>
        </div>
    `;
    basicsCard.addEventListener('click', () => {
        window.location.hash = '#/menu/vietnamese-basics';
    });
    gridContainer.appendChild(basicsCard);
}

function setupEventListeners() {
    // History API listener
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);

    elements.backBtn.addEventListener('click', goHome);
    if (elements.quizBackBtn) elements.quizBackBtn.addEventListener('click', goHome);

    // Quiz Victory Buttons
    if (elements.quizRetryBtn) {
        elements.quizRetryBtn.addEventListener('click', () => {
            // Reset Victory Screen
            if (elements.quizVictoryOverlay) elements.quizVictoryOverlay.style.display = 'none';
            // Reset Quiz State explicitly
            currentState.currentIndex = 0;
            currentState.quiz.correctCount = 0;
            currentState.quiz.totalAttempted = 0;

            startQuiz(currentState.topicId, currentState.catIndex);
        });
    }
    if (elements.quizExitBtn) {
        elements.quizExitBtn.addEventListener('click', () => {
            if (elements.quizVictoryOverlay) elements.quizVictoryOverlay.style.display = 'none';
            currentState.currentIndex = 0;
            currentState.quiz.correctCount = 0;
            currentState.quiz.totalAttempted = 0;
            goHome();
        });
    }

    // Settings Modal
    if (elements.settingsBtn) {
        elements.settingsBtn.addEventListener('click', () => {
            elements.settingsModal.classList.remove('hidden');
        });
    }

    if (elements.closeSettingsBtn) {
        elements.closeSettingsBtn.addEventListener('click', () => {
            elements.settingsModal.classList.add('hidden');
        });
    }

    // Rules Modal
    elements.closeRulesBtn = document.getElementById('close-rules-btn');
    elements.rulesModal = document.getElementById('rules-modal');
    if (elements.closeRulesBtn) {
        elements.closeRulesBtn.addEventListener('click', () => {
            elements.rulesModal.classList.add('hidden');
        });
    }

    // PWA Buttons
    const installBtn = document.getElementById('install-app-btn');
    if (installBtn) installBtn.addEventListener('click', installApp);

    const updateBtn = document.getElementById('check-update-btn');
    if (updateBtn) updateBtn.addEventListener('click', checkForUpdates);

    elements.card.addEventListener('click', flipCard);

    // Speak button
    if (elements.speakBtn) {
        elements.speakBtn.onclick = (e) => {
            e.stopPropagation();

            // Visual Feedback: Blue color for 300ms
            elements.speakBtn.classList.add('text-blue-500');
            setTimeout(() => {
                elements.speakBtn.classList.remove('text-blue-500');
            }, 300);

            if (currentState.isInfinite) {
                const lang = DATA_STORE[currentState.topicId].lang.split('-')[0];
                speak(currentState.infiniteNum.toString(), lang);
            } else if (currentState.items.length > 0) {
                // FIXED: item is now safely defined here
                const item = currentState.items[currentState.currentIndex];
                const lang = DATA_STORE[currentState.topicId].lang.split('-')[0];

                // Override: Custom Audio Key
                if (item.audio) {
                    speak(item.term, lang, item.audio); // Pass Term for TTS Fallback, Audio for MP3
                    return;
                }

                // Default Logic (Numbers)
                let val = item.val;
                if (val === undefined) val = item.id - 1;

                speak(val.toString(), lang);
            }
        };
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

    // Calculator Listeners
    if (elements.calcBackBtn) elements.calcBackBtn.addEventListener('click', goHome);

    if (elements.calcKeypad) {
        elements.calcKeypad.addEventListener('click', (e) => {
            const btn = e.target.closest('.keypad-btn');
            if (!btn) return;
            handleCalcKeypadInput(btn.dataset.key);
        });
    }

    if (elements.calcSpeakBtn) {
        elements.calcSpeakBtn.addEventListener('click', () => {
            const val = elements.calcDisplay.textContent.trim().replace(/\s/g, '');
            const transcriptionEl = document.getElementById('calculator-transcription');

            if (!val || val === '') {
                // handle empty - speak zero
                speak('0', 'vi');
                elements.calcDisplay.textContent = '0'; // Feedback
                if (transcriptionEl) transcriptionEl.textContent = numberToVietnamese(0);
                return;
            }
            const num = parseInt(val, 10);
            speak(val, 'vi');

            // UI Update
            if (transcriptionEl) {
                // visual fade effect
                transcriptionEl.style.opacity = '0';
                setTimeout(() => {
                    transcriptionEl.textContent = numberToVietnamese(num);
                    transcriptionEl.style.opacity = '1';
                }, 150);
            }
        });
    }

    // Quiz Keypad Listener (Delegation)
    if (elements.quizKeypad) {
        elements.quizKeypad.addEventListener('click', (e) => {
            const btn = e.target.closest('.keypad-btn');
            if (!btn) return;

            // Visual feedback handled by CSS :active, but maybe sound?
            handleKeypadInput(btn.dataset.key);
        });
    }

    if (elements.quizPlayBtn) {
        elements.quizPlayBtn.addEventListener('click', () => {
            // Visual Animation
            elements.quizPlayBtn.style.transform = "scale(0.95)";
            setTimeout(() => elements.quizPlayBtn.style.transform = "scale(1)", 150);
            playCurrentQuizAudio();
        });
    }

    if (elements.quizBackBtn) {
        elements.quizBackBtn.addEventListener('click', () => {
            if (currentState.topicId) {
                window.location.hash = `#/menu/${currentState.topicId}`;
            } else {
                goHome();
            }
        });
    }

    if (elements.quizSubmitBtn) {
        elements.quizSubmitBtn.addEventListener('click', () => {
            const userVal = elements.quizDisplay.textContent.trim();
            if (!userVal) return;

            const item = currentState.items[currentState.currentIndex];
            let correctVal = item.val;
            if (correctVal === undefined) correctVal = item.id - 1;

            // Diagnostic Log
            console.log('Quiz Check: Input=', userVal, 'Correct=', correctVal);

            const isCorrect = userVal === correctVal.toString();

            if (isCorrect) {
                // 1. Process Feedback (Green)
                currentState.quiz.correctCount++;
                elements.quizDisplay.classList.add('text-correct');
                elements.quizDisplay.style.borderColor = '#4ade80';

                const overlay = document.createElement('div');
                overlay.textContent = "✅";
                overlay.style.cssText = "position:absolute; font-size: 3rem; animation: fadeIn 0.2s;";
                elements.quizDisplay.appendChild(overlay);
            } else {
                // 1. Process Feedback (Red)
                elements.quizDisplay.classList.add('text-wrong');
                elements.quizDisplay.style.borderColor = '#f87171';
                elements.quizDisplay.innerHTML = `<span style="font-size: 1rem; color: #f87171;">Correct: ${correctVal}</span>`;

                const overlay = document.createElement('div');
                overlay.textContent = "❌";
                overlay.style.cssText = "position:absolute; font-size: 3rem; animation: fadeIn 0.2s; top: -3rem;";
                elements.quizDisplay.appendChild(overlay);
            }

            elements.quizSubmitBtn.disabled = true;

            // 3. AFTER Delay -> Increment & Check
            const delay = isCorrect ? 1500 : 2000;
            setTimeout(() => {
                // 2. Increment logic
                currentState.currentIndex++;
                console.log(`Progress: Index=${currentState.currentIndex} Total=${currentState.items.length}`);

                // Bulletproof Transition Logic
                // Fail-safe: If we reached the end OR the next item doesn't exist
                if (currentState.currentIndex >= currentState.items.length || !currentState.items[currentState.currentIndex]) {
                    console.log('Triggering Victory Screen NOW.');
                    showQuizVictory();
                } else {
                    console.log('Moving to next question...');
                    renderQuizMode(true);
                    elements.quizSubmitBtn.disabled = false;
                }
            }, delay);
        });
    }
}

function handleRoute() {
    const hash = window.location.hash;

    if (hash.startsWith('#/menu/')) {
        const topicId = hash.replace('#/menu/', '');
        if (DATA_STORE[topicId]) {
            showHomeScreen();
            renderCategoryMenu(topicId);
        } else {
            window.location.hash = '#/';
        }
    } else if (hash === '#/hub/vi') {
        showHomeScreen();
        renderVietnameseHub();
    } else if (hash.startsWith('#/learn/')) {
        const parts = hash.replace('#/learn/', '').split('/');
        const topicId = parts[0];
        const catIndex = parts[1];

        if (DATA_STORE[topicId] && catIndex !== undefined) {
            startLearning(topicId, parseInt(catIndex));
        } else {
            window.location.hash = '#/';
        }
    } else if (hash.startsWith('#/quiz/')) {
        const parts = hash.replace('#/quiz/', '').split('/');
        const topicId = parts[0];
        const catIndex = parts[1];

        if (DATA_STORE[topicId] && catIndex !== undefined) {
            startQuiz(topicId, parseInt(catIndex));
        } else {
            window.location.hash = '#/';
        }
    } else if (hash.startsWith('#/infinite/')) {
        const parts = hash.replace('#/infinite/', '').split('/');
        const topicId = parts[0];
        const mode = parts[1] || 'tens';

        if (DATA_STORE[topicId]) {
            renderInfiniteMode(topicId, mode);
        } else {
            window.location.hash = '#/';
        }
    } else if (hash.startsWith('#/calculator/')) {
        const topicId = hash.replace('#/calculator/', '');
        if (DATA_STORE[topicId]) {
            renderCalculatorMode(topicId);
        } else {
            window.location.hash = '#/';
        }
    } else {
        showHomeScreen();
        renderLanguageMenu();
    }
}

function showHomeScreen() {
    elements.learningScreen.classList.remove('active');
    if (elements.quizScreen) elements.quizScreen.classList.remove('active');
    if (elements.calcScreen) {
        elements.calcScreen.classList.remove('active');
        elements.calcScreen.style.visibility = ''; // Reset inline override
        elements.calcScreen.style.opacity = '';    // Reset inline override
    }

    setTimeout(() => {
        elements.learningScreen.style.display = 'none';
        if (elements.quizScreen) elements.quizScreen.style.display = 'none';
        if (elements.calcScreen) elements.calcScreen.style.display = 'none';

        elements.homeScreen.style.display = 'flex';
        requestAnimationFrame(() => {
            elements.homeScreen.classList.add('active');
        });
    }, 300);

    window.speechSynthesis.cancel();
}

function startLearning(topicId, catIndex) {
    const topic = DATA_STORE[topicId];
    if (!topic || !topic.categories[catIndex]) return;

    // prevent re-init if already active on same
    if (currentState.topicId === topicId && currentState.catIndex === catIndex && elements.learningScreen.classList.contains('active')) {
        return;
    }

    currentState.topicId = topicId;
    currentState.catIndex = catIndex;
    currentState.items = topic.categories[catIndex].items;
    currentState.currentIndex = 0;
    currentState.isFlipped = false;
    currentState.isInfinite = false;

    // Reset Infinite UI overrides
    elements.learningScreen.style.paddingBottom = '8rem';
    elements.progressIndicator.style.paddingLeft = '';
    elements.progressIndicator.style.paddingRight = '';

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

function startQuiz(topicId, catIndex) {
    const topic = DATA_STORE[topicId];
    if (!topic || !topic.categories[catIndex]) return;

    currentState.topicId = topicId;
    currentState.catIndex = catIndex;
    // Shuffle only items from this category
    currentState.items = [...topic.categories[catIndex].items].sort(() => Math.random() - 0.5);
    currentState.currentIndex = 0;
    currentState.quiz = {
        correctCount: 0,
        totalAttempted: 0,
        isFirstAttempt: true
    };

    renderQuizMode(false);

    // Hide Victory Overlay if present (Direct Style)
    if (elements.quizVictoryOverlay) elements.quizVictoryOverlay.style.display = 'none';

    elements.homeScreen.classList.remove('active');
    elements.learningScreen.classList.remove('active');

    setTimeout(() => {
        elements.homeScreen.style.display = 'none';
        elements.learningScreen.style.display = 'none';

        elements.quizScreen.style.display = 'flex';
        requestAnimationFrame(() => {
            elements.quizScreen.classList.add('active');

            // Auto-play first audio after transition
            setTimeout(() => {
                playCurrentQuizAudio();
            }, 300);
        });
    }, 300);
}

// New Quiz Mode Logic (Keypad vs Multiple Choice)
function renderQuizMode(playAudio = true) {
    // 0. RESET STATE
    if (elements.quizSubmitBtn) elements.quizSubmitBtn.disabled = false;

    // 1. Setup UI
    const topic = DATA_STORE[currentState.topicId];
    const cat = topic.categories[currentState.catIndex];
    const item = currentState.items[currentState.currentIndex];

    // Update Header
    if (elements.quizTitle) elements.quizTitle.textContent = `Quiz: ${cat.name}`;

    // Layout Fixes
    if (elements.quizContainer) {
        elements.quizContainer.style.paddingBottom = '8rem';
        elements.quizContainer.style.justifyContent = 'flex-start';
    }

    // Determine Mode: Numeric (Keypad) or Word (Multiple Choice)
    const isNumericQuiz = currentState.topicId.includes('numbers');

    elements.quizDisplay.textContent = '?';
    elements.quizDisplay.classList.remove('text-correct', 'text-wrong');
    elements.quizDisplay.style.borderColor = '#334155';

    // v1.3.49: Display Vietnamese Term (Topic) instead of '?' for Words
    // This allows "Read & Listen" mode for Basics/Market
    if (!isNumericQuiz) {
        elements.quizDisplay.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <span style="font-size: 2.25rem; color: #f8fafc; font-weight: 700; text-align: center; line-height: 1.2;">${item.term}</span>
                ${item.transcription ? `<span id="quiz-transcription" style="font-size: 1.1rem; color: #94a3b8; margin-top: 0.5rem; font-family: monospace;">${item.transcription}</span>` : ''}
            </div>
        `;
    } else {
        elements.quizDisplay.innerHTML = '<span style="font-size: 3rem; color: #94a3b8;">?</span>';
    }

    if (elements.quizProgress) {
        elements.quizProgress.textContent = `${currentState.currentIndex + 1} / ${currentState.items.length}`;
    }

    // Toggle UI Elements based on Mode
    let dynContainer = document.getElementById('quiz-dynamic-container');

    if (isNumericQuiz) {
        // --- NUMERIC MODE (Keypad) ---

        // 1. Show Keypad & Submit
        if (elements.quizKeypad) elements.quizKeypad.style.display = 'grid';
        if (elements.quizSubmitBtn) elements.quizSubmitBtn.style.display = 'block';

        // 2. Hide/Clear Multiple Choice Container
        if (dynContainer) dynContainer.innerHTML = '';

        // 3. Reset Display Input logic (handled by keypad listener)

    } else {
        // --- MULTIPLE CHOICE MODE ---

        // 1. Hide Keypad & Submit
        if (elements.quizKeypad) elements.quizKeypad.style.display = 'none';
        if (elements.quizSubmitBtn) elements.quizSubmitBtn.style.display = 'none';

        // 2. Prepare Dynamic Container for Buttons
        if (!dynContainer) {
            dynContainer = document.createElement('div');
            dynContainer.id = 'quiz-dynamic-container';
            dynContainer.style.width = '100%';
            // Insert it where keypad usually is (after display)
            // elements.quizDisplay is in main... parentElement is .quiz-container
            // We want it after quizDisplay
            elements.quizDisplay.parentElement.insertBefore(dynContainer, elements.quizKeypad);
        }
        dynContainer.innerHTML = ''; // Clear previous buttons

        // 3. Generate Options
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'quiz-options-grid';
        optionsContainer.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; margin-top: 1rem; margin-bottom: 4rem;';

        const correctAnswer = item.translation;
        const allTranslations = currentState.items.map(i => i.translation);

        // Filter out correct answer to get distractors
        const otherOptions = allTranslations.filter(t => t !== correctAnswer);

        // If we don't have enough distractors (e.g. only 2 items in category), handle gracefully
        // But for Basics (12 items) and Market (12 items) it is fine.
        const distractors = otherOptions.sort(() => 0.5 - Math.random()).slice(0, 3);

        const options = [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());

        options.forEach(opt => {
            const btn = document.createElement('button');
            // Style: Large, Deep Slate (btn-secondary-like but customised)
            btn.className = 'btn-secondary';
            btn.textContent = opt;
            // Enhanced Styling for Pixel 7 touch targets
            btn.style.cssText = `
                padding: 1rem; 
                font-size: 1rem; 
                min-height: 5rem; 
                word-break: break-word;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                background-color: #1e293b; 
                border: 1px solid #334155;
                color: #f8fafc;
                border-radius: 0.5rem;
                transition: all 0.2s;
            `;

            btn.onclick = () => handleMultipleChoiceAnswer(opt, correctAnswer, btn, optionsContainer);
            optionsContainer.appendChild(btn);
        });

        dynContainer.appendChild(optionsContainer);
    }

    if (playAudio) {
        setTimeout(() => {
            playCurrentQuizAudio();
        }, 500);
    }
}

function handleMultipleChoiceAnswer(selected, correct, btnElement, container) {
    // 1. Disable all buttons immediately
    const allBtns = container.querySelectorAll('button');
    allBtns.forEach(b => {
        b.disabled = true;
        b.style.cursor = 'default';
        b.style.transform = 'none'; // stop any hover effects
        b.style.opacity = '0.9';
    });

    const isCorrect = selected === correct;

    if (isCorrect) {
        // User picked CORRECT -> Green
        btnElement.style.background = '#22c55e'; // Green-500
        btnElement.style.borderColor = '#4ade80';
        btnElement.style.color = '#ffffff';

        currentState.quiz.correctCount++;
        elements.quizDisplay.textContent = "✅";
        elements.quizDisplay.classList.add('text-correct');
        elements.quizDisplay.style.borderColor = '#4ade80';
    } else {
        // User picked WRONG -> Red
        btnElement.style.background = '#ef4444'; // Red-500
        btnElement.style.borderColor = '#fca5a5';
        btnElement.style.color = '#ffffff';

        // IMMEDIATELY Highlight Correct One -> Green
        allBtns.forEach(b => {
            if (b.textContent === correct) {
                b.style.background = '#22c55e'; // Green-500
                b.style.borderColor = '#4ade80';
                b.style.color = '#ffffff';
                b.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.4)'; // Subtle glow for emphasis
                b.style.border = '2px solid #ffffff';
            }
        });

        elements.quizDisplay.textContent = "❌";
        elements.quizDisplay.classList.add('text-wrong');
        elements.quizDisplay.style.borderColor = '#f87171';
    }

    // Delay & Next
    const delay = isCorrect ? 1500 : 2500;
    setTimeout(() => {
        currentState.currentIndex++;

        if (currentState.currentIndex >= currentState.items.length) {
            showQuizVictory();
        } else {
            renderQuizMode(true);
        }
    }, delay);
}




function playCurrentQuizAudio() {
    const item = currentState.items[currentState.currentIndex];
    const lang = DATA_STORE[currentState.topicId].lang.split('-')[0];

    // v1.3.44: Support Audio Overrides (Market/Basics) in Quiz
    if (item.audio) {
        speak(item.term, lang, item.audio);
    } else {
        // Determine Value for Numbers
        let val = item.val;
        if (val === undefined) val = item.id - 1; // Fallback for 0-10, Tens
        // Special handling for "Tens" if ID logic holds: 21->20.
        // If we rely on IDs for Tens (21,31..), (21-1)=20. Correct.
        speak(val.toString(), lang);
    }
}

function nextQuizItem() {
    currentState.currentIndex++;
    currentState.quiz.isFirstAttempt = true;

    if (currentState.currentIndex >= currentState.items.length) {
        showQuizVictory();
    } else {
        renderQuizMode(true);
    }
}

function showQuizVictory() {
    try {
        if (elements.quizVictoryOverlay) {
            // MOVED TO BODY to avoid parent visibility issues
            document.body.appendChild(elements.quizVictoryOverlay);

            elements.quizVictoryOverlay.classList.remove('hidden');

            // Nuclear Fix: Force styles directly
            elements.quizVictoryOverlay.style.setProperty('display', 'flex', 'important');
            elements.quizVictoryOverlay.style.setProperty('visibility', 'visible', 'important');
            elements.quizVictoryOverlay.style.setProperty('opacity', '1', 'important');
            elements.quizVictoryOverlay.style.setProperty('z-index', '10000', 'important');
            elements.quizVictoryOverlay.style.setProperty('position', 'fixed', 'important');
            elements.quizVictoryOverlay.style.inset = '0';
            elements.quizVictoryOverlay.style.background = 'rgba(15, 23, 42, 0.95)';
            elements.quizVictoryOverlay.style.flexDirection = 'column';
            elements.quizVictoryOverlay.style.alignItems = 'center';
            elements.quizVictoryOverlay.style.justifyContent = 'center';

            const percent = Math.round((currentState.quiz.correctCount / currentState.items.length) * 100);

            elements.quizVictoryOverlay.innerHTML = `
                <div style="background: #1e293b; padding: 2.5rem; border-radius: 1rem; border: 1px solid #334155; text-align: center; max-width: 90%; width: 400px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                    <h2 style="font-size: 2.5rem; color: #4ade80; margin-bottom: 0.5rem; font-weight: bold;">Rất tốt!</h2>
                    <p style="font-size: 1.25rem; color: #38bdf8; margin-bottom: 2rem;">(Very good!)</p>

                    <div style="margin-bottom: 2rem;">
                        <p style="color: #cbd5e1; font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 500;">
                            Final Score: <span style="color: #f8fafc; font-weight: 700;">${currentState.quiz.correctCount}</span> / ${currentState.items.length}
                        </p>
                        <p style="color: ${percent >= 80 ? '#4ade80' : percent >= 50 ? '#facc15' : '#f87171'}; font-size: 1.1rem; font-weight: 600;">
                            (${percent}%)
                        </p>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <button id="quiz-btn-restart" class="btn-primary" style="width: 100%;">Restart Quiz</button>
                        <button id="quiz-btn-back" class="btn-secondary" style="width: 100%; border: 1px solid #334155;">Back to Menu</button>
                    </div>
                </div>
            `;

            // Bind Events
            document.getElementById('quiz-btn-restart').onclick = () => {
                elements.quizVictoryOverlay.style.display = 'none';
                currentState.currentIndex = 0;
                currentState.quiz.correctCount = 0;
                currentState.quiz.totalAttempted = 0;
                startQuiz(currentState.topicId, currentState.catIndex);
            };

            document.getElementById('quiz-btn-back').onclick = () => {
                elements.quizVictoryOverlay.style.display = 'none';
                currentState.currentIndex = 0;
                currentState.quiz.correctCount = 0;
                currentState.quiz.totalAttempted = 0;
                renderCategoryMenu(currentState.topicId);
            };

            console.log("Victory Overlay Styles Applied");
        }
    } catch (error) {
        console.error("Critical Error in showQuizVictory:", error);
        // Fallback
        alert(`Quiz Finished! Score: ${currentState.quiz.correctCount}/${currentState.items.length}`);
        goHome();
    }
}

function handleKeypadInput(key) {
    const currentText = elements.quizDisplay.textContent;

    if (key === 'clear') {
        elements.quizDisplay.textContent = '';
    } else if (key === 'back') {
        elements.quizDisplay.textContent = currentText.slice(0, -1);
    } else {
        if (currentText.length < 9) { // Max length limit
            elements.quizDisplay.textContent = currentText + key;
        }
    }
}

function setupQuizListeners() {
    // Ensure we don't bind multiple times? 
    // Ideally we bind once in init, but `startQuiz` sets up specific state.
    // Let's check if we bound keypad. 

    // Just re-bind or use a flag. Simpler: clone node to wipe listeners or handle strictly.
    // Better: Bind once in `setupEventListeners` and use a handler that checks state.
    // BUT user asked for "Create Quiz Mode Scaffold".

    // I will add a check if listeners are attached OR attach them here ensuring no duplicates.
    // For safety in this "scaffold" step, I'll attach to the CONTAINER (Keypad) via delegation in `startQuiz` 
    // or better, init it once if possible. 

    // Let's do delegation on `quizKeypad` which is permanent.
    // I'll add the listener in `startQuiz` but I need to be careful of duplicates if `startQuiz` is called multiple times.
    // Actually `startQuiz` is called on route. 

    // Moving Keypad Listener to `setupEventListeners` (Global) is cleaner.
    // I'll do that in a separate chunk.
}

function showQuizResults() {
    elements.quizQuestion.textContent = "Quiz Complete!";
    elements.quizProgress.textContent = "";
    elements.quizOptions.innerHTML = `
        <div class="quiz-result">
            <h2>Score: ${currentState.quiz.score}/${currentState.items.length}</h2>
            <p>${currentState.quiz.score === currentState.items.length ? 'Perfect!' : 'Keep practicing!'}</p>
            <button onclick="window.history.back()" class="btn-primary" style="margin-top: 2rem;">Back to Menu</button>
        </div>
    `;
}

function goHome() {
    // If we are in learn/quiz, we want to go back to the Category Menu for this language
    if (currentState.topicId) {
        window.location.hash = `#/menu/${currentState.topicId}`;
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
    if (elements.cardTranscription) elements.cardTranscription.textContent = item.transcription;
    elements.cardTranslation.textContent = item.translation;

    // Update Progress
    elements.progressIndicator.textContent = `${currentState.items.length} Cards • ${currentState.currentIndex + 1}/${currentState.items.length}`;

    // Update Button States
    elements.prevBtn.disabled = currentState.currentIndex === 0;
    elements.nextBtn.disabled = currentState.currentIndex === currentState.items.length - 1;

    // Auto-play speech
    if (window.speechTimeout) clearTimeout(window.speechTimeout);
    window.speechTimeout = setTimeout(() => {
        const lang = DATA_STORE[currentState.topicId].lang.split('-')[0];

        // v1.3.42: Check for Audio Override (Market Mode)
        if (item.audio) {
            speak(item.term, lang, item.audio);
        } else {
            let val = item.val;
            if (val === undefined) val = item.id - 1;
            speak(val.toString(), lang);
        }
    }, 40);
}

function nextCard() {
    if (currentState.isInfinite) {
        regenerateInfiniteCard();
        return;
    }

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

function playSequence(paths) {
    if (!paths || paths.length === 0) return;

    // Safety: Stop any current global audio FIRST
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio = null;
    }

    let index = 0;

    function playNext() {
        if (index >= paths.length) {
            console.log("Audio sequence complete");
            return;
        }

        const path = paths[index];
        const audio = new Audio(path);
        window.currentAudio = audio;

        console.log(`Playing sequence [${index + 1}/${paths.length}]: ${path}`);

        audio.onended = () => {
            index++;
            playNext();
        };

        audio.onerror = (err) => {
            console.warn("Sequence audio error:", err);
            // Skip to next if error
            index++;
            playNext();
        };

        // Robust play handling
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                if (error.name === 'AbortError') {
                    // This is expected if we quickly switch cards
                    console.log('Audio playback aborted (user action).');
                } else {
                    console.warn("Play failed (autoplay policy?):", error);
                    // Try next in sequence? Or just stop?
                    // Let's try to proceed to avoid "stuck" sequence
                    index++;
                    playNext();
                }
            });
        }
    }

    playNext();
}

function showRulesModal() {
    const modal = document.getElementById('rules-modal');
    if (modal) modal.classList.remove('hidden');
}

function regenerateInfiniteCard() {
    const mode = currentState.infiniteMode || 'tens';
    const topicId = currentState.topicId;
    let num;
    switch (mode) {
        case 'tens': num = Math.floor(Math.random() * (99 - 21 + 1)) + 21; break;
        case 'hundreds': num = Math.floor(Math.random() * (999 - 100 + 1)) + 100; break;
        case 'thousands': num = (Math.floor(Math.random() * 1000) + 1) * 1000; break;
        case 'absolute': num = Math.floor(Math.random() * 1000000) + 1; break;
        default: num = 21;
    }
    currentState.infiniteNum = num;

    // Update DOM order: Digit FIRST
    elements.cardTranslation.textContent = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    const text = getVietnameseText(num);
    const phonetic = getVietnamesePhonetic(num);

    elements.cardTerm.textContent = text;
    if (elements.cardTranscription) elements.cardTranscription.textContent = phonetic;

    if (currentState.isFlipped) {
        elements.card.classList.remove('flipped');
        currentState.isFlipped = false;
    }

    if (window.speechTimeout) clearTimeout(window.speechTimeout);
    window.speechTimeout = setTimeout(() => {
        const lang = DATA_STORE[topicId].lang.split('-')[0];
        speak(num.toString(), lang);
    }, 40);
}

function renderInfiniteMode(topicId, mode = 'tens') {
    currentState.topicId = topicId;
    currentState.isInfinite = true;
    currentState.infiniteMode = mode;

    let modeTitle = "Infinite Mode";
    if (mode === 'tens') modeTitle = "Infinite: Tens (21-99)";
    else if (mode === 'hundreds') modeTitle = "Infinite: Hundreds (100-999)";
    else if (mode === 'thousands') modeTitle = "Infinite: Round Thousands";
    else if (mode === 'absolute') modeTitle = "Infinite: Absolute (1-1M)";

    elements.homeScreen.classList.remove('active');
    if (elements.quizScreen) elements.quizScreen.classList.remove('active');
    elements.homeScreen.style.display = 'none';
    if (elements.quizScreen) elements.quizScreen.style.display = 'none';

    elements.learningScreen.style.display = 'flex';
    requestAnimationFrame(() => {
        elements.learningScreen.classList.add('active');
    });

    // Custom UI for Infinite Mode
    elements.progressIndicator.textContent = modeTitle;
    elements.progressIndicator.style.paddingLeft = '3rem';
    elements.progressIndicator.style.paddingRight = '3rem';
    elements.learningScreen.style.paddingBottom = '8rem';

    regenerateInfiniteCard();
}

// --- Helper Functions for Vietnamese Numbers 21-99 ---

function getVietnameseText(num) {
    if (num === 0) return "không";

    const digits = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

    function readGroup(n, isLeading) {
        const h = Math.floor(n / 100);
        const d = Math.floor((n % 100) / 10);
        const u = n % 10;
        let str = "";

        // Hundreds
        if (h > 0 || !isLeading) {
            str += digits[h] + " trăm";
        }

        // Tens/Units
        if (d === 0 && u === 0) {
            // only hundreds
        } else {
            if (str !== "") str += " ";

            if (d === 0 && u > 0) {
                str += "linh " + digits[u];
            } else if (d === 1) {
                str += "mười";
                if (u === 1) str += " một";
                else if (u === 5) str += " lăm";
                else if (u > 0) str += " " + digits[u];
            } else { // d >= 2
                str += digits[d] + " mươi";
                if (u === 1) str += " mốt";
                else if (u === 4) str += " tư";
                else if (u === 5) str += " lăm";
                else if (u > 0) str += " " + digits[u];
            }
        }
        return str;
    }

    let parts = [];
    const billions = Math.floor(num / 1000000000);
    let remaining = num % 1000000000;

    const millions = Math.floor(remaining / 1000000);
    remaining %= 1000000;

    const thousands = Math.floor(remaining / 1000);
    const units = remaining % 1000;

    if (billions > 0) {
        parts.push(readGroup(billions, true) + " tỷ");
    }

    if (millions > 0) {
        parts.push(readGroup(millions, parts.length === 0) + " triệu");
    }

    if (thousands > 0) {
        parts.push(readGroup(thousands, parts.length === 0) + " nghìn");
    }

    if (units > 0 || parts.length === 0) {
        parts.push(readGroup(units, parts.length === 0));
    }

    return parts.join(" ").trim().charAt(0).toUpperCase() + parts.join(" ").trim().slice(1);
}

function getVietnamesePhonetic(num) {
    const text = getVietnameseText(num);
    const removeTones = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
    };
    const raw = removeTones(text);
    const capitalized = raw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return `[${capitalized}]`;
}

// Basic Vietnamese Number Translation Engine
function numberToVietnamese(num) {
    if (num === 0) return "không";
    if (num < 0) return "âm " + numberToVietnamese(Math.abs(num));

    const units = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

    function readGroup(n) {
        let str = "";
        const h = Math.floor(n / 100);
        const d = Math.floor((n % 100) / 10);
        const u = n % 10;

        if (h > 0) {
            str += units[h] + " trăm ";
            if (d === 0 && u > 0) str += "linh ";
        }

        if (d > 0) {
            if (d === 1) str += "mười ";
            else str += tens[d] + " ";
        }

        if (u > 0) {
            if (d > 1 && u === 1) str += "mốt"; // 21, 31...
            else if (d > 0 && u === 5) str += "lăm"; // 15, 25...
            else if (d === 0 && u === 0) str += "";
            else str += units[u];
        }
        return str.trim();
    }

    // Simplified for now (handling up to millions similar to audio paths)
    let text = "";
    let remaining = num;
    const millions = Math.floor(remaining / 1000000);
    remaining %= 1000000;
    const thousands = Math.floor(remaining / 1000);
    const unitPart = remaining % 1000;

    if (millions > 0) {
        text += readGroup(millions) + " triệu ";
    }

    if (thousands > 0) {
        // Special case: if thousands < 100 and there are millions, add 'không trăm' logic if strictly formal, 
        // but for casual 'nghìn' is fine.
        // If we have millions but thousands is 005, it should be "không trăm linh năm nghìn"
        // Let's keep it simple for v1.3.34
        text += readGroup(thousands) + " nghìn ";
    }

    if (unitPart > 0) {
        if ((millions > 0 || thousands > 0) && unitPart < 100) {
            // Handle "không trăm" if needed? 
            // 1005 -> một nghìn không trăm linh năm
            // We can reuse getVietnameseAudioPaths logic structure ideally, 
            // but let's do a best effort translation for display.
        }
        text += readGroup(unitPart);
    }

    // Very simple cleanup to fix extra spaces
    return text.replace(/\s+/g, ' ').trim();
}

function getVietnameseAudioPaths(num) {
    const langCode = 'vi';
    const paths = [];
    if (num < 0) return paths;
    if (num <= 10) return [`assets/audio/${langCode}/${num}.mp3`];

    function addGroup(n, isLeading) {
        const h = Math.floor(n / 100);
        const d = Math.floor((n % 100) / 10);
        const u = n % 10;

        if (h > 0 || !isLeading) {
            paths.push(`assets/audio/${langCode}/${h}.mp3`);
            paths.push(`assets/audio/${langCode}/trăm.mp3`);
        }

        if (d === 0 && u === 0) {
            // skip
        } else {
            if (d === 0 && u > 0) {
                paths.push(`assets/audio/${langCode}/linh.mp3`);
                paths.push(`assets/audio/${langCode}/${u}.mp3`);
            } else if (d === 1) {
                paths.push(`assets/audio/${langCode}/10.mp3`);
                if (u === 1) paths.push(`assets/audio/${langCode}/1.mp3`);
                else if (u === 5) paths.push(`assets/audio/${langCode}/5_lam.mp3`);
                else if (u > 0) paths.push(`assets/audio/${langCode}/${u}.mp3`);
            } else { // d >= 2
                paths.push(`assets/audio/${langCode}/${d * 10}.mp3`);
                if (u === 1) paths.push(`assets/audio/${langCode}/1_mot.mp3`);
                else if (u === 5) paths.push(`assets/audio/${langCode}/5_lam.mp3`);
                else if (u > 0) paths.push(`assets/audio/${langCode}/${u}.mp3`);
            }
        }
    }

    let remaining = num;
    const millions = Math.floor(remaining / 1000000);
    remaining %= 1000000;
    const thousands = Math.floor(remaining / 1000);
    const units = remaining % 1000;

    let hasPrev = false;

    if (millions > 0) {
        addGroup(millions, true);
        paths.push(`assets/audio/${langCode}/triệu.mp3`);
        hasPrev = true;
    }
    // Simplification: assume <1T or handle appropriately

    if (thousands > 0) {
        addGroup(thousands, !hasPrev);
        paths.push(`assets/audio/${langCode}/nghìn.mp3`);
        hasPrev = true;
    }

    if (units > 0 || !hasPrev) {
        addGroup(units, !hasPrev);
    }

    return paths;
}

// Calculator Mode
// Calculator Mode
function renderCalculatorMode(topicId) {
    currentState.topicId = topicId;

    // 1. Hide Other Screens
    if (elements.homeScreen) {
        elements.homeScreen.classList.remove('active');
        // Immediate hide for others to prevent overlap during transition if z-index issues
        // But let's follow the fade-out pattern if possible. 
        // For now, let's just make sure they get hidden.
        setTimeout(() => elements.homeScreen.style.display = 'none', 300);
    }
    if (elements.learningScreen) {
        elements.learningScreen.classList.remove('active');
        setTimeout(() => elements.learningScreen.style.display = 'none', 300);
    }
    if (elements.quizScreen) {
        elements.quizScreen.classList.remove('active');
        setTimeout(() => elements.quizScreen.style.display = 'none', 300);
    }

    // 2. Show Calculator
    if (elements.calcScreen) {
        elements.calcScreen.style.display = 'flex';
        // Force reflow
        requestAnimationFrame(() => {
            elements.calcScreen.classList.add('active');
            elements.calcScreen.style.visibility = 'visible';
            elements.calcScreen.style.opacity = '1';
        });
    }

    if (elements.calcDisplay) {
        elements.calcDisplay.textContent = '';
    }
    const transcriptionEl = document.getElementById('calculator-transcription');
    if (transcriptionEl) transcriptionEl.textContent = '';
}

function handleCalcKeypadInput(key) {
    // 1. Get raw value (strip existing spaces)
    let raw = elements.calcDisplay.textContent.replace(/\s/g, '');
    const transcriptionEl = document.getElementById('calculator-transcription');

    if (key === 'clear') {
        raw = '';
        if (transcriptionEl) transcriptionEl.textContent = '';
    } else if (key === 'back') {
        raw = raw.slice(0, -1);
        if (transcriptionEl) transcriptionEl.textContent = ''; // Reset on edit
    } else {
        // Limit to 9 digits as requested
        if (raw.length < 9) {
            // Avoid leading zeros unless it is just "0" (but we usually don't type 0 first)
            // If raw is empty and key is 0, allow it? Usually calculators show 0 then replace it.
            // Simple logic: append
            raw += key;
        }
    }

    // Prevent leading zero if length > 1 (e.g. 05 -> 5)
    if (raw.length > 1 && raw.startsWith('0')) {
        raw = raw.substring(1);
    }

    // 2. Format with spaces
    const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    // 3. Update Display
    elements.calcDisplay.textContent = formatted;

    // 4. Dynamic Font Scaling
    // Base size is roughly 3rem in CSS. Scale down for longer numbers.
    if (formatted.length > 9) { // e.g. "123 456 7" (9 chars)
        elements.calcDisplay.style.fontSize = '2.5rem';
    } else if (formatted.length > 7) {
        elements.calcDisplay.style.fontSize = '3rem';
    } else {
        elements.calcDisplay.style.fontSize = ''; // Reset to CSS default
    }
}







