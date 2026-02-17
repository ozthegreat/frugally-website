---
hide_table_of_contents: true
sidebar_position: 3
---

# Commitment Utilisation

The Commitment Utilisation view tracks how effectively your Reserved Instances (RIs) and Savings Plans are being used. Under-utilised commitments represent money already spent that is not delivering value — this page helps you identify and address that waste.

[View Commitment Utilisation](https://dashboard.frugally.app/commitment-utilisation)

---

## What is tracked

| Commitment type | What frugally.app monitors |
|-----------------|---------------------------|
| **Reserved Instances** | EC2, RDS, ElastiCache, Redshift, and OpenSearch RIs |
| **Savings Plans** | Compute Savings Plans, EC2 Instance Savings Plans, SageMaker Savings Plans |

---

## Utilisation vs coverage

These are two distinct metrics:

| Metric | Definition | Goal |
|--------|-----------|------|
| **Utilisation** | What percentage of your purchased commitment hours are actually being used | As close to 100% as possible |
| **Coverage** | What percentage of your eligible on-demand usage is covered by commitments | Depends on your commitment strategy |

### Example

You purchased a 1-year RI for 10 EC2 `m5.large` instances. If only 7 are running at any given time:

- **Utilisation** = 70% — you are using 7 of 10 purchased instances
- 3 instance-hours per hour are wasted (paid for but unused)

If you also have 5 additional `m5.large` instances running on-demand:

- **Coverage** = 7 / 12 = 58% — 7 of your 12 total instances are covered by the RI

---

## The utilisation dashboard

`[SCREENSHOT: commitment-utilisation.png -- Commitment utilisation dashboard showing RI and Savings Plan utilisation percentages]`

The dashboard shows:

| Widget | Description |
|--------|-------------|
| **Overall utilisation** | Aggregate utilisation percentage across all commitments |
| **By commitment type** | Breakdown by RIs and Savings Plans |
| **By service** | Utilisation per AWS service |
| **Trend** | Utilisation over time (daily or monthly) |
| **Expiring commitments** | Commitments expiring in the next 30, 60, and 90 days |

---

## Interpreting your utilisation

| Utilisation | Interpretation | Action |
|-------------|---------------|--------|
| **95–100%** | Excellent — commitments are fully used | Monitor for upcoming expirations |
| **80–94%** | Good — minor waste, may be acceptable | Check if under-used commitments can be exchanged or modified |
| **60–79%** | Needs attention — significant unused capacity | Review which instances are missing or stopped; consider exchanging unused RIs |
| **Below 60%** | Poor — substantial waste | Investigate root cause; consider letting commitments expire rather than renewing |

---

## Recommendations for improving utilisation

1. **Right-size commitments** — Match RI quantities to actual sustained usage, not peak usage
2. **Use flexible RIs** — Regional RIs and Convertible RIs offer more flexibility to adapt to changes
3. **Coordinate with Automate** — If you are stopping resources via [Schedules](/docs/automate/schedules/overview), ensure those resources are not covered by RIs (stopping an RI-covered instance wastes the RI hours)
4. **Monitor expirations** — Use the expiring commitments widget to plan renewals or adjustments
5. **Exchange unused RIs** — Where AWS allows, exchange under-utilised Convertible RIs for types that match your current workloads

:::tip
If you are using frugally.app Automate to stop non-production resources, buy RIs only for resources that run 24/7 (typically production). Non-production resources that are stopped overnight and on weekends will have low RI utilisation by design.
:::

---

## Data freshness

Commitment utilisation data is sourced from the AWS Cost Explorer API and follows the same caching and refresh schedule described in the [Intelligence Overview](./overview.md). Data may be up to 24 hours behind for the current day.
