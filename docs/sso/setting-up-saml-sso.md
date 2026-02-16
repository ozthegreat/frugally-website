---
sidebar_position: 2
---

# Setting Up SAML SSO

:::note Enterprise feature
SAML SSO is available on the **Enterprise** plan.
:::

This guide walks through configuring SAML 2.0 Single Sign-On between your identity provider (IdP) and frugally.app. By the end, your team will be able to sign in using your organisation's IdP.

[Open SSO Settings](https://dashboard.frugally.app/settings/sso)

## Step 1 --- Gather your Service Provider details

Before configuring your IdP, you need the frugally.app Service Provider (SP) values. These are displayed on the **Configuration** tab in SSO Settings.

| Field | Value |
|-------|-------|
| **SP Entity ID** | `https://dashboard.frugally.app/saml` |
| **ACS URL** (Assertion Consumer Service) | `https://dashboard.frugally.app/saml/acs` |
| **SLO URL** (Single Logout, optional) | `https://dashboard.frugally.app/saml/{team-slug}/slo` |
| **NameID Format** | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` |
| **Metadata URL** | `https://dashboard.frugally.app/saml/{team-slug}/metadata` |

Replace `{team-slug}` with your team's slug (visible in the dashboard URL).

:::tip
Most IdPs can auto-configure from a metadata URL. Copy your **Metadata URL** and import it in your IdP's SAML app setup.
:::

## Step 2 --- Create a SAML application in your IdP

In your IdP, create a new SAML 2.0 application and enter the SP values from Step 1.

### Attribute mappings

frugally.app expects the following attributes in the SAML assertion. Configure your IdP to release them:

| frugally.app attribute | Description | Common IdP attribute names |
|------------------------|-------------|----------------------------|
| **email** (required) | User's email address | `user.email`, `emailAddress`, `mail`, `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` |
| **name** | Display name | `user.displayName`, `displayName`, `cn` |
| **first_name** | Given name | `user.firstName`, `givenName` |
| **last_name** | Surname | `user.lastName`, `surname`, `sn` |

Only **email** is strictly required. If `name` is not provided, frugally.app will fall back to `first_name` + `last_name`.

frugally.app checks multiple common attribute names automatically, so exact naming is flexible.

### Security requirements

frugally.app enforces the following (these cannot be changed):

- SAML responses **must be signed**
- SAML assertions **must be signed**
- Signature algorithm: **RSA-SHA256** minimum
- Clock skew tolerance: **2 minutes**

## Step 3 --- Enter your IdP details in frugally.app

On the **Configuration** tab, enter the values from your IdP:

- **IdP Entity ID** --- The unique identifier for your IdP (also called Issuer URI)
- **SSO URL** --- The URL where frugally.app sends authentication requests
- **SLO URL** (optional) --- The URL for federated logout

Click **Save Configuration**.

## Step 4 --- Upload your IdP signing certificate

Switch to the **Certificates** tab and paste your IdP's X.509 signing certificate in PEM format.

```
-----BEGIN CERTIFICATE-----
MIICmTCCAYECBgF...
-----END CERTIFICATE-----
```

frugally.app supports multiple certificates for rotation. When your IdP certificate is about to expire, upload the new certificate before removing the old one.

:::caution
frugally.app will warn you **30 days** before a certificate expires. If a certificate expires with no valid replacement, SSO authentication will fail.
:::

## Step 5 --- Verify your email domain

Switch to the **Domains** tab. Add each email domain that should use SSO (e.g. `example.com`).

For each domain, frugally.app generates a DNS TXT record you need to add:

| Record type | Host | Value |
|-------------|------|-------|
| TXT | `_frugally-sso.example.com` | `frugally-sso-verify={verification-token}` |

Add the TXT record in your DNS provider, then click **Verify**. DNS propagation can vary so you may need to wait and retry.

:::note Why domain verification?
Domain verification proves you own the email domain and prevents other organisations from claiming it. Only one organisation can register a domain for SSO at a time.
:::

## Step 6 --- Configure Just-in-Time provisioning

On the **Configuration** tab, decide how new users should be handled:

### JIT provisioning enabled (default)

When a user authenticates via SSO for the first time and does not yet have a frugally.app account, one is created automatically. You can set the **default role** assigned to JIT-provisioned users:

- **View** (default) --- Read-only access
- **Executor** --- Can run executions
- **Writer** --- Can create and edit targets and schedules
- **Admin** --- Full access
- **Billing** --- Billing management only

### JIT provisioning disabled

Users must already exist in frugally.app (added manually or via SCIM) before they can sign in with SSO. Any unrecognised user will be rejected at login.

:::tip
If you plan to use [SCIM provisioning](scim-provisioning.md), enable SCIM first. Enabling SCIM automatically disables JIT.
:::

## Step 7 --- Test your configuration

Before enabling SSO for your team, test the configuration:

1. Click **Test SSO** on the Configuration tab
2. You will be redirected to your IdP to authenticate
3. After successful authentication, you are redirected back to frugally.app
4. A successful test marks the configuration as **verified**

If the test fails, check the **Diagnostics** tab for error details. See [Troubleshooting](troubleshooting.md) for common issues.

## Step 8 --- Enable SSO

Once verified, click **Enable SSO**. Your team members can now sign in using SSO.

**Before you can enable SSO, these must be in place:**

- IdP Entity ID and SSO URL configured
- At least one active signing certificate uploaded
- At least one verified email domain
- A successful test completed within the last 24 hours

At this stage, SSO is **optional** --- users can still sign in with email and password.

## Step 9 --- Enforce SSO (optional)

If you want to require SSO for all team members, click **Enforce SSO**. When enforced:

- All users **must** authenticate via your IdP
- Email/password login is blocked for your team
- A **break-glass recovery token** is generated automatically --- store it securely

:::caution
Before enforcing SSO, verify that all team members can authenticate through your IdP. Once enforced, the only way to bypass SSO is the break-glass recovery token or an admin bypass.
:::

### Break-glass recovery

When you enforce SSO, frugally.app generates a one-time recovery token. If your IdP goes down or SSO is misconfigured, use the recovery URL to regain access:

```
https://dashboard.frugally.app/auth/saml/recovery/{team-slug}?token={recovery-token}
```

The recovery token is **single-use** and grants a **15-minute window** to log in with email and password. After use, generate a new token from the SSO settings page.

Store your recovery token in a secure location (e.g. a password manager or physical safe) that does not depend on your IdP.

## How sign-in works after setup

### SP-initiated flow (standard)

1. User visits the frugally.app login page and enters their email
2. frugally.app detects the email domain is SSO-enabled and redirects to your IdP
3. The user authenticates with your IdP
4. Your IdP sends a signed SAML assertion back to the frugally.app ACS endpoint
5. frugally.app validates the assertion and signs the user in

### IdP-initiated considerations

frugally.app supports SP-initiated SSO. If your IdP supports sending unsolicited SAML responses, the ACS endpoint will process them, but SP-initiated flow is recommended for security.

## Next steps

- **[Set up SCIM provisioning](scim-provisioning.md)** to automate user and group lifecycle
- **[Troubleshooting & reference](troubleshooting.md)** for diagnostic logs and common issues
