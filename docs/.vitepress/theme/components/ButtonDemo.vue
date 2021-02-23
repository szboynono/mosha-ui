<template>
  <div class="button-demo">
    <template v-if="type==='basic'">
      <m-button class="button-demo-item" type="primary">Primary</m-button>
      <m-button class="button-demo-item" type="success">Success</m-button>
      <m-button class="button-demo-item" type="warning">Warning</m-button>
      <m-button class="button-demo-item" type="danger">Danger</m-button>
    </template>
    <template v-else-if="type==='outline'">
      <m-button class="button-demo-item" type="primary" outline>Primary</m-button>
      <m-button class="button-demo-item" type="success" outline>Success</m-button>
      <m-button class="button-demo-item" type="warning" outline>Warning</m-button>
      <m-button class="button-demo-item" type="danger" outline>Danger</m-button>
    </template>
    <template v-else-if="type==='size'">
      <m-button class="button-demo-item" type="primary" size="lg">Large</m-button>
      <m-button class="button-demo-item" type="primary" size="sm">Small</m-button>
    </template>
    <template v-else-if="type==='disabled'">
      <m-button class="button-demo-item" type="primary" disabled>Primary(disabled)</m-button>
      <m-button class="button-demo-item" type="primary" outline disabled>Primary(outline & disabled)</m-button>
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
  
  & .button-demo-item {
    margin: 4px;
  }
}
</style>