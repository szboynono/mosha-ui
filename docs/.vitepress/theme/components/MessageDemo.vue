<template>
  <div class="message-demo">
    <template v-if="mode === 'basic'">
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgDefault"
        type="primary"
        >Default</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgInfo"
        type="primary"
        >Info</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgSuccess"
        type="success"
        >Success</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgWarning"
        type="warning"
        >Warning</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgDanger"
        type="danger"
        >Danger</m-button
      >
    </template>
    <template v-else-if="mode === 'closable'">
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgDefault"
        type="primary"
        >Default</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgInfo"
        type="primary"
        >Info</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgSuccess"
        type="success"
        >Success</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgWarning"
        type="warning"
        >Warning</m-button
      >
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgDanger"
        type="danger"
        >Danger</m-button
      >
    </template>
    <template v-else-if="mode === 'timeout'">
      <m-button
        outline
        class="message-demo__item"
        @click="showMsgTimeout"
        type="primary"
        >10s timeout</m-button
      >
    </template>
    <template v-else-if="mode === 'onClose'">
      <m-button
        outline
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

import { createMessage } from '../../../../src/index'

export default {
  name: 'MessageDemo',
  props: {
    mode: String,
  },
  setup(props) {
    const showMsgDefault = () => {
      createMessage({
        message: 'This is some dummy message here',
        closable: props.mode === 'closable',
      })
    }
    const showMsgInfo = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'info',
        closable: props.mode === 'closable',
      })
    }
    const showMsgSuccess = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'success',
        closable: props.mode === 'closable',
      })
    }
    const showMsgWarning = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'warning',
        closable: props.mode === 'closable',
      })
    }
    const showMsgDanger = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'danger',
        closable: props.mode === 'closable',
      })
    }
    const showMsgTimeout = () => {
      createMessage({
        message: 'This is some dummy message here',
        timeout: 10000,
      })
    }
    const showMsgOnClose = () => {
      createMessage({
        message: 'This is some dummy message here',
        onClose: () => {
          alert('Hi There!')
        },
      })
    }

    return {
      showMsgDefault,
      showMsgInfo,
      showMsgSuccess,
      showMsgWarning,
      showMsgDanger,
      showMsgTimeout,
      showMsgOnClose
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