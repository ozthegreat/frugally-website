---
hide_table_of_contents: true
sidebar_position: 3
---

# Project Workflow

Every Guard Project follows a versioned workflow from initial proposal through approval to execution. The workflow ensures changes are reviewed, approved by the right people, and tracked with a full audit trail.

---

## Workflow stages

```
Draft → Submitted → Approved / Rejected → Executed
```

| Stage | Description |
|-------|-------------|
| **Draft** | The Project is being prepared. It can be edited freely. |
| **Submitted** | The Project has been submitted for review. Approval rules are evaluated. |
| **Approved** | All approval rules are satisfied. The change can proceed. |
| **Rejected** | One or more approvers have rejected the Project. It can be revised and resubmitted. |
| **Executed** | The approved change has been carried out. The Project is closed. |

`[SCREENSHOT: guard-project-workflow.png -- Project approval workflow showing stages with status indicators]`

---

## What triggers each transition

### Draft → Submitted

The Project creator clicks **Submit for Review**. At this point:

- The Project is locked for editing (a new version must be created to make changes)
- Notifications are sent to all potential approvers
- The approval clock starts

### Submitted → Approved

All [approval rules](./approval-rules.md) are satisfied. This happens when:

- The required number of approvers have approved
- All conditional rules that apply have been met

### Submitted → Rejected

Any approver clicks **Reject** and provides a reason. The Project returns to a state where the creator can:

- **Revise and resubmit** — Create a new version with changes addressing the feedback
- **Withdraw** — Cancel the Project entirely

### Approved → Executed

The Project creator or an Admin marks the change as executed. This can happen when:

- The infrastructure change has been applied (manually or via Automate)
- The Project is linked to an [Execution](/docs/automate/executions/overview) that has completed

---

## Versioning

Every significant change to a Project creates a new version. The version history records:

| Field | Detail |
|-------|--------|
| **Version number** | Sequential (v1, v2, v3, etc.) |
| **Changed by** | The user who made the change |
| **Changed at** | Timestamp |
| **Changes** | What was modified (description, resources, cost estimate, etc.) |
| **Reason** | Why the change was made (especially after rejection) |

Previous versions are read-only and preserved for audit purposes.

:::tip
When a Project is rejected, create a new version that addresses the feedback rather than starting from scratch. The version history shows reviewers what changed between submissions.
:::

---

## Notifications at each stage

| Transition | Who is notified |
|------------|-----------------|
| **Draft → Submitted** | All potential approvers (based on approval rules) |
| **Approval received** | Project creator, other pending approvers |
| **Submitted → Approved** | Project creator, all approvers |
| **Submitted → Rejected** | Project creator |
| **Approved → Executed** | All approvers, project creator |

Notifications are delivered via:
- **In-app** — Always enabled
- **Slack** — If a channel is configured for Guard notifications
- **Email** — Based on user notification preferences

---

## Audit trail

Every action on a Project is logged in its audit trail:

- Who created, edited, submitted, approved, rejected, or executed the Project
- Timestamps for every action
- Comments and reasons provided by approvers
- Version diffs showing what changed between submissions

The audit trail is immutable and available to all team members with access to the Project.

---

## Withdrawing a Project

A Project creator can withdraw a submitted Project at any time before it is approved or rejected. Withdrawing moves the Project back to Draft state and clears any partial approvals.

---

## Linking Projects to Executions

When a Project proposes changes that can be carried out by [Automate](/docs/automate/overview), you can link the Project to a Target. Once approved, the linked Target's resources can be acted on through a manual [Execution](/docs/automate/executions/manual-executions) or a [Schedule](/docs/automate/schedules/overview), and the Project is automatically marked as Executed when the Execution completes.
