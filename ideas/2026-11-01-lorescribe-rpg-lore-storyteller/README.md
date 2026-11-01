# LoreScribe 📜 — Your Campaign's Spoiler-Free Storyteller

> **"You have 40 sessions of lore scattered across Notion, Discord, and your head. LoreScribe turns it into one interactive grimoire that knows what your players know — and never spoils a reveal."**

**Date:** 2026-11-01
**Source:** Reddit — r/SomebodyMakeThis weekly top (Oct 26–Nov 1, 2026): *"Somebody make this: An LLM that turns all the lore you collect in RPGs into an interactive, spoiler-free storyteller"* + r/AppIdeas "What App Do You Wish Existed?" (Oct 2026)
**Category:** Games / AI Knowledge Tools / TTRPG Software

---

## Problem Statement

This week's r/SomebodyMakeThis top post asks for exactly one thing: **an LLM that turns all the lore you collect in RPGs into an interactive, spoiler-free storyteller.** The comment pattern around TTRPG tooling threads confirms why it doesn't exist yet — every current tool is a *wiki*, and a wiki is the wrong primitive:

1. **Lore is scattered and rotting.** A typical DM runs 30–60 sessions in a campaign. The truth about the BBEG lives in session notes (Google Docs), a Discord #lore channel, a half-filled World Anvil, VTT journal tabs, and the DM's memory. Players constantly ask *"wait, what do we know about the Ashen Cult?"* and the DM has 90 seconds to reconstruct it — or stalls the table.
2. **Spoilers are a manual, error-prone filter.** Existing campaign wikis (World Anvil, Kanka, LegendKeeper, StormScape) all have some notion of "DM-only vs player-visible" pages — but it's page-level, hand-tagged, and instantly stale. One mis-set toggle and the season's big reveal leaks to the player portal. Nobody tracks spoilers at the **fact level**, and nobody tracks *when* a fact was revealed.
3. **Session recaps are unpaid volunteer labor.** The recap is the highest-value artifact in TTRPG (absent players catch up, the table remembers), and it's written by one guilt-tripped player or the DM at 1am — inconsistent, late, or never. Generating a *spoiler-free* recap from raw notes/transcripts is exactly the LLM task nobody has productized.
4. **Mid-campaign joins and returning players have no on-ramp.** A new player joining at session 25 needs "everything revealed so far, nothing more." Today that's a hand-curated doc. It should be a generated portal that updates every session.
5. **Willingness to pay is proven — at $9/mo, for less.** LegendKeeper is **$9/mo or $90/yr with no free tier**. World Anvil Pro ≈ **$9/mo**. Blaze ≈ **$9.99/mo**. Kanka survives on the free tier because the paid tools' differentiation is polish, not intelligence. The market pays for campaign infrastructure; it just hasn't been given an AI layer worth switching for.

**Nobody owns the "what do my players know?" question.** Wikis store. LoreScribe *understands* — and gates every answer through spoiler state.

## Target Users

- **Dungeon Masters / GMs** (primary): 3.5M+ volunteer GMs in the US alone; the person already drowning in prep. High pain, high identity investment, habitual tool-buyers ($9/mo is table-standard).
- **Campaign scribes / recap volunteers**: the player who writes it all — LoreScribe gives them their Sundays back.
- **Returning & new players**: the mid-campaign joiner, the absentee catching up — served through the auto-generated Player Portal.
- **Actual-play producers & podcasters** (secondary): Critical Role-adjacent shows need spoiler-free episode synopses and wikis with per-episode reveal states. Perfect fit, loud megaphone.
- **Year-2 B2B**: TTRPG publishers (official campaign companions with managed spoiler gates — "read up to Chapter 4, no further"), VTT marketplaces.

## Proposed Solution

**LoreScribe** = campaign lore ingest → **spoiler-tiered lore graph** → three lenses on it: Ask, Reveal, Recap.

### 1. The Codex (ingest)
- Drop in anything: session notes (paste/Markdown/Notion export), Discord lore-channel dumps, VTT journal exports, purchased adventure PDFs, session audio transcripts (Whisper), even photos of the paper notebook.
- LLM extraction into a structured **lore graph**: entities (NPCs, places, factions, items, events) and **facts attached to entities**. Every fact gets: source citation (session #, document), confidence, and — the core primitive — a **visibility state**: `SECRET` (DM-only), `REVEALED` (players know, since session N), `PUBLIC` (world-common).
- Existing wikis import via CSV/Markdown; the graph is the lock-in, not the files.

### 2. Spoiler Fog (the signature interaction)
- In DM view, secrets render as **redacted wax-sealed blocks** — you can see their shape, tap to read, one-tap to **Reveal** (flips to REVEALED, stamps the session number, notifies the player portal).
- The **Reveal Timeline** is the campaign's real story: "Session 12: the players learned Seraphine is the twin. Session 31: they still don't know about the lighthouse." Reveal stats are shareable campaign art (Spotify-Wrapped for your table — the viral loop).
- Per-fact (not per-page) granularity means the wiki can never leak by accident. The player portal is *generated from* visibility state; there is no second copy to keep in sync.

### 3. Ask the Grimoire (interactive storyteller)
- Chat with your campaign through a **lens toggle**: 👁 **DM lens** (everything, with spoiler warnings) vs 🔦 **Player lens** (answers built *only* from REVEALED/PUBLIC facts — structurally incapable of spoiling).
- "What do the players know about the Ashen Cult?" → filtered synthesis **with citations** to the exact session notes. "Who is Thorne *really*?" → DM-lens answer with a red warning ribbon listing which players have been told.
- Mid-session mode: big-type answers, 10-second responses, no chat chrome. The DM asks from under the table.

### 4. Auto Recap (the time machine)
- After session: paste notes or upload the transcript → LoreScribe writes the **player-facing recap** in your campaign's voice (tone trained on past recaps), spoiler-free by construction, plus "What changed in your world" bullets and next-session hooks.
- Absent-player digest: personalized recap diff ("here's what you missed, what YOUR character would know").

### 5. Player Portal
- One share link per campaign: the revealed-lore wiki that **updates itself** every time you hit Reveal. Read-only, mobile-first, no accounts required for players. New player joins at session 25 → they get the full revealed canon in an afternoon of reading, zero DM curation.

### 6. Consistency Keeper (the lore linter)
- Flags contradictions before they ship: "Session 8 notes say Thorne lost his LEFT eye; your draft recap says right." "You've used 4 different spellings of 'Vharn' across 6 documents." The DM's continuity anxiety, productized.

## Why Now

- LLM extraction collapsed the cost of building a lore graph from messy text — the exact bottleneck that kept wikis manual.
- The D&D 2024 rules reboot + Critical Role's mainstream run keep pulling new DMs in who expect modern software (they arrived from Notion/Discord, not from 2015 forum wikis).
- Edison-style market proof exists in adjacent media: people pay $9/mo for *worse* (LegendKeeper, no free tier). An AI-native layer at the same price with a free tier is an easy switch pitch.

## Market & Competition

| Tool | Price | What it is | Gap LoreScribe takes |
|---|---|---|---|
| World Anvil | Free / ~$9/mo Pro | Deep worldbuilding wiki, campaign manager | Manual page-level secrecy; writing-heavy; no Q&A, no recaps |
| LegendKeeper | $9/mo or $90/yr, **no free tier** | Polished premium campaign wiki + player share | Player share is hand-curated; no fact-level spoilers; no AI |
| Kanka | Generous free tier | Collaborative wiki, entity relationships | Explicitly "no generators, no AI" — wiki-first, you maintain |
| StormScape / Blaze | $9.99/mo (Blaze) | Newer campaign managers | Same wiki primitive; bolt-on AI features, not spoiler-native |
| Notion + Discord | Free | What 90% of DMs actually use | Zero structure, zero spoiler safety, zero recall |
| Generic LLM chat | — | Paste notes, ask questions | No persistent graph, no visibility states, no portal, re-explain every session |

**Differentiation in one line:** everyone else stores lore; LoreScribe is the only tool whose core primitive is *who knows what, since when*. That's a data model competitors can't bolt on without rebuilding — and the reveal-timeline dataset compounds like PityTrack's odds tables and InReview's percentile telemetry (the house moat).

## Business Model

- **Free (forever):** 1 campaign, 3 source documents, manual spoiler tagging, DM-lens Q&A (20 asks/mo), 1 recap/mo. Generous because graph density IS the moat.
- **DM — $8/mo or $64/yr:** unlimited sources & transcripts, Player lens, auto recaps, Player Portal, Consistency Keeper, Reveal Timeline exports. Priced *under* LegendKeeper's $90/yr — the switch pitch writes itself.
- **Table — $15/mo:** multi-campaign, per-player visibility tiers (player A knows the secret, player B doesn't), custom-domain portals, campaign handoff/migration export.
- **Year-2 Publisher tier ($99–499/mo):** white-label spoiler-gated companions for official adventures and actual-play shows ("read up to your episode").

**TAM/SOM:** Hasbro estimates ~50M D&D fans; Roll20 10M+ accounts; ~3–5M active GMs in English-speaking markets. Year-1 SOM: 25K registered DMs × 10% paid × $64 ≈ **$160K ARR** with near-zero CAC — the "what do my players know" complaint is a weekly post format on r/DMAcademy and DM Twitter, and the Reveal Timeline share card is built-in campaign-season marketing.

## Go-To-Market

1. Ship-in-public in r/DMAcademy + r/dndnext: "I built the spoiler-free campaign brain" (the SMT thread is the literal launch audience).
2. Free public tool as SEO wedge: **"Campaign Recap Generator"** (paste notes → recap) and **"Spoiler Timeline"** share cards — high-intent searches currently owned by nobody.
3. One Critical Role-adjacent actual-play producer on a free Table tier → their wiki-with-spoiler-gates becomes the demo every fandom DM wants.
4. Reply-guy every "my players forgot everything from last session" and "how do you keep track of lore" thread — a permanent, weekly-recurring post format.

## MVP (solo, 4–6 weeks)

- Next.js PWA + Supabase (Postgres + pgvector) + Claude for extraction/Q&A/recap + Whisper for transcripts + OneSignal for portal-update nudges.
- Week 1–2: ingest pipeline → entity/fact extraction with visibility states.
- Week 3: Codex UI + Spoiler Fog (redacted blocks, Reveal action, timeline).
- Week 4: Grimoire Q&A with lens filtering (retrieval filtered by visibility — no ML, plain SQL + vector search).
- Week 5: Recap generator + Player Portal (read-only generated site).
- Week 6: onboarding import (Notion/Markdown/CSV), billing, polish.
- No VTT integrations in v1 — text/file ingest covers 95% of the workflow. Roll20/Foundry/D&D Beyond exports are just files.

## Design (ui-ux-pro-max)

**"Candlelit scriptorium meets mission control."**
- Ink black-brown `#14100C`, parchment `#F3E9D2`, ember gold `#C89B3C`, arcane violet `#7C5CBF`, spoiler wax red `#A33B2A`, reveal green `#5C8A4E`.
- Cinzel display headers + Inter body + JetBrains Mono for citations/session stamps.
- **Signature components:** Spoiler Fog blocks (blurred text under a wax seal, tap-to-reveal with a seal-break animation) · Lens Toggle (👁 DM / 🔦 Player, whole UI re-filters) · Reveal Timeline (vertical campaign spine with stamped session seals) · Recap card styled as a hand-lettered broadsheet.
- Dark-mode native (games happen at night), keyboard-first for mid-session use (`/` focuses the Grimoire, `L` flips lens).
- Voice: the knowing archivist. Never "hey gamers." Every screen ends in one action: Ask, Reveal, or Share.

## Cross-references (not a dupe)

- **GameDev Pulse** (2026-02-03) = industry analytics for game *developers*; LoreScribe is a table tool for *players/DMs*. No overlap.
- **SceneSnark / InkCircle / DraftCoach** = media commentary, writers' social, prose feedback — different audiences, no lore-graph or spoiler mechanics.
- Complements the house playbook: crowd/usage-compounding dataset (reveal timelines), free-tier-as-moat, shareable receipt artifact (Spotify-Wrapped pattern from PityTrack/BillDelta), vertical wedge priced against a lazy incumbent (LegendKeeper's $90/yr no-free-tier posture is the Rocket Money-style misalignment BillDelta attacked).

## Prototype

Interactive demo: [`prototype/index.html`](prototype/index.html) — Codex with Spoiler Fog, Grimoire Q&A with DM/Player lens toggle (watch answers change), Reveal action flipping a secret live, auto-generated recap, Reveal Timeline share card.

**Live demo:** https://yojahny55.github.io/duncan-ideas/ideas/2026-11-01-lorescribe-rpg-lore-storyteller/prototype/index.html

---

*Researched & documented by Duncan ⚔️ — 2026-11-01*
