---
hide_table_of_contents: true
sidebar_position: 1
---

# Projects Overview

A **Guard Project** is a governance container for proposing, reviewing, and approving infrastructure changes. Instead of making changes ad-hoc, Projects give your team a structured process with accountability and an audit trail.

[View Projects](https://dashboard.frugally.app/cost-guard/projects)

---

## What a Project contains

Every Project includes:

| Field | Description |
|-------|-------------|
| **Name** | A descriptive title for the change (e.g. "Migrate staging to Graviton instances") |
| **Intent** | The type of change: **Create**, **Modify**, **Optimise**, or **Destroy** |
| **Description** | A detailed explanation of what is being proposed and why |
| **Affected resources** | The AWS resources that will be impacted |
| **Estimated cost impact** | The expected change in costs (increase, decrease, or neutral) |
| **Approval rules** | Who needs to approve before the change can proceed |
| **Version history** | A record of all changes to the proposal |

---

## Project intents

| Intent | Use case | Example |
|--------|----------|---------|
| **Create** | Launching new infrastructure | Deploying a new ECS cluster for a microservice |
| **Modify** | Changing existing infrastructure | Upgrading RDS instance types |
| **Optimise** | Reducing costs or improving efficiency | Rightsizing over-provisioned EC2 instances |
| **Destroy** | Decommissioning infrastructure | Removing unused NAT Gateways |

---

## How Projects group infrastructure

Projects are scoped to your [Connections](/docs/getting-started/connecting-your-aws-accounts) and can reference resources across multiple AWS accounts and regions. This lets you propose changes that span your entire environment in a single, reviewable unit.

Resources in a Project can be:
- **Existing resources** — Selected from your connected AWS accounts
- **Planned resources** — Described manually for new infrastructure that does not yet exist

---

## Creating a Project

1. Navigate to **Guard** > **Projects** > **Create Project**
2. Fill in the Project details (name, intent, description)
3. Add affected resources
4. Configure [approval rules](./approval-rules.md)
5. Submit for review

`[SCREENSHOT: create-project.png -- Project creation form with intent selector and resource list]`

The Project is created in **Draft** state. See [Workflow](./workflow.md) for the full lifecycle.

---

## In this section

- **[Approval Rules](./approval-rules.md)** — Configure who can approve changes and under what conditions
- **[Workflow](./workflow.md)** — The full lifecycle from Draft to Executed
