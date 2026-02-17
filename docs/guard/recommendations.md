---
hide_table_of_contents: true
sidebar_position: 9
---

# Recommendations

Guard generates AI-powered recommendations to help you reduce costs, eliminate waste, and improve your cloud posture. Each recommendation includes an estimated impact so you can prioritise the highest-value actions.

[View Recommendations](https://dashboard.frugally.app/cost-guard/recommendations)

---

## Recommendation categories

| Category | What it recommends |
|----------|--------------------|
| **Rightsizing** | Downsize over-provisioned instances based on actual utilisation data |
| **Scheduling** | Add Schedules to resources running outside business hours without automation |
| **Commitment** | Purchase or modify Reserved Instances and Savings Plans based on usage patterns |
| **Waste elimination** | Delete or decommission unused resources (idle instances, unattached volumes, unused IPs) |

---

## How recommendations are generated

frugally.app analyses:

- **Resource utilisation** — CPU, memory, and network metrics from CloudWatch
- **Usage patterns** — When resources are active vs idle
- **Cost data** — Current spend and historical trends from [Intelligence](/docs/intelligence/overview)
- **Scan findings** — Issues discovered during [Guard Scans](./scans-and-findings.md)
- **Commitment coverage** — Gaps in RI/Savings Plan coverage from [Commitment Utilisation](/docs/intelligence/commitment-utilisation)

Recommendations are refreshed daily and reflect the most recent data available.

---

## Viewing recommendations

The recommendations page shows a prioritised list:

| Column | Description |
|--------|-------------|
| **Category** | Rightsizing, Scheduling, Commitment, or Waste |
| **Description** | What the recommendation suggests |
| **Affected resources** | The resources involved |
| **Estimated monthly savings** | How much you could save by acting on this recommendation |
| **Confidence** | How confident frugally.app is in the recommendation (High, Medium, Low) |
| **Status** | New, Accepted, Dismissed, Snoozed |

`[SCREENSHOT: recommendations-list.png -- Recommendations list sorted by estimated savings]`

---

## Acting on recommendations

### Accept

Accepting a recommendation signals your intent to act on it. Depending on the category:

| Category | What happens on accept |
|----------|----------------------|
| **Rightsizing** | Creates a draft Guard [Project](./projects/overview.md) with the proposed instance type change |
| **Scheduling** | Opens the [Schedule creation](/docs/getting-started/creating-a-schedule) form pre-filled with the suggested configuration |
| **Commitment** | Provides a summary you can use when purchasing RIs/Savings Plans in the AWS console |
| **Waste** | Creates a draft Guard Project proposing decommission of the resource |

Accepted recommendations are tracked in the [Cost Posture](./cost-posture.md) optimisation dimension.

### Dismiss

Dismissing a recommendation removes it from the active list. You must provide a reason:

| Reason | Example |
|--------|---------|
| **Not applicable** | "This resource is intentionally over-provisioned for burst capacity" |
| **Already planned** | "We are migrating this workload next month" |
| **Risk too high** | "Production database — cannot risk downtime for rightsizing" |

Dismissed recommendations do not count against your [Cost Posture](./cost-posture.md) score.

### Snooze

Snoozing hides a recommendation for a configurable period (7, 14, 30, or 90 days). After the snooze expires, the recommendation reappears if it is still relevant.

---

## Estimated impact

Each recommendation shows an estimated monthly savings figure. This is calculated based on:

- **Current cost** — What the resource costs now
- **Proposed cost** — What it would cost after the recommendation is applied
- **Savings** — The difference, projected monthly

:::note
Estimated savings are projections based on current pricing and usage. Actual savings may vary based on usage changes, pricing updates, and implementation timing.
:::

---

## Best practices

- **Review weekly** — Check recommendations as part of your regular FinOps routine
- **Prioritise by impact** — Sort by estimated savings and tackle the top items first
- **Validate before acting** — For rightsizing, review CloudWatch metrics to confirm low utilisation is consistent, not a temporary lull
- **Dismiss with reasons** — This helps your team understand why a recommendation was not acted on and prevents it from being re-raised
- **Track accepted recommendations** — Monitor your [Cost Posture](./cost-posture.md) to see the cumulative impact of implemented recommendations
