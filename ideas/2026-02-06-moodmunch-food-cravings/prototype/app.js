/**
 * MoodMunch - AI Food Craving Decoder
 * Interactive prototype demonstrating the core user flow
 */

// Food recommendations database (mood -> food mappings)
const moodFoodDatabase = {
  stressed: {
    primary: {
      name: "Loaded Nachos with Extra Guac",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop",
      reason: "Crunchy, messy, and impossible to eat gracefully. The act of building each bite is meditative, and the bold flavors demand your full attention - pulling you out of your head.",
      tags: ["🧀 Indulgent", "😌 Distracting", "🎉 Shareable"]
    },
    alts: [
      { name: "Crispy Fried Chicken", desc: "Satisfying crunch therapy" },
      { name: "Bubble Tea", desc: "Chewy stress relief" }
    ],
    moodTag: "😤 Stressed"
  },
  cozy: {
    primary: {
      name: "Creamy Tomato Soup & Grilled Cheese",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      reason: "The childhood classic that never fails. Warm soup, melty cheese, and that perfect dunk. It's not just food - it's a hug from the inside.",
      tags: ["🏠 Nostalgic", "🧈 Buttery", "☕ Warming"]
    },
    alts: [
      { name: "Hot Cocoa", desc: "Liquid comfort" },
      { name: "Fresh Baked Cookies", desc: "Warm from the oven" }
    ],
    moodTag: "🥰 Cozy"
  },
  adventurous: {
    primary: {
      name: "Korean Fried Chicken Tacos",
      image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=400&h=300&fit=crop",
      reason: "Fusion food for fusion moods. Gochujang heat meets taco freshness - it's bold, unexpected, and gives your taste buds something new to talk about.",
      tags: ["🌶️ Spicy", "🌍 Fusion", "📸 Insta-worthy"]
    },
    alts: [
      { name: "Poke Bowl", desc: "Fresh ocean adventure" },
      { name: "Ethiopian Platter", desc: "Eat with your hands" }
    ],
    moodTag: "🤠 Adventurous"
  },
  sad: {
    primary: {
      name: "Spicy Tonkotsu Ramen",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      reason: "The rich broth wraps around you like a warm hug, while the spice cuts through the melancholy. It's soul food in a bowl - slurp away your sorrows.",
      tags: ["🌶️ Warming", "🍜 Comfort", "⚡ Quick"]
    },
    alts: [
      { name: "Mac & Cheese", desc: "Classic comfort, zero effort" },
      { name: "Warm Brownie", desc: "Sweet catharsis with ice cream" }
    ],
    moodTag: "😢 Sad"
  },
  celebrating: {
    primary: {
      name: "Sushi Omakase Platter",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
      reason: "You deserve the chef's choice today. Each piece is a small celebration - beautiful, thoughtful, and worthy of the moment you're marking.",
      tags: ["✨ Premium", "🍣 Elegant", "📸 Gorgeous"]
    },
    alts: [
      { name: "Champagne & Oysters", desc: "Peak celebration energy" },
      { name: "Wagyu Steak", desc: "Go big or go home" }
    ],
    moodTag: "🎉 Celebrating"
  },
  tired: {
    primary: {
      name: "Pho with Extra Noodles",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
      reason: "Healing broth that requires zero cooking. The warm steam opens you up, the herbs restore you, and the slurping is basically meditation.",
      tags: ["🍃 Restorative", "💧 Hydrating", "🛋️ Easy"]
    },
    alts: [
      { name: "Congee", desc: "Gentle rice hug" },
      { name: "Avocado Toast", desc: "Energy, minimal effort" }
    ],
    moodTag: "😴 Tired"
  },
  anxious: {
    primary: {
      name: "Chamomile Tea & Honey Toast",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      reason: "Sometimes you need gentle. The ritual of brewing tea slows you down, and honey toast is soft enough to eat even when your stomach is in knots.",
      tags: ["🍃 Calming", "🍯 Gentle", "☕ Ritual"]
    },
    alts: [
      { name: "Banana", desc: "Nature's chill pill" },
      { name: "Oatmeal", desc: "Steady, grounding carbs" }
    ],
    moodTag: "😰 Anxious"
  },
  chaotic: {
    primary: {
      name: "Everything Bagel with The Works",
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop",
      reason: "Lean into the chaos! Cream cheese, lox, capers, onions, tomato - pile it all on. It's messy, it's everything, and it matches your energy perfectly.",
      tags: ["🌪️ Maximal", "🥯 Loaded", "😈 Chaotic good"]
    },
    alts: [
      { name: "Loaded Fries", desc: "Pile on everything" },
      { name: "Giant Burrito", desc: "Controlled chaos in foil" }
    ],
    moodTag: "🌪️ Chaotic"
  }
};

// Custom mood interpretations for text input
const customMoodMappings = [
  { keywords: ["weird", "sad", "down", "blue", "lonely"], mood: "sad" },
  { keywords: ["stress", "work", "deadline", "overwhelm", "busy"], mood: "stressed" },
  { keywords: ["comfy", "cozy", "rainy", "snuggle", "blanket", "home"], mood: "cozy" },
  { keywords: ["try", "new", "explore", "different", "bored"], mood: "adventurous" },
  { keywords: ["happy", "celebrate", "win", "good news", "birthday", "promotion"], mood: "celebrating" },
  { keywords: ["tired", "exhausted", "sleepy", "drained", "low energy"], mood: "tired" },
  { keywords: ["anxious", "nervous", "worry", "scared", "panic"], mood: "anxious" },
  { keywords: ["chaotic", "crazy", "wild", "messy", "random"], mood: "chaotic" }
];

// Loading messages
const loadingMessages = [
  "Analyzing emotional undertones",
  "Consulting the flavor matrix",
  "Matching vibes to cuisines",
  "Finding your soul food",
  "Decoding taste preferences",
  "Almost there..."
];

// DOM Elements
const heroSection = document.getElementById('hero-section');
const moodInput = document.getElementById('mood-input');
const decodeBtn = document.getElementById('decode-btn');
const moodCards = document.querySelectorAll('.mood-card');
const loadingSection = document.getElementById('loading-section');
const loadingSubtext = document.getElementById('loading-subtext');
const resultsSection = document.getElementById('results-section');
const backBtn = document.getElementById('back-btn');
const shareBtn = document.getElementById('share-btn');
const moodSummary = document.getElementById('mood-summary');
const primaryRec = document.getElementById('primary-rec');
const altRecs = document.getElementById('alt-recs');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// State
let currentMood = null;
let selectedCard = null;

// Initialize
function init() {
  decodeBtn.addEventListener('click', handleDecode);
  backBtn.addEventListener('click', handleBack);
  shareBtn.addEventListener('click', handleShare);
  
  moodCards.forEach(card => {
    card.addEventListener('click', () => handleMoodCardClick(card));
  });
  
  moodInput.addEventListener('input', () => {
    if (selectedCard) {
      selectedCard.classList.remove('selected');
      selectedCard = null;
    }
  });
  
  moodInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleDecode();
    }
  });
}

// Handle mood card click
function handleMoodCardClick(card) {
  if (selectedCard) {
    selectedCard.classList.remove('selected');
  }
  card.classList.add('selected');
  selectedCard = card;
  currentMood = card.dataset.mood;
  moodInput.value = '';
}

// Handle decode button
function handleDecode() {
  const textInput = moodInput.value.trim();
  
  if (!textInput && !currentMood) {
    moodInput.focus();
    moodInput.classList.add('shake');
    setTimeout(() => moodInput.classList.remove('shake'), 500);
    return;
  }
  
  // Determine mood from text input if no card selected
  if (textInput && !currentMood) {
    currentMood = interpretMood(textInput);
  }
  
  showLoading();
}

// Interpret mood from text
function interpretMood(text) {
  const lowerText = text.toLowerCase();
  
  for (const mapping of customMoodMappings) {
    for (const keyword of mapping.keywords) {
      if (lowerText.includes(keyword)) {
        return mapping.mood;
      }
    }
  }
  
  // Default to 'cozy' if no match
  return 'cozy';
}

// Show loading state
function showLoading() {
  heroSection.classList.add('hidden');
  document.querySelector('.mood-input-section').classList.add('hidden');
  loadingSection.classList.remove('hidden');
  
  // Cycle through loading messages
  let msgIndex = 0;
  const loadingInterval = setInterval(() => {
    msgIndex = (msgIndex + 1) % loadingMessages.length;
    loadingSubtext.textContent = loadingMessages[msgIndex];
  }, 800);
  
  // Show results after delay
  setTimeout(() => {
    clearInterval(loadingInterval);
    showResults();
  }, 2500);
}

// Show results
function showResults() {
  loadingSection.classList.add('hidden');
  resultsSection.classList.remove('hidden');
  
  const foodData = moodFoodDatabase[currentMood] || moodFoodDatabase.cozy;
  
  // Update mood summary
  moodSummary.innerHTML = `<span class="mood-tag">${foodData.moodTag}</span>`;
  
  // Update primary recommendation
  const recImage = primaryRec.querySelector('.rec-image');
  const recTitle = primaryRec.querySelector('.rec-title');
  const recReason = primaryRec.querySelector('.rec-reason');
  const recTags = primaryRec.querySelector('.rec-tags');
  
  recImage.style.backgroundImage = `url('${foodData.primary.image}')`;
  recTitle.textContent = foodData.primary.name;
  recReason.textContent = `"${foodData.primary.reason}"`;
  recTags.innerHTML = foodData.primary.tags
    .map(tag => `<span class="rec-tag">${tag}</span>`)
    .join('');
  
  // Update alternative recommendations
  altRecs.innerHTML = foodData.alts
    .map((alt, i) => `
      <div class="alt-rec-card">
        <div class="alt-rec-image" style="background: linear-gradient(135deg, var(--color-bg-subtle), var(--color-border))"></div>
        <div class="alt-rec-content">
          <h5>${alt.name}</h5>
          <p>${alt.desc}</p>
        </div>
      </div>
    `)
    .join('');
}

// Handle back button
function handleBack() {
  resultsSection.classList.add('hidden');
  heroSection.classList.remove('hidden');
  document.querySelector('.mood-input-section').classList.remove('hidden');
  
  // Reset state
  currentMood = null;
  moodInput.value = '';
  if (selectedCard) {
    selectedCard.classList.remove('selected');
    selectedCard = null;
  }
}

// Handle share
function handleShare() {
  const foodData = moodFoodDatabase[currentMood] || moodFoodDatabase.cozy;
  const shareText = `My mood: ${foodData.moodTag}\nMoodMunch says I need: ${foodData.primary.name} 🍜\n\n${foodData.primary.reason.slice(0, 100)}...\n\n#MoodMunch`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My MoodMunch Result',
      text: shareText,
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('Copied to clipboard!');
    });
  }
}

// Show toast notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Add shake animation for validation
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  .shake {
    animation: shake 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);

// Start the app
init();
