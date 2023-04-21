import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Unexpected Error" description="Unexpected Error">
      <div class="container margin-vert--xl">
        <div class="row">
          <div class="col col--8 col--offset-2">
            <h1 class="hero__title">Unexpected Error</h1>
            <p>We're sorry but an unexpected error occured.</p>
            <p>Please try the action again or contact our support at support@frugally.app</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}