<template>
  <m-button @click="showMsg" type="primary">Show Message</m-button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'MessageDemo',
  methods: {
    showMsg() {
      this.$MMessage({message: 'This is some dummy message here'})
    },
  },
}
</script>

<style scoped>
div {
  margin-top: 8px;
}
</style>