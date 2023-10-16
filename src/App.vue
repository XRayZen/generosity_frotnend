<script setup>
  const link = 'https://google.com';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>
    <a v-bind:href="link">Google</a>
  </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
