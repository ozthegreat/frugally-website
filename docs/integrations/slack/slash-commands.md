---
hide_table_of_contents: true
sidebar_position: 2
---

# Slash Commands

frugally.app registers the `/frugally` slash command in your Slack workspace. Use it to trigger Executions, check status, and interact with your cloud automation without leaving Slack.

---

## Command reference

### `/frugally run`

Trigger a manual Execution against a Target.

```
/frugally run <target-name> <action>
```

| Parameter | Description |
|-----------|-------------|
| `target-name` | The name of the Target (use quotes if it contains spaces) |
| `action` | The action to perform: `stop`, `start`, `scale-up`, `scale-down`, `enable`, `disable`, `create`, `delete` |

**Examples:**

```
/frugally run "Dev EC2 eu-west-1" stop
/frugally run "Staging RDS" start
/frugally run "Dev ECS Services" scale-down
```

Results are posted to the channel where you ran the command.

---

### `/frugally dry-run`

Simulate an Execution without making changes. See [Dry Runs](/docs/automate/targets/dry-runs) for details.

```
/frugally dry-run <target-name> <action>
```

**Example:**

```
/frugally dry-run "Dev EC2 eu-west-1" stop
```

---

### `/frugally status`

Check the status of recent Executions or a specific Target.

```
/frugally status
/frugally status <target-name>
```

| Usage | What it shows |
|-------|---------------|
| `/frugally status` | Summary of the 5 most recent Executions across all Targets |
| `/frugally status "Dev EC2 eu-west-1"` | Latest Execution and current resource state for the specified Target |

---

### `/frugally schedules`

List active Schedules and their next run times.

```
/frugally schedules
/frugally schedules <target-name>
```

| Usage | What it shows |
|-------|---------------|
| `/frugally schedules` | All active Schedules with next run times |
| `/frugally schedules "Dev EC2 eu-west-1"` | Schedules linked to the specified Target |

---

### `/frugally savings`

Show a savings summary for the current period.

```
/frugally savings
/frugally savings <period>
```

| Period | Description |
|--------|-------------|
| `today` | Savings for today |
| `week` | Savings for the current week |
| `month` | Savings for the current month (default) |

**Example:**

```
/frugally savings week
```

---

### `/frugally help`

Display a list of available commands with brief descriptions.

```
/frugally help
```

---

## Command behaviour

### Permissions

Slash commands respect the user's frugally.app [role and scopes](/docs/roles-and-access/overview). A Viewer cannot run `/frugally run`, and a Member scoped to non-production Connections cannot trigger Executions against production Targets.

If a user lacks permission, Slack responds with an ephemeral message (visible only to them) explaining why the command was denied.

### Response format

- **Ephemeral messages** — Confirmations and errors are shown only to the user who ran the command
- **Channel messages** — Execution results and status updates are posted to the channel so the whole team can see them
- **Threaded replies** — Detailed results (per-resource breakdown) are posted as a thread under the main result message

### Error handling

| Error | Slack response |
|-------|----------------|
| Target not found | "Target not found. Check the name and try again." |
| Invalid action | "Invalid action for this service type. Available actions: stop, start" |
| Permission denied | "You don't have permission to run Executions. Contact your Admin." |
| Execution failed | Error details posted to the channel with a link to the full Execution detail |

:::tip
Use double quotes around Target names that contain spaces. If you are unsure of a Target's exact name, use `/frugally status` to see a list.
:::
