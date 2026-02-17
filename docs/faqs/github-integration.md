---
hide_table_of_contents: true
sidebar_position: 6
---

# GitHub Integration

Common questions about the frugally.app GitHub integration — installation, IaC scanning, drift detection, and PR reviews.

---

## What does the GitHub integration do?

The GitHub integration connects frugally.app to your GitHub repositories to provide:

- **IaC scanning** — Analyse Terraform, CloudFormation, and Pulumi files in pull requests for cost and compliance issues
- **Drift detection** — Compare your IaC-defined state against live AWS resources to identify manual changes
- **PR review and authorship** — Track who changed what infrastructure and surface cost impact in PR comments

See [GitHub Integration Overview](/docs/integrations/github/overview) for a full introduction.

---

## How do I install the GitHub App?

1. Go to **Settings** > **Integrations** > **GitHub** in the [frugally.app dashboard](https://dashboard.frugally.app/settings/integrations).
2. Click **Connect GitHub** and follow the authorisation flow.
3. Select which repositories the app should have access to.

You need **Owner** or **Admin** permissions in your GitHub organisation to install apps. For the full walkthrough, see [GitHub Installation](/docs/integrations/github/installation).

---

## Which IaC tools are supported?

| Tool | File types | Supported |
|------|-----------|-----------|
| **Terraform** | `.tf`, `.tfvars` | Yes |
| **CloudFormation** | `.yaml`, `.json` (with CloudFormation template markers) | Yes |
| **Pulumi** | Language-specific files with Pulumi configuration | Yes |
| **CDK** | Synthesised CloudFormation output | Yes (via CloudFormation scanning) |

---

## Is the GitHub integration required?

No. The GitHub integration is entirely optional. frugally.app's core features (Automate, Intelligence, Guard) work without it. The integration adds shift-left capabilities for teams that manage infrastructure as code.

---

## Does IaC scanning slow down my PRs?

IaC scans typically complete within 30–60 seconds. The scan runs as a GitHub check and does not block merging unless you configure branch protection rules to require it.

---

## Does drift detection modify my AWS resources?

No. Drift detection is read-only. It compares the desired state (from IaC) against the live state (from AWS) and reports differences. It never makes changes to your AWS resources.

---

## Troubleshooting

For common issues with the GitHub integration, see [GitHub Integration Troubleshooting](/docs/troubleshooting/github-integration).
