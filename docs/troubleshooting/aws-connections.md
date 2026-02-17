---
hide_table_of_contents: true
sidebar_position: 2
---

# AWS Connections

This page covers troubleshooting for AWS Connection issues — health statuses, IAM permission errors, and feature verification failures.

---

## Connection health statuses

Every Connection in frugally.app has a health status that reflects whether the IAM role is working and enabled features are accessible.

| Status | Badge | Meaning |
|--------|-------|---------|
| **Connected** | Green | IAM role works and all enabled features are verified |
| **Degraded** | Yellow | IAM role works, but one or more features could not be verified. Core scheduling still functions |
| **Missing Permissions** | Red | frugally.app cannot assume the IAM role. No operations can run |
| **Disabled** | Grey | Connection deactivated — manually or due to plan limits |
| **Unknown** | Grey | Connection not yet verified (initial state after creation) |

---

## Missing Permissions

**Symptom:** Connection shows **Missing Permissions** (red badge).

**Cause:** frugally.app cannot call `sts:AssumeRole` to assume your IAM role.

**Checklist:**

1. **Role name mismatch** — The role name in frugally.app must exactly match the IAM role name in AWS (case-sensitive). Default names:
   - Standalone: `FrugallyAccessRole`
   - Organisation management account: `FrugallyOrganizationRole`

2. **External ID mismatch** — The External ID in your frugally.app Connection must match the `sts:ExternalId` condition in the IAM trust policy. Copy it again from the Connection form if unsure.

3. **Trust policy principal** — The IAM trust policy must allow `arn:aws:iam::829513654501:root` to assume the role.

4. **Role does not exist** — Verify the role exists in the correct AWS account. You may have created it in the wrong account.

5. **AWS account ID** — Double-check the 12-digit account ID in frugally.app matches the account where the role exists.

**To fix:** Correct the role name, External ID, or trust policy in AWS, then click **Verify** on the Connections page.

:::tip
The most common cause is a copy-paste error in the External ID. Open the Connection edit page in frugally.app and copy the External ID again.
:::

---

## Degraded

**Symptom:** Connection shows **Degraded** (yellow badge).

**Cause:** The IAM role works, but one or more enabled features failed verification.

### Cost Explorer not detected

- Ensure the `ce:Get*` permissions are included in the execution policy.
- Ensure Cost Explorer is [activated in the AWS account](https://console.aws.amazon.com/cost-management/home#/cost-explorer). Cost Explorer must be explicitly enabled before it can be queried.
- For Organisation setups, Cost Explorer must be activated in the **management account**.

### CloudTrail not detected

- Ensure `cloudtrail:` permissions are in the policy.
- Ensure at least one trail is configured in the account, or an organisation-wide trail exists.
- Check the [CloudTrail console](https://console.aws.amazon.com/cloudtrail/home) to verify trails exist.

### CUR not detected

- Ensure `cur:DescribeReportDefinitions` is in the policy.
- Ensure a Cost and Usage Report is configured in the [Billing console](https://console.aws.amazon.com/billing/home#/reports).
- Ensure the S3 bucket permissions (`s3:GetObject`, `s3:ListBucket`) match the bucket where CUR is delivered. The default policy scopes to `*-cur-*` bucket names.

### Organisation not detected as management account

- The account ID provided may not be the management account. Run `aws organizations describe-organization` in the CLI to check.

**To fix:** Update the IAM policy or AWS configuration as needed, then click **Verify** in frugally.app.

---

## Disabled

**Symptom:** Connection shows **Disabled** (grey badge).

**Cause:** The Connection is inactive. Two possible scenarios:

1. **Manually deactivated** — Someone toggled the Connection to inactive. Re-activate it from the Connection edit page.
2. **Plan limit reached** — Your plan has a maximum number of active Connections. Excess Connections are automatically disabled. Upgrade your plan or remove unused Connections to re-enable.

---

## Unknown

**Symptom:** Connection shows **Unknown** (grey badge).

**Cause:** The Connection was just created and has not been verified yet. Click **Verify** to run the first check. Verification usually runs automatically within a few seconds of creation.

---

## How verification works

When frugally.app verifies a Connection, it performs these checks in order:

### 1. Assume the IAM role

frugally.app calls `sts:AssumeRole` with the configured role name and External ID.

- **Fails** → status is set to **Missing Permissions**. No further checks run.
- **Succeeds** → temporary credentials are obtained and feature checks proceed.

### 2. Detect organisation membership

For Connections with scope **Member**, frugally.app calls `organizations:DescribeOrganization` to check if the account belongs to an AWS Organisation.

- If the account is **not** in an organisation, the scope is automatically changed to **Standalone**.
- If the check fails due to permissions, the result is recorded but does not block the Connection.

### 3. Check enabled features

For each enabled feature, frugally.app makes a test API call:

| Feature | Test call | Success | Failure |
|---------|-----------|---------|---------|
| **Cost Explorer** | `ce:GetCostAndUsage` | CE API is accessible | Missing `ce:` permissions or CE not activated |
| **CloudTrail** | `cloudtrail:DescribeTrails` | At least one trail exists | Missing `cloudtrail:` permissions or no trails |
| **CUR** | `cur:DescribeReportDefinitions` | At least one report exists | Missing `cur:` permissions or no CUR configured |

### 4. Determine final status

| Condition | Status |
|-----------|--------|
| Role assumption failed | **Missing Permissions** |
| Role works, all features verified | **Connected** |
| Role works, one or more features failed | **Degraded** |
| Connection is inactive or disabled by plan | **Disabled** |

---

## Organisation verification

Organisation verification follows the same pattern with additional checks:

- **Management account detection** — frugally.app calls `organizations:DescribeOrganization` and compares the returned management account ID with your account ID. A mismatch results in a **Degraded** status.
- **Organisation-level features** — Cost Explorer, CloudTrail (organisation-wide trails), and CUR are checked via the management account credentials.

---

## Re-verification

You can manually re-verify any Connection at any time by clicking **Verify** on the Connections page. This is useful after:

- Updating IAM permissions
- Enabling or disabling features
- Fixing a trust policy issue
- Changing the role name or External ID

---

## CloudFormation stack issues

If you deployed the IAM role using the CloudFormation template:

| Issue | Solution |
|-------|----------|
| Stack creation failed | Check the **Events** tab in CloudFormation for the specific error. Common causes: insufficient permissions to create IAM roles, or a role with the same name already exists |
| Stack rolled back | The template may reference resources that don't exist in your account. Review the template parameters |
| Stack update failed | If updating an existing stack, ensure you are not removing permissions that frugally.app currently depends on |

---

## Still stuck?

If none of the above resolves your issue:

1. Collect the Connection ID, AWS account ID, and any error messages.
2. Contact [support@frugally.app](mailto:support@frugally.app).

See also:
- [IAM Policy Reference](/docs/advanced/iam-role-permissions) — full policy breakdown
- [Connecting Your AWS Accounts](/docs/getting-started/connecting-your-aws-accounts) — setup guide
- [Connection Features](/docs/automate/overview) — what each feature enables
