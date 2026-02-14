// TalkReady - Conversation Practice App

// State
const state = {
  currentView: 'home',
  scenario: null,
  briefing: {},
  exchanges: 0,
  maxExchanges: 5,
  conversation: []
};

// Scenario data
const scenarios = {
  raise: {
    title: 'Ask for a Raise',
    icon: '💰',
    personaName: 'Sarah',
    personaRole: 'Your Manager',
    personaDesc: 'Direct but fair • 5 years experience',
    personaEmoji: '👩‍💼'
  },
  boundaries: {
    title: 'Set Boundaries',
    icon: '🛑',
    personaName: 'Alex',
    personaRole: 'Your Coworker',
    personaDesc: 'Friendly but pushy • Often asks for favors',
    personaEmoji: '🧑'
  },
  feedback: {
    title: 'Give Tough Feedback',
    icon: '📋',
    personaName: 'Jordan',
    personaRole: 'Your Direct Report',
    personaDesc: 'Hardworking but defensive • 2 years on team',
    personaEmoji: '👨‍💻'
  },
  decline: {
    title: 'Say No Gracefully',
    icon: '🙅',
    personaName: 'Taylor',
    personaRole: 'Your Friend',
    personaDesc: 'Enthusiastic but persistent • Often makes plans',
    personaEmoji: '😊'
  },
  confront: {
    title: 'Address a Problem',
    icon: '😤',
    personaName: 'Casey',
    personaRole: 'Your Roommate',
    personaDesc: 'Easygoing but messy • Been living together 6 months',
    personaEmoji: '🏠'
  }
};

// AI Responses (simulated)
const aiResponses = {
  raise: [
    {
      text: '*Sarah looks up from her laptop as you enter her office*\n\nHey, you wanted to chat? Come in, have a seat. What\'s on your mind?',
      isOpening: true
    },
    {
      text: '*Sarah nods thoughtfully, her expression neutral*\n\nI appreciate you bringing this up directly. You\'re right that you\'ve been here a while. Walk me through what you\'re thinking.',
      coaching: {
        clarity: 8,
        assertiveness: 7,
        empathy: 9,
        note: 'Good opening! You stated your purpose clearly without apologizing.',
        alternative: 'I\'d like to discuss my compensation based on the value I\'ve delivered this year.'
      }
    },
    {
      text: '*Sarah leans back in her chair*\n\nLook, I hear you on the contributions. The client retention project was solid work. But you know how tight things are right now. I\'m not sure what flexibility we have.',
      coaching: {
        clarity: 7,
        assertiveness: 6,
        empathy: 8,
        note: 'Good use of specific examples. Watch for softening language.',
        alternative: 'Based on market data and my contributions, I believe a 15% adjustment reflects my value.'
      }
    },
    {
      text: '*Sarah pauses, considering*\n\nLet me talk to leadership and see what\'s possible. I can\'t promise anything right now, but I\'ll look into it.',
      coaching: {
        clarity: 6,
        assertiveness: 5,
        empathy: 8,
        note: 'Careful - this is a soft dismissal. Push for specifics.',
        alternative: 'I appreciate that. Can we set a specific date to follow up? I\'d like clarity on the timeline.'
      }
    },
    {
      text: '*Sarah checks her calendar*\n\nFair enough. Let\'s put something on the calendar for two weeks from now. I should have more information by then. And keep documenting those wins - it helps when I make the case upstairs.',
      coaching: {
        clarity: 8,
        assertiveness: 8,
        empathy: 7,
        note: 'Nice! You pushed back professionally and got a concrete commitment.',
        alternative: null
      }
    }
  ]
};

// View Management
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewId}`).classList.add('active');
  state.currentView = viewId;
}

// Initialize
function init() {
  // Scenario card clicks
  document.querySelectorAll('.scenario-card').forEach(card => {
    card.addEventListener('click', () => {
      const scenarioKey = card.dataset.scenario;
      if (scenarioKey === 'custom') {
        state.scenario = {
          title: 'Custom Scenario',
          icon: '✏️',
          personaName: 'The Other Person',
          personaRole: 'As You Described',
          personaDesc: 'Based on your description',
          personaEmoji: '👤'
        };
      } else {
        state.scenario = scenarios[scenarioKey];
      }
      state.scenarioKey = scenarioKey;
      updateBriefingView();
      showView('briefing');
    });
  });

  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showView(btn.dataset.target);
    });
  });

  // Briefing form
  document.getElementById('briefing-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.briefing = {
      person: document.getElementById('person').value,
      situation: document.getElementById('situation').value,
      outcome: document.getElementById('outcome').value,
      fears: document.getElementById('fears').value
    };
    showView('strategy');
  });

  // Start practice
  document.getElementById('start-practice').addEventListener('click', () => {
    state.exchanges = 0;
    state.conversation = [];
    initPracticeView();
    showView('practice');
  });

  // Send message
  document.getElementById('send-btn').addEventListener('click', sendMessage);
  document.getElementById('user-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Suggestions
  document.querySelectorAll('.suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('user-input');
      input.value = btn.textContent;
      input.focus();
    });
  });

  // End session
  document.querySelector('.end-session-btn').addEventListener('click', () => {
    showView('debrief');
  });

  // Coaching panel close
  document.querySelector('.coaching-close').addEventListener('click', () => {
    document.getElementById('coaching-panel').style.display = 'none';
  });

  // Back to home from debrief
  document.getElementById('back-home').addEventListener('click', () => {
    showView('home');
  });

  // Category items
  document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
      state.scenario = scenarios.raise; // Default to raise for demo
      state.scenarioKey = 'raise';
      updateBriefingView();
      showView('briefing');
    });
  });
}

function updateBriefingView() {
  const badge = document.querySelector('.scenario-badge');
  badge.textContent = `${state.scenario.icon} ${state.scenario.title}`;
}

function initPracticeView() {
  // Update persona
  document.querySelector('.persona-avatar').textContent = state.scenario.personaEmoji;
  document.querySelector('.persona-name').textContent = `${state.scenario.personaName} (${state.scenario.personaRole})`;
  document.querySelector('.persona-desc').textContent = state.scenario.personaDesc;
  
  // Clear chat
  const chatContainer = document.getElementById('chat-container');
  chatContainer.innerHTML = '';
  
  // Add opening message
  const responses = aiResponses[state.scenarioKey] || aiResponses.raise;
  const opening = responses[0];
  addChatBubble(opening.text, 'ai');
  
  // Reset exchange count
  updateExchangeCount();
}

function addChatBubble(text, type) {
  const chatContainer = document.getElementById('chat-container');
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${type}`;
  
  // Handle newlines and formatting
  const paragraphs = text.split('\n').filter(p => p.trim());
  paragraphs.forEach(p => {
    const para = document.createElement('p');
    // Handle italics
    para.innerHTML = p.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    bubble.appendChild(para);
  });
  
  chatContainer.appendChild(bubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function updateExchangeCount() {
  document.querySelector('.exchange-count').textContent = 
    `Exchange ${state.exchanges + 1} of ${state.maxExchanges}`;
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message
  addChatBubble(message, 'user');
  state.conversation.push({ type: 'user', text: message });
  input.value = '';
  
  state.exchanges++;
  updateExchangeCount();
  
  // Check if session complete
  if (state.exchanges >= state.maxExchanges) {
    setTimeout(() => {
      showView('debrief');
    }, 1500);
    return;
  }
  
  // Simulate AI response
  setTimeout(() => {
    const responses = aiResponses[state.scenarioKey] || aiResponses.raise;
    const responseIndex = Math.min(state.exchanges, responses.length - 1);
    const response = responses[responseIndex];
    
    addChatBubble(response.text, 'ai');
    state.conversation.push({ type: 'ai', text: response.text });
    
    // Show coaching if available
    if (response.coaching) {
      showCoaching(response.coaching);
    }
  }, 1000);
}

function showCoaching(coaching) {
  const panel = document.getElementById('coaching-panel');
  
  // Update scores
  const scores = panel.querySelectorAll('.score');
  const values = [coaching.clarity, coaching.assertiveness, coaching.empathy];
  const labels = ['Clarity', 'Assertiveness', 'Empathy'];
  
  scores.forEach((score, i) => {
    score.querySelector('.score-fill').style.width = `${values[i] * 10}%`;
    score.querySelector('.score-value').textContent = `${values[i]}/10`;
  });
  
  // Update note
  panel.querySelector('.coaching-note p').textContent = coaching.note;
  
  // Update alternative
  const altContainer = panel.querySelector('.coaching-alternative');
  if (coaching.alternative) {
    altContainer.style.display = 'block';
    altContainer.querySelector('p').textContent = coaching.alternative;
  } else {
    altContainer.style.display = 'none';
  }
  
  panel.style.display = 'block';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
