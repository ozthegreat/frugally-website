---
hide_table_of_contents: true
sidebar_position: 1
---

# General Troubleshooting

This page covers the general approach to troubleshooting issues in frugally.app, how to check platform status, and how to contact support.

---

## Troubleshooting methodology

When something isn't working as expected, follow these steps:

1. **Check the status page** — Confirm there are no ongoing platform incidents.
2. **Review recent changes** — Did you recently update IAM policies, change a Schedule, or modify team settings?
3. **Check the Executions page** — Look for error messages on recent Executions at [dashboard.frugally.app/executions](https://dashboard.frugally.app/executions).
4. **Review Connection health** — Verify your Connections are in a **Connected** state at [dashboard.frugally.app/connections](https://dashboard.frugally.app/connections).
5. **Consult the relevant troubleshooting guide** — Use the topic-specific pages below.
6. **Contact support** if the issue persists.

---

## Platform status

Check the frugally.app status page for real-time information about platform availability and ongoing incidents:

[status.frugally.app](https://status.frugally.app)

You can subscribe to status updates via email or RSS to be notified of incidents automatically.

---

## Topic-specific guides

| Issue area | Guide |
|-----------|-------|
| AWS Connection errors, health statuses, IAM issues | [AWS Connections](aws-connections.md) |
| Execution failures, schedules not triggering | [Executions and Schedules](executions-and-schedules.md) |
| Guard scans, budgets, cost attribution | [Guard](guard.md) |
| GitHub App, IaC scanning, drift detection | [GitHub Integration](github-integration.md) |
| Slash commands, AI intent, Home Tab | [Slack Integration](slack-integration.md) |
| Credits, invoices, plan changes | [Billing and Credits](billing-and-credits.md) |

---

## Collecting information for support

When contacting support, include the following to speed up resolution:

| Information | Where to find it |
|-------------|-----------------|
| **Team ID** | Settings > General |
| **Connection ID** | Connections page — click the Connection to view its ID |
| **Execution ID** | Executions page — click the Execution for details |
| **Schedule ID** | Schedules page — click the Schedule for details |
| **Error message** | Shown on the failed Execution or Connection health check |
| **Timestamp** | When the issue occurred (include timezone) |
| **Browser console logs** | Open Developer Tools (F12) > Console tab |

:::tip
Screenshots of error messages and the browser console are extremely helpful for the support team.
:::

---

## Contacting support

| Channel | Details |
|---------|---------|
| **Email** | [support@frugally.app](mailto:support@frugally.app) |
| **Slack** | If your team has the Slack integration, use `/frugally help` to open a support thread |
| **In-app** | Click the help icon in the bottom-right corner of the dashboard |

Support is available Monday to Friday, 9 AM – 6 PM GMT. Enterprise plan customers have access to priority support with faster response times.

---

## Common quick fixes

| Symptom | Quick fix |
|---------|-----------|
| Dashboard not loading | Clear browser cache and cookies, then try again |
| Stale data showing | Click the refresh icon on the relevant page — some data refreshes on a schedule |
| "Forbidden" error on a page | Check your role — you may not have permission for that feature. See [Roles and Permissions](/docs/roles-and-access/roles-and-permissions) |
| Slack commands not responding | Verify the Slack integration is connected at **Settings** > **Integrations** |
