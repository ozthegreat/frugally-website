---
hide_table_of_contents: true
sidebar_position: 3
---

# Budgets

Budgets let you set spending limits on your AWS costs and receive alerts when consumption approaches or exceeds those limits. They are a core Guard tool for preventing cost overruns.

[View Budgets](https://dashboard.frugally.app/cost-guard/budgets)

---

## Creating a budget

Navigate to **Guard** > **Budgets** > **Create Budget** and fill in:

| Field | Description |
|-------|-------------|
| **Name** | A descriptive label (e.g. "Dev team monthly budget") |
| **Amount** | The spending limit in your account currency |
| **Period** | Monthly, Quarterly, or Annual |
| **Scope** | What the budget covers — all spend, a specific Connection, service, tag, or combination |
| **Alert thresholds** | Percentages at which to send alerts |

`[SCREENSHOT: budget-creation.png -- Budget creation form with amount, period, and threshold fields]`

---

## Budget types

| Period | How it works |
|--------|-------------|
| **Monthly** | Resets on the 1st of each month. Tracks spend for the current calendar month. |
| **Quarterly** | Resets every 3 months (Jan, Apr, Jul, Oct). Tracks spend for the current quarter. |
| **Annual** | Resets on January 1st. Tracks spend for the current calendar year. |

---

## Threshold alerts

Configure one or more alert thresholds as percentages of the budget amount. Common configurations:

| Threshold | Purpose |
|-----------|---------|
| **50%** | Early warning — you are halfway through the budget |
| **80%** | Action needed — approaching the limit |
| **100%** | Budget breached — a [violation](./violations-and-remediation.md) is created |
| **120%** | Significant overspend — escalation may be needed |

Alerts are sent once per threshold per budget period. If spend drops below a threshold and then rises above it again in the same period, the alert is not re-sent.

---

## Budget vs actual spend

The budget detail page shows a chart comparing your budget amount against actual spend over the period:

`[SCREENSHOT: budget-tracking.png -- Budget consumption tracking chart showing budget line and actual spend bars]`

| Element | Description |
|---------|-------------|
| **Budget line** | The configured spending limit |
| **Actual bars** | Daily or monthly spend |
| **Forecast line** | Projected spend for the remainder of the period based on current trajectory |
| **Threshold markers** | Horizontal lines at each configured threshold |

:::tip
If the forecast line exceeds your budget before the period ends, consider taking action now — review the [Cost Explorer](/docs/intelligence/cost-explorer) to identify what is driving the spend.
:::

---

## Budget scoping

Budgets can be scoped to control exactly what spend they track:

| Scope | Tracks spend for |
|-------|-----------------|
| **All** | Total spend across all Connections |
| **Connection** | A specific AWS account |
| **Service** | A specific AWS service (e.g. EC2 only) |
| **Tag** | Resources with specific tags (e.g. `Team:backend`) |
| **Combination** | Multiple filters combined (e.g. EC2 in production account) |

---

## What happens when a budget is breached

When actual spend exceeds 100% of the budget:

1. An alert is sent to configured channels (in-app, Slack, email)
2. A [Violation](./violations-and-remediation.md) is created with severity based on the overspend amount
3. The budget is flagged on the Dashboard and Guard overview

Budgets are **advisory by default** — they do not automatically block spending. For enforced spending controls, combine budgets with Guard [Projects](./projects/overview.md) and approval workflows.

---

## Managing budgets

From the Budgets list page you can:

- **Edit** — Change the amount, period, scope, or thresholds
- **Pause** — Temporarily stop tracking and alerts without deleting the budget
- **Delete** — Remove the budget entirely (historical data is retained)
- **Duplicate** — Create a new budget with the same configuration
