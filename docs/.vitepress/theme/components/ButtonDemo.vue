<template>
  <div class="button-demo">
    <template v-if="type==='basic'">
      <m-button type="primary">Primary</m-button>
      <m-button type="success">Success</m-button>
      <m-button type="warning">Warning</m-button>
      <m-button type="danger">Danger</m-button>
    </template>
    <template v-else-if="type==='outline'">
      <m-button type="primary" outline>Primary</m-button>
      <m-button type="success" outline>Success</m-button>
      <m-button type="warning" outline>Warning</m-button>
      <m-button type="danger" outline>Danger</m-button>
    </template>
    <template v-else-if="type==='size'">
      <m-button type="primary" size="lg">Large</m-button>
      <m-button type="primary" size="sm">Small</m-button>
    </template>
    <template v-else-if="type==='disabled'">
      <m-button type="primary" disabled>Primary(disabled)</m-button>
      <m-button type="primary" outline disabled>Primary(outline & disabled)</m-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ButtonDemo',
  props: {
    type: {
      type: String
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