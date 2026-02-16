import React from 'react';
import styles from './styles.module.css';

const integrations = [
  {
    name: 'AWS',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M13.2 17.7l-1.6 5.2h3.2l-1.6-5.2zM20 4C11.2 4 4 11.2 4 20s7.2 16 16 16 16-7.2 16-16S28.8 4 20 4zm5.6 24.8l-1.2-3.2h-5.2l-1.2 3.2h-2.4l5.2-14h2l5.2 14h-2.4z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: 'Slack',
    icon: (
      <svg width="40" height="40" viewBox="0 0 122.8 122.8">
        <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"/>
        <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"/>
        <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"/>
        <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#333">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Terraform',
    icon: (
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
        <polygon points="22.4,8 38.4,17.3 38.4,35.8 22.4,26.5" fill="#5C4EE5"/>
        <polygon points="40.8,17.3 56.8,26.5 56.8,45 40.8,35.8" fill="#5C4EE5"/>
        <polygon points="7.2,26.5 22.4,35.8 22.4,54.2 7.2,45" fill="#5C4EE5" opacity="0.6"/>
        <polygon points="22.4,35.8 38.4,45 38.4,63.5 22.4,54.2" fill="#5C4EE5"/>
      </svg>
    ),
  },
  {
    name: 'CloudFormation',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4l14 8v16l-14 8L6 28V12l14-8z" fill="#E7157B" opacity="0.85"/>
        <path d="M20 10l8 4.6v9.2L20 28.4l-8-4.6v-9.2L20 10z" fill="#fff" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Okta',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="12" fill="none" stroke="#007DC1" strokeWidth="4"/>
        <circle cx="20" cy="20" r="4" fill="#007DC1"/>
      </svg>
    ),
  },
  {
    name: 'Entra ID',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 12l14-8 14 8-14 8-14-8z" fill="#0078D4" opacity="0.8"/>
        <path d="M6 12v12l14 8V20L6 12z" fill="#0078D4" opacity="0.6"/>
        <path d="M34 12v12l-14 8V20l14-8z" fill="#0078D4"/>
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section className={styles.integrations}>
      <div className="container">
        <h2 className={styles.title}>Works With Your Stack</h2>
        <p className={styles.subtitle}>
          Native integrations with the tools your team already uses.
        </p>
        <div className={styles.logos}>
          {integrations.map((integration) => (
            <div key={integration.name} className={styles.logo}>
              <div className={styles.logoIcon}>{integration.icon}</div>
              <span className={styles.logoLabel}>{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
