# Documentation Outline

> **Purpose:** Master reference for the frugally.app documentation project.
> This file defines every page that should exist, its current status, what needs writing, and the order in which work should happen.
>
> **Do not publish this file** — it is excluded from the Docusaurus sidebar and exists solely for planning.

---

## Status Markers

| Marker | Meaning |
|--------|---------|
| `[EXISTS]` | Page exists and content is current — no changes needed |
| `[EXISTS - UPDATE]` | Page exists but needs revisions to reflect new features or structure |
| `[EXISTS - MAJOR REWRITE]` | Page exists but content is substantially outdated; rewrite from scratch |
| `[NEW]` | Page does not exist yet — needs to be created |
| `[RELOCATE]` | Page exists at a different path and must be moved (add a redirect from the old URL) |

---

## Proposed Sidebar Structure

```
docs/
├── intro.md                                    pos:1   [EXISTS - UPDATE]
├── getting-started/                            pos:2   [EXISTS]
│   ├── start-here.md                           pos:1   [EXISTS - UPDATE]
│   ├── connecting-your-aws-accounts.md         pos:2   [EXISTS]
│   ├── creating-targets.md                     pos:3   [EXISTS]
│   ├── connecting-slack.md                     pos:4   [EXISTS - UPDATE]
│   ├── connecting-github.md                    pos:5   [NEW]
│   ├── running-an-execution.md                 pos:6   [EXISTS]
│   └── creating-a-schedule.md                  pos:7   [EXISTS]
├── dashboard/                                  pos:3   [NEW]
│   ├── overview.md                             pos:1
│   ├── onboarding-checklist.md                 pos:2
│   └── projected-vs-actual-savings.md          pos:3
├── automate/                                   pos:4   [NEW]
│   ├── overview.md                             pos:1
│   ├── targets/                                pos:2
│   │   ├── overview.md                         pos:1
│   │   ├── supported-services.md               pos:2
│   │   ├── tag-filtering.md                    pos:3
│   │   └── dry-runs.md                         pos:4
│   ├── schedules/                              pos:3
│   │   ├── overview.md                         pos:1
│   │   ├── cron-and-schedule-types.md          pos:2
│   │   └── estimated-savings.md                pos:3
│   ├── executions/                             pos:4
│   │   ├── overview.md                         pos:1
│   │   ├── manual-executions.md                pos:2
│   │   ├── execution-lifecycle.md              pos:3
│   │   └── confidence-scoring.md               pos:4
│   ├── onboarding-wizard.md                    pos:5
│   └── insights.md                             pos:6
├── intelligence/                               pos:5   [NEW]
│   ├── overview.md                             pos:1
│   ├── cost-explorer.md                        pos:2
│   ├── commitment-utilisation.md               pos:3
│   └── cost-anomaly-detection.md               pos:4
├── guard/                                      pos:6   [NEW]
│   ├── overview.md                             pos:1
│   ├── projects/                               pos:2
│   │   ├── overview.md                         pos:1
│   │   ├── approval-rules.md                   pos:2
│   │   └── workflow.md                         pos:3
│   ├── budgets.md                              pos:3
│   ├── cost-attribution.md                     pos:4
│   ├── violations-and-remediation.md           pos:5
│   ├── scans-and-findings.md                   pos:6
│   ├── cost-posture.md                         pos:7
│   ├── maturity-assessment.md                  pos:8
│   ├── recommendations.md                      pos:9
│   ├── executive-dashboard.md                  pos:10
│   └── resource-history-and-locks.md           pos:11
├── roles-and-access/                           pos:7   [NEW — absorbs groups.md & scopes.md]
│   ├── overview.md                             pos:1
│   ├── roles-and-permissions.md                pos:2
│   ├── groups.md                               pos:3   [RELOCATE from docs/groups.md]
│   ├── scopes.md                               pos:4   [RELOCATE from docs/scopes.md]
│   └── access-requests.md                      pos:5
├── integrations/                               pos:8   [NEW]
│   ├── slack/                                  pos:1
│   │   ├── overview.md                         pos:1
│   │   ├── slash-commands.md                   pos:2
│   │   ├── app-mentions-and-ai-intent.md       pos:3
│   │   ├── home-tab.md                         pos:4
│   │   └── reactions-and-workflows.md          pos:5
│   └── github/                                 pos:2
│       ├── overview.md                         pos:1
│       ├── installation.md                     pos:2
│       ├── iac-scanning.md                     pos:3
│       ├── drift-detection.md                  pos:4
│       └── pr-review-and-authorship.md         pos:5
├── notifications/                              pos:9   [NEW]
│   ├── overview.md                             pos:1
│   ├── notification-types.md                   pos:2
│   ├── team-policies.md                        pos:3
│   └── user-preferences.md                     pos:4
├── monitoring-and-alerts/                      pos:10  [NEW]
│   ├── overview.md                             pos:1
│   ├── signals-and-baselines.md                pos:2
│   ├── anomaly-detection.md                    pos:3
│   └── alert-management.md                     pos:4
├── team-management/                            pos:11  [NEW]
│   ├── overview.md                             pos:1
│   ├── members-and-invitations.md              pos:2
│   ├── security-settings.md                    pos:3
│   └── feature-flags.md                        pos:4
├── billing/                                    pos:12  [EXISTS - MAJOR REWRITE]
│   ├── overview.md                             pos:1   [NEW]
│   ├── plans-and-credits.md                    pos:2   [NEW]
│   ├── credit-usage-and-enforcement.md         pos:3   [NEW]
│   ├── payment-methods-and-invoices.md         pos:4   [NEW — consolidates 3 existing pages]
│   └── auto-top-up.md                          pos:5   [NEW]
├── sso/                                        pos:13  [EXISTS — renumber only]
│   ├── overview.md                             pos:1
│   ├── setting-up-saml-sso.md                  pos:2
│   ├── scim-provisioning.md                    pos:3
│   └── troubleshooting.md                      pos:4
├── advanced/                                   pos:14  [EXISTS — expand]
│   ├── iam-role-permissions.md                 pos:1   [EXISTS - UPDATE]
│   ├── resource-tag-filtering.md               pos:2   [EXISTS]
│   ├── schedule-format.md                      pos:3   [EXISTS — rename from whats-the-format-for-setting-executions-on-a-schedule.md]
│   └── webhooks.md                             pos:4   [NEW]
├── api-reference/                              pos:15  [NEW]
│   ├── overview.md                             pos:1
│   ├── guard-api-v1.md                         pos:2
│   ├── scim-api.md                             pos:3
│   └── webhook-payloads.md                     pos:4
├── troubleshooting/                            pos:16  [NEW]
│   ├── general.md                              pos:1
│   ├── aws-connections.md                      pos:2
│   ├── executions-and-schedules.md             pos:3
│   ├── guard.md                                pos:4
│   ├── github-integration.md                   pos:5
│   ├── slack-integration.md                    pos:6
│   └── billing-and-credits.md                  pos:7
├── faqs/                                       pos:17  [EXISTS - MAJOR EXPANSION]
│   ├── what-aws-resources-do-you-support.md         [EXISTS - REWRITE]
│   ├── how-to-access-the-dashboard.md               [EXISTS - REWRITE]
│   ├── view-current-historical-usage-bills-savings.md [EXISTS - REWRITE]
│   ├── how-to-cancel-remove-frugally-app.md         [EXISTS - UPDATE]
│   ├── guard-and-budgets.md                         [NEW]
│   ├── github-integration.md                        [NEW]
│   ├── credits-and-billing.md                       [NEW]
│   ├── roles-and-access.md                          [NEW]
│   └── data-and-security.md                         [NEW]
└── glossary.md                                 pos:18  [NEW]
```

---

## Existing Pages Not in New Sidebar

The following pages exist today but are **not carried forward** in the new structure. Each must be explicitly handled during the migration.

### `connections/` section (6 pages)

| Existing file | Disposition |
|---------------|-------------|
| `connections/overview.md` | Merge relevant content into `getting-started/connecting-your-aws-accounts.md` and `automate/overview.md` |
| `connections/organisation-setup.md` | Merge into `getting-started/connecting-your-aws-accounts.md` |
| `connections/standalone-setup.md` | Merge into `getting-started/connecting-your-aws-accounts.md` |
| `connections/features.md` | Distribute across `automate/overview.md` and relevant sub-sections |
| `connections/account-health.md` | Merge into `troubleshooting/aws-connections.md` |
| `connections/iam-policies.md` | Merge into `advanced/iam-role-permissions.md` |

**TODO:** Add URL redirects from every `connections/*` path to its new destination.

### Billing pages being consolidated

| Existing file | Disposition |
|---------------|-------------|
| `billing/what-are-the-payment-terms.md` | Consolidate into `billing/payment-methods-and-invoices.md` |
| `billing/when-are-invocies-raised.md` | Consolidate into `billing/payment-methods-and-invoices.md` (note: filename has typo "invocies") |
| `billing/how-to-pay-an-invoice.md` | Consolidate into `billing/payment-methods-and-invoices.md` |

**TODO:** Add URL redirects from each old billing page to `billing/payment-methods-and-invoices`.

### Advanced page being renamed

| Existing file | New file |
|---------------|----------|
| `advanced/whats-the-format-for-setting-executions-on-a-schedule.md` | `advanced/schedule-format.md` |

**TODO:** Add URL redirect from the old slug to the new one.

---

## Page Count Summary

| Section | Existing | New | Total |
|---------|----------|-----|-------|
| Root (intro + glossary) | 1 | 1 | 2 |
| Getting Started | 6 | 1 | 7 |
| Dashboard | 0 | 3 | 3 |
| Automate | 0 | 13 | 13 |
| Intelligence | 0 | 4 | 4 |
| Guard | 0 | 11 | 11 |
| Roles & Access | 2 (relocated) | 3 | 5 |
| Integrations (Slack + GitHub) | 0 | 10 | 10 |
| Notifications | 0 | 4 | 4 |
| Monitoring & Alerts | 0 | 4 | 4 |
| Team Management | 0 | 4 | 4 |
| Billing | 3 &rarr; 1 (consolidated) | 4 | 5 |
| SSO & Provisioning | 4 | 0 | 4 |
| Advanced | 3 | 1 | 4 |
| API Reference | 0 | 4 | 4 |
| Troubleshooting | 0 | 7 | 7 |
| FAQs | 4 | 5 | 9 |
| **Total** | **~20** | **~73** | **~93** |

---

## Per-Section Descriptions & TODOs

### 1. `intro.md` — pos:1 `[EXISTS - UPDATE]`

**Current state:** Introduces frugally.app as a Slack-based automation tool. Covers Automate only.

**TODOs:**
- [ ] Rewrite to position frugally.app as a full FinOps platform (Automate, Intelligence, Guard)
- [ ] Add a "What you can do with frugally.app" summary listing all three product pillars
- [ ] Add a quick-links section pointing to each major documentation area
- [ ] Update any screenshots that show the old UI or only Automate features
- [ ] Ensure the slug remains `/` so existing links are not broken

---

### 2. `getting-started/` — pos:2 `[EXISTS]`

**Category description:** Set up frugally.app to automate your cloud costs: connect AWS accounts, create Targets, configure Slack, and start scheduling.

#### `start-here.md` — pos:1 `[EXISTS - UPDATE]`
- [ ] Update the step list to include GitHub connection as an optional step
- [ ] Mention the onboarding wizard as an alternative path
- [ ] Add links to the new Dashboard section
- [ ] Review screenshots for currency

#### `connecting-your-aws-accounts.md` — pos:2 `[EXISTS]`
- [ ] No changes required — content is current
- [ ] Absorb relevant detail from `connections/organisation-setup.md` and `connections/standalone-setup.md` if those pages contain getting-started-level instructions not already covered here

#### `creating-targets.md` — pos:3 `[EXISTS]`
- [ ] No changes required — content is current

#### `connecting-slack.md` — pos:4 `[EXISTS - UPDATE]`
- [ ] Update to reflect new Slack features (AI intent, home tab)
- [ ] Add a forward-link to the deep-dive `integrations/slack/` section
- [ ] Review screenshots for currency

#### `connecting-github.md` — pos:5 `[NEW]`
- [ ] Quick-start guide for connecting a GitHub organisation
- [ ] Cover: installing the GitHub App, selecting repositories, verifying the connection
- [ ] Forward-link to `integrations/github/` for detailed usage (IaC scanning, drift detection, PR review)
- [ ] `[SCREENSHOT: github-app-install.png -- GitHub App installation prompt]`
- [ ] `[SCREENSHOT: github-connection-success.png -- Successful GitHub connection confirmation]`

#### `running-an-execution.md` — pos:6 `[EXISTS]`
- [ ] No changes required

#### `creating-a-schedule.md` — pos:7 `[EXISTS]`
- [ ] No changes required

**Category `_category_.json` update:**
- Position stays at `2` (no change)
- Update description to mention GitHub alongside Slack

---

### 3. `dashboard/` — pos:3 `[NEW]`

**Category description:** Your team's home screen — real-time savings overview, onboarding progress, and projected-vs-actual cost comparisons.

#### `overview.md` — pos:1 `[NEW]`
- [ ] Explain the purpose of the dashboard as the team landing page
- [ ] Describe the key widgets: savings summary, active schedules, recent executions, team activity
- [ ] `[SCREENSHOT: dashboard-overview.png -- Full dashboard view]`

#### `onboarding-checklist.md` — pos:2 `[NEW]`
- [ ] Document the onboarding checklist widget and its completion criteria
- [ ] List each checklist item and what triggers completion
- [ ] Explain how to dismiss or reset the checklist

#### `projected-vs-actual-savings.md` — pos:3 `[NEW]`
- [ ] Explain how projected savings are calculated (from schedule + target configuration)
- [ ] Explain how actual savings are measured (from execution results)
- [ ] Document the comparison chart and any filters (date range, connection, service)
- [ ] `[SCREENSHOT: projected-vs-actual.png -- Projected vs actual savings chart]`

---

### 4. `automate/` — pos:4 `[NEW]`

**Category description:** The automation engine — define what to stop/start (Targets), when to do it (Schedules), and track every action (Executions).

#### `overview.md` — pos:1 `[NEW]`
- [ ] High-level explanation of the Automate pillar
- [ ] Explain the Targets &rarr; Schedules &rarr; Executions workflow
- [ ] Diagram or summary table of how the three concepts relate
- [ ] Link to each sub-section

#### `targets/overview.md` — pos:2.1 `[NEW]`
- [ ] What a Target is (a selection of AWS resources to act upon)
- [ ] How Targets relate to Connections (scoped to one or more AWS accounts)
- [ ] Summary of supported services

#### `targets/supported-services.md` — pos:2.2 `[NEW]`
- [ ] Table of all 6 supported AWS services with per-service actions:
  - EC2 (stop / start / terminate)
  - RDS (stop / start)
  - ECS (scale to 0 / scale to N)
  - Auto Scaling Groups (adjust desired capacity)
  - EKS (node group scaling)
  - Redshift (pause / resume)
- [ ] Per-service notes, caveats, and minimum IAM permissions
- [ ] Link back to `advanced/iam-role-permissions.md` for full policy reference

#### `targets/tag-filtering.md` — pos:2.3 `[NEW]`
- [ ] How tag-based resource filtering works
- [ ] Supported operators (equals, contains, starts-with, regex)
- [ ] Combining multiple tag filters (AND/OR logic)
- [ ] Link to `advanced/resource-tag-filtering.md` for the detailed reference
- [ ] Examples: "stop all EC2 instances tagged `env=dev`"

#### `targets/dry-runs.md` — pos:2.4 `[NEW]`
- [ ] What a dry run is and when to use it
- [ ] How to trigger a dry run (UI and Slack)
- [ ] How to read dry-run results
- [ ] `[SCREENSHOT: dry-run-results.png -- Dry run results showing matched resources]`

#### `schedules/overview.md` — pos:3.1 `[NEW]`
- [ ] What a Schedule is (a time-based trigger linked to one or more Targets)
- [ ] Relationship between Schedules and Executions
- [ ] Active vs paused states

#### `schedules/cron-and-schedule-types.md` — pos:3.2 `[NEW]`
- [ ] CRON expression syntax (5-field and 6-field)
- [ ] Named schedules (weekday only, weekend only, nightly, etc.)
- [ ] Timezone handling
- [ ] Link to `advanced/schedule-format.md` for the full reference
- [ ] Examples of common patterns

#### `schedules/estimated-savings.md` — pos:3.3 `[NEW]`
- [ ] How estimated savings are calculated before a schedule runs
- [ ] Factors: resource hourly cost, schedule duration, number of resources
- [ ] Where the estimate is shown in the UI
- [ ] How estimates compare to actual savings post-execution

#### `executions/overview.md` — pos:4.1 `[NEW]`
- [ ] What an Execution is (a single run of a Target's actions)
- [ ] Execution types: scheduled, manual, dry-run
- [ ] High-level lifecycle summary (link to detail page)

#### `executions/manual-executions.md` — pos:4.2 `[NEW]`
- [ ] How to trigger a manual execution from the UI
- [ ] How to trigger via Slack (`/frugally run`)
- [ ] Use cases: ad-hoc shutdowns, testing before scheduling

#### `executions/execution-lifecycle.md` — pos:4.3 `[NEW]`
- [ ] Full lifecycle: Queued &rarr; Running &rarr; Succeeded / Failed / Partially Failed
- [ ] What happens at each stage
- [ ] Retry behaviour on failure
- [ ] `[SCREENSHOT: execution-detail.png -- Execution detail page showing lifecycle steps]`

#### `executions/confidence-scoring.md` — pos:4.4 `[NEW]`
- [ ] What the confidence score (0-100) represents
- [ ] Breakdown of scoring factors (resource match quality, historical success, tag coverage)
- [ ] How to interpret and improve a low score
- [ ] Where confidence is displayed in the UI and Slack notifications

#### `onboarding-wizard.md` — pos:5 `[NEW]`
- [ ] Step-by-step walkthrough of the onboarding wizard
- [ ] Each wizard step and what it configures
- [ ] How the wizard relates to manual setup in Getting Started

#### `insights.md` — pos:6 `[NEW]`
- [ ] What the Automate Insights dashboard shows
- [ ] Key metrics: savings over time, execution success rate, resource coverage
- [ ] Filters and date-range controls
- [ ] `[SCREENSHOT: automate-insights.png -- Automate insights dashboard]`

---

### 5. `intelligence/` — pos:5 `[NEW]`

**Category description:** AWS billing analysis — explore costs, track commitment utilisation, and detect spending anomalies.

#### `overview.md` — pos:1 `[NEW]`
- [ ] High-level explanation of the Intelligence pillar
- [ ] What data sources are used (AWS Cost and Usage Reports, Cost Explorer API)
- [ ] Caching behaviour: 30-minute TTL on cost data
- [ ] Daily and monthly API call caps

#### `cost-explorer.md` — pos:2 `[NEW]`
- [ ] How to use the cost explorer view
- [ ] Grouping dimensions: service, account, region, tag
- [ ] Date range selection and granularity (daily, monthly)
- [ ] Export / download options
- [ ] `[SCREENSHOT: cost-explorer.png -- Cost explorer with grouping and filters]`

#### `commitment-utilisation.md` — pos:3 `[NEW]`
- [ ] What commitment utilisation tracks (Reserved Instances, Savings Plans)
- [ ] Utilisation percentage calculation
- [ ] Coverage vs utilisation distinction
- [ ] Recommendations for improving utilisation

#### `cost-anomaly-detection.md` — pos:4 `[NEW]`
- [ ] How anomaly detection works (7-day rolling baseline)
- [ ] Threshold configuration
- [ ] Alert delivery (in-app, Slack, email)
- [ ] How to investigate and dismiss anomalies
- [ ] Link to `monitoring-and-alerts/anomaly-detection.md` for the alerting configuration

---

### 6. `guard/` — pos:6 `[NEW]`

**Category description:** FinOps governance — projects, budgets, cost attribution, compliance scanning, maturity assessment, and executive reporting.

#### `overview.md` — pos:1 `[NEW]`
- [ ] High-level explanation of the Guard pillar
- [ ] How Guard relates to Automate and Intelligence
- [ ] Key concepts: Projects, Budgets, Cost Attribution, Scans, Posture

#### `projects/overview.md` — pos:2.1 `[NEW]`
- [ ] What a Guard Project is
- [ ] How Projects group related infrastructure for governance
- [ ] Project settings and metadata

#### `projects/approval-rules.md` — pos:2.2 `[NEW]`
- [ ] How approval rules work within a project
- [ ] Rule types and conditions
- [ ] Multi-level approval chains
- [ ] Link to `roles-and-access/roles-and-permissions.md` for who can approve

#### `projects/workflow.md` — pos:2.3 `[NEW]`
- [ ] Full versioned workflow: Draft &rarr; Submitted &rarr; Approved / Rejected &rarr; Executed
- [ ] What triggers each state transition
- [ ] Notifications at each stage
- [ ] Audit trail and version history
- [ ] `[SCREENSHOT: guard-project-workflow.png -- Project approval workflow diagram]`

#### `budgets.md` — pos:3 `[NEW]`
- [ ] How to create and manage budgets
- [ ] Budget types (monthly, quarterly, annual)
- [ ] Consumption tracking and threshold alerts (50%, 80%, 100%)
- [ ] Budget vs actual spend visualisation
- [ ] `[SCREENSHOT: budget-tracking.png -- Budget consumption tracking chart]`

#### `cost-attribution.md` — pos:4 `[NEW]`
- [ ] What cost attribution is and why it matters
- [ ] The 6 cost attribution adapters and how each works
- [ ] Configuring attribution rules
- [ ] Viewing attributed costs per team / project / department

#### `violations-and-remediation.md` — pos:5 `[NEW]`
- [ ] What constitutes a violation (budget breach, policy non-compliance, etc.)
- [ ] Violation severity levels
- [ ] Remediation options (manual, automated)
- [ ] Tracking violation status to resolution

#### `scans-and-findings.md` — pos:6 `[NEW]`
- [ ] What Guard scans are (periodic compliance checks)
- [ ] Types of findings
- [ ] Scan frequency and triggers
- [ ] Viewing and exporting scan results
- [ ] `[SCREENSHOT: guard-scan-results.png -- Scan findings list]`

#### `cost-posture.md` — pos:7 `[NEW]`
- [ ] What a cost posture snapshot is
- [ ] Metrics tracked: waste, coverage, optimisation opportunities
- [ ] How posture score is calculated
- [ ] Historical posture trends

#### `maturity-assessment.md` — pos:8 `[NEW]`
- [ ] What the FinOps maturity assessment measures
- [ ] Assessment dimensions (visibility, optimisation, governance, culture)
- [ ] How to complete the assessment
- [ ] Interpreting your maturity score and improvement path

#### `recommendations.md` — pos:9 `[NEW]`
- [ ] How AI-powered recommendations are generated
- [ ] Recommendation categories (rightsizing, scheduling, commitment, waste)
- [ ] Accepting, dismissing, and snoozing recommendations
- [ ] Estimated impact of each recommendation

#### `executive-dashboard.md` — pos:10 `[NEW]`
- [ ] Purpose: high-level view for leadership and finance stakeholders
- [ ] Key widgets: total spend, savings, budget health, posture score
- [ ] Sharing and export options
- [ ] `[SCREENSHOT: executive-dashboard.png -- Executive dashboard overview]`

#### `resource-history-and-locks.md` — pos:11 `[NEW]`
- [ ] Viewing resource-level change history
- [ ] What resource locks are and when to use them
- [ ] Locking a resource to prevent automation actions
- [ ] Audit trail for lock/unlock events

---

### 7. `roles-and-access/` — pos:7 `[NEW — absorbs groups.md & scopes.md]`

**Category description:** User roles, permission levels, groups, scopes, and access request workflows.

#### `overview.md` — pos:1 `[NEW]`
- [ ] Summary of the RBAC model
- [ ] How roles, groups, and scopes interact
- [ ] Quick reference table: role &rarr; what it can do

#### `roles-and-permissions.md` — pos:2 `[NEW]`
- [ ] Full list of roles (Owner, Admin, Member, Viewer, etc.)
- [ ] Per-role permission matrix (CRUD on each resource type)
- [ ] How to assign and change roles

#### `groups.md` — pos:3 `[RELOCATE from docs/groups.md]`
- [ ] Move from `docs/groups.md` to `docs/roles-and-access/groups.md`
- [ ] Add redirect from old URL
- [ ] Review and update content for accuracy
- [ ] Add context connecting groups to the broader RBAC model

#### `scopes.md` — pos:4 `[RELOCATE from docs/scopes.md]`
- [ ] Move from `docs/scopes.md` to `docs/roles-and-access/scopes.md`
- [ ] Add redirect from old URL
- [ ] Review and update content for accuracy
- [ ] Add context connecting scopes to the broader RBAC model

#### `access-requests.md` — pos:5 `[NEW]`
- [ ] How users request elevated access
- [ ] Approval workflow for access requests
- [ ] Time-bound access grants
- [ ] Audit trail for access changes

---

### 8. `integrations/` — pos:8 `[NEW]`

**Category description:** Deep-dive guides for Slack and GitHub integrations beyond initial setup.

#### Slack sub-section — pos:1

##### `slack/overview.md` — pos:1 `[NEW]`
- [ ] Capabilities summary: commands, mentions, home tab, reactions, workflows
- [ ] Required Slack scopes and permissions
- [ ] Link back to `getting-started/connecting-slack.md` for initial setup

##### `slack/slash-commands.md` — pos:2 `[NEW]`
- [ ] Full list of slash commands (`/frugally run`, `/frugally status`, etc.)
- [ ] Syntax, parameters, and examples for each command
- [ ] Error handling and common mistakes

##### `slack/app-mentions-and-ai-intent.md` — pos:3 `[NEW]`
- [ ] How @frugally mentions trigger AI-intent parsing
- [ ] Supported natural-language queries
- [ ] Examples of what you can ask
- [ ] How responses are formatted in Slack

##### `slack/home-tab.md` — pos:4 `[NEW]`
- [ ] What the Slack Home Tab shows
- [ ] Per-user personalisation
- [ ] Actions available from the Home Tab
- [ ] `[SCREENSHOT: slack-home-tab.png -- Slack Home Tab view]`

##### `slack/reactions-and-workflows.md` — pos:5 `[NEW]`
- [ ] How emoji reactions trigger actions
- [ ] Configuring Slack Workflow Builder integrations
- [ ] Example workflows: approval via reaction, escalation via thread

#### GitHub sub-section — pos:2

##### `github/overview.md` — pos:1 `[NEW]`
- [ ] Capabilities summary: IaC scanning, drift detection, PR review, authorship tracking
- [ ] Required GitHub App permissions
- [ ] Link back to `getting-started/connecting-github.md` for initial setup

##### `github/installation.md` — pos:2 `[NEW]`
- [ ] Detailed installation guide for the GitHub App
- [ ] Organisation-level vs repository-level installation
- [ ] Managing repository access after installation
- [ ] Troubleshooting installation issues

##### `github/iac-scanning.md` — pos:3 `[NEW]`
- [ ] Supported IaC frameworks (5): Terraform, CloudFormation, CDK, Pulumi, OpenTofu
- [ ] How scanning is triggered (PR creation, push to branch)
- [ ] Configuring scan rules and thresholds
- [ ] Reading scan results in PR comments
- [ ] `[SCREENSHOT: github-iac-scan.png -- IaC scan results in a PR comment]`

##### `github/drift-detection.md` — pos:4 `[NEW]`
- [ ] What drift detection is (IaC state vs live AWS state)
- [ ] How drift is detected and reported
- [ ] Configuring drift detection frequency
- [ ] Remediation options

##### `github/pr-review-and-authorship.md` — pos:5 `[NEW]`
- [ ] How frugally.app participates in PR reviews
- [ ] Cost-impact comments on infrastructure PRs
- [ ] Authorship tracking: who changed what infrastructure
- [ ] Configuring review behaviour

---

### 9. `notifications/` — pos:9 `[NEW]`

**Category description:** Configure how your team receives alerts — notification types, team-level policies, and individual preferences.

#### `overview.md` — pos:1 `[NEW]`
- [ ] Summary of notification channels (in-app, email, Slack)
- [ ] How notifications relate to integrations (Slack delivers notifications but is also an integration)

#### `notification-types.md` — pos:2 `[NEW]`
- [ ] Full catalogue of notification events:
  - Execution started / completed / failed
  - Schedule activated / paused
  - Budget threshold breached
  - Guard violation detected
  - Anomaly detected
  - Access request submitted / approved / denied
- [ ] Per-event: default channel, default enabled/disabled

#### `team-policies.md` — pos:3 `[NEW]`
- [ ] How admins set team-wide notification policies
- [ ] Mandatory vs optional notifications
- [ ] Channel routing rules (e.g., all Guard violations go to #finops-alerts)

#### `user-preferences.md` — pos:4 `[NEW]`
- [ ] How individual users customise their notification settings
- [ ] Muting specific notification types
- [ ] Digest vs real-time delivery
- [ ] Managing notification preferences in the UI

---

### 10. `monitoring-and-alerts/` — pos:10 `[NEW]`

**Category description:** Signals, baselines, anomaly detection, and alert management for proactive cloud monitoring.

#### `overview.md` — pos:1 `[NEW]`
- [ ] High-level explanation of the monitoring system
- [ ] How monitoring differs from notifications (monitoring = detection; notifications = delivery)

#### `signals-and-baselines.md` — pos:2 `[NEW]`
- [ ] What signals are tracked (cost, usage, resource count)
- [ ] How baselines are established (7-day rolling window)
- [ ] Baseline sensitivity configuration

#### `anomaly-detection.md` — pos:3 `[NEW]`
- [ ] Detection algorithm overview
- [ ] Threshold configuration (percentage, absolute, standard deviations)
- [ ] Suppression rules to reduce noise
- [ ] Cross-reference with `intelligence/cost-anomaly-detection.md`

#### `alert-management.md` — pos:4 `[NEW]`
- [ ] Creating and managing alert rules
- [ ] Alert severity levels (info, warning, critical)
- [ ] Alert lifecycle: triggered &rarr; acknowledged &rarr; resolved
- [ ] Routing alerts to specific channels or users

---

### 11. `team-management/` — pos:11 `[NEW]`

**Category description:** Manage team members, invitations, security settings, and feature flags.

#### `overview.md` — pos:1 `[NEW]`
- [ ] Summary of team management capabilities
- [ ] Link to `roles-and-access/` for permission details

#### `members-and-invitations.md` — pos:2 `[NEW]`
- [ ] How to invite new team members
- [ ] Invitation states (pending, accepted, expired)
- [ ] Removing team members
- [ ] Bulk invite via CSV or SCIM

#### `security-settings.md` — pos:3 `[NEW]`
- [ ] Session timeout configuration
- [ ] Enforced MFA
- [ ] IP allowlisting
- [ ] SSO enforcement (link to `sso/` section)

#### `feature-flags.md` — pos:4 `[NEW]`
- [ ] What feature flags are available to teams
- [ ] How to enable/disable feature flags
- [ ] Impact of each flag on team behaviour

---

### 12. `billing/` — pos:12 `[EXISTS - MAJOR REWRITE]`

**Category description:** Plans, credits, usage, invoices, and payment management.

**Current state:** Three thin FAQ-style pages (payment terms, when invoices are raised, how to pay). The app has moved to a credit-based billing model with multiple plans.

**Migration:** Consolidate 3 existing pages into `payment-methods-and-invoices.md`. Create 4 new pages. Add redirects from old URLs.

#### `overview.md` — pos:1 `[NEW]`
- [ ] Summary of the billing model (credit-based)
- [ ] Available plans and what each includes
- [ ] Where to manage billing in the UI

#### `plans-and-credits.md` — pos:2 `[NEW]`
- [ ] Detailed plan comparison table (Free, Pro, Enterprise)
- [ ] What credits are and how they work
- [ ] Credit allocation per plan
- [ ] Upgrading and downgrading plans

#### `credit-usage-and-enforcement.md` — pos:3 `[NEW]`
- [ ] How credits are consumed (per execution, per scan, per API call, etc.)
- [ ] Viewing credit usage history
- [ ] What happens when credits run out (enforcement behaviour)
- [ ] Grace periods and warnings

#### `payment-methods-and-invoices.md` — pos:4 `[NEW — consolidates 3 existing pages]`
- [ ] Absorb content from:
  - `billing/what-are-the-payment-terms.md`
  - `billing/when-are-invocies-raised.md`
  - `billing/how-to-pay-an-invoice.md`
- [ ] Add redirects from old URLs
- [ ] Supported payment methods (card, invoice, wire)
- [ ] Invoice frequency and format
- [ ] Updating payment details
- [ ] Accessing invoice history

#### `auto-top-up.md` — pos:5 `[NEW]`
- [ ] What auto top-up is and how to enable it
- [ ] Configuring top-up threshold and amount
- [ ] Notification when auto top-up triggers
- [ ] Disabling auto top-up

**Category `_category_.json` update:**
- Change position from `7` to `12`
- Update description to reflect credit-based model

---

### 13. `sso/` — pos:13 `[EXISTS — renumber only]`

**Category description:** Configure SAML 2.0 SSO and SCIM provisioning for your Enterprise team.

**Current state:** Content is current. Only change needed is the `_category_.json` position.

**Category `_category_.json` update:**
- Change position from `5` to `13`

---

### 14. `advanced/` — pos:14 `[EXISTS — expand]`

**Category description:** Advanced configuration — IAM policies, tag filtering, schedule format reference, and webhooks.

#### `iam-role-permissions.md` — pos:1 `[EXISTS - UPDATE]`
- [ ] Merge relevant detail from `connections/iam-policies.md`
- [ ] Ensure per-service permissions are listed
- [ ] Add any new permissions required by Guard, Intelligence, or GitHub integration

#### `resource-tag-filtering.md` — pos:2 `[EXISTS]`
- [ ] No changes required — add `sidebar_position: 2` to frontmatter (currently missing)

#### `schedule-format.md` — pos:3 `[EXISTS — rename]`
- [ ] Rename from `whats-the-format-for-setting-executions-on-a-schedule.md` to `schedule-format.md`
- [ ] Update frontmatter: title to "Schedule Format Reference", add `sidebar_position: 3`
- [ ] Add redirect from old URL
- [ ] Review content for completeness

#### `webhooks.md` — pos:4 `[NEW]`
- [ ] What webhooks are and when to use them
- [ ] Configuring webhook endpoints in the UI
- [ ] Authentication (HMAC signing)
- [ ] Retry policy on delivery failure
- [ ] Link to `api-reference/webhook-payloads.md` for payload schemas

**Category `_category_.json` update:**
- Change position from `6` to `14`
- Update description to be more comprehensive

---

### 15. `api-reference/` — pos:15 `[NEW]`

**Category description:** REST API reference for programmatic access to frugally.app.

#### `overview.md` — pos:1 `[NEW]`
- [ ] Authentication (API keys, OAuth tokens)
- [ ] Base URL and versioning scheme
- [ ] Rate limiting
- [ ] Common request/response patterns
- [ ] Error codes reference

#### `guard-api-v1.md` — pos:2 `[NEW]`
- [ ] Full endpoint reference for the Guard API (v1)
- [ ] Request/response examples for each endpoint
- [ ] Pagination and filtering

#### `scim-api.md` — pos:3 `[NEW]`
- [ ] SCIM 2.0 endpoint reference
- [ ] Supported SCIM operations (Users, Groups)
- [ ] Cross-reference with `sso/scim-provisioning.md`

#### `webhook-payloads.md` — pos:4 `[NEW]`
- [ ] Full payload schema for each webhook event type
- [ ] Example payloads
- [ ] Cross-reference with `advanced/webhooks.md` for configuration

---

### 16. `troubleshooting/` — pos:16 `[NEW]`

**Category description:** Solutions for common issues across AWS connections, executions, Guard, integrations, and billing.

#### `general.md` — pos:1 `[NEW]`
- [ ] General troubleshooting methodology
- [ ] Checking the status page
- [ ] Collecting information for support requests
- [ ] Contacting support

#### `aws-connections.md` — pos:2 `[NEW]`
- [ ] Common connection issues (IAM policy errors, cross-account trust, region mismatches)
- [ ] Absorb relevant content from `connections/account-health.md`
- [ ] CloudFormation stack troubleshooting
- [ ] Connection health indicators and what they mean

#### `executions-and-schedules.md` — pos:3 `[NEW]`
- [ ] Execution failures: common causes and fixes
- [ ] Schedule not triggering: timezone issues, paused state, missing targets
- [ ] Partial failures and how to resolve them

#### `guard.md` — pos:4 `[NEW]`
- [ ] Guard scan failures
- [ ] Budget not tracking correctly
- [ ] Cost attribution discrepancies
- [ ] Project workflow stuck in a state

#### `github-integration.md` — pos:5 `[NEW]`
- [ ] GitHub App installation issues
- [ ] IaC scan not triggering on PRs
- [ ] Drift detection not reporting
- [ ] Permission and access issues

#### `slack-integration.md` — pos:6 `[NEW]`
- [ ] Slash commands not responding
- [ ] AI-intent not understanding queries
- [ ] Home Tab not loading
- [ ] Reinstalling the Slack App

#### `billing-and-credits.md` — pos:7 `[NEW]`
- [ ] Credit balance showing incorrectly
- [ ] Invoice not received
- [ ] Payment method issues
- [ ] Plan change not reflected

---

### 17. `faqs/` — pos:17 `[EXISTS - MAJOR EXPANSION]`

**Category description:** Commonly asked questions — quick answers with links to detailed documentation.

#### Existing pages (update):

##### `what-aws-resources-do-you-support.md` `[EXISTS - REWRITE]`
- [ ] Rewrite to reference the full supported services list from `automate/targets/supported-services.md`
- [ ] Keep as a quick-answer page that links to the detailed reference

##### `how-to-access-the-dashboard.md` `[EXISTS - REWRITE]`
- [ ] Rewrite to cover the new dashboard at `dashboard/overview.md`
- [ ] Update login instructions if changed

##### `view-current-historical-usage-bills-savings.md` `[EXISTS - REWRITE]`
- [ ] Rewrite to reference Intelligence (`intelligence/cost-explorer.md`) and Automate insights (`automate/insights.md`)

##### `how-to-cancel-remove-frugally-app.md` `[EXISTS - UPDATE]`
- [ ] Review for accuracy
- [ ] Add information about data retention after cancellation
- [ ] Mention credit refund policy

#### New FAQ pages:

##### `guard-and-budgets.md` `[NEW]`
- [ ] Common questions about Guard and budgets

##### `github-integration.md` `[NEW]`
- [ ] Common questions about the GitHub integration

##### `credits-and-billing.md` `[NEW]`
- [ ] Common questions about the credit-based billing model

##### `roles-and-access.md` `[NEW]`
- [ ] Common questions about roles, groups, scopes, and access

##### `data-and-security.md` `[NEW]`
- [ ] Common questions about data handling, security, compliance

**Category `_category_.json` update:**
- Change position from `8` to `17`

---

### 18. `glossary.md` — pos:18 `[NEW]`

- [ ] Define key terms used throughout the documentation:
  - **Connection** — a linked AWS account (Organisation or Standalone)
  - **Target** — a selection of AWS resources to act upon
  - **Execution** — a single run of a Target's actions (stop/start/scale)
  - **Schedule** — a time-based trigger linked to one or more Targets
  - **Guard Project** — a governance container for infrastructure approval workflows
  - **Budget** — a spending limit tracked against actual AWS costs
  - **Scope** — a permission boundary limiting visibility to specific connections or resources
  - **Group** — a collection of users for shared access and notification policies
  - **Credit** — the billing unit consumed by frugally.app actions
  - **Violation** — a detected breach of a budget, policy, or compliance rule
  - **Scan** — a periodic compliance check run by Guard
  - **Finding** — a specific issue discovered during a Guard scan
  - **Cost Posture** — a snapshot score representing overall cost health
  - **Maturity Assessment** — a self-assessment of FinOps practice maturity
  - **Drift** — a mismatch between IaC-defined state and live AWS resource state
- [ ] Use `:::tip` admonitions to link each term to its main documentation page

---

## Cross-Cutting TODOs

These tasks apply across the entire documentation and should be tracked separately from individual page work.

### Structural

- [ ] **Fix `_category_.json` position conflicts:** billing currently has position `7` and advanced has position `6`. Renumber all to match the new sidebar order (see Proposed Sidebar Structure above)
- [ ] **Renumber all existing `_category_.json` positions:**
  - `getting-started/`: 2 (no change)
  - `connections/`: remove or archive (content merged elsewhere)
  - `sso/`: change from 5 to 13
  - `advanced/`: change from 6 to 14
  - `billing/`: change from 7 to 12
  - `faqs/`: change from 8 to 17
- [ ] **Create new `_category_.json` files** for: `dashboard/`, `automate/`, `automate/targets/`, `automate/schedules/`, `automate/executions/`, `intelligence/`, `guard/`, `guard/projects/`, `roles-and-access/`, `integrations/`, `integrations/slack/`, `integrations/github/`, `notifications/`, `monitoring-and-alerts/`, `team-management/`, `api-reference/`, `troubleshooting/`
- [ ] **Add URL redirects** for all relocated, renamed, and consolidated pages. Track needed redirects:
  - `/docs/groups` &rarr; `/docs/roles-and-access/groups`
  - `/docs/scopes` &rarr; `/docs/roles-and-access/scopes`
  - `/docs/billing/what-are-the-payment-terms` &rarr; `/docs/billing/payment-methods-and-invoices`
  - `/docs/billing/when-are-invocies-raised` &rarr; `/docs/billing/payment-methods-and-invoices`
  - `/docs/billing/how-to-pay-an-invoice` &rarr; `/docs/billing/payment-methods-and-invoices`
  - `/docs/advanced/whats-the-format-for-setting-executions-on-a-schedule` &rarr; `/docs/advanced/schedule-format`
  - All `/docs/connections/*` pages &rarr; their new locations
- [ ] **Archive `connections/` section** after content is merged into other pages

### Content Standards

- [ ] **Screenshots:** Fill all `[SCREENSHOT: ...]` placeholders. There are approximately 27 screenshot slots defined in this outline. Use consistent browser dimensions (1280x800) and blur any sensitive data.
- [ ] **Internal link audit:** After restructuring, audit every internal link to ensure nothing is broken
- [ ] **Feature tier admonitions:** Use consistent callout format throughout:
  ```
  :::note Pro feature
  This feature is available on the Pro and Enterprise plans.
  :::
  ```
  ```
  :::note Enterprise feature
  This feature is available on the Enterprise plan only.
  :::
  ```
- [ ] **British English spelling:** Use British English throughout (organise, authorise, utilisation, colour, favour, defence, licence). Audit existing pages for consistency.
- [ ] **LLM-friendly structure:** Write documentation that is easy for LLMs to parse:
  - Use descriptive H2/H3 headings (not just "Overview")
  - Include summary tables at the top of reference pages
  - Use definition lists for key terms
  - Prefer structured content (tables, lists) over long prose paragraphs

### Terminology

- [ ] **Consistent terminology audit:** Ensure these terms are used consistently (not interchangeably with synonyms):
  - "Connection" (not "linked account" or "AWS connection")
  - "Target" (not "resource group" or "selection")
  - "Execution" (not "run" or "job" — except in Slack command context)
  - "Schedule" (not "cron job" or "timer")
  - "Guard Project" (not just "project" in ambiguous contexts)
  - "Credit" (not "token" or "unit")

---

## Recommended Implementation Order

Work in phases, prioritising pages that unblock user onboarding and cover the most-used features first.

### Phase 1 — Foundations (structural changes + highest-traffic pages)

1. Renumber all `_category_.json` files to match new positions
2. Create all new `_category_.json` files for new sections
3. Set up URL redirects for relocated/renamed pages
4. Update `intro.md` to reflect full FinOps platform positioning
5. Update `getting-started/start-here.md`
6. Create `getting-started/connecting-github.md`
7. Update `getting-started/connecting-slack.md`
8. Create `glossary.md`

### Phase 2 — Core product documentation (Automate + Dashboard)

9. Create `dashboard/` section (3 pages)
10. Create `automate/overview.md`
11. Create `automate/targets/` sub-section (4 pages)
12. Create `automate/schedules/` sub-section (3 pages)
13. Create `automate/executions/` sub-section (4 pages)
14. Create `automate/onboarding-wizard.md`
15. Create `automate/insights.md`

### Phase 3 — Intelligence + Guard

16. Create `intelligence/` section (4 pages)
17. Create `guard/overview.md`
18. Create `guard/projects/` sub-section (3 pages)
19. Create remaining `guard/` pages (8 pages)

### Phase 4 — Access, Integrations, Notifications

20. Create `roles-and-access/` section (3 new + 2 relocated = 5 pages)
21. Create `integrations/slack/` sub-section (5 pages)
22. Create `integrations/github/` sub-section (5 pages)
23. Create `notifications/` section (4 pages)

### Phase 5 — Operations + Reference

24. Create `monitoring-and-alerts/` section (4 pages)
25. Create `team-management/` section (4 pages)
26. Rewrite `billing/` section (5 pages; consolidate old pages)
27. Create `advanced/webhooks.md`
28. Update `advanced/iam-role-permissions.md`
29. Rename `advanced/whats-the-format-for-setting-executions-on-a-schedule.md` to `schedule-format.md`

### Phase 6 — API, Troubleshooting, FAQs

30. Create `api-reference/` section (4 pages)
31. Create `troubleshooting/` section (7 pages)
32. Rewrite and expand `faqs/` section (4 rewrites + 5 new = 9 pages)

### Phase 7 — Polish

33. Fill all screenshot placeholders
34. Run internal link audit
35. Run terminology audit
36. Run British English spelling audit
37. Review all feature-tier admonitions for accuracy
38. Final review of sidebar ordering and navigation flow

---

## Verification Checklist

Use this checklist after the outline is complete to confirm accuracy.

- [ ] Every existing `.md` file is accounted for with an accurate status marker
- [ ] Every existing `_category_.json` has a noted position change (or "no change")
- [ ] The `connections/` section (6 existing pages) has explicit merge/archive instructions
- [ ] All app features discovered in frugally-app are represented in at least one section
- [ ] The outline renders correctly in standard Markdown viewers
- [ ] Page counts in the summary table match the detailed sections
- [ ] No orphaned pages (every page belongs to a section)
- [ ] All cross-references between sections are noted (e.g., Intelligence anomaly detection &harr; Monitoring anomaly detection)
