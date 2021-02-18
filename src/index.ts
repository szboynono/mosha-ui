import { App } from 'vue'
import Button from './components/button'
import './styles/index.scss';

export const sum = (a: number, b: number) => a + b

const components = [
  Button
]

const install = (Vue: App) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install }

export { default as Button } from './components/button'