<template>
  <div class="mosha__notification" :style="customStyle" v-if="visible">
      Notification
      <div
        v-if="closable"
        class="mosha__message__close-icon"
        @click="onCloseHandler"
      ></div>
    </div>
</template>

<script lang='ts'>
import { PropType, computed, defineComponent } from 'vue'

import { Position } from './types'

export default defineComponent({
  name: 'm-notification',
  data() {
    return {
      show: false,
    }
  },
  props: {
    visible: Boolean,
    message: String,
    type: {
      type: String,
      default: 'default',
    },
    onCloseHandler: {
      type: Function as PropType<() => void>,
      required: true,
    },
    // For client
    onClose: {
      type: Function as PropType<() => void>,
    },
    offset: Number,
    id: {
      type: Number,
      required: true,
    },
    timeout: Number,
    position: {
      type: String as PropType<Position>,
      required: true,
    },
    closable: Boolean,
  },
  setup(props) {
    const customStyle = computed(() => {
      switch (props.position) {
        case 'top-left':
          return {
            left: 0,
            top: `${props.offset}px`,
          }
        case 'bottom-left':
          return {
            left: 0,
            bottom: `${props.offset}px`,
          }
        case 'bottom-right':
          return {
            right: 0,
            bottom: `${props.offset}px`,
          }
        default:
          return {
            right: 0,
            top: `${props.offset}px`,
          }
      }
    })

    return { customStyle }
  },
})
</script>