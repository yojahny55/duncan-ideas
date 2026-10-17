# PityTrack 🎰 — Know What That Skin *Actually* Cost You

> **"You didn't spend $30. You spent $340 on 47 pulls to get one skin you wanted. PityTrack does the math so the game doesn't have to hide it."**

**Date:** 2026-10-17
**Source:** Reddit — r/marvelrivals loot-box ("balloon") backlash, Oct 2026: *"I genuinely closed the app after 3 balloons. I don't always care for the extra sprays, emojis, emotes, etc!!! I just want the skin!!"* Same rage-thread pattern runs r/Genshin_Impact, r/honkai_star_rail, r/EA, r/Lawyertalk gacha-odds posts every week — "I spent $X and got nothing" is one of gaming's most reliably viral formats.
**Category:** Consumer fintech / Gaming / Digital wellbeing
**Note:** Direct Reddit access was network-blocked today; signal gathered via search-engine caches of Reddit threads (r/marvelrivals weekly top).

---

## Problem Statement

Games have shifted from **"buy the skin"** to **"gamble for the skin"**: loot boxes (Marvel Rivals balloons, CS2 cases, EA packs), gacha banners (Genshin, HSR, Wuthering Waves), and randomized battlepass tiers. The pain points players voice constantly:

1. **Opaque true cost.** A "$0.99 pack" that's really a 1-in-40 shot at the item you want is a $40 item wearing a microtransaction costume. Games show odds in fine print; nobody converts odds → expected dollars.
2. **No cross-game ledger.** Players have spent money across 4-6 games and have zero aggregate view. Sunk cost is invisible by design.
3. **Pity timers live in your head.** Guaranteed-pull counters ("pity") reset per banner and per game; players misjudge how close the guarantee is and overspend at the worst moment.
4. **Rage-quitting without receipts.** Players suspect the system is rigged or that they've overspent, but have no data — for their budget, for chargebacks, or for the inevitable Reddit post.

Regulators are circling (Belgium/Netherlands bans, UK reviews, US CANDID Act noise), but players are on their own in the meantime.

## Solution

**PityTrack** is a local-first app that treats gacha spending like what it is: a portfolio of gambles.

1. **Quick-log pulls.** 10 seconds: pick game → banner → # of pulls → price. Or screenshot the store receipt and let OCR parse it (phase 2).
2. **True-cost engine.** Community-maintained odds tables per game/banner convert every log entry into *expected cost per wanted item*. "Those 47 pulls = $340 spent, $312 above expected value" hits different than a spending pie chart.
3. **Pity radar.** Live counters per banner: pulls since last 5★, soft-pity thresholds, pulls-until-guarantee, estimated dollars-to-pity. Push alert: *"You're 12 pulls from guarantee on Rivals — don't start a new banner tonight."*
4. **Monte Carlo simulator.** "What will it *actually* cost to get this skin?" — 10,000 simulated runs with the real published odds → median, p90, worst-case. Answers the question every player Googles at 1am.
5. **Budget guardrails.** Monthly gacha budget with a burn meter and a "cool-down" lock (delay purchases 24h — the app equivalent of a casino self-exclusion button, lighter-touch).
6. **Whale Receipts (viral loop).** Shareable cards: *"I spent $612 in gacha games in 2026. My cost-per-want was 3.4× expected. PityTrack."* A Spotify-Wrapped for loot boxes — the rage-post format, weaponized as marketing.

**Positioning:** Not anti-game. Pro-player. The data belongs to the person who paid.

## Target Users

- **Primary:** 16–34 gacha/live-service players (Genshin, HSR, Marvel Rivals, EA FC, CS2) — the segment that already tracks pulls in spreadsheets and Discord bots (huge existing behavior to absorb).
- **Secondary:** parents of teen gamers (spend visibility), and "reformed whales" in r/stopgaming-style communities.
- **Tertiary:** gaming press & researchers (aggregate anonymized odds-vs-reality data is a story factory), consumer-protection groups.
- **Beachhead:** r/Genshin_Impact + r/marvelrivals communities — highest volume of "how much did I spend" threads, and Marvel Rivals' balloon backlash is peaking *right now*.

## Tech Stack

- **Client:** React Native + Expo (iOS/Android) — or Next.js PWA first for zero-friction web launch.
- **Storage:** local-first SQLite/WatermelonDB; optional E2E-encrypted sync (Supabase or self-hosted). No account required to start.
- **Odds tables:** versioned community-maintained YAML per game/banner (wiki-style PR flow, GitHub as backend) — same playbook as LeaseLens rule packs.
- **Monte Carlo:** JS worker (Web Worker / react-native-worklets) — 10k sims in <100ms on-device; no server cost.
- **OCR (phase 2):** on-device ML Kit / vision-model fallback for store receipts.
- **Alerts:** local notifications for pity thresholds + budget burn.
- **Infra:** static hosting (Vercel/Cloudflare Pages), zero backend for MVP. Yojahny's AWS skills only needed when sync lands.

## Monetization

- **Free:** 2 games, manual logging, pity counters, basic monthly totals.
- **Pro — $2.99/mo or $24/yr:** unlimited games, Monte Carlo simulator, receipt OCR, pity/budget alerts, Whale Receipts customization. (Priced below one 10-pull — the comparison is the pitch.)
- **One-off:** $4.99 "Year in Gacha" export (PDF/spreadsheet) for chargeback or budget-review season.
- **Data (later, anonymized, opt-in):** odds-vs-reality benchmark reports for press/researchers; *never* sell user-level data — trust is the entire product.
- **Explicit non-goal:** no affiliate links to game stores. Ever. Conflicts kill this brand instantly.

**Unit economics hook:** the median engaged gacha spender reports $20–100/mo. A $3/mo tool that saves one bad banner pays for itself 10×; churn risk is low because the ledger *is* the lock-in.

## Prototype

`prototype.html` — mobile-first single-file demo:
- Dashboard: total spend, spend vs. expected value, budget burn meter
- Game cards with live pity counters (Genshin, Marvel Rivals, HSR)
- "Log pulls" flow with true-cost calculation
- Monte Carlo simulator: cost-to-item distribution (median/p90/worst) from real odds
- Whale Receipt share card mock

## Risks & Mitigations

- **Odds table maintenance** — start with 5 mega-games; community PR flow; tables are small YAML, and the communities *already* maintain these in wikis.
- **Game ToS (receipt scraping)** — MVP is manual entry only; OCR reads the user's own purchase receipts, which is their data. No game-API scraping, no account linking.
- **"Another spreadsheet?"** — the wedge is pity alerts + true-cost math + share cards; spreadsheets don't tap you on the shoulder before a bad banner.
- **Gambling-adjacent sensitivity** — position as harm-reduction/consumer-tool; include cool-down lock; app-store age rating 12+.
- **Platform risk (app stores)** — PWA-first keeps distribution independent.

## Validation Next Steps

1. Post a "how much have you actually spent this year?" poll in r/Genshin_Impact + r/marvelrivals; DM 10 spreadsheet-trackers about their workflow pain.
2. Ship the Monte Carlo web sim free as a standalone page (SEO: "marvel rivals balloon odds calculator") → email capture → PWA beta list.
3. Concierge test Whale Receipts: hand-make 20 share cards for loud Reddit posters; measure repost rate.
4. Interview 2 consumer-protection researchers about aggregate odds-vs-reality data demand.

---

*Generated by Duncan's daily Reddit-trend idea cron — 2026-10-17.*
