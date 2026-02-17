---
hide_table_of_contents: true
sidebar_position: 3
---

# Anomaly Detection

Anomaly detection identifies when a [signal](./signals-and-baselines.md) deviates significantly from its established baseline. It is the primary mechanism for catching unexpected cost spikes, usage changes, and resource count shifts.

---

## How anomalies are detected

For each tracked signal, frugally.app compares the current value against the baseline bounds:

```
If signal value > baseline upper bound → anomaly (spike)
If signal value < baseline lower bound → anomaly (drop)
```

The baseline bounds are determined by the [sensitivity configuration](./signals-and-baselines.md#baseline-sensitivity) and the signal's historical variance.

---

## Threshold configuration

You can fine-tune anomaly detection with additional threshold rules:

| Threshold type | Description | Example |
|----------------|-------------|---------|
| **Percentage** | Triggers when the signal exceeds the baseline by a percentage | Alert when daily spend is 20% above baseline |
| **Absolute** | Triggers when the signal exceeds the baseline by a fixed amount | Alert when daily spend is $100 above baseline |
| **Standard deviations** | Triggers based on statistical deviation | Alert at 2 standard deviations (default) |
| **Minimum amount** | Only trigger if the absolute value exceeds a floor | Only alert if the anomaly represents at least $50 in additional spend |

Configure thresholds at **Settings** > **Monitoring** > **Anomaly Detection**.

---

## Suppression rules

Suppression rules prevent known, expected patterns from triggering anomalies:

| Rule type | Use case |
|-----------|----------|
| **Service suppression** | Suppress anomalies for a service with known variable costs (e.g. Lambda during batch processing) |
| **Account suppression** | Suppress anomalies for a sandbox or testing account |
| **Time window suppression** | Suppress during a planned event (e.g. migration week, Black Friday, load testing) |
| **Minimum threshold** | Only alert on anomalies above a minimum dollar impact |
| **Day-of-week suppression** | Suppress weekend anomalies if your workload is weekday-heavy |

### Managing suppression rules

Navigate to **Settings** > **Monitoring** > **Suppression Rules**.

Each rule has:

| Field | Description |
|-------|-------------|
| **Name** | Descriptive label (e.g. "Batch processing — Lambda spikes expected") |
| **Condition** | What to suppress (service, account, time window, etc.) |
| **Expiry** | When the rule expires (optional — for time-limited suppressions) |
| **Reason** | Why the suppression exists (for audit purposes) |

:::tip
Always set an expiry date on time-limited suppression rules. Forgotten suppressions can mask real anomalies.
:::

---

## Cross-reference with Intelligence

Anomaly detection in the Monitoring section focuses on **detection and alerting configuration**. The [Intelligence — Cost Anomaly Detection](/docs/intelligence/cost-anomaly-detection) page focuses on **investigating and resolving** detected anomalies using the Cost Explorer.

| Aspect | Monitoring | Intelligence |
|--------|-----------|--------------|
| **Purpose** | Configure detection rules and thresholds | Investigate and resolve anomalies |
| **Actions** | Set sensitivity, create suppression rules | Acknowledge, dismiss, drill into cost data |
| **View** | Signal-centric (baselines and thresholds) | Cost-centric (spend breakdown and trends) |

Both views show the same anomalies — they are two perspectives on the same data.

---

## Anomaly lifecycle

```
Detected → Open → Acknowledged → Resolved / Dismissed
```

| Status | Meaning |
|--------|---------|
| **Open** | Anomaly detected, not yet reviewed |
| **Acknowledged** | Someone is investigating |
| **Resolved** | The signal returned to within baseline bounds |
| **Dismissed** | Closed without action (with a reason) |

Anomalies that resolve on their own (signal returns to normal) are automatically moved to Resolved status.
