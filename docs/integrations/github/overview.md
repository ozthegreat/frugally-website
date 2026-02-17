---
hide_table_of_contents: true
sidebar_position: 1
---

# GitHub Integration Overview

The GitHub integration connects frugally.app to your Infrastructure-as-Code repositories. It scans pull requests for cost impact, detects drift between IaC definitions and live AWS resources, and tracks infrastructure authorship for cost attribution.

---

## Capabilities

| Feature | Description |
|---------|-------------|
| **[Installation](./installation.md)** | Install and configure the GitHub App for your organisation |
| **[IaC Scanning](./iac-scanning.md)** | Scan PRs for Terraform, CloudFormation, CDK, Pulumi, and OpenTofu changes with cost-impact analysis |
| **[Drift Detection](./drift-detection.md)** | Compare IaC definitions against live AWS state and alert on mismatches |
| **[PR Review & Authorship](./pr-review-and-authorship.md)** | Automated cost-impact comments on PRs and infrastructure change tracking |

---

## Supported IaC frameworks

| Framework | File patterns | Notes |
|-----------|---------------|-------|
| **Terraform** | `*.tf`, `*.tf.json` | HCL and JSON formats |
| **CloudFormation** | `*.yaml`, `*.yml`, `*.json` (with AWSTemplateFormatVersion) | YAML and JSON templates |
| **AWS CDK** | `cdk.out/**/*.template.json` | Synthesised CloudFormation templates |
| **Pulumi** | `Pulumi.yaml`, `*.ts`, `*.py`, `*.go` | Pulumi project files |
| **OpenTofu** | `*.tf`, `*.tf.json` | Same syntax as Terraform |

---

## Prerequisites

- GitHub organisation admin access (to approve the App installation)
- At least one repository containing IaC files
- A frugally.app account with Admin or Owner role

For initial setup, see [Getting Started — Connecting GitHub](/docs/getting-started/connecting-github).

---

## Required GitHub App permissions

The frugally.app GitHub App requests:

| Permission | Access | Purpose |
|-----------|--------|---------|
| **Repository contents** | Read | Read IaC files for scanning and drift detection |
| **Pull requests** | Read & Write | Post cost-impact comments on PRs |
| **Issues** | Read | Reference issues linked to infrastructure changes |
| **Checks** | Read & Write | Report scan results as GitHub check runs |
| **Metadata** | Read | Access repository metadata |

:::note
frugally.app only accesses the repositories you grant it access to during installation. It does not read source code unrelated to infrastructure definitions.
:::

---

## What GitHub can and cannot do

### Can do
- Scan IaC files in PRs for cost impact
- Detect drift between IaC and live AWS state
- Post automated review comments with cost estimates
- Track who changed infrastructure and when
- Report results as GitHub check runs

### Cannot do
- Modify repository contents or merge PRs
- Access source code unrelated to IaC files
- Create, edit, or delete frugally.app resources (Connections, Targets, Schedules)
- Manage billing, team members, or settings

All management is done on the [web dashboard](https://dashboard.frugally.app).
