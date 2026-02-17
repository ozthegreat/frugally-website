---
hide_table_of_contents: true
sidebar_position: 3
---

# Estimated Savings

Before a Schedule runs, frugally.app calculates an estimated savings figure based on the Target's resources, their hourly costs, and the Schedule's timing. This helps you understand the potential value of your automation before any action is taken.

---

## How estimates are calculated

The estimated savings formula is:

```
Estimated savings = Resource count × Hourly cost × Hours stopped per cycle
```

| Factor | Source |
|--------|--------|
| **Resource count** | The number of AWS resources currently matched by the Target's filters |
| **Hourly cost** | The on-demand rate for each resource type and size (e.g. a `t3.medium` EC2 instance in eu-west-1) |
| **Hours stopped per cycle** | Derived from the Schedule's stop and start times |

### Example

A Target contains 10 EC2 `t3.medium` instances at $0.0416/hr each. The Schedule stops them at 7 PM and starts them at 8 AM on weekdays (13 hours stopped per night, 5 nights per week = 65 hours/week).

```
10 × $0.0416 × 65 = $27.04 per week
```

Projected monthly savings: approximately **$108**.

---

## Where estimates are shown

| Location | What you see |
|----------|--------------|
| **Schedule detail page** | Estimated savings per cycle and per month |
| **Schedules list** | Estimated monthly savings column |
| **Dashboard** | Aggregated projected savings across all active Schedules |
| **Onboarding Wizard** | Per-Target savings estimate at the Schedule suggestion step |

---

## Factors that affect accuracy

Estimates are projections based on current data. Several factors can cause actual savings to differ:

| Factor | Impact |
|--------|--------|
| **Reserved Instances / Savings Plans** | On-demand pricing is used for estimates; actual costs may be lower if resources are covered by commitments |
| **Resource changes** | If resources are added to or removed from the Target between estimate and execution, the actual count will differ |
| **Execution failures** | If an Execution fails to stop some resources, those resources continue running and the savings are not realised |
| **Manual interventions** | Resources started manually outside of frugally.app reduce actual savings |
| **Already-stopped resources** | Resources already in the desired state yield no additional savings |

:::note
Estimates use on-demand pricing as the baseline. If a significant portion of your resources are covered by Reserved Instances or Savings Plans, the actual cost-avoidance will be lower than the estimate — but you are still avoiding unnecessary usage of those commitments.
:::

---

## Estimates vs actuals

To compare estimated savings against actual results over time, see the [Projected vs Actual Savings](/docs/dashboard/projected-vs-actual-savings) chart on the Dashboard.

For detailed execution-level results, see [Execution Lifecycle](../executions/execution-lifecycle.md).
