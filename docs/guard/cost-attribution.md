---
hide_table_of_contents: true
sidebar_position: 4
---

# Cost Attribution

Cost attribution assigns your AWS spending to the teams, projects, or departments responsible for it. This creates accountability and helps teams understand the cost impact of their infrastructure decisions.

---

## Why cost attribution matters

Without attribution, AWS costs are a single line item that no one owns. With attribution:

- **Teams see their costs** — Engineers understand the financial impact of their infrastructure
- **Finance gets clarity** — Costs can be allocated to cost centres or business units
- **Optimisation is targeted** — You know which teams have the most room to improve
- **Budgets are meaningful** — Team-level [Budgets](./budgets.md) only work if costs are attributed correctly

---

## Attribution adapters

frugally.app supports six cost attribution adapters. Each adapter uses a different method to map AWS costs to teams:

| Adapter | How it attributes costs |
|---------|------------------------|
| **Tag-based** | Uses a specific AWS tag key (e.g. `Team`, `CostCentre`, `Department`) to assign costs to the tag's value |
| **Account-based** | Maps entire AWS accounts to teams (e.g. account 123456789012 = Backend team) |
| **Service-based** | Maps AWS services to teams (e.g. all RDS costs = Database team) |
| **Connection-based** | Maps frugally.app Connections to teams |
| **Group-based** | Maps costs to frugally.app [Groups](/docs/roles-and-access/groups) based on Group scope assignments |
| **Custom rules** | Flexible rules combining multiple dimensions (tags, accounts, services, regions) |

---

## Configuring attribution

Navigate to **Guard** > **Cost Attribution** > **Configure**.

### Step 1 — Choose adapters

Select one or more adapters. You can use multiple adapters — they are evaluated in priority order, and the first match wins.

### Step 2 — Configure each adapter

| Adapter | Configuration needed |
|---------|---------------------|
| **Tag-based** | Select the tag key to use (e.g. `Team`) |
| **Account-based** | Map each AWS account to a team name |
| **Service-based** | Map each AWS service to a team name |
| **Connection-based** | Map each Connection to a team name |
| **Group-based** | Ensure Groups have [Scopes](/docs/roles-and-access/scopes) assigned |
| **Custom rules** | Define rules with conditions and target teams |

### Step 3 — Handle unattributed costs

Costs that do not match any adapter rule are marked as **Unattributed**. You can:

- Leave them unattributed (they appear in a separate bucket)
- Assign a default team for unattributed costs
- Distribute them proportionally across all teams

---

## Viewing attributed costs

Once configured, attributed costs appear in:

| Location | View |
|----------|------|
| **Guard > Cost Attribution** | Full breakdown by team with trends |
| **Cost Explorer** | Group by "Team" dimension (powered by attribution rules) |
| **Executive Dashboard** | Team-level cost summary |
| **Budget tracking** | Team-scoped budgets use attributed costs |

`[SCREENSHOT: cost-attribution-breakdown.png -- Cost attribution view showing per-team cost breakdown]`

---

## Attribution accuracy

The accuracy of attribution depends on your data quality:

| Factor | Impact |
|--------|--------|
| **Tag coverage** | Resources without the attribution tag key will be unattributed |
| **Tag consistency** | Inconsistent values (e.g. "Backend" vs "backend") create duplicate teams |
| **Shared resources** | Resources used by multiple teams (e.g. shared RDS) may need custom rules to split costs |
| **Adapter priority** | When multiple adapters match, only the highest-priority adapter's result is used |

:::tip
Run a tag coverage report from **Guard** > **Cost Attribution** > **Coverage** to see what percentage of your spend is attributed vs unattributed. Aim for 90%+ attribution coverage.
:::

---

## Best practices

1. **Start with tags** — Tag-based attribution is the most flexible and widely applicable
2. **Standardise tag values** — Use a controlled list of team names to avoid duplicates
3. **Use account-based as a fallback** — If tagging is inconsistent, account-based attribution provides a coarse but reliable mapping
4. **Review monthly** — Check the unattributed bucket regularly and update rules as your infrastructure evolves
5. **Combine with Budgets** — Once costs are attributed, set [Budgets](./budgets.md) per team to create accountability
