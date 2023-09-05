<script setup>
const nuxt = useNuxtApp();
console.log(nuxt)

// Asi de definen varios layouts en un proyecto
definePageMeta({
    layout: 'custom'
});

</script>

<template>
  <div>Event id: {{ $route.params.id }}</div>
</template>
