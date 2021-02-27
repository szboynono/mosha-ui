<template>
  <div class="mosha__message"
    :style="customStyle">{{ id }}
    <button @click="onClose">close</button>
  </div>
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
    id: Number
  },
  setup(props) {
    onMounted(() => {
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