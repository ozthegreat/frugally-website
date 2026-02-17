---
hide_table_of_contents: true
sidebar_position: 3
---

# Groups

Groups let you organise your team members within frugally.app. Use them to control who can see and act on specific parts of your AWS environment by assigning Scopes.

## Group types

frugally.app supports two types of Group:

### Manual Groups

Create a Group from the dashboard and add members by hand. This is the simplest option and works for any team size.

[Manage Groups](https://dashboard.frugally.app/groups)

- Give the Group a name (e.g. `Backend Team`, `Platform Engineering`)
- Add or remove members at any time from the Group detail page

### Synced from Slack (Pro)

:::note Pro feature
Slack-synced Groups are available on the **Pro** plan.
:::

Link a frugally.app Group to a Slack user group. Membership stays in sync automatically — when someone is added to or removed from the Slack user group, the frugally.app Group updates to match.

This is useful when your Slack user groups already reflect your team structure and you want to avoid maintaining membership in two places.

## Scopes

Scopes can be assigned to Groups to control what Connections, Targets, and Schedules the Group's members can access. This lets you restrict visibility so that, for example, a development team only sees their own Connections and Targets while a platform team has access to everything.

See [Scopes](scopes.md) for full details.

## SCIM provisioning (Enterprise)

:::note Enterprise feature
SCIM provisioning is available on the **Enterprise** plan.
:::

Enterprise customers using an identity provider that supports SCIM (such as Okta, Microsoft Entra ID, or OneLogin) can automatically provision and deprovision Groups and their memberships. When a group is created, updated, or deleted in your identity provider, the change is reflected in frugally.app without any manual steps.

See [SCIM Provisioning](../sso/scim-provisioning.md) for setup instructions.
