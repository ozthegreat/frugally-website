---
sidebar_position: 18
---

# Glossary

Key terms used throughout the frugally.app documentation.

---

### Connection

A link between frugally.app and an AWS account, established by deploying an IAM role. Connections can be set up individually (Standalone) or discovered automatically through an AWS Organisation.

:::tip
See [Connecting Your AWS Accounts](./getting-started/connecting-your-aws-accounts.md) for setup instructions.
:::

---

### Target

A logical group of AWS resources to act on, defined by service type, regions, and tag filters. Targets are scoped to one or more Connections.

:::tip
See [Getting Started — Creating Targets](./getting-started/creating-targets.md).
:::

---

### Execution

A single run of a Target's actions — stop, start, scale, or terminate. Executions can be triggered manually, by a Schedule, or as a dry run. Each Execution tracks per-resource results and a confidence score.

:::tip
See [Getting Started — Running an Execution](./getting-started/running-an-execution.md).
:::

---

### Schedule

A time-based trigger linked to one or more Targets. Schedules support one-time runs, named patterns (weekdays only, nightly, etc.), and custom CRON expressions.

:::tip
See [Getting Started — Creating a Schedule](./getting-started/creating-a-schedule.md).
:::

---

### Guard Project

A governance container for infrastructure change proposals. Each project has an intent (create, modify, optimise, or destroy), a list of affected resources, and a versioned approval workflow (Draft, Submitted, Approved/Rejected, Executed).

:::tip
Part of the **Guard** pillar.
:::

---

### Budget

A spending limit tracked against actual AWS costs, set at the project or team level. Budgets support threshold alerts at configurable percentages (e.g. 50%, 80%, 100%).

:::tip
Part of the **Guard** pillar.
:::

---

### Scope

A permission boundary that restricts what a user or Group can see and act on. Scopes come in three types — Environment, Connection, and Target — with the most specific match winning.

:::tip
See [Scopes](./roles-and-access/scopes.md) and [Groups](./roles-and-access/groups.md).
:::

---

### Group

A collection of team members used for shared access (via Scopes) and notification policies. Groups can be managed manually, synced from Slack user groups (Pro), or provisioned via SCIM (Enterprise).

:::tip
See [Scopes](./roles-and-access/scopes.md) and [Groups](./roles-and-access/groups.md).
:::

---

### Credit

The billing unit consumed by frugally.app actions. Each plan includes a monthly credit allocation; different actions consume different amounts depending on the AWS service and resource size.

:::tip
See [Billing](./category/billing).
:::

---

### Violation

A detected breach of a budget, policy, or compliance rule. Violations have a severity level (Low, Medium, High, Critical) and can be resolved manually or through auto-remediation.

:::tip
Part of the **Guard** pillar.
:::

---

### Scan

A periodic compliance check run by Guard. Scans evaluate your AWS environment against configured rules and produce Findings.

:::tip
Part of the **Guard** pillar.
:::

---

### Finding

A specific issue discovered during a Guard scan — for example, an untagged resource or an over-provisioned instance. Findings are linked to the scan that produced them.

:::tip
Part of the **Guard** pillar.
:::

---

### Cost Posture

A snapshot score representing your team's overall cost health. The posture score factors in waste, coverage, and optimisation opportunities, and is tracked over time to show trends.

:::tip
Part of the **Guard** pillar.
:::

---

### Maturity Assessment

A self-assessment of your team's FinOps practice maturity across dimensions such as visibility, optimisation, governance, and culture. Completing the assessment produces a score and an improvement path.

:::tip
Part of the **Guard** pillar.
:::

---

### Drift

A mismatch between Infrastructure-as-Code definitions (Terraform, CloudFormation, etc.) and the live state of AWS resources. Drift is detected by the GitHub integration and reported as alerts with severity levels.

:::tip
See [Getting Started — Connecting GitHub](./getting-started/connecting-github.md).
:::
