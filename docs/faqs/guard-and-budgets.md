---
hide_table_of_contents: true
sidebar_position: 5
---

# Guard and Budgets

Common questions about Guard projects, budgets, scans, and cost governance.

---

## What is Guard?

Guard is frugally.app's cost governance engine. It helps you set budgets, track compliance, detect policy violations, and enforce approval workflows before infrastructure changes happen. See [Guard Overview](/docs/guard/overview) for a full introduction.

---

## How do budgets work?

A budget sets a spending limit for a specific scope — such as a project, service, account, or tag group. frugally.app tracks actual AWS spend against the budget and alerts you when thresholds are breached.

| Question | Answer |
|----------|--------|
| **Where does cost data come from?** | AWS Cost Explorer. Your Connection must have Cost Explorer enabled and verified |
| **How often is spend updated?** | Cost data refreshes periodically — typically within 24 hours of the spend occurring in AWS |
| **Can I set multiple thresholds?** | Yes — e.g. alert at 80% and again at 100% |
| **What happens when a budget is exceeded?** | A [violation](/docs/guard/violations-and-remediation) is created and notifications are sent to the configured channels |

For details, see [Budgets](/docs/guard/budgets).

---

## What are Guard scans?

Guard scans evaluate your cloud resources against compliance and cost-optimisation rules. Scans produce findings — specific issues with recommendations for remediation.

| Question | Answer |
|----------|--------|
| **How often do scans run?** | Configurable per project — daily, weekly, or on-demand |
| **Do scans consume credits?** | Yes. See [Credit Usage and Enforcement](/docs/billing/credit-usage-and-enforcement) |
| **Can I suppress false positives?** | Yes — individual findings can be suppressed with a reason |

For details, see [Scans and Findings](/docs/guard/scans-and-findings).

---

## What is a Guard project?

A project is a governance container that groups Connections, budgets, approval rules, and scan configurations together. Projects let you apply different governance policies to different parts of your infrastructure.

For details, see [Projects](/docs/guard/projects/overview).

---

## Do I need approval rules?

Approval rules are optional. They add an approval workflow for infrastructure changes — useful for production environments or changes above a certain cost threshold. You can configure approval rules per project.

For details, see [Approval Rules](/docs/guard/projects/approval-rules).

---

## What plan do I need for Guard?

| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Budgets | 1 | Unlimited | Unlimited |
| Guard projects | 1 | Unlimited | Unlimited |
| Scans | Manual only | Scheduled + manual | Scheduled + manual |
| Approval workflows | — | Basic | Advanced (multi-level) |

See [Plans and Credits](/docs/billing/plans-and-credits) for the full plan comparison.
