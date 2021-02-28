import { App } from 'vue'
import Button from './components/button'
import Alert from './components/alert'
import Container from './components/container'
import Message, { createMessage } from './components/message'
import Notification, { createNotification } from './components/notification'
import './styles/index.scss';

export const sum = (a: number, b: number) => a + b

const components = [
  Button,
  Alert,
  Container,
  Message,
  Notification
]

const install = (Vue: App) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.config.globalProperties.$MMessage = createMessage
  Vue.config.globalProperties.$MNotification = createNotification
  Vue.provide('$MMessage', createMessage)
  Vue.provide('$MNotification', createNotification)
}

export default { install }

export { createMessage } from './components/message'
export { createNotification } from './components/notification'

export { buttonPlugin as Button } from './components/button'
export { alertPlugin as Alert } from './components/alert'
export { containerPlugin as Container } from './components/container'
export { messagePlugin as Message } from './components/message'
