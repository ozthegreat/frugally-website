---
hide_table_of_contents: true
sidebar_position: 8
---

# Maturity Assessment

The FinOps Maturity Assessment is a self-assessment tool that measures how mature your team's FinOps practices are across key dimensions. It produces a score, identifies gaps, and provides a guided improvement path.

---

## What the assessment measures

The assessment evaluates four dimensions of FinOps maturity:

| Dimension | What it covers |
|-----------|---------------|
| **Visibility** | Can your team see where money is being spent? Do you have cost reporting, attribution, and dashboards in place? |
| **Optimisation** | Are you actively reducing waste? Do you use scheduling, rightsizing, and commitment strategies? |
| **Governance** | Do you have controls in place? Are budgets set, approvals required, and policies enforced? |
| **Culture** | Does your team think about cost as part of engineering decisions? Is FinOps embedded in your workflow? |

---

## Maturity levels

Each dimension is scored on a three-level maturity scale:

| Level | Label | Description |
|-------|-------|-------------|
| **1** | Crawl | Basic awareness. Some tools in place, but practices are ad-hoc and reactive. |
| **2** | Walk | Structured practices. Processes are defined, tooling is configured, and the team regularly reviews costs. |
| **3** | Run | Proactive and automated. FinOps is embedded in the development lifecycle, with automation, governance, and continuous improvement. |

---

## How to complete the assessment

1. Navigate to **Guard** > **Maturity Assessment**
2. Answer the questions for each dimension (10–15 questions total)
3. Review your scores and the recommended improvement path
4. Retake the assessment periodically (recommended: quarterly) to track progress

### Question format

Each question describes a practice and asks you to select the level that best describes your team's current state:

| Level | Response |
|-------|----------|
| **Crawl** | "We don't do this yet" or "We do this occasionally, ad-hoc" |
| **Walk** | "We have a defined process and do this regularly" |
| **Run** | "This is automated and embedded in our workflow" |

:::tip
Be honest in your self-assessment. The goal is to identify improvement areas, not to achieve a high score. An accurate assessment produces more useful recommendations.
:::

---

## Interpreting your results

After completing the assessment, you see:

| Output | Description |
|--------|-------------|
| **Overall maturity score** | Average across all dimensions (1.0–3.0) |
| **Per-dimension scores** | Individual scores for Visibility, Optimisation, Governance, and Culture |
| **Radar chart** | Visual representation of strengths and gaps |
| **Improvement path** | Specific, actionable recommendations to move from your current level to the next |

---

## The improvement path

For each dimension where you scored below "Run", the assessment provides:

- **Current state** — A summary of where you are
- **Next milestone** — The next maturity level and what it looks like
- **Recommended actions** — Specific steps to take, linked to relevant frugally.app features

### Example improvement recommendations

| Dimension | Current level | Recommended action |
|-----------|---------------|-------------------|
| Visibility | Crawl | Configure [Cost Attribution](./cost-attribution.md) and set up the [Cost Explorer](/docs/intelligence/cost-explorer) |
| Optimisation | Walk | Review [Recommendations](./recommendations.md) weekly and enable the [Onboarding Wizard](/docs/automate/onboarding-wizard) for new accounts |
| Governance | Crawl | Set up [Budgets](./budgets.md) for each team and create [approval rules](./projects/approval-rules.md) for high-cost changes |
| Culture | Walk | Share the [Executive Dashboard](./executive-dashboard.md) with leadership and include cost reviews in sprint retrospectives |

---

## Retaking the assessment

Your assessment history is saved, so you can track progress over time. The assessment detail page shows:

- **Score trends** — How each dimension has improved (or regressed) across assessments
- **Comparison** — Side-by-side view of your latest assessment vs the previous one
- **Milestone tracking** — Which recommended actions have been completed

:::note Enterprise feature
The full Maturity Assessment with improvement path and historical tracking is available on the Enterprise plan. Free and Pro plans can access a simplified version with overall scoring.
:::
