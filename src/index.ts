import { App } from 'vue'
import Button from './components/button'
import Alert from './components/alert'
import Container from './components/container'
import Message, { createMessage } from './components/message'
import './styles/index.scss';

export const sum = (a: number, b: number) => a + b

const components = [
  Button,
  Alert,
  Container,
  Message
]

const install = (Vue: App) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.config.globalProperties.$MMessage = createMessage
  Vue.provide('$MMessage', createMessage)
}

export default { install }

export { createMessage } from './components/message'

export { buttonPlugin as Button } from './components/button'
export { alertPlugin as Alert } from './components/alert'
export { containerPlugin as Container } from './components/container'
export { messagePlugin as Message } from './components/message'
