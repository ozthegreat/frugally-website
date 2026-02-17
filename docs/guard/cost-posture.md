---
hide_table_of_contents: true
sidebar_position: 7
---

# Cost Posture

Cost Posture is a snapshot score that represents your team's overall cost health. It combines multiple signals — waste, coverage, optimisation opportunities, and compliance — into a single metric you can track over time.

---

## What Cost Posture measures

The posture score is a value from 0 to 100, calculated from four dimensions:

| Dimension | Weight | What it measures |
|-----------|--------|-----------------|
| **Waste** | 30% | Unused resources, idle infrastructure, and resources running during non-business hours without schedules |
| **Coverage** | 25% | Percentage of eligible resources covered by [Targets](/docs/automate/targets/overview) and [Schedules](/docs/automate/schedules/overview) |
| **Optimisation** | 25% | How many [Recommendations](./recommendations.md) have been accepted vs ignored |
| **Compliance** | 20% | Ratio of clean [Scan](./scans-and-findings.md) findings to total findings; open [Violations](./violations-and-remediation.md) count |

---

## Score interpretation

| Score | Label | Meaning |
|-------|-------|---------|
| **80–100** | Excellent | Low waste, high coverage, recommendations addressed, few open violations |
| **60–79** | Good | Mostly healthy, but some areas need attention |
| **40–59** | Needs improvement | Significant waste or gaps in coverage and compliance |
| **0–39** | Poor | Substantial optimisation opportunity — review all dimensions |

---

## How the score is calculated

### Waste (30%)

Points are deducted for:
- Resources running outside business hours without an active Schedule
- Resources with zero or near-zero utilisation over the past 7 days
- Unused Elastic IPs, idle load balancers, and unattached EBS volumes

### Coverage (25%)

Points are awarded for:
- Percentage of discovered resources included in at least one Target
- Percentage of non-production resources covered by active Schedules
- Percentage of spend attributed to teams via [Cost Attribution](./cost-attribution.md)

### Optimisation (25%)

Points are awarded for:
- Recommendations accepted and implemented
- Points are deducted for recommendations that have been open for more than 30 days without action

### Compliance (20%)

Points are awarded for:
- Low ratio of open Scan findings to total resources
- No open Critical or High severity Violations
- Points are deducted for each open Violation based on severity

---

## Viewing your Cost Posture

Navigate to **Guard** > **Cost Posture** to see your current score and historical trend.

`[SCREENSHOT: cost-posture.png -- Cost posture dashboard showing score, dimension breakdown, and trend chart]`

The dashboard shows:

| Widget | Description |
|--------|-------------|
| **Overall score** | Your current posture score with label (Excellent, Good, etc.) |
| **Dimension breakdown** | Per-dimension scores showing which areas need attention |
| **Trend chart** | Score over time (daily, weekly, or monthly) |
| **Improvement opportunities** | Top actions that would improve your score the most |

---

## Historical trends

The trend chart tracks your posture score over time. Use it to:

- **Measure progress** — See the impact of your optimisation efforts
- **Spot regressions** — Catch score drops that indicate new waste or compliance issues
- **Report to stakeholders** — Share posture trends with leadership via the [Executive Dashboard](./executive-dashboard.md)

---

## Improving your score

The Cost Posture page lists the top improvement opportunities ranked by impact:

| Opportunity | Dimension | Example action |
|-------------|-----------|----------------|
| **Schedule unmanaged resources** | Waste + Coverage | Run the [Onboarding Wizard](/docs/automate/onboarding-wizard) to create Targets and Schedules |
| **Address open Recommendations** | Optimisation | Review and accept [Recommendations](./recommendations.md) |
| **Resolve open Violations** | Compliance | Remediate [Violations](./violations-and-remediation.md) |
| **Improve tag coverage** | Coverage | Tag resources and configure [Cost Attribution](./cost-attribution.md) |
| **Clean up unused resources** | Waste | Delete or decommission resources flagged in [Scans](./scans-and-findings.md) |

:::tip
Focus on the highest-impact improvements first. Addressing waste and coverage typically produces the largest score gains.
:::
