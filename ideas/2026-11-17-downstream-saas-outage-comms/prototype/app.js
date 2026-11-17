/* Downstream — prototype behavior (simulated NOC, all data is mock) */

/* ---------- tabs ---------- */
const tabBtns = document.querySelectorAll('.tabbtn');
const tabs = document.querySelectorAll('.tab');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ---------- audience / tone chips ---------- */
document.querySelectorAll('.chip-row .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip-row .chip').forEach(c => c.classList.remove('chip-on'));
    chip.classList.add('chip-on');
    const audience = chip.textContent.trim();
    const counts = { 'Clients': 12, 'Partners': 3, 'Internal': 7 };
    const btn = document.getElementById('sendBtn');
    if (!btn.disabled) btn.innerHTML = 'Review &amp; Send · ' + (counts[audience] || 1) + ' ' + audience;
  });
});
document.querySelectorAll('.tone-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('.tone-opt').forEach(o => o.classList.remove('on'));
    opt.classList.add('on');
  });
});

/* ---------- live incident clock (simulated ticking) ---------- */
let downSeconds = 4 * 3600 + 37 * 60; // 4h 37m
const clock = document.getElementById('incidentClock');
const svc1 = document.getElementById('svcDown1');
const svc2 = document.getElementById('svcDown2');

function fmtHMS(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h + 'h ' + String(m).padStart(2, '0') + 'm ' + String(sec).padStart(2, '0') + 's';
}
function fmtHM(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
  return h + 'h ' + String(m).padStart(2, '0') + 'm';
}
setInterval(() => {
  downSeconds++;
  clock.textContent = 'DOWN ' + fmtHMS(downSeconds);
  svc1.textContent = fmtHM(downSeconds);
  svc2.textContent = fmtHM(downSeconds - 6 * 60);
}, 1000);

/* ---------- exposure ticker ---------- */
let exposure = 8420;
const exposureTotal = document.getElementById('exposureTotal');
const ledgerNum = document.getElementById('ledgerNum');
const meterFill = document.getElementById('meterFill');
function money(n) { return '$' + n.toLocaleString('en-US'); }
setInterval(() => {
  exposure += 27; // ~$3.1K/hr
  exposureTotal.textContent = money(exposure);
  ledgerNum.textContent = money(exposure);
  const pct = Math.min(96, 34 + downSeconds / 900);
  meterFill.style.width = pct + '%';
  document.querySelector('.meter-tick').style.left = pct + '%';
}, 30000);

/* ---------- ledger chips ---------- */
const ledgerList = document.getElementById('ledgerList');
const chipBank = document.querySelector('.chip-bank');
function nowStamp() {
  const d = new Date();
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}
chipBank.addEventListener('click', e => {
  const chip = e.target.closest('.log-chip');
  if (!chip) return;
  const val = parseInt(chip.dataset.val, 10);
  const note = chip.dataset.note;
  exposure += val;
  const li = document.createElement('li');
  li.className = 'flash';
  li.innerHTML = '<span class="mono ledger-t">' + nowStamp() + '</span> ' +
    (note === 'custom' ? 'Custom entry' : note.replace(/^\w/, c => c.toUpperCase())) +
    ' <span class="mono ledger-v">−' + money(val).replace('$', '$') + '</span>';
  ledgerList.insertBefore(li, ledgerList.firstChild);
  exposureTotal.textContent = money(exposure);
  ledgerNum.textContent = money(exposure);
});

/* ---------- broadcast send ---------- */
const sendBtn = document.getElementById('sendBtn');
const sendStamp = document.getElementById('sendStamp');
sendBtn.addEventListener('click', () => {
  sendBtn.disabled = true;
  sendBtn.textContent = 'Logged — sent from your mailbox';
  sendStamp.classList.add('show');
  document.querySelector('.paper-stamp').textContent = 'SENT 14:32';
});

/* ---------- SLA claim file ---------- */
const fileBtn = document.getElementById('fileBtn');
const claimStamp = document.getElementById('claimStamp');
fileBtn.addEventListener('click', () => {
  fileBtn.disabled = true;
  fileBtn.textContent = 'Claim draft sent to your admin center';
  claimStamp.classList.add('show');
});
