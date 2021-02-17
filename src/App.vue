<template>
  <button-demo />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonDemo from './components/ButtonDemo.vue'
export default defineComponent({
  name: 'App',
  components: {
    ButtonDemo
  }
})
</script>

<style>
</style>