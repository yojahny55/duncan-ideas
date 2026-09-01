// RugRadar prototype — simulated data (based on real Aug 27–29, 2026 events)

const DEPS = [
  {
    name: "Cursor",
    sub: "AI code editor · routes OpenAI + Anthropic",
    score: 91,
    chip: { label: "CONFIRMED — access ending", type: "confirmed" },
    factors: [
      { n: "Ownership", v: 88, note: "acquired by SpaceX" },
      { n: "Access routing", v: 96, note: "OpenAI cutting off" },
      { n: "Policy churn", v: 80, note: "2 shocks in 5 days" },
      { n: "Health signals", v: 62, note: "team exodus risk" },
      { n: "Exit friction", v: 78, note: "settings + muscle memory" },
    ],
  },
  {
    name: "OpenAI GPT-5",
    sub: "Model API · behind Cursor + Codex",
    score: 74,
    chip: { label: "CONFIRMED — Cursor cutoff", type: "confirmed" },
    factors: [
      { n: "Ownership", v: 30, note: "independent" },
      { n: "Access routing", v: 40, note: "direct access ok" },
      { n: "Policy churn", v: 92, note: "partnership revocations" },
      { n: "Health signals", v: 70, note: "rate-limit resets" },
      { n: "Exit friction", v: 85, note: "prompt + eval lock-in" },
    ],
  },
  {
    name: "Hugging Face",
    sub: "Model hub + datasets + CI",
    score: 55,
    chip: { label: "CREDIBLE — Nvidia acquisition", type: "rumor" },
    factors: [
      { n: "Ownership", v: 82, note: "Nvidia $12.9B deal" },
      { n: "Access routing", v: 25, note: "open weights mirrorable" },
      { n: "Policy churn", v: 40, note: "terms stable so far" },
      { n: "Health signals", v: 55, note: "post-acquisition TBD" },
      { n: "Exit friction", v: 45, note: "datasets exportable" },
    ],
  },
  {
    name: "Claude / Anthropic",
    sub: "Model API · Claude Code",
    score: 34,
    chip: { label: "ON WATCH", type: "rumor" },
    factors: [
      { n: "Ownership", v: 30, note: "independent" },
      { n: "Access routing", v: 28, note: "direct + router options" },
      { n: "Policy churn", v: 38, note: "pricing stable" },
      { n: "Health signals", v: 30, note: "strong" },
      { n: "Exit friction", v: 44, note: "context lock-in" },
    ],
  },
  {
    name: "Vercel",
    sub: "Hosting + edge",
    score: 22,
    chip: { label: "STABLE", type: "stable" },
    factors: [
      { n: "Ownership", v: 20, note: "independent" },
      { n: "Access routing", v: 15, note: "multi-runtime" },
      { n: "Policy churn", v: 30, note: "pricing bumps" },
      { n: "Health signals", v: 18, note: "healthy" },
      { n: "Exit friction", v: 28, note: "Next.js coupling" },
    ],
  },
  {
    name: "GitHub Actions",
    sub: "CI/CD",
    score: 18,
    chip: { label: "STABLE", type: "stable" },
    factors: [
      { n: "Ownership", v: 35, note: "Microsoft" },
      { n: "Access routing", v: 10, note: "self-hostable" },
      { n: "Policy churn", v: 12, note: "rare" },
      { n: "Health signals", v: 10, note: "healthy" },
      { n: "Exit friction", v: 22, note: "portable YAML" },
    ],
  },
];

const ALERTS = [
  {
    conf: "confirmed", date: "2026-08-29",
    title: "OpenAI ends Cursor model access",
    body: "Following Cursor's SpaceX acquisition, OpenAI announced it will block Cursor users from accessing OpenAI models in three months. Cursor CEO confirmed the cutoff.",
    exposure: "EXPOSURE: Cursor → OpenAI is your primary coding path. 90-day migration window started Aug 29.",
  },
  {
    conf: "credible", date: "2026-08-27",
    title: "Nvidia to acquire Hugging Face for $12.9B",
    body: "The Information reports the deal is done. Open-source ML's neutral hub moves under the dominant hardware vendor. Terms and model access policies may shift post-close.",
    exposure: "EXPOSURE: 14 datasets + 3 fine-tunes hosted on HF. Export pipeline recommended as a precaution.",
  },
  {
    conf: "rumor", date: "2026-08-28",
    title: "Grok Bot shopping goes live; agentic spend rails expanding",
    body: "xAI's Grok Bot can now complete purchases via Stripe rails. New attack surface for agent-initiated spend — oversight tooling lagging.",
    exposure: "EXPOSURE: Low for your stack, but team agents with purchase scope should get spend caps.",
  },
];

const PLAYBOOKS = [
  {
    title: "Cursor → exit plan",
    meta: "effort ~1–2 days · cost delta −$20/mo possible",
    alts: [
      { name: "Claude Code", effort: "~4 hrs setup", note: "Direct Anthropic models, no middleman. Closest agentic-loop feel." },
      { name: "VS Code + Copilot", effort: "~2 hrs", note: "Keep OpenAI models via Copilot. Lowest muscle-memory change." },
      { name: "OpenCode", effort: "~1 day", note: "Open-source, model-agnostic, no single-vendor lock. Future-proof." },
    ],
    steps: [
      "Export Cursor rules / .cursorrules to portable format",
      "Recreate key prompts & snippets in target tool",
      "Test one full feature branch end-to-end before switching",
      "Set up a model router (OpenRouter) so no single model is a hard dep",
      "Cancel Cursor seat after 1 week of parallel use",
    ],
  },
  {
    title: "Hugging Face → hedge plan",
    meta: "effort ~4 hrs · cost $0",
    alts: [
      { name: "Self-hosted registry", effort: "~2 hrs", note: "Mirror critical weights to S3/R2. Removes single point of failure." },
      { name: "GitHub Models", effort: "~1 hr", note: "Alternate hosting for inference of key models." },
    ],
    steps: [
      "List datasets with no local copy",
      "Export top 5 most-used datasets",
      "Snapshot fine-tune configs + adapter weights",
    ],
  },
];

function scoreClass(s) { return s >= 65 ? "high" : s >= 40 ? "mid" : "low"; }

function renderStack() {
  const grid = document.getElementById("depGrid");
  grid.innerHTML = DEPS.map((d, i) => `
    <div class="card" style="animation-delay:${i * 0.06}s">
      <div class="card-head">
        <div>
          <div class="card-name">${d.name}</div>
          <div class="card-sub">${d.sub}</div>
        </div>
        <div class="score ${scoreClass(d.score)}" title="Rug Score">${d.score}</div>
      </div>
      <div class="factors">
        ${d.factors.map(f => `
          <div class="factor">
            <span class="factor-name">${f.n}</span>
            <div class="factor-bar"><div class="factor-fill" style="width:${f.v}%;background:${f.v >= 65 ? "var(--red)" : f.v >= 40 ? "var(--amber)" : "var(--green)"}"></div></div>
          </div>`).join("")}
      </div>
      <div class="card-foot">
        <span class="chip ${d.chip.type}">${d.chip.label}</span>
        ${d.score >= 55 ? `<button class="link-btn" onclick="switchView('playbooks')">Exit plan →</button>` : ""}
      </div>
    </div>`).join("");

  document.getElementById("depCount").textContent = DEPS.length;
  document.getElementById("highRisk").textContent = DEPS.filter(d => d.score >= 65).length;
  document.getElementById("watchCount").textContent = DEPS.filter(d => d.chip.type === "rumor").length;
  const avg = Math.round(DEPS.reduce((a, d) => a + d.score, 0) / DEPS.length);
  const avgEl = document.getElementById("avgScore");
  avgEl.textContent = avg;
  avgEl.className = "stat-num " + (avg >= 65 ? "rug" : avg >= 40 ? "amber" : "ok");
}

function renderAlerts() {
  document.getElementById("alertFeed").innerHTML = ALERTS.map(a => `
    <div class="alert-item c-${a.conf}">
      <div class="alert-top">
        <span class="conf ${a.conf}">${a.conf}</span>
        <span class="alert-date">${a.date}</span>
      </div>
      <div class="alert-title">${a.title}</div>
      <div class="alert-body">${a.body}</div>
      <div class="alert-exposure">${a.exposure}</div>
    </div>`).join("");
}

function renderPlaybooks() {
  document.getElementById("playbookList").innerHTML = PLAYBOOKS.map(p => `
    <div class="playbook">
      <div class="playbook-head">
        <div class="playbook-title">${p.title}</div>
        <div class="playbook-meta">${p.meta}</div>
      </div>
      ${p.alts.map(a => `
        <div class="alt">
          <span class="alt-name">${a.name}</span>
          <span class="alt-effort">${a.effort}</span>
          <span class="alt-note">${a.note}</span>
        </div>`).join("")}
      <div class="checklist">
        ${p.steps.map(s => `<label><input type="checkbox"><span>${s}</span></label>`).join("")}
      </div>
    </div>`).join("");
}

function switchView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  const tab = document.querySelector(`.tab[data-view="${name}"]`);
  if (tab) tab.classList.add("active");
}

document.querySelectorAll(".tab").forEach(t => {
  t.addEventListener("click", () => switchView(t.dataset.view));
});

document.getElementById("scanBtn").addEventListener("click", function () {
  this.disabled = true; this.textContent = "Scanning…";
  setTimeout(() => {
    renderStack();
    this.disabled = false; this.textContent = "⟳ Run Stack Scan";
  }, 900);
});

renderStack();
renderAlerts();
renderPlaybooks();
