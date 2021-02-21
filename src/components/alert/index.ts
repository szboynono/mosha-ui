import { App, Plugin } from 'vue';
import Alert from './MAlert.vue';

export const alertPlugin: Plugin = {
  install: (app: App): void => {
    app.component(Alert.name, Alert)
  }
}

export default Alert;