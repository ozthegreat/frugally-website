---
hide_table_of_contents: true
sidebar_position: 1
---

# Schedules Overview

A **Schedule** is a time-based trigger linked to one or more [Targets](../targets/overview.md). Schedules tell frugally.app **when** to run actions against your AWS resources — stop them in the evening, start them in the morning, scale down over the weekend, and so on.

[View your Schedules](https://dashboard.frugally.app/schedules)

---

## How Schedules work

Each Schedule defines:

- **Which Targets** to act on
- **What action** to take (Stop/Start, Scale Down/Up, Enable/Disable, Create/Delete)
- **When** to run (daily, weekly, monthly, hourly, one-time, or custom CRON)
- **What timezone** to use
- **Where to notify** (optional Slack channel)

When a Schedule's time arrives, frugally.app creates an [Execution](../executions/overview.md) for each linked Target and carries out the configured action.

---

## Schedule structure

Most Schedules come in pairs — a **Stop (DOWN)** schedule and a **Start (UP)** schedule:

| Schedule | Purpose | Example time |
|----------|---------|--------------|
| **Stop (DOWN)** | Shut down or scale down resources | 7:00 PM weekdays |
| **Start (UP)** | Bring resources back up | 8:00 AM weekdays |

This pair ensures resources are off during non-working hours and available when your team needs them.

:::tip
You do not need to create both. A Stop-only schedule is useful as a safety net to catch resources left running accidentally.
:::

---

## Schedule states

| State | Meaning |
|-------|---------|
| **Active** | The Schedule will trigger at its next scheduled time |
| **Inactive** | The Schedule is paused and will not trigger until reactivated |

You can toggle a Schedule between Active and Inactive at any time from the Schedules list page without deleting it.

---

## Creating Schedules

There are three ways to create Schedules:

| Method | Best for |
|--------|----------|
| **[Onboarding Wizard](../onboarding-wizard.md)** | Bulk creation during initial setup — suggests Schedules for each Target |
| **[Guided form](/docs/getting-started/creating-a-schedule)** | Creating individual Schedules with a visual form (no CRON knowledge needed) |
| **[Custom CRON](./cron-and-schedule-types.md)** | Advanced patterns that the guided form does not cover |

---

## In this section

- **[CRON and Schedule Types](./cron-and-schedule-types.md)** — All available schedule types, CRON syntax, and timezone handling
- **[Estimated Savings](./estimated-savings.md)** — How frugally.app calculates savings before a Schedule runs
