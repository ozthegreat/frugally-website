---
hide_table_of_contents: true
sidebar_position: 3
slug: schedule-format
---

# Schedule Format Reference

frugally.app uses standard CRON expressions to define when Schedules run. This page is the complete reference for CRON syntax, operators, and common patterns.

For an introduction to scheduling concepts, see [CRON and Schedule Types](/docs/automate/schedules/cron-and-schedule-types).

---

## CRON syntax

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

Any valid CRON expression is supported.

---

## Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `*` | Every value | `* * * * *` | Every minute |
| `,` | List of values | `0,30 * * * *` | At minute 0 and 30 |
| `-` | Range of values | `0 9-17 * * *` | Every hour from 9 AM to 5 PM |
| `/` | Step values | `*/15 * * * *` | Every 15 minutes |

Operators can be combined:

| Expression | Meaning |
|-----------|---------|
| `0 9-17/2 * * *` | Every 2 hours from 9 AM to 5 PM |
| `0 8,12,18 * * 1-5` | At 8 AM, 12 PM, and 6 PM on weekdays |

---

## Common patterns

| Pattern | Expression | Description |
|---------|-----------|-------------|
| Weekdays at 7 PM | `0 19 * * 1-5` | Monday to Friday at 7:00 PM |
| Weekdays at 8 AM | `0 8 * * 1-5` | Monday to Friday at 8:00 AM |
| Every day at 11 PM | `0 23 * * *` | Every night at 11:00 PM |
| Every Monday at 6 AM | `0 6 * * 1` | Weekly on Monday |
| First of the month at 6 AM | `0 6 1 * *` | Monthly on the 1st |
| Every 2 hours on weekdays | `0 */2 * * 1-5` | Monday to Friday, every 2 hours |
| Every 15 minutes | `*/15 * * * *` | Every quarter hour |
| Friday at 6 PM | `0 18 * * 5` | Weekly on Friday evening |
| Monday at 8 AM | `0 8 * * 1` | Weekly on Monday morning |

---

## Day of week reference

| Value | Day |
|-------|-----|
| `0` | Sunday |
| `1` | Monday |
| `2` | Tuesday |
| `3` | Wednesday |
| `4` | Thursday |
| `5` | Friday |
| `6` | Saturday |

You can also use three-letter abbreviations: `SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`.

---

## Month reference

| Value | Month |
|-------|-------|
| `1` | January |
| `2` | February |
| `3` | March |
| `4` | April |
| `5` | May |
| `6` | June |
| `7` | July |
| `8` | August |
| `9` | September |
| `10` | October |
| `11` | November |
| `12` | December |

Three-letter abbreviations are also supported: `JAN`, `FEB`, `MAR`, etc.

---

## Timezone handling

All CRON expressions are evaluated in the timezone configured on the Schedule. frugally.app automatically handles Daylight Saving Time transitions:

- **Spring forward:** If the scheduled time falls in the skipped hour, the Execution runs at the next valid minute
- **Fall back:** If the scheduled time falls in the repeated hour, the Execution runs once (first occurrence)

Select UTC if you prefer a fixed offset with no DST adjustments.

---

## Tips

- Use [crontab.guru](https://crontab.guru) to build and validate your expressions
- There is no harm in running an Execution against resources already in the desired state — frugally.app reports them as "already in target state" and takes no action
- A nightly stop schedule is a useful safety net even if resources should already be off — it catches anything left running accidentally

:::tip
Set a stop schedule every evening as a safety net. Even if resources are already off, frugally.app skips them without consuming credits. This protects against resources being manually started and forgotten.
:::
