#!/usr/bin/env node

/**
 * Builds static/llms-full.txt from all documentation files.
 *
 * Usage: node scripts/build-llms-full.js
 *
 * Reads every Markdown file in docs/, strips YAML frontmatter,
 * converts Docusaurus admonitions to plain-text callouts,
 * removes screenshot placeholders, and writes to static/llms-full.txt.
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const OUT_FILE = path.join(__dirname, '..', 'static', 'llms-full.txt');
const BASE_URL = 'https://frugally.app/docs';

// Ordered sections — each entry is [sectionTitle, folderOrFiles]
const sections = [
  ['Welcome', ['intro.md']],
  ['Glossary', ['glossary.md']],
  ['Getting Started', [
    'getting-started/start-here.md',
    'getting-started/connecting-your-aws-accounts.md',
    'getting-started/creating-targets.md',
    'getting-started/connecting-slack.md',
    'getting-started/connecting-github.md',
    'getting-started/running-an-execution.md',
    'getting-started/creating-a-schedule.md',
  ]],
  ['Automate', [
    'automate/overview.md',
    'automate/onboarding-wizard.md',
    'automate/targets/overview.md',
    'automate/targets/supported-services.md',
    'automate/targets/tag-filtering.md',
    'automate/targets/dry-runs.md',
    'automate/schedules/overview.md',
    'automate/schedules/cron-and-schedule-types.md',
    'automate/schedules/estimated-savings.md',
    'automate/executions/overview.md',
    'automate/executions/manual-executions.md',
    'automate/executions/execution-lifecycle.md',
    'automate/executions/confidence-scoring.md',
    'automate/insights.md',
  ]],
  ['Intelligence', [
    'intelligence/overview.md',
    'intelligence/cost-explorer.md',
    'intelligence/commitment-utilisation.md',
    'intelligence/cost-anomaly-detection.md',
  ]],
  ['Guard', [
    'guard/overview.md',
    'guard/projects/overview.md',
    'guard/projects/approval-rules.md',
    'guard/projects/workflow.md',
    'guard/budgets.md',
    'guard/cost-attribution.md',
    'guard/scans-and-findings.md',
    'guard/violations-and-remediation.md',
    'guard/cost-posture.md',
    'guard/maturity-assessment.md',
    'guard/recommendations.md',
    'guard/executive-dashboard.md',
    'guard/resource-history-and-locks.md',
  ]],
  ['Dashboard', [
    'dashboard/overview.md',
    'dashboard/onboarding-checklist.md',
    'dashboard/projected-vs-actual-savings.md',
  ]],
  ['Integrations — Slack', [
    'integrations/slack/overview.md',
    'integrations/slack/slash-commands.md',
    'integrations/slack/app-mentions-and-ai-intent.md',
    'integrations/slack/home-tab.md',
    'integrations/slack/reactions-and-workflows.md',
  ]],
  ['Integrations — GitHub', [
    'integrations/github/overview.md',
    'integrations/github/installation.md',
    'integrations/github/iac-scanning.md',
    'integrations/github/drift-detection.md',
    'integrations/github/pr-review-and-authorship.md',
  ]],
  ['Roles & Access', [
    'roles-and-access/overview.md',
    'roles-and-access/roles-and-permissions.md',
    'roles-and-access/groups.md',
    'roles-and-access/scopes.md',
    'roles-and-access/access-requests.md',
  ]],
  ['SSO & Provisioning', [
    'sso/overview.md',
    'sso/setting-up-saml-sso.md',
    'sso/scim-provisioning.md',
    'sso/troubleshooting.md',
  ]],
  ['Team Management', [
    'team-management/overview.md',
    'team-management/members-and-invitations.md',
    'team-management/security-settings.md',
    'team-management/feature-flags.md',
  ]],
  ['Notifications', [
    'notifications/overview.md',
    'notifications/user-preferences.md',
    'notifications/team-policies.md',
  ]],
  ['Advanced', [
    'advanced/iam-role-permissions.md',
    'advanced/schedule-format.md',
    'advanced/webhooks.md',
    'advanced/resource-tag-filtering.md',
  ]],
  ['API Reference', [
    'api-reference/overview.md',
    'api-reference/webhook-payloads.md',
    'api-reference/scim-api.md',
    'api-reference/guard-api-v1.md',
  ]],
  ['FAQs', [
    'faqs/credits-and-billing.md',
    'faqs/how-to-cancel-remove-frugally-app.md',
    'faqs/data-and-security.md',
    'faqs/what-aws-resources-do-you-support.md',
    'faqs/roles-and-access.md',
    'faqs/github-integration.md',
    'faqs/view-current-historical-usage-bills-savings.md',
    'faqs/guard-and-budgets.md',
    'faqs/how-to-access-the-dashboard.md',
  ]],
  ['Troubleshooting', [
    'troubleshooting/general.md',
    'troubleshooting/aws-connections.md',
    'troubleshooting/executions-and-schedules.md',
    'troubleshooting/guard.md',
    'troubleshooting/billing-and-credits.md',
    'troubleshooting/slack-integration.md',
    'troubleshooting/github-integration.md',
  ]],
];

/** Strip YAML frontmatter (--- ... ---) from the start of a file. */
function stripFrontmatter(content) {
  const match = content.match(/^---\n[\s\S]*?\n---\n/);
  return match ? content.slice(match[0].length) : content;
}

/** Convert Docusaurus admonitions to plain-text callouts. */
function convertAdmonitions(content) {
  // :::note <title>  or  :::tip  etc.
  return content.replace(/^:::(note|tip|caution|warning|danger|info)(?: (.+))?$/gm, (_, type, title) => {
    const label = title || type.charAt(0).toUpperCase() + type.slice(1);
    return `> **${label}**`;
  }).replace(/^:::$/gm, '');
}

/** Remove screenshot placeholders like `[SCREENSHOT: ...]` */
function removeScreenshots(content) {
  return content.replace(/`\[SCREENSHOT:.*?\]`\n?/g, '');
}

/** Convert a doc file path to a URL slug. */
function fileToUrl(relPath) {
  // intro.md has slug: /
  if (relPath === 'intro.md') return BASE_URL;
  // Remove .md, convert to URL path
  let slug = relPath.replace(/\.mdx?$/, '');
  // overview files — keep as-is (Docusaurus uses folder/overview)
  return `${BASE_URL}/${slug}`;
}

function processFile(relPath) {
  const absPath = path.join(DOCS_DIR, relPath);
  if (!fs.existsSync(absPath)) {
    console.warn(`Warning: ${relPath} not found, skipping.`);
    return null;
  }
  let content = fs.readFileSync(absPath, 'utf8');
  content = stripFrontmatter(content);
  content = convertAdmonitions(content);
  content = removeScreenshots(content);
  // Trim trailing whitespace
  content = content.trim();
  const url = fileToUrl(relPath);
  return { url, content };
}

// Build output
const lines = [];

lines.push('# Frugally — Complete Documentation');
lines.push('');
lines.push('> Frugally is a shift-left FinOps platform for AWS. It helps teams automate cloud cost savings by scheduling start, stop, and scale actions on AWS resources; gain intelligence into AWS spending with cost analysis and anomaly detection; and govern infrastructure changes through approval workflows, budgets, and compliance scans. It integrates natively with Slack and GitHub.');
lines.push('');
lines.push('> Website: https://frugally.app');
lines.push('> Dashboard: https://dashboard.frugally.app');
lines.push('> Documentation: https://frugally.app/docs');
lines.push('> Status: https://status.frugally.app');
lines.push('> Support: support@frugally.app');
lines.push('');

for (const [sectionTitle, files] of sections) {
  lines.push('---');
  lines.push('');
  lines.push(`## ${sectionTitle}`);
  lines.push('');

  for (const relPath of files) {
    const result = processFile(relPath);
    if (!result) continue;

    lines.push(`Source: ${result.url}`);
    lines.push('');
    lines.push(result.content);
    lines.push('');
    lines.push('');
  }
}

const output = lines.join('\n');
fs.writeFileSync(OUT_FILE, output, 'utf8');
console.log(`Wrote ${OUT_FILE} (${(output.length / 1024).toFixed(1)} KB, ${output.split('\n').length} lines)`);
