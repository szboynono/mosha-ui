<template>
  <div v-show="visible" class="mosha__message"
    :style="customStyle">{{ message }}
    <button @click="onClose(id)">close</button>  
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, PropType, ref, watchEffect } from 'vue';
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
    visible: Boolean,
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    },
    offset: { type: Number },
    onClose: Function
  },
  setup(props) {
    const visible = ref(false)
    onMounted(() => {
      // setTimeout(() => {
      //   visible.value = false;
      // }, 2000)
      visible.value = true
    })
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
      }
    })
    watchEffect(() => {
      console.log(visible.value)
    })
    console.log(props)
    return { customStyle, visible }
  }
})
</script>