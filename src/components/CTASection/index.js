import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Ready to Take Control of Your Cloud Costs?
          </h2>
          <p className={styles.ctaDescription}>
            Start with a free account. Set up your first schedule in minutes.
            No credit card required.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={styles.ctaPrimary}
              href="https://dashboard.frugally.app"
            >
              Start Free Trial
            </Link>
            <Link
              className={styles.ctaSecondary}
              href="mailto:support@frugally.app"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
