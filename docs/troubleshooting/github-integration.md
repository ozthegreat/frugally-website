---
hide_table_of_contents: true
sidebar_position: 5
---

# GitHub Integration

This page covers troubleshooting for the GitHub integration — app installation, IaC scanning, drift detection, and permission issues.

---

## Installation issues

### GitHub App not appearing in the organisation

**Symptom:** After clicking "Install", the frugally.app GitHub App does not appear in your organisation's installed apps.

**Steps:**
1. Verify you have **Owner** or **Admin** permissions in the GitHub organisation. Only organisation administrators can install GitHub Apps.
2. Check if your organisation requires [admin approval for third-party apps](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization). If so, the installation may be pending approval.
3. Try installing again from **Settings** > **Integrations** > **GitHub** in the [frugally.app dashboard](https://dashboard.frugally.app/settings/integrations).

### "Repository access" not showing expected repos

**Symptom:** After installing the GitHub App, some repositories are missing from the selection list.

**Cause:** The GitHub App may be configured with limited repository access.

**Steps:**
1. Go to your GitHub organisation's **Settings** > **GitHub Apps** > **frugally.app** > **Configure**.
2. Under **Repository access**, select either "All repositories" or add the missing repositories to the list.

---

## IaC scanning issues

### Scan not triggering on pull requests

**Symptom:** Opening or updating a pull request does not trigger an IaC scan.

**Checklist:**

| Check | Action |
|-------|--------|
| **GitHub App installed** | Verify the app is installed and has access to the repository |
| **IaC scanning enabled** | Check **Settings** > **Integrations** > **GitHub** — ensure IaC scanning is toggled on |
| **Supported file types** | Scans trigger for Terraform (`.tf`), CloudFormation (`.yaml`, `.json`), and Pulumi files. If the PR only modifies other files, no scan runs |
| **Branch targeting** | Verify the PR targets a branch that frugally.app is configured to monitor (typically `main` or `master`) |
| **Repository access** | Ensure the GitHub App has access to the specific repository (see installation issues above) |

### Scan runs but finds no issues

**Possible causes:**
- The IaC changes are compliant with all configured rules — no action needed.
- The scan rules may not cover the resource types in the PR. Review the scan rule configuration in Guard.

### Scan reports incorrect results

**Steps:**
1. Check the PR comment left by frugally.app for the scan details.
2. Click through to the scan in the dashboard for the full findings list.
3. If a finding seems incorrect, use the **Suppress** action to dismiss it and report a false positive to support.

---

## Drift detection issues

### Drift not being reported

**Symptom:** Resources have been modified in AWS but drift detection does not flag them.

**Checklist:**

| Check | Action |
|-------|--------|
| **Drift detection enabled** | Verify drift detection is toggled on in **Settings** > **Integrations** > **GitHub** |
| **Connection healthy** | Drift detection requires healthy Connections to read current resource state |
| **Repository mapping** | Ensure the repository containing your IaC is linked to the correct Connection(s) |
| **Scan schedule** | Drift detection runs on a schedule (not real-time). Check when the last drift scan ran |

### Drift reported for resources you didn't change

**Cause:** Drift detection compares the IaC-defined state against the live AWS state. Changes made outside of IaC (manual console changes, other tools) are flagged as drift.

**Resolution:** Either update your IaC to match the live state, or revert the live resource to match IaC.

---

## Permission and access issues

### "Insufficient permissions" error on GitHub integration page

**Cause:** Your frugally.app role does not have permission to manage integrations.

**Solution:** Ask a team admin to configure the GitHub integration, or request a role upgrade. See [Roles and Permissions](/docs/roles-and-access/roles-and-permissions).

### GitHub webhook delivery failures

**Symptom:** GitHub shows failed webhook deliveries in the App settings.

**Steps:**
1. Go to your GitHub organisation's **Settings** > **GitHub Apps** > **frugally.app** > **Advanced** > **Recent Deliveries**.
2. Check the response code. Common issues:
   - `401` — The integration token may have expired. Re-authenticate in the frugally.app dashboard.
   - `500` — A server-side issue. Check the [status page](https://status.frugally.app) and contact support if it persists.

---

## Still stuck?

Collect the following and contact [support@frugally.app](mailto:support@frugally.app):

- GitHub organisation name
- Repository name
- PR number (if applicable)
- Screenshots of the error or GitHub App configuration
