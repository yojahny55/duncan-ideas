// === Meeting Data ===
const meetings = [
  {
    title: 'Q1 Sprint Planning',
    meta: 'Today at 10:00 AM · 47 min · 4 participants',
    stats: { actions: 8, decisions: 3, owners: 4, urgent: 2 },
    items: [
      { text: 'Migrate the auth service to the new OAuth provider before the security audit', owner: 'Sarah Chen', deadline: 'Mar 25', priority: 'urgent', type: 'action' },
      { text: 'Write integration tests for the payment flow — cover edge cases from last incident', owner: 'Marcus Webb', deadline: 'Mar 22', priority: 'urgent', type: 'action' },
      { text: 'Decision: We\'re going with Stripe Connect for marketplace payments instead of building custom', type: 'decision' },
      { text: 'Draft the API documentation for the new webhooks endpoint', owner: 'Priya Patel', deadline: 'Mar 28', priority: 'normal', type: 'action' },
      { text: 'Schedule user interviews with 5 enterprise customers about the dashboard redesign', owner: 'Jake Torres', deadline: 'Mar 21', priority: 'normal', type: 'action' },
      { text: 'Decision: Mobile app v2 launches April 15 — no more scope additions after March 28', type: 'decision' },
      { text: 'Set up staging environment for the new notification service', owner: 'Sarah Chen', deadline: 'Mar 24', priority: 'normal', type: 'action' },
      { text: 'Review and approve the updated privacy policy with legal', owner: 'Jake Torres', deadline: 'Apr 1', priority: 'normal', type: 'action' },
      { text: 'Decision: Deprecating the v1 API on June 1 — start sending migration notices next week', type: 'decision' },
      { text: 'Create runbook for the database migration weekend', owner: 'Marcus Webb', deadline: 'Mar 28', priority: 'normal', type: 'action' },
      { text: 'Update the onboarding flow copy based on last week\'s A/B test results', owner: 'Priya Patel', deadline: 'Mar 26', priority: 'normal', type: 'action' },
    ]
  },
  {
    title: 'Design Review',
    meta: 'Yesterday at 2:00 PM · 32 min · 3 participants',
    stats: { actions: 5, decisions: 2, owners: 3, urgent: 1 },
    items: [
      { text: 'Redesign the empty state for the dashboard — current one confuses new users', owner: 'Lena Kim', deadline: 'Mar 22', priority: 'urgent', type: 'action' },
      { text: 'Decision: Using the dark theme as default, light mode as opt-in', type: 'decision' },
      { text: 'Create icon set for the new navigation — need 12 icons total', owner: 'Alex Rivera', deadline: 'Mar 25', priority: 'normal', type: 'action' },
      { text: 'Run accessibility audit on the new forms — WCAG AA compliance required', owner: 'Lena Kim', deadline: 'Mar 28', priority: 'normal', type: 'action' },
      { text: 'Decision: Component library stays in Figma, no migration to Penpot this quarter', type: 'decision' },
      { text: 'Prototype the mobile onboarding flow — 5 screens, gesture-based', owner: 'Dev Sharma', deadline: 'Mar 24', priority: 'normal', type: 'action' },
      { text: 'Document the new spacing scale and color tokens in the design system', owner: 'Alex Rivera', deadline: 'Mar 26', priority: 'normal', type: 'action' },
    ]
  },
  {
    title: 'Client Sync — Acme',
    meta: 'Mar 15 at 11:00 AM · 28 min · 5 participants',
    stats: { actions: 6, decisions: 2, owners: 4, urgent: 2 },
    items: [
      { text: 'Send updated project timeline reflecting the 2-week scope addition', owner: 'Rachel Green', deadline: 'Mar 17', priority: 'urgent', type: 'action' },
      { text: 'Fix the CSV export bug they reported — data truncation on large exports', owner: 'Tom Park', deadline: 'Mar 18', priority: 'urgent', type: 'action' },
      { text: 'Decision: Custom SSO integration moves to Phase 2 — not blocking launch', type: 'decision' },
      { text: 'Prepare demo environment for Acme\'s internal stakeholder review', owner: 'Rachel Green', deadline: 'Mar 20', priority: 'normal', type: 'action' },
      { text: 'Add the three new report templates they requested to the backlog', owner: 'Nina Costa', deadline: 'Mar 19', priority: 'normal', type: 'action' },
      { text: 'Decision: Billing integration goes through their existing Netsuite — we provide the API', type: 'decision' },
      { text: 'Schedule training session for Acme\'s ops team — 2 hours, include Q&A', owner: 'Chris Hall', deadline: 'Mar 24', priority: 'normal', type: 'action' },
      { text: 'Share security questionnaire responses — they need it for vendor approval', owner: 'Nina Costa', deadline: 'Mar 21', priority: 'normal', type: 'action' },
    ]
  }
];

let currentMeeting = 0;
let currentFilter = 'all';

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  renderActions(meetings[0]);
  
  const textarea = document.getElementById('transcriptInput');
  if (textarea) {
    textarea.addEventListener('input', () => {
      document.getElementById('pasteBtn').style.display = textarea.value.trim() ? 'inline-flex' : 'none';
    });
  }
});

// === Navigation ===
function loadMeeting(index) {
  currentMeeting = index;
  currentFilter = 'all';
  const meeting = meetings[index];
  
  document.querySelectorAll('.meeting-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
  
  document.getElementById('meetingTitle').textContent = meeting.title;
  document.getElementById('meetingMeta').textContent = meeting.meta;
  document.getElementById('actionCount').textContent = meeting.stats.actions;
  document.getElementById('decisionCount').textContent = meeting.stats.decisions;
  document.getElementById('ownerCount').textContent = meeting.stats.owners;
  document.getElementById('urgentCount').textContent = meeting.stats.urgent;
  
  document.querySelectorAll('.filter-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === 0);
  });
  
  showView('resultsView');
  renderActions(meeting);
}

function renderActions(meeting, filter = 'all') {
  const list = document.getElementById('actionsList');
  let items = meeting.items;
  
  if (filter === 'urgent') items = items.filter(i => i.priority === 'urgent');
  else if (filter === 'decision') items = items.filter(i => i.type === 'decision');
  
  list.innerHTML = items.map((item, i) => `
    <div class="action-item" data-type="${item.type}" data-priority="${item.priority || ''}">
      <div class="action-check" onclick="toggleCheck(this)"></div>
      <div class="action-body">
        <div class="action-text">${item.text}</div>
        <div class="action-meta">
          ${item.owner ? `<span class="action-tag tag-owner">👤 ${item.owner}</span>` : ''}
          ${item.deadline ? `<span class="action-tag tag-deadline">📅 ${item.deadline}</span>` : ''}
          ${item.priority === 'urgent' ? '<span class="action-tag tag-urgent">🔴 Urgent</span>' : ''}
          ${item.type === 'decision' ? '<span class="action-tag tag-decision">📌 Decision</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCheck(el) {
  el.classList.toggle('checked');
  el.closest('.action-item').classList.toggle('completed');
}

function filterActions(filter, tabEl) {
  currentFilter = filter;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if (tabEl) tabEl.classList.add('active');
  renderActions(meetings[currentMeeting], filter);
}

function filterByOwner() {
  const meeting = meetings[currentMeeting];
  const owners = [...new Set(meeting.items.filter(i => i.owner).map(i => i.owner))];
  
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.filter-tab')[3].classList.add('active');
  
  const list = document.getElementById('actionsList');
  list.innerHTML = owners.map(owner => {
    const ownerItems = meeting.items.filter(i => i.owner === owner);
    return `
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1rem; margin-bottom: 10px; color: var(--accent-light);">👤 ${owner} (${ownerItems.length} items)</h3>
        ${ownerItems.map(item => `
          <div class="action-item" style="margin-bottom: 6px;">
            <div class="action-check" onclick="toggleCheck(this)"></div>
            <div class="action-body">
              <div class="action-text">${item.text}</div>
              <div class="action-meta">
                ${item.deadline ? `<span class="action-tag tag-deadline">📅 ${item.deadline}</span>` : ''}
                ${item.priority === 'urgent' ? '<span class="action-tag tag-urgent">🔴 Urgent</span>' : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');
}

// === Views ===
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  document.getElementById(viewId).style.display = 'block';
}

function showUpload() {
  showView('uploadView');
}

function showDemo() {
  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => showUpload(), 500);
}

// === Processing Animation ===
function startProcessing() {
  showView('processingView');
  
  const steps = [
    { id: 'step1', text: 'Transcribing audio...', pct: 25 },
    { id: 'step2', text: 'Identifying speakers...', pct: 50 },
    { id: 'step3', text: 'Extracting action items...', pct: 75 },
    { id: 'step4', text: 'Inferring deadlines...', pct: 95 },
  ];
  
  let i = 0;
  const fill = document.getElementById('progressFill');
  const text = document.getElementById('processingText');
  
  function nextStep() {
    if (i > 0) {
      document.getElementById(steps[i - 1].id).classList.remove('active');
      document.getElementById(steps[i - 1].id).classList.add('done');
      document.getElementById(steps[i - 1].id).textContent = '✓ ' + document.getElementById(steps[i - 1].id).textContent.slice(2);
    }
    
    if (i < steps.length) {
      const step = steps[i];
      document.getElementById(step.id).classList.add('active');
      text.textContent = step.text;
      fill.style.width = step.pct + '%';
      i++;
      setTimeout(nextStep, 800 + Math.random() * 400);
    } else {
      fill.style.width = '100%';
      text.textContent = 'Done! Found 8 action items.';
      setTimeout(() => {
        loadMeeting(0);
        showToast('✅ Extracted 8 action items, 3 decisions from 4 speakers');
      }, 600);
    }
  }
  
  nextStep();
}

// === Export ===
function exportActions(target) {
  const meeting = meetings[currentMeeting];
  const labels = {
    clipboard: '📋 Copied to clipboard!',
    jira: '🔗 Created 8 Jira tickets!',
    slack: '💬 Sent to #team-standup in Slack!',
    email: '📧 Emailed action items to all 4 participants!',
  };
  showToast(labels[target] || 'Exported!');
}

// === Toast ===
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
