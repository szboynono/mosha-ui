<template>
  <transition name="fade">
    <div v-show="visible" class="mosha__message" :class="type" :style="customStyle">
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
      <span
        class="mosha__message__close-icon"
        @click="onClose"
      ></span>
    </div>
  </transition>
</template>

<script lang='ts'>
import {
  PropType,
  computed,
  defineComponent,
  onMounted,
  watchEffect,
} from 'vue'
import { MessageType } from './createMessage'


export default defineComponent({
  name: 'm-message',
  data() {
    return {
      show: false,
    }
  },
  props: {
    visible: Boolean,
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default',
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    offset: Number,
    id: {
      type: Number,
      required: true
    },
    timeout: Number,
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

    watchEffect(() => {})
    return { customStyle }
  },
})
</script>