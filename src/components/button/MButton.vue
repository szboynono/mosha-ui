<template>
  <button class="m-button ripple" :disabled="disabled" :class="[type, size]">
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
      required: true,
      validator: (value: BtnType) => {
        return ['success', 'warning', 'danger', 'primary'].indexOf(value) !== -1
      }
    },
    size: {
      type: String as PropType<BtnSize>,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
});
</script>