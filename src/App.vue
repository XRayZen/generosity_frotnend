<script setup>
const users = [
  { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', admin: false },
  { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
];
</script>

<template>
  <div class="parent">
    <div v-for="user in users" :key="user.id" class="child"> {{ user.id }}:{{ user.name }}({{ user.email }})</div>
  </div>
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
