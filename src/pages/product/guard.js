import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './product.module.css';

const features = [
  {
    id: 'governance',
    title: 'Project Governance',
    description:
      'Define infrastructure projects with versioned snapshots. Track changes through a full lifecycle — draft, submitted, approved, and executed — with complete audit trails at every step.',
    items: [
      'Versioned project snapshots with full history',
      'Multi-step approval workflows',
      'Break-glass emergency access with audit logging',
      'Public share links for stakeholder review',
    ],
  },
  {
    id: 'budgets',
    title: 'Budget Management',
    description:
      'Set budgets at the team or project level with configurable enforcement. Get alerts before overspend happens, and optionally restrict or stop deployments that would exceed thresholds.',
    items: [
      'Team and project-level budgets with monthly tracking',
      'Enforcement modes: alert, restrict, or stop',
      'Budget vs actual reconciliation',
      'Projected spend analysis',
    ],
  },
  {
    id: 'compliance',
    title: 'Policy & Compliance',
    description:
      'Detect policy violations automatically with severity-based classification. Assign findings to owners, track remediation progress, and maintain compliance posture over time.',
    items: [
      'Automated violation detection (critical, high, medium, low)',
      'Compliance scanning with configurable rules',
      'Finding assignment and remediation tracking',
      'Resource locking to prevent unauthorised changes',
    ],
  },
  {
    id: 'attribution',
    title: 'Cost Attribution',
    description:
      'Know exactly who owns every dollar of cloud spend. Frugally combines six attribution adapters to map costs to teams, projects, and individuals with high confidence.',
    items: [
      'Project-based attribution',
      'AWS Tags and Terraform state mapping',
      'CloudTrail and SSO identity tracking',
      'GitHub authorship for IaC changes',
      'Unattributed cost tracking and escalation',
    ],
  },
  {
    id: 'maturity',
    title: 'FinOps Maturity Assessment',
    description:
      'Measure your organisation\'s FinOps maturity from Level 0 (Immature) through Level 5 (Optimised). Get actionable improvement recommendations and track progress with executive dashboards.',
    items: [
      'Maturity scoring across multiple dimensions',
      'Signal collection and posture snapshots',
      'AI-powered improvement recommendations',
      'Executive dashboard with posture trends',
    ],
  },
];

export default function GuardPage() {
  return (
    <Layout
      title="Guard — Infrastructure Governance & Cost Attribution"
      description="Govern infrastructure changes, set budgets with real enforcement, detect policy violations, and attribute every dollar of cloud spend."
    >
      <header className={styles.hero} style={{ '--accent': '#5b8def' }}>
        <div className="container">
          <span className={styles.heroBadge}>Guard</span>
          <h1 className={styles.heroTitle}>
            Infrastructure Governance
            <br />& Cost Attribution
          </h1>
          <p className={styles.heroSubtitle}>
            Approve infrastructure changes before they happen. Set budgets with real
            enforcement. Detect policy violations and assign compliance findings. Know
            exactly who owns every dollar of cloud spend.
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
              <h2 className={styles.featureTitle}>{feature.title}</h2>
              <p className={styles.featureDescription}>{feature.description}</p>
              <ul className={styles.featureList}>
                {feature.items.map((item) => (
                  <li key={item} className={styles.featureItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: '#5b8def', flexShrink: 0, marginTop: 2 }}>
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
              <h2>Start governing your cloud infrastructure today</h2>
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
