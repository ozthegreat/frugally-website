---
hide_table_of_contents: true
sidebar_position: 1
---

# Intelligence Overview

Intelligence is frugally.app's AWS billing analysis pillar. It gives you visibility into where your money is going, how well your commitments are being used, and whether anything unusual is happening with your spend.

[Open Intelligence](https://dashboard.frugally.app/cost-explorer)

---

## What Intelligence provides

| Feature | What it does |
|---------|--------------|
| **[Cost Explorer](./cost-explorer.md)** | Slice and dice your AWS costs by service, account, region, or tag |
| **[Commitment Utilisation](./commitment-utilisation.md)** | Track how effectively your Reserved Instances and Savings Plans are being used |
| **[Cost Anomaly Detection](./cost-anomaly-detection.md)** | Detect unexpected spending spikes and get alerted before they become problems |

---

## Data sources

Intelligence pulls data from your AWS accounts via:

- **AWS Cost and Usage Reports (CUR)** — Detailed line-item billing data
- **AWS Cost Explorer API** — Aggregated cost and usage data

Data is fetched automatically from all healthy [Connections](/docs/getting-started/connecting-your-aws-accounts). No additional setup is needed beyond connecting your AWS accounts.

---

## Data freshness and caching

| Aspect | Detail |
|--------|--------|
| **Refresh interval** | Cost data is refreshed every 30 minutes |
| **Cache TTL** | 30 minutes — repeated queries within this window use cached data |
| **Daily API call cap** | Applies per Connection to stay within AWS Cost Explorer API limits |
| **Monthly API call cap** | Aggregate limit across all Connections |

:::note
AWS Cost and Usage Reports can take up to 24 hours to reflect the most recent charges. Data for the current day may be incomplete until the following day.
:::

---

## IAM permissions

Intelligence requires the following IAM permissions on each Connection's role:

```json
{
  "Effect": "Allow",
  "Action": [
    "ce:GetCostAndUsage",
    "ce:GetCostForecast",
    "ce:GetReservationUtilization",
    "ce:GetSavingsPlansUtilization",
    "ce:GetAnomalies",
    "ce:GetAnomalyMonitors",
    "ce:GetAnomalySubscriptions"
  ],
  "Resource": "*"
}
```

For the full IAM policy, see [IAM Role Permissions](/docs/advanced/iam-role-permissions).

---

## How Intelligence relates to other pillars

- **Automate** — Intelligence shows the cost impact of your automation. The [Projected vs Actual Savings](/docs/dashboard/projected-vs-actual-savings) chart ties Intelligence data to Automate results.
- **Guard** — Intelligence data feeds into Guard's [Budgets](/docs/category/guard) for threshold tracking and into [Cost Attribution](/docs/category/guard) for team-level cost breakdowns.
