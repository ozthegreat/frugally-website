---
hide_table_of_contents: true
sidebar_position: 2
---

# Approval Rules

Approval rules define who must approve a Guard Project before it can proceed. They ensure that infrastructure changes are reviewed by the right people, with appropriate oversight based on the scope and risk of the change.

---

## How approval rules work

Each Project can have one or more approval rules attached. An approval rule specifies:

| Setting | Description |
|---------|-------------|
| **Approver** | Who can approve — a specific user, a role (e.g. all Admins), or a Group |
| **Minimum approvals** | How many approvals are required (e.g. at least 2 Admins) |
| **Conditions** | Optional conditions that trigger this rule (e.g. cost impact above $500) |

When a Project is submitted for review, all matching approval rules must be satisfied before the Project can move to the Approved state.

---

## Rule types

### User-based rules

Require approval from specific named users.

| Example | Configuration |
|---------|---------------|
| "VP of Engineering must approve" | Approver: specific user, min approvals: 1 |
| "Both team leads must approve" | Approver: specific users (list), min approvals: 2 |

### Role-based rules

Require approval from any user with a specific role.

| Example | Configuration |
|---------|---------------|
| "Any Admin can approve" | Approver: Admin role, min approvals: 1 |
| "Two Admins must approve" | Approver: Admin role, min approvals: 2 |

### Group-based rules

Require approval from members of a [Group](/docs/roles-and-access/groups).

| Example | Configuration |
|---------|---------------|
| "Someone from the Platform team must approve" | Approver: Platform team group, min approvals: 1 |
| "Two FinOps team members must approve" | Approver: FinOps team group, min approvals: 2 |

---

## Conditional rules

Rules can include conditions that determine when they apply:

| Condition | Triggers when |
|-----------|---------------|
| **Cost impact threshold** | Estimated cost impact exceeds a configured amount (e.g. > $500/month) |
| **Intent type** | Project intent matches a specific type (e.g. Destroy) |
| **Resource count** | Number of affected resources exceeds a threshold |
| **Service type** | Affected resources include specific AWS services |

### Example: escalating approvals

| Condition | Rule |
|-----------|------|
| Cost impact < $500/month | 1 approval from any Admin |
| Cost impact $500–$5,000/month | 2 approvals from Admin role |
| Cost impact > $5,000/month | 1 approval from FinOps team + 1 approval from VP Engineering |
| Intent = Destroy | 2 approvals from Admin role regardless of cost |

---

## Multi-level approval chains

For changes that require sign-off at multiple levels, configure multiple rules on the same Project. All rules must be satisfied independently:

```
Rule 1: Technical review — 1 approval from Engineering team
Rule 2: Cost review    — 1 approval from FinOps team
Rule 3: Final sign-off — 1 approval from Admin role
```

All three must be satisfied before the Project is approved. Approvals can happen in any order.

---

## Managing approval rules

Approval rules can be configured:

- **Per Project** — Set rules when creating or editing a Project
- **As templates** — Create reusable rule templates at **Guard** > **Settings** > **Approval Templates** and apply them to new Projects

:::tip
Create approval templates for common scenarios (e.g. "standard change", "high-cost change", "decommission") to ensure consistent governance without manual configuration each time.
:::

---

## Who can approve

Approvers must have the appropriate [role and permissions](/docs/roles-and-access/scopes). A user cannot approve their own Project submission — at least one other person must review it.

:::note
Self-approval is blocked by design to maintain separation of duties. The Project creator can be an approver on other Projects.
:::
