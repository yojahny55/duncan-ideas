// BillDecode — Interactive Prototype
document.addEventListener('DOMContentLoaded', () => {
  const uploadZone = document.getElementById('uploadZone');
  const uploadProcessing = document.getElementById('uploadProcessing');
  const uploadCard = document.getElementById('uploadCard');
  const uploadBtn = document.getElementById('uploadBtn');
  const processingText = document.getElementById('processingText');
  const progressFill = document.getElementById('progressFill');
  const dashboard = document.getElementById('dashboard');
  const hero = document.querySelector('.hero');

  // Line items data
  const lineItems = [
    {
      name: 'Base Energy Charge',
      amount: 187.43,
      percent: '65.2%',
      explain: 'This is your actual electricity usage: 1,511 kWh × $0.124/kWh. Think of it like the "food" portion of a restaurant bill — the thing you actually consumed. Your usage this month was higher than usual, likely due to the cold snap Feb 8-14 when Tampa hit 38°F.'
    },
    {
      name: 'Fuel Adjustment Charge',
      amount: 38.22,
      percent: '13.3%',
      explain: 'A pass-through for the cost of natural gas and coal used to generate your electricity. It went UP 18% from last month because winter demand spiked natural gas prices nationally. This charge fluctuates monthly — you can\'t avoid it, but it should drop in spring.',
      flag: { type: 'warning', text: '↑ 18% vs Jan' }
    },
    {
      name: 'Customer Charge (Fixed)',
      amount: 14.00,
      percent: '4.9%',
      explain: 'A flat monthly fee just for being connected to the grid. Everyone pays this regardless of usage. It covers meter reading, billing, and infrastructure maintenance. This hasn\'t changed in 2 years.'
    },
    {
      name: 'Capacity Payment',
      amount: 12.84,
      percent: '4.5%',
      explain: 'Your share of paying for power plants to exist and be ready to produce electricity, even when they\'re not running. Think of it as a "standby fee" — like paying a backup generator to be on call.'
    },
    {
      name: 'Storm Protection Surcharge',
      amount: 8.47,
      percent: '2.9%',
      flag: { type: 'error', text: '⚠️ Questionable' },
      explain: '🚨 This surcharge was approved in 2024 to fund hurricane hardening of power lines. However, records show your county (Hillsborough) was NOT in the original hardening zone. You may be eligible for an exemption — we can generate a dispute letter for you.'
    },
    {
      name: 'Environmental Cost Recovery',
      amount: 6.91,
      percent: '2.4%',
      explain: 'Covers TECO\'s compliance with environmental regulations — emissions monitoring, coal ash cleanup, etc. This is a standard regulatory charge across most Florida utilities.'
    },
    {
      name: 'Conservation Program Charge',
      amount: 4.12,
      percent: '1.4%',
      explain: 'Funds energy efficiency programs that TECO offers to customers. Ironically, you\'re paying for rebate programs you\'ve never used. Check if you qualify for a free smart thermostat or insulation rebate — it could save you more than this charge costs.'
    },
    {
      name: 'Gross Receipts Tax',
      amount: 7.23,
      percent: '2.5%',
      explain: 'A state tax on TECO\'s revenue that they pass through to you. It\'s 2.5% of your total bill. This is a Florida thing — not all states have this.'
    },
    {
      name: 'Municipal Franchise Fee',
      amount: 8.21,
      percent: '2.9%',
      explain: 'Your city charges TECO a fee for using public land for power lines, and TECO passes it to you. It\'s essentially a hidden city tax on electricity. The rate is set by your city council.'
    }
  ];

  // Chart data (12 months)
  const chartData = [
    { month: 'Mar', kwh: 1210, cost: 178 },
    { month: 'Apr', kwh: 1080, cost: 158 },
    { month: 'May', kwh: 1350, cost: 196 },
    { month: 'Jun', kwh: 1680, cost: 238 },
    { month: 'Jul', kwh: 1920, cost: 268 },
    { month: 'Aug', kwh: 2010, cost: 280 },
    { month: 'Sep', kwh: 1780, cost: 252 },
    { month: 'Oct', kwh: 1340, cost: 194 },
    { month: 'Nov', kwh: 1180, cost: 172 },
    { month: 'Dec', kwh: 1420, cost: 204 },
    { month: 'Jan', kwh: 1560, cost: 234 },
    { month: 'Feb', kwh: 2318, cost: 287, highlight: true }
  ];

  // Render line items
  function renderLineItems() {
    const container = document.getElementById('lineItems');
    container.innerHTML = lineItems.map((item, i) => `
      <div class="line-item" data-index="${i}">
        <div>
          <span class="item-name">${item.name}</span>
          ${item.flag ? `<span class="item-flag flag-${item.flag.type}">${item.flag.text}</span>` : ''}
        </div>
        <span class="item-amount">$${item.amount.toFixed(2)}</span>
        <span class="item-percent">${item.percent}</span>
        <div class="item-explain">${item.explain}</div>
      </div>
    `).join('');

    // Toggle expand on click
    container.querySelectorAll('.line-item').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('expanded');
      });
    });
  }

  // Render chart
  function renderChart() {
    const barsContainer = document.getElementById('chartBars');
    const labelsContainer = document.getElementById('chartLabels');
    const maxKwh = Math.max(...chartData.map(d => d.kwh));

    barsContainer.innerHTML = chartData.map(d => {
      const height = (d.kwh / maxKwh) * 100;
      const color = d.highlight ? 'var(--color-error)' : 'var(--color-primary)';
      return `
        <div class="chart-bar-wrapper">
          <div class="chart-bar" style="height: ${height}%; background: ${color};" title="${d.month}: ${d.kwh} kWh ($${d.cost})">
            <span class="chart-bar-value">$${d.cost}</span>
          </div>
        </div>
      `;
    }).join('');

    labelsContainer.innerHTML = chartData.map(d => `
      <span class="chart-label">${d.month}</span>
    `).join('');
  }

  // Upload simulation
  function simulateUpload() {
    uploadZone.classList.add('hidden');
    uploadProcessing.classList.remove('hidden');

    const steps = [
      { text: 'Scanning bill...', progress: 15 },
      { text: 'Extracting line items...', progress: 35 },
      { text: 'Identifying rate plan...', progress: 55 },
      { text: 'Comparing to neighbors...', progress: 70 },
      { text: 'Analyzing for anomalies...', progress: 85 },
      { text: 'Generating recommendations...', progress: 95 },
      { text: 'Done!', progress: 100 }
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length) {
        processingText.textContent = steps[step].text;
        progressFill.style.width = steps[step].progress + '%';
        step++;
      } else {
        clearInterval(interval);
        // Show dashboard
        setTimeout(() => {
          hero.style.display = 'none';
          document.querySelector('.features-section').style.display = 'none';
          document.querySelector('.how-section').style.display = 'none';
          document.querySelector('.pricing-section').style.display = 'none';
          dashboard.classList.remove('hidden');
          renderLineItems();
          renderChart();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);
      }
    }, 600);
  }

  // Event listeners
  uploadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    simulateUpload();
  });

  uploadZone.addEventListener('click', () => {
    simulateUpload();
  });

  // Drag and drop visual feedback
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });
  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });
  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    simulateUpload();
  });
});
