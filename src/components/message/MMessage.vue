<template>
  <div class="mosha__message">{{ message }}</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { MessageType } from './createMessage';
export default defineComponent ({
  name: 'm-message',
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  }
})
</script>