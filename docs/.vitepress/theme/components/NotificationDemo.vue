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
                type: 'info',
                closable: true,
                showIcon: true,
                timeout: 0
            })
        },
        showNotificationTopRight() {
            this.$MNotification({
                title: 'This is a title',
                description: 'This is a description',
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
                type: 'warning',
                closable: true,
                showIcon: true
            })
        }
    }
}
</script>