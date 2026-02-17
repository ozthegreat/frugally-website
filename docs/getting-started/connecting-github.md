---
hide_table_of_contents: true
sidebar_position: 5
---

# Connecting GitHub

The GitHub integration lets frugally.app scan your Infrastructure-as-Code repositories, detect drift between IaC definitions and live AWS resources, and add cost-impact comments to pull requests. It's optional but recommended if your team manages infrastructure through code.

:::note
GitHub is for **IaC scanning, drift detection, and PR reviews**. All core management — Connections, Targets, Schedules, and Guard — is done on the [web dashboard](https://dashboard.frugally.app).
:::

## Prerequisites

- GitHub organisation admin access (to approve the app installation)
- At least one repository containing IaC files (Terraform, CloudFormation, CDK, Pulumi, or OpenTofu)

## Installing the GitHub App

### 1. Open the Install page

Navigate to **Settings** > **Install GitHub App** in the dashboard, or use the link below.

[Install GitHub App](https://dashboard.frugally.app/github/install)

`[SCREENSHOT: github-app-install.png — GitHub App installation prompt]`

### 2. Authorise in GitHub

Click **Install GitHub App**. GitHub shows the permissions frugally.app requests — repository contents (read), pull requests (read/write), and issues (read). Select your organisation and choose which repositories to grant access to.

:::tip
You can grant access to **all repositories** or select specific ones. You can change this later from your GitHub organisation's Installed Apps settings.
:::

### 3. Confirm connection

You'll be redirected back to the dashboard. The status shows **Connected** along with the repositories frugally.app can access.

`[SCREENSHOT: github-connection-success.png — Successful GitHub connection confirmation]`

## What you can do with GitHub

- **IaC scanning** — Automatically scan pull requests for Terraform, CloudFormation, CDK, Pulumi, and OpenTofu changes with cost-impact analysis
- **Drift detection** — Compare your IaC definitions against live AWS resource state and receive alerts when they diverge
- **PR cost-impact reviews** — Get automated comments on infrastructure PRs showing the estimated cost impact of proposed changes
- **Authorship tracking** — Track who changed what infrastructure for cost attribution in Guard

## What GitHub cannot do

GitHub **cannot** create, edit, or delete Connections, Targets, or Schedules. It also cannot manage budgets or approval workflows. All of these are managed via the [web dashboard](https://dashboard.frugally.app).

:::tip
You can skip this step and return later. Automations and Guard work without GitHub — the integration adds IaC-aware features on top.
:::

---

For a deeper look at each GitHub feature, see the **Integrations — GitHub** section of the documentation.

Next up: [Running an Execution](running-an-execution.md) — test your setup with a manual action.
