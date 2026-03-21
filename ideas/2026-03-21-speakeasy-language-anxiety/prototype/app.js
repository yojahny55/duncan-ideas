// ========= State =========
const state = {
  language: 'en',
  level: 'beginner',
  anxietyPre: 3,
  anxietyPost: 3,
  currentZone: null,
  currentScenario: null,
  isRecording: false,
  sessionStart: null,
  timerInterval: null,
  turns: 0,
  wordsSpoken: 0,
  typingHelperVisible: false
};

// ========= Scenarios =========
const scenarios = {
  whisper: [
    { icon: '☕', name: 'Coffee Words', desc: 'Practice ordering drinks — one word at a time' },
    { icon: '👋', name: 'Greetings', desc: 'Hello, goodbye, please, thank you' },
    { icon: '🔢', name: 'Numbers', desc: 'Count, prices, phone numbers' },
    { icon: '🍽️', name: 'Food Items', desc: 'Common foods and ingredients' },
    { icon: '🗺️', name: 'Directions', desc: 'Left, right, straight, stop' }
  ],
  echo: [
    { icon: '🤝', name: 'Small Talk', desc: 'Answer simple questions about yourself' },
    { icon: '🛒', name: 'At the Store', desc: 'Short exchanges with a cashier' },
    { icon: '🏠', name: 'About Home', desc: 'Describe where you live in short answers' },
    { icon: '⛅', name: 'Weather Chat', desc: 'Talk about the weather (classic!)', },
    { icon: '🎬', name: 'Movies & Shows', desc: 'Quick opinions on what you watch' }
  ],
  chat: [
    { icon: '🧳', name: 'Travel Plans', desc: 'Chat about a trip you want to take' },
    { icon: '👨‍💻', name: 'Work Talk', desc: 'Describe what you do for a living' },
    { icon: '🍳', name: 'Cooking', desc: 'Talk about your favorite recipe' },
    { icon: '📚', name: 'Books & Stories', desc: 'Discuss a book or story you love' },
    { icon: '🎵', name: 'Music', desc: 'Share your music taste and favorites' }
  ]
};

// ========= Conversation Scripts =========
const conversations = {
  whisper: {
    'Coffee Words': [
      { type: 'system', text: '🌊 Zone 1 — Whisper. Just repeat after me. No pressure.' },
      { type: 'ai', text: 'Let\'s start with something easy. Repeat after me:\n\n☕ "Coffee"' },
      { type: 'wait' },
      { type: 'ai', text: 'Perfect! Now try:\n\n🥛 "With milk, please"' },
      { type: 'wait' },
      { type: 'ai', text: 'You\'re doing great! One more:\n\n💰 "How much is it?"' },
      { type: 'wait' },
      { type: 'ai', text: 'Now put it together:\n\n"One coffee with milk, please. How much is it?"' },
      { type: 'wait' },
      { type: 'ai', text: 'That was wonderful! 🎉 You just ordered a coffee. See? You CAN do this.' }
    ],
    'Greetings': [
      { type: 'system', text: '🌊 Zone 1 — Whisper. Repeat each phrase. Take your time.' },
      { type: 'ai', text: 'Let\'s practice greetings. Repeat:\n\n👋 "Hello, how are you?"' },
      { type: 'wait' },
      { type: 'ai', text: 'Nice! Now:\n\n😊 "I\'m good, thank you"' },
      { type: 'wait' },
      { type: 'ai', text: 'And one more:\n\n👋 "Nice to meet you!"' },
      { type: 'wait' },
      { type: 'ai', text: 'You sound great! These small phrases open so many doors. 💚' }
    ]
  },
  echo: {
    'Small Talk': [
      { type: 'system', text: '🔁 Zone 2 — Echo. Short answers are perfect. I\'ll fill any silences.' },
      { type: 'ai', text: 'Hi! I\'m Alex. What\'s your name?' },
      { type: 'wait' },
      { type: 'ai', text: 'Great name! So, where are you from originally?' },
      { type: 'wait' },
      { type: 'ai', text: 'Oh cool! What do you like about living there?\n\n💡 One sentence is totally fine.' },
      { type: 'wait' },
      { type: 'ai', text: 'That sounds nice! Do you have any hobbies? Like anything you do for fun?' },
      { type: 'wait' },
      { type: 'ai', text: 'Awesome! You just had a real conversation. That took courage — be proud of that. 🙌' }
    ]
  },
  chat: {
    'Travel Plans': [
      { type: 'system', text: '💬 Zone 3 — Chat. Speak freely. There are no wrong answers.' },
      { type: 'ai', text: 'Hey! I was thinking about traveling this summer. Have you been anywhere interesting lately?' },
      { type: 'wait' },
      { type: 'ai', text: 'That sounds amazing! If you could go anywhere in the world right now, where would you go and why?' },
      { type: 'wait' },
      { type: 'ai', text: 'I love that choice! What would be the first thing you\'d do when you got there?' },
      { type: 'wait' },
      { type: 'ai', text: 'Haha, priorities! Do you prefer planning everything in advance, or do you like to just figure it out when you arrive?' },
      { type: 'wait' },
      { type: 'ai', text: 'You\'re having a full conversation about travel — in another language! That\'s genuinely impressive. 🌍✨' }
    ]
  }
};

// ========= Screen Navigation =========
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(screenId);
  screen.classList.add('active');

  if (screenId === 'screen-conversation') {
    startSession();
  }
}

// ========= Setup Interactions =========
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.language = btn.dataset.lang;
  });
});

document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.level = btn.dataset.level;
  });
});

function selectAnxiety(btn) {
  btn.closest('.anxiety-scale').querySelectorAll('.anxiety-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.anxietyPre = parseInt(btn.dataset.level);
}

function selectPostAnxiety(btn) {
  btn.closest('.anxiety-scale').querySelectorAll('.anxiety-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.anxietyPost = parseInt(btn.dataset.level);
}

// ========= Zone Selection =========
function selectZone(zone) {
  state.currentZone = zone;
  const scenarioList = document.getElementById('scenario-list');
  const title = document.getElementById('scenario-title');
  
  const zoneNames = { whisper: '🌊 Whisper', echo: '🔁 Echo', chat: '💬 Chat' };
  title.textContent = `${zoneNames[zone]} — Pick a scenario`;
  
  scenarioList.innerHTML = '';
  (scenarios[zone] || []).forEach(s => {
    const card = document.createElement('div');
    card.className = 'scenario-card';
    card.onclick = () => startScenario(s.name);
    card.innerHTML = `
      <span class="scenario-icon">${s.icon}</span>
      <div class="scenario-info">
        <div class="scenario-name">${s.name}</div>
        <div class="scenario-desc">${s.desc}</div>
      </div>
      <span class="scenario-arrow">→</span>
    `;
    scenarioList.appendChild(card);
  });
  
  showScreen('screen-scenarios');
}

function showLockedToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ========= Conversation =========
let conversationScript = [];
let scriptIndex = 0;

function startScenario(name) {
  state.currentScenario = name;
  const zoneConvos = conversations[state.currentZone] || {};
  conversationScript = zoneConvos[name] || conversations.whisper['Coffee Words'];
  scriptIndex = 0;
  
  const zoneLabels = { whisper: 'Zone 1 — Whisper', echo: 'Zone 2 — Echo', chat: 'Zone 3 — Chat' };
  document.getElementById('conv-zone-label').textContent = zoneLabels[state.currentZone] || 'Zone 1';
  
  document.getElementById('chat-messages').innerHTML = '';
  showScreen('screen-conversation');
}

function startSession() {
  state.sessionStart = Date.now();
  state.turns = 0;
  state.wordsSpoken = 0;
  
  // Start timer
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(updateTimer, 1000);
  
  // Play first messages
  playNextMessages();
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - state.sessionStart) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  document.getElementById('conv-timer').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

function playNextMessages() {
  const chatEl = document.getElementById('chat-messages');
  
  while (scriptIndex < conversationScript.length) {
    const msg = conversationScript[scriptIndex];
    
    if (msg.type === 'wait') {
      scriptIndex++;
      return; // Wait for user input
    }
    
    const div = document.createElement('div');
    div.className = `message ${msg.type}`;
    div.innerHTML = msg.text;
    
    // Gentle correction support
    if (msg.correction) {
      div.innerHTML += `<span class="gentle-correction">💡 Tip: ${msg.correction}</span>`;
    }
    
    chatEl.appendChild(div);
    scriptIndex++;
  }
  
  // End of conversation
  if (scriptIndex >= conversationScript.length) {
    setTimeout(() => endSession(), 2000);
  }
  
  chatEl.scrollTop = chatEl.scrollHeight;
}

function toggleRecording() {
  const btn = document.getElementById('mic-btn');
  
  if (!state.isRecording) {
    state.isRecording = true;
    btn.classList.add('recording');
    btn.querySelector('.mic-label').textContent = 'Listening...';
    
    // Simulate recording for 2.5s
    setTimeout(() => {
      stopRecording();
    }, 2500);
  } else {
    stopRecording();
  }
}

function stopRecording() {
  const btn = document.getElementById('mic-btn');
  state.isRecording = false;
  btn.classList.remove('recording');
  btn.querySelector('.mic-label').textContent = 'Tap to speak';
  
  // Add simulated user message
  const chatEl = document.getElementById('chat-messages');
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  
  const responses = [
    '☕ Coffee...',
    'With milk, please',
    'How much is it?',
    'One coffee with milk, please. How much is it?',
    'My name is... uh... Alex',
    'I\'m from... a small city',
    'I like the weather there',
    'I like reading and... cooking?',
    'Not yet, but I want to go to Japan!',
    'I would visit the temples first',
    'I like to plan a little but also explore'
  ];
  
  userMsg.textContent = responses[state.turns % responses.length];
  chatEl.appendChild(userMsg);
  
  state.turns++;
  state.wordsSpoken += 4 + Math.floor(Math.random() * 6);
  
  chatEl.scrollTop = chatEl.scrollHeight;
  
  // Play next AI messages after a pause
  setTimeout(() => playNextMessages(), 1200);
}

function skipTurn() {
  const chatEl = document.getElementById('chat-messages');
  const skipMsg = document.createElement('div');
  skipMsg.className = 'message system';
  skipMsg.textContent = 'Skipped — that\'s totally fine. No pressure. 💚';
  chatEl.appendChild(skipMsg);
  
  state.turns++;
  chatEl.scrollTop = chatEl.scrollHeight;
  
  setTimeout(() => playNextMessages(), 800);
}

function toggleTypingHelper() {
  const helper = document.getElementById('typing-helper');
  state.typingHelperVisible = !state.typingHelperVisible;
  helper.style.display = state.typingHelperVisible ? 'flex' : 'none';
}

function typeToSpeech() {
  const input = document.getElementById('type-first-input');
  if (!input.value.trim()) return;
  
  const chatEl = document.getElementById('chat-messages');
  
  // Show typed version as system
  const typedMsg = document.createElement('div');
  typedMsg.className = 'message system';
  typedMsg.textContent = `✍️ You typed: "${input.value}"`;
  chatEl.appendChild(typedMsg);
  
  // Prompt to say it
  const promptMsg = document.createElement('div');
  promptMsg.className = 'message ai';
  promptMsg.textContent = `Great! Now try saying it out loud. Tap the mic when ready. 🎤`;
  chatEl.appendChild(promptMsg);
  
  input.value = '';
  chatEl.scrollTop = chatEl.scrollHeight;
}

// ========= Breathing =========
function showBreathing() {
  showScreen('screen-breathing');
  startBreathingExercise();
}

function startBreathingExercise() {
  const textEl = document.getElementById('breathing-text');
  const countEl = document.getElementById('breathing-count');
  let breaths = 3;
  
  const cycle = () => {
    if (breaths <= 0) {
      textEl.textContent = 'Feeling better? 💚';
      countEl.textContent = 'Ready when you are';
      return;
    }
    
    textEl.textContent = 'Breathe in...';
    countEl.textContent = `${breaths} breaths remaining`;
    
    setTimeout(() => {
      textEl.textContent = 'Hold...';
    }, 2000);
    
    setTimeout(() => {
      textEl.textContent = 'Breathe out...';
      breaths--;
    }, 4000);
    
    setTimeout(cycle, 8000);
  };
  
  cycle();
}

function resumeSession() {
  showScreen('screen-conversation');
}

// ========= End Session =========
function endSession() {
  clearInterval(state.timerInterval);
  
  const elapsed = state.sessionStart ? Math.floor((Date.now() - state.sessionStart) / 1000) : 272;
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  
  document.getElementById('stat-time').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('stat-turns').textContent = state.turns || 12;
  document.getElementById('stat-words').textContent = state.wordsSpoken || 48;
  
  showScreen('screen-summary');
}

// ========= Init =========
document.addEventListener('DOMContentLoaded', () => {
  // Pre-select defaults
  showScreen('screen-landing');
});
