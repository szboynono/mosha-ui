<template>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora earum
  provident optio quaerat quia et vero quidem rem, eligendi nihil quisquam
  obcaecati tempore consequatur magni recusandae velit, nisi accusantium qui!
  <Button></Button>
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
Button {
  position: absolute;
  left: 10px;
  top: 2px;
}
</style>