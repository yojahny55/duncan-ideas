// TariffTag — Demo Data & Interactivity
const PRODUCTS = {
  'samsung-tv': {
    emoji: '📺',
    name: 'Samsung 55" QLED 4K Smart TV',
    category: 'Electronics',
    country: 'South Korea',
    flag: '🇰🇷',
    basePrice: 680,
    tariffRate: 0.15,
    tariffType: 'Section 122 Universal',
    expiry: '~July 2026',
    grade: 'C',
    alternatives: [
      { emoji: '📺', name: 'TCL 55" Roku TV (Assembled in Mexico)', meta: 'Mexico 🇲🇽 · USMCA exempt', savings: 'Save ~$95' },
      { emoji: '📺', name: 'Vizio 55" M-Series (Assembled in USA)', meta: 'USA 🇺🇸 · No tariff', savings: 'Save ~$120' },
      { emoji: '📺', name: 'Hisense 55" U6 (Refurbished)', meta: 'China 🇨🇳 · Refurb = lower base', savings: 'Save ~$180' }
    ]
  },
  'nike-shoes': {
    emoji: '👟',
    name: 'Nike Air Max 90',
    category: 'Footwear',
    country: 'Vietnam',
    flag: '🇻🇳',
    basePrice: 112,
    tariffRate: 0.20,
    tariffType: 'Section 122 + Section 301',
    expiry: 'Ongoing',
    grade: 'D',
    alternatives: [
      { emoji: '👟', name: 'New Balance 990v6 (Made in USA)', meta: 'USA 🇺🇸 · No tariff', savings: 'Tariff-free' },
      { emoji: '👟', name: 'Brooks Ghost 16 (Made in USA)', meta: 'USA 🇺🇸 · No tariff', savings: 'Tariff-free' },
      { emoji: '👟', name: 'Allbirds Tree Runner', meta: 'South Korea 🇰🇷 · 10% tariff', savings: 'Save ~$12' }
    ]
  },
  'cast-iron-pan': {
    emoji: '🍳',
    name: 'Lodge 12" Cast Iron Skillet',
    category: 'Cookware',
    country: 'United States',
    flag: '🇺🇸',
    basePrice: 32,
    tariffRate: 0,
    tariffType: 'None — Made in USA',
    expiry: 'N/A',
    grade: 'A',
    alternatives: [
      { emoji: '🍳', name: 'Already tariff-free! 🎉', meta: 'Made in South Pittsburg, Tennessee since 1896', savings: '$0 tariff' }
    ]
  },
  'olive-oil': {
    emoji: '🫒',
    name: 'Bertolli Extra Virgin Olive Oil (1L)',
    category: 'Food & Beverage',
    country: 'Italy',
    flag: '🇮🇹',
    basePrice: 9.50,
    tariffRate: 0.25,
    tariffType: 'Section 122 + EU Retaliatory',
    expiry: '~July 2026 (Sec 122)',
    grade: 'D',
    alternatives: [
      { emoji: '🫒', name: 'California Olive Ranch EVOO', meta: 'USA 🇺🇸 · No tariff', savings: 'Tariff-free' },
      { emoji: '🫒', name: 'Pompeian EVOO (Spain/Tunisia blend)', meta: 'Multi-origin · ~10% tariff', savings: 'Save ~$1.40' },
      { emoji: '🫒', name: 'Kirkland Organic EVOO (Costco)', meta: 'Multi-origin 🌍 · Bulk savings', savings: 'Save ~$2.50/L' }
    ]
  },
  'lego-set': {
    emoji: '🧱',
    name: 'LEGO Technic Porsche 911 GT3',
    category: 'Toys & Games',
    country: 'Denmark',
    flag: '🇩🇰',
    basePrice: 130,
    tariffRate: 0.10,
    tariffType: 'Section 122 Universal',
    expiry: '~July 2026',
    grade: 'C',
    alternatives: [
      { emoji: '🧱', name: 'Mega Construx (Made in Canada)', meta: 'Canada 🇨🇦 · USMCA exempt', savings: 'Save ~$13' },
      { emoji: '🧱', name: 'LEGO (Buy before June 4 rate hike)', meta: 'Same product, lower tariff now', savings: 'Save ~$6' },
      { emoji: '🧱', name: 'Used/Pre-owned LEGO Sets', meta: 'BrickLink 🌐 · No import tariff', savings: 'Save 30-50%' }
    ]
  },
  'wine-bottle': {
    emoji: '🍷',
    name: 'Château Margaux 2018 Bordeaux',
    category: 'Wine & Spirits',
    country: 'France',
    flag: '🇫🇷',
    basePrice: 380,
    tariffRate: 0.25,
    tariffType: 'Section 122 + EU Counter-tariff',
    expiry: '~July 2026 (Sec 122)',
    grade: 'F',
    alternatives: [
      { emoji: '🍷', name: 'Opus One 2019 (Napa Valley)', meta: 'USA 🇺🇸 · No tariff', savings: 'Tariff-free' },
      { emoji: '🍷', name: 'Argentine Malbec (Catena Zapata)', meta: 'Argentina 🇦🇷 · 10% tariff', savings: 'Save ~$57' },
      { emoji: '🍷', name: 'Penfolds Grange (Australia)', meta: 'Australia 🇦🇺 · FTA rate 0%', savings: 'Tariff-free' }
    ]
  }
};

// State
let scannedItems = [];
let monthlyTariffTotal = 0;

// DOM Elements
const scanSection = document.getElementById('scanSection');
const resultSection = document.getElementById('resultSection');
const categoriesSection = document.getElementById('categoriesSection');
const btnScan = document.getElementById('btnScan');
const btnBack = document.getElementById('btnBack');

// Scan simulation
btnScan.addEventListener('click', () => {
  const scanArea = document.getElementById('scanArea');
  scanArea.classList.add('scanning');
  btnScan.textContent = 'Scanning...';
  btnScan.disabled = true;

  setTimeout(() => {
    scanArea.classList.remove('scanning');
    btnScan.textContent = 'Tap to Scan';
    btnScan.disabled = false;
    // Show random product
    const keys = Object.keys(PRODUCTS);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    showProduct(randomKey);
  }, 1500);
});

// Demo product chips
document.querySelectorAll('.demo-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const productKey = chip.dataset.product;
    showProduct(productKey);
  });
});

// Back button
btnBack.addEventListener('click', () => {
  resultSection.classList.add('hidden');
  scanSection.style.display = '';
  categoriesSection.style.display = '';
});

function showProduct(key) {
  const product = PRODUCTS[key];
  if (!product) return;

  const tariffAmount = Math.round(product.basePrice * product.tariffRate * 100) / 100;
  const totalPrice = product.basePrice + tariffAmount;

  // Update product card
  document.getElementById('productEmoji').textContent = product.emoji;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productMeta').textContent = `${product.category} · ${product.country} ${product.flag}`;

  // Grade
  const gradeEl = document.getElementById('tariffGrade');
  gradeEl.textContent = product.grade;
  gradeEl.className = 'tariff-grade grade-' + product.grade.toLowerCase();

  // Prices
  document.getElementById('basePriceVal').textContent = '$' + product.basePrice.toFixed(2);
  document.getElementById('tariffPriceVal').textContent = tariffAmount > 0 ? '+$' + tariffAmount.toFixed(2) : '$0.00';
  document.getElementById('totalPriceVal').textContent = '$' + totalPrice.toFixed(2);

  // Adjust price bar widths
  const baseWidth = product.basePrice / totalPrice * 100;
  const tariffWidth = 100 - baseWidth;
  document.getElementById('priceBase').style.flex = baseWidth;
  document.getElementById('priceTariff').style.flex = Math.max(tariffWidth, 10);

  if (tariffAmount === 0) {
    document.getElementById('priceTariff').style.background = 'var(--green-bg)';
    document.getElementById('tariffPriceVal').style.color = 'var(--green)';
    document.getElementById('tariffPriceVal').textContent = '$0 ✓';
  } else {
    document.getElementById('priceTariff').style.background = '';
    document.getElementById('tariffPriceVal').style.color = '';
  }

  // Details
  document.getElementById('tariffRate').textContent = (product.tariffRate * 100).toFixed(0) + '%';
  document.getElementById('tariffType').textContent = product.tariffType;
  document.getElementById('countryOrigin').textContent = product.country + ' ' + product.flag;
  document.getElementById('tariffExpiry').textContent = product.expiry;

  // Alternatives
  const altList = document.getElementById('alternativesList');
  altList.innerHTML = product.alternatives.map(alt => `
    <div class="alt-card">
      <span class="alt-emoji">${alt.emoji}</span>
      <div class="alt-info">
        <div class="alt-name">${alt.name}</div>
        <div class="alt-meta">${alt.meta}</div>
      </div>
      <span class="alt-savings">${alt.savings}</span>
    </div>
  `).join('');

  // Track scanned items
  if (tariffAmount > 0) {
    scannedItems.push({ name: product.name, emoji: product.emoji, tariff: tariffAmount });
    monthlyTariffTotal += tariffAmount;
  }
  updateTariffTax();

  // Show result, hide scan/categories
  scanSection.style.display = 'none';
  categoriesSection.style.display = 'none';
  resultSection.classList.remove('hidden');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTariffTax() {
  document.getElementById('taxAmount').textContent = '$' + monthlyTariffTotal.toFixed(2);
  document.getElementById('monthlyTotal').textContent = '$' + monthlyTariffTotal.toFixed(2) + ' this month';

  // Bar (max at $125)
  const pct = Math.min((monthlyTariffTotal / 125) * 100, 100);
  document.getElementById('taxBar').style.width = pct + '%';

  // Items list
  const taxItemsEl = document.getElementById('taxItems');
  taxItemsEl.innerHTML = scannedItems.map(item => `
    <div class="tax-item">
      <span class="tax-item-name">${item.emoji} ${item.name}</span>
      <span class="tax-item-amount">+$${item.tariff.toFixed(2)}</span>
    </div>
  `).join('');
}

// Category cards (show a tooltip-like message)
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.cat;
    const messages = {
      electronics: 'Electronics from China face 10-25% tariffs. TVs, phones, laptops, and accessories are all affected.',
      clothing: 'Apparel tariffs range 15-32%. Vietnam, Bangladesh, and China are the biggest sources. Look for US-made brands.',
      food: 'Food tariffs vary wildly: 0% for USMCA (Mexico/Canada) to 25% for EU products. Check country of origin!',
      home: 'Kitchen goods, furniture, and home decor from China face 10-25% tariffs. Cast iron from Lodge (USA) = 0%.',
      auto: 'Auto parts face the steepest tariffs: 25-50%. Section 232 steel/aluminum tariffs increase June 4, 2026.',
      toys: 'Most toys are made in China (10-15% tariff). LEGO from Denmark faces Section 122 rates. Buy before June!'
    };
    alert(messages[cat] || 'Category details coming soon!');
  });
});

// Nav items (demo only)
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    if (item.dataset.tab === 'scan') {
      resultSection.classList.add('hidden');
      scanSection.style.display = '';
      categoriesSection.style.display = '';
    }
  });
});
