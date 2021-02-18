import { App } from 'vue';
import Button from './MButton.vue';

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button;