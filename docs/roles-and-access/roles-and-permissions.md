---
hide_table_of_contents: true
sidebar_position: 2
---

# Roles and Permissions

Every frugally.app user is assigned a role that determines what actions they can perform. Roles are set at the team level — a user has the same role across all Connections, though [Scopes](./scopes.md) can further restrict what they can see.

---

## Available roles

| Role | Description |
|------|-------------|
| **Owner** | Full access to everything, including billing and team ownership transfer. Only one user can be the Owner. |
| **Admin** | Full access to all features except billing management and ownership transfer. Can manage team members and roles. |
| **Member** | Can create and manage Targets, Schedules, and Executions. Cannot manage team settings or approve Guard Projects. |
| **Viewer** | Read-only access. Can view Targets, Schedules, Executions, and dashboards but cannot make changes. |

---

## Permission matrix

### Automate

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View Targets | Yes | Yes | Yes | Yes |
| Create / edit Targets | Yes | Yes | Yes | No |
| Delete Targets | Yes | Yes | No | No |
| Run Executions | Yes | Yes | Yes | No |
| View Executions | Yes | Yes | Yes | Yes |
| Create / edit Schedules | Yes | Yes | Yes | No |
| Delete Schedules | Yes | Yes | No | No |
| Use Onboarding Wizard | Yes | Yes | Yes | No |

### Intelligence

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View Cost Explorer | Yes | Yes | Yes | Yes |
| View Commitment Utilisation | Yes | Yes | Yes | Yes |
| View Anomaly Detection | Yes | Yes | Yes | Yes |
| Configure anomaly thresholds | Yes | Yes | No | No |

### Guard

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View Projects | Yes | Yes | Yes | Yes |
| Create Projects | Yes | Yes | Yes | No |
| Approve / reject Projects | Yes | Yes | No | No |
| Create / edit Budgets | Yes | Yes | No | No |
| View Budgets | Yes | Yes | Yes | Yes |
| Configure Cost Attribution | Yes | Yes | No | No |
| View Cost Attribution | Yes | Yes | Yes | Yes |
| Manage Violations | Yes | Yes | Yes | No |
| View Violations | Yes | Yes | Yes | Yes |
| Run Scans | Yes | Yes | No | No |
| View Scan results | Yes | Yes | Yes | Yes |
| View Cost Posture | Yes | Yes | Yes | Yes |
| Complete Maturity Assessment | Yes | Yes | No | No |
| Accept / dismiss Recommendations | Yes | Yes | Yes | No |
| View Executive Dashboard | Yes | Yes | Yes | Yes |
| Lock / unlock resources | Yes | Yes | No | No |

### Connections & Integrations

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View Connections | Yes | Yes | Yes | Yes |
| Create / edit Connections | Yes | Yes | No | No |
| Delete Connections | Yes | Yes | No | No |
| Install / manage Slack | Yes | Yes | No | No |
| Install / manage GitHub | Yes | Yes | No | No |

### Team & Access

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View team members | Yes | Yes | Yes | Yes |
| Invite / remove members | Yes | Yes | No | No |
| Change member roles | Yes | Yes | No | No |
| Create / edit Groups | Yes | Yes | No | No |
| Create / edit Scopes | Yes | Yes | No | No |
| Approve access requests | Yes | Yes | No | No |
| Configure SSO / SCIM | Yes | Yes | No | No |

### Billing

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View billing | Yes | No | No | No |
| Manage payment methods | Yes | No | No | No |
| Change plan | Yes | No | No | No |
| Transfer ownership | Yes | No | No | No |

---

## Assigning and changing roles

1. Navigate to **Settings** > **Team Members**
2. Find the user and click their current role
3. Select the new role from the dropdown
4. Save

Only Owners and Admins can change roles. The Owner role can only be transferred — not assigned to multiple users.

:::note
Changing a user's role takes effect immediately. The user's current session is updated without requiring them to sign out.
:::

---

## Role inheritance with Groups

Roles and [Groups](./groups.md) are independent. A user's role defines what they **can do**, while their Group memberships (via Scopes) define what they **can see**. A Member in a Group with a narrow Scope can still create Targets — but only within the Connections visible to their Scope.

---

## Scope bypass

Admins and Owners bypass all [Scope](./scopes.md) restrictions. They always have full visibility across all Connections, Targets, and Schedules. This ensures administrators can manage the entire environment without being limited by Scope assignments.
