<template>
    <template v-if="mode==='basic'">
        <m-button @click="showNotificationCloseAuto" type="primary" outline>
            Disappears after 5s
        </m-button>
        <m-button @click="showNotificationStay" type="primary" outline>
            Won't disappear automatically
        </m-button>
    </template>
    <template v-else-if="mode==='types'">
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
    <template v-else-if="mode==='position'">
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
    <template v-else-if="mode==='closable'">
        <m-button @click="showNotificationNotClosable" type="primary" outline>Hide close button</m-button>
    </template>
</template>

<script>
export default {
    name: 'NotificationDemo',
    props: {
        mode: String,
        types: String
    },
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
        },
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