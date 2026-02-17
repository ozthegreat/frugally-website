---
hide_table_of_contents: true
sidebar_position: 2
---

# GitHub App Installation

This guide covers the detailed installation process for the frugally.app GitHub App, including organisation-level vs repository-level installation and managing access after setup.

For the quick-start version, see [Getting Started — Connecting GitHub](/docs/getting-started/connecting-github).

---

## Installation options

### Organisation-level installation (recommended)

Install the App at the organisation level and choose which repositories to grant access to. This is the recommended approach because:

- Centralised management — Admins control access from one place
- Easy to add new repositories later without reinstalling
- Works with organisation-wide security policies

### Repository-level installation

Install the App on individual repositories. Use this if:

- You do not have organisation admin access
- You want to limit the App to specific repositories only
- Your organisation's policies do not allow organisation-level App installations

---

## Installation steps

### 1. Start the installation

Navigate to **Settings** > **Install GitHub App** in the frugally.app dashboard.

[Install GitHub App](https://dashboard.frugally.app/github/install)

Click **Install GitHub App** to be redirected to GitHub.

### 2. Select your organisation

If you belong to multiple GitHub organisations, select the one you want to connect to frugally.app.

`[SCREENSHOT: github-org-select.png -- GitHub organisation selection during installation]`

### 3. Choose repository access

| Option | Description |
|--------|-------------|
| **All repositories** | The App has access to all current and future repositories in the organisation |
| **Only select repositories** | The App has access only to the repositories you choose |

:::tip
Start with **Only select repositories** and add the repositories that contain your IaC files. You can grant access to more repositories later without reinstalling.
:::

### 4. Review permissions

GitHub displays the permissions the App is requesting. Review them and click **Install**.

| Permission | Why it is needed |
|-----------|-----------------|
| Repository contents (Read) | Read IaC files for scanning |
| Pull requests (Read & Write) | Post cost-impact review comments |
| Checks (Read & Write) | Report scan results as check runs |
| Issues (Read) | Reference linked issues |
| Metadata (Read) | Access repository names and settings |

### 5. Confirm in frugally.app

You are redirected back to the frugally.app dashboard. The status shows **Connected** with the list of accessible repositories.

`[SCREENSHOT: github-connection-confirmed.png -- Connected status with repository list]`

---

## Managing repository access after installation

### Adding repositories

1. Go to your GitHub organisation's **Settings** > **Installed GitHub Apps**
2. Find **frugally.app** and click **Configure**
3. Under **Repository access**, add the new repositories
4. Save changes

The new repositories are available in frugally.app immediately.

### Removing repositories

Follow the same steps as adding, but remove repositories from the access list instead. Removing a repository:

- Stops IaC scanning on new PRs for that repository
- Stops drift detection for resources defined in that repository
- Does not delete historical scan results or findings

---

## Multiple organisations

frugally.app supports connecting multiple GitHub organisations. Each organisation requires a separate App installation. To connect an additional organisation:

1. Go to **Settings** > **Install GitHub App** in the dashboard
2. Click **Install to Another Organisation**
3. Follow the installation steps for the new organisation

---

## Uninstalling the GitHub App

To disconnect GitHub entirely:

1. Go to your GitHub organisation's **Settings** > **Installed GitHub Apps**
2. Find **frugally.app** and click **Configure**
3. Click **Uninstall** at the bottom of the page

This removes all access. In frugally.app, the GitHub integration status changes to **Not Connected**. Historical scan results and findings are retained.

---

## Troubleshooting installation

| Issue | Resolution |
|-------|------------|
| **"Insufficient permissions"** | You need organisation admin access. Ask your GitHub org admin to install the App. |
| **Organisation not listed** | Ensure you are a member of the organisation. If it uses SAML SSO, you may need to authorise the App separately. |
| **Installation succeeds but no repositories shown** | Check that you selected repositories during installation. Go to GitHub > Installed Apps > frugally.app > Configure to verify. |
| **Status stuck on "Connecting"** | Try refreshing the frugally.app dashboard. If the issue persists, uninstall and reinstall the App. |
