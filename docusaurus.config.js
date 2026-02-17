// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frugally',
  tagline: 'Shift-Left FinOps Platform',
  favicon: 'img/frugally-favicon.ico',

  // Set the production url of your site here
  url: 'https://frugally.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ozthegreat', // Usually your GitHub org/user name.
  projectName: 'frugally-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Groups & Scopes → Roles & Access
          {
            from: '/docs/groups',
            to: '/docs/roles-and-access/groups',
          },
          {
            from: '/docs/scopes',
            to: '/docs/roles-and-access/scopes',
          },
          // Connections section → existing pages
          {
            from: '/docs/connections/overview',
            to: '/docs/getting-started/connecting-your-aws-accounts',
          },
          {
            from: '/docs/connections/organisation-setup',
            to: '/docs/getting-started/connecting-your-aws-accounts',
          },
          {
            from: '/docs/connections/standalone-setup',
            to: '/docs/getting-started/connecting-your-aws-accounts',
          },
          {
            from: '/docs/connections/iam-policies',
            to: '/docs/advanced/iam-role-permissions',
          },
          {
            from: '/docs/category/connections',
            to: '/docs/getting-started/connecting-your-aws-accounts',
          },
          // TODO (Phase 5): Uncomment when target pages are created
          // { from: '/docs/billing/what-are-the-payment-terms', to: '/docs/billing/payment-methods-and-invoices' },
          // { from: '/docs/billing/when-are-invocies-raised', to: '/docs/billing/payment-methods-and-invoices' },
          // { from: '/docs/billing/how-to-pay-an-invoice', to: '/docs/billing/payment-methods-and-invoices' },
          // { from: '/docs/advanced/whats-the-format-for-setting-executions-on-a-schedule', to: '/docs/advanced/schedule-format' },
          // { from: '/docs/connections/features', to: '/docs/automate/overview' },
          // { from: '/docs/connections/account-health', to: '/docs/troubleshooting/aws-connections' },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        style: 'primary',
        logo: {
          alt: 'frugally.app Logo',
          src: 'img/frugally-app-white.svg',
        },
        items: [
          {
            type: 'custom-megaMenu',
            position: 'left',
            label: 'Product',
          },
          {
            label: 'Pricing',
            to: '/pricing',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'docs-intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'html',
            position: 'right',
            value:
              '<a href="https://dashboard.frugally.app" class="navbar__link" style="color:#fff;font-weight:600;font-size:0.9rem;">Login</a>',
          },
          {
            type: 'custom-navbarCta',
            position: 'right',
            label: 'Start Free Trial',
            href: 'https://dashboard.frugally.app',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Guard',
                to: '/product/guard',
              },
              {
                label: 'Automate',
                to: '/product/automate',
              },
              {
                label: 'Intelligence',
                to: '/product/intelligence',
              },
              {
                label: 'Platform',
                to: '/product/platform',
              },
              {
                label: 'Pricing',
                to: '/pricing',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'FAQs',
                to: '/docs/category/faqs',
              },
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Roadmap',
                to: '/roadmap',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Use',
                to: '/terms',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Cookie Policy',
                to: '/cookie-policy',
              },
              {
                label: 'OAuth Permissions',
                to: '/oauth',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'support@frugally.app',
                href: 'mailto:support@frugally.app',
              },
            ],
          },
        ],
        logo: {
          alt: 'frugally.app',
          src: 'img/frugally-app-white.svg',
          width: 175,
        },
        copyright: `Copyright \u00A9 ${new Date().getFullYear()} Frugally, Inc. Made in London.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
