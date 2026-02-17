---
hide_table_of_contents: true
sidebar_position: 1
---

# Monitoring & Alerts Overview

The monitoring system in frugally.app tracks signals across your AWS environment, establishes baselines for normal behaviour, detects anomalies, and raises alerts when something needs attention.

---

## How monitoring differs from notifications

| Concept | Purpose |
|---------|---------|
| **Monitoring** | Detection — continuously analyses your environment to identify issues |
| **[Notifications](/docs/notifications/overview)** | Delivery — routes detected issues to the right people via the right channels |

Monitoring produces alerts; [notifications](/docs/notifications/overview) deliver them. You configure what to detect here and how to deliver in the Notifications section.

---

## Key concepts

| Concept | Definition |
|---------|-----------|
| **Signal** | A metric tracked over time — cost, resource usage, resource count, etc. |
| **Baseline** | The expected normal range for a signal, established from historical data |
| **Anomaly** | A signal value that deviates significantly from its baseline |
| **Alert** | A notification triggered when an anomaly or threshold condition is met |

---

## What is monitored

| Signal category | Examples |
|----------------|---------|
| **Cost** | Daily spend, per-service spend, per-account spend |
| **Usage** | EC2 CPU utilisation, RDS connections, ECS task count |
| **Resource count** | Number of running instances, active services, provisioned endpoints |
| **Execution health** | Execution success rate, failure frequency, partial failure rate |

---

## In this section

- **[Signals and Baselines](./signals-and-baselines.md)** — What is tracked and how baselines are established
- **[Anomaly Detection](./anomaly-detection.md)** — How anomalies are identified and configured
- **[Alert Management](./alert-management.md)** — Creating alert rules, severity levels, and managing alert lifecycle
