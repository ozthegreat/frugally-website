// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frugally for Slack',
  tagline: 'Be Cloud Frugal',
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
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

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
        // title: 'frugally.app',
        logo: {
          alt: 'frugallyy.app Logo',
          src: 'img/frugally-app-white.svg',
        },
        items: [
          {
            label: 'Pricing',
            to: '/pricing',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'docs-intro',
            position: 'right',
            label: 'Documentation',
          },
          {
            type: 'html',
            position: 'right',
            value:
              '<a href="https://app.frugally.app/slack/install" style="align-items:center;color:#fff;background-color:#303846;border:0;border-radius:44px;display:inline-flex;font-family:Lato, sans-serif;font-size:14px;font-weight:600;height:44px;justify-content:center;text-decoration:none;width:204px"><svg xmlns="http://www.w3.org/2000/svg" style="height:16px;width:16px;margin-right:12px" viewBox="0 0 122.8 122.8"><path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path><path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path><path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path><path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path></svg>Add to Slack</a>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                    <a href="https://frugally.app" aria-label="frugally.app">
                    <img src="/img/frugally-app-white.svg" alt="frugally.app" width="175" />
                    </a>
                  `,
              },
            ],
          },
          {
            // title: 'Docs',
            items: [
              {
                label: 'FAQs',
                to: '/docs/category/faqs',
              },
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Roadmap',
                to: '/roadmap',
              },
              {
                label: 'OAuth Permissions',
                to: '/oauth',
              },
            ],
          },
          {
            // title: 'More',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                to: '/terms',
                label: 'Terms of Use',
              },
              {
                to: '/privacy',
                label: 'Privacy Policy',
              },
              {
                to: '/cookie-policy',
                label: 'Cookie Policy',
              },
            ],
          },
          {
            items: [
              {
                label: 'support@frugally.app',
                href: 'mailto:support@frugally.app',
                className: 'primary bold',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} frugallyy.app, Inc. Made in London.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
