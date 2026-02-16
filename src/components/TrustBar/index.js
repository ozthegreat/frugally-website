import React from 'react';
import styles from './styles.module.css';

const stats = [
  { value: '60%', label: 'Average cost savings' },
  { value: '6', label: 'AWS resource types' },
  { value: 'Minutes', label: 'To first schedule' },
];

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className="container">
        <p className={styles.trustLabel}>Trusted by teams managing AWS at scale</p>
        <div className={styles.trustStats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.trustStat}>
              <span className={styles.trustStatValue}>{stat.value}</span>
              <span className={styles.trustStatLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
