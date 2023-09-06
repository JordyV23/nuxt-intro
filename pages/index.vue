<script setup>
//Gracias NUXT se realizan automaticamente las importaciones
//Siempre y cuando se encuentren en la carpeta composables
const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <div>
    <Alert />
  </div>
</template>
