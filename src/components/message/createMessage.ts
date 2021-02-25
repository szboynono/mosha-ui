import { ComponentPublicInstance, createApp } from 'vue'
import Message from './MMessage.vue'

export type MessageType = 'success' | 'error' | 'default'

const _messages: ComponentPublicInstance[]  = [];

export const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)

  const messageInstance = createApp(Message, {
    message,
    type
  })
  const mountedInstance = messageInstance.mount(mountNode)
  
  _messages.push(mountedInstance);
  console.log(_messages.length)

  setTimeout(() => {
    const foundIndex = _messages.findIndex((instance: ComponentPublicInstance) => {
      instance === mountedInstance
    })
    console.log(foundIndex)
    messageInstance.unmount(mountNode)
    document.body.removeChild(mountNode)
  }, timeout)
}

