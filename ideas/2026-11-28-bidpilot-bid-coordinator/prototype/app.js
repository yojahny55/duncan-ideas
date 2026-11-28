/* BidPilot prototype — the bid desk (vanilla JS, no deps) */
(function () {
  'use strict';

  /* ---------------- data ---------------- */
  const state = {
    fees: [
      { vendor: "Denny's Plumbing & General", short: "Denny", date: 'NOV 19', amount: 100, terms: 'credited' },
      { vendor: 'Marcus Electric & Remodel',  short: 'Marcus', date: 'NOV 21', amount: 150, terms: 'credited' },
      { vendor: 'Lena & Co. Roofing',         short: 'Lena',   date: 'NOV 24', amount: 75,  terms: 'nonrefundable' },
      { vendor: 'Ray HVAC',                   short: 'Ray',    date: 'NOV 26', amount: 100, terms: 'prepaid' },
    ],
    quotes: {
      marcus: { total: 18400, adds: 0 },
      lena:   { total: null,  adds: 0 },
      denny:  { total: 16900, adds: 2200 }, // permits 950 + haul-away 1250 (unstated)
      ray:    { total: null,  adds: 0 },
    },
    nudgeLog: [],
    hired: null,
    dropped: new Set(),
  };

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const usd = (n) => '$' + n.toLocaleString('en-US');

  /* ---------------- tabs ---------------- */
  $$('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      $$('.tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      $$('.view').forEach((v) => v.classList.add('hidden'));
      $('#view-' + tab.dataset.tab).classList.remove('hidden');
    });
  });

  /* ---------------- toast ---------------- */
  let toastTimer = null;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }

  /* ---------------- fee ledger ---------------- */
  const TERMS_LABEL = { credited: 'CREDITED IF HIRED', nonrefundable: 'NON-REFUNDABLE', prepaid: 'PREPAID' };

  function feeTotal() {
    return state.fees.reduce((s, f) => s + f.amount, 0);
  }

  function netFor(id) {
    const q = state.quotes[id];
    if (!q.total) return null;
    const credit = state.fees
      .filter((f) => f.short === id.charAt(0).toUpperCase() + id.slice(1) || vendorShort(f.vendor) === id)
      .filter((f) => f.terms === 'credited')
      .reduce((s, f) => s + f.amount, 0);
    return q.total + q.adds - credit;
  }

  function vendorShort(v) {
    const m = {
      'Marcus Electric & Remodel': 'marcus',
      'Lena & Co. Roofing': 'lena',
      "Denny's Plumbing & General": 'denny',
      'Ray HVAC': 'ray',
    };
    return m[v] || v;
  }

  function renderFees() {
    const rows = $('#fee-rows');
    rows.innerHTML = '';
    state.fees.forEach((f) => {
      const row = document.createElement('div');
      row.className = 'fee-row';
      row.innerHTML =
        '<div><span class="vendor">' + f.short + '</span><br><span class="terms">' + f.date + ' · ' + TERMS_LABEL[f.terms] + '</span></div>' +
        '<span class="amt">' + usd(f.amount) + '</span>';
      rows.appendChild(row);
    });
    $('#fee-gross').textContent = usd(feeTotal());
    $('#stat-fees').textContent = usd(feeTotal());

    const net = $('#net-rows');
    net.innerHTML = '';
    ['marcus', 'lena', 'denny', 'ray'].forEach((id) => {
      const name = { marcus: 'Marcus', lena: 'Lena', denny: 'Denny', ray: 'Ray' }[id];
      const netVal = netFor(id);
      const row = document.createElement('div');
      if (netVal === null) {
        row.className = 'net-row pending';
        row.innerHTML = '<span class="n-name">' + name + '</span><span class="n-val">QUOTE PENDING</span>';
      } else {
        const q = state.quotes[id];
        const credit = netVal >= q.total + q.adds ? 0 : q.total + q.adds - netVal;
        const math = usd(q.total) + (q.adds ? ' + ' + usd(q.adds) + ' adds' : '') + (credit ? ' − ' + usd(credit) + ' fee credit' : '');
        row.className = 'net-row';
        row.innerHTML =
          '<span><span class="n-name">' + name + '</span><span class="n-math mono">' + math + '</span></span>' +
          '<span class="n-val">' + usd(netVal) + '</span>';
      }
      net.appendChild(row);
    });
  }

  /* ---------------- add fee ---------------- */
  $('#fee-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const vendor = $('#fee-vendor').value;
    const amount = parseInt($('#fee-amount').value, 10);
    if (!amount || amount <= 0) return;
    const terms = $('#fee-terms').value === 'credited' ? 'credited' : 'nonrefundable';
    state.fees.push({ vendor, short: vendorShort(vendor).charAt(0).toUpperCase() + vendorShort(vendor).slice(1), date: 'NOV 28', amount, terms });
    renderFees();
    if (amount > 150) {
      toast('⚑ ' + usd(amount) + ' logged — that\u2019s above the ' + usd(150) + ' metro norm. Flagged in fairness check.');
    } else {
      toast(usd(amount) + ' logged for ' + vendorShort(vendor) + '. Ledger updated.');
    }
    e.target.reset();
  });

  /* ---------------- nudges ---------------- */
  const NUDGE_TONE = { 0: 'Polite', 1: 'Firm', 2: 'Final notice' };
  const nudgeCount = {};

  $$('[data-nudge]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.nudge;
      const name = { marcus: 'Marcus', lena: 'Lena', denny: 'Denny', ray: 'Ray' }[id];
      nudgeCount[id] = (nudgeCount[id] || 0) + 1;
      const tone = NUDGE_TONE[Math.min(nudgeCount[id] - 1, 2)];
      const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      const row = document.createElement('div');
      row.className = 'log-row';
      row.innerHTML = '<span class="mono">' + time + '</span><span>Nudge #' + nudgeCount[id] + ' (' + tone.toLowerCase() + ') → ' + name + ' · drafted, you hit send</span>';
      $('#log').appendChild(row);
      if (id === 'denny' && nudgeCount[id] >= 2) {
        toast('Final notice out to Denny. No reply by Dec 1 → the board suggests Drop. The fee\u2019s gone either way.');
      } else {
        toast('Nudge drafted for ' + name + ' — ' + tone + '. You review, you send.');
      }
    });
  });

  /* ---------------- drop ---------------- */
  $$('[data-drop]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.drop;
      const card = document.querySelector('.bidder[data-id="' + id + '"]');
      card.classList.remove('warn');
      card.classList.add('dropped');
      const chip = card.querySelector('.chip');
      chip.className = 'chip chip-dropped';
      chip.textContent = 'DROPPED';
      $$('.bidder[data-id="' + id + '"] [data-nudge], .bidder[data-id="' + id + '"] [data-hire]').forEach((b) => (b.disabled = true));
      state.dropped.add(id);
      $('#stat-silent').textContent = String(Math.max(0, $$('.chip-ghost').length));
      toast('Denny dropped. 12 days silent. The $100 credit was only worth the speed he never showed.');
    });
  });

  /* ---------------- hire ---------------- */
  $$('[data-hire]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (state.hired) {
        toast('Already decided. One project, one stamp.');
        return;
      }
      const id = btn.dataset.hire;
      state.hired = id;
      const card = document.querySelector('.bidder[data-id="' + id + '"]');
      card.classList.remove('warn');
      card.classList.add('hired');
      const chip = card.querySelector('.chip');
      chip.className = 'chip chip-hired';
      chip.textContent = 'HIRED';
      $$('[data-nudge], [data-hire], [data-drop]').forEach((b) => (b.disabled = true));
      const netVal = netFor(id);
      const name = { marcus: 'Marcus', lena: 'Lena', denny: 'Denny', ray: 'Ray' }[id];
      toast('HIRED — ' + name + (netVal ? ' · net ' + usd(netVal) + ' all-in (quote + adds − fee credit)' : '') + '. Decision Memo stamped.');
    });
  });

  /* ---------------- memo ---------------- */
  $('#memo-btn').addEventListener('click', () => {
    toast('Decision Memo (PDF) generated — 1 page, fridge-pin sized. Prototype: the real build exports scope v2 + matrix + fee ledger.');
  });

  /* ---------------- init ---------------- */
  renderFees();
})();
