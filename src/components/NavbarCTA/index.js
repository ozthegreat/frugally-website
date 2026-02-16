import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function NavbarCTA({ label, href }) {
  return (
    <Link href={href || 'https://dashboard.frugally.app'} className={styles.navbarCta}>
      {label || 'Start Free Trial'}
    </Link>
  );
}
