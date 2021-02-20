<template>
  <div class="button-demo">
    <m-button type="primary">Primary</m-button>
    <m-button type="success">Success</m-button>
    <m-button type="warning">Warning</m-button>
    <m-button type="danger">Danger</m-button>
    <m-button type="primary" size="lg">Large</m-button>
    <m-button type="primary" size="sm">Small</m-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonDemo'
}
</script>

<style lang="scss" scoped>
.button-demo {
  button {
    margin: 4px;
  }
}
</style>