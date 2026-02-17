---
hide_table_of_contents: true
sidebar_position: 1
---

# Targets Overview

A **Target** is a logical group of AWS resources that frugally.app can act on. Targets are defined by service type, AWS regions, and tag filters, and are scoped to one or more [Connections](/docs/getting-started/connecting-your-aws-accounts).

Targets are the foundation of Automate — every [Schedule](../schedules/overview.md) and [Execution](../executions/overview.md) runs against one or more Targets.

[View your Targets](https://dashboard.frugally.app/targets)

---

## How Targets relate to other concepts

```
Connections → Targets → Schedules → Executions
(AWS accounts)  (resource groups)  (time triggers)  (actions taken)
```

- A Target is scoped to one or more **Connections** (AWS accounts)
- A Target selects resources by **service type**, **regions**, and **tags**
- **Schedules** reference Targets to know which resources to act on
- **Executions** record the results of actions taken against a Target's resources

---

## Creating Targets

There are two ways to create Targets:

| Method | Best for |
|--------|----------|
| **[Onboarding Wizard](../onboarding-wizard.md)** | New teams or bulk discovery — scans AWS accounts and recommends Targets automatically |
| **[Manual creation](/docs/getting-started/creating-targets#option-b-manual-target-creation)** | Precise control when you know exactly which resources to group |

---

## Target configuration

Every Target has the following settings:

| Setting | Description |
|---------|-------------|
| **Name** | A descriptive label (e.g. `Dev EC2 eu-west-1`) |
| **Connections** | One or more linked AWS accounts |
| **Service type** | The AWS service to manage (EC2, RDS, ECS, Lambda, NAT Gateway, VPC Endpoint) |
| **Regions** | One or more AWS regions |
| **Tags** | Key:value pairs used to filter resources |

---

## Resource matching

When a Target is saved, frugally.app queries your AWS accounts and counts the number of resources that match the Target's filters. This count is displayed on the Targets list page.

`[SCREENSHOT: targets-list-resource-count.png -- Targets list showing matched resource counts per Target]`

:::caution 0 resources matched?
Double-check your tag key/value pairs, selected regions, and that the IAM role in each Connection has the correct permissions. See [IAM Role Permissions](/docs/advanced/iam-role-permissions) for the required policy.
:::

---

## In this section

- **[Supported Services](./supported-services.md)** — Which AWS services can be managed and what actions are available
- **[Tag Filtering](./tag-filtering.md)** — How to use tags to select the right resources
- **[Dry Runs](./dry-runs.md)** — Test your Target configuration without taking action
