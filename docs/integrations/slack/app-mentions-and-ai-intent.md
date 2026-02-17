---
hide_table_of_contents: true
sidebar_position: 3
---

# App Mentions & AI Intent

Mention `@frugally` in any channel where the app is installed and ask a question in natural language. frugally.app uses AI intent parsing to understand your question and respond with relevant data.

---

## How it works

1. Type `@frugally` followed by your question in a Slack channel
2. frugally.app parses the intent of your message
3. It queries the relevant data (costs, Executions, Schedules, resources, etc.)
4. A response is posted in the channel

No slash command syntax required — just ask in plain English.

---

## Supported queries

### Cost questions

| Example | What it returns |
|---------|-----------------|
| `@frugally how much did we spend this month?` | Total AWS spend for the current month |
| `@frugally what's our EC2 cost this week?` | EC2 spend for the current week |
| `@frugally are we over budget?` | Budget status for all active budgets |
| `@frugally what are our top 5 most expensive services?` | Top services ranked by spend |
| `@frugally compare this month to last month` | Month-over-month spend comparison |

### Execution questions

| Example | What it returns |
|---------|-----------------|
| `@frugally what happened last run?` | Summary of the most recent Execution |
| `@frugally did the dev environment stop last night?` | Status of the last Execution against dev Targets |
| `@frugally any failed executions today?` | List of failed Executions from today |
| `@frugally how much have we saved this week?` | Savings from completed Executions this week |

### Schedule questions

| Example | What it returns |
|---------|-----------------|
| `@frugally when does the dev environment stop?` | Next scheduled stop time for dev Targets |
| `@frugally what schedules are active?` | List of active Schedules with next run times |
| `@frugally is anything scheduled for tonight?` | Executions scheduled for the remainder of today |

### Resource questions

| Example | What it returns |
|---------|-----------------|
| `@frugally how many EC2 instances are running?` | Count of running EC2 instances across all Connections |
| `@frugally which resources are not in any target?` | Resources not covered by any Target |
| `@frugally what's the status of the staging RDS?` | Current state of RDS resources in staging Targets |

---

## Response format

Responses are posted as channel messages and include:

- **Direct answer** — The data requested in a readable format
- **Source** — Which data source was queried (Cost Explorer, Executions, Schedules, etc.)
- **Link** — A link to the full detail in the web dashboard for further exploration
- **Caveats** — Any limitations (e.g. "Cost data is up to 24 hours behind")

`[SCREENSHOT: slack-ai-mention-response.png -- AI-powered response to a cost question in Slack]`

---

## Tips for effective queries

- **Be specific about time** — "this month", "last week", "today" help frugally.app return the right data range
- **Name resources** — Use Target names or service names to narrow results
- **Ask follow-ups** — Mention `@frugally` again in a thread to ask a follow-up question with context from the previous response
- **Use channels appropriately** — Responses are visible to everyone in the channel. For sensitive cost data, use a private channel or DM

---

## What AI intent cannot do

AI intent is **read-only**. It can answer questions about your data but cannot:

- Trigger Executions (use `/frugally run` for that)
- Create or modify Targets, Schedules, or Budgets
- Change settings or configurations

If frugally.app cannot understand your query, it responds with a suggestion to rephrase or a link to the relevant dashboard page.

:::tip
If frugally.app misunderstands your query, try rephrasing with more explicit keywords. For example, instead of "what's happening?" try "what executions ran today?"
:::
