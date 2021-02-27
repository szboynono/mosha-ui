import { createVNode, render } from 'vue'
import Message from './MMessage.vue'

export type MessageType = 'success' | 'error' | 'default'

const messages: any[] = [];
let msgId = 0;

export const createMessage = (message: string, type: MessageType, timeout = 2000) => {
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
    messageVNode.component.props.visible = true;
  }
}

const close = (id: number) => {
  const index = messages.findIndex(({messageVNode}) => id === messageVNode.props.id)
  const { container, messageVNode } = messages[index];
  const height  = messageVNode.el.offsetHeight;
  messageVNode.component.props.visible = false;
  console.log(messageVNode)
  if (index === -1) return
  messages.splice(index, 1);
  // document.body.removeChild(container)

  // for (let i = index; i < messages.length; i++) {
  //   const { messageVNode } = messages[i];
  //   const pos = parseInt(messageVNode.el.style['top'], 10) - height - 16;
  //   messageVNode.component.props.offset = pos
  // }
}


