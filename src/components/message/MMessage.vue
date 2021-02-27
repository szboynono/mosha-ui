<template>
  <transition name="message-fade">
    <div class="mosha__message"
      :style="customStyle">{{ id }}
      <button @click="onClose">close</button>
      <button @click="onVisible">visible</button>
    </div>
  </transition>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue';
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
    const vis = ref(false)

    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
      }
    })

    const onVisible = () => {
      vis.value = false
    }

    watchEffect(() => {
      console.log(props.visible)
    })
    return { customStyle,  onVisible, vis}
  }
})
</script>