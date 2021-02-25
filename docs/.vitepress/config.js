module.exports = {
  base: '/mosha-ui/',
  title: 'Mosha UI',
  description: 'A glassmorphism inspired Vue 3 UI library',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round' }],
  ],

  themeConfig: {
    repo: 'szboynono/mosha-ui',
    logo: '/shangmian.png',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Getting Started', link: '/getting-started/introduction' },
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
        { text: 'Alert', link: '/components/alert' },
        { text: 'Button', link: '/components/button' },
        { text: 'Container', link: '/components/container' },
        { text: 'Message', link: '/components/message' },
      ]
    },
  ]
}
