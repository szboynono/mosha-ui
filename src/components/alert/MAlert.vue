<template>
  <transition name="alert-fade">
    <div class="mosha__alert" :class="[type]" v-if="!hideAlert">
      <div class="mosha__alert__main-content">
        <template v-if="type === 'success' && showIcon">
          <span
            class="material-icons-round"
            :class="description ? 'withDescription' : null"
          >
            check_circle
          </span>
        </template>
        <template v-else-if="type === 'warning' && showIcon">
          <span
            class="material-icons-round"
            :class="description ? 'withDescription' : null"
          >
            info
          </span>
        </template>
        <template v-else-if="type === 'info' && showIcon">
          <span
            class="material-icons-round"
            :class="description ? 'withDescription' : null"
          >
            info
          </span>
        </template>
        <template v-else-if="type === 'danger' && showIcon">
          <span
            class="material-icons-round"
            :class="description ? 'withDescription' : null"
          >
            highlight_off
          </span>
        </template>
        <template v-else-if="type === 'default' && showIcon">
          <span
            class="material-icons-round"
            :class="description ? 'withDescription' : null"
          >
            info
          </span>
        </template>
        <div class="mosha__alert__content">
          <div class="mosha__alert__content__title">{{ title }}</div>
          <div class="mosha__alert__content__desc">{{ description }}</div>
        </div>
      </div>
      <span
        class="mosha__alert__close-icon"
        @click="onCloseClick"
        v-if="closable"
      ></span>
    </div>
  </transition>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue'

type AlertType = 'info' | 'danger' | 'warning' | 'success' | 'default'

export default defineComponent({
  name: 'm-alert',
  props: {
    type: {
      type: String as PropType<AlertType>,
      required: true,
      default: 'default'
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const hideAlert = ref(false)
    const onCloseClick = () => {
      hideAlert.value = true
    }
    return { hideAlert, onCloseClick }
  },
})
</script>