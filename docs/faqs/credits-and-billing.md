---
hide_table_of_contents: true
sidebar_position: 7
---

# Credits and Billing

Common questions about frugally.app's credit-based billing model, plans, and payments.

---

## How does billing work?

frugally.app uses a credit-based model. You purchase credits and they are consumed as you use the platform. There is no standing monthly charge — you only pay for what you use.

See [Billing Overview](/docs/billing/overview) for a full introduction.

---

## What are credits?

Credits are the billing unit for frugally.app. Different actions consume different amounts of credits:

| Action | Credit cost |
|--------|------------|
| Execution (per resource actioned) | Varies by service |
| Guard scan | Varies by project size |
| API call | Varies by endpoint |

For the full breakdown, see [Credit Usage and Enforcement](/docs/billing/credit-usage-and-enforcement).

---

## What plans are available?

| | Free | Pro | Enterprise |
|-|------|-----|------------|
| **Credits** | Limited monthly allowance | Pay-as-you-go | Custom volume pricing |
| **Connections** | Up to 2 | Unlimited | Unlimited |
| **Schedules** | Up to 3 | Unlimited | Unlimited |
| **Guard projects** | 1 | Unlimited | Unlimited |
| **SSO / SCIM** | — | — | Included |
| **Support** | Community | Standard | Priority |

See [Plans and Credits](/docs/billing/plans-and-credits) for the full comparison.

---

## How do I add credits?

1. Go to **Settings** > **Billing** in the [dashboard](https://dashboard.frugally.app/settings/billing).
2. Click **Top Up Credits**.
3. Choose an amount and complete the payment.

You can also enable [Auto Top-Up](/docs/billing/auto-top-up) to automatically purchase credits when your balance drops below a threshold.

---

## What happens when I run out of credits?

When your credit balance reaches zero:

- Active Schedules are paused
- Guard scans are suspended
- Dashboard access and historical data remain available
- A notification is sent to all team admins

Top up your balance to resume. See [Credit Usage and Enforcement](/docs/billing/credit-usage-and-enforcement#what-happens-when-credits-run-out) for details.

---

## Do credits expire?

No. Credits do not expire while your account is active.

---

## Can I get a refund?

Unused credits are non-refundable. If you believe you were charged in error, contact [support@frugally.app](mailto:support@frugally.app) within 30 days.

---

## How do I get an invoice?

Invoices are generated monthly and available at **Settings** > **Billing** > **Invoices**. They are also emailed to the billing contact on file. See [Payment Methods and Invoices](/docs/billing/payment-methods-and-invoices).

---

## Troubleshooting

For billing issues, see [Billing and Credits Troubleshooting](/docs/troubleshooting/billing-and-credits).
