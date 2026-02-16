import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const icons = {
  guard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  automate: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  intelligence: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="9" y1="21" x2="15" y2="21" />
      <line x1="10" y1="24" x2="14" y2="24" />
    </svg>
  ),
};

const accentColors = {
  guard: '#5b8def',
  automate: '#5dd39e',
  intelligence: '#a78bfa',
};

export default function MenuColumn({ id, title, subtitle, items }) {
  const icon = icons[id];
  const color = accentColors[id];

  return (
    <div className={styles.menuColumn}>
      <div className={styles.menuColumnHeader}>
        <span className={styles.menuColumnIcon} style={{ color, backgroundColor: `${color}15` }}>
          {icon}
        </span>
        <div>
          <h4 className={styles.menuColumnTitle}>{title}</h4>
          <p className={styles.menuColumnSubtitle}>{subtitle}</p>
        </div>
      </div>
      <ul className={styles.menuColumnList}>
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className={styles.menuColumnLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/product/${id}`} className={styles.menuColumnLearnMore} style={{ color }}>
        Learn more &rarr;
      </Link>
    </div>
  );
}
