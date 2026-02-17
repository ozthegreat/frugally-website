---
hide_table_of_contents: true
sidebar_position: 4
---

# Cost Anomaly Detection

Cost anomaly detection monitors your AWS spending and alerts you when costs deviate significantly from normal patterns. It helps you catch billing surprises before they become expensive problems.

---

## How anomaly detection works

frugally.app establishes a **rolling baseline** of your spending patterns using the last 7 days of cost data. When actual spending exceeds the baseline by more than the configured threshold, an anomaly is flagged.

```
Baseline (7-day rolling average) + Threshold → Anomaly triggered
```

The baseline updates daily, so it adapts to gradual changes in your spending. Only sudden, unexpected deviations are flagged.

---

## Threshold configuration

You can configure how sensitive anomaly detection should be:

| Threshold type | Description | Example |
|----------------|-------------|---------|
| **Percentage** | Triggers when spend exceeds the baseline by a percentage | 20% above baseline |
| **Absolute** | Triggers when spend exceeds the baseline by a fixed dollar amount | $50 above baseline |
| **Standard deviations** | Triggers based on statistical deviation from the baseline | 2 standard deviations |

:::tip
Start with a **percentage threshold of 20%** — this catches meaningful spikes without generating too much noise. Tighten it once you understand your normal spending variance.
:::

Configure thresholds at **Settings** > **Monitoring** > **Anomaly Detection**.

---

## Alert delivery

When an anomaly is detected, alerts can be delivered through:

| Channel | Configuration |
|---------|---------------|
| **In-app** | Always enabled — anomalies appear in the Dashboard and Intelligence views |
| **Slack** | Posted to configured channels — set up in [Slack integration](/docs/getting-started/connecting-slack) settings |
| **Email** | Sent to team members based on notification preferences |

Each alert includes:

- **Service and account** — Which AWS service and account the anomaly relates to
- **Expected vs actual** — The baseline amount and the actual spend
- **Deviation** — How much the actual exceeds the expected (percentage and absolute)
- **Time period** — When the anomaly was detected

`[SCREENSHOT: anomaly-alert.png -- Cost anomaly alert showing expected vs actual spend]`

---

## Investigating anomalies

When you receive an anomaly alert:

1. **Click the alert** to open the anomaly detail view
2. **Review the breakdown** — See which service, account, and region contributed to the spike
3. **Check recent changes** — Look at recent [Executions](/docs/automate/executions/overview), deployments, or infrastructure changes that may explain the increase
4. **Use Cost Explorer** — Open the [Cost Explorer](./cost-explorer.md) filtered to the affected service and time period for a deeper analysis

---

## Managing anomalies

| Action | When to use |
|--------|-------------|
| **Acknowledge** | You have seen the anomaly and are investigating — removes it from the active alerts list |
| **Dismiss** | The anomaly is expected (e.g. a planned migration or load test) — marks it as resolved with a reason |
| **Create a budget** | The anomaly reveals a need for spending controls — links to Guard [Budget](/docs/category/guard) creation |

---

## Suppression rules

If certain spending patterns are expected but would normally trigger anomalies, you can create suppression rules:

| Rule type | Description |
|-----------|-------------|
| **Service** | Suppress anomalies for a specific AWS service |
| **Account** | Suppress anomalies for a specific AWS account |
| **Time window** | Suppress anomalies during a specific time period (e.g. during a planned migration) |
| **Minimum threshold** | Only alert on anomalies above a minimum dollar amount |

Suppression rules help reduce noise without disabling detection entirely.

---

## Best practices

- **Set meaningful thresholds** — Too sensitive means alert fatigue; too loose means missed anomalies
- **Act on alerts promptly** — Cost anomalies can compound quickly
- **Use dismissal reasons** — When dismissing an anomaly, add a reason so your team understands why it was expected
- **Review suppression rules periodically** — Temporary suppressions should be removed after the planned event ends
- **Combine with budgets** — Anomaly detection catches spikes; [Budgets](/docs/category/guard) catch sustained overspend
