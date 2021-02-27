import { createVNode, render } from 'vue'
import Message from './MMessage.vue'

export type MessageType = 'success' | 'error' | 'default'

export interface MessageObject {
  messageVNode: any
  container: HTMLDivElement;
}

const messages: MessageObject[] = [];
let msgId = 0;

export const createMessage = (message: string, type: MessageType, timeout = 5000) => {
  const id = msgId++;


  let verticalOffset = 20

  messages.forEach(({messageVNode}) => {
    const offsetHeight = (messageVNode.el as HTMLElement).offsetHeight
    verticalOffset += (offsetHeight || 0) + 16
  })
  verticalOffset += 16

  const container = document.createElement('div')
  document.body.appendChild(container);

  const messageVNode = createVNode(Message, 
    { 
      id, 
      message, 
      type, 
      timeout, 
      offset: verticalOffset, 
      visible: false,
      onClose: () => { close(id) } 
    }
  )
  
  render(messageVNode, container)
  messages.push({messageVNode, container});

  if(messageVNode.component) {
    messageVNode.component.props.visible = true
  }
}

const close = (id: number) => {
  const index = messages.findIndex(({messageVNode}) => id === messageVNode.props.id)
  if(!messages[index]) return;

  const { container, messageVNode } = messages[index] as MessageObject;

  if(!messageVNode.el) return;
  const height  = messageVNode.el.offsetHeight;

  if(!messageVNode.component) return ;
  messageVNode.component.props.visible = false;

  if (index === -1) return
  messages.splice(index, 1);

  setTimeout(() => {
    document.body.removeChild(container)
  }, 300)

  for (let i = index; i < messages.length; i++) {
    const { messageVNode } = messages[i] as MessageObject;

    if(!messageVNode.el) return;
    const pos = parseInt(messageVNode.el.style['top'], 10) - height - 16;

    if(!messageVNode.component) return;
    messageVNode.component.props.offset = pos
  }
}


