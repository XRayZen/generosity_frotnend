<script setup>
import CompA from './components/CompA.vue';
import { provide, ref } from 'vue';

const count = ref(0);

const addCount = () => {
  count.value++;
};

provide('count', count);
provide('addCount', addCount);
</script>

<template>
  <h1>Vue 3 入門</h1>
  <CompA message="propsでデータ渡し" />
</template>

<style scoped>
.active {
  color: red;
}
</style>
