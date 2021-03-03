# Notification

Display a notification at a corner of the page

## Basic usage

The notification will dismiss itself after 5 seconds by default. If you don't want this behaviour you can override it with the `timeout` property in the global method. Setting it to `timeout: 0` will prevent the notification from dispearing automatically.

<NotificationDemo mode="basic" />

```ts
<template>
  <m-button @click="showNotificationCloseAuto" type="primary" outline>
      Disappears after 5s
  </m-button>
  <m-button @click="showNotificationStay" type="primary" outline>
      Won't disappear automatically
  </m-button>
</template>

<script>
import { createNotification } from 'mosha-ui'
export default {
    name: 'NotificationDemo',
    setup() {
        const showNotificationCloseAuto = () => {
            createNotification({
                title: 'This is a title',
                description: 'This will go away after 5s',
            })
        }

        const showNotificationStay = () => {
            createNotification({
                title: 'This is a title',
                description: 'This will stay until you click the close button',
                timeout: 0,
            })
        }

        return { showNotificationCloseAuto, showNotificationStay}
    }
}
</script>
```
## With types

<NotificationDemo mode="types" />

```ts
<template>
  <m-button @click="showNotificationSuccess" type="success" outline>
      Success
  </m-button>
  <m-button @click="showNotificationWarning" type="warning" outline>
      Warning
  </m-button>
  <m-button @click="showNotificationInfo" type="primary" outline>
      Info
  </m-button>
  <m-button @click="showNotificationDanger" type="danger" outline>
      Danger
  </m-button>
</template>

<script>
import { createNotification } from 'mosha-ui'
export default {
  setup() {
    const showNotificationSuccess = () => {
      createNotification({
        title: 'Success',
        description: 'This is a description',
        type: 'success',
      })
    }
    const showNotificationWarning = () => {
      createNotification({
        title: 'Warning',
        description: 'This is a description',
        type: 'warning',
      })
    }
    const showNotificationInfo = () => {
      createNotification({
        title: 'Info',
        description: 'This is a description',
        type: 'info',
      })
    }
    const showNotificationDanger = () => {
      createNotification({
        title: 'Danger',
        description: 'This is a description',
        type: 'danger',
      })
    }
    return { showNotificationSuccess, showNotificationWarning, showNotificationInfo, showNotificationDanger}
  }
}
</script>
```

## Custom position

<NotificationDemo mode="position" />

```ts
<template>
  <m-button @click="showNotificationTopRight" type="primary" outline>
      Top Right
  </m-button>
  <m-button @click="showNotificationBottomRight" type="primary" outline>
      Bottom Right
  </m-button>
  <m-button @click="showNotificationBottomLeft" type="primary" outline>
      Bottom Left
  </m-button>
  <m-button @click="showNotificationTopLeft" type="primary" outline>
      Top Left
  </m-button>
</template>

<script>
import { createNotification } from 'mosha-ui'
export default {
    setup() {
        const showNotificationTopRight = () => {
            createNotification({
                title: 'Top Right',
                description: 'This is a description',
            })
        }
        const showNotificationBottomRight = () => {
            createNotification({
                title: 'Bottom Right',
                description: 'This is a description',
                position: 'bottom-right',
            })
        }
        const showNotificationBottomLeft = () => {
            createNotification({
                title: 'Bottom Left',
                description: 'This is a description',
                position: 'bottom-left',
            })
        }
        const showNotificationTopLeft = () => {
            createNotification({
                title: 'Top Left',
                description: 'This is a description',
                position: 'top-left',
            })
        }
        return { showNotificationTopRight, showNotificationBottomRight, showNotificationBottomLeft, showNotificationTopLeft}
    }
}
</script>
```

## Closable

You can hide the close button if you want.

<NotificationDemo mode="closable" />

```ts
<template>
  <m-button @click="showNotificationNotClosable" type="primary" outline>
    Hide close button
  </m-button>
</template>

<script>
import { createNotification } from 'mosha-ui'
export default {
    setup() {
        const showNotificationNotClosable = () => {
            createNotification({
                title: 'Hide close button',
                description: 'This is a description',
                closable: false,
            })
        }
        return { showNotificationNotClosable }
    }
}
</script>
```

## onClose

You can pass a function to have it called right after the message disappears

<NotificationDemo mode="closeHook" />

```ts
<template>
  <m-button @click="showNotificationCloseHook" type="primary" outline>
    Hook into on Close
  </m-button>
</template>

<script>
import { createNotification } from 'mosha-ui'
export default {
    setup() {
        const showNotificationCloseHook = () => {
            createNotification({
                title: 'Hook into the onClose',
                description: 'Alert after close, try to close it or just wait',
                onClose: () => { alert('closed') },
            })
        }
        return { showNotificationCloseHook }
    }
}
</script>
```