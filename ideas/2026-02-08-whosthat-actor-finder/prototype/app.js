/**
 * WhosThat - Shazam for Actors
 * Interactive Prototype
 */

// === Demo Data ===
const demoActors = [
  {
    id: 1,
    name: "Bryan Cranston",
    born: "March 7, 1956",
    photo: "https://image.tmdb.org/t/p/w200/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg",
    knownFor: [
      { title: "Breaking Bad", role: "Walter White", year: "2008-2013", poster: "https://image.tmdb.org/t/p/w200/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
      { title: "Malcolm in the Middle", role: "Hal", year: "2000-2006", poster: "https://image.tmdb.org/t/p/w200/bPKF1C1qDBrZW25xxamOy7h3nIL.jpg" },
      { title: "Godzilla", role: "Joe Brody", year: "2014", poster: "https://image.tmdb.org/t/p/w200/pVGnZXcbJ6iIcDA9RacsAq7DJFH.jpg" },
    ],
    movies: [
      { title: "Godzilla", role: "Joe Brody", year: "2014" },
      { title: "Trumbo", role: "Dalton Trumbo", year: "2015" },
      { title: "The Infiltrator", role: "Robert Mazur", year: "2016" },
      { title: "Isle of Dogs", role: "Chief (voice)", year: "2018" },
      { title: "Asteroid City", role: "Host", year: "2023" },
    ],
    tv: [
      { title: "Breaking Bad", role: "Walter White", year: "2008-2013" },
      { title: "Malcolm in the Middle", role: "Hal", year: "2000-2006" },
      { title: "Your Honor", role: "Michael Desiato", year: "2020-2023" },
      { title: "Seinfeld", role: "Tim Whatley", year: "1994-1997" },
    ]
  },
  {
    id: 2,
    name: "Giancarlo Esposito",
    born: "April 26, 1958",
    photo: "https://image.tmdb.org/t/p/w200/lBvDwkkDyB6vdlM0gYRdvx67xq4.jpg",
    knownFor: [
      { title: "Breaking Bad", role: "Gus Fring", year: "2009-2011", poster: "https://image.tmdb.org/t/p/w200/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
      { title: "The Mandalorian", role: "Moff Gideon", year: "2019-2023", poster: "https://image.tmdb.org/t/p/w200/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
      { title: "Better Call Saul", role: "Gus Fring", year: "2017-2022", poster: "https://image.tmdb.org/t/p/w200/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg" },
    ],
    movies: [
      { title: "Do the Right Thing", role: "Buggin' Out", year: "1989" },
      { title: "The Usual Suspects", role: "Jack Baer", year: "1995" },
      { title: "Okja", role: "Frank Dawson", year: "2017" },
      { title: "The Creator", role: "Nirmata", year: "2023" },
    ],
    tv: [
      { title: "Breaking Bad", role: "Gus Fring", year: "2009-2011" },
      { title: "Better Call Saul", role: "Gus Fring", year: "2017-2022" },
      { title: "The Mandalorian", role: "Moff Gideon", year: "2019-2023" },
      { title: "The Boys", role: "Stan Edgar", year: "2020-2022" },
    ]
  },
  {
    id: 3,
    name: "Aaron Paul",
    born: "August 27, 1979",
    photo: "https://image.tmdb.org/t/p/w200/8Kd7J7FT0kJJkQznkwHNbq2FXBA.jpg",
    knownFor: [
      { title: "Breaking Bad", role: "Jesse Pinkman", year: "2008-2013", poster: "https://image.tmdb.org/t/p/w200/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
      { title: "El Camino", role: "Jesse Pinkman", year: "2019", poster: "https://image.tmdb.org/t/p/w200/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg" },
      { title: "Westworld", role: "Caleb Nichols", year: "2020-2022", poster: "https://image.tmdb.org/t/p/w200/8MfgyFHf7XEboZJPZXCIDqqiz6e.jpg" },
    ],
    movies: [
      { title: "Need for Speed", role: "Tobey Marshall", year: "2014" },
      { title: "El Camino", role: "Jesse Pinkman", year: "2019" },
      { title: "Exodus: Gods and Kings", role: "Joshua", year: "2014" },
    ],
    tv: [
      { title: "Breaking Bad", role: "Jesse Pinkman", year: "2008-2013" },
      { title: "Westworld", role: "Caleb Nichols", year: "2020-2022" },
      { title: "BoJack Horseman", role: "Todd Chavez (voice)", year: "2014-2020" },
      { title: "Black Mirror", role: "Player", year: "2023" },
    ]
  }
];

// === State ===
let currentActor = null;
let recentSearches = [];
let currentTab = 'movies';

// === DOM Elements ===
const screens = {
  home: document.getElementById('home-screen'),
  loading: document.getElementById('loading-screen'),
  result: document.getElementById('result-screen'),
  error: document.getElementById('error-screen')
};

const captureArea = document.getElementById('capture-area');
const fileInput = document.getElementById('file-input');
const demoBtn = document.getElementById('demo-btn');
const backBtn = document.getElementById('back-btn');
const retryBtn = document.getElementById('retry-btn');
const recentList = document.getElementById('recent-list');
const knownForList = document.getElementById('known-for-list');
const filmographyList = document.getElementById('filmography-list');
const tabs = document.querySelectorAll('.tab');

// === Screen Navigation ===
function showScreen(screenName) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove('active');
  });
  screens[screenName].classList.add('active');
}

// === Capture Handlers ===
captureArea.addEventListener('click', () => {
  fileInput.click();
});

captureArea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fileInput.click();
  }
});
captureArea.setAttribute('tabindex', '0');
captureArea.setAttribute('role', 'button');
captureArea.setAttribute('aria-label', 'Capture photo to identify actor');

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    simulateRecognition();
  }
});

// === Demo Button ===
demoBtn.addEventListener('click', () => {
  simulateRecognition();
});

// === Navigation Buttons ===
backBtn.addEventListener('click', () => {
  showScreen('home');
});

retryBtn.addEventListener('click', () => {
  showScreen('home');
});

// === Tabs ===
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentTab = tab.dataset.tab;
    renderFilmography();
  });
});

// === Recognition Simulation ===
function simulateRecognition() {
  showScreen('loading');
  
  // Simulate API delay
  const delay = 1500 + Math.random() * 1000;
  
  setTimeout(() => {
    // 90% success rate for demo
    if (Math.random() > 0.1) {
      // Pick a random actor
      currentActor = demoActors[Math.floor(Math.random() * demoActors.length)];
      addToRecent(currentActor);
      renderResult();
      showScreen('result');
    } else {
      showScreen('error');
    }
  }, delay);
}

// === Render Result ===
function renderResult() {
  if (!currentActor) return;
  
  document.getElementById('actor-photo').src = currentActor.photo;
  document.getElementById('actor-name').textContent = currentActor.name;
  document.getElementById('actor-born').textContent = `Born: ${currentActor.born}`;
  
  renderKnownFor();
  renderFilmography();
}

function renderKnownFor() {
  knownForList.innerHTML = currentActor.knownFor.map(item => `
    <div class="known-for-item">
      <img src="${item.poster}" alt="${item.title}" loading="lazy">
      <h4>${item.title}</h4>
      <p>${item.year}</p>
    </div>
  `).join('');
}

function renderFilmography() {
  const items = currentTab === 'movies' ? currentActor.movies : currentActor.tv;
  
  filmographyList.innerHTML = items.map(item => `
    <div class="filmography-item">
      <div>
        <h4>${item.title}</h4>
        <span class="role">as ${item.role}</span>
      </div>
      <span class="year">${item.year}</span>
    </div>
  `).join('');
}

// === Recent Searches ===
function addToRecent(actor) {
  // Remove if already exists
  recentSearches = recentSearches.filter(a => a.id !== actor.id);
  // Add to front
  recentSearches.unshift(actor);
  // Keep only last 5
  recentSearches = recentSearches.slice(0, 5);
  renderRecent();
}

function renderRecent() {
  if (recentSearches.length === 0) {
    recentList.innerHTML = `
      <div class="empty-state">
        <span>🎭</span>
        <p>Your identified actors will appear here</p>
      </div>
    `;
    return;
  }
  
  recentList.innerHTML = recentSearches.map(actor => `
    <div class="recent-item" data-id="${actor.id}">
      <img src="${actor.photo}" alt="${actor.name}">
      <div class="recent-item-info">
        <h3>${actor.name}</h3>
        <p>${actor.knownFor[0]?.title || ''}</p>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  recentList.querySelectorAll('.recent-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = parseInt(item.dataset.id);
      currentActor = demoActors.find(a => a.id === id);
      if (currentActor) {
        renderResult();
        showScreen('result');
      }
    });
  });
}

// === Init ===
function init() {
  renderRecent();
  
  // Preload actor images
  demoActors.forEach(actor => {
    const img = new Image();
    img.src = actor.photo;
    actor.knownFor.forEach(item => {
      const poster = new Image();
      poster.src = item.poster;
    });
  });
}

init();

// === PWA-like behavior ===
// Prevent pull-to-refresh on mobile
document.body.addEventListener('touchmove', (e) => {
  if (document.scrollingElement.scrollTop === 0) {
    e.preventDefault();
  }
}, { passive: false });

console.log('🎬 WhosThat loaded - Tap to identify actors!');
