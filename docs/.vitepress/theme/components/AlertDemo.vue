<template>
  <div class="alert-demo">
    <m-alert type='info'>Info Alert</m-alert>
    <m-alert type='success'>Success Alert</m-alert>
    <m-alert type='warning'>Warning Alert</m-alert>
    <m-alert type='danger'>Danger Alert</m-alert>
  </div>
</template>

<script>
export default {
  name: 'AlertDemo'
}

</script>

<style lang="scss" scoped>
.alert-demo {
  div {
    margin: 4px 0;
  }
}
</style>