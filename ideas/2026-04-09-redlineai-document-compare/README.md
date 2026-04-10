# RedlineAI — AI Document Comparison Engine

**Catch every hidden change. Instantly.**

## Problem

Someone sends you a "minor update" to a contract, lease, or policy. What actually changed? You'd have to print both versions, line them up side by side, and read every word yourself. Even legal professionals miss changes — studies show humans catch only 60-70% of document differences.

The pain is everywhere:
- **Renters:** Landlord sends "just a renewal" — but adds a pet fee, changes the move-out notice period, and rewrites the early termination clause
- **Freelancers:** Client sends "updated" contract with changed payment terms buried on page 7
- **Homebuyers:** Revised purchase agreement with altered contingencies
- **Employees:** Updated employment agreement, changed PTO policy, new non-compete language
- **Anyone with an HOA:** Revised bylaws with no highlights

Current solutions are either enterprise-only (literally $10K+/yr for legal teams — Kira, DiliTools, eBrevia) or built-in Word/Google Docs "Track Changes" which only works if you used those tools. Nobody has a consumer-first tool for comparing two arbitrary document versions.

## Target Users

- **Renters** — lease renewals and amendments
- **Freelancers / Contractors** — contract revision tracking
- **Homebuyers** — purchase agreement changes
- **Employees** — employment agreement updates, policy changes
- **Small business owners** — vendor contract revisions
- **Anyone** who receives "minor updates" they need to verify

## Proposed Solution

**RedlineAI** — upload two versions of any document (PDF, Word, text, image), get a beautiful side-by-side visual diff with AI-powered explanations of every change.

The twist: not just WHAT changed, but WHY it matters. "This clause was rewritten" is useful. "This clause now requires 60 days notice instead of 30, meaning you can't leave without 2 months of rent" is actionable.

## Key Features

1. **Dual Upload** — drag-and-drop two document versions (original + revised)
2. **Smart Alignment** — AI aligns sections even if text was moved, reordered, or reformatted
3. **Visual Diff** — beautiful side-by-side or unified view, color-coded additions/deletions/changes
4. **Plain-English Summaries** — every change explained in simple language: what it is, what it means, what you should do
5. **Severity Rating** — changes rated: 🟢 Cosmetic, 🟡 Minor, 🟠 Moderate, 🔴 Significant
6. **Change Report PDF** — export a clean, shareable PDF of all changes with explanations
7. **Section Heatmap** — visual overview showing where all changes are concentrated
8. **AI Q&A** — ask questions about the changes: "What's the worst thing that changed?" "Can I still break the lease early?"

## Monetization

| Plan | Price | Features |
|------|-------|----------|
| Free | $0/mo | 3 comparisons/month, basic diff, watermarked PDF |
| Pro | $9.99/mo | Unlimited comparisons, AI explanations, clean PDF, Q&A |
| Business | $24.99/mo | Team sharing, API access, batch comparison, audit trail |

## Market Research

- **Consumer legal tech** is booming but document comparison has no consumer player
- **Enterprise tools** (Kira, DiliTools, Luminance) cost $500-2000+/mo for legal teams
- **Built-in tools** (Word Track Changes, Google Docs) require using those platforms
- **Relevant searches:** "compare two pdf versions", "contract changes tracker", "lease diff tool" — high search volume, low competition

## Competitive Landscape

| Tool | Price | Consumer-First? | AI Explanation? |
|------|-------|-----------------|-----------------|
| Kira | $500+/mo | ❌ Enterprise | ✅ |
| DiliTools | $300+/mo | ❌ Enterprise | ✅ |
| Word Track Changes | Free* | ⚠️ Only Word docs | ❌ |
| Diffchecker | Free tier | ✅ | ❌ (raw diff only) |
| **RedlineAI** | **$0-10/mo** | **✅** | **✅** |

## Technical Feasibility

- **Core:** Text extraction (PDF.js, Mammoth.js) → diff engine (diff-match-patch) → AI summary (LLM)
- **Storage:** No server-side storage needed — process in-browser or one-shot API call
- **Monetization:** Stripe, simple freemium
- **Complexity:** Low-medium. Text extraction + diff + AI prompt = ~3 core components

## Source

Web research — document comparison is a solved problem for enterprise but nobody has brought it to consumers at an accessible price point with AI-powered plain-English explanations.

## Tags

#legal #contracts #documents #ai #comparison #renters #freelancers
