---
hide_table_of_contents: true
sidebar_position: 6
---

# Scans and Findings

Guard Scans are periodic compliance checks that evaluate your AWS environment against configured rules. Each Scan produces **Findings** — specific issues that may require attention.

---

## What Scans check

Scans evaluate your environment for:

| Category | Examples |
|----------|---------|
| **Cost optimisation** | Unused resources, over-provisioned instances, idle load balancers |
| **Tagging compliance** | Resources missing required tags, inconsistent tag values |
| **Security posture** | Unencrypted volumes, public S3 buckets, overly permissive security groups |
| **Configuration standards** | Resources not matching your team's defined standards |

---

## Scan frequency and triggers

| Trigger | When it runs |
|---------|-------------|
| **Scheduled** | Runs automatically on a configurable schedule (daily, weekly, or custom) |
| **Manual** | Triggered on demand from the Guard Scans page |
| **On change** | Triggered when frugally.app detects a change in your AWS environment (new resources, tag changes, etc.) |

Configure scan frequency at **Guard** > **Scans** > **Settings**.

---

## Types of findings

Each finding represents a specific issue discovered during a scan.

| Finding type | Severity | Description |
|-------------|----------|-------------|
| **Unused resource** | Medium–High | A resource is running but has no recent activity (e.g. EC2 instance with 0% CPU for 7+ days) |
| **Over-provisioned** | Medium | A resource is significantly larger than its usage requires |
| **Missing required tag** | Low–Medium | A resource does not have one or more required tag keys |
| **Inconsistent tags** | Low | Tag values do not match the expected controlled vocabulary |
| **Unencrypted storage** | High | An EBS volume or S3 bucket does not have encryption enabled |
| **Idle load balancer** | Medium | An ALB/NLB has no healthy targets registered |

---

## Viewing scan results

Navigate to **Guard** > **Scans** to see scan history and results.

`[SCREENSHOT: guard-scan-results.png -- Scan findings list showing finding type, severity, and affected resource]`

Each scan result shows:

| Column | Description |
|--------|-------------|
| **Scan date** | When the scan ran |
| **Findings** | Total count of findings by severity |
| **New** | Findings that appeared for the first time in this scan |
| **Resolved** | Findings from previous scans that are no longer detected |
| **Status** | Completed, Running, or Failed |

---

## Working with findings

### Viewing a finding

Click any finding to see:

- **Resource details** — The affected resource with its ID, type, region, and tags
- **Explanation** — Why this was flagged and what the expected state should be
- **Recommended action** — Steps to resolve the finding
- **History** — How long this finding has been present across scans

### Acting on findings

| Action | What it does |
|--------|-------------|
| **Create Violation** | Escalates the finding to a [Violation](./violations-and-remediation.md) for formal tracking and remediation |
| **Create Project** | Creates a Guard [Project](./projects/overview.md) to propose a fix through the approval workflow |
| **Dismiss** | Marks the finding as accepted risk with a reason (e.g. "This resource is needed for disaster recovery") |
| **Suppress** | Prevents this specific finding from appearing in future scans |

---

## Exporting results

Click **Export** on any scan result to download findings as a CSV file. The export includes all finding details, severities, and affected resources.

---

## Scan configuration

Customise what scans check for at **Guard** > **Scans** > **Rules**:

- **Enable/disable rule categories** — Turn entire categories on or off
- **Adjust thresholds** — Change what counts as "over-provisioned" or "idle"
- **Required tags** — Define which tag keys are mandatory for compliance
- **Exclusions** — Exclude specific resources, accounts, or regions from scans

:::tip
Start with the default ruleset and tune thresholds after reviewing your first few scan results. This prevents alert fatigue while still catching the most impactful issues.
:::
