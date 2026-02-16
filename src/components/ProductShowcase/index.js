import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const domains = [
  {
    id: 'guard',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: '#5b8def',
    title: 'Guard',
    tagline: 'Infrastructure Governance & Cost Attribution',
    description:
      'Approve infrastructure changes before they happen. Set budgets with real enforcement. Detect policy violations and assign compliance findings. Know exactly who owns every dollar of cloud spend.',
    features: [
      'Project approval workflows (draft, submitted, approved, executed)',
      'Budget enforcement modes: alert, restrict, or stop',
      'Policy violation detection with severity levels',
      'Cost attribution across 6 adapters (Tags, Terraform, CloudTrail, SSO, GitHub)',
      'FinOps maturity assessment and executive dashboards',
    ],
    image: '/img/product/guard-placeholder.svg',
    link: '/product/guard',
  },
  {
    id: 'automate',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: '#5dd39e',
    title: 'Automate',
    tagline: 'Cost Scheduling & Resource Management',
    description:
      'Schedule your non-production resources to run only when needed. Turn EC2, RDS, ECS, Lambda, NAT Gateways, and VPC Endpoints on and off automatically — or on-demand from Slack.',
    features: [
      'Schedule-based start/stop for 6 AWS resource types',
      'Ad-hoc actions directly from Slack',
      'Execution insights and analytics',
      'Up to 60% savings on non-production environments',
      'Guided target onboarding wizard',
    ],
    image: '/img/product/automate-placeholder.svg',
    link: '/product/automate',
  },
  {
    id: 'intelligence',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <line x1="9" y1="21" x2="15" y2="21" />
      </svg>
    ),
    color: '#a78bfa',
    title: 'Intelligence',
    tagline: 'AI-Powered Cost Analytics',
    description:
      'Understand your cloud spend with AI-powered insights, interactive dashboards, and anomaly detection. Monitor Reserved Instance and Savings Plans utilisation. Catch cost anomalies before they become budget overruns.',
    features: [
      'AI insights powered by AWS Bedrock',
      'Interactive Cost Explorer dashboard',
      'Commitment utilisation analysis (RI / Savings Plans)',
      'Anomaly detection and alerting',
      'Statistical baseline monitoring',
    ],
    image: '/img/product/intelligence-placeholder.svg',
    link: '/product/intelligence',
  },
];

function ProductDomain({ id, icon, color, title, tagline, description, features, image, link, reverse }) {
  return (
    <div className={`${styles.domain} ${reverse ? styles.domainReverse : ''}`}>
      <div className={styles.domainContent}>
        <div className={styles.domainBadge} style={{ color, backgroundColor: `${color}15` }}>
          {icon}
          <span>{title}</span>
        </div>
        <h3 className={styles.domainTagline}>{tagline}</h3>
        <p className={styles.domainDescription}>{description}</p>
        <ul className={styles.domainFeatures}>
          {features.map((feature) => (
            <li key={feature} className={styles.domainFeature}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.checkIcon} style={{ color }}>
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Link to={link} className={styles.domainLink} style={{ color }}>
          Learn more &rarr;
        </Link>
      </div>
      <div className={styles.domainImage}>
        <div className={styles.domainImagePlaceholder} style={{ borderColor: `${color}30` }}>
          <div className={styles.domainImageIcon} style={{ color, backgroundColor: `${color}10` }}>
            {icon}
          </div>
          <span className={styles.domainImageLabel}>Screenshot coming soon</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>One Platform. Three Domains.</h2>
          <p>
            Everything your team needs to take control of cloud costs, from governance
            to automation to intelligence.
          </p>
        </div>
        {domains.map((domain, idx) => (
          <ProductDomain key={domain.id} {...domain} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
