module.exports = {
  base: '/mosha-ui/',
  title: 'Mosha UI',
  description: 'Just playing around.',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' }],
  ],

  themeConfig: {
    repo: 'szboynono/mosha-ui',
    // logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Getting Started',
      children: [
        { text: 'Introduction', link: '/getting-started/introduction' },
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Button', link: '/components/button' },
        { text: 'Alert', link: '/components/alert' },
      ]
    },
  ]
}
