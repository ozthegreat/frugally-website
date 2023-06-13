import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Save money on your<br />AWS bill!</h1>
        {/* <p className="hero__subtitle">Shut down your infrastructure when it's not in use. <br />All controlled straight from Slack.</p> */}
        <p className="hero__subtitle">Turn off your AWS dev instances when they're not needed. Turn them on again when they are.<br />All controlled straight from Slack.</p>
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function GridBlock() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col')}>
            <div className="text--center padding-horiz--md">
              <h3>Yay a title</h3>
              <p>Yay a description</p>
            </div>
          </div>
          <div className={clsx('col')}>
            <div className="text--center padding-horiz--md">
              <h3></h3>
              <p>Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <GridBlock />
      </main>
    </Layout>
  );
}
