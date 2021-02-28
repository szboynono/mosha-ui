import DefaultTheme from 'vitepress/theme'
import mosha from '../../../src/index'
import './custom.css'
import ButtonDemo from './components/ButtonDemo.vue'
import AlertDemo from './components/AlertDemo.vue'
import ContainerDemo from './components/ContainerDemo.vue'
import MessageDemo from './components/MessageDemo.vue'
import NotificationDemo from './components/NotificationDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(mosha),
    app.component(ButtonDemo.name, ButtonDemo),
    app.component(AlertDemo.name, AlertDemo),
    app.component(ContainerDemo.name, ContainerDemo),
    app.component(MessageDemo.name, MessageDemo)
    app.component(NotificationDemo.name, NotificationDemo)
  }
}