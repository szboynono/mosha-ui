<template>
  <div class="alert-demo">
    <template v-if="type === 'basic'">
      <m-alert class="alert-demo-item" type="info" title="Info Alert"></m-alert>
      <m-alert
        class="alert-demo-item"
        type="success"
        title="Success Alert"
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="warning"
        title="Warning Alert"
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="danger"
        title="Danger Alert"
      ></m-alert>
    </template>
    <template v-else-if="type === 'icon'">
      <m-alert
        class="alert-demo-item"
        type="info"
        title="Info Alert"
        showIcon
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="success"
        title="Success Alert"
        showIcon
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="warning"
        title="Warning Alert"
        showIcon
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="danger"
        title="Danger Alert"
        showIcon
      ></m-alert>
    </template>
    <template v-else-if="type === 'description'">
      <m-alert
        class="alert-demo-item"
        type="info"
        title="Info Alert"
        description="This is some description, not too long, just enough"
        showIcon
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="success"
        title="Success Alert"
        showIcon
        description="This is some description, not too long, just enough"
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="warning"
        title="Warning Alert"
        description="This is some description, not too long, just enough"
        showIcon
      ></m-alert>
      <m-alert
        class="alert-demo-item"
        type="danger"
        title="Danger Alert"
        description="This is some description, not too long, just enough"
        showIcon
      ></m-alert>
    </template>
    <template v-else-if="type === 'closable'">
      <m-alert 
        class="alert-demo-item"
        type="info"
        title="Closable Alert, try to close me!"
        description="close me close me, dismiss me"
        showIcon
        closable
      ></m-alert>
      <m-alert 
        class="alert-demo-item"
        type="danger"
        title="Closable Alert, try to close me!"
        showIcon
        closable
      ></m-alert>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AlertDemo',
  props: {
    type: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.alert-demo {
  .alert-demo-item {
    margin: 4px 0;
  }
}
</style>