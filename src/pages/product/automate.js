import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './product.module.css';

const features = [
  {
    id: 'scheduling',
    title: 'Resource Scheduling',
    description:
      'Create cron-based schedules to start and stop AWS resources automatically. Support for EC2, RDS, ECS, Lambda, NAT Gateways, and VPC Endpoints — with timezone-aware scheduling and one-time or recurring patterns.',
    items: [
      'Six AWS resource types: EC2, RDS, ECS, Lambda, NAT Gateway, VPC Endpoint',
      'Flexible scheduling: one-time, hourly, daily, weekly, monthly',
      'Timezone-aware execution',
      'Tag-based resource targeting',
    ],
  },
  {
    id: 'adhoc',
    title: 'Ad-hoc Actions from Slack',
    description:
      'Need to turn something on outside the schedule? Run ad-hoc executions directly from Slack with slash commands and interactive buttons. Results are posted to any channel you choose.',
    items: [
      'Slash commands for instant actions',
      'Interactive Slack buttons and modals',
      'Results posted to public or private channels',
      'Reaction and mention-based triggers',
    ],
  },
  {
    id: 'analytics',
    title: 'Execution Analytics',
    description:
      'Track every execution with detailed results. See which resources were affected, when actions ran, success rates, and any errors — all with exportable reports.',
    items: [
      'Detailed execution history with per-resource results',
      'Success, partial failure, and failure tracking',
      'Exportable execution reports',
      'Execution health dashboard',
    ],
  },
  {
    id: 'savings',
    title: 'Savings Tracking',
    description:
      'See exactly how much money you\'re saving. Frugally estimates savings based on instance types, running hours, and actual execution data — with confidence scoring to show you how reliable those estimates are.',
    items: [
      'Estimated savings per schedule and per target',
      'Projected monthly savings calculator',
      'Confidence scoring (high, medium, low)',
      'Savings charts and trends over time',
    ],
  },
  {
    id: 'onboarding',
    title: 'Target Onboarding',
    description:
      'Get started quickly with a guided onboarding wizard. Connect your AWS accounts, discover resources by tags, and create your first schedule in minutes.',
    items: [
      'Step-by-step onboarding wizard',
      'AWS resource discovery with tag filtering',
      'AI-powered target recommendations',
      'First-execution celebration notifications',
    ],
  },
];

export default function AutomatePage() {
  return (
    <Layout
      title="Automate — Cost Scheduling & Resource Management"
      description="Schedule-based start/stop for EC2, RDS, ECS, Lambda, NAT Gateways, and VPC Endpoints. Save up to 60% on non-production AWS costs."
    >
      <header className={styles.hero} style={{ '--accent': '#5dd39e' }}>
        <div className="container">
          <span className={styles.heroBadge}>Automate</span>
          <h1 className={styles.heroTitle}>
            Cost Scheduling &<br />
            Resource Management
          </h1>
          <p className={styles.heroSubtitle}>
            Schedule your non-production resources to run only when needed. Turn EC2,
            RDS, ECS, Lambda, NAT Gateways, and VPC Endpoints on and off automatically
            — or on-demand from Slack.
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
              <h2>Start saving on your AWS bill today</h2>
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
