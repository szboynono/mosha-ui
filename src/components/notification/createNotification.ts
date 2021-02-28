import { createVNode, render } from 'vue'
import Notification from './MNotification.vue'
import { NotificationType, Position } from './types';

export interface NotificationObject {
  notificationVNode: any
  container: HTMLDivElement;
}

export interface NotificationOptions {
  title: string,
  description?: string,
  type?: NotificationType,
  timeout?: number,
  closable?: Boolean,
  position?: Position,
  showIcon?: Boolean,
  onClose?: () => void
}

const notifications: Record<Position, NotificationObject[]> = {
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
}

let notificationId = 0;

export const createNotification = (options: NotificationOptions) => {
  const id = notificationId++;
  const position = options.position || 'top-right'
  let verticalOffset = 0

  notifications[position].forEach(({ notificationVNode }) => {
    const offsetHeight = (notificationVNode.el as HTMLElement).offsetHeight
    verticalOffset += (offsetHeight || 0) + 16
  })
  
  verticalOffset += 16

  const container = document.createElement('div')
  document.body.appendChild(container);

  const { title, description, type = 'default', timeout = 5000, closable, showIcon, onClose } = options;

  const notificationVNode = createVNode(Notification,
    {
      id,
      title,
      description,
      type,
      timeout,
      closable,
      showIcon,
      offset: verticalOffset,
      visible: false,
      position,
      onClose,
      onCloseHandler: () => { close(id, position) }
    }
  )

  render(notificationVNode, container)

  notifications[position].push({ notificationVNode, container });

  if (notificationVNode.component) {
    notificationVNode.component.props.visible = true
  }
}

const close = (id: number, position: Position) => {
  const notificationPositionArr = notifications[position];

  const index = notificationPositionArr.findIndex(({ notificationVNode }) => id === notificationVNode.props.id)

  if (index === -1) return ;
  const { container, notificationVNode } = notificationPositionArr[index] as NotificationObject;
  
  const height = notificationVNode.el.offsetHeight;

  notifications[position].splice(index, 1)
  notificationVNode.component.props.visible = false;

  setTimeout(() => {
    render(null, container)
    document.body.removeChild(container)
  }, 300)

  for (let i = index; i < notificationPositionArr.length; i++) {
    const { notificationVNode } = notificationPositionArr[i] as NotificationObject;

    if (!notificationVNode.el) return;
    
    const verticalPos: string = position.split('-')[0] || 'top'
    const pos = parseInt(notificationVNode.el.style[verticalPos], 10) - height - 16;

    if (!notificationVNode.component) return;
    notificationVNode.component.props.offset = pos
  }
}
