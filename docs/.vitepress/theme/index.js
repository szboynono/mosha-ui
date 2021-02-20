import DefaultTheme from 'vitepress/theme'
import mosha from '../../../src/index'
import './custom.css'
import ButtonDemo from './components/ButtonDemo.vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(mosha),
    app.component(ButtonDemo.name, ButtonDemo)
  }
}