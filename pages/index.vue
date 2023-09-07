<script setup>
//Gracias NUXT se realizan automaticamente las importaciones
//Siempre y cuando se encuentren en la carpeta composables
const { sayHello } = useUtils();
sayHello();


//Uso de los plugins
const { $showMessage } = useNuxtApp();
$showMessage("Hola plugin") 
</script>

<template>
  <div>
    <ContentDoc/>
  </div>
</template>
