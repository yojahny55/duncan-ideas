// CodePeek - Engineering Culture Reviews - Prototype

const companies = [
  {
    id: 1,
    name: "Stripe",
    logo: "S",
    logoBg: "#635BFF",
    overallScore: 4.7,
    wouldWriteAgain: 94,
    reviewCount: 847,
    tech: ["TypeScript", "Ruby", "Go", "Kubernetes"],
    scores: {
      codeQuality: 4.8,
      reviewCulture: 4.9,
      ciCd: 4.7,
      testing: 4.6,
      onCall: 4.2,
      managerCompetence: 4.8,
      learning: 4.9,
      tooling: 4.7
    }
  },
  {
    id: 2,
    name: "Netflix",
    logo: "N",
    logoBg: "#E50914",
    overallScore: 4.5,
    wouldWriteAgain: 89,
    reviewCount: 623,
    tech: ["Java", "Kotlin", "Python", "AWS"],
    scores: {
      codeQuality: 4.6,
      reviewCulture: 4.7,
      ciCd: 4.9,
      testing: 4.4,
      onCall: 3.8,
      managerCompetence: 4.5,
      learning: 4.8,
      tooling: 4.9
    }
  },
  {
    id: 3,
    name: "Airbnb",
    logo: "A",
    logoBg: "#FF5A5F",
    overallScore: 4.3,
    wouldWriteAgain: 86,
    reviewCount: 512,
    tech: ["React", "Ruby", "GraphQL", "Java"],
    scores: {
      codeQuality: 4.4,
      reviewCulture: 4.5,
      ciCd: 4.3,
      testing: 4.1,
      onCall: 4.0,
      managerCompetence: 4.2,
      learning: 4.6,
      tooling: 4.3
    }
  },
  {
    id: 4,
    name: "Shopify",
    logo: "S",
    logoBg: "#96bf48",
    overallScore: 4.6,
    wouldWriteAgain: 91,
    reviewCount: 389,
    tech: ["Ruby", "Rails", "React", "Liquid"],
    scores: {
      codeQuality: 4.7,
      reviewCulture: 4.6,
      ciCd: 4.8,
      testing: 4.5,
      onCall: 4.4,
      managerCompetence: 4.7,
      learning: 4.8,
      tooling: 4.6
    }
  },
  {
    id: 5,
    name: "Linear",
    logo: "L",
    logoBg: "#5E6AD2",
    overallScore: 4.8,
    wouldWriteAgain: 96,
    reviewCount: 234,
    tech: ["TypeScript", "React", "Elixir", "PostgreSQL"],
    scores: {
      codeQuality: 4.9,
      reviewCulture: 4.9,
      ciCd: 4.8,
      testing: 4.7,
      onCall: 4.6,
      managerCompetence: 4.8,
      learning: 4.9,
      tooling: 4.9
    }
  },
  {
    id: 6,
    name: "Notion",
    logo: "N",
    logoBg: "#191919",
    overallScore: 4.4,
    wouldWriteAgain: 88,
    reviewCount: 412,
    tech: ["TypeScript", "React", "Node", "Electron"],
    scores: {
      codeQuality: 4.5,
      reviewCulture: 4.6,
      ciCd: 4.4,
      testing: 4.2,
      onCall: 4.3,
      managerCompetence: 4.4,
      learning: 4.7,
      tooling: 4.5
    }
  }
];

const categoryLabels = {
  codeQuality: "Code Quality",
  reviewCulture: "Review Culture",
  ciCd: "CI/CD Maturity",
  testing: "Testing Standards",
  onCall: "On-Call Burden",
  managerCompetence: "Manager Competence",
  learning: "Learning & Growth",
  tooling: "Tooling & DX"
};

const categoryIcons = {
  codeQuality: "🧱",
  reviewCulture: "👀",
  ciCd: "🚀",
  testing: "🧪",
  onCall: "🔔",
  managerCompetence: "👨‍💻",
  learning: "📚",
  tooling: "🛠"
};

// Render company cards
function renderCompanies(filter = 'all') {
  const container = document.getElementById('companyList');
  let filtered = companies;

  if (filter === 'top') {
    filtered = companies.filter(c => c.overallScore >= 4.5).sort((a, b) => b.overallScore - a.overallScore);
  } else if (filter === 'startup') {
    filtered = [companies[4]]; // Linear
  } else if (filter === 'faang') {
    filtered = [companies[1], companies[2]]; // Netflix, Airbnb
  }

  container.innerHTML = `
    <div class="company-grid">
      ${filtered.map(company => `
        <div class="company-card" onclick="showCompanyDetail(${company.id})">
          <div class="company-header">
            <div class="company-logo" style="background: ${company.logoBg}; color: white;">${company.logo}</div>
            <div>
              <div class="company-name">${company.name}</div>
              <div class="company-review-count">${company.reviewCount} reviews</div>
            </div>
          </div>
          <div class="company-score">${company.overallScore.toFixed(1)}</div>
          <div class="would-write-again">${company.wouldWriteAgain}% would write code here again</div>
          <div class="tech-tags">
            ${company.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Show company detail modal
function showCompanyDetail(id) {
  const company = companies.find(c => c.id === id);
  if (!company) return;

  const modal = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="score-breakdown">
      <div class="company-header" style="margin-bottom: 1.5rem;">
        <div class="company-logo" style="background: ${company.logoBg}; color: white; width: 64px; height: 64px; font-size: 1.5rem;">${company.logo}</div>
        <div>
          <div class="company-name" style="font-size: 1.5rem;">${company.name}</div>
          <div class="company-review-count">${company.reviewCount} anonymous reviews</div>
          <div class="would-write-again">${company.wouldWriteAgain}% would write code here again</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <div>
          <h3 style="margin-bottom: 1rem;">Engineering Scorecard</h3>
          ${Object.entries(company.scores).map(([key, score]) => `
            <div class="score-row">
              <div class="score-label">
                <span>${categoryIcons[key]}</span>
                ${categoryLabels[key]}
              </div>
              <div class="stars">${'★'.repeat(Math.round(score))}${'☆'.repeat(5 - Math.round(score))}</div>
              <strong>${score.toFixed(1)}</strong>
            </div>
          `).join('')}
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Top Review Snippets</h3>
          <div style="background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem; font-size: 0.9rem;">
            <p style="margin-bottom: 0.5rem; color: var(--success);">"The CI/CD pipelines are a dream. Deployed 47 times last week and zero incidents."</p>
            <p style="color: var(--text-muted); font-size: 0.8rem;">Senior Engineer • 6 months ago</p>
          </div>
          <div style="background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem; font-size: 0.9rem;">
            <p style="margin-bottom: 0.5rem; color: var(--warning);">"Code reviews are thorough but can take 2-3 days during sprint."</p>
            <p style="color: var(--text-muted); font-size: 0.8rem;">Frontend Dev • 2 months ago</p>
          </div>
          <div style="background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.9rem;">
            <p style="margin-bottom: 0.5rem; color: var(--success);">"Manager was an IC for 5 years, actually understands the tech stack."</p>
            <p style="color: var(--text-muted); font-size: 0.8rem;">Backend Dev • 1 month ago</p>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// Render comparison grid
function renderComparison() {
  const container = document.getElementById('compareGrid');
  const c1 = companies[0]; // Stripe
  const c2 = companies[4]; // Linear

  container.innerHTML = `
    <div class="compare-card">
      <div class="company-header">
        <div class="company-logo" style="background: ${c1.logoBg}; color: white;">${c1.logo}</div>
        <div class="company-name">${c1.name}</div>
      </div>
      <div class="company-score">${c1.overallScore.toFixed(1)}</div>
      <div class="would-write-again">${c1.wouldWriteAgain}% would write again</div>
      <div style="margin-top: 1rem;">
        ${Object.entries(c1.scores).map(([key, score]) => `
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="font-size: 0.875rem; color: var(--text-muted);">${categoryIcons[key]} ${categoryLabels[key]}</span>
            <strong>${score.toFixed(1)}</strong>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="compare-card">
      <div class="company-header">
        <div class="company-logo" style="background: ${c2.logoBg}; color: white;">${c2.logo}</div>
        <div class="company-name">${c2.name}</div>
      </div>
      <div class="company-score">${c2.overallScore.toFixed(1)}</div>
      <div class="would-write-again">${c2.wouldWriteAgain}% would write again</div>
      <div style="margin-top: 1rem;">
        ${Object.entries(c2.scores).map(([key, score]) => `
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="font-size: 0.875rem; color: var(--text-muted);">${categoryIcons[key]} ${categoryLabels[key]}</span>
            <strong>${score.toFixed(1)}</strong>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderCompanies();
  renderComparison();

  // Filter chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      renderCompanies(e.target.dataset.filter);
    });
  });

  // Search
  document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
      renderCompanies();
      return;
    }
    const filtered = companies.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.tech.some(t => t.toLowerCase().includes(query))
    );
    const container = document.getElementById('companyList');
    container.innerHTML = `
      <div class="company-grid">
        ${filtered.map(company => `
          <div class="company-card" onclick="showCompanyDetail(${company.id})">
            <div class="company-header">
              <div class="company-logo" style="background: ${company.logoBg}; color: white;">${company.logo}</div>
              <div>
                <div class="company-name">${company.name}</div>
                <div class="company-review-count">${company.reviewCount} reviews</div>
              </div>
            </div>
            <div class="company-score">${company.overallScore.toFixed(1)}</div>
            <div class="would-write-again">${company.wouldWriteAgain}% would write code here again</div>
            <div class="tech-tags">
              ${company.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modalOverlay').classList.remove('active');
  });

  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
      e.target.classList.remove('active');
    }
  });

  // Enter key search
  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('searchBtn').click();
    }
  });
});
