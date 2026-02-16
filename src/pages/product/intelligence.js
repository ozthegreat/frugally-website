import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './product.module.css';

const features = [
  {
    id: 'ai',
    title: 'AI Insights',
    description:
      'Get AI-powered analysis of your cloud costs using AWS Bedrock. Ask questions about your spending in natural language and receive actionable insights with safety rails to prevent unintended queries.',
    items: [
      'Natural language cost queries',
      'AI-powered analysis via AWS Bedrock',
      'Safety rails and query authorisation',
      'Cached results for fast repeat queries',
    ],
  },
  {
    id: 'explorer',
    title: 'Cost Explorer Dashboard',
    description:
      'An interactive cost analysis dashboard that goes beyond the AWS Console. Slice and dice your costs by service, account, tag, or custom dimensions with an intuitive interface.',
    items: [
      'Interactive cost analysis with filters',
      'Multi-dimensional breakdowns (service, account, tag)',
      'Budget tracking and comparison views',
      'Summary statistics and trend analysis',
    ],
  },
  {
    id: 'commitments',
    title: 'Commitment Utilisation',
    description:
      'Monitor your Reserved Instances and Savings Plans utilisation. Identify under-utilised commitments, track coverage gaps, and make informed purchasing decisions.',
    items: [
      'Reserved Instance utilisation tracking',
      'Savings Plans coverage analysis',
      'Under-utilisation identification',
      'Purchase recommendation insights',
    ],
  },
  {
    id: 'anomalies',
    title: 'Anomaly Detection',
    description:
      'Catch cost spikes before they become budget overruns. Frugally uses statistical baselines to detect unusual patterns in your cloud spending and alerts your team in real time.',
    items: [
      'Statistical baseline establishment',
      'Real-time anomaly alerting',
      'Multi-channel notifications (Email, Slack, SMS)',
      'Configurable sensitivity thresholds',
    ],
  },
  {
    id: 'monitoring',
    title: 'Baseline Monitoring',
    description:
      'Continuously monitor your cloud spend patterns against established baselines. Track execution health, credit consumption, and connection reliability with configurable alert severities.',
    items: [
      'Execution surge and failure spike detection',
      'Credit consumption monitoring',
      'Connection health tracking',
      'Alert severities: critical, high, medium, low',
    ],
  },
];

export default function IntelligencePage() {
  return (
    <Layout
      title="Intelligence — AI-Powered Cost Analytics"
      description="AI-powered cost insights, interactive dashboards, commitment utilisation analysis, and anomaly detection for your AWS cloud spend."
    >
      <header className={styles.hero} style={{ '--accent': '#a78bfa' }}>
        <div className="container">
          <span className={styles.heroBadge}>Intelligence</span>
          <h1 className={styles.heroTitle}>
            AI-Powered
            <br />
            Cost Analytics
          </h1>
          <p className={styles.heroSubtitle}>
            Understand your cloud spend with AI-powered insights, interactive dashboards,
            and anomaly detection. Monitor Reserved Instance and Savings Plans utilisation.
            Catch cost anomalies before they become budget overruns.
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: '#a78bfa', flexShrink: 0, marginTop: 2 }}>
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
              <h2>Unlock AI-powered cost intelligence</h2>
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
