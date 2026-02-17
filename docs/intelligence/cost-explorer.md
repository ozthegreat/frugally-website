---
hide_table_of_contents: true
sidebar_position: 2
---

# Cost Explorer

The Cost Explorer gives you a detailed, interactive view of your AWS spending. Group costs by service, account, region, or tag to understand exactly where your money is going.

[Open Cost Explorer](https://dashboard.frugally.app/cost-explorer)

`[SCREENSHOT: cost-explorer.png -- Cost explorer with grouping and filters applied]`

---

## Grouping dimensions

Break down your costs using any of these dimensions:

| Dimension | What it shows |
|-----------|---------------|
| **Service** | Spend per AWS service (EC2, RDS, S3, Lambda, etc.) |
| **Account** | Spend per AWS account (useful for multi-account organisations) |
| **Region** | Spend per AWS region |
| **Tag** | Spend per tag key:value pair (e.g. `Environment:dev` vs `Environment:prod`) |

You can combine dimensions to create more specific views — for example, grouping by **Service** then **Account** to see which accounts are driving EC2 costs.

---

## Date range and granularity

| Control | Options |
|---------|---------|
| **Date range** | Last 7 days, last 30 days, this month, last month, last 3 months, last 6 months, last 12 months, custom range |
| **Granularity** | Daily or Monthly |

:::tip
Use **daily** granularity for short ranges (7–30 days) to spot day-to-day fluctuations. Switch to **monthly** for longer ranges to see trends without noise.
:::

---

## Filters

Narrow your view with filters:

| Filter | Description |
|--------|-------------|
| **Connection** | Include only specific AWS accounts |
| **Service** | Include only specific AWS services |
| **Region** | Include only specific AWS regions |
| **Tag** | Include only resources with specific tags |

Filters can be combined. For example, filter by `Connection: Production` and `Service: EC2` to see only EC2 spend in your production account.

---

## Reading the chart

The Cost Explorer displays costs as a stacked bar chart (grouped view) or a line chart (single dimension). Hover over any data point to see the exact amount.

Below the chart, a summary table shows:

| Column | Description |
|--------|-------------|
| **Group** | The dimension value (e.g. service name, account ID) |
| **Total** | Total spend for the selected period |
| **Average** | Average daily or monthly spend |
| **Trend** | Percentage change compared to the previous period |

---

## Export and download

Click **Export** to download the current view as a CSV file. The export includes all data points visible in the chart and table, respecting your current filters and grouping.

---

## Common use cases

| Use case | How to set it up |
|----------|------------------|
| **Which service costs the most?** | Group by Service, last 30 days, monthly granularity |
| **Are dev costs growing?** | Filter by tag `Environment:dev`, last 3 months, monthly granularity |
| **Which region is most expensive?** | Group by Region, this month |
| **Cost per team** | Group by tag `Team`, last month (requires consistent team tagging) |
| **Spot a cost spike** | No grouping, last 7 days, daily granularity — look for outlier bars |

---

## Tips for effective cost analysis

- **Tag consistently** — Cost Explorer is most powerful when resources are tagged with meaningful dimensions like `Environment`, `Team`, and `Project`
- **Compare periods** — Use the trend column to spot month-over-month changes
- **Drill down** — Start broad (group by Service), then narrow (filter to the top service, group by Account) to find the root cause of unexpected spend
- **Set up alerts** — If you spot a pattern worth monitoring, configure [Cost Anomaly Detection](./cost-anomaly-detection.md) to alert you automatically
