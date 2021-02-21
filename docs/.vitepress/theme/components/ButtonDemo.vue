<template>
  <div class="button-demo">
    <m-button :disabled="disabled" type="primary">Primary</m-button>
    <m-button :disabled="disabled" type="success">Success</m-button>
    <m-button :disabled="disabled" type="warning">Warning</m-button>
    <m-button :disabled="disabled" type="danger">Danger</m-button>
    <m-button :disabled="disabled" type="primary" size="lg">Large</m-button>
    <m-button :disabled="disabled" type="primary" size="sm">Small</m-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonDemo',
  props: {
    disabled: {
      type: Boolean
    }
  }
}

</script>

<style lang="scss" scoped>
.button-demo {
  margin-top: 16px;
  button {
    margin: 4px;
  }
}
</style>