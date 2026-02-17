---
hide_table_of_contents: true
sidebar_position: 3
---

# IaC Scanning

IaC scanning analyses Infrastructure-as-Code changes in pull requests and reports the estimated cost impact. It helps your team understand the financial implications of infrastructure changes before they are merged.

---

## How scanning works

1. A developer opens or updates a pull request that modifies IaC files
2. frugally.app detects the change and scans the affected files
3. It compares the proposed infrastructure against current state
4. A cost-impact analysis is calculated and posted as a PR comment
5. A GitHub check run reports the scan status (pass/fail)

`[SCREENSHOT: github-iac-scan.png -- IaC scan results posted as a PR comment showing cost impact]`

---

## Supported frameworks

| Framework | Detected by |
|-----------|-------------|
| **Terraform** | `.tf` and `.tf.json` files |
| **CloudFormation** | Templates with `AWSTemplateFormatVersion` |
| **AWS CDK** | Synthesised templates in `cdk.out/` |
| **Pulumi** | `Pulumi.yaml` project files |
| **OpenTofu** | `.tf` and `.tf.json` files (same as Terraform) |

Scanning is triggered for any PR that modifies files matching these patterns in repositories where the GitHub App has access.

---

## Scan triggers

| Event | Scan triggered? |
|-------|----------------|
| PR opened | Yes |
| PR updated (new commits pushed) | Yes |
| PR reopened | Yes |
| Draft PR opened | Configurable (default: no) |
| PR to specific branches only | Configurable (default: all branches) |

Configure triggers at **Settings** > **GitHub** > **Scan Triggers**.

---

## Cost-impact analysis

The scan compares the proposed changes against the current infrastructure and estimates the cost impact:

| Change type | Example | Impact |
|-------------|---------|--------|
| **New resource** | Adding an EC2 instance | Monthly cost increase |
| **Modified resource** | Upgrading instance type from t3.small to t3.large | Cost difference (increase or decrease) |
| **Removed resource** | Deleting an RDS instance | Monthly cost decrease |
| **No cost impact** | Changing a tag or description | $0 impact |

The PR comment shows:

| Section | Content |
|---------|---------|
| **Summary** | Total estimated monthly cost change (e.g. "+$150/month") |
| **Breakdown** | Per-resource cost changes |
| **Current cost** | What the infrastructure costs today |
| **Proposed cost** | What it would cost after the change |

---

## Configuring scan rules

Navigate to **Settings** > **GitHub** > **Scan Rules** to configure:

### Thresholds

| Setting | Description | Default |
|---------|-------------|---------|
| **Cost increase warning** | Flag PRs that increase costs above this amount | $50/month |
| **Cost increase block** | Fail the check run for PRs above this amount | Disabled |
| **Require approval for high-cost changes** | Link to Guard [approval rules](/docs/guard/projects/approval-rules) | Disabled |

### Exclusions

| Setting | Description |
|---------|-------------|
| **Excluded paths** | File paths to skip during scanning (e.g. `tests/`, `examples/`) |
| **Excluded resources** | Resource types to exclude from cost analysis |
| **Excluded branches** | Branches where scanning is disabled |

---

## Check run status

frugally.app reports scan results as a GitHub check run:

| Status | Meaning |
|--------|---------|
| **Passed** | Cost impact is within configured thresholds |
| **Warning** | Cost impact exceeds the warning threshold |
| **Failed** | Cost impact exceeds the block threshold |
| **Skipped** | No IaC changes detected in the PR |

You can require the frugally.app check to pass before merging by adding it as a required status check in your branch protection rules.

:::tip
Start with warning thresholds only. Once your team is comfortable with the scan results, consider adding a block threshold for large cost increases to prevent surprises.
:::

---

## Scan accuracy

Cost estimates are based on AWS on-demand pricing for the region specified in the IaC files. Factors that can affect accuracy:

| Factor | Impact |
|--------|--------|
| **Dynamic values** | Variables resolved at apply-time (e.g. instance count from a variable) use default values |
| **Modules** | Nested modules are resolved and costed individually |
| **Conditional resources** | Resources behind `count = 0` or `for_each` with empty sets are excluded |
| **Data transfer** | Data transfer costs are not estimated (they depend on runtime usage) |
| **Free tier** | AWS Free Tier is not factored into estimates |
