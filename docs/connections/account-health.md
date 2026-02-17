---
hide_table_of_contents: true
sidebar_position: 5
---

# Account Health

Every Connection and Organisation in frugally.app has a **health status** that reflects whether the IAM role is working and whether enabled features are accessible. frugally.app verifies Connections automatically and displays the result on the Connections page.

---

## Health statuses

| Status | Badge colour | Meaning |
|--------|-------------|---------|
| **Connected** | Green | The IAM role can be assumed and all enabled features are verified. Everything is working. |
| **Degraded** | Yellow | The IAM role works, but one or more enabled features could not be verified. Core scheduling still functions. |
| **Missing Permissions** | Red | frugally.app cannot assume the IAM role, or a required permission is denied. No operations can run. |
| **Disabled** | Grey | The Connection has been deactivated — either manually (set to inactive) or automatically (due to plan limits). |
| **Unknown** | Grey | The Connection has not been verified yet. This is the initial state immediately after creation. |

---

## How verification works

When frugally.app verifies a Connection, it performs these checks in order:

### 1. Assume the IAM role

frugally.app calls `sts:AssumeRole` with the configured role name and External ID.

- **If this fails** → status is set to **Missing Permissions**. No further checks are performed.
- **If this succeeds** → frugally.app receives temporary credentials and proceeds to feature checks.

### 2. Detect organisation membership (member Connections only)

For Connections with scope **Member** that are not yet linked to an Organisation, frugally.app calls `organizations:DescribeOrganization` to check if the account belongs to an AWS Organisation.

- If the account is **not** in an organisation, the scope is automatically changed to **Standalone**.
- If the check fails due to permissions, the result is recorded but does not block the Connection.

### 3. Check enabled features

For each enabled feature, frugally.app makes a test API call:

| Feature | Test call | Success means | Failure means |
|---------|-----------|--------------|---------------|
| **Cost Explorer** | `ce:GetCostAndUsage` (yesterday's data) | CE API is accessible | Missing `ce:` permissions, or CE is not activated in the account |
| **CloudTrail** | `cloudtrail:DescribeTrails` | At least one trail exists | Missing `cloudtrail:` permissions, or no trails configured |
| **CUR** | `cur:DescribeReportDefinitions` | At least one report definition exists | Missing `cur:` permissions, or no CUR configured |

### 4. Determine final status

| Condition | Resulting status |
|-----------|-----------------|
| Role assumption failed | **Missing Permissions** |
| Role works, all features verified | **Connected** |
| Role works, but one or more features failed or were not detected | **Degraded** |
| Connection is inactive or disabled by plan | **Disabled** |

---

## Organisation verification

Organisation verification follows the same pattern but checks additional items:

### Management account detection

frugally.app calls `organizations:DescribeOrganization` and compares the returned management account ID with the account ID you provided. If they don't match, the Organisation is marked as **Degraded**.

### Organisation-level feature checks

| Feature | What is checked |
|---------|----------------|
| **Cost Explorer** | `ce:GetCostAndUsage` is called via the management account credentials |
| **CloudTrail** | `cloudtrail:DescribeTrails` checks for organisation-wide trails (`IsOrganizationTrail: true`) and account-level trails |
| **CUR** | `cur:DescribeReportDefinitions` checks for report definitions |

### Verification payload

The verification result is stored as a JSON payload on the Organisation:

```json
{
  "is_management_account": true,
  "organizations_detected": true,
  "cost_explorer_detected": true,
  "cloudtrail_org_detected": true,
  "cloudtrail_member_detected": false,
  "cloudtrail_detection_method": "organization_trail",
  "cur_detected": true
}
```

| Field | Values | Meaning |
|-------|--------|---------|
| `is_management_account` | `true` / `false` / `null` | Whether the account is the org management account. `null` = could not determine. |
| `organizations_detected` | `true` / `false` / `null` | Whether an AWS Organisation was detected. |
| `cost_explorer_detected` | `true` / `false` / `null` | Whether CE API calls succeed. |
| `cloudtrail_org_detected` | `true` / `false` / `null` | Whether an organisation-wide trail was found. |
| `cloudtrail_member_detected` | `true` / `false` / `null` | Whether an account-level trail was found. |
| `cloudtrail_detection_method` | `organization_trail` / `connection_trail` / `none` / `null` | How CloudTrail was detected. |
| `cur_detected` | `true` / `false` / `null` | Whether CUR report definitions exist. |

A value of `null` means frugally.app was unable to check — typically because the IAM role lacks the required permission.

---

## Troubleshooting

### Missing Permissions

**Symptom:** Connection shows **Missing Permissions** (red badge).

**Cause:** frugally.app cannot assume the IAM role.

**Checklist:**

1. **Role name mismatch** — The role name in frugally.app must exactly match the IAM role name in AWS (case-sensitive). Default: `FrugallyAccessRole` for standalone, `FrugallyOrganizationRole` for management accounts.
2. **External ID mismatch** — The External ID in the frugally.app Connection must match the `sts:ExternalId` condition in the IAM trust policy. Copy it again from the connection form if unsure.
3. **Trust policy principal** — The trust policy must allow `arn:aws:iam::829513654501:root` to assume the role.
4. **Role does not exist** — Verify the role exists in the correct AWS account. You may have created it in the wrong account.
5. **AWS account ID** — Double-check the 12-digit account ID in frugally.app matches the account where the role exists.

**To fix:** Correct the role name, External ID, or trust policy in AWS, then click **Verify** in frugally.app.

---

### Degraded

**Symptom:** Connection shows **Degraded** (yellow badge).

**Cause:** The IAM role works, but one or more enabled features failed verification.

**Checklist:**

1. **Cost Explorer not detected**
   - Ensure the `ce:Get*` permissions are included in the execution policy.
   - Ensure Cost Explorer is [activated in the AWS account](https://console.aws.amazon.com/cost-management/home#/cost-explorer). Cost Explorer must be explicitly enabled in AWS before it can be queried.
   - For Organisation setups, Cost Explorer must be activated in the management account.

2. **CloudTrail not detected**
   - Ensure `cloudtrail:` permissions are in the policy.
   - Ensure at least one trail is configured in the account (or an organisation-wide trail exists).
   - Check the [CloudTrail console](https://console.aws.amazon.com/cloudtrail/home) to verify trails exist.

3. **CUR not detected**
   - Ensure `cur:DescribeReportDefinitions` is in the policy.
   - Ensure a Cost and Usage Report is configured in the [Billing console](https://console.aws.amazon.com/billing/home#/reports).
   - Ensure the S3 bucket permissions (`s3:GetObject`, `s3:ListBucket`) match the bucket where CUR is delivered. The default policy scopes to `*-cur-*` bucket names.

4. **Organisation not detected as management account**
   - The account ID provided may not be the management account. Run `aws organizations describe-organization` to check.

**To fix:** Update the IAM policy or AWS configuration as needed, then click **Verify** in frugally.app.

---

### Disabled

**Symptom:** Connection shows **Disabled** (grey badge).

**Cause:** The Connection is inactive. Two scenarios:

1. **Manually deactivated** — Someone toggled the Connection to inactive. Re-activate it from the Connection edit page.
2. **Plan limit reached** — Your frugally.app plan has a maximum number of active Connections. When you exceed the limit, excess Connections are automatically disabled. Upgrade your plan or remove unused Connections to re-enable.

---

### Unknown

**Symptom:** Connection shows **Unknown** (grey badge).

**Cause:** The Connection was just created and has not been verified yet. Click **Verify** to run the first check. If you just created the Connection, verification usually runs automatically within a few seconds.

---

## Re-verification

You can manually re-verify any Connection or Organisation at any time by clicking **Verify** on the Connections page. This is useful after:

- Updating IAM permissions
- Enabling or disabling features
- Fixing a trust policy issue
- Changing the role name or External ID

The `last_verified_at` timestamp shows when the last verification ran.

---

## Next steps

- [IAM policy reference](./iam-policies.md) — ensure your policies include the right permissions
- [Features](./features.md) — understand what each feature requires
- [Connections overview](./overview.md)
