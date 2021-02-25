import { createApp, createVNode, render } from 'vue'
import Container from '../container';
import Message from './MMessage.vue'

export type MessageType = 'success' | 'error' | 'default'

const instances: any[] = [];
let msgId = 0;

export const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const id = msgId++;


  let verticalOffset = 20
  instances.forEach((instance: any) => {
    const offsetHeight = instance.el.offsetHeight
    verticalOffset += (offsetHeight || 0) + 16
  })
  verticalOffset += 16

  const container = document.createElement('div')

  const messageInstance = createVNode(Message, { id, message, type, timeout, offset: verticalOffset })

  render(messageInstance, container)
  instances.push(messageInstance);
  document.body.appendChild(container)
  // setTimeout(() => {
  //   messageInstance.unmount(mountNode)
  //   document.body.removeChild(mountNode)
  // }, timeout)
}


