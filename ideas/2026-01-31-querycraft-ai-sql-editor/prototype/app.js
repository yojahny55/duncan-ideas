/**
 * QueryCraft - AI-Powered SQL Editor
 * Interactive Prototype
 */

// ===== State =====
const state = {
  currentQuery: '',
  isRunning: false,
  aiMessages: [],
  queryHistory: []
};

// ===== DOM Elements =====
const elements = {
  codeEditor: document.getElementById('codeEditor'),
  aiInput: document.getElementById('aiInput'),
  aiMessages: document.getElementById('aiMessages'),
  runQueryBtn: document.getElementById('runQueryBtn'),
  formatBtn: document.getElementById('formatBtn'),
  explainBtn: document.getElementById('explainBtn'),
  sendAiBtn: document.getElementById('sendAiBtn'),
  resultsBody: document.getElementById('resultsBody'),
  schemaSearch: document.getElementById('schemaSearch'),
  insertToEditor: document.getElementById('insertToEditor')
};

// ===== Sample Data =====
const sampleQueries = {
  revenue: `SELECT 
  DATE_TRUNC('month', o.created_at) AS month,
  SUM(o.total) AS revenue,
  COUNT(DISTINCT o.user_id) AS unique_customers
FROM orders o
WHERE o.created_at >= '2025-01-01'
GROUP BY DATE_TRUNC('month', o.created_at)
ORDER BY month DESC;`,

  topProducts: `SELECT 
  p.name,
  p.category_id,
  SUM(oi.quantity) AS units_sold,
  SUM(oi.quantity * oi.price) AS revenue
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o ON oi.order_id = o.id
WHERE o.created_at >= DATE_TRUNC('quarter', NOW())
GROUP BY p.id, p.name, p.category_id
ORDER BY revenue DESC
LIMIT 20;`,

  userRetention: `WITH cohort AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', MIN(created_at)) AS cohort_month
  FROM orders
  GROUP BY user_id
)
SELECT 
  c.cohort_month,
  COUNT(DISTINCT c.user_id) AS cohort_size,
  COUNT(DISTINCT CASE 
    WHEN o.created_at >= c.cohort_month + INTERVAL '1 month'
    THEN o.user_id 
  END) AS retained_m1
FROM cohort c
LEFT JOIN orders o ON c.user_id = o.user_id
GROUP BY c.cohort_month
ORDER BY c.cohort_month DESC;`
};

const aiResponses = [
  {
    prompt: ['optimize', 'faster', 'slow', 'performance'],
    response: `I've analyzed your query and found a few optimizations:

1. **Add Index**: Create an index on the JOIN columns
2. **Limit Early**: Use subquery to filter before joining
3. **Avoid SELECT ***: Specify only needed columns`,
    code: `-- Optimized version
SELECT u.id, u.name, o.total
FROM (
  SELECT * FROM users 
  WHERE created_at >= '2026-01-01'
  LIMIT 1000
) u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.status = 'completed';`,
    improvement: { before: '1.8s', after: '0.12s' }
  },
  {
    prompt: ['explain', 'what does', 'how does', 'understand'],
    response: `Here's what your query does step by step:

1. **FROM users u**: Start with the users table, alias as 'u'
2. **LEFT JOIN orders**: Match orders to users (keep users with no orders)
3. **WHERE clause**: Filter to orders from 2026
4. **GROUP BY**: Aggregate per user
5. **COUNT/SUM**: Calculate totals per group`,
    code: null,
    improvement: null
  },
  {
    prompt: ['error', 'bug', 'wrong', 'fix', 'debug'],
    response: `I found a potential issue in your query:

⚠️ **Problem**: The WHERE clause filters out users with no orders because NULL comparisons return false.

💡 **Fix**: Move the date filter to the JOIN condition to preserve LEFT JOIN behavior.`,
    code: `-- Fixed version
SELECT u.id, u.name, COUNT(o.id) AS orders
FROM users u
LEFT JOIN orders o 
  ON u.id = o.user_id 
  AND o.created_at >= '2026-01-01'
GROUP BY u.id, u.name;`,
    improvement: null
  },
  {
    prompt: ['find', 'show', 'get', 'select', 'users', 'customers'],
    response: `Here's a query that finds the users you're looking for:`,
    code: `SELECT DISTINCT 
  u.id,
  u.name,
  u.email,
  MAX(o.created_at) AS last_order
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name, u.email
HAVING MAX(o.created_at) < NOW() - INTERVAL '30 days'
   OR MAX(o.created_at) IS NULL
ORDER BY last_order DESC NULLS LAST;`,
    improvement: null
  }
];

// ===== Syntax Highlighting =====
function highlightSQL(code) {
  const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 
    'ON', 'AND', 'OR', 'NOT', 'IN', 'AS', 'GROUP', 'BY', 'ORDER', 'HAVING', 'LIMIT',
    'OFFSET', 'UNION', 'ALL', 'DISTINCT', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END',
    'NULL', 'IS', 'LIKE', 'BETWEEN', 'EXISTS', 'INSERT', 'INTO', 'VALUES', 'UPDATE',
    'SET', 'DELETE', 'CREATE', 'TABLE', 'INDEX', 'DROP', 'ALTER', 'WITH', 'DESC', 'ASC',
    'NULLS', 'FIRST', 'LAST', 'INTERVAL', 'TRUE', 'FALSE'];
  
  const functions = ['COUNT', 'SUM', 'AVG', 'MAX', 'MIN', 'COALESCE', 'NULLIF',
    'DATE_TRUNC', 'NOW', 'CURRENT_DATE', 'CURRENT_TIMESTAMP', 'EXTRACT',
    'CONCAT', 'LENGTH', 'UPPER', 'LOWER', 'TRIM', 'SUBSTRING', 'CAST',
    'TO_CHAR', 'TO_DATE', 'ROUND', 'FLOOR', 'CEIL', 'ABS'];
  
  // Escape HTML
  let highlighted = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  // Comments
  highlighted = highlighted.replace(/(--.*$)/gm, '<span class="sql-comment">$1</span>');
  
  // Strings
  highlighted = highlighted.replace(/('[^']*')/g, '<span class="sql-string">$1</span>');
  
  // Numbers
  highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="sql-number">$1</span>');
  
  // Functions
  functions.forEach(fn => {
    const regex = new RegExp(`\\b(${fn})\\s*\\(`, 'gi');
    highlighted = highlighted.replace(regex, '<span class="sql-function">$1</span>(');
  });
  
  // Keywords
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'gi');
    highlighted = highlighted.replace(regex, '<span class="sql-keyword">$1</span>');
  });
  
  // Operators
  highlighted = highlighted.replace(/([=<>!]+)/g, '<span class="sql-operator">$1</span>');
  
  return highlighted;
}

// ===== Format SQL =====
function formatSQL(sql) {
  const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 
    'INNER JOIN', 'OUTER JOIN', 'ON', 'AND', 'OR', 'GROUP BY', 'ORDER BY', 
    'HAVING', 'LIMIT', 'OFFSET', 'UNION', 'WITH'];
  
  let formatted = sql.trim();
  
  // Add newlines before major keywords
  keywords.forEach(kw => {
    const regex = new RegExp(`\\s+${kw}\\s+`, 'gi');
    formatted = formatted.replace(regex, `\n${kw} `);
  });
  
  // Indent lines after SELECT
  const lines = formatted.split('\n');
  let result = [];
  let inSelect = false;
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.toUpperCase().startsWith('SELECT')) {
      inSelect = true;
      result.push(trimmed);
    } else if (['FROM', 'WHERE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'GROUP', 'ORDER', 'HAVING', 'LIMIT', 'WITH'].some(k => trimmed.toUpperCase().startsWith(k))) {
      inSelect = false;
      result.push(trimmed);
    } else if (inSelect && trimmed) {
      result.push('  ' + trimmed);
    } else {
      result.push(trimmed);
    }
  });
  
  return result.join('\n');
}

// ===== AI Message Handling =====
function addAiMessage(type, content, code = null, improvement = null) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `ai-message ai-message--${type}`;
  
  let html = `<div class="ai-message__label">${type === 'user' ? 'You' : 'QueryCraft AI'}</div>`;
  html += `<div class="ai-message__content">${content}</div>`;
  
  if (code) {
    html += `
      <div class="ai-message__code">
        <div class="ai-message__code-header">
          <span>SQL</span>
          <button onclick="copyCode(this)" style="background: none; border: none; color: var(--color-text-secondary); cursor: pointer; font-size: 11px;">Copy</button>
        </div>
        <div class="ai-message__code-content">${highlightSQL(code)}</div>
      </div>
      <div class="ai-message__actions">
        <button class="ai-action-btn ai-action-btn--primary" onclick="insertCode(\`${code.replace(/`/g, '\\`')}\`)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
          Insert to Editor
        </button>
        <button class="ai-action-btn" onclick="copyCode(this.parentElement.previousElementSibling.querySelector('.ai-message__code-content'))">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
      </div>
    `;
  }
  
  if (improvement) {
    html += `
      <div class="optimization-card" style="margin-top: 12px;">
        <div class="optimization-card__header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          Performance Improvement
        </div>
        <div class="optimization-card__metric">
          <span class="metric-label">Query time:</span>
          <span class="metric-before">${improvement.before}</span>
          <span class="metric-arrow">→</span>
          <span class="metric-after">${improvement.after}</span>
        </div>
      </div>
    `;
  }
  
  messageDiv.innerHTML = html;
  elements.aiMessages.appendChild(messageDiv);
  elements.aiMessages.scrollTop = elements.aiMessages.scrollHeight;
}

function getAiResponse(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  
  for (const response of aiResponses) {
    if (response.prompt.some(p => lowerPrompt.includes(p))) {
      return response;
    }
  }
  
  // Default response
  return {
    response: `I understand you're asking about "${prompt}". Here's what I can help with:

• **Optimize** - Make your queries faster
• **Explain** - Understand what a query does
• **Debug** - Find and fix errors
• **Generate** - Write SQL from natural language

Try asking something like "optimize this query" or "find users without orders".`,
    code: null,
    improvement: null
  };
}

// ===== Global Functions =====
window.copyCode = function(element) {
  const text = element.textContent || element.innerText;
  navigator.clipboard.writeText(text);
  
  // Show feedback
  const originalText = element.textContent;
  element.textContent = 'Copied!';
  setTimeout(() => {
    element.textContent = originalText;
  }, 1000);
};

window.insertCode = function(code) {
  elements.codeEditor.innerHTML = highlightSQL(code);
  
  // Flash effect
  elements.codeEditor.style.background = 'rgba(88, 166, 255, 0.1)';
  setTimeout(() => {
    elements.codeEditor.style.background = '';
  }, 300);
};

// ===== Event Handlers =====
function handleRunQuery() {
  if (state.isRunning) return;
  
  state.isRunning = true;
  elements.runQueryBtn.innerHTML = `
    <div class="loading-dots">
      <span></span><span></span><span></span>
    </div>
    Running...
  `;
  
  // Simulate query execution
  setTimeout(() => {
    state.isRunning = false;
    elements.runQueryBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      Run Query
    `;
    
    // Update results count randomly
    const rowCount = Math.floor(Math.random() * 500) + 50;
    const time = (Math.random() * 0.5 + 0.01).toFixed(3);
    document.querySelector('.results-info').innerHTML = `
      <span>${rowCount} rows</span>
      <span style="margin: 0 8px;">•</span>
      <span>${time}s</span>
    `;
  }, 800 + Math.random() * 1200);
}

function handleFormat() {
  const code = elements.codeEditor.textContent;
  const formatted = formatSQL(code);
  elements.codeEditor.innerHTML = highlightSQL(formatted);
}

function handleSendAi() {
  const prompt = elements.aiInput.value.trim();
  if (!prompt) return;
  
  // Add user message
  addAiMessage('user', prompt);
  elements.aiInput.value = '';
  
  // Show loading
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'ai-message ai-message--assistant';
  loadingDiv.innerHTML = `
    <div class="ai-message__label">QueryCraft AI</div>
    <div class="loading-dots">
      <span></span><span></span><span></span>
    </div>
  `;
  elements.aiMessages.appendChild(loadingDiv);
  elements.aiMessages.scrollTop = elements.aiMessages.scrollHeight;
  
  // Simulate AI response
  setTimeout(() => {
    loadingDiv.remove();
    const response = getAiResponse(prompt);
    addAiMessage('assistant', response.response, response.code, response.improvement);
  }, 500 + Math.random() * 1000);
}

// ===== Hint Chips =====
document.querySelectorAll('.ai-hint-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    elements.aiInput.value = chip.dataset.hint;
    elements.aiInput.focus();
  });
});

// ===== Saved Queries =====
document.querySelectorAll('.tree-item').forEach(item => {
  item.addEventListener('click', () => {
    const label = item.querySelector('.tree-item__label')?.textContent;
    
    if (label === 'Monthly Revenue') {
      elements.codeEditor.innerHTML = highlightSQL(sampleQueries.revenue);
    } else if (label === 'Top Products Q4') {
      elements.codeEditor.innerHTML = highlightSQL(sampleQueries.topProducts);
    } else if (label === 'User Retention') {
      elements.codeEditor.innerHTML = highlightSQL(sampleQueries.userRetention);
    }
  });
});

// ===== Schema Search =====
elements.schemaSearch.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.tree-item');
  
  items.forEach(item => {
    const label = item.querySelector('.tree-item__label')?.textContent.toLowerCase() || '';
    if (query && !label.includes(query)) {
      item.style.display = 'none';
    } else {
      item.style.display = '';
    }
  });
});

// ===== Initialize =====
function init() {
  // Bind events
  elements.runQueryBtn.addEventListener('click', handleRunQuery);
  elements.formatBtn.addEventListener('click', handleFormat);
  elements.sendAiBtn.addEventListener('click', handleSendAi);
  
  elements.aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSendAi();
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleRunQuery();
    }
  });
  
  // Insert to editor button
  if (elements.insertToEditor) {
    elements.insertToEditor.addEventListener('click', () => {
      const code = `SELECT DISTINCT u.id, u.name, u.email
FROM users u
INNER JOIN orders o ON u.id = o.user_id
LEFT JOIN reviews r ON u.id = r.user_id
  AND r.created_at >= DATE_TRUNC('month', NOW())
WHERE o.created_at >= DATE_TRUNC('month', NOW())
  AND r.id IS NULL;`;
      insertCode(code);
    });
  }
  
  console.log('🚀 QueryCraft initialized');
}

// Start app
init();
