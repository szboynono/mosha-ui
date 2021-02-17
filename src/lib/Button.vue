<template>
  <button class="primary">Primary</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
});
</script>

<style lang="scss" scoped>
button {
  color: white;
  padding: 0.375rem 0.75rem;
  color: black;
  line-height: 1.5;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &.primary {
    background: rgba(13, 110, 253, 0.85);


    &:hover {
      background-color: rgba(13, 110, 253, 0.75);
    }
  }

  &:focus {
    outline: none;
  }
}


</style>