# SlopSentry — Authenticity Scanner for AI Slop on Social Feeds

**Date:** 2026-08-19
**Inspiration:** r/SomebodyMakeThis trending post — *"Somebody make a Chrome Extension that flags copied/fake/AI slop on LinkedIn"*; plus adjacent r/AppIdeas chatter about anti-viral social and feed quality.
**Source:** https://www.reddit.com/r/SomebodyMakeThis/comments/1vrvk6w/somebody_make_a_chrome_extension_that_flags/

---

## 1. Problem Statement

LinkedIn (and increasingly X, Instagram captions, and even resumes) is drowning in AI-generated slop:

- **Recruiters and hiring managers** can't tell which candidate posts, articles, or DMs are genuine vs. LLM-vomited. Signal-to-noise is collapsing.
- **Users** are fatigued by formulaic content: "I'm thrilled to announce...", "In today's fast-paced world...", emoji-laden motivational walls, em-dash abuse, and suspiciously identical story arcs.
- **Content creators** doing original work get drowned out and have no way to *prove* authenticity.
- Existing AI detectors are built for academia (essays), tuned for long-form text, and produce useless verdicts on 3-line social posts. There is no tool built for **feed-scale, short-form, professional-network slop**.

The Reddit demand is explicit: someone literally posted "Somebody make this" and it climbed the weekly top — a recurring, upvoted frustration, not a one-off.

## 2. Solution

**SlopSentry** — a browser extension (Chrome/Edge/Firefox) + companion web dashboard that:

1. **Inline overlay:** As you browse LinkedIn/X, each post gets a subtle authenticity chip (🟢 Human-ish / 🟡 Sus / 🔴 Slop) computed in real time.
2. **Slop Score (0–100):** Heuristic ensemble tuned for short-form social text:
   - Cliché phrase density ("thrilled to announce", "humbled and honored", "game-changer", "delve", "in today's fast-paced world")
   - Emoji-per-sentence ratio and decorative bullet patterns (▸ ✦ •)
   - Em-dash and "—" usage spikes, excessive capitalization patterns
   - Formulaic structure: hook → struggle → epiphany → humble lesson → CTA
   - Vocabulary entropy vs. typical human baseline for the platform
3. **Click-to-explain:** Expand the chip to see *which* phrases/patterns triggered the score — transparency, not a black box.
4. **Feed hygiene mode:** Optionally collapse/dim posts above a user-set slop threshold (your feed, your tolerance).
5. **Authenticity badge (pro):** Verified human-authored content can carry a signed badge — "proof of human" via account history + opt-in attestation.

Key differentiator: built for **short-form social**, explains itself, and runs heuristics **locally first** (privacy) with optional cloud ML for tougher calls.

## 3. Target Users

| Segment | Pain | Willingness to pay |
|---|---|---|
| Recruiters / talent ops | Fake candidate engagement, AI-written outreach | High (team plans) |
| Sales / SDRs | Spotting AI-autoresponders vs. real prospects | Medium |
| Content creators | Differentiate genuine work | Medium (badge) |
| Everyday professionals | Feed fatigue | Low, but massive volume |
| Journalists/researchers | Source verification | Medium |

Primary wedge: **recruiters and active job-market participants on LinkedIn** — highest pain intensity and clearest budget.

## 4. Tech Stack

- **Extension:** Manifest V3, TypeScript, Preact for overlay UI, Vite build
- **On-device inference:** heuristic engine (pure TS, <50KB) + optional transformers.js (small distilled classifier) running in-page — no data leaves the browser by default
- **Backend (pro tier):** FastAPI (Python) or Node/Hono on Cloudflare Workers; Postgres + Redis; Gemini/LLM judge as second-opinion scorer for long posts
- **Dashboard:** Next.js on Vercel — personal slop stats, weekly feed reports, badge management
- **Auth:** Clerk; **Billing:** Stripe; **Analytics:** PostHog

## 5. Monetization

- **Free:** unlimited scans, chips + scores, explain panel. (Growth engine.)
- **Pro — $5/mo:** feed hygiene mode, cross-site history, weekly slop reports, custom phrase dictionaries (flag your boss's catchphrases).
- **Team — $12/user/mo:** recruiter dashboard, bulk-profile outreach authenticity reports, API access.
- **Badge/API — B2B:** "Verified Human Post" attestation API for job boards and newsletter platforms (per-call pricing).

Projected path: 10k free users via LinkedIn virality ("my feed was 62% slop this week" shareable reports) → 3–5% Pro conversion → team upsell into recruiting agencies.

## 6. MVP Scope (2 weeks)

1. Chrome extension: content script scans LinkedIn feed posts, applies heuristic engine, renders chips + explain popover.
2. Web page: paste-any-text analyzer (this prototype).
3. Shareable "slop report" card (canvas → PNG).
4. Landing page + waitlist.

## 7. Risks & Counterarguments

- **False positives on non-native English writers** → mitigations: explainable triggers, per-community calibration, no hard "AI" accusation — score reflects *pattern similarity*, phrased carefully. This is the #1 ethics risk; ship conservative thresholds.
- **LinkedIn could restrict DOM access** → fallback: text-select analyzer + bookmarklet mode.
- **Arms race as slop improves** → heuristic engine is community-updated (phrase dictionaries as versioned datasets), LLM judge tier covers drift.

## 8. Prototype

Single-file HTML/CSS/JS demo in this folder: `prototype.html`
- Paste any post → instant Slop Score + highlighted triggers + verdict
- Demo feed with sample LinkedIn-style posts scored live
- Zero dependencies, zero backend

---

*Logged by Duncan ⚔️ — daily app ideas cron, 2026-08-19.*
