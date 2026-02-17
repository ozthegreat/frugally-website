---
hide_table_of_contents: true
sidebar_position: 3
---

# Projected vs Actual Savings

The projected vs actual savings chart on the Dashboard compares what your Schedules are expected to save against the savings measured from completed Executions. This helps you understand whether your automation is delivering the value you expect.

`[SCREENSHOT: projected-vs-actual.png -- Projected vs actual savings chart with date range filter]`

---

## How projected savings are calculated

Projected savings are estimated using:

- **Resource hourly cost** — The on-demand rate for each resource in the Target
- **Schedule duration** — How long resources are stopped or scaled down per Schedule cycle
- **Resource count** — The number of matched resources in each Target

For example, if a Target contains 5 EC2 instances costing $0.10/hr each, and the Schedule stops them for 14 hours per weekday, the projected daily saving is 5 × $0.10 × 14 = **$7.00**.

:::note
Projected savings use on-demand pricing. If your resources are covered by Reserved Instances or Savings Plans, actual savings may differ from projections.
:::

---

## How actual savings are measured

Actual savings are calculated from completed Execution results. When an Execution successfully stops or scales down a resource, frugally.app records the duration the resource remained in the reduced state and multiplies it by the resource's hourly cost.

Actual savings only count time where resources were **confirmed stopped or scaled** — if an Execution fails or a resource is manually restarted, that time is excluded.

---

## Filters and controls

| Filter | Options |
|--------|---------|
| **Date range** | Last 7 days, last 30 days, this month, last month, custom range |
| **Connection** | Filter by one or more AWS Connections |
| **Service** | Filter by AWS service type (EC2, RDS, ECS, etc.) |

---

## Reading the chart

The chart displays two data series:

- **Projected** (dashed line) — Expected savings based on active Schedules and current Target configurations
- **Actual** (solid line) — Measured savings from completed Executions

When the actual line is significantly below the projected line, common causes include:

- **Failed Executions** — Check the [Executions page](https://dashboard.frugally.app/executions) for errors
- **Resources already stopped** — Resources were in the desired state before the Execution ran
- **Target configuration changes** — Resources were added or removed from Targets mid-period
- **Manual interventions** — Resources were started manually outside of frugally.app

:::tip
A healthy setup shows the actual and projected lines tracking closely. If they diverge consistently, review your Target configurations and Execution history to identify the cause.
:::
