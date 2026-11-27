/* SpecCheck prototype — interactive demo */
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

/* ---------- tabs ---------- */
$$('.tab').forEach((btn) =>
  btn.addEventListener('click', () => showView(btn.dataset.view))
);
function showView(name) {
  $$('.tab').forEach((t) => t.classList.toggle('active', t.dataset.view === name));
  $$('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- radar ticker: duplicate content for seamless loop ---------- */
const ticker = $('.radar-ticker');
if (ticker) ticker.innerHTML += ticker.innerHTML;

/* ---------- probe sequence ---------- */
const PROBE_RESULTS = [
  { cls: 'fail', state: 'NEWER-THAN-SPEC',
    text: '3/3 post-cutoff events answered with tools off · model knows May 2026 — past the June 2026-spec baseline for your tier routing. Stealth-rollout band: OPEN.' },
  { cls: 'warn', state: 'SCORE 74 / MEDIAN 86',
    text: 'Rubric judge: code 81 · reasoning 70 · long-ctx 77 · creative 72 · tools 79 → 74. Crowd median for CLAUDE PRO today: 86 (n=3,908). You are 12 below the band.' },
  { cls: 'pass', state: 'ALL PRESENT',
    text: 'Opus 5.5 · Sonnet 5.5 · Haiku 5.5 exposed · 5h window active · search opt-out available. Features conform to Spec v11.' },
  { cls: 'warn', state: '1 HIT',
    text: 'Security-topic prompt (direct) served a prior model tier vs benign framing of the same task. Δ capability −14 on the paired run. Both transcripts attached to ledger.' },
];

let running = false;
function setState(el, cls, label) {
  el.className = 'probe-state ' + (cls || '');
  el.textContent = label;
}

async function runProbes() {
  if (running) return;
  running = true;
  const probes = $$('.probe');
  probes.forEach((p) => { p.className = 'probe'; });
  const verdict = $('#auditVerdict');
  verdict.hidden = true;
  const startBtn = $('#startProbesBtn');
  startBtn.textContent = '⏳ PROBING…';
  startBtn.disabled = true;

  for (let i = 0; i < probes.length; i++) {
    const p = probes[i];
    const state = p.querySelector('.probe-state');
    p.classList.add('running');
    setState(state, 'run', 'PROBING');
    await sleep(950);
    p.classList.remove('running');
    p.classList.add(PROBE_RESULTS[i].cls);
    setState(state, PROBE_RESULTS[i].cls, PROBE_RESULTS[i].state);
    p.querySelector('[data-result]').textContent = PROBE_RESULTS[i].text;
    await sleep(450);
  }
  startBtn.disabled = false;
  startBtn.textContent = '↻ RE-RUN PROBES';
  running = false;
  finishAudit();
}

function finishAudit() {
  const score = 74;
  const arc = $('#dialArc');
  const C = 326.7;
  arc.classList.remove('ok', 'warn', 'bad');
  arc.classList.add('bad');
  arc.style.strokeDashoffset = C - (score / 100) * C;
  animateNum($('#dialNum'), score);
  const stamp = $('#verdictStamp');
  stamp.className = 'verdict-stamp red';
  stamp.textContent = 'DEVIATION';
  stamp.style.animation = 'none'; void stamp.offsetWidth; stamp.style.animation = '';
  $('#labVoice').textContent =
    'Your plan says Opus 5.5, June 2026 cutoff. The probe says it knows more than that — and your capability sits 12 below the crowd. You’re in the rollout, and a security prompt got you a prior tier. Now you have the receipt.';
  const v = $('#auditVerdict');
  v.hidden = false;
  $('#auditVoice').textContent =
    '4/4 probes complete · 1 deviation (cutoff), 2 warnings (capability, defensive-route), 1 conform. The ledger entry is stamped. Next action: the receipt.';
  v.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function animateNum(el, to) {
  const t0 = performance.now(), from = 0, dur = 1200;
  function tick(t) {
    const k = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

$('#runAuditBtn').addEventListener('click', () => showView('audit'));
$('#startProbesBtn').addEventListener('click', runProbes);
$('#toReceiptBtn').addEventListener('click', () => showView('receipt'));

/* ---------- crowd bars ---------- */
const CROWD = [
  { lbl: '11-16', med: 87 }, { lbl: '11-17', med: 87 }, { lbl: '11-18', med: 86 },
  { lbl: '11-19', med: 86 }, { lbl: '11-20', med: 86, mine: 74 },
  { lbl: '11-21', med: 85 }, { lbl: '11-22', med: 86 }, { lbl: '11-23', med: 86 },
  { lbl: '11-24', med: 85, mine: 74 }, { lbl: '11-25', med: 86 }, { lbl: '11-26', med: 86 },
  { lbl: '11-27', med: 86, mine: 74 },
];
const barsEl = $('#crowdBars');
if (barsEl) {
  CROWD.forEach((d) => {
    const c = document.createElement('div');
    c.className = 'cbar';
    const bar = document.createElement('div');
    bar.className = 'bar' + (d.mine ? ' mine' : '');
    bar.style.height = '0%';
    const med = document.createElement('span');
    med.className = 'med';
    med.textContent = d.med;
    bar.appendChild(med);
    const lbl = document.createElement('span');
    lbl.className = 'lbl';
    lbl.textContent = d.lbl;
    c.appendChild(bar); c.appendChild(lbl);
    barsEl.appendChild(c);
    requestAnimationFrame(() =>
      setTimeout(() => { bar.style.height = (d.mine ? d.mine : d.med) + '%'; }, 60)
    );
  });
}

/* ---------- appeal tabs ---------- */
const APPEALS = {
  'Support ticket':
`Subject: Claude Pro — delivery deviating from plan (evidence attached)

Your plan page states Opus 5.5, published cutoff June 2026.
Attached: SpecCheck ledger, 5 dated audits (10-19 → 11-27), hash 9f3c…a41e.
- 11-20: capability score dropped 87 → 74 (crowd median that day: 86, n=3,908)
- 11-24: cutoff probe indicates training data past the published cutoff
- 11-27: paired-prompt test: security-topic prompt routed to a prior model tier
Please clarify which model(s) serve Claude Pro accounts and what remedy applies
when delivered quality deviates from the stated plan.`,
  'X post':
`Paid $20/mo for Claude Pro. Two-minute audit (no login, no API — just probes):
• cutoff probe: my model knows more than the published cutoff → I'm in a stealth rollout
• capability: 74 vs crowd median 86 (n=3,908)
• security-topic prompt auto-routed to a prior tier
Receipt + ledger attached. I'm not asking for your opinion. I'm asking for the spec you're actually serving.`,
  'Compensation ask':
`Re: my allowance / plan value — correction impact

I was affected by the GPT-6.2 Astra billing correction announced 11-26 (usage
depleting ~40% faster than billed at launch). A one-time meter reset is not
compensation for a rate that changed retroactively.

Request: usage credit covering the corrected-rate overage for the correction
window (11-xx → present), per my ledger (hash 9f3c…a41e), or a plan
adjustment back to the rate I was billed.

If unresolved in 7 days: I will file with my card issuer as a billing dispute
and note the outcome in the public Cutoff Registry.`,
};
$$('.atab').forEach((b, i) =>
  b.addEventListener('click', () => {
    $$('.atab').forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    const key = Object.keys(APPEALS)[i];
    $('#appealBody').textContent = APPEALS[key];
  })
);

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
