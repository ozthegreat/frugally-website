---
hide_table_of_contents: true
sidebar_position: 5
---

# 05 - Running an Execution

Now you've told frugally/app about your AWS Accounts and the Resources you wish it to manage, as well as created a Role for it to use, you can test it all by running a one off Execution.

_One off Executions are also useful for whenever you need to change the state of one of your Resources outside of a defined Schedule e.g. your Engineers decide to work over the weekend and need to start you development environment._

You can open the **Executions Screen** either:

a. **From the app homepage**: From within your Slack app, navigate to the Frugally app home screen. This is usually at the bottom of your conversations list in the side bar. Just click the **Frugally** app, then at the top of the screen click **Run an Execution**.

b. **From the shortcuts menu**: From within your Slack app, navigate to any conversation and click the little plus (+) icon next to left of the input text box. Select the **Browse all shortcuts** menu option. Select **Frugally**. Select **Run an Execution**.

![Run an Execution](/img/run-an-execution.png)
_Run an Execution_

**Accounts** Select all the Accounts you wish to run the Execution in.

**Resources** Select all the Resources you wish to change (this will run against every region the Resource has selected in every AWS Account you select).

**Action** The action you wish to perfom, either wake up or go to sleep.

**Channel to post results in** After the Execution frugally.app will post the results in a Slack channel. If you wish them to be private then just send them to yourself.

When you're ready just select **Run**. If you switch to your AWS Account you should soon see the instances changing state.

![Execution Results](/img/execution-results.png)

After the Execution the results will be posed in the channel you selected. Frugally.app will update the message further as it gets more information.

Congratulations! You've just run your first execution. You can now save money in AWS by turning your instances off with frugally.app. Now how about doing it on a schedule? [Creating a Schedule](creating-a-schedule.md)