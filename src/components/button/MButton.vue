<template>
  <button :class="btnType">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "m-button",
  props: {
    btnType: String
  },
});
</script>