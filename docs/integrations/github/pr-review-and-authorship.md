---
hide_table_of_contents: true
sidebar_position: 5
---

# PR Review and Authorship

frugally.app participates in pull request reviews by posting cost-impact comments on infrastructure changes. It also tracks infrastructure authorship — who changed what — for cost attribution and audit purposes.

---

## PR cost-impact reviews

When a PR modifies Infrastructure-as-Code files, frugally.app automatically posts a review comment summarising the cost impact. This is powered by [IaC Scanning](./iac-scanning.md) and gives reviewers immediate visibility into the financial implications of the change.

### What the review comment contains

| Section | Content |
|---------|---------|
| **Cost summary** | Total estimated monthly cost change (increase, decrease, or neutral) |
| **Resource breakdown** | Per-resource cost changes (new, modified, or removed) |
| **Current vs proposed** | Side-by-side comparison of current and proposed monthly costs |
| **Confidence** | How confident the estimate is based on available data |

`[SCREENSHOT: github-pr-review-comment.png -- Cost-impact review comment on a PR]`

### Review comment behaviour

| Setting | Options |
|---------|---------|
| **When to comment** | Every PR with IaC changes (default), only when cost increases, or only above a threshold |
| **Comment style** | Summary only, or summary with per-resource breakdown |
| **Update on push** | Update the existing comment when new commits are pushed (default) or post a new comment |

Configure at **Settings** > **GitHub** > **PR Reviews**.

---

## Inline annotations

In addition to the summary comment, frugally.app can post inline review annotations on specific lines of code:

| Annotation type | When it appears |
|----------------|-----------------|
| **Cost increase** | A line that adds or modifies a resource, increasing cost |
| **Cost decrease** | A line that removes or downsizes a resource, decreasing cost |
| **Cost warning** | A line that changes an expensive resource type or region |
| **Best practice** | A suggestion for a more cost-effective configuration |

Inline annotations appear in the GitHub PR "Files changed" tab, directly on the relevant lines.

:::tip
Inline annotations help reviewers understand the cost impact of specific changes without reading the full summary. They are especially useful in large PRs with many resource changes.
:::

---

## Authorship tracking

frugally.app tracks who creates, modifies, and deletes infrastructure resources through pull requests. This data feeds into Guard's [Cost Attribution](/docs/guard/cost-attribution) to help answer "who is responsible for this cost?"

### What is tracked

| Data point | Source |
|-----------|--------|
| **Author** | The PR author (mapped to a frugally.app user via GitHub username) |
| **Timestamp** | When the PR was merged |
| **Resources affected** | Which AWS resources were created, modified, or deleted |
| **Cost impact** | The estimated cost change from the PR |
| **Repository and file** | Where the change was made |

### How authorship data is used

| Feature | How it uses authorship |
|---------|----------------------|
| **Cost Attribution** | Attributes resource costs to the team or user who created them |
| **Guard Projects** | Links infrastructure changes back to the PR and author |
| **Resource History** | Shows the PR that introduced or modified a resource in [Resource History](/docs/guard/resource-history-and-locks) |
| **Executive Dashboard** | Aggregates cost-impact data by team and individual |

---

## Configuring review behaviour

Navigate to **Settings** > **GitHub** > **PR Reviews**:

| Setting | Description | Default |
|---------|-------------|---------|
| **Enable PR reviews** | Post cost-impact comments on PRs | Enabled |
| **Enable inline annotations** | Post inline code annotations | Enabled |
| **Comment threshold** | Minimum cost change to trigger a comment | $0 (always comment) |
| **Track authorship** | Record who changed which resources | Enabled |
| **Map GitHub users** | Map GitHub usernames to frugally.app users | Auto-mapped by email |

### User mapping

frugally.app maps GitHub users to frugally.app users by matching email addresses. If a GitHub user's email does not match any frugally.app user:

- Authorship is recorded with the GitHub username
- Cost attribution falls back to the repository or team level
- You can manually map users at **Settings** > **GitHub** > **User Mapping**

---

## Requiring cost review

To ensure every infrastructure PR is cost-reviewed before merging:

1. Add the frugally.app check as a **required status check** in your branch protection rules
2. Set a cost increase threshold that fails the check (in [IaC Scanning](./iac-scanning.md) settings)
3. Optionally, require a Guard [Project approval](/docs/guard/projects/approval-rules) for PRs above a certain cost threshold

This creates a workflow where infrastructure changes cannot be merged without cost visibility and, for high-cost changes, without formal approval.
