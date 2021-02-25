<template>
  <div class="mosha__message"
    :style="customStyle">{{ message }}</div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue';
import { MessageType } from './createMessage';
export default defineComponent ({
  name: 'm-message',
  data() {
    return {
      show: false
    }
  },
  props: {
    id: Number,
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    },
    offset: { type: Number },
  },
  setup(props) {
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
      }
    })
    console.log(props)
    return { customStyle }
  }
})
</script>