<script setup>
  import { ref, computed } from 'vue';
  import Tokyo from './components/Tokyo.vue';
  import Kyoto from './components/Kyoto.vue';

  const city = ref('tokyo');

  const tabs = {
    tokyo: Tokyo,
    kyoto: Kyoto,
  };
  const tab = computed(() => tabs[city.value]);
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>
    <button @click="city = 'tokyo'">東京</button>
    <button @click="city = 'kyoto'">京都</button>
  </div>
  <keep-alive> <component v-bind:is="tab"></component></keep-alive>
</template>

<style scoped>
.active {
  color: red;
}
</style>
