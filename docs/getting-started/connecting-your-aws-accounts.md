---
hide_table_of_contents: true
sidebar_position: 2
---

# Connecting Your AWS Accounts

A **Connection** links frugally.app to one of your AWS accounts via an IAM role. Once connected, frugally.app can discover resources, run executions, and pull cost data.

There are two setup paths:

| Path | Best for | Guide |
|------|----------|-------|
| **Organisation Setup Wizard** | Multiple accounts under one AWS Organisation | [Organisation setup →](../connections/organisation-setup.md) |
| **Standalone Connection** | A single AWS account or a quick evaluation | [Standalone setup →](../connections/standalone-setup.md) |

---

## Quick start — Standalone Connection

If you have a single account and want the fastest path:

1. Create an IAM role in your AWS account — trusted account: `829513654501`, with an External ID from frugally.app.
2. Attach a policy granting the permissions frugally.app needs.
3. Fill in the [Add Connection form](https://dashboard.frugally.app/connections/create) with your Account ID, role name, and External ID.
4. Click **Save** — frugally.app verifies the connection automatically.

For the full walkthrough, see [Standalone setup](../connections/standalone-setup.md).

---

## Quick start — Organisation Setup

If you manage multiple accounts in an AWS Organisation:

1. Open the [Organisation Setup Wizard](https://dashboard.frugally.app/aws-organization-setup).
2. Enter your management account details and create the IAM role.
3. The wizard discovers member accounts — select which to onboard.
4. Generate and deploy IAM policies to each member account.
5. Confirm to create all Connections at once.

For the full walkthrough, see [Organisation setup](../connections/organisation-setup.md).

---

## Learn more

- **[Connections overview](../connections/overview.md)** — How connections work, key terminology, and which setup path to choose
- **[Features](../connections/features.md)** — CloudTrail, Cost Explorer, and CUR
- **[Account health](../connections/account-health.md)** — Verification statuses and troubleshooting
- **[IAM policy reference](../connections/iam-policies.md)** — Full policy breakdown with JSON, CloudFormation, and Terraform examples

---

Next up: [Creating Targets](creating-targets.md) — scan your AWS accounts and group resources.
