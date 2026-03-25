// === SizeSync App ===

// Brand sizing data (simulated community data)
const BRAND_DATA = {
  nike:          { name: 'Nike',          fit: 'true',  offset: 0,  reports: 14201, pct: 78 },
  zara:          { name: 'Zara',          fit: 'small', offset: -1, reports: 11893, pct: 35 },
  uniqlo:        { name: 'Uniqlo',        fit: 'large', offset: 1,  reports: 9847,  pct: 65 },
  hm:            { name: 'H&M',           fit: 'true',  offset: 0,  reports: 12034, pct: 72 },
  gap:           { name: 'Gap',           fit: 'large', offset: 1,  reports: 8721,  pct: 58 },
  levis:         { name: "Levi's",        fit: 'true',  offset: 0,  reports: 10432, pct: 80 },
  adidas:        { name: 'Adidas',        fit: 'true',  offset: 0,  reports: 13102, pct: 76 },
  'ralph-lauren':{ name: 'Ralph Lauren',  fit: 'large', offset: 1,  reports: 6203,  pct: 55 },
  'hugo-boss':   { name: 'Hugo Boss',     fit: 'small', offset: -1, reports: 4891,  pct: 40 },
  asos:          { name: 'ASOS',          fit: 'true',  offset: 0,  reports: 9102,  pct: 74 },
};

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const SAMPLE_HISTORY = [
  { brand: 'Nike', item: 'Dri-FIT Running Tee', size: 'M', rating: '😍' },
  { brand: 'Zara', item: 'Slim Fit Oxford Shirt', size: 'S', rating: '😐' },
  { brand: 'Uniqlo', item: 'Airism Cotton Tee', size: 'L', rating: '😍' },
  { brand: "Levi's", item: '511 Slim Fit Jeans', size: 'M (32x32)', rating: '😍' },
  { brand: 'H&M', item: 'Regular Fit Hoodie', size: 'M', rating: '😐' },
];

const TWIN_BRANDS = [
  { name: 'Patagonia', score: '92%', detail: 'M fits perfectly' },
  { name: 'Everlane', score: '89%', detail: 'M, slim cut' },
  { name: 'J.Crew', score: '87%', detail: 'M regular' },
  { name: 'Bonobos', score: '85%', detail: 'M athletic' },
  { name: 'Allbirds', score: '83%', detail: 'Size 10 shoes' },
  { name: 'Carhartt WIP', score: '81%', detail: 'M, runs large' },
];

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  renderBrands();
  renderHistory();
  renderTwins();
  setupTranslator();
  setupFitButtons();
  setupRatingButtons();
  setupLogPurchase();
  setupProfileSave();
});

// === Translator ===
function setupTranslator() {
  document.getElementById('translate-btn').addEventListener('click', translateSize);
}

function translateSize() {
  const sourceBrand = document.getElementById('source-brand').value;
  const sourceSize = document.getElementById('source-size').value;

  if (!sourceBrand || !sourceSize) {
    showToast('Please select a brand and size');
    return;
  }

  const sourceData = BRAND_DATA[sourceBrand];
  const sourceSizeIdx = SIZES.indexOf(sourceSize.toUpperCase());
  if (sourceSizeIdx === -1) return;

  // Calculate "true" size index (normalize based on source brand offset)
  const trueIdx = sourceSizeIdx - sourceData.offset;

  const resultsGrid = document.getElementById('results-grid');
  resultsGrid.innerHTML = '';

  Object.entries(BRAND_DATA).forEach(([key, brand]) => {
    if (key === sourceBrand) return;

    const targetIdx = Math.max(0, Math.min(SIZES.length - 1, trueIdx + brand.offset));
    const targetSize = SIZES[targetIdx];

    const confidence = 75 + Math.floor(Math.random() * 20);
    const fitLabel = brand.fit === 'true' ? 'True to size' :
                     brand.fit === 'small' ? 'Runs small' : 'Runs large';
    const fitClass = brand.fit === 'true' ? 'fit-true' :
                     brand.fit === 'small' ? 'fit-small' : 'fit-large';

    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <div class="result-brand">${brand.name}</div>
      <div class="result-size">${targetSize}</div>
      <div class="result-confidence">${confidence}% confidence</div>
      <div class="result-fit ${fitClass}">${fitLabel}</div>
    `;
    resultsGrid.appendChild(card);
  });

  const totalPoints = Object.values(BRAND_DATA).reduce((s, b) => s + b.reports, 0);
  document.getElementById('data-points').textContent = totalPoints.toLocaleString();
  document.getElementById('results').classList.remove('hidden');

  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// === Brands ===
function renderBrands() {
  const grid = document.getElementById('brand-grid');
  Object.entries(BRAND_DATA).forEach(([key, brand]) => {
    const fitColor = brand.fit === 'true' ? 'var(--success)' :
                     brand.fit === 'small' ? 'var(--danger)' : '#0984E3';
    const fitText = brand.fit === 'true' ? '✅ True to size' :
                    brand.fit === 'small' ? '⚠️ Runs small — size up' : '⚠️ Runs large — size down';

    const card = document.createElement('div');
    card.className = 'brand-card';
    card.innerHTML = `
      <div class="brand-card-header">
        <span class="brand-name">${brand.name}</span>
        <span class="brand-reports">${brand.reports.toLocaleString()} reports</span>
      </div>
      <div class="brand-fit-bar">
        <div class="brand-fit-fill" style="width: ${brand.pct}%; background: ${fitColor}"></div>
      </div>
      <div class="brand-verdict" style="color: ${fitColor}">${fitText}</div>
    `;
    grid.appendChild(card);
  });
}

// === History ===
function renderHistory() {
  const list = document.getElementById('history-list');
  SAMPLE_HISTORY.forEach(item => {
    const el = document.createElement('div');
    el.className = 'history-item';
    el.innerHTML = `
      <span class="history-brand">${item.brand}</span>
      <span class="history-name">${item.item}</span>
      <span class="history-size">${item.size}</span>
      <span class="history-rating">${item.rating}</span>
    `;
    list.appendChild(el);
  });
}

// === Twins ===
function renderTwins() {
  const container = document.getElementById('twins-brands');
  TWIN_BRANDS.forEach(brand => {
    const el = document.createElement('div');
    el.className = 'twin-brand';
    el.innerHTML = `
      <span class="twin-score">${brand.score}</span>
      <div>
        <div class="twin-name">${brand.name}</div>
        <div class="twin-detail">${brand.detail}</div>
      </div>
    `;
    container.appendChild(el);
  });
}

// === Fit Preference Buttons ===
function setupFitButtons() {
  document.querySelectorAll('.fit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fit-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// === Rating Buttons ===
function setupRatingButtons() {
  document.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// === Log Purchase ===
function setupLogPurchase() {
  document.getElementById('log-purchase').addEventListener('click', () => {
    const brand = document.getElementById('log-brand').value;
    const item = document.getElementById('log-item').value;
    const size = document.getElementById('log-size').value;
    const rating = document.querySelector('.rating-btn.active');

    if (!brand || !item || !size) {
      showToast('Please fill in all fields');
      return;
    }

    const ratingMap = {
      'too-small': '😤',
      'slightly-small': '😐',
      'perfect': '😍',
      'slightly-large': '😐',
      'too-large': '😤'
    };

    const ratingEmoji = rating ? ratingMap[rating.dataset.rating] : '😍';
    const brandName = BRAND_DATA[brand]?.name || brand;

    const list = document.getElementById('history-list');
    const el = document.createElement('div');
    el.className = 'history-item';
    el.style.animation = 'fadeIn 0.4s ease';
    el.innerHTML = `
      <span class="history-brand">${brandName}</span>
      <span class="history-name">${item}</span>
      <span class="history-size">${size.toUpperCase()}</span>
      <span class="history-rating">${ratingEmoji}</span>
    `;
    list.prepend(el);

    // Clear form
    document.getElementById('log-item').value = '';
    showToast(`Logged: ${brandName} ${item} (${size.toUpperCase()}) — thanks for contributing! 🎉`);
  });
}

// === Profile Save ===
function setupProfileSave() {
  document.getElementById('save-profile').addEventListener('click', () => {
    const chest = document.getElementById('chest').value;
    const waist = document.getElementById('waist').value;

    if (!chest && !waist) {
      showToast('Enter at least chest and waist measurements');
      return;
    }

    showToast('Profile saved! Your size recommendations are now personalized 📏');
  });
}

// === Toast ===
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
