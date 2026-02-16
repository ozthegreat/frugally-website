import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className={styles.heroBadge}>Shift-Left FinOps Platform</span>
        <h1 className={styles.heroTitle}>
          Govern, Automate, and Optimise
          <br />
          Your Cloud Costs
        </h1>
        <p className={styles.heroSubtitle}>
          Frugally brings infrastructure governance, cost scheduling, and AI-powered
          analytics into a single platform &mdash; so your team catches cost issues
          before they reach production.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={styles.heroPrimary}
            href="https://dashboard.frugally.app"
          >
            Start Free Trial
          </Link>
          <Link className={styles.heroSecondary} to="/docs">
            Read the Docs
          </Link>
        </div>
      </div>
    </header>
  );
}
