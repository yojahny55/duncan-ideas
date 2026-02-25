# AccountTrail 🔑

**Track every account you've ever created. Never forget how you signed up.**

## The Problem

We're drowning in accounts. The average person has 100+ online accounts, and remembering credentials is only half the battle. The real friction comes when you can't remember:

- **Which login method did I use?** — Google Sign-In? Apple? Email/password?
- **Which email did I use?** — Personal? Work? Old email from 5 years ago?
- **Is this linked to my phone number?** — For 2FA recovery
- **Did I use a password manager?** — Or was this before I started using one?

Password managers solve credential storage, but they don't track the *meta-information* about your accounts:
- Sign-up method (OAuth vs email vs SSO)
- Which identity provider (Google, Apple, GitHub, Microsoft)
- Email address used (you might have 3-5 active emails)
- 2FA status and recovery methods
- Account creation date
- Purpose/category

**The result:** You sit at a login page clicking "Sign in with Google" → nothing. Try "Sign in with Apple" → nothing. Reset password → "No account found for this email." Repeat with different emails. 10 minutes later, you finally find the right combination.

## Target Users

1. **Digital natives with multiple emails** — Personal, work, side project, old college email
2. **Freelancers/contractors** — Different accounts for different clients
3. **Security-conscious users** — Want visibility into their digital footprint
4. **People preparing for digital estate planning** — Need to know what accounts exist
5. **Anyone who's ever thought** "Which email did I use for this?"

## The Solution

**AccountTrail** is your personal account registry. Log every service you sign up for with:

- Service name + URL
- Login method (Google, Apple, email/password, SSO, etc.)
- Email address used
- 2FA enabled? What type?
- Linked password manager entry (optional)
- Tags/categories
- Notes (recovery codes, special info)
- Auto-detected logo/icon

### Key Features

1. **Quick Capture** — Add accounts in seconds during sign-up or retroactively
2. **Smart Search** — Find by service name, email, login method, or tags
3. **Login Method Filter** — "Show all accounts using Google Sign-In"
4. **Email Audit** — See all accounts attached to a specific email
5. **Security Dashboard** — Which accounts have 2FA? Which don't?
6. **Deactivation Tracker** — Mark accounts as closed/deleted
7. **Import from Password Manager** — Bulk import from 1Password, Bitwarden, etc. (fills in what it can)
8. **Browser Extension** — Auto-suggests logging when you sign up or log in somewhere new

## Why Not Just Use Password Managers?

Password managers are great for credentials, but they:
- Don't track OAuth sign-ins (no password to store)
- Don't differentiate which email you used
- Don't show login method metadata
- Don't track 2FA status consistently
- Are credential-focused, not account-focused

AccountTrail is **complementary** to password managers. Link your 1Password/Bitwarden entry, but also capture the context password managers miss.

## Competitive Landscape

| Solution | Tracks Passwords | Tracks Login Method | Tracks Email Used | Multi-Identity Support |
|----------|-----------------|---------------------|-------------------|----------------------|
| 1Password/Bitwarden | ✅ | ❌ | Partial | ❌ |
| "Sign in with Google" history | ❌ | Google only | ❌ | ❌ |
| Apple ID linked apps | ❌ | Apple only | ❌ | ❌ |
| **AccountTrail** | ❌ (links to PM) | ✅ | ✅ | ✅ |

## Revenue Model

- **Free tier:** Up to 50 accounts, basic search
- **Pro ($4/mo):** Unlimited accounts, browser extension, export, security dashboard
- **Family ($8/mo):** Up to 6 users, shared account visibility (optional)

## Technical Stack

- **Frontend:** React/Next.js PWA (installable, works offline)
- **Backend:** Supabase (auth + Postgres + realtime)
- **Security:** End-to-end encryption for sensitive fields (recovery codes, notes)
- **Browser Extension:** Chrome/Firefox/Safari for auto-capture
- **Mobile:** React Native or PWA

## MVP Features (v1.0)

1. Manual account entry form
2. Search and filter
3. Email-based grouping view
4. Login method categorization
5. Basic tags/categories
6. Export to JSON/CSV

## Future Features

- Browser extension for auto-capture
- Password manager integration (import)
- Dark web monitoring (check if accounts are in breaches)
- Account deletion assistant (how to delete accounts from various services)
- Digital estate planning mode (share with trusted contact)

## Market Validation

- "Which email did I use" is a universal frustration
- Rise of "Sign in with X" makes this worse (no password manager entry)
- Privacy/security awareness is increasing
- Digital decluttering/minimalism trend
- Digital estate planning becoming mainstream

## Prototype

See `prototype/` folder for interactive demo.

---

*Idea researched and documented by Duncan ⚔️*  
*Source: Web Research / YC RFS 2026 / Indie Hackers*  
*Date: February 24, 2026*
