/**
 * CookOnce - Offline-First Minimalist Recipe Clipper
 * Main Application JavaScript
 */

// ===========================================
// Sample Data (Demo Recipes)
// ===========================================
const sampleRecipes = [
  {
    id: 1,
    name: "Classic Pasta Carbonara",
    emoji: "🍝",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 4,
    tags: ["quick", "dinner"],
    ingredients: [
      { amount: "400g", item: "spaghetti" },
      { amount: "200g", item: "guanciale or pancetta, diced" },
      { amount: "4", item: "large egg yolks" },
      { amount: "1", item: "whole egg" },
      { amount: "100g", item: "Pecorino Romano, finely grated" },
      { amount: "", item: "Freshly ground black pepper" },
      { amount: "", item: "Salt for pasta water" }
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Add pasta and cook until al dente.",
      "While pasta cooks, fry guanciale in a cold pan over medium heat until crispy, about 8-10 minutes.",
      "In a bowl, whisk egg yolks, whole egg, and most of the Pecorino. Season generously with black pepper.",
      "When pasta is ready, reserve 1 cup pasta water, then drain.",
      "Remove pan from heat. Add pasta to the guanciale, toss to coat in the fat.",
      "Pour egg mixture over pasta, tossing quickly. The residual heat will cook the eggs into a creamy sauce.",
      "Add pasta water a splash at a time if needed. Serve immediately with remaining cheese."
    ],
    source: "Traditional Italian"
  },
  {
    id: 2,
    name: "Honey Garlic Salmon",
    emoji: "🐟",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: 2,
    tags: ["quick", "dinner"],
    ingredients: [
      { amount: "2", item: "salmon fillets (6 oz each)" },
      { amount: "3 tbsp", item: "honey" },
      { amount: "2 tbsp", item: "soy sauce" },
      { amount: "4 cloves", item: "garlic, minced" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 tbsp", item: "butter" },
      { amount: "", item: "Salt and pepper to taste" },
      { amount: "", item: "Fresh parsley for garnish" }
    ],
    instructions: [
      "Pat salmon dry and season with salt and pepper.",
      "Mix honey, soy sauce, and garlic in a small bowl.",
      "Heat olive oil and butter in a skillet over medium-high heat.",
      "Place salmon skin-side up. Sear for 3-4 minutes until golden.",
      "Flip salmon. Pour honey garlic mixture around the fish.",
      "Reduce heat to medium. Baste salmon with sauce for 5-6 minutes until cooked through.",
      "Garnish with parsley and serve with remaining sauce spooned over top."
    ],
    source: "Budget Bytes"
  },
  {
    id: 3,
    name: "Chocolate Lava Cakes",
    emoji: "🍫",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: 4,
    tags: ["dessert"],
    ingredients: [
      { amount: "4 oz", item: "bittersweet chocolate, chopped" },
      { amount: "1/2 cup", item: "unsalted butter" },
      { amount: "1 cup", item: "powdered sugar" },
      { amount: "2", item: "whole eggs" },
      { amount: "2", item: "egg yolks" },
      { amount: "6 tbsp", item: "all-purpose flour" },
      { amount: "", item: "Butter and cocoa for ramekins" },
      { amount: "", item: "Vanilla ice cream for serving" }
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter four 6-oz ramekins and dust with cocoa powder.",
      "Melt chocolate and butter together in microwave in 30-second intervals, stirring between.",
      "Whisk in powdered sugar until smooth.",
      "Add eggs and egg yolks, whisking until combined.",
      "Fold in flour until just combined. Don't overmix.",
      "Divide batter among ramekins. Can refrigerate up to 8 hours at this point.",
      "Bake 12-14 minutes until edges are firm but center is soft.",
      "Let cool 1 minute, then invert onto plates. Serve immediately with ice cream."
    ],
    source: "Serious Eats"
  }
];

// ===========================================
// State Management
// ===========================================
let recipes = [...sampleRecipes];
let currentRecipe = null;
let currentScale = 1;
let cookModeStep = 0;
let wakeLock = null;

// ===========================================
// DOM Elements
// ===========================================
const elements = {
  // Header
  menuBtn: document.getElementById('menuBtn'),
  addBtn: document.getElementById('addBtn'),
  
  // Search & Filter
  searchInput: document.getElementById('searchInput'),
  filterTags: document.querySelectorAll('.filter-tag'),
  
  // Recipe Grid
  recipeGrid: document.getElementById('recipeGrid'),
  recipeCount: document.getElementById('recipeCount'),
  emptyState: document.getElementById('emptyState'),
  emptyAddBtn: document.getElementById('emptyAddBtn'),
  
  // Add Modal
  addModal: document.getElementById('addModal'),
  modalClose: document.getElementById('modalClose'),
  modalTabs: document.querySelectorAll('.modal-tab'),
  urlTab: document.getElementById('urlTab'),
  manualTab: document.getElementById('manualTab'),
  recipeUrl: document.getElementById('recipeUrl'),
  importBtn: document.getElementById('importBtn'),
  saveBtn: document.getElementById('saveBtn'),
  
  // Manual Form Fields
  recipeName: document.getElementById('recipeName'),
  prepTime: document.getElementById('prepTime'),
  cookTime: document.getElementById('cookTime'),
  servings: document.getElementById('servings'),
  ingredients: document.getElementById('ingredients'),
  instructions: document.getElementById('instructions'),
  
  // Recipe Detail Modal
  recipeModal: document.getElementById('recipeModal'),
  backBtn: document.getElementById('backBtn'),
  scaleBtn: document.getElementById('scaleBtn'),
  cookModeBtn: document.getElementById('cookModeBtn'),
  recipeDetailBody: document.getElementById('recipeDetailBody'),
  
  // Cook Mode
  cookMode: document.getElementById('cookMode'),
  cookExitBtn: document.getElementById('cookExitBtn'),
  cookProgress: document.getElementById('cookProgress'),
  cookStep: document.getElementById('cookStep'),
  cookPrevBtn: document.getElementById('cookPrevBtn'),
  cookNextBtn: document.getElementById('cookNextBtn'),
  toggleIngredients: document.getElementById('toggleIngredients'),
  cookIngredients: document.getElementById('cookIngredients'),
  
  // Scale Modal
  scaleModal: document.getElementById('scaleModal'),
  scaleModalClose: document.getElementById('scaleModalClose'),
  originalServings: document.getElementById('originalServings'),
  scaleBtns: document.querySelectorAll('.scale-btn'),
  customServings: document.getElementById('customServings'),
  applyScaleBtn: document.getElementById('applyScaleBtn'),
  
  // Side Menu
  sideMenu: document.getElementById('sideMenu'),
  sideMenuClose: document.getElementById('sideMenuClose'),
  sideMenuBackdrop: document.getElementById('sideMenuBackdrop'),
  
  // Toast
  toast: document.getElementById('toast')
};

// ===========================================
// Render Functions
// ===========================================
function renderRecipes(filter = 'all', searchQuery = '') {
  let filtered = recipes;
  
  // Apply tag filter
  if (filter !== 'all') {
    filtered = filtered.filter(r => r.tags.includes(filter));
  }
  
  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(r => 
      r.name.toLowerCase().includes(query) ||
      r.ingredients.some(i => i.item.toLowerCase().includes(query))
    );
  }
  
  // Update count
  elements.recipeCount.textContent = `${filtered.length} recipe${filtered.length !== 1 ? 's' : ''}`;
  
  // Show empty state or grid
  if (filtered.length === 0) {
    elements.recipeGrid.innerHTML = '';
    elements.emptyState.classList.remove('hidden');
  } else {
    elements.emptyState.classList.add('hidden');
    elements.recipeGrid.innerHTML = filtered.map(recipe => `
      <article class="recipe-card" tabindex="0" data-id="${recipe.id}" role="button" aria-label="View ${recipe.name}">
        <div class="recipe-card-image">${recipe.emoji}</div>
        <div class="recipe-card-content">
          <h3 class="recipe-card-title">${recipe.name}</h3>
          <div class="recipe-card-meta">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${recipe.prepTime} + ${recipe.cookTime}
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              ${recipe.servings} servings
            </span>
          </div>
          <div class="recipe-card-tags">
            ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.recipe-card').forEach(card => {
      card.addEventListener('click', () => openRecipe(parseInt(card.dataset.id)));
      card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') openRecipe(parseInt(card.dataset.id));
      });
    });
  }
}

function renderRecipeDetail(recipe, scale = 1) {
  const scaledServings = Math.round(recipe.servings * scale);
  
  elements.recipeDetailBody.innerHTML = `
    <h1 class="recipe-detail-title">${recipe.name}</h1>
    <div class="recipe-detail-meta">
      <div class="recipe-meta-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Prep: ${recipe.prepTime}</span>
      </div>
      <div class="recipe-meta-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
        <span>Cook: ${recipe.cookTime}</span>
      </div>
      <div class="recipe-meta-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
        <span>${scaledServings} serving${scaledServings !== 1 ? 's' : ''}</span>
      </div>
    </div>
    
    <section class="recipe-section">
      <h2 class="recipe-section-title">Ingredients</h2>
      <ul class="ingredient-list">
        ${recipe.ingredients.map((ing, i) => `
          <li class="ingredient-item">
            <input type="checkbox" class="ingredient-checkbox" id="ing-${i}" aria-label="Mark ${ing.item} as done">
            <label class="ingredient-text" for="ing-${i}">
              ${ing.amount ? `<span class="ingredient-amount">${scaleAmount(ing.amount, scale)}</span> ` : ''}${ing.item}
            </label>
          </li>
        `).join('')}
      </ul>
    </section>
    
    <section class="recipe-section">
      <h2 class="recipe-section-title">Instructions</h2>
      <ol class="instruction-list">
        ${recipe.instructions.map((step, i) => `
          <li class="instruction-item">
            <span class="instruction-number">${i + 1}</span>
            <p class="instruction-text">${step}</p>
          </li>
        `).join('')}
      </ol>
    </section>
    
    ${recipe.source ? `
      <p class="recipe-source" style="font-size: 0.875rem; color: var(--color-text-tertiary); margin-top: var(--space-4);">
        Source: ${recipe.source}
      </p>
    ` : ''}
  `;
}

function scaleAmount(amount, scale) {
  if (scale === 1) return amount;
  
  // Parse numeric values
  const match = amount.match(/^([\d./]+)\s*(.*)$/);
  if (!match) return amount;
  
  let [, num, unit] = match;
  
  // Handle fractions
  if (num.includes('/')) {
    const [numerator, denominator] = num.split('/').map(Number);
    num = numerator / denominator;
  } else {
    num = parseFloat(num);
  }
  
  if (isNaN(num)) return amount;
  
  const scaled = num * scale;
  
  // Format nicely
  if (scaled === Math.floor(scaled)) {
    return `${scaled}${unit ? ' ' + unit : ''}`;
  }
  return `${scaled.toFixed(1)}${unit ? ' ' + unit : ''}`;
}

// ===========================================
// Recipe Operations
// ===========================================
function openRecipe(id) {
  currentRecipe = recipes.find(r => r.id === id);
  if (!currentRecipe) return;
  
  currentScale = 1;
  renderRecipeDetail(currentRecipe, currentScale);
  elements.recipeModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeRecipe() {
  elements.recipeModal.classList.add('hidden');
  document.body.style.overflow = '';
  currentRecipe = null;
}

function openAddModal() {
  elements.addModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeAddModal() {
  elements.addModal.classList.add('hidden');
  document.body.style.overflow = '';
  // Reset form
  elements.recipeUrl.value = '';
  elements.recipeName.value = '';
  elements.prepTime.value = '';
  elements.cookTime.value = '';
  elements.servings.value = '';
  elements.ingredients.value = '';
  elements.instructions.value = '';
}

function switchTab(tabName) {
  elements.modalTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
    tab.setAttribute('aria-selected', tab.dataset.tab === tabName);
  });
  
  elements.urlTab.classList.toggle('hidden', tabName !== 'url');
  elements.urlTab.classList.toggle('active', tabName === 'url');
  elements.manualTab.classList.toggle('hidden', tabName !== 'manual');
  elements.manualTab.classList.toggle('active', tabName === 'manual');
}

function importRecipe() {
  const url = elements.recipeUrl.value.trim();
  if (!url) {
    showToast('Please enter a recipe URL');
    return;
  }
  
  // Simulate import (in real app, this would call a backend or parse the page)
  showToast('Importing recipe...');
  
  setTimeout(() => {
    // Create a demo imported recipe
    const newRecipe = {
      id: Date.now(),
      name: "Imported Recipe",
      emoji: "📋",
      prepTime: "10 min",
      cookTime: "30 min",
      servings: 4,
      tags: ["dinner"],
      ingredients: [
        { amount: "", item: "Ingredients from " + new URL(url).hostname }
      ],
      instructions: [
        "Recipe imported from " + url,
        "Edit this recipe to add the actual steps."
      ],
      source: url
    };
    
    recipes.unshift(newRecipe);
    renderRecipes();
    closeAddModal();
    showToast('Recipe imported! (Demo mode)');
  }, 1500);
}

function saveManualRecipe() {
  const name = elements.recipeName.value.trim();
  const prepTime = elements.prepTime.value.trim() || '0 min';
  const cookTime = elements.cookTime.value.trim() || '0 min';
  const servings = parseInt(elements.servings.value) || 4;
  const ingredientsText = elements.ingredients.value.trim();
  const instructionsText = elements.instructions.value.trim();
  
  if (!name) {
    showToast('Please enter a recipe name');
    return;
  }
  
  // Parse ingredients
  const ingredients = ingredientsText.split('\n')
    .filter(line => line.trim())
    .map(line => {
      const match = line.match(/^([\d./\s]+(?:cup|tbsp|tsp|oz|g|kg|ml|lb)?s?)?\s*(.+)$/i);
      if (match) {
        return { amount: match[1]?.trim() || '', item: match[2].trim() };
      }
      return { amount: '', item: line.trim() };
    });
  
  // Parse instructions
  const instructions = instructionsText.split('\n')
    .filter(line => line.trim())
    .map(line => line.replace(/^\d+[\.\)]\s*/, '').trim());
  
  // Get selected tags
  const tags = Array.from(document.querySelectorAll('.tag-checkbox input:checked'))
    .map(input => input.value);
  
  // Create recipe
  const newRecipe = {
    id: Date.now(),
    name,
    emoji: "📝",
    prepTime,
    cookTime,
    servings,
    tags,
    ingredients,
    instructions,
    source: "Manual entry"
  };
  
  recipes.unshift(newRecipe);
  renderRecipes();
  closeAddModal();
  showToast('Recipe saved!');
}

// ===========================================
// Scale Functions
// ===========================================
function openScaleModal() {
  if (!currentRecipe) return;
  
  elements.originalServings.textContent = currentRecipe.servings;
  elements.customServings.value = Math.round(currentRecipe.servings * currentScale);
  
  // Update active scale button
  elements.scaleBtns.forEach(btn => {
    btn.classList.toggle('active', parseFloat(btn.dataset.scale) === currentScale);
  });
  
  elements.scaleModal.classList.remove('hidden');
}

function closeScaleModal() {
  elements.scaleModal.classList.add('hidden');
}

function applyScale() {
  const activeBtn = document.querySelector('.scale-btn.active');
  const customValue = parseInt(elements.customServings.value);
  
  if (customValue && customValue !== currentRecipe.servings * currentScale) {
    currentScale = customValue / currentRecipe.servings;
  } else if (activeBtn) {
    currentScale = parseFloat(activeBtn.dataset.scale);
  }
  
  renderRecipeDetail(currentRecipe, currentScale);
  closeScaleModal();
  showToast(`Scaled to ${Math.round(currentRecipe.servings * currentScale)} servings`);
}

// ===========================================
// Cook Mode Functions
// ===========================================
async function enterCookMode() {
  if (!currentRecipe) return;
  
  cookModeStep = 0;
  updateCookModeStep();
  
  // Render ingredients
  elements.cookIngredients.innerHTML = currentRecipe.ingredients.map(ing => `
    <div class="cook-ingredient-item">
      ${ing.amount ? `<strong>${scaleAmount(ing.amount, currentScale)}</strong> ` : ''}${ing.item}
    </div>
  `).join('');
  
  elements.cookMode.classList.remove('hidden');
  elements.recipeModal.classList.add('hidden');
  
  // Request wake lock to keep screen on
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (err) {
    console.log('Wake lock not available:', err);
  }
}

function exitCookMode() {
  elements.cookMode.classList.add('hidden');
  elements.recipeModal.classList.remove('hidden');
  elements.cookIngredients.classList.add('hidden');
  
  // Release wake lock
  if (wakeLock) {
    wakeLock.release();
    wakeLock = null;
  }
}

function updateCookModeStep() {
  if (!currentRecipe) return;
  
  const total = currentRecipe.instructions.length;
  elements.cookProgress.textContent = `Step ${cookModeStep + 1} of ${total}`;
  elements.cookStep.querySelector('.cook-step-text').textContent = currentRecipe.instructions[cookModeStep];
  
  // Update button states
  elements.cookPrevBtn.style.visibility = cookModeStep === 0 ? 'hidden' : 'visible';
  elements.cookNextBtn.textContent = cookModeStep === total - 1 ? 'Done' : 'Next';
}

function cookModePrev() {
  if (cookModeStep > 0) {
    cookModeStep--;
    updateCookModeStep();
  }
}

function cookModeNext() {
  if (cookModeStep < currentRecipe.instructions.length - 1) {
    cookModeStep++;
    updateCookModeStep();
  } else {
    exitCookMode();
    showToast('Recipe complete! 🎉');
  }
}

function toggleCookIngredients() {
  elements.cookIngredients.classList.toggle('hidden');
}

// ===========================================
// Side Menu Functions
// ===========================================
function openSideMenu() {
  elements.sideMenu.classList.remove('hidden');
  elements.sideMenuBackdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSideMenu() {
  elements.sideMenu.classList.add('hidden');
  elements.sideMenuBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

// ===========================================
// Toast Function
// ===========================================
function showToast(message) {
  elements.toast.querySelector('.toast-message').textContent = message;
  elements.toast.classList.remove('hidden');
  
  setTimeout(() => {
    elements.toast.classList.add('hidden');
  }, 3000);
}

// ===========================================
// Search & Filter
// ===========================================
let activeFilter = 'all';

function handleSearch() {
  renderRecipes(activeFilter, elements.searchInput.value);
}

function handleFilter(e) {
  if (e.target.classList.contains('filter-tag')) {
    activeFilter = e.target.dataset.filter;
    elements.filterTags.forEach(tag => {
      tag.classList.toggle('active', tag.dataset.filter === activeFilter);
      tag.setAttribute('aria-selected', tag.dataset.filter === activeFilter);
    });
    renderRecipes(activeFilter, elements.searchInput.value);
  }
}

// ===========================================
// Event Listeners
// ===========================================
function initEventListeners() {
  // Header
  elements.menuBtn.addEventListener('click', openSideMenu);
  elements.addBtn.addEventListener('click', openAddModal);
  
  // Search
  elements.searchInput.addEventListener('input', handleSearch);
  
  // Filter tags
  document.querySelector('.filter-tags').addEventListener('click', handleFilter);
  
  // Add Modal
  elements.modalClose.addEventListener('click', closeAddModal);
  elements.modalTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  elements.importBtn.addEventListener('click', importRecipe);
  elements.saveBtn.addEventListener('click', saveManualRecipe);
  elements.emptyAddBtn?.addEventListener('click', openAddModal);
  
  // Recipe Detail
  elements.backBtn.addEventListener('click', closeRecipe);
  elements.scaleBtn.addEventListener('click', openScaleModal);
  elements.cookModeBtn.addEventListener('click', enterCookMode);
  
  // Scale Modal
  elements.scaleModalClose.addEventListener('click', closeScaleModal);
  elements.scaleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.scaleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  elements.applyScaleBtn.addEventListener('click', applyScale);
  
  // Cook Mode
  elements.cookExitBtn.addEventListener('click', exitCookMode);
  elements.cookPrevBtn.addEventListener('click', cookModePrev);
  elements.cookNextBtn.addEventListener('click', cookModeNext);
  elements.toggleIngredients.addEventListener('click', toggleCookIngredients);
  
  // Side Menu
  elements.sideMenuClose.addEventListener('click', closeSideMenu);
  elements.sideMenuBackdrop.addEventListener('click', closeSideMenu);
  
  // Close modals on overlay click
  elements.addModal.addEventListener('click', (e) => {
    if (e.target === elements.addModal) closeAddModal();
  });
  elements.recipeModal.addEventListener('click', (e) => {
    if (e.target === elements.recipeModal) closeRecipe();
  });
  elements.scaleModal.addEventListener('click', (e) => {
    if (e.target === elements.scaleModal) closeScaleModal();
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!elements.cookMode.classList.contains('hidden')) {
        exitCookMode();
      } else if (!elements.scaleModal.classList.contains('hidden')) {
        closeScaleModal();
      } else if (!elements.recipeModal.classList.contains('hidden')) {
        closeRecipe();
      } else if (!elements.addModal.classList.contains('hidden')) {
        closeAddModal();
      } else if (!elements.sideMenu.classList.contains('hidden')) {
        closeSideMenu();
      }
    }
    
    // Arrow keys in cook mode
    if (!elements.cookMode.classList.contains('hidden')) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        cookModeNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        cookModePrev();
      }
    }
  });
  
  // Swipe gestures in cook mode (touch devices)
  let touchStartX = 0;
  elements.cookMode.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  
  elements.cookMode.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        cookModeNext();
      } else {
        cookModePrev();
      }
    }
  });
}

// ===========================================
// Initialize App
// ===========================================
function init() {
  renderRecipes();
  initEventListeners();
  
  // Register service worker for PWA (commented out for demo)
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('/sw.js');
  // }
  
  console.log('🍳 CookOnce initialized');
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
