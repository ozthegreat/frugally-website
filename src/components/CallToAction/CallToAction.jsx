import * as React from 'react';
import styles from './styles.module.css';

export default function CallToAction() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 style={{ fontSize: '36px' }}>Call to Action</h3>
        <p style={{ maxWidth: 800 }}> Once you've worked through the getting started guide</p>
        <button className={styles.button}>My Action</button>
      </div>
      <img style={{ borderRadius: '10px' }} src="https://placehold.co/500x350" alt="cta" />
    </div>
  );
}
