---
hide_table_of_contents: true
sidebar_position: 2
---

# How do I access the dashboard?

The frugally.app dashboard is your team's central hub for managing Connections, Targets, Schedules, Guard projects, cost intelligence, and billing.

---

## Accessing the dashboard

Go to [dashboard.frugally.app](https://dashboard.frugally.app) and log in with one of the supported methods:

| Login method | Details |
|-------------|---------|
| **Slack** | Sign in with your Slack account. Available to all users in connected workspaces |
| **Email + password** | Available if your team has email login enabled |
| **SSO (SAML)** | Available on the Enterprise plan. See [Setting Up SAML SSO](/docs/sso/setting-up-saml-sso) |

---

## Who can access the dashboard?

Access depends on how your team is configured:

- **Slack login** — By default, Slack workspace Admins, Owners, and the user who installed frugally.app can access the dashboard. Additional users can be invited by a team admin.
- **SSO** — Any user provisioned via your identity provider can access the dashboard (subject to role assignments).
- **Invited users** — Team admins can invite users directly from **Settings** > **Team** > **Invite Member**.

For details on what each role can see and do, see [Roles and Permissions](/docs/roles-and-access/roles-and-permissions).

---

## Dashboard overview

Once logged in, the dashboard shows:

- **Savings summary** — Real-time and projected savings across all Connections
- **Onboarding checklist** — Setup progress for new teams
- **Recent Executions** — Latest stop/start actions and their results
- **Active Schedules** — Upcoming scheduled actions

For a detailed tour, see [Dashboard Overview](/docs/dashboard/overview).

---

## Trouble logging in?

| Symptom | Solution |
|---------|----------|
| "You don't have access" after Slack login | Ask a team admin to invite you, or check that your Slack role meets the requirements |
| SSO redirect fails | Verify your SSO configuration. See [SSO Troubleshooting](/docs/sso/troubleshooting) |
| Forgotten password | Use the "Reset password" link on the login page |
| Dashboard loads but shows no data | You may not have any Connections set up yet. See [Connecting Your AWS Accounts](/docs/getting-started/connecting-your-aws-accounts) |
