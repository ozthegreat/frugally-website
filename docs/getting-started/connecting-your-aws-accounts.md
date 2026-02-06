---
hide_table_of_contents: true
sidebar_position: 2
---

# Connecting Your AWS Accounts

A **Connection** links frugally.app to one of your AWS accounts via an IAM role. Once connected, frugally.app can discover resources, run executions, and pull cost data.

There are two ways to create Connections: the **AWS Organization Setup Wizard** (recommended for multi-account setups) or adding a **Standalone Connection** for a single account.

---

## Option A: AWS Organization Setup Wizard (Recommended)

The wizard connects your AWS Organization management account, discovers member accounts, and generates the IAM policies you need — all in one guided flow.

[Open the AWS Organization Setup Wizard](https://dashboard.frugally.app/aws-organization-setup)

### Step 1 — Connect

Enter your **Management Account ID** and **IAM Role Name** (default: `FrugallyOrganizationRole`). Note the **External ID** displayed — you will need it when creating the IAM role in AWS. Toggle optional features such as CloudTrail, Cost Explorer, and CUR access.

Copy the trust policy shown on screen and create the IAM role in your AWS management account.

`[SCREENSHOT: org-wizard-connect.png — wizard Connect step showing account ID, role name, external ID, feature toggles]`

:::note What is the External ID?
The External ID is a unique identifier that prevents confused-deputy attacks. It ensures only frugally.app can assume the IAM role you create. Never share it publicly.
:::

### Step 2 — Discover

Once the management account role is verified, the wizard lists all member accounts from AWS Organizations. Select the accounts you want to onboard.

`[SCREENSHOT: org-wizard-discover.png — member account list with checkboxes]`

### Step 3 — Configure

Choose a **delegated billing account** (if applicable) and configure per-account **CloudTrail** access.

`[SCREENSHOT: org-wizard-configure.png — delegated billing & CloudTrail options]`

### Step 4 — Policies

The wizard auto-generates IAM policies based on your selections. Copy the policy JSON and create the IAM role in each selected AWS account.

`[SCREENSHOT: org-wizard-policies.png — generated IAM policy JSON with copy button]`

:::caution
Create the IAM role in **every** selected member account using the **exact role name** and **External ID** shown in the wizard. Mismatched values will cause connection verification to fail.
:::

For a full breakdown of each policy action, see the [Advanced IAM Policy](../advanced/iam-role-permissions.md) guide.

### Step 5 — Confirm

Review the summary of all Connections that will be created. Confirm that the IAM roles are in place, then click **Confirm**.

`[SCREENSHOT: org-wizard-confirm.png — summary of all connections to be created]`

---

## Option B: Standalone Connection

Use this method to connect a single AWS account without going through the Organization wizard.

[Open the Add Connection form](https://dashboard.frugally.app/connections/create)

### Creating the IAM role in AWS

**Step 1 — Create a Policy**

In the AWS IAM console, create a new policy with the permissions frugally.app needs. A minimal EC2-only example:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:StartInstances",
        "ec2:StopInstances",
        "tag:GetResources"
      ],
      "Resource": "*"
    }
  ]
}
```

:::tip
The connection form in the dashboard shows the exact policies needed based on the services you select. Use those instead of the minimal example above.
:::

For the full policy reference, see the [Advanced IAM Policy](../advanced/iam-role-permissions.md) guide.

**Step 2 — Create a Role**

Create an IAM role with the following trust relationship:

- **Trusted account:** `829513654501`
- **Require External ID:** Yes — use the External ID shown in the frugally.app connection form
- Attach the policy you created in Step 1

### Adding the Connection

Fill in the connection form:

- **Connection Name** — A friendly label (e.g. `Production`, `Dev Account`)
- **Account ID** — Your 12-digit AWS account ID
- **Role Name** — The IAM role name you created
- **External ID** — Must match the value in your IAM role trust policy
- **Environment** — Tag the connection (e.g. `production`, `development`)
- **Status** — Active or Inactive

`[SCREENSHOT: standalone-connection-form.png — add connection form]`

After saving, frugally.app verifies the connection by assuming the role. A green checkmark confirms success.

`[SCREENSHOT: connections-list.png — connections list with verified connection]`

---

Next up: [Creating Targets](creating-targets.md) — scan your AWS accounts and group resources.
