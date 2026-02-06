---
hide_table_of_contents: true
sidebar_position: 3
---

# Creating Targets

A **Target** is a logical group of AWS resources identified by service type, regions, and tags. Targets are the building blocks for Executions and Schedules — every action you run in frugally.app is aimed at one or more Targets.

[View your Targets](https://dashboard.frugally.app/targets)

## Supported AWS services

| Service | Available actions |
|---------|------------------|
| **EC2** | Start, Stop |
| **RDS** | Start, Stop |
| **Lambda** | Enable, Disable |
| **ECS** | Scale Up, Scale Down |
| **NAT Gateway** | Create, Delete |
| **VPC Endpoint** | Enable, Disable |

:::tip Tag your resources consistently
frugally.app works best when resources are tagged with `Environment` (e.g. `dev`, `staging`, `prod`) and/or scheduling intent tags (e.g. `schedule:true`). Consistent tagging makes the Target Onboarding Wizard far more effective.
:::

---

## Option A: Target Onboarding Wizard (Recommended)

The wizard scans your AWS accounts, automatically detects resources, groups them into recommended Targets based on tags, and suggests schedules — all in one guided flow. Scanning is read-only; nothing is created until you confirm.

[Open the Target Onboarding Wizard](https://dashboard.frugally.app/target-onboarding-wizard)

### Step 1 — Welcome

An overview of what the wizard does: read-only scanning, tag-based grouping, confidence scores, and production safety guardrails.

`[SCREENSHOT: target-wizard-welcome.png — wizard welcome/entry framing screen]`

### Step 2 — Select Scope

Choose which **Connections**, **AWS regions** (max 10), and **services** (EC2, RDS, Lambda, ECS, NAT Gateway, VPC Endpoint) to include in the scan.

`[SCREENSHOT: target-wizard-scope.png — scope selection with connections, regions, and services]`

### Step 3 — Scan & Discover

frugally.app scans your AWS accounts in parallel and lists all detected resources along with their tags.

`[SCREENSHOT: target-wizard-scan-results.png — scan results showing discovered resources by service and region]`

### Step 4 — Review Recommendations

frugally.app groups resources into recommended Targets based on environment tags and scheduling intent tags. Each recommendation shows:

- **Name** (auto-generated, editable inline), service, region, and resource count
- **Confidence score** (High / Medium / Low) with expandable reasoning
- Non-production environments are pre-selected; production is flagged for caution
- Use the **Select All High Confidence** bulk action to speed things up

`[SCREENSHOT: target-wizard-recommendations.png — recommendations list with confidence scores, checkboxes, and expandable reasoning]`

### Step 5 — Create Targets

Review your selected recommendations. Click **Create** and frugally.app creates the Target records.

`[SCREENSHOT: target-wizard-review-create.png — review summary of targets about to be created]`

### Step 6 — Schedule Suggestions

For each created Target, the wizard suggests a default schedule (weekdays 7 AM – 7 PM in the region's timezone). Non-production Targets are auto-selected; production Targets are not.

`[SCREENSHOT: target-wizard-schedule-suggestions.png — suggested schedules per target with checkboxes and timezone info]`

You can choose **Create Schedules & Finish** or **Skip Schedules & Finish**.

:::note
Schedules created here use sensible defaults. You can customise them later on the [Schedules page](https://dashboard.frugally.app/schedules).
:::

---

## Option B: Manual Target Creation

For creating individual Targets when you know exactly what you want.

[Create a Target manually](https://dashboard.frugally.app/targets/create)

Navigate to **Targets** > **Create Target** (or use the link above) and fill in the form:

- **Name** — A descriptive label (e.g. `Dev EC2 eu-west-1`)
- **Connections** — Select one or more Connections (multi-select)
- **Service Type** — The AWS service to manage
- **AWS Regions** — One or more regions (multi-select)
- **Tags** — Key:value pairs, one per line

`[SCREENSHOT: create-target-form.png — manual creation form with all fields]`

### How tag filtering works

- `Environment:develop` + `Service:api` — **AND** logic: both tags must match
- `Environment:develop,staging` — **OR** logic for the same key: either value matches
- A key without a value matches all resources that have that tag key, regardless of value

For the full tag syntax reference, see [Resource Tag Filtering](../advanced/resource-tag-filtering.md).

### Verifying your Target

After saving, check the resource count on the Targets list. This shows how many AWS resources matched your filters.

`[SCREENSHOT: targets-list-populated.png — target list with matched resource count]`

:::caution 0 resources found?
Double-check your tag key/value pairs, selected regions, and that the IAM role in each AWS account has the correct permissions.
:::

---

Next up: [Connecting Slack](connecting-slack.md) — set up notifications before you start running executions.
