import { ComponentPublicInstance, createVNode, render } from 'vue'
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

  const messageInstance = createVNode(Message, { id, message, type, timeout, offset: verticalOffset, onClose: close })

  render(messageInstance, container)
  instances.push(messageInstance);
  document.body.appendChild(container)

  return {
    close: () => (messageInstance.component?.proxy as ComponentPublicInstance<{visible: boolean;}>).visible = false,
  }
}

const close = (id: number) => {
  const instanceIndex = instances.findIndex(instance => instance.component.props.id === id)

  if(instanceIndex === -1) return;

  const currentInstance = instances[instanceIndex]
  const instanceOffset  = currentInstance.el.offsetHeight;
  instances.splice(instanceIndex, 1);
  console.log(instances)
  // const len = instances.length
  // if (len < 1) return
  // for (let i = instanceIndex; i < len; i++) {
  //   const pos =
  //     parseInt(instances[i].el.style['top'], 10) - instanceOffset - 16

  //   instances[i].component.props.offset = pos
  // }
}


