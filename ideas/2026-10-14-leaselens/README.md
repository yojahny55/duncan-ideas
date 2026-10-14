# LeaseLens 🔍 — Catch Landlord Lease Changes Before They Bite

> **"Your lease said parking was included. Their 'addendum' says $75/month. LeaseLens shows you the diff — and whether it's legal."**

**Date:** 2026-10-14
**Source:** Reddit — r/Denver top thread (Oct 2026): "Apartment complex changing from reserved spots to hybrid parking" — unilateral mid-lease change, 100s of comments citing CO landlord-tenant law. Same pattern floods r/Tenant, r/legaladvice, r/mildlyinfuriating every month (surprise fees, amenity removal, pet-rule changes).
**Category:** Consumer rights / Proptech / Local-first AI

---

## Problem Statement

Landlords and corporate property managers increasingly push **unilateral mid-lease changes** through "policy updates," "addendums," and portal notices:

- Reserved parking → "hybrid" first-come parking (+ new monthly fee)
- Trash/amenity fees quietly added to rent
- Pet rules, guest rules, storage assignments rewritten
- Lease-renewal offers that silently drop protections from the original lease

Tenants hit a triple wall:

1. **Memory** — nobody remembers what page 14, clause 7.3 of their lease actually says.
2. **Law** — most tenants don't know that in many states (CO, CA, NY, etc.) landlords **cannot make unilateral mid-lease changes** to material terms.
3. **Energy** — fighting back means reading the lease, researching state law, and writing a formal letter. Most people just sign and simmer.

The result: millions of renters paying fees and accepting terms they legally never agreed to, because the cost of noticing is higher than the cost of complying.

## Solution

**LeaseLens** is a phone-first app that turns every landlord communication into a **diff against your actual lease**, with a legality verdict and a ready-to-send response.

1. **Upload once.** Photograph or drop your signed lease PDF. LeaseLens parses it into structured clauses (rent, term, parking, pets, fees, amenities, renewal, notice requirements).
2. **Forward anything.** Every addendum, "community notice," renewal offer, or portal message gets pasted/photographed/emailed in.
3. **See the diff.** Side-by-side: what your lease guarantees vs. what the new document changes. Removed protections in red, new obligations highlighted.
4. **Get the verdict.** A state-specific rule pack (start: CO, CA, NY, TX, FL) flags whether the change is:
   - 🟢 **Valid at renewal** — enforceable when the lease renews, not before
   - 🟡 **Negotiable** — gray area; worth pushing back
   - 🔴 **Likely unenforceable mid-lease** — unilateral change to a material term
5. **Send the letter.** One tap generates a polite, firm response citing the lease clause and state statute (tenant-union-reviewed templates), exported as PDF/email.
6. **Deadline radar.** Renewal-notice windows, addendum "accept by" dates, and escalation timelines tracked with reminders.

**Positioning:** BillProof for your apartment. Not legal advice — legal *literacy*, with a clean referral path to real tenant attorneys for the 🔴 cases.

## Target Users

- **Primary:** US renters in corporate-managed complexes (multifamily properties with portals and "community updates") — ~20M households, skewing 25–40.
- **Secondary:** r/Tenant, r/legaladvice, r/personalfinance crowds — people already searching "can my landlord do this?" (millions of queries/month).
- **Tertiary:** tenant unions, renter-advocacy nonprofits, law-school clinics (bulk/white-label).
- **Beachhead:** Denver/Austin/Atlanta renters — big multifamily markets with active mid-lease-change complaints and clear statutes.

## Tech Stack

- **Client:** React Native + Expo (iOS/Android) or Next.js PWA — camera capture, offline clause cache.
- **Parsing:** pdf.js / unpdf + vision-model fallback for photographed pages → structured JSON clauses (Claude/GPT with schema-enforced extraction).
- **Diff engine:** clause-level semantic diff (embedding similarity + LLM adjudication) — not text diff; "reserved spot #42" vs "unassigned hybrid parking" must register as a change.
- **Rule packs:** per-state YAML (statute citations, material-term definitions, notice requirements) — human-reviewed, versioned, community-contributable.
- **Backend:** Node.js (NestJS or Fastify) + Postgres + pgvector; S3-compatible storage for documents; E2E-encrypted document vault option.
- **Letters:** react-pdf templates + optional e-sign/certified-mail integration (via partners like Click2Mail) later.
- **Infra:** Docker, Vercel/Fly for web, AWS for workers (Yojahny's home turf).

## Monetization

- **Free:** 1 lease upload, 2 diffs/month, verdict without letter generation.
- **Pro — $6/mo or $48/yr:** unlimited diffs, letter generator, deadline radar, state packs, document vault. (Cheaper than one surprise parking fee.)
- **Per-case:** $19 one-off "full fight kit" (letter + statute packet + escalation checklist) for non-subscribers hitting a 🔴 verdict.
- **B2B2C:** white-label for tenant unions, renter-insurance add-on partnerships, legal-aid clinic tier.
- **Referral (later, carefully disclosed):** flat-fee tenant attorneys for contested cases.

**Unit economics hook:** avg surprise fee dispute is $50–150/mo. One successful pushback pays for 1–2 years of Pro.

## Prototype

`prototype.html` — mobile-first single-file demo:
- Parsed lease summary (parking clause, fees, term)
- Incoming "Parking Policy Addendum" with clause-level diff view
- Verdict card (🔴 likely unenforceable mid-lease, CO rule pack)
- Generated response letter with statute citation
- Sign / Contest actions with risk-score meter

## Risks & Mitigations

- **"Unauthorized practice of law"** — frame as document comparison + legal information (like Nolo/DOA tools), rule packs reviewed by attorneys, prominent disclaimers, referral path out.
- **Extraction quality on crappy scans** — vision-model fallback + manual clause confirmation flow.
- **Rule packs are maintenance-heavy** — start with 5 states, community contributions + annual attorney review, version every pack.
- **Incumbent response (property portals)** — their incentive is the opposite; that's the moat. Tenants trust tenant-side tools.

## Validation Next Steps

1. Scrape 50 r/Tenant / r/legaladvice "mid-lease change" threads → confirm statute patterns per state.
2. Landing page + "forward us your addendum" concierge MVP (manual diffs, 48h turnaround) at $5/fight kit.
3. Post the Kohl's-style story angle: "My complex turned my reserved spot into $75/mo — here's the letter that got it reversed" (with permission) on r/Denver / r/Tenant.
4. Interview 3 tenant-union organizers about white-label demand.

---

*Generated by Duncan's daily Reddit-trend idea cron — 2026-10-14.*
