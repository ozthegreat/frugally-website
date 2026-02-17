---
hide_table_of_contents: true
sidebar_position: 3
---

# Execution Lifecycle

Every Execution moves through a series of stages from creation to completion. Understanding the lifecycle helps you monitor progress, diagnose failures, and know what to expect when an Execution runs.

---

## Lifecycle stages

```
Queued → Running → Succeeded / Failed / Partially Failed
```

| Stage | Description |
|-------|-------------|
| **Queued** | The Execution has been created and is waiting to be processed. This is typically brief (seconds). |
| **Running** | frugally.app is actively calling AWS APIs to perform the action on each resource in the Target. |
| **Succeeded** | All resources in the Target transitioned to the desired state. |
| **Failed** | No resources transitioned — the Execution encountered an error that prevented all actions. |
| **Partially Failed** | Some resources transitioned successfully, but one or more encountered errors. |

`[SCREENSHOT: execution-lifecycle-detail.png -- Execution detail page showing lifecycle stages with timestamps]`

---

## What happens at each stage

### Queued

The Execution is created and placed in the processing queue. This happens when:
- A Schedule's time arrives
- A user clicks **Run Now**
- A user triggers an Execution via Slack

Executions are typically picked up within seconds. If the queue is busy, this stage may last longer.

### Running

frugally.app makes AWS API calls for each resource in the Target:

1. **Describe** — Queries the current state of each resource
2. **Filter** — Skips resources already in the desired state
3. **Act** — Calls the appropriate AWS API (e.g. `ec2:StopInstances`)
4. **Verify** — Confirms the state change (with polling for services that are not instant)

Resources are processed in parallel where possible to minimise Execution duration.

### Succeeded

All resources reached the desired state. The Execution detail shows:
- Each resource with a green status indicator
- Total savings for this Execution (calculated from hourly cost × duration)
- Confidence score

### Failed

No resources could be acted on. Common causes:

| Cause | Resolution |
|-------|------------|
| **IAM permission denied** | Update the Connection's IAM role — see [IAM Role Permissions](/docs/advanced/iam-role-permissions) |
| **Connection unhealthy** | Check the Connection status in [Connections](https://dashboard.frugally.app/connections) |
| **Service quota exceeded** | Check AWS service quotas for the affected region |
| **AWS API error** | Transient error — the next scheduled run will retry automatically |

### Partially Failed

Some resources succeeded, others did not. The Execution detail shows per-resource results so you can identify which resources failed and why.

:::tip
Partially failed Executions are common when a Target spans multiple AWS accounts or regions. One account may have permission issues while others work fine. Review the per-resource errors to pinpoint the issue.
:::

---

## Retry behaviour

frugally.app does not automatically retry failed Executions within the same cycle. However:

- **Scheduled Executions** will naturally retry at the next Schedule interval
- **Manual Executions** can be re-triggered by the user from the Run Now page
- **Transient AWS errors** (throttling, temporary service issues) are handled with exponential backoff during the Running stage

---

## Execution duration

Execution duration depends on:

| Factor | Impact |
|--------|--------|
| **Resource count** | More resources = longer Execution |
| **Service type** | Some AWS APIs respond faster than others |
| **AWS API throttling** | Large batches may be rate-limited by AWS |
| **State verification** | Some services (e.g. RDS) take longer to confirm state changes |

Most Executions complete within 1–5 minutes. Large Targets (100+ resources) may take longer.

---

## Viewing lifecycle details

The Execution detail page shows:

- **Timeline** — Timestamps for each lifecycle stage
- **Per-resource results** — Status, action taken, and any error messages
- **Confidence score** — See [Confidence Scoring](./confidence-scoring.md)
- **Slack notification** — Whether the results were posted to Slack and which channel
