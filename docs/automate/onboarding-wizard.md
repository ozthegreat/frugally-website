---
hide_table_of_contents: true
sidebar_position: 5
---

# Onboarding Wizard

The Target Onboarding Wizard is a guided flow that scans your AWS accounts, discovers resources, groups them into recommended Targets, and optionally creates Schedules — all in one session. It is the fastest way to go from a connected AWS account to active cost savings.

[Open the Onboarding Wizard](https://dashboard.frugally.app/target-onboarding-wizard)

:::tip
The wizard is read-only during scanning. Nothing is created in AWS or frugally.app until you explicitly confirm at the creation step.
:::

---

## When to use the wizard

- **New to frugally.app** — The wizard handles discovery and setup in one flow, so you do not need to create Targets and Schedules manually
- **Adding a new AWS account** — After connecting an account, run the wizard to discover and group its resources
- **Periodic review** — Re-run the wizard to pick up new resources that have been launched since your last scan

For creating individual Targets with precise control, see [Creating Targets](/docs/getting-started/creating-targets#option-b-manual-target-creation).

---

## Wizard steps

### Step 1 — Welcome

An introduction explaining what the wizard does: read-only scanning, tag-based grouping, confidence scores, and production safety guardrails.

`[SCREENSHOT: target-wizard-welcome.png -- Wizard welcome screen]`

### Step 2 — Select Scope

Choose which **Connections**, **AWS regions** (up to 10), and **services** (EC2, RDS, Lambda, ECS, NAT Gateway, VPC Endpoint) to include in the scan.

`[SCREENSHOT: target-wizard-scope.png -- Scope selection with connections, regions, and services]`

:::note
The wizard only scans regions and services you select. If you have resources in regions not selected here, they will not appear in the results.
:::

### Step 3 — Scan and Discover

frugally.app scans your AWS accounts in parallel and lists all detected resources along with their tags. The scan is read-only — no changes are made to your AWS environment.

`[SCREENSHOT: target-wizard-scan-results.png -- Scan results showing discovered resources by service and region]`

### Step 4 — Review Recommendations

frugally.app groups discovered resources into recommended Targets based on environment tags and scheduling intent tags. Each recommendation shows:

- **Name** — Auto-generated and editable inline
- **Service, region, and resource count**
- **Confidence score** (High, Medium, or Low) with expandable reasoning
- **Production flag** — Production environments are flagged for caution and not pre-selected

Use the **Select All High Confidence** bulk action to quickly accept the best recommendations.

`[SCREENSHOT: target-wizard-recommendations.png -- Recommendations list with confidence scores and checkboxes]`

For more on how confidence scores work, see [Confidence Scoring](./executions/confidence-scoring.md).

### Step 5 — Create Targets

Review your selected recommendations. Click **Create** and frugally.app creates the Target records. You can still go back and adjust selections before confirming.

`[SCREENSHOT: target-wizard-review-create.png -- Review summary of targets about to be created]`

### Step 6 — Schedule Suggestions

For each created Target, the wizard suggests a default Schedule (weekdays 7 AM – 7 PM in the region's timezone). Non-production Targets are auto-selected; production Targets are not.

`[SCREENSHOT: target-wizard-schedule-suggestions.png -- Suggested schedules per target with checkboxes and timezone info]`

You can choose:
- **Create Schedules & Finish** — Accept the suggested Schedules and complete setup
- **Skip Schedules & Finish** — Create only the Targets and set up Schedules later

:::note
Schedules created by the wizard use sensible defaults. You can customise them at any time on the [Schedules page](https://dashboard.frugally.app/schedules). See [CRON and Schedule Types](./schedules/cron-and-schedule-types.md) for all available options.
:::

---

## How the wizard relates to manual setup

The wizard automates the same steps described in the [Getting Started](/docs/getting-started/start-here) guide:

| Wizard step | Manual equivalent |
|-------------|-------------------|
| Select Scope | Choose Connections, regions, and services on the Target creation form |
| Scan and Discover | Browse your AWS console or use tag explorer |
| Review Recommendations | Decide which resources to group into Targets |
| Create Targets | [Create Targets manually](/docs/getting-started/creating-targets#option-b-manual-target-creation) |
| Schedule Suggestions | [Create Schedules manually](/docs/getting-started/creating-a-schedule) |

---

## After the wizard

Once the wizard is complete:

- Check the [Dashboard](/docs/dashboard/overview) to see your new Targets and Schedules
- Review the [Onboarding Checklist](/docs/dashboard/onboarding-checklist) to see which setup steps remain
- Monitor [Execution results](./executions/overview.md) as your Schedules begin running
