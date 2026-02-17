---
hide_table_of_contents: true
sidebar_position: 2
---

# Guard API v1

The Guard API provides programmatic access to Guard features — projects, budgets, violations, scans, and cost posture. Use it to integrate governance checks into CI/CD pipelines, build custom dashboards, or automate remediation workflows.

For authentication and general API conventions, see the [API Reference Overview](overview.md).

---

## Projects

### List projects

```
GET /v1/guard/projects
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | `string` | Filter by status: `active`, `archived` |
| `connection_id` | `string` | Filter by Connection ID |
| `page` | `integer` | Page number (default: 1) |
| `per_page` | `integer` | Results per page (default: 25, max: 100) |

**Example response:**

```json
{
  "data": [
    {
      "id": "proj_abc123",
      "name": "Production Infrastructure",
      "status": "active",
      "connection_ids": ["conn_xyz789"],
      "budget_count": 3,
      "violation_count": 12,
      "created_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-03-01T14:22:00Z"
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 25,
    "total_pages": 1,
    "total_count": 1
  }
}
```

### Get a project

```
GET /v1/guard/projects/:id
```

Returns the full project object including nested budget and approval rule summaries.

### Create a project

```
POST /v1/guard/projects
```

**Request body:**

```json
{
  "name": "Staging Environment",
  "connection_ids": ["conn_xyz789"],
  "approval_rules": {
    "require_approval_above": 500,
    "approvers": ["user_abc", "user_def"]
  }
}
```

### Update a project

```
PATCH /v1/guard/projects/:id
```

### Delete a project

```
DELETE /v1/guard/projects/:id
```

:::caution
Deleting a project permanently removes all associated budgets, violations, and scan history. This action cannot be undone.
:::

---

## Budgets

### List budgets

```
GET /v1/guard/budgets
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project_id` | `string` | Filter by project |
| `status` | `string` | `active`, `breached`, `archived` |
| `sort` | `string` | Sort field (e.g. `-amount`, `name`) |

**Example response:**

```json
{
  "data": [
    {
      "id": "budget_def456",
      "project_id": "proj_abc123",
      "name": "Monthly EC2 spend",
      "amount": 5000.00,
      "currency": "USD",
      "period": "monthly",
      "current_spend": 3200.50,
      "percentage_used": 64.01,
      "status": "active",
      "thresholds": [
        { "percentage": 80, "notified_at": null },
        { "percentage": 100, "notified_at": null }
      ],
      "created_at": "2025-02-01T09:00:00Z"
    }
  ],
  "meta": { ... }
}
```

### Get a budget

```
GET /v1/guard/budgets/:id
```

### Create a budget

```
POST /v1/guard/budgets
```

**Request body:**

```json
{
  "project_id": "proj_abc123",
  "name": "Monthly EC2 spend",
  "amount": 5000.00,
  "currency": "USD",
  "period": "monthly",
  "thresholds": [80, 100],
  "tags": {
    "Service": "ec2"
  }
}
```

### Update a budget

```
PATCH /v1/guard/budgets/:id
```

### Delete a budget

```
DELETE /v1/guard/budgets/:id
```

---

## Violations

### List violations

```
GET /v1/guard/violations
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project_id` | `string` | Filter by project |
| `budget_id` | `string` | Filter by budget |
| `severity` | `string` | `info`, `warning`, `critical` |
| `status` | `string` | `open`, `acknowledged`, `resolved` |
| `sort` | `string` | Sort field (default: `-created_at`) |

**Example response:**

```json
{
  "data": [
    {
      "id": "viol_ghi789",
      "project_id": "proj_abc123",
      "budget_id": "budget_def456",
      "type": "budget_threshold_breach",
      "severity": "warning",
      "status": "open",
      "message": "Monthly EC2 spend has reached 80% of the $5,000 budget.",
      "current_value": 4000.00,
      "threshold_value": 4000.00,
      "created_at": "2025-03-10T15:45:00Z"
    }
  ],
  "meta": { ... }
}
```

### Get a violation

```
GET /v1/guard/violations/:id
```

### Acknowledge a violation

```
POST /v1/guard/violations/:id/acknowledge
```

**Request body:**

```json
{
  "note": "Reviewed — expected spike due to load testing."
}
```

### Resolve a violation

```
POST /v1/guard/violations/:id/resolve
```

---

## Scans

### List scans

```
GET /v1/guard/scans
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project_id` | `string` | Filter by project |
| `status` | `string` | `pending`, `running`, `completed`, `failed` |

### Get a scan

```
GET /v1/guard/scans/:id
```

Returns the scan result including findings.

### Trigger a scan

```
POST /v1/guard/scans
```

**Request body:**

```json
{
  "project_id": "proj_abc123"
}
```

:::note
Triggering a scan consumes credits. See [Credit Usage and Enforcement](/docs/billing/credit-usage-and-enforcement) for details.
:::

---

## Findings

### List findings

```
GET /v1/guard/findings
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `scan_id` | `string` | Filter by scan |
| `project_id` | `string` | Filter by project |
| `severity` | `string` | `low`, `medium`, `high`, `critical` |
| `status` | `string` | `open`, `suppressed`, `resolved` |

**Example response:**

```json
{
  "data": [
    {
      "id": "find_jkl012",
      "scan_id": "scan_mno345",
      "project_id": "proj_abc123",
      "resource_id": "i-0abc123def456",
      "resource_type": "ec2:instance",
      "severity": "high",
      "status": "open",
      "title": "Untagged EC2 instance running in production",
      "description": "Instance i-0abc123def456 is missing required cost-allocation tags.",
      "recommendation": "Add the required tags: Environment, Owner, CostCentre.",
      "created_at": "2025-03-10T16:00:00Z"
    }
  ],
  "meta": { ... }
}
```

---

## Cost posture

### Get cost posture

```
GET /v1/guard/cost-posture
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project_id` | `string` | Filter by project (optional — omit for team-wide) |
| `date` | `string` | Date in `YYYY-MM-DD` format (default: today) |

**Example response:**

```json
{
  "data": {
    "score": 72,
    "max_score": 100,
    "grade": "B",
    "breakdown": {
      "budget_compliance": 85,
      "tag_coverage": 60,
      "recommendation_adoption": 70
    },
    "trend": "improving",
    "date": "2025-03-10"
  }
}
```

---

## Webhooks for Guard events

Guard events can also be delivered to webhook endpoints. See [Webhook Payloads](webhook-payloads.md) for the full payload schemas and [Webhooks](/docs/advanced/webhooks) for configuration.
