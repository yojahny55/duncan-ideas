/* ShelfSure — prototype interactions */

/* ---------- live clock ---------- */
function tickClock() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  document.getElementById("clock").textContent =
    `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}
tickClock();
setInterval(tickClock, 1000);

/* ---------- hold countdown ---------- */
const holdDeadline = (() => {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  d.setHours(20, 0, 0, 0);
  return d.getTime();
})();
const holdStart = Date.now();

function fmt(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const D = Math.floor(s / 86400);
  const H = Math.floor((s % 86400) / 3600);
  const M = Math.floor((s % 3600) / 60);
  const S = s % 60;
  const p = (n) => String(n).padStart(2, "0");
  return `${D}D : ${p(H)}H : ${p(M)}M : ${p(S)}S`;
}

function tickHold() {
  const left = holdDeadline - Date.now();
  document.getElementById("holdClock").textContent = fmt(left);
  const total = holdDeadline - holdStart;
  const frac = left / total;
  const seg = document.getElementById("holdseg");
  const tag = document.getElementById("holdtag");
  if (frac > 0.5) { tag.textContent = "D-2 SAFE"; tag.style.background = "rgba(63,185,80,.25)"; seg.style.opacity = .55; }
  else if (frac > 0.2) { tag.textContent = "D-1 · ALARM SET"; tag.style.background = "rgba(255,180,84,.3)"; seg.style.opacity = .8; }
  else { tag.textContent = "DANGER · 8:00 PM"; tag.style.background = "rgba(229,72,77,.28)"; seg.style.opacity = 1; }
}
tickHold();
setInterval(tickHold, 1000);

document.getElementById("extendBtn").addEventListener("click", () => {
  toast("EXTEND REQUEST SENT · STORE USUALLY GRANTS +1 DAY BEFORE CANCEL · D-0 ALARM RESET");
});

/* ---------- toast ---------- */
let toastTimer;
function toast(msg, cls) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast show" + (cls ? " " + cls : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.className = "toast"), 3400);
}

/* ---------- ready claim ---------- */
const verdictEl = document.getElementById("verdictWord");
const verdictSub = document.getElementById("verdictSub");
const oddsFill = document.getElementById("oddsFill");

function setVerdict(word, cls, sub, pct) {
  verdictEl.textContent = word;
  verdictEl.className = "verdict-word" + (cls ? " " + cls : "");
  verdictSub.textContent = sub;
  if (pct != null) oddsFill.style.width = pct + "%";
}

document.getElementById("reportReadyBtn").addEventListener("click", () => {
  setVerdict("GO", "go", "Reported in. Best Buy #118 truth now 73% (n=814). The receipt says PICKED UP — that's the only confetti we print.", 73);
  const r = document.getElementById("receipt");
  r.querySelectorAll(".receipt-stamp").forEach((s) => {
    s.textContent = "PICKED UP ✓";
    s.style.borderColor = "#2F7D4F";
    s.style.color = "#2F7D4F";
  });
  r.classList.remove("receipt-stamped");
  void r.offsetWidth;
  r.classList.add("receipt-stamped");
  toast("COUNTER REPORT LOGGED · READY CLAIM TRUE · NO RECEIPT FILED", "green");
});

document.getElementById("reportNotReadyBtn").addEventListener("click", () => {
  setVerdict("DON'T GO", "dont", "Filed. Don't drive yet — the queue is real, not yours. I'll push the moment the counter truth flips above 80% or 10 minutes have passed.", 69);
  const r = document.getElementById("receipt");
  r.querySelectorAll(".receipt-stamp").forEach((s) => {
    s.textContent = "FALSE READY";
    s.style.borderColor = "";
    s.style.color = "";
  });
  r.classList.remove("receipt-stamped");
  void r.offsetWidth;
  r.classList.add("receipt-stamped");
  toast("FALSE-READY RECEIPT #FR-2214-0882 STAMPED · 39 MIN EARLY CLAIM", "red");
  document.getElementById("receiptWrap").scrollIntoView({ behavior: "smooth", block: "center" });
});

/* ---------- slot board ---------- */
const slots = [
  { day: "FRI NOV 27", time: "10:00–11:00", state: "filled" },
  { day: "FRI NOV 27", time: "11:00–12:00", state: "filled" },
  { day: "FRI NOV 27", time: "12:00–13:00", state: "open" },
  { day: "FRI NOV 27", time: "13:00–14:00", state: "filled" },
  { day: "FRI NOV 27", time: "14:00–15:00", state: "open" },
  { day: "FRI NOV 27", time: "15:00–16:00", state: "yours" },
  { day: "FRI NOV 27", time: "16:00–17:00", state: "filled" },
  { day: "FRI NOV 27", time: "17:00–18:00", state: "open" },
  { day: "SAT NOV 28", time: "10:00–11:00", state: "open" },
  { day: "SAT NOV 28", time: "11:00–12:00", state: "filled" },
  { day: "SAT NOV 28", time: "12:00–13:00", state: "open" },
  { day: "SAT NOV 28", time: "13:00–14:00", state: "open" },
];
const stateLabel = { filled: "FILLED", open: "OPEN — TAP TO GRAB", yours: "● YOURS · CONFIRMED 14:07" };
const grid = document.getElementById("slotGrid");
slots.forEach((s) => {
  const el = document.createElement("div");
  el.className = "slot " + s.state;
  el.innerHTML = `<span class="s-day">${s.day}</span><span class="s-time">${s.time}</span><span class="s-state">${stateLabel[s.state]}</span>`;
  if (s.state === "open") {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      el.className = "slot yours";
      el.querySelector(".s-state").textContent = "● YOURS · CONFIRMED NOW";
      toast("SLOT LOCKED · " + s.time + " · PUSH SET FOR T-2H", "green");
    });
  }
  grid.appendChild(el);
});

/* ticker scroll */
const ticker = document.getElementById("slotTicker");
let tickI = 0;
const tickers = [
  "SLOTS OPENED 14:02 · BEST BUY #118 · FRI 15:00–16:00 · 3 WINDOWS LEFT",
  "CROWD CHECK-IN · ULTA #442 · 2-HOUR QUEUE REPORTED 15:18 · DON'T-GO FLAGGED",
  "SILENT CANCEL AVOIDED · BBW #2214 · ORDER #88107 SAVED AT D-1",
];
setInterval(() => {
  tickI = (tickI + 1) % tickers.length;
  ticker.style.opacity = 0;
  setTimeout(() => {
    ticker.textContent = tickers[tickI];
    ticker.style.opacity = 1;
  }, 200);
}, 4200);
ticker.style.transition = "opacity .2s ease";

/* ---------- claim letter ---------- */
document.getElementById("claimBtn").addEventListener("click", () => {
  const l = document.getElementById("claimLetter");
  l.classList.toggle("show");
  if (l.classList.contains("show")) toast("CLAIM DRAFTED · YOU REVIEW · YOU SEND");
});
document.getElementById("shareBtn").addEventListener("click", () => {
  toast("RECEIPT IMAGE COPIED · PASTE IT ANYWHERE THE STORE CAN SEE IT");
});

/* ---------- ready truth index ---------- */
const stores = [
  { name: "Apple Store · Tampa", n: "n=2,418", pct: 96, c: "#3FB950" },
  { name: "Target #114", n: "n=1,902", pct: 88, c: "#3FB950" },
  { name: "Best Buy #118 · Plano", n: "n=812", pct: 71, c: "#FFB454" },
  { name: "Bath & Body Works #2214", n: "n=341", pct: 58, c: "#FFB454" },
  { name: "Ulta #442", n: "n=298", pct: 41, c: "#E5484D" },
  { name: "GameStop #0931", n: "n=122 · pending-n", pct: 34, c: "#E5484D" },
];
const chart = document.getElementById("indexChart");
stores.forEach((s) => {
  const row = document.createElement("div");
  row.className = "idx-row";
  row.innerHTML = `
    <div class="idx-name">${s.name}<small>${s.n} · LAST 28D</small></div>
    <div class="idx-track"><div class="idx-fill" data-w="${s.pct}" style="background:${s.c}"></div></div>
    <div class="idx-val" style="color:${s.c}">${s.pct}% TRUE</div>`;
  chart.appendChild(row);
});
setTimeout(() => {
  document.querySelectorAll(".idx-fill").forEach((f) => (f.style.width = f.dataset.w + "%"));
}, 300);
