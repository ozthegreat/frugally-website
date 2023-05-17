---
sidebar_position: 6
---

# 06 - Creating a Schedule

A lot of the power of frugally.app comes in the form of schedules. Your engineers probably work fairly predictable hours, this means there are large portions of time where your dev, staging, QA etc environments are turned on and costing you money, but aren't actually being used e.g. over night / weekends. With schedules you can turn these environments off when they're not in use and only turn them on when they are needed.

You can open the Schedules Screen either:

a. From the app homepage: From within your Slack app, navigate to the Frugally app home screen. This is usually at the bottom of your conversations list in the side bar. Just click the Frugally app, then at the top of the screen click Schedules.

b. From the shortcuts menu: From within your Slack app, navigate to any conversation and click the little box with a / icon inside of it. Search through the list for Schedules by Frugally and select it.

![Schedules overview screen](/img/schedules-screen.png)
_The schedules overview screen will list any existing schedules you have set and when their next run time is_

When you're ready to add a new Schedule, click the "Add Schedule" button in the top right corner.

![Create a Schedule screen](/img/create-a-schedule.png)

**Resource Name** A friendly name for the schedule so you can identify it. E.g. Weekdays UserApi

**Accounts** Select all the Accounts you wish to run the schedule in.

**Resources** Select all the Resources you wish to change (this will run against every region the Resource has selected in every AWS Account you select).

**UP action CRON** A CRON expression for when you wish to perform the UP action. Can be left blank if you don't wish to perfom one. You can use a site like [crontab](https://crontab.guru) to help you work out the CRON expression you need.

**DOWN action CRON** A CRON expression for when you wish to perform the DOWN action. Can be left blank if you don't wish to perfom one. You can use a site like [crontab](https://crontab.guru) to help you work out the CRON expression you need.

**Timezone** The timezone the schedule will run in. Will respect daylight savings.

**Channel to post results in** Everytime the schedule runs frugally.app will post the results in a Slack channel. If you wish them to be private then just send them to yourself.

**Status** Whether this schedule is active in frugally.app or not.

When you've completed the form, click **Save**.

Everytime the schedule runs the results will be posed in the channel you selected. Frugally.app will update the message further as it gets more information. These can also be viewed on the Homepage tab of the frugally.app.

Congratulations! You've just added your first schedule. You can now save money in AWS by turning your instances off with frugally.app.