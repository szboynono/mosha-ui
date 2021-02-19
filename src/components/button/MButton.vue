<template>
  <button class="m-button ripple" :class="[btnType, btnSize]">
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
    btnType: {
      type: String as PropType<BtnType>,
      required: true
    },
    btnSize: {
      type: String as PropType<BtnSize>,
    }
  },
});
</script>