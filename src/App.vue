<script setup>
  import { ref, watchEffect } from 'vue';

  const count = ref(0);
  const count2 = ref(100);

  watchEffect(() => console.log(`${count.value}/${count2.value}`));
</script>

<template>
  <h1>Vue 3 入門</h1>
  <button @click="count++">Count:{{ count }}</button>
  <button @click="count2++">Count2:{{ count2 }}</button>
</template>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
}
.child {
  padding: 10px;
}
</style>
