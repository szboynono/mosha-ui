<template>
  <transition :name="transitionType">
    <div class="mosha__notification" :style="customStyle" :class="[type]" v-if="visible">
      <div class="mosha__notification__content">
        <template v-if="type === 'success' && showIcon">
          <span class="material-icons-round"> check_circle </span>
        </template>
        <template v-else-if="type === 'warning' && showIcon">
          <span class="material-icons-round"> info </span>
        </template>
        <template v-else-if="type === 'info' && showIcon">
          <span class="material-icons-round"> info </span>
        </template>
        <template v-else-if="type === 'danger' && showIcon">
          <span class="material-icons-round"> highlight_off </span>
        </template>
        <template v-else-if="type === 'default' && showIcon">
          <span class="material-icons-round"> info </span>
        </template>
        <div>
          <div class="mosha__notification__content__title">{{ title }}</div>
          <div class="mosha__notification__content__description">{{ description }}</div>
        </div>
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
    title: String,
    description: String,
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
    closable: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const transitionType = computed(() => {
      if (props.position.endsWith('left')) {
        return 'mosha__slide-right'
      } else {
        return 'mosha__slide-left'
      }
    })
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

    return { customStyle, transitionType }
  },
})
</script>