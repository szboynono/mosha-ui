<template>
  <div class="mosha__container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'm-container'
})
</script>