---
sidebar_position: 3
---

# SCIM Provisioning

:::note Enterprise feature
SCIM provisioning is available on the **Enterprise** plan.
:::

SCIM (System for Cross-domain Identity Management) automates user and group provisioning between your identity provider and frugally.app. When you add, update, or remove users in your IdP, those changes are reflected in frugally.app automatically.

[Open SSO Settings](https://dashboard.frugally.app/settings/sso)

## Prerequisites

- [SAML SSO](setting-up-saml-sso.md) configured and enabled (SCIM is managed from the same settings page)
- Admin access to your IdP to configure SCIM provisioning
- Admin role in frugally.app with SSO configuration permissions

## Step 1 --- Enable SCIM

On the SSO settings page, switch to the **Provisioning** tab and click **Enable SCIM**.

:::caution
Enabling SCIM automatically **disables JIT provisioning**. From this point, users must be provisioned through SCIM before they can sign in via SSO. Existing team members are not affected.
:::

## Step 2 --- Generate a SCIM token

Click **Generate Token**. A bearer token is displayed once --- copy it immediately and store it securely.

This token authenticates your IdP's SCIM requests to frugally.app.

- Tokens expire after **365 days** by default
- If you need to rotate the token, click **Regenerate** --- the old token is invalidated immediately
- Click **Revoke** to disable the token without generating a new one

## Step 3 --- Configure your IdP

In your IdP's SCIM provisioning settings, enter:

| Field | Value |
|-------|-------|
| **SCIM Base URL** | `https://dashboard.frugally.app/api/scim/v2` |
| **Authentication** | Bearer token |
| **Token** | The token generated in Step 2 |

### IdP-specific notes

**Okta:** Select SCIM 2.0 as the provisioning method. Enable "Push New Users", "Push Profile Updates", and "Push Groups". Set the unique identifier field to `email`.

**Microsoft Entra ID:** Use automatic provisioning. Set the Tenant URL to the SCIM Base URL and enter the token as the Secret Token. Test the connection before saving.

**OneLogin:** Create a SCIM 2.0 connector. Use Bearer token authentication. Enable user and group provisioning under the Provisioning tab.

## Step 4 --- Set the default role

Choose the **default role** for SCIM-provisioned users. This role is assigned when a new user is created through SCIM:

- **View** (default) --- Read-only access
- **Executor** --- Can run executions
- **Writer** --- Can create and edit targets and schedules
- **Admin** --- Full access
- **Billing** --- Billing management only

You can change individual user roles in frugally.app after provisioning.

## Step 5 --- Assign users and groups in your IdP

In your IdP, assign users and groups to the frugally.app application. Your IdP will push these assignments to frugally.app via SCIM.

## What gets provisioned

### Users

When your IdP provisions a user:

1. If the user already has a frugally.app account, they are added to your team
2. If the user is new, an account is created with a verified email and assigned the default role
3. The user's provisioning source is recorded as `scim` in your team membership

When your IdP deprovisions a user:

1. The user is **deactivated** on your team (not deleted)
2. They can no longer sign in via SSO for your team
3. Their frugally.app account and data remain intact

### Groups

SCIM groups map to frugally.app [Groups](../roles-and-access/groups.md). When your IdP pushes a group:

1. A SCIM group record is created in frugally.app
2. You can **map** the SCIM group to a frugally.app Group from the Provisioning tab
3. Once mapped, group membership syncs automatically --- members added or removed in your IdP are reflected in the frugally.app Group
4. You can assign [Scopes](../roles-and-access/scopes.md) to the mapped Group to control access

To map a SCIM group, click **Create & Map** next to the group name on the Provisioning tab. To disconnect, click **Unmap** --- SCIM-sourced members are removed from the platform Group.

:::tip
Map your IdP groups to frugally.app Groups to combine SCIM provisioning with Scope-based access control. For example, map an "Engineering" IdP group to a frugally.app Group scoped to your development AWS accounts.
:::

## SCIM API reference

frugally.app implements the SCIM 2.0 protocol (RFC 7643 / RFC 7644). This section is for teams that need to integrate programmatically or troubleshoot API-level issues.

### Base URL

```
https://dashboard.frugally.app/api/scim/v2
```

### Authentication

All requests require a `Bearer` token in the `Authorization` header:

```
Authorization: Bearer {scim-token}
```

### Rate limits

SCIM requests are rate-limited to **120 requests per minute**. Exceeding this limit returns a `429 Too Many Requests` response.

### User endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/Users` | Create a user |
| `GET` | `/Users` | List users (supports filter and pagination) |
| `GET` | `/Users/{id}` | Get a single user |
| `PATCH` | `/Users/{id}` | Update user attributes |
| `PUT` | `/Users/{id}` | Replace a user |
| `DELETE` | `/Users/{id}` | Deactivate a user |

### Group endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/Groups` | Create a group |
| `GET` | `/Groups` | List groups (supports filter and pagination) |
| `GET` | `/Groups/{id}` | Get a single group |
| `PATCH` | `/Groups/{id}` | Update group attributes or members |
| `PUT` | `/Groups/{id}` | Replace a group |
| `DELETE` | `/Groups/{id}` | Delete a group |

### Discovery endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/ServiceProviderConfig` | SCIM service provider capabilities |
| `GET` | `/Schemas` | Supported SCIM schemas |
| `GET` | `/ResourceTypes` | Available resource types |

### Filtering

List endpoints support SCIM filter expressions:

```
GET /Users?filter=userName eq "alice@example.com"
GET /Groups?filter=displayName eq "Engineering"
```

Supported filter attributes:
- **Users:** `userName` (email), `externalId`
- **Groups:** `displayName`, `externalId`

### Pagination

List endpoints support pagination via query parameters:

| Parameter | Default | Max | Description |
|-----------|---------|-----|-------------|
| `startIndex` | 1 | --- | 1-based index of the first result |
| `count` | 100 | 500 | Number of results per page |

### User schema

The `userName` field must be a valid email address. Required fields for user creation:

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "alice@example.com",
  "name": {
    "givenName": "Alice",
    "familyName": "Smith"
  },
  "active": true
}
```

### Group schema

Required fields for group creation:

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "displayName": "Engineering",
  "members": [
    { "value": "{user-id}" }
  ]
}
```

### Error responses

SCIM errors follow the RFC 7644 format:

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
  "detail": "User not found.",
  "status": "404"
}
```

Common status codes:

| Status | Meaning |
|--------|---------|
| `400` | Invalid request (missing fields, bad filter syntax) |
| `401` | Invalid or missing token |
| `404` | User or group not found |
| `409` | Conflict (e.g. user already exists with that email) |
| `429` | Rate limit exceeded |
| `500` | Internal server error |

## Monitoring SCIM sync

The **Diagnostics** tab on the SSO settings page shows recent SCIM events including user provisioning, group changes, and errors.

If SCIM has not synced in over **30 days**, the status shows as stale. Check that your IdP is still sending requests and that the token has not expired.

## Disabling SCIM

Click **Disable SCIM** on the Provisioning tab. This:

- Revokes the SCIM token immediately
- Stops all automated provisioning
- Leaves existing team members and groups in place
- Does **not** re-enable JIT provisioning automatically (enable it manually if needed)

## Next steps

- **[Troubleshooting & reference](troubleshooting.md)** for diagnostic logs, error codes, and recovery
- **[Groups](../roles-and-access/groups.md)** for more on managing group access
- **[Scopes](../roles-and-access/scopes.md)** for controlling what Groups can see
