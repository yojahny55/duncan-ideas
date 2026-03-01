# BlindSpotSec — Security Attention Analyzer

> **"Your scanners ran 500 times on /utils/logger.js but only 3 times on /api/payments/webhook.js. Sleep tight!"**

## The Problem

Development teams invest heavily in security tooling — SAST scanners, code reviews, penetration testing. But this security attention is almost never distributed according to actual risk.

**The uncomfortable reality:**
- 🔥 90% of scanner runs burn cycles on low-risk utility code
- 💳 Payment handlers get the same review frequency as health check endpoints
- 🔓 Auth middleware changes slip through with minimal scrutiny
- 📊 Teams have zero visibility into their security attention distribution

Most breaches don't happen because teams lack security tools. They happen because attention is misallocated — critical code paths are under-reviewed while boilerplate gets over-scanned.

## The Solution

**BlindSpotSec** is a meta-security tool. It doesn't scan for vulnerabilities — it analyzes *where your security attention is actually going* vs *where it should be going*.

### Core Concept

1. **Risk Scoring**: Automatically classify files by inherent risk level based on:
   - What they do (auth, payments, user input handling, database access)
   - Attack surface exposure (public endpoints, webhooks, file uploads)
   - Historical vulnerability patterns in similar code

2. **Attention Tracking**: Aggregate data from your existing security workflows:
   - CI/CD security scan frequency per file
   - Code review depth and frequency
   - Manual security audit coverage
   - Bug bounty submission patterns

3. **Blind Spot Visualization**: Heatmap showing the gap between risk and attention
   - High-risk code with low attention = 🔴 Critical blind spots
   - Low-risk code with high attention = 🟡 Wasted effort
   - Aligned risk/attention = 🟢 Well-covered

## Key Features

### 📊 Risk Heatmap
Visual codebase map colored by risk score, with attention overlay. Instantly see which critical paths are under-protected.

### 🎯 Blind Spot Radar
Daily/weekly digest of the most dangerous attention gaps:
- "Payment webhook handler changed 12 times, reviewed 0 times"
- "Auth middleware has 3x more attack surface than review coverage"

### 📈 Attention Trends
Track how security attention shifts over time. Are new features getting proper scrutiny? Is legacy critical code being forgotten?

### 🔗 Integrations
- **SCM**: GitHub, GitLab, Bitbucket (PR reviews, file change frequency)
- **CI/CD**: Jenkins, CircleCI, GitHub Actions (scanner run distribution)
- **Security Tools**: Snyk, SonarQube, Semgrep (scan coverage data)
- **Bug Bounty**: HackerOne, Bugcrowd (where researchers actually find issues)

### 🚨 Smart Alerts
- Require security review for high-risk file changes
- Block PRs touching critical paths without security sign-off
- Alert when attention drift reaches dangerous levels

## Target Users

1. **Security Teams** — Prove that their limited review time is being spent optimally
2. **Engineering Managers** — Understand true security coverage, not just "we have scanners"
3. **CISOs** — Board-level visibility into actual vs theoretical security posture
4. **Startups** — Small teams need to prioritize; can't review everything equally

## Market Opportunity

- **Security tool fatigue**: Teams have 10+ security tools but no way to know if effort is well-allocated
- **Compliance theater**: Auditors ask "do you have security reviews?" not "are they on the right code?"
- **Breach post-mortems**: Almost always reveal that the vulnerable code was under-reviewed

### Competitive Landscape

| Solution | What It Does | Gap |
|----------|-------------|-----|
| Snyk, Semgrep, SonarQube | Find vulnerabilities in code | Doesn't show attention distribution |
| CodeClimate, DeepSource | Code quality metrics | Risk-agnostic; treats all files equally |
| GitHub Advanced Security | Dependency & secret scanning | No attention allocation analysis |
| **BlindSpotSec** | Maps security attention to risk | ✅ Only tool showing the gap |

## Technical Approach

### Risk Classification Model

```
Risk Score = Σ(Feature Weights × Feature Values)

Features:
- handles_auth: 0.25
- handles_payments: 0.25
- accepts_user_input: 0.15
- database_writes: 0.10
- external_api_calls: 0.10
- file_operations: 0.05
- public_endpoint: 0.05
- has_vulnerabilities_history: 0.05
```

### Attention Aggregation

```
Attention Score = (
  review_frequency × 0.40 +
  review_depth × 0.25 +
  scan_coverage × 0.20 +
  manual_audit_coverage × 0.15
)
```

### Blind Spot Index

```
Blind Spot Index = Risk Score - Attention Score

BSI > 0.5 = Critical blind spot
BSI > 0.3 = Warning
BSI < 0 = Over-attention (potential waste)
```

## Business Model

### Tiers

1. **Free** — Single repo, basic heatmap, 30-day history
2. **Team ($49/mo)** — 10 repos, integrations, alerts, 1-year history
3. **Enterprise** — Unlimited repos, SSO, compliance reports, API access

### Revenue Drivers
- Per-repo pricing for large codebases
- Advanced integrations (Jira, ServiceNow) for enterprise
- Compliance report generation for audits

## Prototype

A single-page dashboard demonstrating:
- Interactive codebase risk heatmap
- Blind spot leaderboard
- Attention vs risk comparison chart
- Sample integration data

## Origin

Inspired by [@JamesTakesOnAI on X/Twitter](https://x.com/JamesTakesOnAI/status/2027910709271794039):
> "honestly someone should just build this. a heatmap of your codebase colored by risk score with security spend overlay. most teams would be horrified to see 90% of their scanner time burning on model serializers while the payment webhook handler gets the same treatment as a health check endpoint"

---

*Security tools find vulnerabilities. BlindSpotSec finds where you're not looking.*
