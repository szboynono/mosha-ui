<template>
  <m-button @click="showMsgDefault" type="primary">Default</m-button>
  <m-button @click="showMsgInfo" type="primary">Info</m-button>
  <m-button @click="showMsgSuccess" type="success">Success</m-button>
  <m-button @click="showMsgWarning" type="warning">Warning</m-button>
  <m-button @click="showMsgDanger" type="danger">Danger</m-button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'MessageDemo',
  methods: {
    showMsgDefault() {
      this.$MMessage({message: 'This is some dummy message here'})
    },
    showMsgInfo() {
      this.$MMessage({message: 'This is some dummy message here', type: 'info'})
    },
    showMsgSuccess() {
      this.$MMessage({message: 'This is some dummy message here', type: 'success'})
    },
    showMsgWarning() {
      this.$MMessage({message: 'This is some dummy message here', type: 'warning'})
    },
    showMsgDanger() {
      this.$MMessage({message: 'This is some dummy message here', type: 'danger'})
    },
  },
}
</script>

<style scoped>
div {
  margin-top: 8px;
}
</style>