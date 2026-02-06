---
hide_table_of_contents: true
sidebar_position: 4
---

# Connecting Slack

The Slack integration gives you execution notifications and quick actions directly in your workspace. It's optional but recommended — especially before creating schedules, so you can select a notification channel.

:::note
Slack is for **notifications and quick actions only**. All management — creating Connections, Targets, and Schedules — is done on the [web dashboard](https://dashboard.frugally.app).
:::

## Prerequisites

- Slack workspace admin access (to approve the app installation)
- A Slack channel for frugally.app notifications (e.g. `#cloud-ops`)

## Installing the Slack app

### 1. Open the Install page

Navigate to **Settings** > **Install Slack App** in the dashboard, or use the link below.

[Install Slack App](https://dashboard.frugally.app/install-slack-app)

`[SCREENSHOT: install-slack-app.png — dashboard Install Slack App page]`

### 2. Authorise in Slack

Click **Install to Slack**. Slack's OAuth screen shows the permissions frugally.app requests. Review and click **Allow**.

`[SCREENSHOT: slack-oauth-permissions.png — Slack OAuth screen]`

### 3. Confirm connection

You'll be redirected back to the dashboard. The status shows **Connected**.

`[SCREENSHOT: slack-connected-status.png — Connected status]`

## What you can do with Slack

- **Execution notifications** — Receive results in a Slack channel after every execution
- **Quick actions** — Trigger schedules directly from Slack
- **Home tab overview** — See upcoming schedules and recent activity from the Frugally Home tab in Slack

`[SCREENSHOT: slack-home-tab.png — Frugally Home tab in Slack]`

## What Slack cannot do

Slack **cannot** create, edit, or delete Connections, Targets, or Schedules. It also cannot access Cost Intelligence or Cost Guard. All of these are managed via the [web dashboard](https://dashboard.frugally.app).

:::tip
You can skip this step and return later. Executions and Schedules work without Slack — results are always visible on the [Executions page](https://dashboard.frugally.app/executions).
:::

---

Next up: [Running an Execution](running-an-execution.md) — test your setup with a manual action.
