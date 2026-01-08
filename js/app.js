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
            },
            {
                name: 'Numbers 21-99',
                items: [
                    { id: 101, val: 21, term: "Hai mươi mốt", transcription: "[Hai muoi mot]", translation: "Twenty-one", category: "Numbers 21-99" },
                    { id: 105, val: 25, term: "Hai mươi lăm", transcription: "[Hai muoi lam]", translation: "Twenty-five", category: "Numbers 21-99" },
                    { id: 114, val: 34, term: "Ba mươi tư", transcription: "[Ba muoi tu]", translation: "Thirty-four", category: "Numbers 21-99" },
                    { id: 127, val: 47, term: "Bốn mươi bảy", transcription: "[Bon muoi bay]", translation: "Forty-seven", category: "Numbers 21-99" },
                    { id: 138, val: 58, term: "Năm mươi tám", transcription: "[Nam muoi tam]", translation: "Fifty-eight", category: "Numbers 21-99" }
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

function speak(text, langCode) {
    // 4. UI/UX: Cancel previous speech (TTS)
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    const debugEl = document.getElementById('debug-info-log');

    // 4a. Logic for limit 21-99 (Composite Audio)
    const num = parseInt(text);
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

    // MP3 Logic (Standard)
    const path = `assets/audio/${langCode}/${text}.mp3`;
    const audio = new Audio(path);

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
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        alert("Checking for updates... If a change is found, it will download in the background.");
        await registration.update();
    } else {
        alert("Service Worker not supported in this browser.");
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
    quizBackBtn: document.getElementById('quiz-back-btn'),
    quizQuestion: document.getElementById('quiz-question'),
    quizOptions: document.getElementById('quiz-options'),
    quizProgress: document.getElementById('quiz-progress'),
    quizScore: document.getElementById('quiz-score'),

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
    elements.topicList.innerHTML = '';
    // Update instruction text
    const instruction = document.querySelector('#home-screen p');
    if (instruction) instruction.textContent = "Select a Language";

    Object.keys(DATA_STORE).forEach(key => {
        const topic = DATA_STORE[key];
        const totalCards = topic.categories.reduce((acc, cat) => acc + cat.items.length, 0);

        const card = document.createElement('div');
        card.className = 'topic-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div style="width: 100%; text-align: center; padding: 1rem;">
                <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">${topic.title}</h3>
                <span class="badge">${totalCards} words</span>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.hash = `#/menu/${key}`;
        });

        elements.topicList.appendChild(card);
    });
}

function renderCategoryMenu(topicId) {
    elements.topicList.innerHTML = '';
    // Mandatory Scrolling Fix
    elements.topicList.style.setProperty('padding-bottom', '12rem', 'important');
    elements.topicList.style.setProperty('overflow-y', 'auto', 'important');
    elements.topicList.style.height = '100vh';
    elements.topicList.style.pointerEvents = 'auto';

    // Grid Layout
    elements.topicList.style.display = 'grid';
    elements.topicList.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
    elements.topicList.style.gap = '1.5rem';
    elements.topicList.style.justifyItems = 'center';
    elements.topicList.style.width = '100%';
    elements.topicList.style.margin = '0 auto';

    const topic = DATA_STORE[topicId];

    // Hide default instruction
    const instruction = document.querySelector('#home-screen p');
    if (instruction) instruction.style.display = 'none';

    // Header Container (Flex Centered)
    const header = document.createElement('div');
    header.style.gridColumn = '1 / -1';
    header.style.cssText = 'position: relative; display: flex; justify-content: center; align-items: center; width: 100%; height: 4rem; margin-bottom: 2rem; padding-top: 1rem;';

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
        <h2 style="margin: 0; text-align: center; width: auto; font-size: 1.5rem;">${topic.title}</h2>
    `;
    elements.topicList.appendChild(header);

    header.querySelector('#menu-back-btn').addEventListener('click', () => {
        const instruction = document.querySelector('#home-screen p');
        if (instruction) instruction.style.display = 'block';
        window.location.hash = '#/';
    });

    const rulesBtn = header.querySelector('#menu-rules-btn');
    if (rulesBtn) {
        rulesBtn.addEventListener('click', () => {
            showRulesModal();
        });
    }

    topic.categories.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.style.width = '100%';
        card.style.maxWidth = '24rem';
        card.style.margin = '0 auto';
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

        elements.topicList.appendChild(card);
    });

    // Special Cards (Infinite Mode & Rules)
    if (topic.lang === 'vi-VN') {
        // 4 Levels of Infinite Mode
        const addInfCard = (title, mode, color) => {
            const c = document.createElement('div');
            c.className = 'topic-card';
            c.style.width = '100%';
            c.style.maxWidth = '24rem';
            c.style.margin = '0 auto';
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
            elements.topicList.appendChild(c);
        };

        addInfCard("Infinite: Tens (21-99)", "tens", "rgba(168, 85, 247, 0.5)"); // Purple
        addInfCard("Infinite: Hundreds (100-999)", "hundreds", "rgba(59, 130, 246, 0.5)"); // Blue
        addInfCard("Infinite: Round Thousands", "thousands", "rgba(16, 185, 129, 0.5)"); // Green
        addInfCard("Infinite: Absolute (1-1M)", "absolute", "rgba(239, 68, 68, 0.5)"); // Red

    } else {
        // Korean Infinite Mode (Fallback)
        const infCard = document.createElement('div');
        infCard.className = 'topic-card';
        infCard.style.width = '100%';
        infCard.style.maxWidth = '24rem';
        infCard.style.margin = '0 auto';
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
        elements.topicList.appendChild(infCard);
    }
}

function setupEventListeners() {
    // History API listener
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);

    elements.backBtn.addEventListener('click', goHome);
    if (elements.quizBackBtn) elements.quizBackBtn.addEventListener('click', goHome);

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
        elements.speakBtn.addEventListener('click', (e) => {
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
                const item = currentState.items[currentState.currentIndex];
                const lang = DATA_STORE[currentState.topicId].lang.split('-')[0];

                // Determine text to speak based on category/logic
                // For 0-10: id 1->0, id 11->10. (id-1)
                // For Tens: id 21->20. (id-1)
                // For 21-99: id 101->21? No, I gave them random IDs 101, 105. 
                // I need to parse the TERM for the number? Or store value?
                // Actually the `speak` function expects a number text '21', '20', '5', etc.
                // My items have `term` which is text string.
                // I should probably map the ID to the number CAREFULLY or just store a `value` field.
                // QUICK FIX: For "Numbers 21-99", the ID does not map cleanly. 
                // But the items I added: 21 (Twenty-one). 
                // I will assume for now I will extract number from Translation if it's digit? No.
                // Let's rely on a lookup or parse.
                // Wait, for 21-99, `item.term` is "Hai mươi mốt". 
                // I need to pass '21' to speak().
                // I'll add a `value` property to the new items effectively? 
                // Or I can deduce it. "Thirty-four" -> 34? 
                // Simpler: The `speak` call in `app.js` is currently `speak((item.id - 1).toString(), lang)`.
                // This logic is fragile. 
                // For IDs 101, 105 etc this breaks.
                // I'll update the items to include a `value` property or similar, OR change logic.
                // BETTER: Add `val` property to ALL items in `DATA_STORE` and use that.
                // BUT I can't update all items easily right now without huge replace.
                // ALTERNATIVE: Use `translation` if it's digits? No.
                // ALTERNATIVE: Just pass the known number for the new items.
                // I will add `val: 21` etc to the new items in step 1.
                // And update the speak call to use `item.val || (item.id - 1)`.

                // REVISION TO STEP 1 CHUNKS NEEDED? YES. 
                // I will use `val` in the new items.

                let val = item.val;
                if (val === undefined) val = item.id - 1;

                speak(val.toString(), lang);
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

    if (hash.startsWith('#/menu/')) {
        const topicId = hash.replace('#/menu/', '');
        if (DATA_STORE[topicId]) {
            showHomeScreen();
            renderCategoryMenu(topicId);
        } else {
            window.location.hash = '#/';
        }
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
    } else {
        showHomeScreen();
        renderLanguageMenu();
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

    // Get wrong items from the SAME category to make it fair/relevant? 
    // Or from all categories in language?
    // "Ensure the Quiz ... also only use items from the chosen category" implies strictly that category.
    // But if category has < 4 items? (Tens has 8, Numbers 11). Safe.
    const allItems = DATA_STORE[currentState.topicId].categories[currentState.catIndex].items;

    // Filter out correct item
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
    const lang = DATA_STORE[currentState.topicId].lang.split('-')[0];
    let val = correctItem.val;
    if (val === undefined) val = correctItem.id - 1;
    speak(val.toString(), lang);

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
    setTimeout(() => {
        const lang = DATA_STORE[currentState.topicId].lang.split('-')[0];
        let val = item.val;
        if (val === undefined) val = item.id - 1;
        speak(val.toString(), lang);
    }, 300);
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

    let index = 0;

    function playNext() {
        if (index >= paths.length) {
            console.log("Audio sequence complete");
            return;
        }

        const path = paths[index];
        const audio = new Audio(path);

        console.log(`Playing sequence [${index + 1}/${paths.length}]: ${path}`);

        audio.onended = () => {
            index++;
            setTimeout(playNext, 100); // 100ms gap
        };

        audio.onerror = (err) => {
            console.warn("Sequence audio error:", err);
            // Skip to next if error
            index++;
            playNext();
        };

        audio.play().catch(e => {
            console.warn("Play failed (autoplay policy?):", e);
            index++;
            playNext();
        });
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

    setTimeout(() => {
        const lang = DATA_STORE[topicId].lang.split('-')[0];
        speak(num.toString(), lang);
    }, 300);
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







