---
hide_table_of_contents: true
sidebar_position: 5
---

# Violations and Remediation

A **violation** is a detected breach of a budget, policy, or compliance rule. Violations surface issues that need attention and provide a structured path to resolution.

---

## What constitutes a violation

| Source | Trigger |
|--------|---------|
| **Budget breach** | Actual spend exceeds 100% of a [Budget](./budgets.md) |
| **Policy non-compliance** | A resource or configuration does not meet a defined policy (e.g. untagged resources, over-provisioned instances) |
| **Scan finding** | A [Scan](./scans-and-findings.md) discovers a compliance issue |
| **Anomaly** | A [cost anomaly](/docs/intelligence/cost-anomaly-detection) exceeds the configured threshold |

---

## Violation severity levels

| Severity | Meaning | Example |
|----------|---------|---------|
| **Critical** | Immediate action required — significant financial or compliance impact | Budget exceeded by 50%+, production resource without required tags |
| **High** | Urgent — should be addressed within 24 hours | Budget exceeded by 20%+, unencrypted storage volume |
| **Medium** | Important — should be addressed within the current sprint | Over-provisioned instance, unused Elastic IP |
| **Low** | Informational — address when convenient | Minor tagging inconsistency, non-critical resource without cost tags |

Severity is assigned automatically based on the violation type and magnitude. You can override the severity manually if needed.

---

## Viewing violations

Navigate to **Guard** > **Violations** to see all active violations.

| Column | Description |
|--------|-------------|
| **Severity** | Colour-coded severity indicator |
| **Type** | Budget, Policy, Scan, or Anomaly |
| **Description** | What the violation is about |
| **Resource** | The affected resource(s) or budget |
| **Detected** | When the violation was first detected |
| **Status** | Open, Acknowledged, Remediated, or Dismissed |

`[SCREENSHOT: violations-list.png -- Violations list with severity indicators and status filters]`

---

## Remediation options

### Manual remediation

Review the violation, investigate the root cause, and take action yourself:

1. Click the violation to view details
2. Review the recommended remediation steps
3. Take action in AWS or frugally.app
4. Mark the violation as **Remediated** with a note explaining what you did

### Automated remediation

Some violation types support automated remediation:

| Violation type | Automated action |
|----------------|-----------------|
| **Over-provisioned instance** | Propose a rightsizing change via a Guard [Project](./projects/overview.md) |
| **Unused resource** | Propose a decommission action via a Guard Project |
| **Missing tags** | Apply default tags via an automated tagging rule |
| **Budget breach** | Trigger a notification escalation to stakeholders |

Automated remediation creates a **draft** action that requires approval before execution — it never makes changes to your AWS environment without human review.

:::note
Automated remediation is available on the Enterprise plan. See [Billing](/docs/category/billing) for plan details.
:::

---

## Violation lifecycle

```
Open → Acknowledged → Remediated / Dismissed
```

| Status | Meaning |
|--------|---------|
| **Open** | Newly detected, not yet reviewed |
| **Acknowledged** | Someone is investigating or working on it |
| **Remediated** | The underlying issue has been fixed |
| **Dismissed** | The violation has been closed without action (with a reason) |

---

## Tracking resolution

The violation detail page tracks:

- **Timeline** — When the violation was detected, acknowledged, and resolved
- **Assigned to** — The team member responsible for remediation
- **Comments** — Discussion and notes from the team
- **Related items** — Linked Budgets, Scans, Projects, or Executions

---

## Best practices

- **Triage regularly** — Review open violations daily or as part of your team standup
- **Assign ownership** — Every violation should have a named owner
- **Use severity to prioritise** — Focus on Critical and High first
- **Dismiss with reasons** — If a violation is not actionable, dismiss it with a clear explanation so your team understands why
- **Track trends** — A rising violation count may indicate a systemic issue worth addressing at the process level
