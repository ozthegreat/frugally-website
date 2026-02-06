---
hide_table_of_contents: true
sidebar_position: 6
---

# Creating a Schedule

Schedules automate your Executions. For example, turn off your dev environment at 7 PM every evening and start it again at 8 AM on weekdays — saving money overnight and on weekends without lifting a finger.

[View Schedules](https://dashboard.frugally.app/schedules)

:::note
If you used the Target Onboarding Wizard and created schedules in the final step, you may already have schedules. This page shows how to create and customise them.
:::

## Creating your first schedule

Navigate to **Schedules** > **Create Schedule**, or use the link below.

[Create a Schedule](https://dashboard.frugally.app/schedules/create)

`[SCREENSHOT: schedules-list-empty.png — empty Schedules page]`

## The schedule form

The form has two tabs: **Stop (DOWN)** and **Start (UP)**, each with its own schedule settings.

- **Name** — A friendly label (e.g. `Dev Environment Weekdays`)
- **Targets** — Select one or more Targets (multi-select)
- **Timezone** — The timezone the schedule runs in (respects DST)
- **Slack Channel** *(optional)* — Where to post results when the schedule runs
- **Status** — Active or Inactive

## Choosing a schedule type

The guided schedule builder (default) lets you pick a frequency and set times using form fields — no CRON knowledge needed.

| Type | Use case | Fields |
|------|----------|--------|
| **Daily** | Same time every day | Time picker (default: 7 PM stop, 8 AM start) |
| **Weekly** | Specific days of the week | Day checkboxes (default: Mon–Fri) + time picker |
| **Monthly** | Specific day of the month or Nth weekday | Day selector or "2nd Tuesday" style picker + time picker |
| **Hourly** | Repeating every N hours | Interval (1–12 hrs) + minute offset + optional day selection |
| **One-time** | Run once at a specific date/time | Date picker + time picker |

`[SCREENSHOT: create-schedule-guided.png — guided schedule form showing the Weekly type with day checkboxes and time picker]`

:::tip
The most common setup is **Weekly, Mon–Fri**: stop at 7 PM and start at 8 AM. This keeps non-production resources off overnight and on weekends.
:::

## Advanced: Custom CRON

For schedules that don't fit the guided types, switch to advanced mode and enter a raw CRON expression (`minute hour day-of-month month day-of-week`).

`[SCREENSHOT: create-schedule-cron.png — advanced CRON mode showing the expression input]`

Use [crontab.guru](https://crontab.guru) to build and validate your expression. For more details see the [CRON format guide](../advanced/whats-the-format-for-setting-executions-on-a-schedule.md).

:::tip
It's safe to set a stop schedule every evening as a safety net, even if resources are already off. frugally.app reports them as already in the desired state and takes no action.
:::

## Viewing and managing schedules

After saving, your schedule appears in the list with a human-readable summary and next run times.

`[SCREENSHOT: schedules-list-populated.png — schedule list with readable summaries and next run times]`

From this page you can edit, pause (set to Inactive), or delete a schedule. Results appear on the [Executions page](https://dashboard.frugally.app/executions) and in Slack (if connected).

## What's next?

Congratulations — you've completed the Getting Started guide! Here are some next steps to explore:

- [Cost Explorer](https://dashboard.frugally.app/cost-explorer) — Analyse AWS spending
- [Commitment Utilisation](https://dashboard.frugally.app/commitment-utilisation) — Track RI/SP usage
- [Cost Guard](https://dashboard.frugally.app/cost-guard) — Budget thresholds and alerts
- [Insights](https://dashboard.frugally.app/insights) — Execution analytics and savings
- [Advanced IAM Policy](../advanced/iam-role-permissions.md) — Tag-based restrictions
- [Resource Tag Filtering](../advanced/resource-tag-filtering.md) — Full tag syntax reference
