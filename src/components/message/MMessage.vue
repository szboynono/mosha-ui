<template>
  <transition name="fade">
    <div 
      v-show="visible"
      class="mosha__message"
      :style="customStyle">{{ id }}
      <button @click="onClose">close</button>
    </div>
  </transition>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, PropType, watchEffect } from 'vue';
import { MessageType } from './createMessage';
export default defineComponent ({
  name: 'm-message',
  data() {
    return {
      show: false
    }
  },
  props: {
    visible: Boolean,
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    offset: Number,
    id: Number,
    timeout: Number
  },
  setup(props) {
    onMounted(() => {
      setTimeout(() => {
        props.onClose()
      }, props.timeout)
    })
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
      }
    })

    watchEffect(() => {
    })
    return { customStyle }
  }
})
</script>