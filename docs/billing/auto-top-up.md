---
hide_table_of_contents: true
sidebar_position: 5
---

# Auto Top-Up

Auto top-up automatically purchases additional credits when your balance drops below a configured threshold. It ensures your Schedules and Scans continue running without interruption.

:::note Pro feature
Auto top-up is available on the Pro and Enterprise plans.
:::

---

## How auto top-up works

1. You configure a **threshold** (the credit balance that triggers a top-up)
2. You configure a **top-up amount** (how many credits to purchase)
3. When your balance drops below the threshold, frugally.app automatically charges your default payment method and adds credits to your balance

The top-up happens once per trigger. If your balance drops below the threshold again after the top-up, another top-up is triggered.

---

## Enabling auto top-up

1. Navigate to **Settings** > **Billing** > **Auto Top-Up**
2. Toggle **Enable Auto Top-Up** on
3. Configure:

| Setting | Description | Default |
|---------|-------------|---------|
| **Threshold** | Trigger when credit balance drops below this number | 200 credits |
| **Top-up amount** | Number of credits to purchase | 500 credits |
| **Monthly limit** | Maximum number of auto top-ups per month (to prevent runaway charges) | 3 |

4. Confirm your default [payment method](./payment-methods-and-invoices.md) is up to date
5. Save

---

## Notifications

| Event | Notification |
|-------|-------------|
| **Auto top-up triggered** | Email to the Owner confirming the purchase amount and new balance |
| **Auto top-up failed** | Email to the Owner with the failure reason (e.g. card declined) |
| **Monthly limit reached** | Email to the Owner that no more auto top-ups will occur this month |

---

## What happens if auto top-up fails

If the payment method charge fails:

1. The Owner is notified by email
2. frugally.app retries after 1 hour
3. If the retry also fails, no further automatic attempts are made
4. Credits continue to be consumed; the normal [enforcement rules](./credit-usage-and-enforcement.md) apply if the balance reaches zero

Update your payment method and manually trigger a top-up from **Settings** > **Billing** > **Buy Credits** if an auto top-up fails.

---

## Disabling auto top-up

1. Navigate to **Settings** > **Billing** > **Auto Top-Up**
2. Toggle **Enable Auto Top-Up** off
3. Save

Disabling does not refund any credits already purchased via auto top-up.

---

## Best practices

- **Set the threshold above your daily usage** — If your team consumes ~50 credits/day, set the threshold to at least 100 so you have a 2-day buffer
- **Set a reasonable monthly limit** — This protects against unexpected spikes in usage triggering excessive charges
- **Monitor usage trends** — Review the [usage dashboard](./credit-usage-and-enforcement.md) monthly to ensure your threshold and top-up amount are appropriate
- **Keep payment methods current** — An expired card will cause auto top-up to fail silently
