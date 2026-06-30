# NameSync — Smart Legal Name Change Coordinator

> **"Your name changed. Now you have 47 accounts to update. We'll track every one."**

NameSync is the only app purpose-built to coordinate the chaotic, document-heavy process of legally changing your name across every institution, agency, and account that holds your identity — whether you're getting married, divorced, transitioning gender, or changing your name for any other reason.

---

## The Problem

Every year in the US, **2M+ people legally change their name**:
- **1.4M+ women** change their name after marriage (~70% of brides)
- **700K+ people** reclaim or change name after divorce
- **50K+ transgender/nonbinary people** update name as part of gender affirmation
- **100K+** personal name changes (adoption, professional, religious, personal preference)

Each person faces the same nightmare: **40-60 institutions** across government, financial, professional, and personal life that need updating. Each has:
- Different forms (some only available as physical PDFs)
- Different document requirements (certified marriage cert copy, court order, divorce decree)
- Different submission methods (mail, fax, in-person, online portal)
- Different fees ($0 to $435+)
- Different deadlines (DMV within 30 days, SSA within 10, etc.)

**The pain is real and well-documented:**
- Average name change takes **40-80 hours of work** spread across **3-6 months**
- The process is so notoriously complex that name-change services like **HitchSwitch ($35-75)** and **NewlyNamed ($30-50)** charge premium fees just to provide checklists and pre-filled forms
- Reddit's r/Marriage, r/Divorce, r/trans, and r/NonBinary are filled with threads calling the process "endless," "a second job," and "infuriating in 2026"
- People regularly forget accounts until they cause problems: denied insurance claims, mismatched credit reports, delayed tax refunds, voter registration purged

**And yet — no app actually coordinates the entire process end-to-end.**

### Why now (June 2026)?
- **Wedding season peak** — 2.4M weddings expected in 2026, most with name changes
- **Pride month** — gender-affirming name changes spike during/after Pride as people feel supported
- **Divorce filings peak in January**, but **finalizations peak in summer** — each one triggering name change decisions
- **REAL ID enforcement (May 2025)** made name consistency across documents critical — mismatched names now block domestic flights
- **Post-COVID court backlog cleared** — name change petition processing times finally back to normal, creating a surge

---

## Existing Solutions (And Why They Fail)

| Solution | What It Does | Why It Falls Short |
|---|---|---|
| **HitchSwitch** ($35-75) | Checklist + pre-filled PDF forms for marriage name change | Expensive, marriage-only, no tracking, no AI, no document vault |
| **NewlyNamed** ($30-50) | Similar checklist service | Same limitations — service, not app |
| **UpdateMyName** | Basic checklist blog | Not an app, no tracking, no automation |
| **MissNowMrs** ($30) | Marriage-focused name-change software | Desktop-era UX, marriage-only, no progress tracking |
| **DIY spreadsheets** | What 70% of people actually use | Manual, overwhelming, easily abandoned |
| **Google + Reddit** | Free-form research | Hours of research, conflicting info, no personalized roadmap |

**The gap:** Existing solutions are either (a) **marriage-only**, (b) **checklists without progress tracking**, or (c) **services that do it for you** (expensive). Nobody owns the **DIY coordinator** position — the TurboTax of name changes.

---

## Proposed Solution

**NameSync is the smart coordinator that turns 80 hours of chaos into a guided, tracked, AI-assisted process.**

### Core Features

#### 1. 🎯 Name Change Roadmap (AI-generated)
Answer 5 questions (reason for change, state, new name, documents on hand, timeline). Get a personalized 47-step roadmap ordered by legal priority and dependency — SSA first (unlocks everything else), then DMV, then IRS, then financial institutions, then everything else.

#### 2. 📄 Document Vault
Upload your **certifying document** once (marriage certificate, divorce decree, court order). NameSync tells you:
- How many **certified copies** you need (most people need 5-8; you only get 1 automatically)
- Where to order more ($5-20 each)
- Securely stores reference scans for institutions that accept digital uploads

#### 3. 🏛️ Institution Database (47+ institutions)
Hand-curated, state-specific database covering:
- **Government (12):** SSA, DMV, passport (State Dept), IRS, voter registration, USPS, immigration (USCIS), veterans affairs, Selective Service, Medicare/Medicaid
- **Financial (12):** Banks (each separately), credit cards (each), investment accounts, mortgage servicer, credit bureaus (Equifax, Experian, TransUnion — critical for credit continuity)
- **Insurance (5):** Health, auto, home/renters, life, disability
- **Employment (4):** HR/payroll, 401(k) provider, professional licenses (medical, legal, teaching, etc.), security clearances
- **Personal (14+):** Utilities, internet/provider, landlord/mortgage, subscriptions, loyalty programs, email providers, social media, professional associations, alumni records, medical providers, pharmacy, gym, car registration/title, vet/pet microchip

Each entry includes:
- Exact form (PDF auto-filled where possible)
- Required documents
- Submission method (online/mail/in-person/fax — yes, some still require fax)
- Fee
- Processing time
- Deadline (legal deadline where applicable)
- AI-generated cover letter pre-filled with your details

#### 4. 📊 Progress Dashboard
Trello-style board: **Not Started → Documents Ready → Submitted → Confirmed Updated → Verified**. See your completion percentage, what's overdue, what's blocking other updates.

#### 5. 🔔 Smart Reminders & Follow-ups
- **Deadline alerts:** "DMV must be updated within 30 days — you're at day 24"
- **Follow-up prompts:** "You submitted your bank request 14 days ago — time to follow up"
- **Dependency tracker:** "Don't update your credit cards until your SSA is confirmed (usually 48 hrs)"
- **Verification reminders:** "Pull your credit report in 60 days to confirm all 3 bureaus reflect your new name"

#### 6. ✉️ AI Cover Letter Generator
Most institutions require a formal request letter. NameSync generates institution-specific, legally-cited cover letters with your details pre-filled. Print, sign, attach certified copy, mail. Done.

#### 7. 🔍 "Did You Forget?" Engine
Cross-references your connected accounts (via Plaid for financial, optional) and surfaces accounts you haven't updated yet. "You updated Chase but not your Amex — want to start that now?"

#### 8. 👥 Partner / Attorney Mode
- **Partner mode:** Share read-only progress with a spouse helping coordinate
- **Attorney mode:** Divorce attorneys can track name-change progress for multiple clients

#### 9. 📋 Post-Change Verification Checklist
The job isn't done when you submit — it's done when every system reflects your new name. NameSync tracks verification:
- Credit report check (60 days post-completion)
- Voter registration confirmation
- IRS records match
- Employment/payroll records updated
- Professional license databases updated

---

## Target Users

### Primary
- **Recently married women (ages 25-40)** changing their name — 1.4M/year
- **Recently divorced people (ages 30-55)** reclaiming or changing name — 500K+/year
- **Transgender/nonbinary adults (all ages)** affirming gender via name change — 50K+/year, growing 15% YoY

### Secondary
- **Adoptees** updating name post-adoption finalization
- **Immigrants** updating name after naturalization
- **Professionals** changing name for career/personal reasons
- **Attorneys** managing name changes for divorce/family law clients

---

## Differentiation

| vs. | NameSync |
|---|---|
| **HitchSwitch / NewlyNamed** | One-time fee ($30-75) for static checklist. NameSync is a living tracker with AI, progress dashboard, document vault, verification, and covers ALL name change reasons — not just marriage. |
| **MoveSync** (our sibling idea) | MoveSync updates your address. NameSync updates your legal identity. Different documents, institutions, processes, deadlines, and emotional weight. |
| **AccountTrail** (our sibling idea) | AccountTrail knows WHERE you have accounts. NameSync actively coordinates UPDATING those accounts when your legal name changes. |
| **Spreadsheets** | Automated, personalized, AI-assisted, deadline-tracked, with a maintained database of 47+ institutions. |

---

## Business Model

### Pricing (Annual — not monthly, because name changes are temporary)

| Tier | Price | Includes |
|---|---|---|
| **Free** | $0 | Roadmap + 10 institutions + basic reminders |
| **Complete** | **$29.99 one-time** | All 47+ institutions, AI cover letters, document vault, "Did You Forget?" engine, verification checklist, partner mode |
| **Attorney** | $19.99/mo | Manage unlimited clients, case tracking, court-ready documentation |

**Pricing rationale:** Name change is a 3-6 month project, not a forever subscription. One-time fee aligns with customer expectations (competitors charge $30-75) while delivering 10x the value.

### Revenue Projections
- TAM: 2M+ name changes/year in US × $29.99 = **$60M annual market**
- Year 1 SOM: 25K users × $29.99 = **$750K ARR**
- Year 3 SOM: 150K users × $29.99 = **$4.5M ARR**
- Expand to Canada, UK, Australia (similar legal systems) → 3x TAM

---

## Design Direction

**Aesthetic:** Calm, organized, official-but-warm. Think a friendly paralegal who has their life together — not a sterile government portal.

**Color palette:**
- Primary: Deep navy `#1a2b4a` (trust, official, calm)
- Accent: Warm coral `#e8806a` (human, personal, celebratory for marriages)
- Sage green `#7ba884` (progress, affirmation — important for trans users)
- Cream `#faf6ee` (background — warm, not sterile)
- Charcoal `#2a2a2a` (text)

**Typography:** Inter for UI, Lora (serif) for headlines — official but human.

**Tone:** Direct, supportive, never condescending. Acknowledges that name changes are emotional (identity, marriage, divorce, gender affirmation) without being saccharine.

---

## Technical Architecture

- **Frontend:** React Native + Web (PWA for desktop work, native app for mobile photo uploads)
- **Backend:** Supabase (PostgreSQL, Auth, Storage for document vault)
- **AI:** Claude/GPT-5 for cover letter generation and form pre-fill
- **Integrations:**
  - Plaid (optional financial account discovery for "Did You Forget?")
  - Google/Apple Pay for ordering certified document copies
  - Lob API for mailing physical letters (some institutions still require mail)
- **Security:** End-to-end encryption for document vault. Documents never sold or shared. SOC 2 Type II from day one — we're handling marriage certificates, divorce decrees, and court orders.
- **Content:** Hand-curated institution database, reviewed quarterly for process/form changes

---

## Go-To-Market

### Launch Strategy
1. **Wedding vertical** (Year 1, Q1-Q2)
   - Partner with wedding planners, officiants, The Knot/Zola
   - Pinterest/Instagram ads targeting newlyweds (3 months post-wedding)
   - Bridal publications, "name change checklist" SEO

2. **Divorce vertical** (Year 1, Q2-Q3)
   - Partner with family law attorneys (they refer clients constantly)
   - Attorney tier becomes lead generation
   - Divorce podcasts, r/Divorce, r/DivorcedDads

3. **Transgender / LGBTQ+ vertical** (Year 1, Q2-Q3)
   - Partner with LGBTQ+ centers, PFLAG, trans advocacy orgs
   - Pride month activations (June — perfectly timed)
   - Gender affirmation therapists recommend to clients

4. **Content marketing**
   - "Ultimate Name Change Guide by State" — SEO magnet
   - Free PDF: "47 Places to Update When You Change Your Name"
   - Blog: real stories, process updates, legal changes

### Viral Loop
- "Did You Forget?" engine is shareable: "I thought I was done — NameSync found 7 more accounts"
- Partner mode (newlyweds coordinating together) doubles organic reach
- Attorney mode: 1 attorney = 50-200 client referrals/year

---

## Why This Wins

1. **No dominant solution exists.** HitchSwitch and NewlyNamed are services, not apps. Nobody owns the "name change coordinator" position.
2. **Clear, painful, time-bounded problem.** 40-80 hours of work over 3-6 months. People will happily pay $29.99 to save 30+ hours.
3. **Massive market hiding in plain sight.** 2M+ Americans per year, zero dominant software solution.
4. **Inclusive by design.** Marriage, divorce, gender affirmation, adoption — one tool for all name changes.
5. **Annual recurring demand.** 2M weddings + 700K divorces + 50K transitions = fresh customers every single year.
6. **Defensible database moat.** 47+ institutions with state-specific requirements, forms, fees, and deadlines — curated and updated quarterly. Hard to replicate.
7. ** emotionally resonant.** Name changes mark life's biggest moments — marriage, divorce, becoming who you are. NameSync honors that, not sterilizes it.

---

## Sources

- US marriage statistics (CDC, 2024 data): ~2M marriages/year, ~70% of women change name
- US divorce statistics: ~700K divorces/year
- Williams Institute (UCLA): 1.6M trans adults in US, name change common milestone
- REAL ID enforcement (DHS, May 2025): name consistency now mandatory for domestic flights
- Reddit r/Marriage, r/Divorce, r/trans (June 2026): consistent complaints about name change process
- HitchSwitch, NewlyNamed, MissNowMs pricing pages (June 2026)
- Nolo.com name change guides by state
- SSA name change process documentation

---

*Name changes mark life's biggest moments — marriage, divorce, becoming who you are. NameSync honors that by making the bureaucratic nightmare fade into the background, so you can focus on the milestone, not the paperwork.*
