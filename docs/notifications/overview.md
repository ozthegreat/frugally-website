---
hide_table_of_contents: true
sidebar_position: 1
---

# Notifications Overview

frugally.app sends notifications to keep your team informed about Executions, Schedules, cost anomalies, Guard events, and access changes. Notifications can be delivered in-app, via Slack, or by email.

---

## Notification channels

| Channel | Description | Configuration |
|---------|-------------|---------------|
| **In-app** | Notifications appear in the frugally.app dashboard notification centre | Always enabled |
| **Slack** | Messages posted to configured Slack channels | Requires [Slack integration](/docs/getting-started/connecting-slack) |
| **Email** | Emails sent to team members | Enabled per user in notification preferences |

---

## How notifications relate to integrations

Slack is both an **integration** (with slash commands, AI mentions, and the Home Tab) and a **notification channel**. The distinction is:

| Aspect | Integration features | Notification features |
|--------|---------------------|----------------------|
| **Direction** | User → frugally.app (commands, queries) | frugally.app → user (alerts, results) |
| **Configuration** | Settings > Slack | Settings > Notifications |
| **Content** | Responses to user actions | Automatic alerts and updates |

For Slack integration features (commands, mentions, Home Tab), see [Integrations — Slack](/docs/integrations/slack/overview).

---

## Notification layers

Notifications are configured at two levels:

| Level | Who controls it | What it controls |
|-------|----------------|-----------------|
| **[Team policies](./team-policies.md)** | Admins and Owners | Which notifications are mandatory, where they are routed, and team-wide defaults |
| **[User preferences](./user-preferences.md)** | Individual users | Personal overrides for non-mandatory notifications (mute, channel, digest vs real-time) |

Team policies set the baseline; user preferences customise on top of it.

---

## In this section

- **[Notification Types](./notification-types.md)** — Full catalogue of all notification events
- **[Team Policies](./team-policies.md)** — Admin-managed team-wide notification rules
- **[User Preferences](./user-preferences.md)** — Individual notification customisation
