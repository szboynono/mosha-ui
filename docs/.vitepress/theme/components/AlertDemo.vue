<template>
  <div class="alert-demo">
    <m-alert class="alert-demo-item" type='info' title="Info Alert" description="this is a long one" showIcon></m-alert>
    <m-alert class="alert-demo-item" type='success' title="Success Alert" showIcon></m-alert>
    <m-alert class="alert-demo-item" type='warning' title="Warning Alert" closable></m-alert>
    <m-alert class="alert-demo-item" type='danger' title="Danger Alert"></m-alert>
  </div>
</template>

<script>
export default {
  name: 'AlertDemo'
}

</script>

<style lang="scss" scoped>
.alert-demo {
  .alert-demo-item {
    margin: 4px 0;
  }
}
</style>