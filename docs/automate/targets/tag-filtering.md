---
hide_table_of_contents: true
sidebar_position: 3
---

# Tag Filtering

Tag filtering lets you precisely select which AWS resources a Target should include. Instead of managing individual resources, you define tag rules and frugally.app automatically matches current and future resources that satisfy those rules.

---

## How tag filtering works

When you create or edit a Target, you specify one or more tag key:value pairs. frugally.app queries AWS for resources of the selected service type in the selected regions and returns only those that match your tag filters.

Tag filters are evaluated each time a Schedule runs or an Execution is triggered, so if you add a new resource with matching tags, it is automatically included in the next run.

---

## Syntax

Tags are specified as `Key:Value` pairs, one per line in the Target configuration form.

### Basic examples

| Tag filter | Matches |
|-----------|---------|
| `Environment:dev` | Resources tagged with `Environment` = `dev` |
| `schedule:true` | Resources tagged with `schedule` = `true` |
| `Environment` | Resources that have the `Environment` tag key, regardless of value |

---

## Combining filters

### AND logic (multiple keys)

When you specify multiple tag keys, **all** must match (AND logic):

```
Environment:dev
Team:backend
```

This matches resources tagged with **both** `Environment=dev` **and** `Team=backend`.

### OR logic (multiple values for one key)

When you specify multiple values for the same key, **any** value can match (OR logic):

```
Environment:dev,staging
```

This matches resources tagged with `Environment=dev` **or** `Environment=staging`.

### Combining AND and OR

```
Environment:dev,staging
Team:backend
```

This matches resources where `Environment` is `dev` or `staging` **AND** `Team` is `backend`.

---

## Key-only matching

Specifying a key without a value matches all resources that have that tag key, regardless of its value:

```
schedule
```

This matches any resource with a `schedule` tag, whether its value is `true`, `false`, `weekdays`, or anything else.

---

## Tag matching rules

| Rule | Behaviour |
|------|-----------|
| Tag keys are **case-sensitive** | `Environment` and `environment` are different keys |
| Tag values are **case-sensitive** | `Dev` and `dev` are different values |
| Leading/trailing whitespace is **trimmed** | `  dev  ` is treated as `dev` |
| Empty value with colon (`Key:`) | Matches resources where the tag key exists with an empty string value |

---

## Tips for effective tagging

:::tip Consistent tagging saves time
Tag your AWS resources consistently — for example with `Environment` (`dev`, `staging`, `prod`) or `schedule:true`. This makes it easy to create Targets and lets the [Onboarding Wizard](../onboarding-wizard.md) group resources for you automatically.
:::

- **Use a tagging standard** — Agree on tag keys and allowed values across your team (e.g. always `Environment`, never `Env` or `env`)
- **Tag at launch** — Apply tags when creating resources to ensure they are picked up immediately
- **Audit regularly** — Untagged resources will not be matched by any Target

---

## Further reading

For the complete tag syntax reference including advanced patterns, see [Resource Tag Filtering](/docs/advanced/resource-tag-filtering).
