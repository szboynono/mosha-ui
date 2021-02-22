<template>
  <button
    class="mosha__button mosha__ripple"
    :disabled="disabled"
    :class="[
      disabled ? null : type,
      size,
      outline && !disabled ? `${type}--outline` : null,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

export type BtnType = 'primary' | 'danger' | 'warning'
export type BtnSize = 'lg' | 'sm'

export default defineComponent({
  name: 'm-button',
  props: {
    type: {
      type: String as PropType<BtnType>,
      required: true,
      validator: (value: BtnType) => {
        return ['success', 'warning', 'danger', 'primary'].indexOf(value) !== -1
      },
    },
    size: {
      type: String as PropType<BtnSize>,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
})
</script>