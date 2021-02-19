<template>
  <button class="m-button" :class="btnType">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type BtnType = 'primary' | 'danger' | 'warning'

export default defineComponent({
  name: "m-button",
  props: {
    btnType: {
      type: String as PropType<BtnType>,
      required: true
    }
  },
});
</script>