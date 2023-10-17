<script setup>
  import { inject } from 'vue';
  const { message } = defineProps(['message']);

  const count = inject('count');
  const addCount = inject('addCount');
</script>

<template>
  <h3>CompBコンポーネント</h3>
  <p>{{ message }}</p>
  <p>Count:{{ count }}</p>
  <button @click="addCount">+</button>
</template>