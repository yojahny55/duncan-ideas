#!/usr/bin/env python3
"""Build the NameDrop prototype HTML."""

path = "/home/yojahny/clawd/projects/duncan-ideas/ideas/2026-06-09-namedrop-name-rememberer/prototype/index.html"

# We'll build the file from the existing CSS + new body content
# First read the CSS from the existing file
with open(path) as f:
    old = f.read()

# Extract just the CSS (between <style> and </style>)
css_start = old.index("<style>") + 7
css_end = old.index("</style>")
css = old[css_start:css_end]

html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NameDrop — Your Social Memory, Supercharged</title>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>{css}</style>
</head>
<body>
<nav>
  <div class="logo"><div class="logo-icon">🧠</div> NameDrop</div>
  <div class="nav-links">
    <a href="#features">Features</a>
    <a href="#how">How It Works</a>
    <a href="#demo">Demo</a>
    <a href="#pricing">Pricing</a>
    <button class="btn-primary">Get Early Access</button>
  </div>
</nav>

<section class="hero">
  <div class="hero-glow hero-glow-1"></div>
  <div class="hero-glow hero-glow-2"></div>
  <div class="container"><div class="hero-content">
    <div class="hero-text">
      <h1>Never forget a <span>name</span> again.</h1>
      <p>Your social memory, supercharged. Capture names, faces, and context in 15 seconds. Get briefed before every encounter.</p>
      <div class="hero-cta">
        <button class="btn-primary">Get Early Access</button>
        <button class="btn-secondary" onclick="document.getElementById('how').scrollIntoView({{behavior:'smooth'}})">See How It Works</button>
      </div>
    </div>
    <div class="hero-mockup"><div class="phone-frame">
      <div class="phone-notch"></div>
      <div class="phone-screen">
        <div class="screen-header"><small>Tonight at 7 PM</small><h3>Company BBQ 🍔</h3></div>
        <div class="person-card"><div class="person-avatar" style="background:var(--accent-dim)">👩🏽</div><div class="person-info"><h4>Sarah Chen</h4><p>Marketing at Adobe · Met Mar 14</p></div></div>
        <div class="person-card"><div class="person-avatar" style="background:var(--teal-dim)">👨🏼</div><div class="person-info"><h4>Marcus Rivera</h4><p>Engineering lead · Kids same age</p></div></div>
        <div class="person-card"><div class="person-avatar" style="background:var(--coral-dim)">👩🏻</div><div class="person-info"><h4>Emma Walsh</h4><p>HR director · Loves hiking</p></div></div>
        <div class="hint-bubble">💡 <strong>Hook:</strong> Ask Sarah about her golden retriever's surgery recovery.</div>
      </div>
    </div></div>
  </div></div>
</section>

<div class="stats-bar"><div class="container"><div class="stats-grid">
  <div class="stat-item fade-up"><h3>85%</h3><p>of adults are bad with names</p></div>
  <div class="stat-item fade-up"><h3>6.6M</h3><p>Americans have face blindness</p></div>
  <div class="stat-item fade-up"><h3>15 sec</h3><p>to capture a new person</p></div>
  <div class="stat-item fade-up"><h3>30 sec</h3><p>daily review to never forget</p></div>
</div></div></div>

<section id="features"><div class="container">
  <div class="fade-up">
    <div class="section-label">Features</div>
    <h2 class="section-title">Everything you need to remember everyone.</h2>
    <p class="section-desc">Purpose-built for the universal problem of forgetting people. Not a contacts app. Not a CRM. A social memory engine.</p>
  </div>
  <div class="features-grid">
    <div class="feature-card fade-up"><div class="feature-icon" style="background:var(--accent-dim)">⚡</div><h3>15-Second Capture</h3><p>Name, face, context, 3 key details. Voice-first for hands-free logging right after a handshake.</p></div>
    <div class="feature-card fade-up"><div class="feature-icon" style="background:var(--teal-dim)">📅</div><h3>Pre-Event Briefing</h3><p>Calendar-aware. Walking into a PTA meeting? See every parent you've met with their kids' names.</p></div>
    <div class="feature-card fade-up"><div class="feature-icon" style="background:var(--green-dim)">🃏</div><h3>Smart Flashcards</h3><p>Spaced repetition for names and faces. 30 seconds a day keeps the embarrassment away.</p></div>
    <div class="feature-card fade-up"><div class="feature-icon" style="background:var(--coral-dim)">🔍</div><h3>Search by Context</h3><p>"Guy from the BBQ with the golden retriever" — instantly found. No name needed.</p></div>
    <div class="feature-card fade-up"><div class="feature-icon" style="background:var(--accent-dim)">📸</div><h3>Face Match</h3><p>Discreetly snap a photo — NameDrop identifies them. On-device, always private.</p></div>
    <div class="feature-card fade-up"><div class="feature-icon" style="background:var(--teal-dim)">💡</div><h3>Conversation Hooks</h3><p>"Ask about their Japan trip." "Their dog had surgery." Never run out of things to say.</p></div>
  </div>
</div></section>

<section id="how"><div class="container">
  <div class="fade-up" style="text-align:center">
    <div class="section-label">How It Works</div>
    <h2 class="section-title">Three steps to a perfect memory.</h2>
    <p class="section-desc" style="margin:16px auto 48px">Designed for the real world — at parties, conferences, school events, or the coffee shop.</p>
  </div>
  <div class="steps">
    <div class="step fade-up"><div class="step-number">1</div><h3>Meet &amp; Capture</h3><p>After meeting someone, log their name, face, where you met, and 2-3 memorable details. Takes 15 seconds.</p></div>
    <div class="step fade-up"><div class="step-number">2</div><h3>Review &amp; Retain</h3><p>Spend 30 seconds a day with smart flashcards. Spaced repetition moves names into long-term memory.</p></div>
    <div class="step fade-up"><div class="step-number">3</div><h3>Brief &amp; Connect</h3><p>Before any event, get a briefing on who you'll see, conversation hooks, and context. Walk in confident.</p></div>
  </div>
</div></section>

<section id="demo"><div class="container">
  <div class="fade-up" style="text-align:center"><div class="section-label">Interactive Demo</div><h2 class="section-title">Try it yourself.</h2></div>
  <div class="demo-section fade-up">
    <div class="demo-tabs">
      <button class="demo-tab active" data-tab="capture">⚡ Quick Capture</button>
      <button class="demo-tab" data-tab="briefing">📅 Event Briefing</button>
      <button class="demo-tab" data-tab="flashcard">🃏 Flashcard Review</button>
    </div>

    <div class="demo-panel active" id="panel-capture">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start">
        <div>
          <div class="form-row"><label>Name</label><input class="form-input" placeholder="e.g. Sarah Chen" id="capture-name"></div>
          <div class="form-row"><label>Where you met</label><input class="form-input" placeholder="e.g. Company BBQ, March 2026" id="capture-where"></div>
          <div class="form-row"><label>Key details</label><div class="detail-tags">
            <span class="detail-tag" onclick="toggleTag(this)">🐕 Has a dog</span>
            <span class="detail-tag" onclick="toggleTag(this)">📊 Marketing</span>
            <span class="detail-tag" onclick="toggleTag(this)">👶 Has kids</span>
            <span class="detail-tag" onclick="toggleTag(this)">🥾 Hiking</span>
            <span class="detail-tag" onclick="toggleTag(this)">🌴 California</span>
            <span class="detail-tag" onclick="toggleTag(this)">☕ Coffee</span>
          </div></div>
          <div class="form-row"><label>Conversation hook</label><input class="form-input" placeholder="e.g. Ask about her golden retriever" id="capture-hook"></div>
          <button class="btn-primary" style="margin-top:8px" onclick="savePerson()">Save Person ⚡</button>
        </div>
        <div id="capture-preview" style="display:flex;align-items:center;justify-content:center;min-height:300px">
          <div style="text-align:center;color:var(--text-dim)"><p style="font-size:3rem;margin-bottom:12px">👤</p><p>Fill in the form to see a preview</p></div>
        </div>
      </div>
    </div>

    <div class="demo-panel" id="panel-briefing">
      <div class="briefing-card">
        <div class="briefing-header"><div><h3>🏢 Team Standup — Tomorrow 9 AM</h3></div><span class="briefing-badge">4 people</span></div>
        <div class="briefing-people">
          <div class="b-person"><div class="b-avatar" style="background:var(--accent-dim)">👨🏼</div><div class="b-info"><h4>Marcus Rivera</h4><p>Engineering lead · Last chatted May 28</p><div class="hook">💡 Ask about his daughter's graduation</div></div></div>
          <div class="b-person"><div class="b-avatar" style="background:var(--teal-dim)">👩🏽</div><div class="b-info"><h4>Sarah Chen</h4><p>Marketing · Golden retriever owner</p><div class="hook">💡 Check in on dog's surgery recovery</div></div></div>
          <div class="b-person"><div class="b-avatar" style="background:var(--coral-dim)">👩🏻</div><div class="b-info"><h4>Emma Walsh</h4><p>HR director · Avid hiker</p><div class="hook">💡 She went to Patagonia — ask about it!</div></div></div>
          <div class="b-person"><div class="b-avatar" style="background:var(--green-dim)">👨🏻</div><div class="b-info"><h4>James Park</h4><p>Product · New to team (Jun 2)</p><div class="hook">💡 Intro yourself — he's new!</div></div></div>
        </div>
      </div>
    </div>

    <div class="demo-panel" id="panel-flashcard">
      <div class="flashcard-container">
        <div class="flashcard" id="flashcard" onclick="this.classList.toggle('flipped')">
          <div class="flashcard-inner">
            <div class="flashcard-face flashcard-front">
              <div class="fc-avatar">👩🏽</div>
              <p>Who is this?</p>
              <small>Tap to reveal</small>
            </div>
            <div class="flashcard-face flashcard-back">
              <h3>Sarah Chen</h3>
              <div class="detail-row"><span>Met at</span><span>Company BBQ, Mar 2026</span></div>
              <div class="detail-row"><span>Role</span><span>Marketing at Adobe</span></div>
              <div class="detail-row"><span>Pet</span><span>Golden retriever (Biscuit)</span></div>
              <div class="detail-row"><span>Hook</span><span>Ask about Biscuit's surgery</span></div>
            </div>
          </div>
        </div>
        <div class="fc-controls">
          <button class="fc-btn skip" onclick="document.getElementById('flashcard').classList.remove('flipped')">😕 Still Learning</button>
          <button class="fc-btn know" onclick="document.getElementById('flashcard').classList.remove('flipped')">✓ Got It!</button>
        </div>
      </div>
    </div>
  </div>
</div></section>

<section id="pricing"><div class="container">
  <div class="fade-up" style="text-align:center">
    <div class="section-label">Pricing</div>
    <h2 class="section-title">Start free. Upgrade when you're hooked.</h2>
  </div>
  <div class="pricing-grid">
    <div class="price-card fade-up">
      <h3>Free</h3>
      <div class="price">$0<small>/mo</small></div>
      <div class="price-sub">Perfect for trying it out</div>
      <ul class="price-features">
        <li>50 people</li>
        <li>Manual capture</li>
        <li>Context search</li>
        <li>Basic flashcards</li>
      </ul>
      <button class="btn-secondary">Get Started</button>
    </div>
    <div class="price-card featured fade-up">
      <h3>Pro</h3>
      <div class="price">$3.99<small>/mo</small></div>
      <div class="price-sub">For active networkers</div>
      <ul class="price-features">
        <li>Unlimited people</li>
        <li>Face match (on-device)</li>
        <li>Calendar briefings</li>
        <li>Conversation hooks</li>
        <li>LinkedIn import</li>
      </ul>
      <button class="btn-primary">Get Pro</button>
    </div>
    <div class="price-card fade-up">
      <h3>Family</h3>
      <div class="price">$6.99<small>/mo</small></div>
      <div class="price-sub">Shared social memory</div>
      <ul class="price-features">
        <li>Everything in Pro</li>
        <li>2 family members</li>
        <li>Shared groups</li>
        <li>Partner sharing</li>
        <li>Event scan photos</li>
      </ul>
      <button class="btn-secondary">Get Family</button>
    </div>
  </div>
</div></section>

<div class="cta-section">
  <div class="container">
    <h2>Stop pretending you remember.</h2>
    <p>85% of us are bad with names. Join the ones who do something about it.</p>
    <button class="btn-primary" style="font-size:1.1rem;padding:14px 36px">Get Early Access</button>
  </div>
</div>

<footer>
  <div class="container">
    <p>🧠 NameDrop — Your social memory, supercharged. &copy; 2026</p>
  </div>
</footer>

<script>
// Tab switching
document.querySelectorAll('.demo-tab').forEach(tab => {{
  tab.addEventListener('click', () => {{
    document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.demo-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
  }});
}});

// Detail tag toggle
function toggleTag(el) {{
  el.classList.toggle('selected');
  updatePreview();
}}

// Live preview
function updatePreview() {{
  const name = document.getElementById('capture-name').value || 'Name';
  const where = document.getElementById('capture-where').value || 'Where you met';
  const hook = document.getElementById('capture-hook').value;
  const tags = [...document.querySelectorAll('.detail-tag.selected')].map(t => t.textContent.trim());

  const preview = document.getElementById('capture-preview');
  if (!name || name === 'Name') {{
    preview.innerHTML = '<div style="text-align:center;color:var(--text-dim)"><p style="font-size:3rem;margin-bottom:12px">👤</p><p>Fill in the form to see a preview</p></div>';
    return;
  }}

  let html = '<div style="background:var(--surface-2);border-radius:var(--radius);padding:24px;border:1px solid var(--border);width:100%">';
  html += '<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">';
  html += '<div style="width:56px;height:56px;border-radius:50%;background:var(--accent-dim);display:flex;align-items:center;justify-content:center;font-size:1.8rem">👤</div>';
  html += '<div><h3 style="font-size:1.2rem">' + name + '</h3><p style="color:var(--text-dim);font-size:.85rem">' + where + '</p></div>';
  html += '</div>';
  if (tags.length) {{
    html += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">';
    tags.forEach(t => html += '<span style="padding:4px 10px;background:var(--accent-dim);border-radius:100px;font-size:.75rem;color:var(--accent)">' + t + '</span>');
    html += '</div>';
  }}
  if (hook) {{
    html += '<div class="hint-bubble">💡 ' + hook + '</div>';
  }}
  html += '</div>';
  preview.innerHTML = html;
}}

function savePerson() {{
  const name = document.getElementById('capture-name').value;
  if (!name) return;
  const preview = document.getElementById('capture-preview');
  preview.innerHTML = '<div class="success-msg" style="width:100%"><p style="font-size:1.5rem;margin-bottom:8px">✅ Saved!</p><p style="color:var(--text-dim)">' + name + ' added to your memory bank.</p><p style="color:var(--text-dim);font-size:.8rem;margin-top:8px">You\'ll see a flashcard for ' + name + ' in your next review.</p></div>';
}}

// Listen for input changes
['capture-name', 'capture-where', 'capture-hook'].forEach(id => {{
  document.getElementById(id).addEventListener('input', updatePreview);
}});

// Scroll animations
const observer = new IntersectionObserver((entries) => {{
  entries.forEach(entry => {{
    if (entry.isIntersecting) {{
      entry.target.classList.add('visible');
    }}
  }});
}}, {{ threshold: 0.1 }});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
</script>
</body>
</html>"""

with open(path, "w") as f:
    f.write(html)

print(f"Written {len(html)} bytes to {path}")
