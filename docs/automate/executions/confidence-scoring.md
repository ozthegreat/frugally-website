---
hide_table_of_contents: true
sidebar_position: 4
---

# Confidence Scoring

Every Execution in frugally.app receives a **confidence score** — a value from 0 to 100 that indicates how reliably the Execution is expected to achieve its goal. Higher scores mean greater confidence that the right resources will be acted on successfully.

---

## What the confidence score represents

The confidence score is a composite metric that considers multiple factors about the Target, its resources, and historical performance. It answers the question: "How confident is frugally.app that this Execution will do what you expect?"

| Score range | Label | Meaning |
|-------------|-------|---------|
| **80–100** | High | Strong resource match, good historical success, well-configured Target |
| **50–79** | Medium | Likely to succeed but some factors could be improved |
| **0–49** | Low | Significant risk of unexpected results — review before scheduling |

---

## Scoring factors

The confidence score is calculated from the following factors:

### Resource match quality

How well the Target's filters match the intended resources.

| Signal | Positive impact | Negative impact |
|--------|-----------------|-----------------|
| **Tag coverage** | All matched resources have the expected tags | Resources matched by broad filters (e.g. no tags, region-only) |
| **Resource count stability** | Consistent count across recent scans | Count fluctuates significantly between scans |
| **Service type match** | Resources are the expected type and size | Mixed resource types that may behave differently |

### Historical success rate

How often previous Executions against this Target have succeeded.

| Signal | Positive impact | Negative impact |
|--------|-----------------|-----------------|
| **Past success rate** | 90%+ Executions succeeded fully | Frequent partial failures or full failures |
| **Consistency** | Results are predictable across runs | Inconsistent outcomes (some runs succeed, others fail) |
| **Recency** | Recent Executions succeeded | Last few Executions had issues |

### Configuration completeness

How well the Target and its associated resources are configured.

| Signal | Positive impact | Negative impact |
|--------|-----------------|-----------------|
| **IAM permissions** | All required permissions are in place | Missing or outdated IAM policies |
| **Connection health** | All linked Connections are healthy | One or more Connections have issues |
| **Tag specificity** | Filters use specific key:value pairs | Filters are overly broad (key-only or no tags) |

---

## Where confidence scores are displayed

| Location | Detail shown |
|----------|-------------|
| **Execution detail page** | Full score with per-factor breakdown |
| **Executions list** | Score badge (High / Medium / Low) |
| **Onboarding Wizard** | Per-recommendation score at the review step |
| **Slack notifications** | Score included in Execution result messages |
| **Dry run results** | Score for the simulated Execution |

`[SCREENSHOT: confidence-score-breakdown.png -- Execution detail showing confidence score with factor breakdown]`

---

## How to improve a low score

| Factor | Action |
|--------|--------|
| **Low tag coverage** | Add specific tags to your AWS resources and update the Target's tag filters |
| **Fluctuating resource count** | Investigate why resources are being created/destroyed — consider more specific filters |
| **Low historical success rate** | Review failed Executions for error patterns — often an IAM or connectivity issue |
| **Broad filters** | Narrow your Target's filters with additional tag key:value pairs |
| **Unhealthy Connection** | Check the Connection status and update the IAM role if needed |

:::tip
A confidence score below 50 does not prevent an Execution from running. It is an advisory signal to help you prioritise which Targets to review and improve. Running a [dry run](../targets/dry-runs.md) is a safe way to investigate before taking action.
:::

---

## Confidence scores and the Onboarding Wizard

The [Onboarding Wizard](../onboarding-wizard.md) uses confidence scores to rank its Target recommendations. The **Select All High Confidence** button selects only recommendations with a score of 80 or above, ensuring your initial setup starts with the most reliable Targets.
