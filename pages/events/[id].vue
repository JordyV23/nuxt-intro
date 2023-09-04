<script setup>
const nuxt = useNuxtApp();
console.log(nuxt)
</script>

<template>
  <div>Event id: {{ $route.params.id }}</div>
</template>
