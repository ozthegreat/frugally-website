---
hide_table_of_contents: true
sidebar_position: 4
---

# Troubleshooting & Reference

:::note Enterprise feature
SSO and SCIM features are available on the **Enterprise** plan.
:::

This page covers diagnostic tools, common issues, emergency recovery, and the technical details of the frugally.app SSO and SCIM implementation.

## Diagnostic logs

The **Diagnostics** tab on the [SSO settings page](https://dashboard.frugally.app/settings/sso) shows the 50 most recent events across both SAML and SCIM. Each entry includes:

- **Timestamp**
- **Protocol** --- SAML or SCIM
- **Event type** --- What happened (authentication attempt, configuration change, provisioning action, etc.)
- **Status** --- Success or failure
- **Error code and message** (if applicable)
- **IP address and user agent**

Diagnostic logs are retained for **26 months**.

## Common SAML issues

### "Invalid signature" or "Signature validation failed"

**Cause:** The SAML response or assertion signature does not match any active certificate in frugally.app.

**Fix:**
1. Check that the certificate on the **Certificates** tab matches what your IdP is using to sign responses
2. If your IdP recently rotated its certificate, upload the new certificate
3. Ensure your IdP is signing both the response **and** the assertion (frugally.app requires both)

### "Invalid audience" or "Audience mismatch"

**Cause:** The Audience Restriction in the SAML assertion does not match the frugally.app SP Entity ID.

**Fix:** In your IdP's SAML settings, set the Audience URI (SP Entity ID) to `https://dashboard.frugally.app/saml`.

### "Invalid timestamp" or "Assertion expired"

**Cause:** The SAML assertion timestamp is outside the allowed window.

**Fix:**
- Ensure your IdP server clock is accurate (NTP synced)
- frugally.app allows a **2-minute** clock skew tolerance
- If the issue persists, check that your IdP is not caching or replaying old assertions

### "Email not found in assertion"

**Cause:** The SAML assertion does not include a recognisable email attribute.

**Fix:** Configure your IdP to release one of the supported email attributes. See the [attribute mappings table](setting-up-saml-sso.md#attribute-mappings) for accepted attribute names.

### "User not found" (JIT disabled)

**Cause:** The user authenticated successfully but does not exist in frugally.app, and JIT provisioning is disabled.

**Fix:** Either enable JIT provisioning, add the user manually, or provision them via [SCIM](scim-provisioning.md).

### "Domain not verified"

**Cause:** The user's email domain has not been verified in frugally.app.

**Fix:** Add and verify the domain on the **Domains** tab. See [Step 5](setting-up-saml-sso.md#step-5--verify-your-email-domain) of the SAML setup guide.

### "Configuration not verified"

**Cause:** You are trying to enable or enforce SSO without a successful test.

**Fix:** Click **Test SSO** and complete a successful authentication. The test must have passed within the last **24 hours** to enable enforcement.

### Certificate expiry warning

frugally.app warns you **30 days** before a certificate expires. If the certificate expires:

- SSO authentication will fail
- You cannot enforce SSO if any certificate expires within **7 days**

**Fix:** Upload your IdP's new certificate on the **Certificates** tab before removing the old one.

## Common SCIM issues

### "Invalid token" or 401 responses

**Cause:** The bearer token sent by your IdP does not match.

**Fix:**
1. Generate a new token in frugally.app and update it in your IdP
2. Check that your IdP is sending the token in the `Authorization: Bearer {token}` header

### "Token expired"

**Cause:** The SCIM token has passed its expiry date (default: 365 days).

**Fix:** Generate a new token in frugally.app and update it in your IdP.

### "Feature disabled"

**Cause:** The SCIM endpoint is being called but the Enterprise plan or SCIM feature is not active.

**Fix:** Contact [support@frugally.app](mailto:support@frugally.app) to confirm your plan includes SCIM.

### "User already exists"

**Cause:** A user with the same email already exists in the team (possibly added manually or via JIT).

**Note:** This is not necessarily an error. frugally.app handles this gracefully --- the existing user is attached to the team with their provisioning source updated to `scim`.

### User not deprovisioned after removal from IdP

**Cause:** Your IdP may not be pushing a DELETE or deactivation request.

**Fix:**
1. Check that your IdP is configured to push deprovisioning events
2. Verify the SCIM token is still valid
3. Check the Diagnostics tab for recent SCIM events

### SCIM sync shows as stale

**Cause:** No SCIM requests have been received in the last **30 days**.

**Fix:**
1. Verify your IdP is still sending provisioning requests
2. Check that the SCIM token has not expired
3. Test the connection from your IdP's SCIM configuration page

### Group members not syncing

**Cause:** The SCIM group exists but has not been mapped to a frugally.app Group.

**Fix:** On the Provisioning tab, click **Create & Map** next to the SCIM group to link it to a platform Group.

## Break-glass recovery

If your IdP is unavailable or SSO is misconfigured and enforcement is enabled, use the break-glass recovery mechanism:

1. Retrieve your recovery token (stored when SSO was enforced)
2. Visit: `https://dashboard.frugally.app/auth/saml/recovery/{team-slug}?token={recovery-token}`
3. You will have **15 minutes** to log in with email and password
4. The recovery token is **single-use** --- once used, generate a new one from the SSO settings page

:::caution
If you have lost your recovery token, contact [support@frugally.app](mailto:support@frugally.app) for assistance. Keep your recovery token in a secure location that does not depend on your IdP.
:::

## Plan downgrade behaviour

If your team downgrades from Enterprise:

- SSO enters a **30-day grace period** where it remains enabled but not enforced
- After the grace period, SSO is fully disabled
- Users can sign in with email and password during and after the grace period
- SCIM tokens are revoked when the plan changes

## SAML attribute reference

frugally.app checks these attribute names in order. The first match is used.

### Email (required)

| Attribute name |
|---------------|
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` |
| `http://schemas.xmlsoap.org/claims/EmailAddress` |
| `urn:oid:0.9.2342.19200300.100.1.3` |
| `email` |
| `mail` |
| `Email` |
| `emailAddress` |

### Display name

| Attribute name |
|---------------|
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` |
| `http://schemas.xmlsoap.org/claims/CommonName` |
| `urn:oid:2.5.4.3` |
| `displayName` |
| `cn` |
| `name` |
| `Name` |

### First name

| Attribute name |
|---------------|
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname` |
| `urn:oid:2.5.4.42` |
| `firstName` |
| `givenName` |
| `first_name` |

### Last name

| Attribute name |
|---------------|
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname` |
| `urn:oid:2.5.4.4` |
| `lastName` |
| `surname` |
| `sn` |
| `last_name` |

## SAML technical details

| Setting | Value |
|---------|-------|
| Protocol | SAML 2.0 |
| SP Entity ID | `https://dashboard.frugally.app/saml` |
| ACS URL | `https://dashboard.frugally.app/saml/acs` |
| ACS Binding | `HTTP-POST` |
| NameID Format | `emailAddress` |
| Signed responses required | Yes |
| Signed assertions required | Yes |
| Signature algorithm | RSA-SHA256 |
| Digest algorithm | SHA-256 |
| Clock skew tolerance | 120 seconds |
| Encryption required | No |
| AuthnContext required | No |

## SCIM technical details

| Setting | Value |
|---------|-------|
| Protocol | SCIM 2.0 (RFC 7643 / RFC 7644) |
| Base URL | `https://dashboard.frugally.app/api/scim/v2` |
| Authentication | Bearer token |
| Token expiry | 365 days |
| Rate limit | 120 requests per minute |
| Pagination default | 100 results per page |
| Pagination max | 500 results per page |
| Content type | `application/scim+json` |
| User identifier | Email address (`userName`) |

## SCIM error codes

| Error code | HTTP status | Description |
|------------|-------------|-------------|
| `InvalidToken` | 401 | Token is missing or invalid |
| `TokenExpired` | 401 | Token has passed its expiry date |
| `FeatureDisabled` | 403 | SCIM is not enabled for this team |
| `UserNotFound` | 404 | User ID does not match a team member |
| `UserAlreadyExists` | 409 | Email is already in use (handled gracefully) |
| `EmailConflict` | 409 | Email conflicts with an existing user |
| `GroupNotFound` | 404 | Group ID does not match a team group |
| `GroupAlreadyExists` | 409 | Group with that external ID already exists |
| `InvalidValue` | 400 | Missing or invalid field in the request |
| `InvalidFilter` | 400 | Malformed SCIM filter expression |
| `InvalidPath` | 400 | Unknown attribute path in PATCH operation |
| `Mutability` | 400 | Attempted to modify a read-only attribute |

## Getting help

If you are unable to resolve an issue:

1. Check the **Diagnostics** tab for recent error details
2. Contact [support@frugally.app](mailto:support@frugally.app) with:
   - Your team name
   - The error message or code from the Diagnostics tab
   - Your IdP name and version
   - The approximate time the issue occurred
