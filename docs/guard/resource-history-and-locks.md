---
hide_table_of_contents: true
sidebar_position: 11
---

# Resource History and Locks

Resource History tracks changes to your AWS resources over time. Resource Locks let you protect critical resources from automation actions. Together, they give you visibility and control over your cloud environment.

---

## Resource History

### What is tracked

frugally.app records a history entry whenever a resource's state changes, whether caused by frugally.app, manual action in AWS, or an external tool.

| Event type | Description |
|-----------|-------------|
| **State change** | Resource started, stopped, scaled, enabled, or disabled |
| **Tag change** | Tags added, modified, or removed |
| **Configuration change** | Instance type changed, capacity adjusted, etc. |
| **Execution action** | Action taken by a frugally.app [Execution](/docs/automate/executions/overview) |
| **Lock/unlock** | Resource lock applied or removed |

### Viewing resource history

Navigate to **Guard** > **Resource History** and search by resource ID, name, or tags.

Each history entry shows:

| Field | Description |
|-------|-------------|
| **Timestamp** | When the change occurred |
| **Event** | What changed (e.g. "Stopped", "Tag added: Environment=dev") |
| **Source** | What caused the change — frugally.app Execution, AWS Console, API, or unknown |
| **User** | The frugally.app user (if the change was made via frugally.app) |
| **Details** | Additional context (Execution ID, before/after values) |

`[SCREENSHOT: resource-history.png -- Resource history timeline showing state changes and their sources]`

:::tip
Resource History is useful for investigating unexpected state changes. If a resource was started outside of frugally.app, the history shows it was an external action, helping you understand why your Schedule's stop action found the resource already running.
:::

---

## Resource Locks

### What resource locks do

A resource lock prevents frugally.app from taking any automation action on a specific resource. Locked resources are skipped during [Executions](/docs/automate/executions/overview) — even if they match a [Target's](/docs/automate/targets/overview) filters.

Use locks to protect critical resources that should never be stopped, scaled, or modified by automation.

### When to use locks

| Scenario | Example |
|----------|---------|
| **Production database** | Lock an RDS instance that must never be stopped, even if it matches a non-production Target's tags |
| **Shared infrastructure** | Lock a NAT Gateway used by multiple teams that should not be deleted by a Schedule |
| **Temporary protection** | Lock a resource during a maintenance window to prevent interference |
| **Migration in progress** | Lock resources being migrated to prevent automation during the transition |

### Locking a resource

1. Navigate to **Guard** > **Resource Locks**
2. Click **Create Lock**
3. Search for the resource by ID, name, or tags
4. Add an optional reason (recommended for audit purposes)
5. Save the lock

You can also lock a resource from its detail page in the Resource History view.

| Field | Description |
|-------|-------------|
| **Resource** | The AWS resource to lock (by ID) |
| **Reason** | Why the lock was applied (free text) |
| **Locked by** | The user who created the lock |
| **Locked at** | When the lock was created |
| **Expires** | Optional expiry date — the lock is automatically removed after this date |

### Unlocking a resource

Remove a lock from the Resource Locks page or the resource's detail view. Unlocking requires the same permission level as locking.

---

## Lock behaviour during Executions

When an Execution encounters a locked resource:

| Behaviour | Detail |
|-----------|--------|
| **Resource is skipped** | The locked resource is not acted upon |
| **Execution continues** | Other (unlocked) resources in the Target proceed normally |
| **Result noted** | The Execution detail shows the resource as "Skipped — locked" |
| **No failure** | A locked resource does not cause the Execution to fail |

---

## Audit trail

All lock and unlock events are recorded in:

- **Resource History** — As a lock/unlock event on the resource's timeline
- **Guard audit log** — As a governance action with the user, timestamp, and reason

---

## Best practices

- **Always add a reason** — Future team members need to understand why a resource is locked
- **Use expiry dates** — For temporary locks, set an expiry to avoid forgotten locks that prevent future automation
- **Review locks regularly** — Check the Resource Locks page periodically to remove locks that are no longer needed
- **Lock sparingly** — Locks should be the exception. If many resources need locking, reconsider your Target filters to exclude them instead
