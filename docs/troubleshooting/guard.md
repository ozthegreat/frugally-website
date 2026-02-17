---
hide_table_of_contents: true
sidebar_position: 4
---

# Guard

This page covers troubleshooting for Guard features — scans, budgets, cost attribution, and project workflows.

---

## Scan failures

### Scan stuck in "Running"

**Symptom:** A Guard scan stays in the **Running** state for an extended period.

**Possible causes:**
- The scan covers a large number of resources across many Connections. Large scans can take several minutes.
- A Connection used by the project has become unhealthy.

**Steps:**
1. Wait a few minutes — large scans take longer.
2. Check Connection health for all Connections associated with the project.
3. If the scan remains stuck after 15 minutes, contact support.

### Scan completed with errors

**Symptom:** The scan completes but reports errors alongside findings.

**Cause:** Some resources could not be evaluated, typically due to IAM permission gaps for specific services.

**Steps:**
1. Review the scan results for error details — the error message indicates which service or resource type failed.
2. Update the IAM policy to include the missing permissions. See [IAM Policy Reference](/docs/advanced/iam-role-permissions).
3. Re-run the scan.

### No findings generated

**Symptom:** The scan completes successfully but produces zero findings.

**Possible causes:**
- All resources are compliant — this is the expected result when everything is in order.
- The project's Connection scope is too narrow — it may not include the accounts where issues exist.
- Tag filters on the project are excluding resources.

---

## Budget issues

### Budget not tracking spend

**Symptom:** A budget shows $0 spend despite active resources.

**Possible causes:**

| Cause | Solution |
|-------|----------|
| **Cost Explorer not enabled** | Budgets rely on Cost Explorer data. Ensure the Connection has Cost Explorer enabled and the feature is verified (green status) |
| **Budget just created** | Cost data is refreshed periodically. New budgets may take up to 24 hours to show spend |
| **Tag filters too restrictive** | If the budget uses tag-based filtering, verify the tags match actual resources in AWS |
| **Wrong account** | Confirm the project's Connections include the account where the spend occurs |

### Budget threshold notification not received

**Symptom:** Spend crossed a threshold but no notification was sent.

**Check:**
1. Verify the threshold is configured on the budget (e.g. 80%, 100%).
2. Check the notification channel — is a Slack channel assigned? Is email enabled?
3. Review the budget's notification history to see if the notification was sent but not delivered.

### Spend amount doesn't match AWS

**Symptom:** The budget spend in frugally.app differs from the AWS Cost Explorer.

**Possible causes:**
- **Timing difference** — frugally.app refreshes cost data periodically. There may be a lag of up to 24 hours.
- **Scope difference** — The budget may be scoped to specific tags or services that don't match your AWS Cost Explorer filters.
- **Blended vs unblended costs** — Ensure you are comparing the same cost type in both systems.

---

## Cost attribution issues

### Resources not attributed to a project

**Symptom:** Some resources appear in AWS but are not attributed to any Guard project.

**Cause:** Resources must match the project's Connection and tag filters to be attributed. Resources outside the project's scope are not included.

**Steps:**
1. Check the project's Connections — does it include the account where the resource lives?
2. Check the project's tag filters — does the resource have the required tags?
3. Run a scan to refresh attribution.

---

## Project workflow issues

### Workflow stuck in a state

**Symptom:** A project approval request is stuck in **Pending** and cannot proceed.

**Possible causes:**
- **Approver unavailable** — The designated approver has not responded. Check who the approvers are and contact them directly.
- **Approval rule conflict** — Multiple approval rules may apply, requiring approvals from different people.

**Steps:**
1. Open the project and review the pending request.
2. Check the approval rules to understand who needs to approve.
3. If an approver is unavailable, an admin can override the approval from the project settings.

### Cannot create a project

**Symptom:** The "Create Project" button is disabled or returns an error.

**Possible causes:**
- **Insufficient permissions** — You need at least the **Contributor** role to create projects. See [Roles and Permissions](/docs/roles-and-access/roles-and-permissions).
- **Plan limit** — Your plan may have a maximum number of Guard projects. Check your plan limits at **Settings** > **Billing**.
- **No Connections** — At least one healthy Connection is required to create a project.

---

## Still stuck?

Collect the following and contact [support@frugally.app](mailto:support@frugally.app):

- Project ID
- Scan ID (if applicable)
- Budget ID (if applicable)
- Error messages or screenshots
