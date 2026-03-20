# FinePrint — AI Contract Scanner for Consumers

> Upload any contract. Get a plain-English breakdown of what you're actually agreeing to.

## Problem Statement

The average American signs **dozens of contracts per year** — leases, gym memberships, phone plans, employment offers, car loans, insurance policies — without reading them. ToS;DR found that **91% of people accept terms without reading**. The consequences are real:

- Hidden auto-renewal clauses that lock you in for years
- Non-compete agreements that restrict your next job
- Arbitration clauses that strip your right to sue
- Cancellation penalties buried in paragraph 47
- Landlords sneaking in clauses about security deposit forfeiture
- Early termination fees hidden in telecom contracts

**Enterprise contract review tools exist** (Juro, LegalFly, SpotDraft — $200-500+/mo), but they're built for legal teams reviewing B2B contracts. Nothing exists for the **individual consumer** who just wants to know: "What am I actually signing?"

## Target Users

- **Renters** signing apartment leases (44M+ renter households in the US)
- **Job seekers** reviewing employment contracts and offer letters
- **Consumers** signing gym, phone, insurance, or subscription contracts
- **Small business owners** reviewing vendor agreements
- **Freelancers** evaluating client contracts
- **Parents** reviewing school/camp/activity waivers
- **Anyone** tired of clicking "I agree" without understanding

## Proposed Solution

**FinePrint** is a consumer-first AI contract scanner that:

1. **Upload or paste** any contract (PDF, image, or text)
2. **AI extracts and analyzes** every clause
3. **Plain-English summary** of what you're agreeing to
4. **Red flags highlighted** — auto-renewals, arbitration, penalties, non-competes
5. **Risk score** — overall contract fairness rating (A-F)
6. **Comparison benchmarks** — "This lease charges 3x the typical late fee"
7. **Negotiation suggestions** — "Ask to remove clause 12.3 — it's unusual"

## Key Features

### 📄 Smart Document Processing
- Upload PDF, DOCX, images (OCR), or paste text
- Auto-detects contract type (lease, employment, gym, telecom, etc.)
- Handles multi-page documents with section mapping

### 🔍 Clause-by-Clause Analysis
- Every clause translated to plain English
- Severity rating per clause (✅ Standard, ⚠️ Watch, 🚩 Red Flag)
- Side-by-side: legalese vs. what it actually means

### 📊 Contract Scorecard
- Overall fairness grade (A-F)
- Category scores: Financial Risk, Rights Given Up, Exit Difficulty, Privacy Exposure
- Compared against benchmarks for that contract type

### 🚩 Red Flag Detection
- Auto-renewal traps
- Arbitration/class-action waivers
- Non-compete/non-solicitation scope
- Excessive penalty clauses
- One-sided termination rights
- Data selling/sharing permissions
- Liability waivers beyond standard

### 💬 Ask Questions
- Chat with your contract: "Can I break this lease early?"
- "What happens if I miss a payment?"
- "Can they raise the rent mid-lease?"

### 📋 Negotiation Toolkit
- Suggested counter-language for problematic clauses
- "What to ask for" checklist per contract type
- Comparison to standard/fair alternatives

## Market Research

### Existing Solutions
| Tool | Target | Price | Gap |
|------|--------|-------|-----|
| ToS;DR | TOS ratings | Free | Only major websites, not personal contracts |
| Juro | Enterprise legal | $500+/mo | B2B only, way too complex |
| LegalFly | Law firms | $300+/mo | Built for lawyers, not consumers |
| SpotDraft | Enterprise CLM | $400+/mo | Contract lifecycle, not analysis |
| LegesGPT | Legal AI | $15/mo | Closest competitor — but generic, no benchmarks |
| DoNotPay | Consumer legal | $36/yr | Broad legal toolkit, contract review is minimal |

### Differentiation
- **Consumer-first UX** — no legal knowledge required
- **Benchmarking** — compares YOUR contract against industry standards
- **Contract-type intelligence** — knows what's normal for a lease vs. gym vs. employment
- **Negotiation guidance** — doesn't just flag problems, tells you how to fix them
- **Free tier** — 3 contracts/month free, enough for most people

### Market Size
- 44M renter households × avg 1 lease/year = 44M lease reviews alone
- 6.5M job changes/month × employment contracts
- 200M+ consumer contracts signed annually (gym, phone, insurance, etc.)
- TAM: $2B+ consumer legal tech market growing 15% YoY

## Revenue Model

| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | 3 contracts/month, basic analysis |
| Plus | $5/mo | Unlimited contracts, benchmarks, negotiation tips |
| Pro | $12/mo | Everything + contract comparison, priority processing |

## Technical Approach

- **Frontend:** React/Next.js web app + PWA for mobile
- **AI:** GPT-4/Claude for clause analysis, fine-tuned models for contract-type classification
- **OCR:** Tesseract + cloud OCR for scanned documents
- **Benchmarking DB:** Aggregated anonymized clause data by contract type and region
- **Privacy:** Documents processed and deleted (not stored unless opted in)

## Validation

- ToS;DR has 700K+ monthly visitors — massive demand for understanding legal text
- r/legaladvice (2.4M members) — top posts frequently ask about contract clauses
- "Can I break my lease" — 14K monthly Google searches
- "Employment contract review" — 8.1K monthly searches
- Reddit threads about unfair gym contracts, lease gotchas, and phone plan traps appear daily

## Source

Web Research — Product Hunt, Reddit (r/legaladvice, r/Tenant, r/personalfinance), Indie Hackers, ToS;DR community

---

*Generated by Duncan ⚔️ on 2026-03-19*
