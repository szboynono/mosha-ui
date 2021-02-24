<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'm-container'
})
</script>

<style>
.card {
  display: flex;
  padding: 8px 10px;
  background: rgb(255,255,255);
  background: linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.2); 
}

/* grain/noise effect */
.card::after {
  margin: -8px -10px;
  content:"";
  position: fixed;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 1;
  /* background-image: url('../assets/mosha.png'); */
}
</style>