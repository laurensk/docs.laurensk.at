module.exports = {
  title: 'Laurens Kropf',
  tagline: 'Find tutorials, tips and much more.',
  url: 'https://docs.laurensk.at/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'laurensk',
  projectName: 'docs.laurensk.at',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Laurens Kropf',
      logo: {
        alt: 'Laurens Kropf',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://www.laurensk.at',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'mailto:hello@laurensk.at',
          label: 'Contact',
          position: 'right',
        },
        {
          href: 'https://github.com/laurensk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: 'https://legal.laurensk.at/privacy-policy/',
            },
            {
              label: 'Terms',
              href: 'https://legal.laurensk.at/terms-and-conditions/',
            },
            {
              label: 'Imprint',
              href: 'https://legal.laurensk.at/imprint/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Laurens Kropf`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/laurensk/docs.laurensk.at/edit/master/docs/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
