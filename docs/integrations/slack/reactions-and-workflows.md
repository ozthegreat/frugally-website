---
hide_table_of_contents: true
sidebar_position: 5
---

# Reactions and Workflows

frugally.app supports emoji reactions as action triggers and integrates with Slack Workflow Builder for custom automation flows.

---

## Emoji reactions

### How reactions work

When frugally.app posts an Execution result or a Guard notification to a Slack channel, team members can react with specific emoji to trigger actions.

| Emoji | Action | Applies to |
|-------|--------|-----------|
| :white_check_mark: `:white_check_mark:` | Approve a Guard Project | Guard Project submission notifications |
| :x: `:x:` | Reject a Guard Project | Guard Project submission notifications |
| :arrows_counterclockwise: `:arrows_counterclockwise:` | Re-run the Execution | Execution result messages |
| :mag: `:mag:` | Get detailed results | Execution result messages (posts a threaded reply with per-resource breakdown) |

### Permissions

Reactions respect the user's frugally.app role:

- **Approve/Reject** — Only users who are valid approvers for the Project (based on [approval rules](/docs/guard/projects/approval-rules)) can approve or reject via reaction
- **Re-run** — Only Members and above can trigger a re-run
- **Details** — Any team member can request detailed results

If a user without the required permission reacts, frugally.app sends an ephemeral message explaining that the action was not taken.

### Enabling reactions

Emoji reactions are enabled by default. To disable them, navigate to **Settings** > **Slack** > **Reactions** and toggle them off.

:::tip
Emoji reactions make Guard approvals fast and visible to the whole team. Instead of switching to the dashboard, approvers can review the notification and react directly in the channel.
:::

---

## Slack Workflow Builder integration

frugally.app can be used as a step in Slack Workflow Builder, allowing you to create custom automation flows that combine frugally.app actions with other Slack and third-party tools.

### Available workflow steps

| Step | Description | Inputs |
|------|-------------|--------|
| **Run Execution** | Triggers a manual Execution | Target name, action |
| **Run Dry Run** | Triggers a dry run | Target name, action |
| **Get Savings** | Fetches savings data for a period | Period (today, week, month) |
| **Get Schedule Status** | Fetches upcoming schedule information | Target name (optional) |

### Example workflows

#### Scheduled cost report

Send a weekly savings summary to a finance channel every Monday morning:

1. **Trigger:** Scheduled (every Monday at 9 AM)
2. **Step 1:** frugally.app — Get Savings (period: week)
3. **Step 2:** Send message to #finance-updates with savings data

#### Approval escalation

Escalate a Guard Project that has not been approved within 4 hours:

1. **Trigger:** frugally.app posts a Guard Project notification
2. **Step 1:** Wait 4 hours
3. **Step 2:** Check if the Project is still pending
4. **Step 3:** If pending, send a reminder to the #platform-leads channel

#### Emergency shutdown

Allow on-call engineers to trigger an emergency shutdown from a specific channel:

1. **Trigger:** New message in #incidents containing "shutdown"
2. **Step 1:** frugally.app — Run Execution (Target: "All Non-Prod", action: stop)
3. **Step 2:** Post confirmation to #incidents

### Setting up workflows

1. Open **Slack Workflow Builder** (from the Slack sidebar: Automations > Workflows)
2. Create a new workflow or edit an existing one
3. Add a step and search for "frugally" in the step library
4. Select the frugally.app step and configure its inputs
5. Publish the workflow

:::note
Workflow Builder integration requires the Slack workspace to be on a Slack paid plan. The frugally.app steps are available on the Pro and Enterprise plans.
:::
