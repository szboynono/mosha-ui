<template>
  <button class="m-button ripple primary-gradient-background" :class="[type, size]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type BtnType = 'primary' | 'danger' | 'warning'
export type BtnSize = 'lg' | 'sm'

export default defineComponent({
  name: "m-button",
  props: {
    type: {
      type: String as PropType<BtnType>,
      required: true
    },
    size: {
      type: String as PropType<BtnSize>,
    }
  },
});
</script>