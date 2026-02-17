---
hide_table_of_contents: true
sidebar_position: 4
---

# Alert Management

Alerts are triggered when monitoring conditions are met — an anomaly is detected, a threshold is crossed, or a resource count changes unexpectedly. This page covers creating alert rules, managing severity, and handling alert lifecycle.

---

## Alert rules

Alert rules define the conditions under which an alert is triggered. Each rule combines a signal, a condition, and a severity level.

### Creating an alert rule

Navigate to **Monitoring** > **Alerts** > **Create Rule**.

| Field | Description |
|-------|-------------|
| **Name** | Descriptive label (e.g. "EC2 spend spike > 30%") |
| **Signal** | The signal to monitor (e.g. daily EC2 spend, running instance count) |
| **Condition** | When to trigger (e.g. value exceeds baseline by 30%, value drops below 5) |
| **Severity** | Info, Warning, or Critical |
| **Notification** | Where to send the alert (channels, users, or groups) |
| **Enabled** | Whether the rule is active |

### Condition types

| Type | Description | Example |
|------|-------------|---------|
| **Above threshold** | Signal exceeds a fixed value | Alert when daily spend > $500 |
| **Below threshold** | Signal drops below a fixed value | Alert when running EC2 count < 3 |
| **Percentage change** | Signal changes by more than a percentage vs baseline | Alert when spend increases > 25% |
| **Anomaly** | Baseline-driven detection (automatic) | Alert when any cost anomaly is detected |

---

## Alert severity levels

| Severity | Meaning | Default routing |
|----------|---------|----------------|
| **Info** | Informational — no action required | In-app only |
| **Warning** | Needs attention — review within the day | In-app + Slack |
| **Critical** | Immediate action required | In-app + Slack + Email |

Severity determines the default [notification](/docs/notifications/overview) routing. Admins can override routing via [team policies](/docs/notifications/team-policies).

---

## Alert lifecycle

```
Triggered → Active → Acknowledged → Resolved
```

| Status | Description |
|--------|-------------|
| **Triggered** | The condition was met and the alert was created |
| **Active** | The alert is still ongoing (condition still true) |
| **Acknowledged** | Someone has seen the alert and is investigating |
| **Resolved** | The condition is no longer met, or the alert was manually resolved |

### Automatic resolution

Alerts are automatically resolved when:

- The signal returns to within the configured threshold
- The anomaly that triggered the alert resolves
- The alert rule is disabled or deleted

### Manual resolution

Click **Resolve** on any active alert to close it manually. Add a resolution note explaining what action was taken.

---

## Managing alerts

Navigate to **Monitoring** > **Alerts** to see all alerts.

| View | Description |
|------|-------------|
| **Active alerts** | All currently triggered or acknowledged alerts |
| **Alert history** | All past alerts with their resolution status and notes |
| **Alert rules** | All configured rules with enable/disable toggles |

### Filtering alerts

| Filter | Options |
|--------|---------|
| **Severity** | Info, Warning, Critical |
| **Status** | Active, Acknowledged, Resolved |
| **Signal type** | Cost, Usage, Resource count |
| **Connection** | Specific AWS accounts |
| **Date range** | Custom date range for history view |

---

## Routing alerts to specific channels or users

Each alert rule can specify where its alerts are delivered:

| Routing option | Description |
|----------------|-------------|
| **Slack channel** | Post to a specific Slack channel |
| **User** | Send to a specific frugally.app user (via DM and email) |
| **Group** | Send to all members of a [Group](/docs/roles-and-access/groups) |
| **Escalation** | If not acknowledged within a time window, escalate to a higher-severity channel |

### Escalation rules

| Setting | Description |
|---------|-------------|
| **Escalation delay** | How long to wait before escalating (e.g. 30 minutes, 1 hour, 4 hours) |
| **Escalation target** | Where to send the escalated alert (e.g. #incidents channel, on-call user) |
| **Escalation severity** | Optionally raise the severity on escalation (e.g. Warning → Critical) |

---

## Best practices

- **Start broad, then refine** — Create a few key alert rules and tune thresholds based on real data before adding more
- **Use severity meaningfully** — Reserve Critical for issues that truly need immediate action; over-use leads to alert fatigue
- **Set escalation rules** — Ensure critical alerts do not go unnoticed if the primary responder is unavailable
- **Review alert history monthly** — Look for patterns that indicate the need for new rules or threshold adjustments
- **Combine with Guard** — Use alerts for real-time detection and Guard [Budgets](/docs/guard/budgets) for spending limits
