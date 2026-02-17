---
hide_table_of_contents: true
sidebar_position: 2
---

# Notification Types

frugally.app generates notifications for events across Automate, Intelligence, Guard, and team management. This page catalogues every notification type with its default settings.

---

## Automate notifications

| Event | Description | Default channel | Default enabled |
|-------|-------------|----------------|-----------------|
| **Execution started** | An Execution has begun (manual or scheduled) | Slack | Yes |
| **Execution completed** | An Execution finished successfully | Slack + In-app | Yes |
| **Execution failed** | An Execution failed entirely | Slack + In-app + Email | Yes |
| **Execution partially failed** | An Execution completed with some resource failures | Slack + In-app | Yes |
| **Schedule activated** | A Schedule was set to Active | In-app | Yes |
| **Schedule paused** | A Schedule was set to Inactive | In-app | Yes |
| **Schedule created** | A new Schedule was created | In-app | No |
| **Schedule deleted** | A Schedule was removed | In-app | No |
| **Dry run completed** | A dry run finished with results | Slack | Yes |

---

## Intelligence notifications

| Event | Description | Default channel | Default enabled |
|-------|-------------|----------------|-----------------|
| **Cost anomaly detected** | Spending exceeds the configured anomaly threshold | Slack + In-app + Email | Yes |
| **Anomaly resolved** | A previously detected anomaly has returned to normal | In-app | Yes |
| **Commitment expiring** | A Reserved Instance or Savings Plan is expiring within 30 days | Email + In-app | Yes |

---

## Guard notifications

| Event | Description | Default channel | Default enabled |
|-------|-------------|----------------|-----------------|
| **Budget threshold reached** | Spend hit a configured budget threshold (e.g. 80%) | Slack + In-app + Email | Yes |
| **Budget breached** | Spend exceeded 100% of a budget | Slack + In-app + Email | Yes |
| **Violation detected** | A new violation was created | Slack + In-app | Yes |
| **Violation resolved** | A violation was remediated or dismissed | In-app | No |
| **Project submitted** | A Guard Project was submitted for review | Slack + In-app + Email | Yes |
| **Project approved** | A Guard Project was approved | Slack + In-app | Yes |
| **Project rejected** | A Guard Project was rejected | Slack + In-app + Email | Yes |
| **Scan completed** | A Guard Scan finished with results | In-app | No |
| **Scan found critical issues** | A Scan produced Critical or High severity findings | Slack + In-app | Yes |
| **Recommendation generated** | New recommendations are available | In-app | No |
| **Drift detected** | Infrastructure drift was detected by the GitHub integration | Slack + In-app | Yes |

---

## Team management notifications

| Event | Description | Default channel | Default enabled |
|-------|-------------|----------------|-----------------|
| **Member invited** | A new team member was invited | In-app | No |
| **Member joined** | An invited member accepted and joined | In-app | Yes |
| **Member removed** | A team member was removed | In-app | Yes |
| **Role changed** | A member's role was changed | In-app + Email (to affected user) | Yes |
| **Access request submitted** | A user submitted an access request | In-app + Email (to Admins) | Yes |
| **Access request approved** | An access request was approved | In-app + Email (to requester) | Yes |
| **Access request denied** | An access request was denied | In-app + Email (to requester) | Yes |
| **Access expiring** | Time-bound access is about to expire | In-app + Email (to affected user) | Yes |

---

## Billing notifications

| Event | Description | Default channel | Default enabled |
|-------|-------------|----------------|-----------------|
| **Credits running low** | Credit balance is below 20% | Email (to Owner) | Yes |
| **Credits exhausted** | Credit balance has reached zero | Email (to Owner) + In-app | Yes |
| **Auto top-up triggered** | An automatic credit top-up was processed | Email (to Owner) | Yes |
| **Invoice generated** | A new invoice is available | Email (to Owner) | Yes |
| **Payment failed** | A payment attempt failed | Email (to Owner) | Yes |

---

## Customising defaults

The default settings above can be overridden at two levels:

1. **[Team Policies](./team-policies.md)** — Admins can change which channels are used and make specific notifications mandatory
2. **[User Preferences](./user-preferences.md)** — Individual users can mute non-mandatory notifications or change delivery preferences
