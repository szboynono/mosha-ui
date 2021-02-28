<template>
    <m-button @click="showNotificationTopLeft" type="primary">top-left</m-button>
    <m-button @click="showNotificationTopRight" type="primary">top-right</m-button>
    <m-button @click="showNotificationBottomLeft" type="primary">bottom-left</m-button>
    <m-button @click="showNotificationBottomRight" type="primary">bottom-right</m-button>
</template>

<script>
export default {
    name: 'NotificationDemo',
    methods: {
        showNotificationTopLeft() {
            this.$MNotification({
                title: 'This is a title',
                description: 'This is a description',
                position: 'top-left',
                closable: true
            })
        },
        showNotificationTopRight() {
            this.$MNotification({
                title: 'This is a title',
                description: 'This is a description',
                position: 'top-right',
                closable: true
            })
        },
        showNotificationBottomLeft() {
            this.$MNotification({
                title: 'This is a title',
                description: 'This is a description',
                position: 'bottom-left',
                closable: true
            })
        },
        showNotificationBottomRight() {
            this.$MNotification({
                title: 'This is a title',
                description: 'This is a description',
                position: 'bottom-right',
                closable: true
            })
        }
    }
}
</script>