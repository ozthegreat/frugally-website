---
hide_table_of_contents: true
sidebar_position: 1
---

# API Reference Overview

frugally.app provides REST APIs for programmatic access to key platform features. Use these APIs to integrate frugally.app into your existing tooling, CI/CD pipelines, and internal dashboards.

---

## Base URL

All API requests are made to:

```
https://api.frugally.app/v1
```

---

## Authentication

frugally.app supports two authentication methods:

| Method | Use case | Header |
|--------|----------|--------|
| **API key** | Server-to-server integrations, scripts, CI/CD | `Authorization: Bearer <api-key>` |
| **OAuth token** | User-context requests from web applications | `Authorization: Bearer <oauth-token>` |

### Generating an API key

1. Navigate to **Settings** > **API Keys** in the [dashboard](https://dashboard.frugally.app/settings/api-keys).
2. Click **Create API Key**.
3. Give the key a descriptive name (e.g. `CI Pipeline — Guard checks`).
4. Select the permission scope — keys can be scoped to specific features (Guard, SCIM, etc.).
5. Copy the key immediately — it is only shown once.

:::caution
Treat API keys like passwords. Do not commit them to source control. Use environment variables or a secrets manager.
:::

---

## Versioning

The API is versioned via the URL path (`/v1`). When breaking changes are introduced, a new version is published and the previous version remains available for a deprecation period.

| Version | Status | Notes |
|---------|--------|-------|
| `v1` | **Current** | All endpoints documented here |

---

## Rate limiting

| Limit | Value |
|-------|-------|
| Requests per minute (per key) | 120 |
| Burst (concurrent requests) | 10 |

When you exceed the rate limit, the API returns `429 Too Many Requests` with a `Retry-After` header indicating how many seconds to wait.

---

## Common request patterns

### Pagination

List endpoints return paginated results. Use `page` and `per_page` query parameters:

```
GET /v1/guard/projects?page=2&per_page=25
```

| Parameter | Default | Maximum |
|-----------|---------|---------|
| `page` | `1` | — |
| `per_page` | `25` | `100` |

The response includes pagination metadata:

```json
{
  "data": [...],
  "meta": {
    "current_page": 2,
    "per_page": 25,
    "total_pages": 4,
    "total_count": 87
  }
}
```

### Filtering

Most list endpoints support filtering via query parameters:

```
GET /v1/guard/projects?status=active&connection_id=conn_abc123
```

### Sorting

Use the `sort` parameter with a field name. Prefix with `-` for descending order:

```
GET /v1/guard/violations?sort=-created_at
```

---

## Common response format

### Success responses

```json
{
  "data": { ... },
  "meta": { ... }
}
```

### Error responses

```json
{
  "error": {
    "code": "validation_error",
    "message": "The connection_id field is required.",
    "details": [
      { "field": "connection_id", "message": "This field is required." }
    ]
  }
}
```

---

## Error codes

| HTTP status | Code | Meaning |
|-------------|------|---------|
| `400` | `bad_request` | Malformed request body or parameters |
| `401` | `unauthorized` | Missing or invalid authentication |
| `403` | `forbidden` | Valid authentication but insufficient permissions |
| `404` | `not_found` | Resource does not exist |
| `409` | `conflict` | Resource state conflict (e.g. duplicate name) |
| `422` | `validation_error` | Request body failed validation |
| `429` | `rate_limited` | Too many requests — check `Retry-After` header |
| `500` | `internal_error` | Unexpected server error — contact support |

---

## Available APIs

| API | Description | Documentation |
|-----|-------------|---------------|
| **Guard API v1** | Manage projects, budgets, violations, and scans | [Guard API →](guard-api-v1.md) |
| **SCIM API** | Provision and deprovision users and groups via SCIM 2.0 | [SCIM API →](scim-api.md) |
| **Webhook payloads** | Event payload schemas delivered to your webhook endpoints | [Webhook payloads →](webhook-payloads.md) |

---

## SDKs and tools

frugally.app does not currently provide official SDKs. The REST API can be called from any HTTP client:

```bash
# Example: List Guard projects
curl -H "Authorization: Bearer $FRUGALLY_API_KEY" \
  https://api.frugally.app/v1/guard/projects
```

:::tip
Use tools like [Postman](https://www.postman.com) or [httpie](https://httpie.io) to explore the API interactively during development.
:::

---

## Need help?

If you encounter issues with the API, contact [support@frugally.app](mailto:support@frugally.app) with:

- The full request URL and method
- The response status code and body
- Your API key ID (not the key itself)
