---
hide_table_of_contents: true
sidebar_position: 3
---

# SCIM API

frugally.app supports the [SCIM 2.0](https://www.rfc-editor.org/rfc/rfc7644) standard for automated user and group provisioning. Use SCIM to keep your frugally.app team membership in sync with your identity provider (IdP) — such as Okta, Azure AD, or OneLogin.

For general API conventions, see the [API Reference Overview](overview.md). For SCIM setup instructions, see [SCIM Provisioning](/docs/sso/scim-provisioning).

:::note Enterprise feature
SCIM provisioning is available on the Enterprise plan only.
:::

---

## Base URL

```
https://api.frugally.app/scim/v2
```

---

## Authentication

SCIM requests use a Bearer token generated in the frugally.app dashboard:

```
Authorization: Bearer <scim-token>
```

Generate a SCIM token at **Settings** > **SSO & Provisioning** > **SCIM Token**.

---

## Supported resources

| Resource | Endpoint | Operations |
|----------|----------|------------|
| Users | `/scim/v2/Users` | Create, Read, Update, Deactivate, List |
| Groups | `/scim/v2/Groups` | Create, Read, Update, Delete, List |

---

## Users

### List users

```
GET /scim/v2/Users
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filter` | `string` | SCIM filter expression (e.g. `userName eq "alice@example.com"`) |
| `startIndex` | `integer` | 1-based pagination start (default: 1) |
| `count` | `integer` | Results per page (default: 25, max: 100) |

**Example response:**

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
  "totalResults": 42,
  "startIndex": 1,
  "itemsPerPage": 25,
  "Resources": [
    {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
      "id": "user_abc123",
      "userName": "alice@example.com",
      "name": {
        "givenName": "Alice",
        "familyName": "Smith"
      },
      "emails": [
        { "value": "alice@example.com", "primary": true }
      ],
      "active": true,
      "groups": [
        { "value": "group_xyz", "display": "Engineering" }
      ],
      "meta": {
        "resourceType": "User",
        "created": "2025-01-10T09:00:00Z",
        "lastModified": "2025-02-15T14:30:00Z"
      }
    }
  ]
}
```

### Get a user

```
GET /scim/v2/Users/:id
```

### Create a user

```
POST /scim/v2/Users
```

**Request body:**

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "bob@example.com",
  "name": {
    "givenName": "Bob",
    "familyName": "Jones"
  },
  "emails": [
    { "value": "bob@example.com", "primary": true }
  ],
  "active": true
}
```

When a user is created via SCIM, frugally.app sends a welcome email and assigns the default role configured in team settings.

### Update a user

```
PUT /scim/v2/Users/:id
```

Full replacement of the user resource. Include all fields — omitted fields are reset to defaults.

### Patch a user

```
PATCH /scim/v2/Users/:id
```

**Request body:**

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "replace",
      "path": "name.givenName",
      "value": "Robert"
    }
  ]
}
```

### Deactivate a user

To deactivate (soft-delete) a user, set `active` to `false`:

```
PATCH /scim/v2/Users/:id
```

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "replace",
      "path": "active",
      "value": false
    }
  ]
}
```

Deactivated users lose access to the dashboard and API but their data is retained.

---

## Groups

### List groups

```
GET /scim/v2/Groups
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filter` | `string` | SCIM filter expression (e.g. `displayName eq "Engineering"`) |
| `startIndex` | `integer` | 1-based pagination start |
| `count` | `integer` | Results per page |

**Example response:**

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
  "totalResults": 5,
  "startIndex": 1,
  "itemsPerPage": 25,
  "Resources": [
    {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
      "id": "group_xyz",
      "displayName": "Engineering",
      "members": [
        { "value": "user_abc123", "display": "alice@example.com" },
        { "value": "user_def456", "display": "bob@example.com" }
      ],
      "meta": {
        "resourceType": "Group",
        "created": "2025-01-05T08:00:00Z",
        "lastModified": "2025-02-20T11:15:00Z"
      }
    }
  ]
}
```

### Get a group

```
GET /scim/v2/Groups/:id
```

### Create a group

```
POST /scim/v2/Groups
```

**Request body:**

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "displayName": "Platform Team",
  "members": [
    { "value": "user_abc123" }
  ]
}
```

Groups created via SCIM are mapped to frugally.app [Groups](/docs/roles-and-access/groups), inheriting the same scope and notification policies.

### Update a group

```
PUT /scim/v2/Groups/:id
```

### Patch a group (add/remove members)

```
PATCH /scim/v2/Groups/:id
```

**Add members:**

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "add",
      "path": "members",
      "value": [{ "value": "user_ghi789" }]
    }
  ]
}
```

**Remove members:**

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "remove",
      "path": "members[value eq \"user_ghi789\"]"
    }
  ]
}
```

### Delete a group

```
DELETE /scim/v2/Groups/:id
```

---

## Supported SCIM filters

| Filter | Example |
|--------|---------|
| `eq` (equals) | `userName eq "alice@example.com"` |
| `co` (contains) | `userName co "example.com"` |
| `sw` (starts with) | `name.familyName sw "Sm"` |

Multiple filters can be combined with `and`:

```
filter=userName co "example.com" and active eq true
```

---

## Error responses

SCIM errors follow the SCIM 2.0 error schema:

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
  "status": "409",
  "scimType": "uniqueness",
  "detail": "A user with userName bob@example.com already exists."
}
```

| Status | scimType | Meaning |
|--------|----------|---------|
| `400` | `invalidFilter` | The filter expression is malformed |
| `400` | `invalidValue` | A required field is missing or has an invalid value |
| `401` | — | Invalid or expired SCIM token |
| `404` | — | Resource not found |
| `409` | `uniqueness` | A resource with the same unique attribute already exists |

---

## IdP configuration guides

For step-by-step setup with your identity provider, see [SCIM Provisioning](/docs/sso/scim-provisioning).
