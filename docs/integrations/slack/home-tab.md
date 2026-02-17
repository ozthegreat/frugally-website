---
hide_table_of_contents: true
sidebar_position: 4
---

# Home Tab

The frugally.app Home Tab gives you a personalised dashboard inside Slack. Open it by clicking on the Frugally app in your Slack sidebar to see upcoming Schedules, recent Executions, cost insights, and billing status without leaving your workspace.

`[SCREENSHOT: slack-home-tab.png -- Frugally Home Tab in Slack showing personalised dashboard]`

---

## What the Home Tab shows

| Section | Content |
|---------|---------|
| **Upcoming Schedules** | Next 5 scheduled Executions with times, Targets, and actions |
| **Recent Executions** | Last 5 Executions with status, Target, and resource count |
| **Savings summary** | Total savings for the current week and month |
| **Cost highlights** | Top spending service and any active anomaly alerts |
| **Billing status** | Current credit balance and plan information |
| **Quick actions** | Buttons to run common commands (Run Now, View Schedules, View Executions) |

---

## Personalisation

The Home Tab content is personalised per user based on their frugally.app [role and scopes](/docs/roles-and-access/overview):

| Factor | Effect |
|--------|--------|
| **Role** | Viewers see read-only data; Members and above see quick action buttons |
| **Scopes** | Only Schedules, Executions, and Targets within the user's Scopes are shown |
| **Notification preferences** | The Home Tab respects mute settings — muted notification types are excluded from highlights |

---

## Quick actions

The Home Tab includes buttons for common tasks:

| Button | Action |
|--------|--------|
| **Run Now** | Opens a modal to select a Target and action for a manual Execution |
| **View Schedules** | Links to the Schedules page in the web dashboard |
| **View Executions** | Links to the Executions page in the web dashboard |
| **View Cost Explorer** | Links to the Cost Explorer in the web dashboard |

:::note
Quick action buttons are only visible to users with Member role or above. Viewers see the data but not the action buttons.
:::

---

## Refresh behaviour

The Home Tab is updated:

- **Automatically** — When you open the Frugally app in Slack, the tab refreshes with the latest data
- **After Executions** — When an Execution completes, the Home Tab is updated within 30 seconds
- **After Schedule changes** — When a Schedule is created, edited, or deleted

---

## Differences from the web Dashboard

| Feature | Slack Home Tab | Web Dashboard |
|---------|---------------|---------------|
| Real-time savings chart | Summary only | Full interactive chart |
| Execution detail | Status and resource count | Full per-resource breakdown |
| Filters | Automatic (based on Scopes) | Manual filter controls |
| Quick actions | Run Now, view links | Full management (create, edit, delete) |
| Guard data | Not shown | Full Guard dashboard |

The Home Tab is designed as a quick-glance overview. For detailed analysis and management, use the [web dashboard](https://dashboard.frugally.app).
