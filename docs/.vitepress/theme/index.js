import DefaultTheme from 'vitepress/theme'
import mosha from '../../../src/index'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(mosha)
  }
}