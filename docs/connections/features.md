---
hide_table_of_contents: true
sidebar_position: 4
---

# Features

Every Connection and Organisation in frugally.app can enable optional **features** beyond the core resource scheduling. Features grant frugally.app read access to additional AWS services — Cost Explorer, CloudTrail, and Cost and Usage Reports (CUR).

Features are toggled on or off independently. Each one requires its own set of IAM permissions on the role. See the [IAM policy reference](./iam-policies.md) for the exact permissions each feature needs.

---

## Feature summary

| Feature | Purpose | AWS cost | IAM permissions required |
|---------|---------|----------|------------------------|
| **Cost Explorer** | Spend analysis, forecasts, savings tracking | $0.01 per API call | `ce:Get*` actions |
| **CloudTrail** | Audit logs — who changed what and when | None (read-only) | `cloudtrail:Describe*`, `cloudtrail:Get*`, `cloudtrail:LookupEvents` |
| **CUR** | Detailed line-item billing data from S3 | None (read-only, but CUR delivery to S3 may have storage costs) | `cur:DescribeReportDefinitions`, `s3:GetObject`, `s3:ListBucket` |

---

## Cost Explorer

### What it does

When Cost Explorer is enabled, frugally.app can:

- Show **daily and monthly spend** for the connected account
- Generate **cost forecasts** based on historical data
- Break down costs by **service, region, tag, or linked account**
- Track **reservation and Savings Plans utilisation**
- Power the **Cost Intelligence** dashboard

### How to enable

Toggle **Cost Explorer** when creating or editing a Connection or Organisation. If enabled at the Organisation level, all member Connections inherit Cost Explorer access automatically — you do not need to enable it on each member Connection individually.

:::note Organisation-level Cost Explorer
When Cost Explorer is enabled on an Organisation, frugally.app queries the management account's Cost Explorer API, which has visibility into all member account spending. This is the recommended approach for multi-account setups because it provides consolidated billing data in a single query.
:::

### AWS cost implications

AWS charges **$0.01 (USD) per Cost Explorer API call**. frugally.app enforces rate limits to keep costs predictable:

| Limit | Default | Enterprise plan |
|-------|---------|----------------|
| **Daily API call cap** | 3 calls/day | 12 calls/day |
| **Monthly USD cap** | $1.00/month | $5.00/month |
| **Absolute maximum** | $20.00/month | $20.00/month |

If a cap is reached, Cost Explorer queries are paused until the next period. The Connection remains healthy — only Cost Explorer queries are affected.

You can adjust the daily and monthly caps when creating or editing the Connection. The absolute maximum of $20/month cannot be overridden.

### Cost Explorer configuration fields

| Field | Description |
|-------|-------------|
| `cost_explorer_enabled` | Whether the feature is active. |
| `ce_monthly_usd_cap` | Maximum monthly spend on CE API calls (USD). |
| `ce_daily_call_cap` | Maximum CE API calls per day. |
| `ce_enabled_at` | When the feature was first activated. Set automatically. |
| `ce_last_query_at` | Timestamp of the most recent CE API call. |
| `ce_disabled_reason` | If CE was automatically disabled (e.g. cap exceeded), the reason is stored here. |

### IAM permissions

```json
{
  "Sid": "FrugallyCostExplorerReadAccess",
  "Effect": "Allow",
  "Action": [
    "ce:GetCostAndUsage",
    "ce:GetCostForecast",
    "ce:GetDimensionValues",
    "ce:GetTags",
    "ce:GetReservationUtilization",
    "ce:GetSavingsPlansUtilization"
  ],
  "Resource": "*"
}
```

---

## CloudTrail

### What it does

When CloudTrail is enabled, frugally.app can:

- Read **audit trail events** to show who started, stopped, or modified resources
- Detect whether **organisation-wide trails** or **account-level trails** are configured
- Surface audit data alongside execution history for compliance visibility

### How to enable

Toggle **CloudTrail** when creating or editing a Connection or Organisation. At the Organisation level, frugally.app detects whether an organisation-wide trail exists and uses it automatically.

### Detection methods

frugally.app uses `cloudtrail:DescribeTrails` to detect what type of trail is configured:

| Detection method | Meaning |
|-----------------|---------|
| **Organisation trail** | An organisation-wide trail exists (`IsOrganizationTrail: true`). frugally.app reads events from this trail. |
| **Connection trail** | Only account-level trails exist. frugally.app reads events from the local trail. |
| **None** | No trails detected. The feature will show as **Degraded** in [account health](./account-health.md). |

### IAM permissions

```json
{
  "Sid": "FrugallyCloudTrailReadAccess",
  "Effect": "Allow",
  "Action": [
    "cloudtrail:DescribeTrails",
    "cloudtrail:GetTrailStatus",
    "cloudtrail:LookupEvents",
    "cloudtrail:GetEventSelectors"
  ],
  "Resource": "*"
}
```

---

## Cost and Usage Reports (CUR)

### What it does

When CUR is enabled, frugally.app can:

- Read **detailed line-item billing data** from the S3 bucket where AWS delivers your CUR
- Provide more granular cost breakdowns than Cost Explorer alone

### Prerequisites

Before enabling CUR in frugally.app, you must have a Cost and Usage Report configured in your AWS account. CUR is set up in the [AWS Billing console](https://console.aws.amazon.com/billing/home#/reports).

frugally.app detects existing reports by calling `cur:DescribeReportDefinitions`. If no reports are found, the feature will show as **Degraded**.

### How to enable

Toggle **CUR** when creating or editing a Connection or Organisation. Ensure the IAM role has both `cur:` and `s3:` permissions — CUR data is stored in S3, so frugally.app needs read access to the S3 bucket.

### IAM permissions

```json
[
  {
    "Sid": "FrugallyCURReadAccess",
    "Effect": "Allow",
    "Action": [
      "cur:DescribeReportDefinitions"
    ],
    "Resource": "*"
  },
  {
    "Sid": "FrugallyCURS3ReadAccess",
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:ListBucket"
    ],
    "Resource": [
      "arn:aws:s3:::*-cur-*",
      "arn:aws:s3:::*-cur-*/*"
    ]
  }
]
```

:::note S3 bucket scope
The S3 permissions are scoped to buckets matching the pattern `*-cur-*`. If your CUR S3 bucket does not contain `cur` in its name, you will need to add the specific bucket ARN to the policy. See the [IAM policy reference](./iam-policies.md) for customisation guidance.
:::

---

## Feature inheritance in Organisations

When a feature is enabled at the **Organisation level** (on the management account), it affects all member Connections:

| Feature | Organisation-level behaviour |
|---------|------------------------------|
| **Cost Explorer** | Member Connections inherit access. Queries go through the management account, which has consolidated billing visibility. You do not need to enable CE on individual members. |
| **CloudTrail** | If an organisation-wide trail exists, it is detected automatically. Individual members can also have their own trails. |
| **CUR** | Typically configured at the organisation level. Members inherit access through the management account's S3 bucket. |

### Disabling features

- **Connection-level features** can be toggled off at any time without affecting other Connections.
- **Organisation-level features** apply to all member Connections. Disabling a feature on the Organisation removes it from all members.
- If Cost Explorer is enabled at the Organisation level, you cannot enable it independently on a member Connection — it is managed centrally.

---

## Next steps

- [Account health and troubleshooting](./account-health.md) — see how features affect verification status
- [IAM policy reference](./iam-policies.md) — full policy details for every feature
- [Connections overview](./overview.md)
