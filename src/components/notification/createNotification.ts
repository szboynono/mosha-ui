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

  const { title, description, type = 'default', timeout = 5000, closable = false, onClose } = options;

  const notificationVNode = createVNode(Notification,
    {
      id,
      title,
      description,
      type,
      timeout,
      closable,
      offset: verticalOffset,
      visible: false,
      position,
      onClose,
      onCloseHandler: () => { close(id) }
    }
  )

  render(notificationVNode, container)

  notifications[position].push({ notificationVNode, container });

  if (notificationVNode.component) {
    notificationVNode.component.props.visible = true
  }
}

const close = (id: number) => {
  console.log(id)
}
