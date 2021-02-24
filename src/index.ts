import { App } from 'vue'
import Button from './components/button'
import Alert from './components/alert'
import Container from './components/container'
import './styles/index.scss';

export const sum = (a: number, b: number) => a + b

const components = [
  Button,
  Alert,
  Container
]

const install = (Vue: App) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }

export { buttonPlugin as Button } from './components/button'
export { alertPlugin as Alert } from './components/alert'
export { containerPlugin as Container } from './components/container'
