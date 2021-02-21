<template>
  <div class="mosha__alert" :class="[type]">
    <template v-if="type === 'success' && showIcon">
      <span class="material-icons" :class="{withDescription: ''}"> check_circle </span>
    </template>
    <template v-else-if="type === 'warning' && showIcon">
      <span class="material-icons" :class="{withDescription: ''}"> info </span>
    </template>
    <template v-else-if="type === 'info' && showIcon">
      <span class="material-icons" :class="{withDescription: ''}"> info </span>
    </template>
    <template v-else-if="type === 'danger' && showIcon">
      <span class="material-icons" :class="{withDescription: ''}"> highlight_off </span>
    </template>
    <div class="mosha__alert__content">
      <div class="mosha__alert__content__title">{{ title }}</div>
      <div class="mosha__alert__content__desc">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

type AlertType = 'info' | 'danger' | 'warning' | 'success'

export default defineComponent({
  name: 'm-alert',
  props: {
    type: {
      type: String as PropType<AlertType>,
      required: true,
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
  },
})
</script>