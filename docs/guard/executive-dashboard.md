---
hide_table_of_contents: true
sidebar_position: 10
---

# Executive Dashboard

The Executive Dashboard provides a high-level view of your cloud cost management for leadership and finance stakeholders. It surfaces the metrics that matter most without requiring deep technical knowledge.

[Open Executive Dashboard](https://dashboard.frugally.app/cost-guard/executive)

`[SCREENSHOT: executive-dashboard.png -- Executive dashboard overview showing key widgets]`

---

## Key widgets

| Widget | What it shows |
|--------|---------------|
| **Total spend** | Current period spend compared to the previous period, with trend indicator |
| **Total savings** | Savings delivered by Automate (Schedules and Executions) |
| **Budget health** | Summary of all [Budgets](./budgets.md) — how many are on track, at risk, or breached |
| **Cost Posture score** | Current [Cost Posture](./cost-posture.md) score with trend |
| **Top recommendations** | Highest-impact [Recommendations](./recommendations.md) by estimated savings |
| **Team spend breakdown** | Per-team costs via [Cost Attribution](./cost-attribution.md) |
| **Open violations** | Count of active [Violations](./violations-and-remediation.md) by severity |

---

## Who it is for

The Executive Dashboard is designed for:

| Audience | What they care about |
|----------|---------------------|
| **Finance / CFO** | Total spend, budget health, savings delivered, cost trends |
| **VP Engineering** | Cost Posture, team-level spend, open violations |
| **FinOps lead** | All of the above, plus recommendation status and posture trends |
| **C-suite** | High-level summary — are we spending wisely? Are costs under control? |

---

## Date range and filtering

| Control | Options |
|---------|---------|
| **Period** | This month, last month, this quarter, last quarter, YTD |
| **Comparison** | Previous period, same period last year |
| **Filter by Connection** | Narrow to specific AWS accounts |
| **Filter by team** | Narrow to specific teams (requires Cost Attribution) |

---

## Sharing and export

### Sharing

The Executive Dashboard can be shared with stakeholders who do not have a frugally.app account:

- **Share link** — Generate a read-only link that expires after a configurable period (7, 30, or 90 days)
- **Scheduled email** — Send a PDF snapshot to a distribution list on a recurring schedule (weekly or monthly)

### Export

Click **Export** to download the dashboard as:

| Format | Best for |
|--------|----------|
| **PDF** | Attaching to emails or presentations |
| **CSV** | Importing data into spreadsheets or BI tools |

---

## Customisation

Admins can customise the Executive Dashboard layout:

- **Reorder widgets** — Drag and drop to prioritise what appears first
- **Show/hide widgets** — Toggle widgets on or off based on audience needs
- **Set default period** — Choose the default date range when the dashboard loads

:::note Enterprise feature
Scheduled email reports and share links are available on the Enterprise plan. PDF and CSV export are available on Pro and Enterprise plans.
:::
