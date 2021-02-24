import { App, Plugin } from 'vue';
import Container from './MContainer.vue';

export const containerPlugin: Plugin = {
  install: (app: App): void => {
    app.component(Container.name, Container)
  }
}

export default Container;