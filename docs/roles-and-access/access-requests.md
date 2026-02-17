---
hide_table_of_contents: true
sidebar_position: 5
---

# Access Requests

Access requests let team members request elevated access to Connections, Targets, or features they do not currently have permission to use. Requests go through an approval workflow so that access is granted with oversight.

:::note Pro feature
Access requests are available on the Pro and Enterprise plans.
:::

---

## How access requests work

1. A user encounters a resource or action they cannot access (due to their [Scope](./scopes.md) or [Role](./roles-and-permissions.md))
2. They submit an access request explaining what they need and why
3. An Admin or Owner reviews the request
4. If approved, the user receives the requested access
5. Access can be permanent or time-bound

---

## Submitting a request

When a user tries to access a restricted resource, they see an **Request Access** button. Clicking it opens the request form:

| Field | Description |
|-------|-------------|
| **Resource** | The Connection, Target, or feature being requested (pre-filled) |
| **Reason** | Why the access is needed (free text) |
| **Duration** | Permanent or time-bound (1 hour, 4 hours, 1 day, 1 week, custom) |

Users can also submit requests proactively from **Settings** > **Access Requests** > **New Request**.

---

## Reviewing requests

Admins and Owners see pending requests at **Settings** > **Access Requests**.

Each request shows:

| Field | Description |
|-------|-------------|
| **Requester** | Who submitted the request |
| **Resource** | What they are requesting access to |
| **Reason** | Their explanation |
| **Requested duration** | How long they need access |
| **Submitted** | When the request was made |

### Approval actions

| Action | Effect |
|--------|--------|
| **Approve** | Grants the requested access. For Scope-based requests, the user is added to an appropriate Scope. For role-based requests, the role is upgraded. |
| **Approve with modifications** | Grants access but with a different duration or scope than requested |
| **Deny** | Rejects the request with an optional reason |

---

## Time-bound access

When access is granted with a time limit:

- The user receives access immediately
- A countdown is visible on their profile showing when access expires
- When the timer expires, access is automatically revoked
- No manual intervention is needed to remove the access

:::tip
Time-bound access is ideal for temporary needs like debugging a production issue or reviewing a specific team's resources. It avoids the risk of permanently over-provisioned permissions.
:::

---

## Notifications

| Event | Who is notified |
|-------|-----------------|
| **Request submitted** | All Admins and the Owner |
| **Request approved** | The requester |
| **Request denied** | The requester (with reason if provided) |
| **Access expiring soon** | The requester (1 hour before expiry) |
| **Access expired** | The requester |

Notifications are delivered via in-app, Slack (if connected), and email based on each user's notification preferences.

---

## Audit trail

All access requests and their outcomes are recorded in the audit log:

- Who requested access, what they requested, and why
- Who approved or denied the request
- When access was granted and when it expired or was revoked
- Any modifications made to the original request

The audit trail is accessible to Admins and Owners at **Settings** > **Audit Log**.
