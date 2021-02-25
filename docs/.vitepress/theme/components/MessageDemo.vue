<template>
  <m-button @click="showMsg" type="primary">Show Message</m-button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'MessageDemo',
  methods: {
    showMsg() {
      this.$MMessage('yoyo', 'success')
    },
  },
}
</script>

<style scoped>
div {
  margin-top: 8px;
}
</style>