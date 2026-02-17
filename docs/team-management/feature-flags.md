---
hide_table_of_contents: true
sidebar_position: 4
---

# Feature Flags

Feature flags let Admins and Owners enable or disable optional features for the team. Use them to control access to beta features, gradually roll out new functionality, or disable features that are not relevant to your workflow.

Navigate to **Settings** > **Feature Flags**.

---

## Available feature flags

| Flag | Description | Default |
|------|-------------|---------|
| **AI Intent (Slack)** | Enable natural-language queries via `@frugally` mentions in Slack | Enabled |
| **Slack Reactions** | Allow emoji reactions on Slack messages to trigger actions | Enabled |
| **Drift Detection** | Enable IaC drift detection via the GitHub integration | Enabled |
| **Cost Anomaly Detection** | Enable automated cost anomaly detection and alerts | Enabled |
| **Executive Dashboard Sharing** | Allow generating share links for the Executive Dashboard | Disabled |
| **Resource Locks** | Enable the ability to lock resources from automation | Enabled |
| **Maturity Assessment** | Enable the FinOps Maturity Assessment tool | Enabled |
| **Auto Top-Up** | Enable automatic credit top-up when balance is low | Disabled |

:::note
Available flags depend on your plan. Some flags are only visible on Pro or Enterprise plans.
:::

---

## Enabling and disabling flags

1. Navigate to **Settings** > **Feature Flags**
2. Toggle the switch next to the flag you want to change
3. The change takes effect immediately for all team members

No restart or sign-out is required. Users currently on a page that uses a disabled feature will see a message indicating the feature is unavailable.

---

## Impact of disabling a flag

| Feature | What happens when disabled |
|---------|---------------------------|
| **AI Intent** | `@frugally` mentions in Slack are ignored |
| **Slack Reactions** | Emoji reactions on frugally.app messages have no effect |
| **Drift Detection** | Drift checks stop running; existing drift alerts remain visible |
| **Cost Anomaly Detection** | Anomaly monitoring pauses; existing anomalies remain visible |
| **Executive Dashboard Sharing** | Share link generation is hidden; existing share links are revoked |
| **Resource Locks** | Lock/unlock actions are hidden; existing locks remain in effect |
| **Maturity Assessment** | Assessment page is hidden; existing results remain visible |
| **Auto Top-Up** | Automatic top-ups stop; existing payment methods remain |

---

## Beta features

Occasionally, frugally.app releases new features behind a beta flag. Beta features:

- Are clearly labelled with a "Beta" badge
- May change behaviour between releases
- Are disabled by default
- Can be enabled by Admins and Owners who want early access

:::tip
Enable beta features in a non-production context first to understand their behaviour before enabling them for the whole team.
:::

---

## Feature flags and SCIM

Feature flags are team-level settings and are not affected by SCIM provisioning. SCIM manages users and groups; feature flags are managed separately by Admins and Owners.
