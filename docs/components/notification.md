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
export default {
    name: 'NotificationDemo',
    methods: {
        showNotificationCloseAuto() {
            this.$MNotification({
                title: 'This is a title',
                description: 'This will go away after 5s',
            })
        },
        showNotificationStay() {
            this.$MNotification({
                title: 'This is a title',
                description: 'This will stay until you click the close button',
                timeout: 0
            })
        },
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
export default {
  methods: {
      showNotificationSuccess() {
          this.$MNotification({
              title: 'Success',
              description: 'This is a description',
              type: 'success'
          })
      },
      showNotificationWarning() {
          this.$MNotification({
              title: 'Warning',
              description: 'This is a description',
              type: 'warning'
          })
      },
      showNotificationInfo() {
          this.$MNotification({
              title: 'Info',
              description: 'This is a description',
              type: 'info'
          })
      },
      showNotificationDanger() {
          this.$MNotification({
              title: 'Danger',
              description: 'This is a description',
              type: 'danger'
          })
      },
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
export default {
    methods: {
        showNotificationTopRight() {
            this.$MNotification({
                title: 'Top Right',
                description: 'This is a description',
            })
        },
        showNotificationBottomRight() {
            this.$MNotification({
                title: 'Bottom Right',
                description: 'This is a description',
                position: 'bottom-right'
            })
        },
        showNotificationBottomLeft() {
            this.$MNotification({
                title: 'Bottom Left',
                description: 'This is a description',
                position: 'bottom-left'
            })
        },
        showNotificationTopLeft() {
            this.$MNotification({
                title: 'Top Left',
                description: 'This is a description',
                position: 'top-left'
            })
        }
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
export default {
    methods: {
        showNotificationNotClosable() {
            this.$MNotification({
                title: 'Hide close button',
                description: 'This is a description',
                closable: false
            })
        }
    }
}
</script>
```