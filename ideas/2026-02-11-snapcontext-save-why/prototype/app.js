/**
 * SnapContext - Remember WHY You Saved It
 * Interactive Prototype
 */

// DOM Elements
const elements = {
  addFab: document.getElementById('addFab'),
  voiceFab: document.getElementById('voiceFab'),
  saveModal: document.getElementById('saveModal'),
  recordBtn: document.getElementById('recordBtn'),
  voiceTimer: document.getElementById('voiceTimer'),
  contextInput: document.getElementById('contextInput'),
  saveBtn: document.getElementById('saveBtn'),
  toast: document.getElementById('toast'),
  acceptAI: document.getElementById('acceptAI'),
  dismissAI: document.getElementById('dismissAI'),
  aiSuggestion: document.getElementById('aiSuggestion'),
  filterPills: document.querySelectorAll('.filter-pill'),
  quickTags: document.querySelectorAll('.quick-tag'),
  navItems: document.querySelectorAll('.nav-item'),
  saveCards: document.querySelectorAll('.save-card')
};

// State
const state = {
  isRecording: false,
  recordingTime: 0,
  recordingInterval: null,
  selectedTags: new Set(),
  contextText: ''
};

// Initialize
function init() {
  setupEventListeners();
  setupKeyboardNavigation();
}

// Event Listeners
function setupEventListeners() {
  // FAB buttons
  elements.addFab.addEventListener('click', openModal);
  elements.voiceFab.addEventListener('click', () => {
    openModal();
    setTimeout(() => startRecording(), 300);
  });

  // Modal close on overlay click
  elements.saveModal.addEventListener('click', (e) => {
    if (e.target === elements.saveModal) {
      closeModal();
    }
  });

  // Voice recording
  elements.recordBtn.addEventListener('click', toggleRecording);

  // Context input
  elements.contextInput.addEventListener('input', (e) => {
    state.contextText = e.target.value;
    updateSaveButton();
  });

  // Save button
  elements.saveBtn.addEventListener('click', saveWithContext);

  // AI suggestion buttons
  elements.acceptAI.addEventListener('click', acceptAISuggestion);
  elements.dismissAI.addEventListener('click', dismissAISuggestion);

  // Filter pills
  elements.filterPills.forEach(pill => {
    pill.addEventListener('click', () => handleFilterClick(pill));
  });

  // Quick tags
  elements.quickTags.forEach(tag => {
    tag.addEventListener('click', () => handleTagClick(tag));
  });

  // Nav items
  elements.navItems.forEach(item => {
    item.addEventListener('click', () => handleNavClick(item));
  });

  // Save cards hover effects
  elements.saveCards.forEach(card => {
    card.addEventListener('click', () => handleCardClick(card));
  });

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.saveModal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Keyboard Navigation
function setupKeyboardNavigation() {
  // Make cards keyboard navigable
  elements.saveCards.forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardClick(card);
      }
    });
  });
}

// Modal Functions
function openModal() {
  elements.saveModal.classList.add('active');
  elements.saveModal.setAttribute('aria-hidden', 'false');
  elements.contextInput.focus();
  document.body.style.overflow = 'hidden';
  
  // Simulate AI suggestion appearing after a delay
  elements.aiSuggestion.style.display = 'none';
  setTimeout(() => {
    elements.aiSuggestion.style.display = 'flex';
    elements.aiSuggestion.style.animation = 'fadeIn 0.3s ease-out';
  }, 800);
}

function closeModal() {
  elements.saveModal.classList.remove('active');
  elements.saveModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  resetModalState();
}

function resetModalState() {
  state.isRecording = false;
  state.recordingTime = 0;
  state.selectedTags.clear();
  state.contextText = '';
  
  if (state.recordingInterval) {
    clearInterval(state.recordingInterval);
  }
  
  elements.voiceTimer.textContent = '0:00';
  elements.recordBtn.classList.remove('recording');
  elements.contextInput.value = '';
  
  elements.quickTags.forEach(tag => tag.classList.remove('selected'));
  
  updateSaveButton();
}

// Recording Functions
function toggleRecording() {
  if (state.isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

function startRecording() {
  state.isRecording = true;
  state.recordingTime = 0;
  elements.recordBtn.classList.add('recording');
  elements.recordBtn.innerHTML = '⏹️';
  
  state.recordingInterval = setInterval(() => {
    state.recordingTime++;
    const minutes = Math.floor(state.recordingTime / 60);
    const seconds = state.recordingTime % 60;
    elements.voiceTimer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function stopRecording() {
  state.isRecording = false;
  elements.recordBtn.classList.remove('recording');
  elements.recordBtn.innerHTML = '🎤';
  
  if (state.recordingInterval) {
    clearInterval(state.recordingInterval);
  }
  
  // Simulate transcription
  if (state.recordingTime > 0) {
    simulateTranscription();
  }
}

function simulateTranscription() {
  const transcriptions = [
    "This is for replying to people who say AI will replace developers",
    "Great example of React patterns for my project",
    "Birthday gift idea for Mom, she mentioned this last week",
    "Reference for the NASA streaming article I'm writing",
    "Meme for responding to bad takes on Twitter"
  ];
  
  const randomTranscription = transcriptions[Math.floor(Math.random() * transcriptions.length)];
  elements.contextInput.value = randomTranscription;
  state.contextText = randomTranscription;
  updateSaveButton();
  
  // Add animation
  elements.contextInput.style.animation = 'highlight 0.5s ease-out';
  setTimeout(() => {
    elements.contextInput.style.animation = '';
  }, 500);
}

// Tag Functions
function handleTagClick(tag) {
  tag.classList.toggle('selected');
  const tagValue = tag.dataset.tag;
  
  if (state.selectedTags.has(tagValue)) {
    state.selectedTags.delete(tagValue);
  } else {
    state.selectedTags.add(tagValue);
  }
  
  updateSaveButton();
}

// Filter Functions
function handleFilterClick(pill) {
  elements.filterPills.forEach(p => {
    p.classList.remove('active');
    p.setAttribute('aria-selected', 'false');
  });
  pill.classList.add('active');
  pill.setAttribute('aria-selected', 'true');
  
  // Simulate filter animation
  const cards = document.querySelectorAll('.save-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';
    setTimeout(() => {
      card.style.transition = 'all 0.3s ease-out';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

// Nav Functions
function handleNavClick(item) {
  elements.navItems.forEach(i => {
    i.classList.remove('active');
    i.removeAttribute('aria-current');
  });
  item.classList.add('active');
  item.setAttribute('aria-current', 'page');
}

// Card Functions
function handleCardClick(card) {
  // Simulate opening detail view
  card.style.transform = 'scale(0.98)';
  setTimeout(() => {
    card.style.transform = '';
    showToast('Opening details...', 'info');
  }, 150);
}

// AI Suggestion Functions
function acceptAISuggestion() {
  const suggestionText = "Chart about developer productivity for Twitter thread";
  elements.contextInput.value = suggestionText;
  state.contextText = suggestionText;
  
  // Auto-select relevant tag
  const twitterTag = document.querySelector('[data-tag="reply"]');
  if (twitterTag && !state.selectedTags.has('reply')) {
    twitterTag.classList.add('selected');
    state.selectedTags.add('reply');
  }
  
  elements.aiSuggestion.style.animation = 'fadeOut 0.3s ease-out';
  setTimeout(() => {
    elements.aiSuggestion.style.display = 'none';
  }, 300);
  
  updateSaveButton();
  showToast('AI suggestion applied! ✨');
}

function dismissAISuggestion() {
  elements.aiSuggestion.style.animation = 'fadeOut 0.3s ease-out';
  setTimeout(() => {
    elements.aiSuggestion.style.display = 'none';
  }, 300);
}

// Save Function
function saveWithContext() {
  if (!state.contextText && state.selectedTags.size === 0) {
    showToast('Add some context first!', 'error');
    return;
  }
  
  // Simulate save
  elements.saveBtn.disabled = true;
  elements.saveBtn.textContent = 'Saving...';
  
  setTimeout(() => {
    closeModal();
    showToast('Saved with context! 📌', 'success');
    addNewCardToList();
  }, 800);
}

function updateSaveButton() {
  const hasContent = state.contextText.trim().length > 0 || state.selectedTags.size > 0;
  elements.saveBtn.disabled = false;
  elements.saveBtn.textContent = hasContent ? 'Save with Context' : 'Save without Context';
}

// Add new card to list (demo)
function addNewCardToList() {
  const recentSection = document.querySelector('[aria-labelledby="recent-heading"] .section-header').nextElementSibling;
  
  if (!recentSection) return;
  
  const newCard = document.createElement('article');
  newCard.className = 'save-card';
  newCard.tabIndex = 0;
  newCard.innerHTML = `
    <div class="save-thumbnail">
      <img src="https://picsum.photos/seed/${Date.now()}/128/128" alt="New save thumbnail">
    </div>
    <div class="save-content">
      <p class="save-context">
        <span class="context-badge">🎯 WHY</span>
        ${state.contextText || 'Quick save'}
      </p>
      <div class="save-meta">
        <span>Screenshot</span>
        <span class="dot"></span>
        <span>Just now</span>
      </div>
      <div class="save-tags">
        ${Array.from(state.selectedTags).map(tag => `<span class="save-tag">${getTagEmoji(tag)} ${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  newCard.style.opacity = '0';
  newCard.style.transform = 'translateY(-10px)';
  
  // Insert at the top of the section (after the first card if orphan section exists)
  const firstCard = recentSection;
  firstCard.parentNode.insertBefore(newCard, firstCard);
  
  // Animate in
  setTimeout(() => {
    newCard.style.transition = 'all 0.3s ease-out';
    newCard.style.opacity = '1';
    newCard.style.transform = 'translateY(0)';
  }, 50);
  
  // Add click handler
  newCard.addEventListener('click', () => handleCardClick(newCard));
}

function getTagEmoji(tag) {
  const emojis = {
    reply: '💬',
    research: '📚',
    gift: '🎁',
    work: '💼',
    code: '💻',
    later: '⏰'
  };
  return emojis[tag] || '📌';
}

// Toast Functions
function showToast(message, type = 'success') {
  elements.toast.textContent = message;
  elements.toast.className = `toast ${type}`;
  elements.toast.classList.add('visible');
  
  setTimeout(() => {
    elements.toast.classList.remove('visible');
  }, 3000);
}

// CSS Animations (add to page)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(10px); }
  }
  
  @keyframes highlight {
    0% { background-color: var(--color-primary-100); }
    100% { background-color: var(--bg-secondary); }
  }
`;
document.head.appendChild(style);

// Initialize app
document.addEventListener('DOMContentLoaded', init);

// Service Worker Registration (for PWA capability)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Would register service worker here for full PWA
    console.log('SnapContext Prototype Loaded');
  });
}

// Expose for debugging
window.SnapContext = {
  state,
  elements,
  openModal,
  closeModal,
  showToast
};
