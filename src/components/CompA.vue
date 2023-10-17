<script setup>
  import CompB from './CompB.vue';

  const { message } = defineProps(['message']);
</script>
<template>
  <h2>CompAコンポーネント</h2>
  <CompB :message="message" />
</template>