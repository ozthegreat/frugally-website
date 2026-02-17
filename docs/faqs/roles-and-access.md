---
hide_table_of_contents: true
sidebar_position: 8
---

# Roles and Access

Common questions about roles, permissions, groups, scopes, and access requests in frugally.app.

---

## What roles are available?

frugally.app has four built-in roles:

| Role | Description |
|------|-------------|
| **Viewer** | Read-only access to dashboards, cost data, and execution history |
| **Contributor** | Everything in Viewer, plus create and manage Targets, Schedules, and Guard projects |
| **Admin** | Everything in Contributor, plus manage team settings, billing, integrations, and user roles |
| **Owner** | Full access including account deletion. Assigned to the user who created the team |

For the full permissions matrix, see [Roles and Permissions](/docs/roles-and-access/roles-and-permissions).

---

## How do I change a user's role?

1. Go to **Settings** > **Team** in the [dashboard](https://dashboard.frugally.app/settings/team).
2. Find the user and click **Edit**.
3. Select the new role and save.

Only **Admin** and **Owner** roles can change other users' roles.

---

## What are groups?

Groups are collections of users that share access policies and notification preferences. For example, you might create an "Engineering" group with access to development Connections and a "Finance" group with access to cost data only.

See [Groups](/docs/roles-and-access/groups) for details.

---

## What are scopes?

Scopes are permission boundaries that limit what a user or group can see and act on. A scope can restrict visibility to specific Connections, accounts, or resource tags.

See [Scopes](/docs/roles-and-access/scopes) for details.

---

## How do access requests work?

If a user needs access to a resource or project outside their current scope, they can submit an access request:

1. The user clicks **Request Access** on the restricted resource.
2. An admin or designated approver receives a notification.
3. The approver approves or denies the request with an optional note.
4. The user is notified of the decision.

See [Access Requests](/docs/roles-and-access/access-requests) for details.

---

## Can I use SSO to manage access?

Yes. On the Enterprise plan, you can configure SAML SSO and SCIM provisioning to manage users and groups from your identity provider (Okta, Azure AD, OneLogin, etc.).

- [Setting Up SAML SSO](/docs/sso/setting-up-saml-sso)
- [SCIM Provisioning](/docs/sso/scim-provisioning)

---

## What plan do I need for advanced access controls?

| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Basic roles (Viewer, Contributor, Admin) | Yes | Yes | Yes |
| Groups | — | Yes | Yes |
| Scopes | — | Yes | Yes |
| Access requests | — | Yes | Yes |
| SSO (SAML) | — | — | Yes |
| SCIM provisioning | — | — | Yes |

See [Plans and Credits](/docs/billing/plans-and-credits) for the full plan comparison.
