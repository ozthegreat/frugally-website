---
hide_table_of_contents: true
sidebar_position: 2
---

# Signals and Baselines

frugally.app continuously tracks signals across your AWS environment and establishes baselines that represent normal behaviour. When a signal deviates from its baseline, it can trigger an [anomaly](./anomaly-detection.md) or [alert](./alert-management.md).

---

## What signals are tracked

### Cost signals

| Signal | Source | Granularity |
|--------|--------|-------------|
| **Total daily spend** | AWS Cost Explorer API | Daily |
| **Per-service spend** | AWS Cost Explorer API | Daily |
| **Per-account spend** | AWS Cost Explorer API | Daily |
| **Per-region spend** | AWS Cost Explorer API | Daily |

### Usage signals

| Signal | Source | Granularity |
|--------|--------|-------------|
| **EC2 CPU utilisation** | CloudWatch | Hourly |
| **RDS connections** | CloudWatch | Hourly |
| **ECS running task count** | CloudWatch | Hourly |
| **Lambda invocation count** | CloudWatch | Hourly |

### Resource count signals

| Signal | Source | Granularity |
|--------|--------|-------------|
| **Running EC2 instances** | EC2 DescribeInstances | Hourly |
| **Active RDS instances** | RDS DescribeDBInstances | Hourly |
| **Active ECS services** | ECS ListServices | Hourly |
| **Active NAT Gateways** | EC2 DescribeNatGateways | Hourly |

---

## How baselines are established

Baselines are calculated using a **7-day rolling window** of historical data. frugally.app computes:

| Metric | Description |
|--------|-------------|
| **Mean** | Average signal value over the window |
| **Standard deviation** | How much the signal typically varies |
| **Day-of-week pattern** | Separate baselines for each day of the week (e.g. weekdays vs weekends may differ) |
| **Upper/lower bounds** | The expected range based on mean ± configured sensitivity |

Baselines update daily as new data arrives, so they adapt to gradual changes in your environment.

---

## Baseline sensitivity

Sensitivity controls how wide the baseline bounds are. A tighter sensitivity triggers anomalies sooner; a looser sensitivity tolerates more variance.

| Sensitivity | Bounds | Best for |
|-------------|--------|----------|
| **High** | Mean ± 1 standard deviation | Stable environments with predictable spend |
| **Medium** (default) | Mean ± 2 standard deviations | Most teams — balances detection with noise |
| **Low** | Mean ± 3 standard deviations | Variable environments or early-stage teams |

Configure sensitivity at **Settings** > **Monitoring** > **Baseline Sensitivity**.

:::tip
Start with **Medium** sensitivity. If you receive too many false positives, lower the sensitivity. If anomalies are being missed, increase it.
:::

---

## Baseline warm-up

When you first connect an AWS account, frugally.app needs at least 7 days of data to establish a baseline. During this warm-up period:

- Signals are collected and displayed on the monitoring dashboard
- Baselines show as "establishing" with a progress indicator
- Anomaly detection is disabled until the baseline is ready
- Manual alert rules (threshold-based) work immediately

---

## Viewing signals and baselines

Navigate to **Monitoring** > **Signals** to see:

| View | Description |
|------|-------------|
| **Signal list** | All tracked signals with current value and baseline status |
| **Signal detail** | Time-series chart showing the signal, baseline bounds, and any anomaly markers |
| **Baseline health** | Whether the baseline is established, warming up, or has insufficient data |

---

## Custom signals

In addition to the built-in signals, you can configure custom signals based on:

- **Tag-based cost grouping** — Track spend for resources with a specific tag (e.g. `Team:backend` spend)
- **Combined signals** — Track the sum or ratio of multiple signals (e.g. cost per running instance)

Custom signals follow the same baseline and anomaly detection rules as built-in signals.
