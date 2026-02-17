---
hide_table_of_contents: true
sidebar_position: 3
---

# Credit Usage and Enforcement

This page explains how credits are consumed by different actions, how to track your usage, and what happens when your credit balance reaches zero.

---

## How credits are consumed

Different actions consume different amounts of credits:

| Action | Credits consumed | Notes |
|--------|-----------------|-------|
| **Execution (per resource)** | 1 credit | Each resource acted on in an Execution costs 1 credit |
| **Dry run** | 0 credits | Dry runs are free |
| **Guard Scan** | 5 credits | Per scan run |
| **Guard Project** | 0 credits | Creating and managing Projects is free |
| **Intelligence query** | 0.5 credits | Per Cost Explorer or Commitment Utilisation query |
| **Anomaly detection** | 0 credits | Included — runs automatically at no credit cost |
| **GitHub IaC scan** | 2 credits | Per PR scanned |
| **Drift detection run** | 3 credits | Per drift detection cycle |

### Execution credit example

If a Schedule triggers an Execution against a Target with 20 EC2 instances, that Execution consumes **20 credits** (1 per resource). If 5 of those instances are already stopped and skipped, only 15 credits are consumed.

:::note
Resources that are skipped because they are already in the desired state or because they are [locked](/docs/guard/resource-history-and-locks) do not consume credits.
:::

---

## Viewing credit usage

Navigate to **Settings** > **Billing** > **Usage** to see:

| View | Description |
|------|-------------|
| **Current balance** | Credits remaining for the current billing period |
| **Usage chart** | Daily credit consumption over time |
| **Usage by action** | Breakdown by action type (Executions, Scans, queries, etc.) |
| **Usage by Target** | Which Targets consume the most credits |
| **Projected usage** | Estimated credits needed for the remainder of the billing period based on current patterns |

---

## What happens when credits run out

When your credit balance reaches zero:

### Grace period

A **48-hour grace period** begins. During this time:

- Scheduled Executions continue to run
- A warning banner appears on the dashboard
- The team Owner receives email and in-app notifications
- Credit usage is tracked as negative (overage)

### After the grace period

If credits are not replenished within 48 hours:

| Action | Behaviour |
|--------|-----------|
| **Scheduled Executions** | Paused — Schedules remain active but Executions are not triggered |
| **Manual Executions** | Blocked — "Insufficient credits" error |
| **Guard Scans** | Paused |
| **GitHub scans** | Paused |
| **Intelligence** | Read-only — cached data is available, new queries are blocked |
| **Dashboard** | Fully accessible |
| **Notifications** | Continue to be delivered |
| **Guard Projects** | Continue to work (free) |

:::caution
Paused Schedules do not automatically resume when credits are replenished. You will need to manually verify that Schedules are running after topping up.
:::

---

## Warnings and notifications

| Threshold | Notification |
|-----------|-------------|
| **50% credits used** | In-app notification to the Owner |
| **80% credits used** | In-app + email notification to the Owner |
| **Credits exhausted** | In-app + email to the Owner, dashboard banner for all users |
| **Grace period ending** | Email to the Owner (24 hours before enforcement) |

---

## Reducing credit usage

1. **Optimise Targets** — Ensure Targets only include resources that need automation; remove stale or irrelevant resources
2. **Consolidate Schedules** — Fewer, broader Schedules consume fewer credits than many narrow ones
3. **Use dry runs** — Dry runs are free and help validate Targets before running real Executions
4. **Review scan frequency** — Reduce Guard Scan frequency if daily scans are not needed
5. **Monitor usage trends** — Use the usage chart to identify spikes and their causes
