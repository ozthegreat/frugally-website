---
hide_table_of_contents: true
---

# What's the format for setting executions on a schedule?

You set schedules using CRON format. As long as it's a valid CRON expression we should support it.

Some examples:

Everyday at 8am: `0 8 * * *`

Weekdays at 7pm: `0 19 * * 1-5`

First of the month at 6am `0 6 1 * *`

We recommended using a site like [crontab](https://crontab.guru) to work out the expression you need.

Note: There's no harm in running an exectuion against an instance even if it's already in the required state, sometimes it's even preferable in case an instance has changed state outside of frugally.app E.g. Set you instances to turn off at 6pm everyday including weekends, not just weekdays.