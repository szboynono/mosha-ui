import { App, Plugin } from 'vue';
import Button from './MButton.vue';

export const buttonPlugin: Plugin = {
  install: (app: App): void => {
    app.component(Button.name, Button)
  }
}

export default Button;