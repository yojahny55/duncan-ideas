// CostPerUse — App Logic
(function() {
  'use strict';

  const CATEGORY_EMOJI = {
    clothing: '👕', kitchen: '🍳', tech: '💻',
    fitness: '💪', tools: '🔧', hobby: '🎨', furniture: '🛋️'
  };

  const SAMPLE_ITEMS = [
    { id: 1, name: 'KitchenAid Stand Mixer', price: 349.99, category: 'kitchen', uses: 127, target: 1.00, date: '2024-12-15' },
    { id: 2, name: 'Nike Running Shoes', price: 129.99, category: 'fitness', uses: 245, target: 0.50, date: '2025-03-01' },
    { id: 3, name: 'DJI Mini 3 Drone', price: 759.00, category: 'tech', uses: 4, target: 10.00, date: '2025-08-20' },
    { id: 4, name: 'Cast Iron Skillet', price: 34.99, category: 'kitchen', uses: 412, target: 0.10, date: '2023-06-10' },
    { id: 5, name: 'Leather Jacket', price: 285.00, category: 'clothing', uses: 89, target: 2.00, date: '2024-09-05' },
    { id: 6, name: 'Peloton Bike', price: 1445.00, category: 'fitness', uses: 312, target: 3.00, date: '2024-01-02' },
    { id: 7, name: 'Dewalt Drill Set', price: 189.00, category: 'tools', uses: 47, target: 2.00, date: '2025-02-14' },
    { id: 8, name: 'Wacom Drawing Tablet', price: 379.95, category: 'hobby', uses: 8, target: 5.00, date: '2025-11-01' },
    { id: 9, name: 'Herman Miller Chair', price: 1395.00, category: 'furniture', uses: 520, target: 1.00, date: '2023-08-15' },
    { id: 10, name: 'Instant Pot', price: 89.99, category: 'kitchen', uses: 156, target: 0.50, date: '2024-04-20' },
    { id: 11, name: 'Bose QC Headphones', price: 349.00, category: 'tech', uses: 380, target: 0.50, date: '2024-02-28' },
    { id: 12, name: 'Bread Machine', price: 149.99, category: 'kitchen', uses: 3, target: 2.00, date: '2025-12-25' },
  ];

  let items = [];
  let selectedItem = null;
  let nextId = 100;

  // DOM
  const $ = id => document.getElementById(id);
  const totalItemsEl = $('totalItems');
  const totalSpentEl = $('totalSpent');
  const avgCpuEl = $('avgCpu');
  const itemsListEl = $('itemsList');
  const emptyStateEl = $('emptyState');
  const addModal = $('addModal');
  const detailModal = $('detailModal');

  // Init
  function init() {
    items = loadItems();
    if (!items.length) {
      items = SAMPLE_ITEMS.map(i => ({ ...i }));
      saveItems();
    }
    nextId = Math.max(...items.map(i => i.id), 99) + 1;
    renderAll();
    bindEvents();
  }

  function loadItems() {
    try {
      const d = localStorage.getItem('costperuse_items');
      return d ? JSON.parse(d) : [];
    } catch { return []; }
  }

  function saveItems() {
    localStorage.setItem('costperuse_items', JSON.stringify(items));
  }

  // CPU Calculation
  function getCpu(item) {
    return item.uses > 0 ? item.price / item.uses : item.price;
  }

  function getCpuClass(cpu) {
    if (cpu <= 1) return 'great';
    if (cpu <= 10) return 'fair';
    return 'bad';
  }

  function formatCurrency(n) {
    if (n >= 1000) return '$' + n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (n >= 100) return '$' + n.toFixed(0);
    if (n >= 10) return '$' + n.toFixed(1);
    return '$' + n.toFixed(2);
  }

  // Render
  function renderAll() {
    renderSummary();
    renderItems();
    renderInsights();
  }

  function renderSummary() {
    totalItemsEl.textContent = items.length;
    const spent = items.reduce((s, i) => s + i.price, 0);
    totalSpentEl.textContent = formatCurrency(spent);
    const totalUses = items.reduce((s, i) => s + i.uses, 0);
    if (totalUses > 0) {
      avgCpuEl.textContent = formatCurrency(spent / totalUses);
    } else {
      avgCpuEl.textContent = '—';
    }
  }

  function renderItems() {
    const filter = $('categoryFilter').value;
    const sort = $('sortBy').value;

    let filtered = filter === 'all' ? [...items] : items.filter(i => i.category === filter);

    filtered.sort((a, b) => {
      switch (sort) {
        case 'cpu-high': return getCpu(b) - getCpu(a);
        case 'cpu-low': return getCpu(a) - getCpu(b);
        case 'recent': return (b.id || 0) - (a.id || 0);
        case 'most-used': return b.uses - a.uses;
        default: return 0;
      }
    });

    if (!filtered.length) {
      itemsListEl.innerHTML = '';
      emptyStateEl.classList.add('visible');
      return;
    }

    emptyStateEl.classList.remove('visible');
    itemsListEl.innerHTML = filtered.map(item => {
      const cpu = getCpu(item);
      const cls = item.uses === 0 ? 'unused' : getCpuClass(cpu);
      const emoji = CATEGORY_EMOJI[item.category] || '📦';
      return `
        <div class="item-card" data-id="${item.id}">
          <div class="item-emoji bg-${cls}">${emoji}</div>
          <div class="item-info">
            <div class="item-name">${esc(item.name)}</div>
            <div class="item-meta">${formatCurrency(item.price)} · ${item.uses} uses</div>
          </div>
          <div class="item-cpu">
            <div class="item-cpu-value cpu-${cls}">${item.uses === 0 ? '∞' : formatCurrency(cpu)}</div>
            <div class="item-cpu-label">per use</div>
          </div>
          <button class="item-quick-use" data-id="${item.id}" title="Log a use">+1</button>
        </div>
      `;
    }).join('');
  }

  function renderInsights() {
    const used = items.filter(i => i.uses > 0);
    const sorted = [...used].sort((a, b) => getCpu(a) - getCpu(b));

    // Hall of Fame (top 5 lowest CPU)
    const fame = sorted.slice(0, 5);
    const fameEl = $('hallOfFame');
    if (!fame.length) {
      fameEl.innerHTML = '<div class="insight-empty">Use some items first!</div>';
    } else {
      fameEl.innerHTML = fame.map((item, i) => {
        const cpu = getCpu(item);
        return `
          <div class="insight-item">
            <div class="insight-rank">${i + 1}</div>
            <div class="insight-info">
              <div class="insight-name">${esc(item.name)}</div>
              <div class="insight-detail">${item.uses} uses · ${formatCurrency(item.price)}</div>
            </div>
            <div class="insight-cpu cpu-great">${formatCurrency(cpu)}</div>
          </div>
        `;
      }).join('');
    }

    // Wall of Shame (top 5 highest CPU, min 1 use)
    const shame = sorted.reverse().slice(0, 5);
    const shameEl = $('wallOfShame');
    if (!shame.length) {
      shameEl.innerHTML = '<div class="insight-empty">No data yet</div>';
    } else {
      shameEl.innerHTML = shame.map((item, i) => {
        const cpu = getCpu(item);
        return `
          <div class="insight-item">
            <div class="insight-rank" style="background:${i === 0 ? 'var(--red-soft)' : ''};color:${i === 0 ? 'var(--red)' : ''}">${i + 1}</div>
            <div class="insight-info">
              <div class="insight-name">${esc(item.name)}</div>
              <div class="insight-detail">${item.uses} uses · ${formatCurrency(item.price)}</div>
            </div>
            <div class="insight-cpu cpu-bad">${formatCurrency(cpu)}</div>
          </div>
        `;
      }).join('');
    }

    // Category breakdown
    const cats = {};
    items.forEach(item => {
      if (!cats[item.category]) cats[item.category] = { spent: 0, uses: 0, count: 0 };
      cats[item.category].spent += item.price;
      cats[item.category].uses += item.uses;
      cats[item.category].count++;
    });

    const catEntries = Object.entries(cats).sort((a, b) => {
      const cpuA = a[1].uses > 0 ? a[1].spent / a[1].uses : Infinity;
      const cpuB = b[1].uses > 0 ? b[1].spent / b[1].uses : Infinity;
      return cpuA - cpuB;
    });

    const maxSpent = Math.max(...catEntries.map(([, v]) => v.spent));
    const breakdownEl = $('categoryBreakdown');
    breakdownEl.innerHTML = catEntries.map(([cat, data]) => {
      const cpu = data.uses > 0 ? data.spent / data.uses : Infinity;
      const cls = cpu === Infinity ? 'unused' : getCpuClass(cpu);
      const pct = (data.spent / maxSpent * 100).toFixed(0);
      const colors = { great: 'var(--green)', fair: 'var(--yellow)', bad: 'var(--red)', unused: 'var(--text-dim)' };
      return `
        <div class="cat-bar-row">
          <div class="cat-bar-label">${CATEGORY_EMOJI[cat] || ''} ${cat}</div>
          <div class="cat-bar-track">
            <div class="cat-bar-fill" style="width:${pct}%;background:${colors[cls]}">${cpu === Infinity ? '—' : formatCurrency(cpu)}/use</div>
          </div>
        </div>
      `;
    }).join('');
  }

  function showDetail(id) {
    selectedItem = items.find(i => i.id === id);
    if (!selectedItem) return;

    const cpu = getCpu(selectedItem);
    const cls = selectedItem.uses === 0 ? 'unused' : getCpuClass(cpu);

    $('detailName').textContent = selectedItem.name;
    $('detailCpu').textContent = selectedItem.uses === 0 ? '∞' : formatCurrency(cpu);
    $('detailCpu').className = 'detail-cpu-big cpu-' + cls;
    $('detailSub').textContent = 'per use';
    $('detailPaid').textContent = formatCurrency(selectedItem.price);
    $('detailUses').textContent = selectedItem.uses;
    $('detailTarget').textContent = selectedItem.target ? formatCurrency(selectedItem.target) + '/use' : '—';

    // Progress bar
    const progressEl = $('detailProgress');
    if (selectedItem.target && selectedItem.uses > 0) {
      const pct = Math.min((selectedItem.target / cpu) * 100, 100);
      const reached = cpu <= selectedItem.target;
      progressEl.innerHTML = `
        <div class="progress-label">${reached ? '🎉 Target reached!' : `${pct.toFixed(0)}% to target of ${formatCurrency(selectedItem.target)}/use`}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${pct}%;background:${reached ? 'var(--green)' : 'var(--accent)'}"></div>
        </div>
      `;
    } else if (selectedItem.target) {
      progressEl.innerHTML = `<div class="progress-label">Use it once to start tracking toward ${formatCurrency(selectedItem.target)}/use</div>`;
    } else {
      progressEl.innerHTML = '';
    }

    detailModal.classList.add('open');
  }

  function logUse(id, count = 1) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    item.uses += count;
    saveItems();
    renderAll();
    if (selectedItem && selectedItem.id === id) showDetail(id);
    showToast(`+${count} use${count > 1 ? 's' : ''} logged for ${item.name}`);
  }

  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.remove('show');
    requestAnimationFrame(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    });
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  // Events
  function bindEvents() {
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
      });
    });

    // Add modal
    $('addBtn').addEventListener('click', () => addModal.classList.add('open'));
    $('emptyAddBtn').addEventListener('click', () => addModal.classList.add('open'));
    $('closeModal').addEventListener('click', () => addModal.classList.remove('open'));

    // Detail modal
    $('closeDetail').addEventListener('click', () => detailModal.classList.remove('open'));

    // Click item
    itemsListEl.addEventListener('click', e => {
      const quickUse = e.target.closest('.item-quick-use');
      if (quickUse) {
        e.stopPropagation();
        logUse(Number(quickUse.dataset.id));
        return;
      }
      const card = e.target.closest('.item-card');
      if (card) showDetail(Number(card.dataset.id));
    });

    // Detail actions
    $('logUseBtn').addEventListener('click', () => selectedItem && logUse(selectedItem.id, 1));
    $('logUse5Btn').addEventListener('click', () => selectedItem && logUse(selectedItem.id, 5));
    $('deleteItemBtn').addEventListener('click', () => {
      if (!selectedItem) return;
      if (confirm(`Remove "${selectedItem.name}"?`)) {
        items = items.filter(i => i.id !== selectedItem.id);
        saveItems();
        detailModal.classList.remove('open');
        renderAll();
        showToast('Item removed');
      }
    });

    // Save item
    $('saveItem').addEventListener('click', () => {
      const name = $('itemName').value.trim();
      const price = parseFloat($('itemPrice').value);
      if (!name || isNaN(price) || price <= 0) {
        showToast('Please enter a name and price');
        return;
      }
      const item = {
        id: nextId++,
        name,
        price,
        category: $('itemCategory').value,
        uses: parseInt($('itemUses').value) || 0,
        target: parseFloat($('itemTarget').value) || null,
        date: new Date().toISOString().slice(0, 10),
      };
      items.push(item);
      saveItems();
      addModal.classList.remove('open');
      // Reset form
      $('itemName').value = '';
      $('itemPrice').value = '';
      $('itemTarget').value = '';
      $('itemUses').value = '0';
      renderAll();
      showToast(`Added "${name}"`);
    });

    // Filters
    $('categoryFilter').addEventListener('change', renderItems);
    $('sortBy').addEventListener('change', renderItems);

    // Projector
    $('projCalcBtn').addEventListener('click', () => {
      const price = parseFloat($('projPrice').value);
      const usesMonth = parseInt($('projUsesMonth').value);
      if (isNaN(price) || isNaN(usesMonth) || price <= 0 || usesMonth <= 0) {
        showToast('Enter price and uses/month');
        return;
      }
      const periods = [
        { el: 'proj1m', months: 1 },
        { el: 'proj3m', months: 3 },
        { el: 'proj6m', months: 6 },
        { el: 'proj1y', months: 12 },
        { el: 'proj2y', months: 24 },
      ];
      periods.forEach(p => {
        const uses = usesMonth * p.months;
        const cpu = price / uses;
        const cls = getCpuClass(cpu);
        $(p.el).textContent = formatCurrency(cpu);
        $(p.el).className = 'proj-cpu cpu-' + cls;
      });

      const yearCpu = price / (usesMonth * 12);
      const verdict = $('projVerdict');
      if (yearCpu <= 1) {
        verdict.textContent = '🟢 Great value! At this rate, it\'ll be worth every penny.';
        verdict.style.background = 'var(--green-soft)';
        verdict.style.color = 'var(--green)';
      } else if (yearCpu <= 5) {
        verdict.textContent = '🟡 Fair value. Regular use makes this a solid buy.';
        verdict.style.background = 'var(--yellow-soft)';
        verdict.style.color = 'var(--yellow)';
      } else {
        verdict.textContent = '🔴 Expensive per use. Consider renting or a cheaper alternative.';
        verdict.style.background = 'var(--red-soft)';
        verdict.style.color = 'var(--red)';
      }

      $('projResults').style.display = 'block';
    });

    // Close modals on overlay click
    [addModal, detailModal].forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('open');
      });
    });
  }

  init();
})();
