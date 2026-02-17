---
hide_table_of_contents: true
sidebar_position: 1
---

# SSO & Provisioning Overview

:::note Enterprise feature
SAML SSO and SCIM provisioning are available on the **Enterprise** plan.
:::

Enterprise teams can use **SAML 2.0 Single Sign-On** (SSO) and **SCIM 2.0** provisioning to manage authentication and user lifecycle through their existing identity provider (IdP).

## What is SAML SSO?

SAML SSO lets your team members sign in to frugally.app using your organisation's identity provider instead of a separate email and password. When SSO is enabled, users are redirected to your IdP (e.g. Okta, Microsoft Entra ID, OneLogin, Google Workspace) to authenticate, and are then signed in to frugally.app automatically.

**Key benefits:**

- Centralised access control through your IdP
- Enforced authentication policies (MFA, conditional access, etc.)
- One fewer password for your team to manage
- Automatic account creation via Just-in-Time (JIT) provisioning

## What is SCIM?

SCIM (System for Cross-domain Identity Management) automates user and group provisioning. Instead of manually adding and removing team members in frugally.app, your IdP pushes changes automatically.

**What SCIM handles:**

- **User provisioning** --- Create frugally.app accounts when users are assigned in your IdP
- **User deprovisioning** --- Deactivate access when users are unassigned or removed
- **Group sync** --- Create and manage [Groups](../roles-and-access/groups.md) from your IdP's group assignments
- **Profile updates** --- Keep names and email addresses in sync

## How SSO and SCIM work together

SSO and SCIM are independent features, but they complement each other:

| Setup | Authentication | User lifecycle |
|-------|----------------|----------------|
| SSO only | Users sign in via your IdP | You add/remove users manually, or use JIT provisioning |
| SSO + SCIM | Users sign in via your IdP | Your IdP creates, updates, and deactivates users automatically |

When SCIM is enabled, JIT provisioning is automatically disabled. Users must be provisioned through SCIM before they can sign in via SSO. This ensures your IdP remains the single source of truth for team membership.

## Supported identity providers

frugally.app supports any SAML 2.0 compliant identity provider. Common providers include:

- **Okta**
- **Microsoft Entra ID** (formerly Azure AD)
- **OneLogin**
- **Google Workspace**
- **JumpCloud**
- **PingOne / PingFederate**

For SCIM, any provider that supports the SCIM 2.0 protocol (RFC 7643 / RFC 7644) is compatible.

## What you will need

Before you begin, confirm that you have:

- An **Enterprise** plan (contact [support@frugally.app](mailto:support@frugally.app) to upgrade)
- **Admin access** to your IdP to create SAML applications and configure SCIM
- **Admin role** in frugally.app with SSO configuration permissions
- **DNS access** to your email domain for domain verification

## Next steps

1. **[Set up SAML SSO](setting-up-saml-sso.md)** --- Configure your IdP, verify your domain, and enable SSO
2. **[Set up SCIM provisioning](scim-provisioning.md)** --- Automate user and group lifecycle management
3. **[Troubleshooting & reference](troubleshooting.md)** --- Diagnostic logs, break-glass recovery, and technical reference
