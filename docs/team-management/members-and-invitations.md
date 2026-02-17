---
hide_table_of_contents: true
sidebar_position: 2
---

# Members and Invitations

This page covers how to invite new team members, manage pending invitations, and remove users from your frugally.app workspace.

[Manage Team Members](https://dashboard.frugally.app/settings/team)

---

## Inviting team members

### Single invite

1. Navigate to **Settings** > **Team** > **Invite Member**
2. Enter the email address
3. Select a [role](/docs/roles-and-access/roles-and-permissions) (Member is the default)
4. Optionally assign to a [Group](/docs/roles-and-access/groups)
5. Click **Send Invitation**

The invited user receives an email with a link to accept the invitation and create their account.

### Bulk invite via CSV

1. Navigate to **Settings** > **Team** > **Bulk Invite**
2. Upload a CSV file with the following columns:

| Column | Required | Description |
|--------|----------|-------------|
| `email` | Yes | The user's email address |
| `role` | No | `admin`, `member`, or `viewer` (default: `member`) |
| `group` | No | Group name to assign the user to |

3. Review the parsed list
4. Click **Send All Invitations**

### SCIM provisioning (Enterprise)

Enterprise teams using an identity provider can automatically provision users via SCIM. See [SCIM Provisioning](/docs/sso/scim-provisioning) for setup instructions.

---

## Invitation states

| State | Description |
|-------|-------------|
| **Pending** | Invitation sent, user has not yet accepted |
| **Accepted** | User accepted the invitation and created their account |
| **Expired** | Invitation was not accepted within 7 days |

### Managing pending invitations

From the Team Members page:

- **Resend** — Send the invitation email again (resets the 7-day expiry)
- **Revoke** — Cancel the invitation before it is accepted

---

## Removing team members

1. Navigate to **Settings** > **Team**
2. Find the member and click the menu icon
3. Select **Remove from Team**
4. Confirm the removal

When a member is removed:

- Their access is revoked immediately
- Their active sessions are terminated
- Their Schedules and Targets remain (they are team resources, not personal)
- Their Execution history is preserved for audit purposes
- They are removed from all [Groups](/docs/roles-and-access/groups)

:::caution
Removing the last Admin leaves only the Owner with administrative access. Ensure at least one Admin remains if the Owner is not actively managing the workspace.
:::

---

## Changing roles

1. Navigate to **Settings** > **Team**
2. Click the member's current role
3. Select the new role from the dropdown
4. The change takes effect immediately

See [Roles and Permissions](/docs/roles-and-access/roles-and-permissions) for what each role can do.

---

## Transferring ownership

Only the current Owner can transfer ownership:

1. Navigate to **Settings** > **Team**
2. Find the target user (must be an existing Admin)
3. Click the menu icon > **Transfer Ownership**
4. Confirm with your password

After transfer, the previous Owner is demoted to Admin. There can only be one Owner at a time.
