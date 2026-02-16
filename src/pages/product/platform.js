import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './product.module.css';

const features = [
  {
    id: 'sso-scim',
    title: 'SSO & SCIM',
    badge: 'Enterprise',
    description:
      'Enterprise-grade identity management with SAML 2.0 single sign-on and SCIM 2.0 automated provisioning. Support for multiple identity providers via domain routing, certificate rotation with expiry notifications, and emergency bypass recovery.',
    items: [
      'SAML 2.0 SSO with multi-IdP support',
      'Domain-based IdP routing',
      'SCIM 2.0 user and group provisioning',
      'Certificate rotation with expiry alerts',
      'Emergency bypass admin for recovery',
      'Diagnostic logging for troubleshooting',
    ],
  },
  {
    id: 'audit-logs',
    title: 'Audit Logs',
    description:
      'Comprehensive activity logging for every action across your organisation. Export audit logs for compliance reporting, track user activity, and maintain a complete history of all changes.',
    items: [
      'Full activity trail for all user actions',
      'Exportable audit logs (background processing)',
      'User activity tracking and reporting',
      'Compliance-ready export formats',
    ],
  },
  {
    id: 'github-iac',
    title: 'GitHub & IaC Scanning',
    description:
      'Connect your GitHub repositories and scan for Terraform and CloudFormation infrastructure-as-code. Detect drift between your IaC definitions and actual AWS state. Get AI-powered issue classification and track PR authorship for cost attribution.',
    items: [
      'GitHub App integration with webhook processing',
      'Terraform and CloudFormation scanning',
      'Infrastructure drift detection (IaC vs AWS state)',
      'AI-powered issue classification via Bedrock',
      'PR review tracking for cost attribution',
      'Circuit breaker health monitoring',
    ],
  },
  {
    id: 'groups-rbac',
    title: 'Groups & RBAC',
    description:
      'Fine-grained role-based access control with groups and scopes. Assign permissions at the team level and sync groups automatically from Slack user groups and GitHub teams.',
    items: [
      'Role-based access: Admin, Writer, Executor, Billing, Viewer',
      'Custom groups with fine-grained scopes',
      'Automatic Slack user group sync',
      'Automatic GitHub team sync',
      'Environment-level access restrictions',
    ],
  },
  {
    id: 'notifications',
    title: 'Multi-Channel Notifications',
    description:
      'Stay informed with notifications across Email, Slack, and SMS. Configure subscriber preferences, set up anomaly alerts, and receive critical notifications for executions, violations, budget thresholds, and more.',
    items: [
      'Email, Slack, and SMS channels',
      'Subscriber preferences per notification type',
      'Execution status and failure alerts',
      'Budget threshold and violation notifications',
      'Scan and drift detection alerts',
      'Certificate expiry reminders',
    ],
  },
  {
    id: 'aws-connections',
    title: 'AWS Connections & Inventory',
    description:
      'Connect multiple AWS accounts with cross-account IAM roles. Automatically discover resources across regions, cache inventory with tag classification, and monitor connection health.',
    items: [
      'Multi-account AWS connections',
      'Cross-account IAM role assumption',
      'Automatic resource discovery across 11 service types',
      'Region auto-discovery',
      'Inventory caching with confidence scoring',
      'Connection health monitoring',
    ],
  },
];

export default function PlatformPage() {
  return (
    <Layout
      title="Platform — Enterprise Features"
      description="Enterprise-ready platform with SSO/SCIM, audit logs, GitHub IaC scanning, RBAC, multi-channel notifications, and multi-tenancy."
    >
      <header className={styles.hero} style={{ '--accent': '#5dd39e' }}>
        <div className="container">
          <span className={styles.heroBadge}>Platform</span>
          <h1 className={styles.heroTitle}>
            Enterprise-Ready
            <br />
            Platform
          </h1>
          <p className={styles.heroSubtitle}>
            Built for teams that need security, compliance, and control at scale.
            SSO, audit logs, IaC scanning, RBAC, and multi-channel notifications
            come standard.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.heroPrimary} href="https://dashboard.frugally.app">
              Start Free Trial
            </Link>
            <Link className={styles.heroSecondary} to="/docs">
              Read the Docs
            </Link>
          </div>
        </div>
      </header>

      <main>
        {features.map((feature, idx) => (
          <section
            key={feature.id}
            id={feature.id}
            className={`${styles.featureSection} ${idx % 2 === 1 ? styles.featureSectionAlt : ''}`}
          >
            <div className="container">
              <div className={styles.featureTitleRow}>
                <h2 className={styles.featureTitle}>{feature.title}</h2>
                {feature.badge && <span className={styles.featureBadge}>{feature.badge}</span>}
              </div>
              <p className={styles.featureDescription}>{feature.description}</p>
              <ul className={styles.featureList}>
                {feature.items.map((item) => (
                  <li key={item} className={styles.featureItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: '#5dd39e', flexShrink: 0, marginTop: 2 }}>
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2>Ready for enterprise-grade cloud cost management?</h2>
              <p>Free to get started. No credit card required.</p>
              <Link className={styles.ctaButton} href="https://dashboard.frugally.app">
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
