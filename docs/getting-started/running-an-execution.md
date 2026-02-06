---
hide_table_of_contents: true
sidebar_position: 5
---

# Running an Execution

An Execution is a manual, one-time action against one or more Targets. Use it to test your setup or handle ad-hoc needs like starting a dev environment for weekend work.

[Run Now](https://dashboard.frugally.app/run-now)

## Running your first execution

`[SCREENSHOT: run-now-form.png — Run Now form]`

Fill in the **Run Now** form:

- **Targets** — Select one or more Targets (multi-select)
- **Action** — Depends on the service type:
  - EC2 / RDS: **Start** or **Stop**
  - Lambda / VPC Endpoint: **Enable** or **Disable**
  - ECS: **Scale Up** or **Scale Down**
  - NAT Gateway: **Create** or **Delete**
- **Slack channel** *(optional)* — Where to post results

:::note
If Slack is not connected, the channel field won't appear. Results are always visible on the [Executions page](https://dashboard.frugally.app/executions).
:::

Click **Run** to start the execution.

## Viewing execution results

Open the [Executions page](https://dashboard.frugally.app/executions) to see status and details for every execution.

`[SCREENSHOT: execution-in-progress.png — Executions page with status indicators]`

If you selected a Slack channel, results are also posted there:

`[SCREENSHOT: execution-slack-results.png — Slack message with results]`

## Troubleshooting

- **No resources found** — Check that your Target's tags, regions, and service type match actual AWS resources.
- **Access denied** — Verify the IAM role name and External ID in your Connection match the role in AWS.
- **Resources not changing state** — Ensure the IAM policy includes the required actions (e.g. `ec2:StartInstances`, `ec2:StopInstances`). See the [Advanced IAM Policy](../advanced/iam-role-permissions.md) guide.

:::tip
It's safe to run against resources that are already in the desired state. frugally.app reports them as "already in target state" and takes no action.
:::

---

Next up: [Creating a Schedule](creating-a-schedule.md) — automate your executions on a recurring basis.
