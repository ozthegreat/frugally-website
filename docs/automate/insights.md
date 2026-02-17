---
hide_table_of_contents: true
sidebar_position: 6
---

# Automate Insights

The Insights dashboard provides analytics on your Automate activity — savings over time, execution success rates, and resource coverage. Use it to understand the impact of your automation and identify opportunities for improvement.

[View Insights](https://dashboard.frugally.app/insights)

`[SCREENSHOT: automate-insights.png -- Automate insights dashboard showing savings chart, success rate, and resource coverage]`

---

## Key metrics

### Savings over time

A chart showing total savings broken down by period. Savings are calculated from completed Executions where resources were successfully stopped or scaled down.

| Granularity | Available ranges |
|-------------|-----------------|
| **Daily** | Last 7 days, last 30 days |
| **Weekly** | Last 4 weeks, last 12 weeks |
| **Monthly** | Last 3 months, last 6 months, last 12 months |

### Execution success rate

The percentage of Executions that completed without errors, shown as a trend line alongside total Execution count. A high success rate indicates healthy Targets and IAM configurations.

| Status | Meaning |
|--------|---------|
| **Succeeded** | All resources in the Target transitioned to the desired state |
| **Partially failed** | Some resources transitioned; others encountered errors |
| **Failed** | No resources transitioned — typically an IAM or connectivity issue |

:::tip
If your success rate drops below 90%, review the [Execution Lifecycle](./executions/execution-lifecycle.md) page for troubleshooting guidance, and check that your IAM policies are up to date in [IAM Role Permissions](/docs/advanced/iam-role-permissions).
:::

### Resource coverage

Shows how many of your AWS resources are included in at least one Target, compared to the total discovered resources across your Connections. High coverage means more of your environment is being managed by frugally.app.

---

## Filters and controls

| Filter | Options |
|--------|---------|
| **Date range** | Preset ranges or custom date picker |
| **Connection** | Filter by one or more AWS Connections |
| **Service** | Filter by AWS service type |
| **Target** | Filter by specific Targets |

---

## Using Insights to improve savings

1. **Low resource coverage?** Run the [Onboarding Wizard](./onboarding-wizard.md) to discover resources not yet included in Targets
2. **Low success rate?** Check for IAM permission errors or resources that have been terminated in AWS
3. **Savings plateau?** Review your [Schedules](./schedules/overview.md) — extending stop durations (e.g. including weekends) or adding more Targets can increase savings
4. **Projected vs actual gap?** See the [Projected vs Actual Savings](/docs/dashboard/projected-vs-actual-savings) chart for a detailed comparison
