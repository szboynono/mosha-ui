<template>
    <div>
        <Button btnType="primary">Primary</Button>
        <Button btnType="success">Success</Button>
        <Button btnType="danger">Danger</Button>
        <Button btnType="warning">Warning</Button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "../lib/index";
export default defineComponent({
  name: "ButtonDemo",
  components: {
    Button,
  },
});
</script>

<style lang="scss">
div {
    width: 100vw;
    height: 100vh;
}
</style>