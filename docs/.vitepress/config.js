module.exports = {
  base: '/mosha-ui/',
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    repo: '',
    docsDir: 'docs',

    lastUpdated: 'Last Updated',

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
      ]
    },
  ]
}
