---
hide_table_of_contents: true
sidebar_position: 4
---

# Dry Runs

A dry run lets you preview what an Execution would do without actually changing any resources. It is the safest way to validate your Target configuration before scheduling real actions.

---

## What a dry run does

When you trigger a dry run, frugally.app:

1. Queries your AWS accounts using the Target's filters (service, regions, tags)
2. Lists all matched resources and the action that **would** be taken on each
3. Reports the current state of each resource (e.g. running, stopped)
4. Calculates what the outcome **would** be (e.g. "would stop", "already stopped")

No changes are made to your AWS environment. Dry runs are completely read-only.

---

## When to use dry runs

| Scenario | Why a dry run helps |
|----------|---------------------|
| **New Target** | Verify that the right resources are matched before creating a Schedule |
| **Changed tags** | Confirm that updated tag filters still select the intended resources |
| **Pre-production check** | Validate a Target before attaching it to a live Schedule |
| **Debugging** | Investigate why an Execution produced unexpected results |

---

## How to trigger a dry run

### From the Dashboard

1. Navigate to **Targets** and select a Target
2. Click **Dry Run** in the Target detail view
3. Choose the action to simulate (e.g. Stop, Start)
4. Review the results

`[SCREENSHOT: dry-run-trigger.png -- Dry run button on the Target detail page]`

### From Slack

Use the `/frugally dry-run` command:

```
/frugally dry-run <target-name> <action>
```

For example:

```
/frugally dry-run "Dev EC2 eu-west-1" stop
```

The results are posted to the channel where you ran the command.

---

## Reading dry run results

The results show a table of matched resources with:

| Column | Description |
|--------|-------------|
| **Resource** | Resource ID and name tag (if available) |
| **Current state** | The resource's current state (e.g. running, stopped, active) |
| **Planned action** | What the Execution would do (e.g. "Would stop", "Already stopped — no action") |
| **Service** | AWS service type |
| **Region** | AWS region |

`[SCREENSHOT: dry-run-results.png -- Dry run results showing matched resources and planned actions]`

:::tip
Resources already in the desired state are marked as "no action". This is normal — frugally.app never takes action on resources that are already in the target state, even in real Executions.
:::

---

## Dry runs vs real Executions

| Aspect | Dry run | Real Execution |
|--------|---------|----------------|
| Changes AWS resources | No | Yes |
| Recorded in Execution history | Yes (marked as dry run) | Yes |
| Counts towards credits | No | Yes |
| Can be triggered from Slack | Yes | Yes |
| Shows matched resources | Yes | Yes |
| Shows confidence score | Yes | Yes |

---

## Next steps

Once your dry run confirms the right resources are matched, you can:

- [Run a manual Execution](../executions/manual-executions.md) to take action immediately
- [Create a Schedule](../schedules/overview.md) to automate the action on a recurring basis
