// ShrinkCheck — Shrinkflation Scanner
// Prototype interactive demo

document.addEventListener('DOMContentLoaded', () => {
  const scanBtn = document.getElementById('scanBtn');
  const searchBtn = document.getElementById('searchBtn');
  const scannerSection = document.getElementById('scannerSection');
  const productResult = document.getElementById('productResult');
  const feedSection = document.getElementById('feedSection');
  const trendsSection = document.getElementById('trendsSection');
  const savingsSection = document.getElementById('savingsSection');
  const addWatchBtn = document.getElementById('addWatchBtn');
  const navBtns = document.querySelectorAll('.nav-btn');

  // Demo products database
  const demoProducts = [
    {
      emoji: '🧃',
      name: 'Tropicana Orange Juice',
      brand: 'Tropicana',
      upc: '048500202807',
      shrinkPct: -18,
      grade: 'D',
      history: [
        { year: '2020', size: '64oz', height: 100 },
        { year: '2021', size: '64oz', height: 100 },
        { year: '2022', size: '56oz', height: 87, shrunk: true },
        { year: '2023', size: '56oz', height: 87, shrunk: true },
        { year: '2024', size: '52oz', height: 81, shrunk: true },
        { year: 'Now', size: '52oz', height: 81, shrunk: true, current: true },
      ],
      alert: 'This product went from 64oz to 52oz while the price stayed at $4.29. You\'re paying <strong>23% more per ounce</strong>.',
      unitBefore: { label: 'Before (2020)', value: '$0.067/oz', detail: '$4.29 ÷ 64oz' },
      unitAfter: { label: 'Now (2026)', value: '$0.082/oz', detail: '$4.29 ÷ 52oz' },
      hiddenIncrease: '+23%',
      brandStats: { tracked: 23, shrunk: '14 (61%)', avgReduction: '-12%', lastEvent: 'Jan 2026' },
    },
    {
      emoji: '🍪',
      name: 'Oreo Family Size',
      brand: 'Nabisco',
      upc: '044000032155',
      shrinkPct: -25,
      grade: 'F',
      history: [
        { year: '2019', size: '19.1oz', height: 100 },
        { year: '2020', size: '19.1oz', height: 100 },
        { year: '2022', size: '18.2oz', height: 95, shrunk: true },
        { year: '2024', size: '15.3oz', height: 80, shrunk: true },
        { year: '2025', size: '14.3oz', height: 75, shrunk: true },
        { year: 'Now', size: '14.3oz', height: 75, shrunk: true, current: true },
      ],
      alert: 'This product went from 19.1oz to 14.3oz while staying at $5.99. That\'s <strong>25% fewer cookies</strong> for the same money.',
      unitBefore: { label: 'Before (2019)', value: '$0.31/oz', detail: '$5.99 ÷ 19.1oz' },
      unitAfter: { label: 'Now (2026)', value: '$0.42/oz', detail: '$5.99 ÷ 14.3oz' },
      hiddenIncrease: '+35%',
      brandStats: { tracked: 41, shrunk: '28 (68%)', avgReduction: '-16%', lastEvent: 'Feb 2026' },
    },
    {
      emoji: '🥣',
      name: 'General Mills Cheerios',
      brand: 'General Mills',
      upc: '016000275263',
      shrinkPct: -10,
      grade: 'C',
      history: [
        { year: '2020', size: '18oz', height: 100 },
        { year: '2021', size: '18oz', height: 100 },
        { year: '2023', size: '17oz', height: 94, shrunk: true },
        { year: '2024', size: '16.3oz', height: 90, shrunk: true },
        { year: '2025', size: '16.3oz', height: 90, shrunk: true },
        { year: 'Now', size: '16.3oz', height: 90, shrunk: true, current: true },
      ],
      alert: 'Box went from 18oz to 16.3oz. Price unchanged at $4.99. <strong>10% less cereal</strong> per box.',
      unitBefore: { label: 'Before (2020)', value: '$0.28/oz', detail: '$4.99 ÷ 18oz' },
      unitAfter: { label: 'Now (2026)', value: '$0.31/oz', detail: '$4.99 ÷ 16.3oz' },
      hiddenIncrease: '+11%',
      brandStats: { tracked: 35, shrunk: '15 (43%)', avgReduction: '-8%', lastEvent: 'Mar 2025' },
    },
  ];

  let currentProductIdx = 0;

  // Simulate barcode scan
  function simulateScan() {
    scanBtn.innerHTML = '<span class="spinner"></span> Scanning...';
    scanBtn.disabled = true;

    setTimeout(() => {
      currentProductIdx = (currentProductIdx + 1) % demoProducts.length;
      const product = demoProducts[currentProductIdx];
      updateProductDisplay(product);

      productResult.classList.remove('hidden');
      productResult.classList.add('fade-in');
      scanBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7" y1="8" x2="7" y2="16"/><line x1="10" y1="6" x2="10" y2="18"/><line x1="13" y1="9" x2="13" y2="15"/><line x1="16" y1="7" x2="16" y2="17"/></svg> Scan Another`;
      scanBtn.disabled = false;

      // Scroll to result
      productResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
  }

  function updateProductDisplay(p) {
    document.getElementById('productImage').textContent = p.emoji;
    document.getElementById('productName').textContent = p.name;
    document.getElementById('productBrand').textContent = p.brand;
    document.getElementById('productUPC').textContent = `UPC: ${p.upc}`;
    document.getElementById('shrinkPct').textContent = `${p.shrinkPct}%`;
    document.getElementById('alertDetail').innerHTML = p.alert;

    // Update chart
    const chartBars = document.querySelector('.chart-bars');
    chartBars.innerHTML = p.history.map(h => `
      <div class="chart-bar-group">
        <div class="chart-bar ${h.shrunk ? 'shrunk' : ''} ${h.current ? 'current' : ''}" style="height: ${h.height}%;">
          <span class="bar-label">${h.size}</span>
        </div>
        <span class="bar-year">${h.year}</span>
      </div>
    `).join('');

    // Update unit price
    document.querySelector('.unit-card.before .unit-label').textContent = p.unitBefore.label;
    document.querySelector('.unit-card.before .unit-value').textContent = p.unitBefore.value;
    document.querySelector('.unit-card.before .unit-detail').textContent = p.unitBefore.detail;
    document.querySelector('.unit-card.after .unit-label').textContent = p.unitAfter.label;
    document.querySelector('.unit-card.after .unit-value').textContent = p.unitAfter.value;
    document.querySelector('.unit-card.after .unit-detail').textContent = p.unitAfter.detail;
    document.querySelector('.unit-card.increase .unit-value').textContent = p.hiddenIncrease;

    // Update brand grade
    const gradeLetter = document.querySelector('.grade-letter');
    gradeLetter.textContent = p.grade;
    gradeLetter.className = `grade-letter ${p.grade}`;

    // Update brand stats
    const statRows = document.querySelectorAll('.brand-stats .stat-row span:last-child');
    statRows[0].textContent = p.brandStats.tracked;
    statRows[1].textContent = p.brandStats.shrunk;
    statRows[2].textContent = p.brandStats.avgReduction;
    statRows[3].textContent = p.brandStats.lastEvent;
  }

  // Tab navigation
  const sections = {
    scan: [scannerSection, productResult],
    feed: [feedSection],
    trends: [trendsSection],
    savings: [savingsSection],
  };

  function switchTab(tab) {
    // Hide all
    [scannerSection, productResult, feedSection, trendsSection, savingsSection].forEach(s => {
      s.classList.add('hidden');
    });

    // Show selected
    if (tab === 'scan') {
      scannerSection.classList.remove('hidden');
      if (!productResult.querySelector('.product-card').classList?.contains('never-shown')) {
        // Show product result if it's been shown before
        if (productResult.dataset.shown === 'true') {
          productResult.classList.remove('hidden');
        }
      }
    } else {
      sections[tab]?.forEach(s => s.classList.remove('hidden'));
    }

    // Update active nav
    navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
  }

  // Event listeners
  scanBtn.addEventListener('click', () => {
    simulateScan();
    productResult.dataset.shown = 'true';
  });

  searchBtn.addEventListener('click', () => {
    simulateScan();
    productResult.dataset.shown = 'true';
  });

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  addWatchBtn.addEventListener('click', () => {
    if (addWatchBtn.dataset.added) return;
    addWatchBtn.innerHTML = '✅ Added to Watch List';
    addWatchBtn.style.background = 'var(--good-bg)';
    addWatchBtn.style.borderColor = 'var(--good)';
    addWatchBtn.style.color = 'var(--good)';
    addWatchBtn.dataset.added = 'true';

    // Update badge count
    const badge = document.querySelector('.badge');
    badge.textContent = parseInt(badge.textContent) + 1;
  });

  // Feed like interactions
  document.querySelectorAll('.feed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent.includes('👍')) {
        const count = parseInt(btn.textContent.match(/\d+/)?.[0] || 0);
        btn.textContent = `👍 ${count + 1}`;
        btn.style.color = 'var(--accent)';
      }
    });
  });

  // Initialize: show scan tab
  switchTab('scan');

  // Show feed and trends by default under scanner
  feedSection.classList.remove('hidden');
  trendsSection.classList.remove('hidden');
});
