---
hide_table_of_contents: true
sidebar_position: 1
---

# Slack Integration Overview

The Slack integration brings frugally.app into your team's workspace with notifications, slash commands, AI-powered natural-language queries, and a dedicated Home Tab. It is the primary way most teams interact with frugally.app day-to-day.

---

## Capabilities

| Feature | Description |
|---------|-------------|
| **[Slash Commands](./slash-commands.md)** | Trigger Executions, check status, and manage resources directly from Slack |
| **[App Mentions & AI Intent](./app-mentions-and-ai-intent.md)** | Ask `@frugally` questions in natural language and get instant answers |
| **[Home Tab](./home-tab.md)** | A personalised dashboard inside Slack showing schedules, executions, and costs |
| **[Reactions & Workflows](./reactions-and-workflows.md)** | Trigger actions with emoji reactions and integrate with Slack Workflow Builder |

---

## Prerequisites

- Slack workspace admin access (to approve the app installation)
- A frugally.app account with Admin or Owner role

For initial setup instructions, see [Getting Started — Connecting Slack](/docs/getting-started/connecting-slack).

---

## Required Slack scopes

The frugally.app Slack app requests the following OAuth scopes:

| Scope | Purpose |
|-------|---------|
| `commands` | Register and respond to slash commands |
| `chat:write` | Post execution results and notifications to channels |
| `app_mentions:read` | Detect and respond to @frugally mentions |
| `im:write` | Send direct messages for personal notifications |
| `users:read` | Map Slack users to frugally.app team members |
| `usergroups:read` | Sync Slack user groups to frugally.app Groups (Pro) |
| `reactions:read` | Detect emoji reactions that trigger actions |

:::note
frugally.app only reads messages where it is explicitly mentioned or where a slash command is used. It does not read general channel messages.
:::

---

## What Slack can and cannot do

### Can do
- Trigger Executions and dry runs
- Check Execution status and Schedule information
- Ask natural-language questions about costs and resources
- Receive notifications for Executions, Schedules, anomalies, and Guard events
- Approve or reject Guard Projects via reactions

### Cannot do
- Create, edit, or delete Connections, Targets, or Schedules
- Access Intelligence dashboards or Guard configuration
- Manage billing, team members, or settings

All management is done on the [web dashboard](https://dashboard.frugally.app).

---

## Channel configuration

You can configure which Slack channels receive notifications:

| Setting | Where to configure |
|---------|-------------------|
| **Default notification channel** | Settings > Slack > Default Channel |
| **Per-Schedule channel** | On each Schedule's configuration form |
| **Per-Target channel** | On each Target's configuration form |
| **Guard notifications** | Settings > Slack > Guard Channel |

If no channel is specified, notifications go to the default channel. If no default is set, notifications are only visible in the web dashboard.
