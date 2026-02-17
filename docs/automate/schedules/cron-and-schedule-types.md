---
hide_table_of_contents: true
sidebar_position: 2
---

# CRON and Schedule Types

frugally.app supports two ways to define when a Schedule runs: a **guided schedule builder** with preset types, and a **custom CRON** mode for advanced patterns.

---

## Guided schedule types

The guided builder (default) lets you pick a frequency and set times using form fields — no CRON knowledge needed.

| Type | Use case | Fields |
|------|----------|--------|
| **Daily** | Same time every day | Time picker |
| **Weekly** | Specific days of the week | Day checkboxes + time picker |
| **Monthly** | Specific day of the month or Nth weekday | Day selector or "2nd Tuesday" style picker + time picker |
| **Hourly** | Repeating every N hours | Interval (1–12 hours) + minute offset + optional day selection |
| **One-time** | Run once at a specific date and time | Date picker + time picker |

### Common patterns

| Pattern | Type | Configuration |
|---------|------|---------------|
| Stop dev every evening | Weekly | Mon–Fri, 7:00 PM |
| Start dev every morning | Weekly | Mon–Fri, 8:00 AM |
| Stop all non-prod on Friday evening | Weekly | Fri, 6:00 PM |
| Start all non-prod on Monday morning | Weekly | Mon, 8:00 AM |
| Nightly safety-net stop | Daily | 11:00 PM |
| Scale down ECS overnight | Daily | 10:00 PM |

:::tip
The most common setup is **Weekly, Mon–Fri**: stop at 7 PM and start at 8 AM. This keeps non-production resources off overnight and on weekends — typically saving 65–75% on those resources.
:::

---

## Custom CRON expressions

For patterns that the guided builder cannot express, switch to advanced mode and enter a raw CRON expression.

### CRON syntax

frugally.app uses standard 5-field CRON syntax:

```
┌───────────── minute (0–59)
│ ┌───────────── hour (0–23)
│ │ ┌───────────── day of month (1–31)
│ │ │ ┌───────────── month (1–12 or JAN–DEC)
│ │ │ │ ┌───────────── day of week (0–6 or SUN–SAT, where 0 = Sunday)
│ │ │ │ │
* * * * *
```

### Supported operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `*` | Every value | `* * * * *` = every minute |
| `,` | List | `1,15 * * * *` = minute 1 and 15 |
| `-` | Range | `0 9-17 * * *` = every hour from 9 AM to 5 PM |
| `/` | Step | `*/15 * * * *` = every 15 minutes |

### CRON examples

| Expression | Meaning |
|-----------|---------|
| `0 19 * * 1-5` | 7:00 PM, Monday to Friday |
| `0 8 * * 1-5` | 8:00 AM, Monday to Friday |
| `0 23 * * *` | 11:00 PM every day |
| `0 6 * * 1` | 6:00 AM every Monday |
| `0 0 1 * *` | Midnight on the 1st of each month |
| `0 */2 * * 1-5` | Every 2 hours, Monday to Friday |

:::note
Use [crontab.guru](https://crontab.guru) to build and validate your CRON expressions. For the complete syntax reference, see [Schedule Format](/docs/advanced/whats-the-format-for-setting-executions-on-a-schedule).
:::

---

## Timezone handling

All Schedules run in the timezone you select when creating them. frugally.app automatically adjusts for **Daylight Saving Time** (DST) transitions.

| Behaviour | Detail |
|-----------|--------|
| **DST spring forward** | If the scheduled time falls in the skipped hour, the Execution runs at the next valid minute |
| **DST fall back** | If the scheduled time falls in the repeated hour, the Execution runs once (on the first occurrence) |
| **UTC option** | Select UTC if you prefer a fixed offset with no DST adjustments |

:::tip
Choose the timezone that matches your team's working hours. If your team spans multiple timezones, consider creating separate Schedules per region.
:::

---

## Editing schedule types

You can switch between guided and CRON modes when editing an existing Schedule. Switching from guided to CRON preserves the current timing as a CRON expression. Switching from CRON to guided is only possible if the expression maps to a supported guided type.
