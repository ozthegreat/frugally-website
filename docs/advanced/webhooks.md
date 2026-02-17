---
hide_table_of_contents: true
sidebar_position: 4
---

# Webhooks

Webhooks let you receive real-time HTTP notifications from frugally.app when events occur — Executions complete, budgets are breached, anomalies are detected, and more. Use them to integrate frugally.app with your own tools, dashboards, or automation pipelines.

---

## What webhooks are

A webhook is an HTTP POST request sent from frugally.app to a URL you specify whenever a configured event occurs. The request body contains a JSON payload describing the event.

---

## When to use webhooks

| Use case | Example |
|----------|---------|
| **Custom dashboards** | Send Execution results to a BI tool or internal dashboard |
| **Incident management** | Trigger a PagerDuty or Opsgenie alert on Execution failure |
| **Cost tracking** | Send cost anomaly data to a finance system |
| **Audit logging** | Forward all events to a centralised logging platform |
| **Custom automation** | Trigger a Lambda function or CI/CD pipeline on specific events |

---

## Configuring webhook endpoints

Navigate to **Settings** > **Webhooks** > **Create Endpoint**.

| Field | Description |
|-------|-------------|
| **URL** | The HTTPS endpoint to receive webhook payloads |
| **Events** | Which event types to send (select one or more) |
| **Description** | A label for this endpoint (e.g. "PagerDuty — failures only") |
| **Enabled** | Whether the endpoint is active |

### Supported events

| Event | Trigger |
|-------|---------|
| `execution.started` | An Execution has begun |
| `execution.completed` | An Execution completed successfully |
| `execution.failed` | An Execution failed |
| `execution.partially_failed` | An Execution completed with partial failures |
| `schedule.activated` | A Schedule was set to Active |
| `schedule.paused` | A Schedule was set to Inactive |
| `budget.threshold_reached` | A Budget threshold was crossed |
| `budget.breached` | A Budget was exceeded |
| `anomaly.detected` | A cost anomaly was detected |
| `anomaly.resolved` | A cost anomaly resolved |
| `violation.created` | A Guard Violation was created |
| `violation.resolved` | A Guard Violation was resolved |
| `project.submitted` | A Guard Project was submitted for review |
| `project.approved` | A Guard Project was approved |
| `project.rejected` | A Guard Project was rejected |
| `scan.completed` | A Guard Scan completed |

---

## Authentication (HMAC signing)

Every webhook request includes an `X-Frugally-Signature` header containing an HMAC-SHA256 signature of the request body. Use this to verify that the request came from frugally.app and was not tampered with.

### Verifying the signature

1. Retrieve your webhook signing secret from **Settings** > **Webhooks** > **Signing Secret**
2. Compute the HMAC-SHA256 of the raw request body using the signing secret
3. Compare the computed signature with the value in the `X-Frugally-Signature` header

### Example (Node.js)

```javascript
const crypto = require('crypto');

function verifyWebhook(body, signature, secret) {
  const computed = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(computed)
  );
}
```

:::caution
Always verify the signature before processing webhook payloads. Unverified webhooks could be spoofed by a third party.
:::

---

## Retry policy

If your endpoint returns a non-2xx status code or does not respond within 10 seconds, frugally.app retries the delivery:

| Attempt | Delay |
|---------|-------|
| 1st retry | 1 minute |
| 2nd retry | 5 minutes |
| 3rd retry | 30 minutes |
| 4th retry | 2 hours |
| 5th retry | 12 hours |

After 5 failed retries, the delivery is marked as failed. You can view failed deliveries and manually retry them from **Settings** > **Webhooks** > **Delivery Log**.

### Automatic disabling

If an endpoint fails to respond to 10 consecutive deliveries, it is automatically disabled. You will receive an email notification. Re-enable it from the Webhooks settings page after fixing the issue.

---

## Payload format

All payloads follow the same envelope structure:

```json
{
  "id": "evt_abc123",
  "type": "execution.completed",
  "timestamp": "2026-02-17T14:30:00Z",
  "data": {
    // Event-specific data
  }
}
```

| Field | Description |
|-------|-------------|
| `id` | Unique event identifier (use for deduplication) |
| `type` | The event type string |
| `timestamp` | ISO 8601 timestamp of when the event occurred |
| `data` | Event-specific payload |

---

## Managing webhooks

From **Settings** > **Webhooks** you can:

- **Edit** — Change the URL, events, or description
- **Disable/Enable** — Toggle without deleting
- **Delete** — Remove the endpoint permanently
- **View delivery log** — See recent deliveries with status, response code, and payload
- **Test** — Send a test payload to verify your endpoint is working
