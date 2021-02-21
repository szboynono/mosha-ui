<template>
  <div class="mosha__alert" :class="[type]">
    <template v-if="type === 'success'">
      <span class="material-icons"> check_circle </span>
    </template>
    <template v-else-if="type === 'warning'">
      <span class="material-icons"> info </span>
    </template>
    <template v-else-if="type === 'info'">
      <span class="material-icons"> info </span>
    </template>
    <template v-else-if="type === 'danger'">
      <span class="material-icons"> highlight_off </span>
    </template>
    <template v-else>
      <span class="material-icons"> info </span>
    </template>
    <slot></slot>
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
  },
})
</script>