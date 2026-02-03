/**
 * Recipe Rescue - App Logic
 * A minimalist recipe extraction tool
 */

// ============================================
// State
// ============================================
const state = {
  recipe: null,
  originalServings: 24,
  currentServings: 24,
  checkedIngredients: new Set(),
  completedSteps: new Set(),
  timer: {
    active: false,
    paused: false,
    seconds: 0,
    interval: null,
    label: ''
  }
};

// Demo recipe data
const DEMO_RECIPE = {
  title: "Classic Chocolate Chip Cookies",
  prepTime: "15 min",
  cookTime: "12 min",
  servings: 24,
  ingredients: [
    { amount: "2¼", unit: "cups", item: "all-purpose flour" },
    { amount: "1", unit: "tsp", item: "baking soda" },
    { amount: "1", unit: "tsp", item: "salt" },
    { amount: "1", unit: "cup", item: "butter, softened" },
    { amount: "¾", unit: "cup", item: "granulated sugar" },
    { amount: "¾", unit: "cup", item: "packed brown sugar" },
    { amount: "2", unit: "large", item: "eggs" },
    { amount: "1", unit: "tsp", item: "vanilla extract" },
    { amount: "2", unit: "cups", item: "chocolate chips" }
  ],
  steps: [
    { text: "Preheat oven to 375°F (190°C).", timer: null },
    { text: "Combine flour, baking soda and salt in a small bowl.", timer: null },
    { text: "Beat butter, granulated sugar, brown sugar and vanilla extract in a large mixer bowl until creamy.", timer: null },
    { text: "Add eggs, one at a time, beating well after each addition.", timer: null },
    { text: "Gradually beat in flour mixture until just combined.", timer: null },
    { text: "Stir in chocolate chips by hand.", timer: null },
    { text: "Drop rounded tablespoon of dough onto ungreased baking sheets.", timer: null },
    { text: "Bake for 9 to 11 minutes or until golden brown.", timer: 10 },
    { text: "Cool on baking sheets for 2 minutes.", timer: 2 },
    { text: "Remove to wire racks to cool completely. Enjoy!", timer: null }
  ]
};

// ============================================
// DOM Elements
// ============================================
const elements = {
  app: document.getElementById('app'),
  form: document.getElementById('recipeForm'),
  urlInput: document.getElementById('recipeUrl'),
  rescueBtn: document.getElementById('rescueBtn'),
  themeToggle: document.getElementById('themeToggle'),
  
  // States
  loadingState: document.getElementById('loadingState'),
  errorState: document.getElementById('errorState'),
  errorMessage: document.getElementById('errorMessage'),
  recipeContent: document.getElementById('recipeContent'),
  emptyState: document.getElementById('emptyState'),
  
  // Recipe elements
  recipeTitle: document.getElementById('recipe-title'),
  prepTime: document.getElementById('prepTime'),
  cookTime: document.getElementById('cookTime'),
  servingsDisplay: document.getElementById('servingsDisplay'),
  servingsValue: document.getElementById('servingsValue'),
  ingredientsList: document.getElementById('ingredientsList'),
  stepsList: document.getElementById('stepsList'),
  
  // Servings controls
  decreaseServings: document.getElementById('decreaseServings'),
  increaseServings: document.getElementById('increaseServings'),
  
  // Buttons
  copyIngredientsBtn: document.getElementById('copyIngredientsBtn'),
  
  // Timer modal
  timerModal: document.getElementById('timerModal'),
  timerDisplay: document.getElementById('timerDisplay'),
  timerLabel: document.querySelector('#timer-label'),
  pauseTimerBtn: document.getElementById('pauseTimerBtn'),
  stopTimerBtn: document.getElementById('stopTimerBtn'),
  
  // Toast
  toastContainer: document.getElementById('toastContainer')
};

// ============================================
// Theme Management
// ============================================
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = elements.themeToggle.querySelector('.theme-toggle__icon');
  icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ============================================
// State Management
// ============================================
function showState(stateName) {
  // Hide all states
  elements.loadingState.classList.add('hidden');
  elements.errorState.classList.add('hidden');
  elements.recipeContent.classList.add('hidden');
  elements.emptyState.classList.add('hidden');
  
  // Show requested state
  switch (stateName) {
    case 'loading':
      elements.loadingState.classList.remove('hidden');
      break;
    case 'error':
      elements.errorState.classList.remove('hidden');
      break;
    case 'recipe':
      elements.recipeContent.classList.remove('hidden');
      break;
    case 'empty':
    default:
      elements.emptyState.classList.remove('hidden');
  }
}

// ============================================
// Recipe Rendering
// ============================================
function renderRecipe(recipe) {
  state.recipe = recipe;
  state.originalServings = recipe.servings;
  state.currentServings = recipe.servings;
  state.checkedIngredients.clear();
  state.completedSteps.clear();
  
  // Update header
  elements.recipeTitle.textContent = recipe.title;
  elements.prepTime.textContent = recipe.prepTime;
  elements.cookTime.textContent = recipe.cookTime;
  elements.servingsDisplay.textContent = recipe.servings;
  elements.servingsValue.textContent = recipe.servings;
  
  // Render ingredients
  renderIngredients();
  
  // Render steps
  renderSteps();
  
  showState('recipe');
}

function renderIngredients() {
  const multiplier = state.currentServings / state.originalServings;
  
  elements.ingredientsList.innerHTML = state.recipe.ingredients
    .map((ing, index) => {
      const scaledAmount = scaleAmount(ing.amount, multiplier);
      const isChecked = state.checkedIngredients.has(index);
      
      return `
        <li 
          class="ingredient ${isChecked ? 'ingredient--checked' : ''}" 
          data-index="${index}"
          role="checkbox"
          aria-checked="${isChecked}"
          tabindex="0"
        >
          <span class="ingredient__checkbox" aria-hidden="true">
            ${isChecked ? '✓' : ''}
          </span>
          <span class="ingredient__amount">${scaledAmount} ${ing.unit}</span>
          <span class="ingredient__text">${ing.item}</span>
        </li>
      `;
    })
    .join('');
  
  // Add click handlers
  elements.ingredientsList.querySelectorAll('.ingredient').forEach(el => {
    el.addEventListener('click', () => toggleIngredient(el));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleIngredient(el);
      }
    });
  });
}

function renderSteps() {
  elements.stepsList.innerHTML = state.recipe.steps
    .map((step, index) => {
      const isCompleted = state.completedSteps.has(index);
      
      return `
        <li 
          class="step ${isCompleted ? 'step--completed' : ''}" 
          data-index="${index}"
          role="checkbox"
          aria-checked="${isCompleted}"
          tabindex="0"
        >
          <span class="step__number">${index + 1}</span>
          <div class="step__content">
            <p class="step__text">${step.text}</p>
            ${step.timer ? `
              <button 
                class="step__timer" 
                data-minutes="${step.timer}"
                aria-label="Start ${step.timer} minute timer"
              >
                ⏱️ ${step.timer} min
              </button>
            ` : ''}
          </div>
        </li>
      `;
    })
    .join('');
  
  // Add click handlers for steps
  elements.stepsList.querySelectorAll('.step').forEach(el => {
    el.addEventListener('click', (e) => {
      if (!e.target.classList.contains('step__timer')) {
        toggleStep(el);
      }
    });
    el.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.classList.contains('step__timer')) {
        e.preventDefault();
        toggleStep(el);
      }
    });
  });
  
  // Add click handlers for timers
  elements.stepsList.querySelectorAll('.step__timer').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const minutes = parseInt(el.dataset.minutes, 10);
      startTimer(minutes, el.textContent.trim());
    });
  });
}

// ============================================
// Ingredient & Step Interactions
// ============================================
function toggleIngredient(el) {
  const index = parseInt(el.dataset.index, 10);
  
  if (state.checkedIngredients.has(index)) {
    state.checkedIngredients.delete(index);
    el.classList.remove('ingredient--checked');
    el.setAttribute('aria-checked', 'false');
    el.querySelector('.ingredient__checkbox').textContent = '';
  } else {
    state.checkedIngredients.add(index);
    el.classList.add('ingredient--checked');
    el.setAttribute('aria-checked', 'true');
    el.querySelector('.ingredient__checkbox').textContent = '✓';
  }
}

function toggleStep(el) {
  const index = parseInt(el.dataset.index, 10);
  
  if (state.completedSteps.has(index)) {
    state.completedSteps.delete(index);
    el.classList.remove('step--completed');
    el.setAttribute('aria-checked', 'false');
  } else {
    state.completedSteps.add(index);
    el.classList.add('step--completed');
    el.setAttribute('aria-checked', 'true');
  }
}

// ============================================
// Servings Scaling
// ============================================
function scaleAmount(original, multiplier) {
  // Parse fraction or decimal
  const fractionMap = {
    '¼': 0.25, '½': 0.5, '¾': 0.75,
    '⅓': 0.333, '⅔': 0.667,
    '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875
  };
  
  let value = 0;
  let remaining = original;
  
  // Check for whole number + fraction (e.g., "2¼")
  const parts = original.match(/^(\d+)?([¼½¾⅓⅔⅛⅜⅝⅞])?$/);
  
  if (parts) {
    if (parts[1]) value += parseInt(parts[1], 10);
    if (parts[2]) value += fractionMap[parts[2]] || 0;
  } else {
    // Try parsing as regular number
    value = parseFloat(original) || 0;
  }
  
  // Scale and format
  const scaled = value * multiplier;
  
  // Format nicely
  if (scaled === Math.floor(scaled)) {
    return scaled.toString();
  }
  
  // Convert back to fractions for common values
  const decimal = scaled - Math.floor(scaled);
  const whole = Math.floor(scaled);
  
  let fraction = '';
  if (decimal >= 0.2 && decimal <= 0.3) fraction = '¼';
  else if (decimal >= 0.3 && decimal <= 0.4) fraction = '⅓';
  else if (decimal >= 0.45 && decimal <= 0.55) fraction = '½';
  else if (decimal >= 0.6 && decimal <= 0.7) fraction = '⅔';
  else if (decimal >= 0.7 && decimal <= 0.8) fraction = '¾';
  else if (decimal > 0) fraction = decimal.toFixed(1).replace('0.', '.');
  
  if (whole === 0 && fraction) return fraction;
  if (whole > 0 && fraction) return `${whole}${fraction}`;
  return scaled.toFixed(1).replace(/\.0$/, '');
}

function updateServings(delta) {
  const newServings = state.currentServings + delta;
  
  if (newServings >= 1 && newServings <= 100) {
    state.currentServings = newServings;
    elements.servingsValue.textContent = newServings;
    elements.servingsDisplay.textContent = newServings;
    renderIngredients();
  }
}

// ============================================
// Timer
// ============================================
function startTimer(minutes, label) {
  // Clear any existing timer
  if (state.timer.interval) {
    clearInterval(state.timer.interval);
  }
  
  state.timer.active = true;
  state.timer.paused = false;
  state.timer.seconds = minutes * 60;
  state.timer.label = label;
  
  elements.timerLabel.textContent = label;
  elements.pauseTimerBtn.textContent = '⏸️ Pause';
  
  updateTimerDisplay();
  showTimerModal(true);
  
  state.timer.interval = setInterval(() => {
    if (!state.timer.paused) {
      state.timer.seconds--;
      updateTimerDisplay();
      
      if (state.timer.seconds <= 0) {
        timerComplete();
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timer.seconds / 60);
  const secs = state.timer.seconds % 60;
  elements.timerDisplay.textContent = 
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function toggleTimerPause() {
  state.timer.paused = !state.timer.paused;
  elements.pauseTimerBtn.textContent = state.timer.paused ? '▶️ Resume' : '⏸️ Pause';
}

function stopTimer() {
  if (state.timer.interval) {
    clearInterval(state.timer.interval);
    state.timer.interval = null;
  }
  state.timer.active = false;
  showTimerModal(false);
}

function timerComplete() {
  stopTimer();
  showToast('Timer complete! ⏰', 'success');
  
  // Try to play a sound or vibrate
  if ('vibrate' in navigator) {
    navigator.vibrate([200, 100, 200]);
  }
}

function showTimerModal(show) {
  if (show) {
    elements.timerModal.classList.add('timer-modal--active');
    elements.timerModal.setAttribute('aria-hidden', 'false');
  } else {
    elements.timerModal.classList.remove('timer-modal--active');
    elements.timerModal.setAttribute('aria-hidden', 'true');
  }
}

// ============================================
// Toast Notifications
// ============================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${type === 'success' ? '✅' : '❌'}</span>
    <span class="toast__message">${message}</span>
  `;
  
  elements.toastContainer.appendChild(toast);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// Copy to Clipboard
// ============================================
function copyIngredients() {
  if (!state.recipe) return;
  
  const multiplier = state.currentServings / state.originalServings;
  
  const text = state.recipe.ingredients
    .map(ing => {
      const scaledAmount = scaleAmount(ing.amount, multiplier);
      return `${scaledAmount} ${ing.unit} ${ing.item}`;
    })
    .join('\n');
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('Shopping list copied! 📋', 'success');
  }).catch(() => {
    showToast('Failed to copy', 'error');
  });
}

// ============================================
// Recipe Extraction (Simulated)
// ============================================
async function rescueRecipe(url) {
  showState('loading');
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For demo purposes, always return the demo recipe
  // In production, this would call an actual extraction API
  
  if (url.includes('error') || url.includes('invalid')) {
    elements.errorMessage.textContent = 
      "We couldn't find a recipe on that page. Make sure the URL points to an actual recipe.";
    showState('error');
    return;
  }
  
  // Return demo recipe
  renderRecipe(DEMO_RECIPE);
}

// ============================================
// Event Listeners
// ============================================
function initEventListeners() {
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Form submission
  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = elements.urlInput.value.trim();
    if (url) {
      rescueRecipe(url);
    }
  });
  
  // Demo button
  document.querySelector('[data-demo="demo1"]').addEventListener('click', () => {
    elements.urlInput.value = 'https://example.com/chocolate-chip-cookies';
    rescueRecipe('demo');
  });
  
  // Servings controls
  elements.decreaseServings.addEventListener('click', () => updateServings(-1));
  elements.increaseServings.addEventListener('click', () => updateServings(1));
  
  // Copy ingredients
  elements.copyIngredientsBtn.addEventListener('click', copyIngredients);
  
  // Timer controls
  elements.pauseTimerBtn.addEventListener('click', toggleTimerPause);
  elements.stopTimerBtn.addEventListener('click', stopTimer);
  
  // Close modal on backdrop click
  elements.timerModal.addEventListener('click', (e) => {
    if (e.target === elements.timerModal) {
      stopTimer();
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape to close timer
    if (e.key === 'Escape' && state.timer.active) {
      stopTimer();
    }
    
    // Ctrl/Cmd + Enter to submit
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (document.activeElement === elements.urlInput) {
        elements.form.dispatchEvent(new Event('submit'));
      }
    }
  });
}

// ============================================
// Initialize
// ============================================
function init() {
  initTheme();
  initEventListeners();
  showState('empty');
  
  console.log('🍳 Recipe Rescue initialized');
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
