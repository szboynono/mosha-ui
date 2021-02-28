<template>
  <div class="message-demo">
    <template v-if="mode === 'basic'">
      <m-button
        class="message-demo__item"
        @click="showMsgDefault"
        type="primary"
        >Default</m-button
      >
      <m-button class="message-demo__item" @click="showMsgInfo" type="primary"
        >Info</m-button
      >
      <m-button
        class="message-demo__item"
        @click="showMsgSuccess"
        type="success"
        >Success</m-button
      >
      <m-button
        class="message-demo__item"
        @click="showMsgWarning"
        type="warning"
        >Warning</m-button
      >
      <m-button class="message-demo__item" @click="showMsgDanger" type="danger"
        >Danger</m-button
      >
    </template>
    <template v-else-if="mode === 'closable'">
      <m-button
        class="message-demo__item"
        @click="showMsgDefault"
        type="primary"
        >Default</m-button
      >
      <m-button class="message-demo__item" @click="showMsgInfo" type="primary"
        >Info</m-button
      >
      <m-button
        class="message-demo__item"
        @click="showMsgSuccess"
        type="success"
        >Success</m-button
      >
      <m-button
        class="message-demo__item"
        @click="showMsgWarning"
        type="warning"
        >Warning</m-button
      >
      <m-button class="message-demo__item" @click="showMsgDanger" type="danger"
        >Danger</m-button
      >
    </template>
    <template v-else-if="mode === 'timeout'">
      <m-button
        class="message-demo__item"
        @click="showMsgTimeout"
        type="primary"
        >10s timeout</m-button
      >
    </template>
    <template v-else-if="mode === 'onClose'">
      <m-button
        class="message-demo__item"
        @click="showMsgOnClose"
        type="primary"
        >Alert after message</m-button
      >
    </template>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'MessageDemo',
  props: {
    mode: String,
  },
  methods: {
    showMsgDefault() {
      this.$MMessage({
        message: 'This is some dummy message here',
        closable: this.mode === 'closable',
      })
    },
    showMsgInfo() {
      this.$MMessage({
        message: 'This is some dummy message here',
        type: 'info',
        closable: this.mode === 'closable',
      })
    },
    showMsgSuccess() {
      this.$MMessage({
        message: 'This is some dummy message here',
        type: 'success',
        closable: this.mode === 'closable',
      })
    },
    showMsgWarning() {
      this.$MMessage({
        message: 'This is some dummy message here',
        type: 'warning',
        closable: this.mode === 'closable',
      })
    },
    showMsgDanger() {
      this.$MMessage({
        message: 'This is some dummy message here',
        type: 'danger',
        closable: this.mode === 'closable',
      })
    },
    showMsgTimeout() {
      this.$MMessage({
        message: 'This is some dummy message here',
        timeout: 10000
      })
    },
    showMsgOnClose() {
      this.$MMessage({
        message: 'This is some dummy message here',
        onClose: () => {
          alert('Hi There!')
        }
      })
    }
  },
}
</script>

<style lang="scss">
.message-demo {
  margin-top: 16px;

  &__item {
    margin: 4px;
  }
}
</style>