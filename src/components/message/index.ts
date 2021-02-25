import { App, Plugin } from 'vue';
import { createMessage } from './createMessage';
import Message from './MMessage.vue';

export const messagePlugin: Plugin = {
  install: (app: App): void => {
    app.component(Message.name, Message)
    app.config.globalProperties.$MMessage = createMessage
  }
}

export * from './createMessage';
export default Message;