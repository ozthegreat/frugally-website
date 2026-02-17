---
hide_table_of_contents: true
sidebar_position: 4
---

# How do I cancel or remove frugally.app?

frugally.app uses a credit-based billing model with no standing charge. You only pay for what you use. If you want to stop using frugally.app, there are several options depending on how completely you want to disconnect.

---

## Option 1: Pause usage (keep your account)

If you want to stop incurring costs but keep your account and configuration:

1. **Disable all Schedules** — Go to [Schedules](https://dashboard.frugally.app/schedules) and set each Schedule to **Inactive**. This stops all automated Executions.
2. **Disable Auto Top-Up** — Go to **Settings** > **Billing** > **Auto Top-Up** and toggle it off.

With no active Schedules and no auto top-up, you will not be charged. Your Connections, Targets, and configuration remain in place if you decide to resume later.

---

## Option 2: Uninstall the Slack app

If you want to remove frugally.app from your Slack workspace:

1. Go to **Slack Admin** > **Manage Apps** > **frugally.app** > **Remove App**.
2. This disconnects Slack commands, notifications, and the Home Tab.
3. Your frugally.app account and dashboard access remain active — you can still use the dashboard directly.

---

## Option 3: Delete your account permanently

If you want to permanently delete your account and all associated data:

1. Contact [support@frugally.app](mailto:support@frugally.app) and request account deletion.
2. The support team will confirm the deletion scope with you.
3. Once confirmed, all data is permanently deleted within 30 days.

---

## Data retention after cancellation

| Data type | Retention |
|-----------|-----------|
| **Execution history** | Deleted with account |
| **Cost data** | Deleted with account (this data comes from your AWS account and remains available there) |
| **Team and user data** | Deleted with account |
| **Invoices** | Retained for 7 years for legal and tax compliance |

---

## Credit refund policy

- **Unused credits** are non-refundable. Credits do not expire while your account is active.
- If you believe you were charged in error, contact [support@frugally.app](mailto:support@frugally.app) within 30 days.

---

## Removing IAM roles from AWS

After cancelling, you may want to clean up the IAM roles created for frugally.app:

1. Delete the `FrugallyAccessRole` (or `FrugallyOrganizationRole`) from each AWS account.
2. If you used CloudFormation, delete the CloudFormation stack to remove all associated resources.

Leaving the IAM roles in place has no security impact — they can only be assumed by frugally.app's trusted account, and with no active Connections, they are never used.
