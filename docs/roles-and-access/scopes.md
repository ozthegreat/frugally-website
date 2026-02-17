---
sidebar_position: 4
---

# Scopes

:::note Pro feature
Scopes are available on the **Pro** plan and above.
:::

Scopes control what your team members can see and act on inside frugally.app. Assign a Scope to a [Group](groups.md) or an individual user to restrict their access to specific parts of your AWS environment.

[Manage Scopes](https://dashboard.frugally.app/scopes)

## Scope types

Every Scope has a type that determines how it restricts access. There are three types, ranging from broad to narrow:

### Environment

Restrict access by the environment label on your Connections — **Production** or **Non-Production**. This is the broadest scope type.

For example, an Environment scope set to `Non-Production` lets members access every Target belonging to a Connection tagged as non-production, across all AWS accounts.

### Connection

Restrict access to one or more specific Connections. Any Target that belongs to a scoped Connection is accessible; everything else is hidden.

Use this when you want a team to see only the AWS accounts they work in.

### Target

Restrict access to one or more specific Targets. This is the most granular scope type — members see only the exact Targets listed.

Use this when different teams share the same AWS account but manage different resources.

## How Scopes restrict Targets

When frugally.app checks whether a user can access a Target, it evaluates the user's Scopes using a **specificity hierarchy** — most specific match wins:

1. **Target scope** — Does any Scope include this exact Target? If yes, access is granted.
2. **Connection scope** — Does any Scope include the Target's Connection? If yes, access is granted.
3. **Environment scope** — Does any Scope include the Connection's environment? If yes, access is granted.

A match at **any** level is enough to grant access. If no Scope matches at any level, the Target is hidden and the user cannot run Executions against it.

### Example

| Scope type | Scope value | Effect |
|------------|-------------|--------|
| Environment | `Non-Production` | User can access all Targets in every non-production Connection |
| Connection | `Dev Account (123456789012)` | User can access all Targets in that specific Connection |
| Target | `Dev EC2 eu-west-1` | User can access only that single Target |

## Assigning Scopes

Scopes can be assigned to:

- **Groups** — Every member of the Group inherits the Scope. This is the recommended approach. See [Groups](groups.md).
- **Individual users** — For one-off exceptions where a Group doesn't make sense.

When a user has multiple Scopes (directly and via Groups), they are merged with **OR logic** — the user gets the combined access of all their Scopes.

Team admins bypass Scope checks entirely and always have full access.

## Creating a Scope

1. Navigate to **Scopes** > **Create Scope** (or use the link above)
2. Give the Scope a **Name** (e.g. `Backend Team — Dev Only`)
3. Choose a **Scope Type** — Environment, Connection, or Target
4. Select the **values** for that type:
   - Environment: choose Production, Non-Production, or both
   - Connection: search and select one or more Connections
   - Target: search and select one or more Targets
5. Save the Scope, then assign it to a Group or user
