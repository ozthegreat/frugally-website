---
hide_table_of_contents: true
sidebar_position: 3
---

# Security Settings

Security settings let Admins and Owners configure session management, multi-factor authentication, IP restrictions, and SSO enforcement for the team.

Navigate to **Settings** > **Security**.

---

## Session timeout

Control how long a user's session remains active before requiring re-authentication.

| Setting | Options |
|---------|---------|
| **Session duration** | 1 hour, 4 hours, 8 hours, 24 hours, 7 days (default), 30 days |
| **Idle timeout** | 15 minutes, 30 minutes, 1 hour, 4 hours, disabled (default) |

- **Session duration** — The maximum time a session can last, regardless of activity
- **Idle timeout** — How long a session can remain inactive before expiring

When a session expires, the user is redirected to the sign-in page. Any unsaved work in forms is lost.

:::tip
For teams handling sensitive cost data, set session duration to 8 hours and idle timeout to 30 minutes. This ensures sessions expire at the end of the workday and after periods of inactivity.
:::

---

## Enforced MFA

Require all team members to set up multi-factor authentication before they can access frugally.app.

| Setting | Description |
|---------|-------------|
| **Require MFA** | When enabled, users without MFA are prompted to set it up on their next sign-in |
| **Supported methods** | Authenticator app (TOTP), security key (WebAuthn) |
| **Grace period** | How long users have to set up MFA after the requirement is enabled (default: 7 days) |

After the grace period, users without MFA are blocked from accessing the dashboard until they complete setup.

:::note
If SSO is enforced, MFA may be handled by your identity provider instead. Check your IdP's MFA settings to avoid requiring MFA in both places.
:::

---

## IP allowlisting

Restrict access to frugally.app to specific IP addresses or ranges.

| Setting | Description |
|---------|-------------|
| **Allowed IPs** | A list of IP addresses or CIDR ranges (e.g. `203.0.113.0/24`) |
| **Apply to** | All users, or specific roles (e.g. only Members and Viewers) |
| **Bypass for Admins** | Optionally allow Admins and Owners to access from any IP |

When IP allowlisting is enabled, requests from non-allowed IPs receive a "Forbidden" response.

:::caution
Before enabling IP allowlisting, ensure your own IP is in the allowed list. If you lock yourself out, contact [support@frugally.app](mailto:support@frugally.app) for assistance.
:::

---

## SSO enforcement

Force all team members to sign in through your SAML SSO identity provider instead of using email/password.

| Setting | Description |
|---------|-------------|
| **Require SSO** | When enabled, the email/password sign-in option is hidden |
| **Bypass for Owner** | The Owner can always sign in with email/password as a recovery mechanism |

SSO enforcement requires a configured SAML SSO integration. See [Setting Up SAML SSO](/docs/sso/setting-up-saml-sso) for setup instructions.

:::note Enterprise feature
SSO enforcement is available on the Enterprise plan. SSO sign-in (without enforcement) is available on Pro and Enterprise.
:::

---

## Audit log

All security-related events are logged in the audit log at **Settings** > **Audit Log**:

| Event | What is logged |
|-------|---------------|
| **Sign-in** | User, IP address, timestamp, method (password, SSO, MFA) |
| **Sign-out** | User, timestamp |
| **Session expired** | User, reason (timeout, idle, revoked) |
| **MFA enabled/disabled** | User, method |
| **Security setting changed** | Who changed it, what changed, before/after values |
| **IP blocked** | IP address, user (if identified), timestamp |
