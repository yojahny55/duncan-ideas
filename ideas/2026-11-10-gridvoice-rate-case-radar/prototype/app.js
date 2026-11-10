/* GridVoice prototype — hearing-room interactions
   ZIP lookup (mock docket data), countdown, meter animation,
   testimony builder, bell, share receipt, stamp + count-up. */

(function () {
  "use strict";
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============ MOCK DOCKET DATA ============ */
  const DOCKETS = {
    "27701": {
      util: "Duke Energy Progress",
      caseid: "Case E-7, Sub 1329 · NC Utilities Commission",
      asked: 18.5,
      bill: 148.2,
      kwh: "900 kWh/mo",
      delta: 27.42,
      annual: 329,
      state: "NC",
      deadline: new Date("2026-11-29T17:00:00-05:00"),
      drivers: [
        ["grid modernization", "31%", false],
        ["storm hardening", "22%", false],
        ["large-load / data-center interconnection", "27%", true],
        ["generation & fuel", "20%", false],
      ],
      filing: "NCUC e-filing portal · docket@ncuc.gov",
    },
    "14607": {
      util: "RG&E",
      caseid: "Case 25-E-0311 · NY Public Service Commission",
      asked: 26.0,
      bill: 121.6,
      kwh: "720 kWh/mo",
      delta: 31.62,
      annual: 379,
      state: "NY",
      deadline: new Date("2026-11-22T23:59:00-05:00"),
      drivers: [
        ["distribution capital program", "38%", false],
        ["storm restoration costs", "18%", false],
        ["large-load interconnection", "24%", true],
        ["pensions & O&M", "20%", false],
      ],
      filing: "NY PSC comment portal · case 25-E-0311",
    },
    "97204": {
      util: "Portland General Electric",
      caseid: "Case UE 2026 · Oregon PUC — public hearing TODAY",
      asked: 16.8,
      bill: 132.4,
      kwh: "810 kWh/mo",
      delta: 22.24,
      annual: 267,
      state: "OR",
      deadline: new Date("2026-11-10T18:00:00-08:00"),
      drivers: [
        ["wildfire mitigation", "29%", false],
        ["data-center load growth", "31%", true],
        ["generation investment", "25%", false],
        ["fuel & purchased power", "15%", false],
      ],
      filing: "Zoom hearing + phone-in · comment@oregon.gov · docket UE 2026",
    },
  };
  const DEFAULT_ZIP = "27701";

  /* ============ COUNTDOWN ============ */
  const cd = { d: $("#cdD"), h: $("#cdH"), m: $("#cdM"), s: $("#cdS") };
  let target = DOCKETS[DEFAULT_ZIP].deadline;
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    let ms = target - Date.now();
    if (ms < 0) ms = 0;
    const sec = Math.floor(ms / 1000);
    cd.d.textContent = pad(Math.floor(sec / 86400));
    cd.h.textContent = pad(Math.floor((sec % 86400) / 3600));
    cd.m.textContent = pad(Math.floor((sec % 3600) / 60));
    cd.s.textContent = pad(sec % 60);
  }
  tick();
  setInterval(tick, 1000);

  /* ============ METER ANIMATION ============ */
  const arc = $("#meterArc");
  const needle = $("#needle");
  function animateMeter(askedPct) {
    // red arc fills proportionally to the ask (capped at the gauge's 180°)
    const frac = Math.min(askedPct / 30, 1); // 30% ask = full red
    const off = 283 * (1 - frac);
    const deg = -90 + frac * 168; // sweep from "off" left toward right
    if (reduceMotion) {
      arc.style.strokeDashoffset = off;
      needle.style.transform = "rotate(" + deg + "deg)";
      return;
    }
    arc.style.transition = "stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)";
    needle.style.transformOrigin = "110px 108px";
    needle.style.transition = "transform 1.4s cubic-bezier(.34,1.3,.44,1)";
    requestAnimationFrame(() => {
      arc.style.strokeDashoffset = off;
      needle.style.transform = "rotate(" + deg + "deg)";
    });
  }

  /* ============ RATE SHOCK CARD RENDER ============ */
  const rateCard = $("#rateCard");
  const money = (n) => "$" + n.toFixed(2);
  function renderCard(z) {
    const d = DOCKETS[z] || DOCKETS[DEFAULT_ZIP];
    $(".util", rateCard).textContent = d.util;
    $(".caseid", rateCard).textContent = d.caseid;
    const askNum = $(".ask-num", rateCard);
    askNum.innerHTML = "+" + d.asked.toFixed(1) + "<span>%</span>";
    const rows = $$(".deltatable tr", rateCard);
    rows[0].innerHTML =
      "<td>Your current bill <span class=\"muted\">(" + d.kwh + ")</span></td><td class=\"mono right\">" + money(d.bill) + "</td>";
    rows[1].innerHTML =
      "<td>If approved as filed</td><td class=\"mono right red\">+" + money(d.delta) + " / mo</td>";
    rows[2].innerHTML =
      "<td>Annual hit</td><td class=\"mono right red big\">+$" + d.annual + " / yr</td>";
    $(".chips", rateCard).innerHTML = d.drivers
      .map(
        (dr) =>
          '<span class="chip' + (dr[2] ? " chip-hot" : "") + '">' +
          dr[0] + " <b class=\"mono\">" + dr[1] + "</b></span>"
      )
      .join("");
    target = d.deadline;
    tick();
    animateMeter(d.asked);
    // receipt + file-meta references follow the card
    stampCase(d);
  }

  /* ============ ZIP LOOKUP ============ */
  const zipGo = $("#zipGo");
  const zipInput = $("#zip");
  zipGo.addEventListener("click", () => {
    const z = (zipInput.value || "").trim();
    if (!/^\d{5}$/.test(z)) {
      zipInput.focus();
      zipInput.style.borderColor = "var(--red)";
      setTimeout(() => (zipInput.style.borderColor = ""), 900);
      return;
    }
    zipGo.disabled = true;
    zipGo.textContent = "Scanning dockets…";
    setTimeout(() => {
      renderCard(z);
      zipGo.disabled = false;
      zipGo.textContent = "Find my case →";
      if (!DOCKETS[z]) {
        flashNote(
          "No open case tracked for " + z + " yet — showing a live example docket. We add territories weekly; the bell below covers your ZIP the day a filing opens."
        );
      } else {
        flashNote("Found your case. Every number below is cited to the filing.");
      }
    }, reduceMotion ? 100 : 700);
  });
  zipInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") zipGo.click();
  });

  function flashNote(msg) {
    const note = $(".zipnote");
    const old = note.textContent;
    note.textContent = msg;
    note.style.color = "var(--amber)";
    setTimeout(() => {
      note.textContent = old;
      note.style.color = "";
    }, 4200);
  }

  /* ============ BELL ============ */
  const bellBtn = $("#bellBtn");
  const bellDone = $("#bellDone");
  bellBtn.addEventListener("click", () => {
    bellBtn.classList.add("hidden");
    bellDone.classList.remove("hidden");
  });

  /* ============ CROWD COUNT-UP ============ */
  const crowdNum = $("#crowdNum");
  function countUp(el, to, ms) {
    const from = 0;
    const start = performance.now();
    function frame(t) {
      const p = Math.min((t - start) / ms, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(frame);
    }
    if (reduceMotion) el.textContent = to.toLocaleString("en-US");
    else requestAnimationFrame(frame);
  }
  const crowdObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          countUp(crowdNum, 1847, 1600);
          crowdObs.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  crowdObs.observe(crowdNum);

  /* ============ TESTIMONY BUILDER ============ */
  const panes = $$(".qpane");
  const stepLis = $$("#steps li");
  const backBtn = $("#backBtn");
  const nextBtn = $("#nextBtn");
  let step = 1;
  const ASKS = {
    0: "require that large-load and data-center customers bear their own allocated cost of service, rather than socializing it across residential ratepayers",
    1: "approve an increase materially below the amount filed, consistent with the Commission's 2026 record of pruning imprudent asks",
    2: "phase any approved increase over three years to keep residential bills predictable",
    3: "deny the application as filed for insufficient demonstration of prudence",
  };

  function showStep(n) {
    step = n;
    panes.forEach((p) => p.classList.toggle("hidden", p.dataset.q !== String(n)));
    stepLis.forEach((li, i) => {
      li.classList.toggle("step-on", i === n - 1);
      li.classList.toggle("step-done", i < n - 1);
    });
    backBtn.disabled = n === 1;
    nextBtn.textContent = n === 3 ? "Draft my comment →" : n === 4 ? "Done" : "Next →";
    if (n === 4) buildTestimony();
  }

  function stampCase(d) {
    const fm = $("#fileMeta");
    if (fm && window.__testimonyBuilt) buildTestimony();
    window.__currentDocket = d;
    // receipt follows whichever docket is on the card
    $(".rc-case", $("#receipt1")).textContent = d.caseid.split(" · ")[0];
    $(".rc-util", $("#receipt1")).textContent = d.util + " · " + d.state;
  }

  function buildTestimony() {
    const d = DOCKETS[zipValue()] || DOCKETS[DEFAULT_ZIP];
    const q1 = ($("#q1").value || "").trim();
    const q2 = ($("#q2").value || "").trim();
    const checked = $('input[name="ask"]:checked');
    const askIdx = $$('input[name="ask"]').indexOf(checked);
    const impact = q1 || "[describe what this increase does to your month]";
    const breaks = q2 || "[describe what breaks if it goes up]";
    const text =
      "BEFORE THE COMMISSION — PUBLIC COMMENT\n" +
      "Re: " + d.caseid.split(" · ")[0] + " (" + d.util + ")\n\n" +
      "My name is [your name], and I am a residential ratepayer in " + (zipValue() || DEFAULT_ZIP) + ".\n\n" +
      "The Company has asked for +" + d.asked.toFixed(1) + "%. On my usage that is +" + money(d.delta) +
      " a month — +$" + d.annual + " a year. " + impact + ".\n\n" +
      breaks + ".\n\n" +
      "The filing attributes roughly a quarter of the requested increase to large-load and data-center interconnection costs. " +
      "I respectfully ask the Commission to " + ASKS[askIdx] + ".\n\n" +
      "Respectfully submitted,\n[your name] · [date]";
    $("#testimony").textContent = text;
    $("#fileMeta").textContent =
      "File via: " + d.filing + " · GridVoice pre-fills the mailto and links the portal. You review, you send — we never file for you.";
    window.__testimonyBuilt = true;
  }

  function zipValue() {
    const z = (zipInput.value || "").trim();
    return /^\d{5}$/.test(z) ? z : DEFAULT_ZIP;
  }

  nextBtn.addEventListener("click", () => {
    if (step === 4) {
      nextBtn.textContent = "Draft my comment →";
      showStep(4);
      nextBtn.textContent = "✓ Ready to file";
      nextBtn.disabled = true;
      return;
    }
    showStep(step + 1);
  });
  backBtn.addEventListener("click", () => {
    nextBtn.disabled = false;
    showStep(step - 1);
  });

  /* ============ VERDICT STAMP + SHARE ============ */
  const stamp = $("#stamp");
  const stampObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          setTimeout(() => stamp.classList.add("on"), 350);
          stampObs.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );
  stampObs.observe($("#receipt1"));

  const shareBtn = $("#shareBtn");
  const shareDone = $("#shareDone");
  shareBtn.addEventListener("click", () => {
    const d = DOCKETS[zipValue()] || DOCKETS[DEFAULT_ZIP];
    const txt =
      "⚡ I just filed on " + d.caseid.split(" · ")[0] + " (" + d.util + ").\n" +
      "Asked: +" + d.asked.toFixed(1) + "%. 2026 verdict pattern: commissions cut loud dockets 40–60%.\n" +
      "2,311 of us testified. Find your case: gridvoice.app";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).catch(() => {});
    }
    shareDone.classList.remove("hidden");
  });

  /* ============ INIT ============ */
  renderCard(DEFAULT_ZIP);
  showStep(1);
  window.__currentDocket = DOCKETS[DEFAULT_ZIP];
})();
