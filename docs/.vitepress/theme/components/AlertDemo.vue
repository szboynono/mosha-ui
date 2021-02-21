<template>
  <div class="alert-demo">
    <m-alert type='info' title="Info Alert" description="this is a long one" showIcon></m-alert>
    <m-alert type='success' title="Success Alert"></m-alert>
    <m-alert type='warning' title="Warning Alert"></m-alert>
    <m-alert type='danger' title="Danger Alert"></m-alert>
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