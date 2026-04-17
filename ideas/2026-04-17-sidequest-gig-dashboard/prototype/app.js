// SideQuest — Gig Earnings Dashboard
document.addEventListener('DOMContentLoaded', () => {
  // Animate today's total
  animateCounter('todayTotal', 184.40, '$');
  animateCounter('todayHours', 6.0);
  animateCounter('todayRate', 16.42, '$');

  // Build week chart
  buildWeekChart();

  // Build heatmap
  buildHeatmap();

  // Modal handlers
  const modal = document.getElementById('modal');
  document.getElementById('addManual').addEventListener('click', () => modal.classList.add('show'));
  document.getElementById('cancelModal').addEventListener('click', () => modal.classList.remove('show'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });

  document.getElementById('saveEarnings').addEventListener('click', () => {
    const amt = document.getElementById('amountInput').value;
    const platform = document.getElementById('platformSelect').value;
    if (amt) {
      const card = document.querySelector(`.app-card.${platform.toLowerCase()}`);
      if (card) {
        const earnEl = card.querySelector('.app-earn');
        const current = parseFloat(earnEl.textContent.replace('$','')) || 0;
        earnEl.textContent = '$' + (current + parseFloat(amt)).toFixed(2);
      }
      const totalEl = document.getElementById('todayTotal');
      const current = parseFloat(totalEl.textContent.replace('$','')) || 0;
      totalEl.textContent = '$' + (current + parseFloat(amt)).toFixed(2);
      modal.classList.remove('show');
      document.getElementById('amountInput').value = '';
      document.getElementById('hoursInput').value = '';
      document.getElementById('milesInput').value = '';
    }
  });

  // Start timer button
  document.getElementById('startTimer').addEventListener('click', function() {
    const btn = this;
    if (btn.textContent.includes('Start')) {
      btn.textContent = '⏸ Earning...';
      btn.style.background = 'var(--yellow)';
    } else {
      btn.textContent = '▶ Start Earning';
      btn.style.background = '';
    }
  });

  // Notif btn
  document.getElementById('notifBtn').addEventListener('click', () => {
    alert('🔔 Weekly Report: $682 earned, 28.5 hrs, $15.90/hr true rate. $118 to weekly goal!');
  });
});

function animateCounter(id, target, prefix = '') {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = target / 40;
  const suffix = id === 'todayHours' ? '' : (prefix === '$' ? '' : '');
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    if (prefix === '$') {
      el.textContent = '$' + current.toFixed(2);
    } else if (id === 'todayHours') {
      el.textContent = current.toFixed(1);
    } else {
      el.textContent = '$' + current.toFixed(2);
    }
  }, 25);
}

function buildWeekChart() {
  const data = [
    { day: 'Mon', amount: 112 },
    { day: 'Tue', amount: 95 },
    { day: 'Wed', amount: 143 },
    { day: 'Thu', amount: 148 },
    { day: 'Fri', amount: 0 },
    { day: 'Sat', amount: 0 },
    { day: 'Sun', amount: 0 },
  ];
  const max = Math.max(...data.map(d => d.amount), 1);
  const chart = document.getElementById('weekChart');
  chart.innerHTML = '';
  data.forEach(d => {
    const group = document.createElement('div');
    group.className = 'week-bar-group';
    const amt = document.createElement('div');
    amt.className = 'week-amount';
    amt.textContent = d.amount ? '$' + d.amount : '-';
    const bar = document.createElement('div');
    bar.className = 'week-bar';
    bar.style.height = (d.amount ? Math.max((d.amount / max) * 80, 8) : 4) + 'px';
    bar.style.opacity = d.amount ? '1' : '0.2';
    const label = document.createElement('div');
    label.className = 'week-day';
    label.textContent = d.day;
    group.append(amt, bar, label);
    chart.appendChild(group);
  });
}

function buildHeatmap() {
  const container = document.getElementById('heatmap');
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  // Header row
  days.forEach(d => {
    const cell = document.createElement('div');
    cell.className = 'heat-cell';
    cell.style.fontSize = '8px';
    cell.style.color = 'var(--text2)';
    cell.textContent = d;
    container.appendChild(cell);
  });
  // Hours 6am-11pm (17 rows)
  const hours = [];
  for (let h = 6; h <= 23; h++) hours.push(h);
  // Fake data
  const hotspots = { '11-Thu': 0.9, '12-Thu': 0.95, '17-Thu': 1, '18-Thu': 0.95, '19-Thu': 0.85,
    '17-Fri': 0.8, '18-Fri': 0.85, '19-Fri': 0.9, '20-Fri': 0.7,
    '11-Sat': 0.6, '12-Sat': 0.75, '13-Sat': 0.8, '19-Sat': 0.7, '20-Sat': 0.65,
    '8-Mon': 0.5, '9-Mon': 0.55, '17-Mon': 0.6, '18-Mon': 0.65,
    '8-Tue': 0.45, '17-Tue': 0.5, '18-Wed': 0.6, '19-Wed': 0.5 };
  
  hours.forEach(h => {
    days.forEach(d => {
      const cell = document.createElement('div');
      cell.className = 'heat-cell';
      const val = hotspots[`${h}-${d}`] || Math.random() * 0.15;
      const r = Math.round(10 + val * 0);
      const g = Math.round(25 + val * 189);
      const b = Math.round(55 + val * 88);
      cell.style.background = `rgba(${r},${g},${b},${Math.max(0.3, val)})`;
      cell.style.borderRadius = '3px';
      container.appendChild(cell);
    });
  });
}
