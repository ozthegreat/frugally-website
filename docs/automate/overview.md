---
hide_table_of_contents: true
sidebar_position: 1
---

# Automate Overview

Automate is frugally.app's scheduling and resource management engine. It lets you define **what** to act on (Targets), **when** to act (Schedules), and tracks **every action** taken (Executions).

## How Automate works

The Automate workflow follows three core concepts:

```
Targets  →  Schedules  →  Executions
(what)      (when)        (track)
```

| Concept | Purpose | Example |
|---------|---------|---------|
| **[Targets](./targets/overview.md)** | Group AWS resources by service, region, and tags | "All EC2 instances tagged `env=dev` in eu-west-1" |
| **[Schedules](./schedules/overview.md)** | Define when Targets should be stopped, started, or scaled | "Stop at 7 PM weekdays, start at 8 AM weekdays" |
| **[Executions](./executions/overview.md)** | Record every action with per-resource results and confidence scores | "Stopped 12 EC2 instances — 11 succeeded, 1 already stopped" |

---

## Supported AWS services

Automate currently supports six AWS services:

| Service | Actions |
|---------|---------|
| **EC2** | Start, Stop |
| **RDS** | Start, Stop |
| **ECS** | Scale Up, Scale Down |
| **Lambda** | Enable, Disable |
| **NAT Gateway** | Create, Delete |
| **VPC Endpoint** | Enable, Disable |

For per-service details and IAM requirements, see [Supported Services](./targets/supported-services.md).

---

## Getting started with Automate

If you are new to frugally.app, the quickest path is:

1. **[Connect your AWS accounts](/docs/getting-started/connecting-your-aws-accounts)** — Establish the IAM link
2. **Use the [Onboarding Wizard](./onboarding-wizard.md)** — Scan resources, create Targets, and set up Schedules in one guided flow
3. **Review your [Dashboard](/docs/dashboard/overview)** — Monitor savings and execution results

For hands-on control, you can also create [Targets](./targets/overview.md) and [Schedules](./schedules/overview.md) manually.

---

## Key sections

| Section | Pages | What you will learn |
|---------|-------|---------------------|
| **[Targets](./targets/overview.md)** | Overview, Supported Services, Tag Filtering, Dry Runs | Defining resource groups and validating them |
| **[Schedules](./schedules/overview.md)** | Overview, CRON & Schedule Types, Estimated Savings | Configuring time-based automation |
| **[Executions](./executions/overview.md)** | Overview, Manual Executions, Lifecycle, Confidence Scoring | Running and tracking actions |
| **[Onboarding Wizard](./onboarding-wizard.md)** | — | Guided setup for new teams |
| **[Insights](./insights.md)** | — | Analytics on savings and execution performance |
