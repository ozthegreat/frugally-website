---
hide_table_of_contents: true
sidebar_position: 4
---

# Webhook Payloads

This page documents the payload schemas for each webhook event type. For webhook configuration, HMAC verification, and retry policies, see [Webhooks](/docs/advanced/webhooks).

---

## Common envelope

Every webhook delivery wraps the event-specific payload in a common envelope:

```json
{
  "id": "evt_abc123def456",
  "type": "execution.completed",
  "timestamp": "2025-03-10T19:00:05Z",
  "team_id": "team_xyz",
  "data": { ... }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique event ID — use for deduplication |
| `type` | `string` | Event type (see table below) |
| `timestamp` | `string` | ISO 8601 timestamp of when the event occurred |
| `team_id` | `string` | The team that owns the resource |
| `data` | `object` | Event-specific payload (documented per event below) |

---

## Event types

| Event type | Trigger |
|------------|---------|
| `execution.started` | An Execution begins running |
| `execution.completed` | An Execution finishes successfully |
| `execution.failed` | An Execution fails |
| `schedule.activated` | A Schedule is activated (set to Active) |
| `schedule.paused` | A Schedule is paused (set to Inactive) |
| `budget.threshold_breached` | A budget threshold is crossed |
| `budget.exceeded` | Spend exceeds the budget amount |
| `violation.created` | A new Guard violation is detected |
| `violation.resolved` | A Guard violation is resolved |
| `scan.completed` | A Guard scan finishes |
| `finding.created` | A new scan finding is detected |
| `anomaly.detected` | A cost anomaly is detected |
| `connection.health_changed` | A Connection health status changes |
| `access_request.submitted` | An access request is submitted |
| `access_request.approved` | An access request is approved |
| `access_request.denied` | An access request is denied |

---

## Execution events

### `execution.started`

```json
{
  "id": "evt_001",
  "type": "execution.started",
  "timestamp": "2025-03-10T19:00:00Z",
  "team_id": "team_xyz",
  "data": {
    "execution_id": "exec_abc123",
    "target_id": "target_def456",
    "target_name": "Dev EC2 Instances",
    "action": "stop",
    "trigger": "schedule",
    "schedule_id": "sched_ghi789",
    "schedule_name": "Dev Weekday Stop",
    "resource_count": 12,
    "connection_id": "conn_jkl012"
  }
}
```

### `execution.completed`

```json
{
  "data": {
    "execution_id": "exec_abc123",
    "target_id": "target_def456",
    "target_name": "Dev EC2 Instances",
    "action": "stop",
    "trigger": "schedule",
    "schedule_id": "sched_ghi789",
    "resource_count": 12,
    "resources_actioned": 10,
    "resources_already_in_state": 2,
    "resources_failed": 0,
    "duration_seconds": 45,
    "estimated_savings_usd": 28.50
  }
}
```

### `execution.failed`

```json
{
  "data": {
    "execution_id": "exec_abc123",
    "target_id": "target_def456",
    "target_name": "Dev EC2 Instances",
    "action": "stop",
    "trigger": "manual",
    "triggered_by": "user_abc",
    "error_code": "iam_permission_denied",
    "error_message": "Unable to assume IAM role FrugallyAccessRole in account 123456789012.",
    "resource_count": 12,
    "resources_actioned": 0,
    "resources_failed": 12
  }
}
```

---

## Schedule events

### `schedule.activated`

```json
{
  "data": {
    "schedule_id": "sched_ghi789",
    "name": "Dev Weekday Stop",
    "activated_by": "user_abc",
    "next_run_at": "2025-03-11T19:00:00Z",
    "timezone": "Europe/London"
  }
}
```

### `schedule.paused`

```json
{
  "data": {
    "schedule_id": "sched_ghi789",
    "name": "Dev Weekday Stop",
    "paused_by": "user_abc"
  }
}
```

---

## Budget events

### `budget.threshold_breached`

```json
{
  "data": {
    "budget_id": "budget_def456",
    "project_id": "proj_abc123",
    "project_name": "Production Infrastructure",
    "budget_name": "Monthly EC2 spend",
    "amount": 5000.00,
    "current_spend": 4005.00,
    "percentage_used": 80.1,
    "threshold_percentage": 80,
    "currency": "USD",
    "period": "monthly"
  }
}
```

### `budget.exceeded`

```json
{
  "data": {
    "budget_id": "budget_def456",
    "project_id": "proj_abc123",
    "project_name": "Production Infrastructure",
    "budget_name": "Monthly EC2 spend",
    "amount": 5000.00,
    "current_spend": 5120.00,
    "overspend": 120.00,
    "percentage_used": 102.4,
    "currency": "USD",
    "period": "monthly"
  }
}
```

---

## Violation events

### `violation.created`

```json
{
  "data": {
    "violation_id": "viol_ghi789",
    "project_id": "proj_abc123",
    "project_name": "Production Infrastructure",
    "type": "budget_threshold_breach",
    "severity": "warning",
    "message": "Monthly EC2 spend has reached 80% of the $5,000 budget.",
    "budget_id": "budget_def456"
  }
}
```

### `violation.resolved`

```json
{
  "data": {
    "violation_id": "viol_ghi789",
    "project_id": "proj_abc123",
    "resolved_by": "user_abc",
    "resolution_note": "Budget increased to $7,000 for Q2."
  }
}
```

---

## Scan events

### `scan.completed`

```json
{
  "data": {
    "scan_id": "scan_mno345",
    "project_id": "proj_abc123",
    "project_name": "Production Infrastructure",
    "status": "completed",
    "findings_count": 5,
    "findings_by_severity": {
      "critical": 0,
      "high": 2,
      "medium": 2,
      "low": 1
    },
    "duration_seconds": 30
  }
}
```

### `finding.created`

```json
{
  "data": {
    "finding_id": "find_jkl012",
    "scan_id": "scan_mno345",
    "project_id": "proj_abc123",
    "resource_id": "i-0abc123def456",
    "resource_type": "ec2:instance",
    "severity": "high",
    "title": "Untagged EC2 instance running in production",
    "recommendation": "Add the required tags: Environment, Owner, CostCentre."
  }
}
```

---

## Anomaly events

### `anomaly.detected`

```json
{
  "data": {
    "anomaly_id": "anom_pqr678",
    "connection_id": "conn_jkl012",
    "service": "Amazon EC2",
    "metric": "daily_cost",
    "expected_value": 150.00,
    "actual_value": 420.00,
    "deviation_percentage": 180.0,
    "severity": "critical",
    "period_start": "2025-03-10",
    "period_end": "2025-03-10"
  }
}
```

---

## Connection events

### `connection.health_changed`

```json
{
  "data": {
    "connection_id": "conn_jkl012",
    "account_id": "123456789012",
    "previous_status": "connected",
    "new_status": "degraded",
    "reason": "Cost Explorer verification failed — ce:GetCostAndUsage permission denied."
  }
}
```

---

## Access request events

### `access_request.submitted`

```json
{
  "data": {
    "request_id": "req_stu901",
    "requested_by": "user_ghi",
    "requested_by_email": "charlie@example.com",
    "resource_type": "project",
    "resource_id": "proj_abc123",
    "resource_name": "Production Infrastructure",
    "role_requested": "contributor",
    "reason": "Need to review Q2 budget compliance."
  }
}
```

### `access_request.approved` / `access_request.denied`

```json
{
  "data": {
    "request_id": "req_stu901",
    "decided_by": "user_abc",
    "decision": "approved",
    "note": "Approved for Q2."
  }
}
```

---

## Verifying webhook signatures

Each webhook delivery includes an `X-Frugally-Signature` header containing an HMAC-SHA256 signature. Verify it against the raw request body using your webhook signing secret:

```python
import hmac
import hashlib

def verify_signature(payload_body, signature_header, secret):
    expected = hmac.new(
        secret.encode('utf-8'),
        payload_body,
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature_header)
```

For full details, see [Webhooks — HMAC signing](/docs/advanced/webhooks).
