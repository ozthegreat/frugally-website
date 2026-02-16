import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function MenuFooter({ items }) {
  return (
    <div className={styles.megaMenuFooter}>
      <span className={styles.megaMenuFooterLabel}>Platform</span>
      <div className={styles.megaMenuFooterLinks}>
        {items.map((item) => (
          <Link key={item.label} to={item.to} className={styles.megaMenuFooterLink}>
            {item.label}
            {item.badge && <span className={styles.megaMenuFooterBadge}>{item.badge}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
