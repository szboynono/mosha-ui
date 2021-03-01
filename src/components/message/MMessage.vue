<template>
  <transition name="mosha__slide-down">
    <div 
      v-show="visible"
      class="mosha__message"
      :class="type" 
      :style="customStyle"
      @mouseenter="stopTimer"
      @mouseleave="startTimer">
      <div class="mosha__message__content">
        <template v-if="type === 'success'">
          <span class="material-icons-round"> check_circle </span>
        </template>
        <template v-else-if="type === 'warning'">
          <span class="material-icons-round"> info </span>
        </template>
        <template v-else-if="type === 'info'">
          <span class="material-icons-round"> info </span>
        </template>
        <template v-else-if="type === 'danger'">
          <span class="material-icons-round"> highlight_off </span>
        </template>
        <template v-else-if="type === 'default'">
          <span class="material-icons-round"> info </span>
        </template>
        <p>{{ message }}</p>
      </div>
      <div
        v-if="closable"
        class="mosha__message__close-icon"
        @click="onCloseHandler"
      ></div>
    </div>
  </transition>
</template>

<script lang='ts'>
import {
  PropType,
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import { MessageType } from './createMessage'


export default defineComponent({
  name: 'm-message',
  props: {
    visible: Boolean,
    message: String,
    type: {
      type: String as PropType<MessageType>,
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
      required: true
    },
    timeout: Number,
    closable: Boolean
  },
  setup(props) {
    let timer = ref<number | null>(null);

    onMounted(() => {
      startTimer()
    })

    onUnmounted(() => {
      if(props.onClose) {
        props.onClose()
      }
    })

    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
      }
    })

    const stopTimer = () => {
      if(!timer.value) return
      clearTimeout(timer.value)
    }

    const startTimer = () => {
      timer.value = setTimeout(() => {
        props.onCloseHandler()
      }, props.timeout)
    }

    return { customStyle, stopTimer, startTimer }
  },
})
</script>