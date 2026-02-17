---
hide_table_of_contents: true
sidebar_position: 1
---

# Guard Overview

Guard is frugally.app's FinOps governance pillar. It helps teams manage infrastructure changes through approval workflows, enforce spending limits with budgets, attribute costs to teams, and maintain compliance through scanning and posture assessments.

[Open Guard](https://dashboard.frugally.app/cost-guard)

---

## What Guard provides

| Feature | What it does |
|---------|--------------|
| **[Projects](./projects/overview.md)** | Structured proposals for infrastructure changes with versioned approval workflows |
| **[Budgets](./budgets.md)** | Spending limits with threshold alerts at configurable percentages |
| **[Cost Attribution](./cost-attribution.md)** | Assign AWS costs to teams, projects, or departments using configurable adapters |
| **[Violations & Remediation](./violations-and-remediation.md)** | Detect and resolve breaches of budgets, policies, and compliance rules |
| **[Scans & Findings](./scans-and-findings.md)** | Periodic compliance checks that produce actionable findings |
| **[Cost Posture](./cost-posture.md)** | A snapshot score of your team's overall cost health |
| **[Maturity Assessment](./maturity-assessment.md)** | Self-assessment of your FinOps practice across key dimensions |
| **[Recommendations](./recommendations.md)** | AI-powered suggestions for rightsizing, scheduling, and waste reduction |
| **[Executive Dashboard](./executive-dashboard.md)** | High-level view for leadership and finance stakeholders |
| **[Resource History & Locks](./resource-history-and-locks.md)** | Track resource changes and prevent automation on critical resources |

---

## How Guard relates to other pillars

Guard works alongside Automate and Intelligence:

| Pillar | Relationship |
|--------|-------------|
| **Automate** | Guard Projects can propose changes that Automate executes. Resource locks in Guard can prevent Automate from acting on critical resources. |
| **Intelligence** | Guard uses Intelligence cost data for budget tracking, cost attribution, and anomaly-driven violations. |

---

## Key concepts

| Concept | Definition |
|---------|-----------|
| **Project** | A governance container for an infrastructure change proposal, with an intent (create, modify, optimise, or destroy), affected resources, and an approval workflow |
| **Budget** | A spending limit tracked against actual AWS costs, with alerts at configurable thresholds |
| **Violation** | A detected breach of a budget, policy, or compliance rule |
| **Scan** | A periodic compliance check that evaluates your environment against configured rules |
| **Finding** | A specific issue discovered during a scan |
| **Posture** | A composite score representing overall cost health |

For a full list of terms, see the [Glossary](/docs/glossary).

---

## Getting started with Guard

1. **[Create a Project](./projects/overview.md)** — Propose an infrastructure change and route it through an approval workflow
2. **[Set up Budgets](./budgets.md)** — Define spending limits for your team or specific services
3. **[Configure Cost Attribution](./cost-attribution.md)** — Assign costs to the teams responsible for them
4. **[Run your first Scan](./scans-and-findings.md)** — Check your environment for compliance issues
5. **[Review your Cost Posture](./cost-posture.md)** — Understand your team's overall cost health

:::note Pro feature
Guard features are available on the Pro and Enterprise plans. See [Billing](/docs/category/billing) for plan details.
:::
