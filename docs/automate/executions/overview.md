---
hide_table_of_contents: true
sidebar_position: 1
---

# Executions Overview

An **Execution** is a single run of actions against one or more [Targets](../targets/overview.md). Every time frugally.app stops, starts, or scales your AWS resources — whether triggered by a [Schedule](../schedules/overview.md), run manually, or performed as a dry run — it creates an Execution record.

[View Executions](https://dashboard.frugally.app/executions)

---

## Execution types

| Type | Trigger | Changes resources? |
|------|---------|-------------------|
| **Scheduled** | A Schedule reaches its configured time | Yes |
| **Manual** | A user clicks **Run Now** or uses a Slack command | Yes |
| **Dry run** | A user triggers a dry run from the UI or Slack | No — preview only |

---

## Execution summary

The Executions page shows a list of all Executions with:

| Column | Description |
|--------|-------------|
| **Status** | Current lifecycle state (Queued, Running, Succeeded, Failed, Partially Failed) |
| **Target** | The Target(s) acted upon |
| **Action** | The action taken (Stop, Start, Scale Up, etc.) |
| **Resources** | Count of resources acted on and their outcomes |
| **Confidence** | The confidence score for this Execution |
| **Triggered by** | Schedule name, user name, or "Dry run" |
| **Started at** | When the Execution began |
| **Duration** | How long the Execution took to complete |

`[SCREENSHOT: executions-list.png -- Executions list with status indicators and summary columns]`

---

## Execution detail

Click any Execution to see its full detail, including:

- Per-resource results (succeeded, failed, already in target state)
- Error messages for any failed resources
- Timestamps for each lifecycle stage
- Confidence score breakdown
- Slack notification status (if a channel was configured)

`[SCREENSHOT: execution-detail.png -- Execution detail page with per-resource results]`

---

## In this section

- **[Manual Executions](./manual-executions.md)** — How to run one-off actions from the UI and Slack
- **[Execution Lifecycle](./execution-lifecycle.md)** — The stages an Execution goes through from start to finish
- **[Confidence Scoring](./confidence-scoring.md)** — How confidence scores are calculated and what they mean
