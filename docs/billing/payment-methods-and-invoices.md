---
hide_table_of_contents: true
sidebar_position: 4
---

# Payment Methods and Invoices

This page covers how to set up and manage payment methods, understand your invoices, and handle payment-related questions.

[Manage Billing](https://dashboard.frugally.app/settings/billing)

---

## Supported payment methods

| Method | Plans | Notes |
|--------|-------|-------|
| **Credit/debit card** | Pro, Enterprise | Visa, Mastercard, American Express |
| **Invoice (bank transfer)** | Enterprise | Available for annual commitments |

---

## Setting up a payment method

1. Navigate to **Settings** > **Billing** > **Payment Methods**
2. Click **Add Payment Method**
3. Enter your card details
4. Click **Save**

The first payment method added becomes your default. When frugally.app raises an invoice, the default payment method is charged automatically.

### Updating payment details

To update your card:

1. Navigate to **Settings** > **Billing** > **Payment Methods**
2. Click **Edit** on the existing card
3. Enter the new details
4. Save

To switch your default payment method (if you have multiple):

1. Click the menu icon next to the card you want as default
2. Select **Set as Default**

---

## Payment terms

Payment is due within **15 days** of the invoice date. If your default payment method is a card, the charge is attempted automatically on the invoice date.

If automatic payment fails:

1. An email is sent to the Owner with the failure reason
2. frugally.app retries the charge after 3 days and again after 7 days
3. If all attempts fail, the invoice is marked as overdue
4. After 15 days overdue, a credit enforcement may apply (see [Credit Usage and Enforcement](./credit-usage-and-enforcement.md))

---

## Invoices

### When invoices are raised

Invoices are raised on the **3rd of each month** for the previous month's usage. An email is sent to the team Owner once the invoice is available.

### Viewing invoices

Navigate to **Settings** > **Billing** > **Invoices** to see all invoices.

Each invoice shows:

| Field | Description |
|-------|-------------|
| **Invoice number** | Unique identifier |
| **Period** | The billing month covered |
| **Plan** | Your plan during that period |
| **Credits included** | Credits from your plan allocation |
| **Additional credits** | Any top-up credits purchased |
| **Amount** | Total amount due |
| **Status** | Paid, Pending, Overdue, or Failed |

### Downloading invoices

Click **Download PDF** on any invoice to save it for your records. Invoices include all the details needed for expense reporting and accounting.

---

## Invoice frequency

| Plan | Invoice frequency |
|------|------------------|
| **Free** | No invoices (free plan) |
| **Pro** | Monthly (3rd of each month) |
| **Enterprise (monthly)** | Monthly (3rd of each month) |
| **Enterprise (annual)** | Annual invoice at contract start, with optional monthly usage statements |

---

## Tax and currency

| Aspect | Detail |
|--------|--------|
| **Currency** | All invoices are in USD |
| **Tax** | Applicable taxes are calculated based on your billing address |
| **Tax ID** | You can add a VAT/Tax ID at **Settings** > **Billing** > **Billing Details** to appear on invoices |

---

## Billing contact

By default, all billing communications go to the team Owner. To add additional billing contacts:

1. Navigate to **Settings** > **Billing** > **Billing Details**
2. Add email addresses under **Billing Contacts**
3. Save

Billing contacts receive invoice notifications and payment failure alerts but do not have access to the billing dashboard.
