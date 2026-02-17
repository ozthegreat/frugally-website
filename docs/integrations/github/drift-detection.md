---
hide_table_of_contents: true
sidebar_position: 4
---

# Drift Detection

Drift detection compares your Infrastructure-as-Code definitions against the live state of your AWS resources. When the two diverge — for example, someone changes a resource manually in the AWS console — frugally.app flags it as drift and alerts your team.

---

## What drift is

**Drift** occurs when the actual state of an AWS resource no longer matches what your IaC code defines. Common causes:

| Cause | Example |
|-------|---------|
| **Manual console change** | Someone changes an instance type in the AWS console without updating Terraform |
| **Emergency fix** | A security group rule is added manually during an incident and never back-ported to code |
| **Automation outside IaC** | A Lambda function is updated by a CI/CD pipeline that does not go through the IaC workflow |
| **AWS auto-scaling** | Auto Scaling changes desired capacity, which differs from the IaC-defined value |

---

## How drift detection works

1. frugally.app reads your IaC definitions from the connected GitHub repositories
2. It queries the live state of the corresponding AWS resources via your [Connections](/docs/getting-started/connecting-your-aws-accounts)
3. It compares the two and identifies differences
4. Drift is reported as alerts with severity levels

---

## Drift detection frequency

| Mode | How it works |
|------|-------------|
| **Scheduled** | Runs automatically on a configurable schedule (default: daily at 6 AM UTC) |
| **On-demand** | Triggered manually from **Settings** > **GitHub** > **Run Drift Detection** |
| **Post-merge** | Runs automatically after a PR containing IaC changes is merged |

Configure the schedule at **Settings** > **GitHub** > **Drift Detection**.

---

## Drift alerts

When drift is detected, frugally.app creates an alert with:

| Field | Description |
|-------|-------------|
| **Resource** | The AWS resource that has drifted |
| **IaC definition** | What the code says the resource should look like |
| **Live state** | What the resource actually looks like in AWS |
| **Diff** | A side-by-side comparison of the differences |
| **Severity** | Based on the type and impact of the drift |
| **Repository** | Which IaC repository defines the resource |
| **File** | The specific file and line number |

### Severity levels

| Severity | Criteria |
|----------|----------|
| **Critical** | Security-related drift (e.g. security group rules changed, encryption disabled) |
| **High** | Cost-impacting drift (e.g. instance type upgraded, additional resources created) |
| **Medium** | Configuration drift that may affect behaviour (e.g. environment variables changed) |
| **Low** | Cosmetic drift (e.g. tags changed, descriptions updated) |

---

## Alert delivery

Drift alerts are delivered through:

| Channel | Configuration |
|---------|---------------|
| **In-app** | Always enabled — alerts appear in the dashboard under Guard |
| **Slack** | Posted to the configured Guard channel |
| **GitHub** | Posted as an issue or PR comment in the affected repository |
| **Email** | Based on user notification preferences |

---

## Remediation options

When drift is detected, you can:

| Action | Description |
|--------|-------------|
| **Update IaC** | Modify your code to match the live state (accept the manual change) |
| **Revert in AWS** | Change the AWS resource back to match the IaC definition |
| **Create a Guard Project** | Propose a formal change through the [approval workflow](/docs/guard/projects/workflow) |
| **Dismiss** | Mark the drift as accepted with a reason (e.g. "Expected — auto-scaling behaviour") |

---

## Configuring drift detection

Navigate to **Settings** > **GitHub** > **Drift Detection**:

| Setting | Description |
|---------|-------------|
| **Schedule** | How often drift detection runs (hourly, daily, weekly, custom CRON) |
| **Repositories** | Which repositories to include in drift detection |
| **Resource types** | Which AWS resource types to check (default: all) |
| **Exclusions** | Specific resources or attributes to exclude (e.g. auto-scaling desired capacity) |
| **Severity thresholds** | Minimum severity to create alerts |

:::tip
Exclude attributes that change frequently by design (like Auto Scaling desired capacity or ECS running task count) to reduce noise. Focus drift detection on attributes that should only change through code.
:::

---

## Drift detection and frugally.app Automate

frugally.app Automate actions (stopping, starting, scaling resources) are **not flagged as drift** by default. frugally.app recognises its own actions and excludes them from drift comparisons. If you want to include Automate-caused state changes in drift detection, enable this in **Settings** > **GitHub** > **Drift Detection** > **Include Automate actions**.
