---
hide_table_of_contents: true
sidebar_position: 2
---

# Manual Executions

A manual Execution lets you run an action against one or more Targets immediately, without waiting for a Schedule. Use it to test your setup, handle ad-hoc needs, or respond to unexpected situations.

---

## When to use manual Executions

| Scenario | Example |
|----------|---------|
| **Testing a new Target** | Run a Stop action manually to verify the right resources are matched before creating a Schedule |
| **Ad-hoc shutdown** | Shut down dev environments before a holiday without modifying your regular Schedule |
| **Emergency response** | Scale down resources immediately in response to a cost anomaly |
| **Weekend work** | Start resources that are normally off on weekends for a one-time work session |

---

## Running from the Dashboard

1. Navigate to **Run Now** or click the **Run Now** button on the Targets page

   [Run Now](https://dashboard.frugally.app/run-now)

2. Fill in the form:

   | Field | Description |
   |-------|-------------|
   | **Targets** | Select one or more Targets (multi-select) |
   | **Action** | Depends on the service type — Stop/Start, Scale Up/Down, Enable/Disable, Create/Delete |
   | **Slack channel** *(optional)* | Where to post results |

3. Click **Run** to start the Execution

`[SCREENSHOT: run-now-form.png -- Run Now form with Target selection and action picker]`

:::note
If Slack is not connected, the channel field will not appear. Results are always visible on the [Executions page](https://dashboard.frugally.app/executions).
:::

---

## Running from Slack

Use the `/frugally run` slash command to trigger a manual Execution directly from Slack:

```
/frugally run <target-name> <action>
```

### Examples

| Command | What it does |
|---------|--------------|
| `/frugally run "Dev EC2 eu-west-1" stop` | Stops all resources in the "Dev EC2 eu-west-1" Target |
| `/frugally run "Staging RDS" start` | Starts all resources in the "Staging RDS" Target |
| `/frugally run "Dev ECS" scale-down` | Scales down all ECS services in the "Dev ECS" Target |

Results are posted to the channel where you ran the command.

:::tip
Use double quotes around Target names that contain spaces.
:::

---

## Viewing results

After triggering a manual Execution, you can track its progress in two places:

1. **[Executions page](https://dashboard.frugally.app/executions)** — Full detail with per-resource results
2. **Slack** — Summary posted to the selected channel (if configured)

Manual Executions follow the same [lifecycle stages](./execution-lifecycle.md) as scheduled Executions.

---

## Manual Executions and credits

Manual Executions consume [credits](/docs/category/billing) just like scheduled Executions. [Dry runs](../targets/dry-runs.md) do not consume credits and are a good way to validate before running a real Execution.
