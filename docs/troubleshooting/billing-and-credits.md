---
hide_table_of_contents: true
sidebar_position: 7
---

# Billing and Credits

This page covers troubleshooting for billing, credits, invoices, and plan-related issues.

---

## Credit balance issues

### Credit balance showing incorrectly

**Symptom:** Your credit balance does not reflect recent purchases or usage.

**Possible causes:**

| Cause | Resolution |
|-------|------------|
| **Recent top-up not processed** | Credit top-ups via card are usually instant. Bank transfers may take 1–3 business days. Check your payment method for confirmation |
| **Pending Executions** | Credits are deducted when Executions complete. If Executions are still running, the balance may not have updated yet |
| **Browser cache** | Hard-refresh the billing page (Ctrl+Shift+R / Cmd+Shift+R) to see the latest balance |

### Credits running out faster than expected

**Steps:**
1. Go to **Settings** > **Billing** > **Usage** to view a breakdown of credit consumption.
2. Check which actions are consuming the most credits — Executions, scans, and API calls each have different credit costs.
3. Review your Schedules — a high-frequency Schedule (e.g. hourly) on a large Target consumes more credits than a daily Schedule.
4. See [Credit Usage and Enforcement](/docs/billing/credit-usage-and-enforcement) for the full credit consumption table.

### What happens when credits run out?

When your credit balance reaches zero:

1. Active Schedules are **paused** — no new Executions are triggered.
2. Guard scans are **suspended**.
3. Dashboard access and historical data remain available.
4. A notification is sent to all team admins.

To resume, top up your credit balance or enable [Auto Top-Up](/docs/billing/auto-top-up).

---

## Invoice issues

### Invoice not received

**Checklist:**

| Check | Action |
|-------|--------|
| **Email address** | Verify the billing email at **Settings** > **Billing** > **Billing Contact** |
| **Spam folder** | Check spam/junk for emails from `billing@frugally.app` |
| **Invoice frequency** | Invoices are generated monthly. Check the invoice date matches your expectations |
| **Download from dashboard** | All invoices are available at **Settings** > **Billing** > **Invoices** regardless of email delivery |

### Invoice amount seems incorrect

**Steps:**
1. Open the invoice and review the line items.
2. Compare against your credit usage in **Settings** > **Billing** > **Usage**.
3. Check if the invoice includes credits from auto top-up or a plan change.
4. Contact [support@frugally.app](mailto:support@frugally.app) with the invoice number if the discrepancy cannot be explained.

---

## Payment method issues

### Card payment declined

**Possible causes:**
- Insufficient funds
- Card expired — update the card at **Settings** > **Billing** > **Payment Method**
- Your bank blocked the transaction — contact your bank to authorise payments to "Frugally, Inc."
- 3D Secure required — your bank may require additional authentication. Try the payment again and complete the 3DS challenge

### Cannot update payment method

**Steps:**
1. Ensure you have the **Admin** role — only admins can update billing settings.
2. Try a different browser or clear cookies — payment forms use a secure third-party iframe that may be blocked by browser extensions.
3. Disable ad-blockers temporarily — they can interfere with the payment form.

---

## Plan change issues

### Plan change not reflected

**Symptom:** You upgraded or downgraded your plan but the dashboard still shows the old plan.

**Steps:**
1. **Hard-refresh** the page (Ctrl+Shift+R / Cmd+Shift+R).
2. Check **Settings** > **Billing** > **Plan** for the current plan status.
3. Plan upgrades take effect immediately. Downgrades take effect at the end of the current billing period.

### Cannot downgrade plan

**Possible causes:**
- **Active Connections exceed the lower plan limit** — Disable or remove Connections until you are within the target plan's limit.
- **Active Guard projects exceed the lower plan limit** — Archive projects until you are within the limit.
- **Enterprise features in use** — If you use features exclusive to your current plan (e.g. SCIM, SSO), you must disable them before downgrading.

---

## Auto top-up issues

### Auto top-up not triggering

**Checklist:**
1. Verify auto top-up is **enabled** at **Settings** > **Billing** > **Auto Top-Up**.
2. Check the threshold — auto top-up triggers when your balance drops below the configured threshold.
3. Verify the payment method is valid and not expired.
4. Check if the last auto top-up attempt failed — a failed attempt is logged in the billing history.

### Unexpected auto top-up charge

**Cause:** Your credit balance dropped below the configured threshold, triggering a top-up.

**Steps:**
1. Review credit usage at **Settings** > **Billing** > **Usage** to understand what consumed credits.
2. Adjust the auto top-up threshold or amount if the current settings don't match your usage patterns.
3. See [Auto Top-Up](/docs/billing/auto-top-up) for configuration details.

---

## Still stuck?

Collect the following and contact [support@frugally.app](mailto:support@frugally.app):

- Invoice number (if applicable)
- Screenshot of the billing page
- Description of the expected vs actual behaviour
