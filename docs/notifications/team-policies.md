---
hide_table_of_contents: true
sidebar_position: 3
---

# Team Policies

Team notification policies let Admins and Owners set team-wide rules for how notifications are delivered. Policies define which notifications are mandatory, where they are routed, and what the default settings are for all team members.

---

## Configuring team policies

Navigate to **Settings** > **Notifications** > **Team Policies**.

---

## Mandatory vs optional notifications

Each notification type can be set as:

| Setting | Meaning |
|---------|---------|
| **Mandatory** | All team members receive this notification. Individual users cannot mute it. |
| **Optional (enabled by default)** | Enabled for all users, but individuals can mute it in their [preferences](./user-preferences.md). |
| **Optional (disabled by default)** | Disabled for all users, but individuals can enable it in their preferences. |

### Recommended mandatory notifications

| Notification | Why it should be mandatory |
|-------------|---------------------------|
| **Execution failed** | Failed Executions may indicate permission or connectivity issues that need immediate attention |
| **Budget breached** | Budget breaches represent overspend that the team should be aware of |
| **Cost anomaly detected** | Anomalies can indicate billing surprises that compound quickly |
| **Project submitted** | Approvers need to be notified to review pending Projects |

---

## Channel routing rules

Route specific notification types to specific Slack channels:

| Rule | Example |
|------|---------|
| **All Guard notifications → #finops-alerts** | Keep governance alerts in a dedicated channel |
| **All Execution results → #cloud-ops** | Keep automation results in the ops channel |
| **Budget breaches → #finance** | Alert finance stakeholders directly |
| **Critical violations → #incidents** | Route critical issues to the incident channel |

### Creating a routing rule

1. Navigate to **Settings** > **Notifications** > **Team Policies** > **Routing Rules**
2. Click **Add Rule**
3. Select the notification type(s)
4. Select the Slack channel
5. Save

Multiple rules can apply to the same notification type — the notification is sent to all matching channels.

:::note
Routing rules apply in addition to the default channel. If a notification's default is Slack and you add a routing rule to a second channel, it is posted to both.
:::

---

## Digest settings

Admins can set team-wide digest preferences:

| Setting | Options |
|---------|---------|
| **Digest frequency** | Real-time (default), hourly digest, daily digest |
| **Digest time** | For daily digests: what time to send (default: 9 AM in team timezone) |
| **Digest content** | Summary only, or summary with details |

Digest settings apply to email and Slack DM notifications. Channel notifications are always real-time.

Individual users can override the digest setting in their [preferences](./user-preferences.md) if the notification is not mandatory.

---

## Role-based policies

Policies can be scoped to specific roles:

| Policy | Example |
|--------|---------|
| **Admins receive all Guard notifications** | Ensures governance oversight |
| **Viewers receive execution summaries only** | Reduces noise for read-only users |
| **Owner receives all billing notifications** | Keeps the account owner informed |

---

## Policy inheritance

When multiple policies apply, they are merged:

1. **Mandatory** overrides everything — if any policy marks a notification as mandatory, it cannot be muted
2. **Channel routing** is additive — notifications go to all channels specified by all matching policies
3. **Digest settings** use the most frequent option — if one policy says real-time and another says daily, the user gets real-time
