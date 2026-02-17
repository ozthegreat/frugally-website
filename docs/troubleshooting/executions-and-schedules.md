---
hide_table_of_contents: true
sidebar_position: 3
---

# Executions and Schedules

This page covers troubleshooting for Execution failures and Schedules not triggering as expected.

---

## Execution failures

### Common failure causes

| Cause | Symptom | Solution |
|-------|---------|----------|
| **IAM permission denied** | Error message references `AccessDenied` or `UnauthorizedAccess` | Update the IAM policy to include the required permissions. See [IAM Policy Reference](/docs/advanced/iam-role-permissions) |
| **Resource not found** | Error references a specific resource ID that no longer exists | The resource may have been terminated outside of frugally.app. Remove it from the Target or re-scan |
| **Connection unhealthy** | Execution fails immediately with a connection error | Check the Connection health on the [Connections page](https://dashboard.frugally.app/connections). See [AWS Connections](aws-connections.md) |
| **Rate limiting** | AWS API throttling errors | frugally.app automatically retries throttled requests. If it persists, reduce the number of resources in the Target or stagger Schedules |
| **Resource in transitional state** | Resource is in a `pending`, `stopping`, or `shutting-down` state | Wait for the resource to reach a stable state and retry. frugally.app skips resources in transitional states |

### Partial failures

An Execution can partially succeed — some resources are actioned while others fail. Check the Execution detail page for per-resource results:

- **Actioned** — The resource was successfully stopped/started/scaled
- **Already in state** — The resource was already in the desired state (no action needed)
- **Failed** — The action failed for this specific resource (hover for the error message)
- **Skipped** — The resource was skipped (e.g. due to a lock or transitional state)

:::tip
Partial failures are common when IAM permissions are correct for some resource types but missing for others. Check which resources failed and ensure the IAM policy covers those specific services.
:::

### Execution stuck in "Running"

If an Execution appears stuck in the **Running** state:

1. **Wait** — Large Targets with many resources can take several minutes. frugally.app processes resources in batches.
2. **Check AWS** — Verify the resources in AWS to see if they have actually changed state.
3. **Timeout** — Executions have a maximum runtime. If exceeded, the Execution is marked as **Failed** with a timeout error.

---

## Schedule not triggering

### The Schedule is paused

**Symptom:** The Schedule exists but no Executions are created at the expected time.

**Check:** Open the Schedule and verify the **Status** is **Active** (not Inactive). Paused Schedules do not trigger Executions.

### Timezone mismatch

**Symptom:** The Execution runs at the wrong time.

**Cause:** The Schedule's timezone does not match your expectation.

**Check:** Open the Schedule and confirm the timezone is correct. All times are interpreted in the configured timezone.

:::tip
If your team spans multiple timezones, consider creating separate Schedules per region. See [CRON and Schedule Types](/docs/automate/schedules/cron-and-schedule-types#timezone-handling) for DST behaviour.
:::

### No Targets assigned

**Symptom:** The Schedule triggers but the Execution has zero resources.

**Check:** Ensure the Schedule has at least one Target assigned. Open the Schedule and verify the **Targets** field is not empty.

### Target has no resources

**Symptom:** The Execution completes with "0 resources found".

**Cause:** The Target's tag filters or Connection scope do not match any resources.

**Check:**
1. Open the Target and review the tag filters.
2. Run a [dry run](/docs/automate/targets/dry-runs) to see which resources the Target currently matches.
3. Verify the Connection is healthy.

### Day-of-week configuration

**Symptom:** The Schedule does not trigger on certain days.

**Check:** For Weekly schedules, verify the correct days are selected. For CRON expressions, check the day-of-week field (0 = Sunday, 1 = Monday, etc.). See [Schedule Format Reference](/docs/advanced/schedule-format#day-of-week-reference).

### One-time schedule already ran

**Symptom:** A one-time Schedule does not run again.

**Cause:** One-time Schedules trigger once at the configured date and time, then become inactive. They do not repeat.

---

## DST transitions

frugally.app handles Daylight Saving Time automatically:

| Scenario | Behaviour |
|----------|-----------|
| **Spring forward** (clocks skip ahead) | If the scheduled time falls in the skipped hour, the Execution runs at the next valid minute |
| **Fall back** (clocks repeat an hour) | The Execution runs once on the first occurrence of the repeated hour |

If you need schedules that are unaffected by DST, set the timezone to **UTC**.

---

## Debugging steps

1. **Check Execution history** — Go to [Executions](https://dashboard.frugally.app/executions) and look for the expected Execution. If it exists, click it to view details and per-resource results.
2. **Check Schedule next run** — Open the Schedule and look at the **Next run** field. If it shows a future time, the Schedule is configured correctly and will trigger at that time.
3. **Check Connection health** — A failed Connection blocks all Executions for that Connection.
4. **Run a manual Execution** — Trigger the Target manually to test whether the issue is with the Schedule timing or the Execution itself. See [Manual Executions](/docs/automate/executions/manual-executions).

---

## Still stuck?

Collect the following and contact [support@frugally.app](mailto:support@frugally.app):

- Schedule ID and configuration
- Execution ID (if one was created)
- Expected vs actual trigger time
- Any error messages shown
