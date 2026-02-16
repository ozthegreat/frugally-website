import React from 'react';
import styles from './styles.module.css';

const metrics = [
  { value: '60%', label: 'Average savings on non-production AWS costs' },
  { value: '6', label: 'AWS resource types automated' },
  { value: 'Minutes', label: 'From install to first savings' },
];

export default function MetricsSection() {
  return (
    <section className={styles.metrics}>
      <div className="container">
        <div className={styles.grid}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
