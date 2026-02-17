---
hide_table_of_contents: true
sidebar_position: 1
---

# Roles & Access Overview

frugally.app uses a role-based access control (RBAC) model to manage what team members can see and do. Roles define permissions, [Groups](./groups.md) organise users, and [Scopes](./scopes.md) restrict visibility to specific parts of your AWS environment.

---

## How roles, groups, and scopes interact

```
Users → Roles (what they can do)
Users → Groups → Scopes (what they can see)
```

| Concept | Purpose |
|---------|---------|
| **[Roles](./roles-and-permissions.md)** | Define what actions a user can perform (create Targets, approve Projects, manage billing, etc.) |
| **[Groups](./groups.md)** | Organise users into teams for shared access and notification policies |
| **[Scopes](./scopes.md)** | Restrict what Connections, Targets, and Schedules a Group or user can access |

---

## Quick reference

| Role | Create & edit Targets | Run Executions | Manage Schedules | Approve Projects | Manage team | Manage billing |
|------|----------------------|----------------|-----------------|-----------------|-------------|---------------|
| **Owner** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Admin** | Yes | Yes | Yes | Yes | Yes | No |
| **Member** | Yes | Yes | Yes | No | No | No |
| **Viewer** | No | No | No | No | No | No |

For full details, see [Roles and Permissions](./roles-and-permissions.md).

---

## Common configurations

### Small team (2–5 people)

Everyone is an Admin or Member. No Groups or Scopes needed — everyone sees everything.

### Medium team (5–20 people)

Create Groups by function (e.g. Backend, Frontend, Platform). Assign Connection-level Scopes so each team sees only their AWS accounts. Admins see everything.

### Large / enterprise team (20+ people)

Use Groups synced from Slack (Pro) or provisioned via SCIM (Enterprise). Assign granular Target-level Scopes. Use Guard [approval rules](/docs/guard/projects/approval-rules) tied to Groups for change governance.

---

## In this section

- **[Roles and Permissions](./roles-and-permissions.md)** — Full permission matrix for each role
- **[Groups](./groups.md)** — Organise users into teams
- **[Scopes](./scopes.md)** — Restrict access to specific Connections, Targets, or environments
- **[Access Requests](./access-requests.md)** — Request and grant elevated access
