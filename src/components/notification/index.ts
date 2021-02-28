import { App, Plugin } from 'vue';
import { createNotification } from './createNotification';
import Notification from './MNotification.vue';

export const notificationPlugin: Plugin = {
  install: (app: App): void => {
    app.component(Notification.name, Notification)
    app.config.globalProperties.$MNotification = createNotification
  }
}

export * from './createNotification';
export default Notification;