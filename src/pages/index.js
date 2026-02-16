import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import ProductShowcase from '../components/ProductShowcase';
import PlatformFeatures from '../components/PlatformFeatures';
import Integrations from '../components/Integrations';
import MetricsSection from '../components/MetricsSection';
import CTASection from '../components/CTASection';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Shift-Left FinOps Platform"
      description="Frugally is a shift-left FinOps platform that brings infrastructure governance, cost scheduling, and AI-powered analytics into one platform for AWS."
    >
      <HeroSection />
      <main>
        <TrustBar />
        <ProductShowcase />
        <PlatformFeatures />
        <Integrations />
        <MetricsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
