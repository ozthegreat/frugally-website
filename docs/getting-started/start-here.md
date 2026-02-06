---
hide_table_of_contents: true
sidebar_position: 1
---

# Start Here

## What is frugally.app?

frugally.app is a cloud cost automation platform. Connect your AWS accounts, group resources into Targets using tags, and schedule start/stop actions to cut costs automatically.

Supported AWS services: **EC2**, **RDS**, **Lambda**, **ECS**, **NAT Gateway**, and **VPC Endpoint**.

Beyond scheduling, frugally.app includes **Cost Intelligence** to analyse your AWS spending and **Cost Guard** to set budget thresholds and alerts.

## What you will set up

1. **[Connect your AWS accounts](connecting-your-aws-accounts.md)** — Link frugally.app to your AWS environment
2. **[Create Targets](creating-targets.md)** — Scan and group the resources you want to manage (the wizard can also suggest schedules)
3. **[Connect Slack](connecting-slack.md)** — Get notifications when executions run
4. **[Run an Execution](running-an-execution.md)** — Test your setup with a manual one-off action
5. **[Create a Schedule](creating-a-schedule.md)** — Automate start/stop on a recurring basis

## Prerequisites

- A frugally.app account ([sign in](https://dashboard.frugally.app))
- At least one AWS account
- AWS IAM permissions to create roles and policies
- *(Optional)* Slack workspace admin access

## Key concepts

| Term | Definition |
|------|-----------|
| **Connection** | A link between frugally.app and an AWS account via an IAM role. |
| **Target** | A logical group of AWS resources identified by service type, regions, and tags. |
| **Execution** | A one-off or scheduled action (start, stop, etc.) run against one or more Targets. |
| **Schedule** | A recurring rule that triggers Executions automatically on a timetable. |

:::tip Consistent tagging saves time
Tag your AWS resources consistently — for example with `Environment` (`dev`, `staging`, `prod`) or `schedule:true`. This makes it easy to create Targets and lets the Target Onboarding Wizard group resources for you automatically.
:::

Ready? Let's start by [connecting your AWS accounts](connecting-your-aws-accounts.md).
