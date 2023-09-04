<template>
  <div>
    <!-- Se debe de implementar NUXTLayout junto con NuxtPage  -->
    <!-- Esto para acceder al router que tiene nuxt -->
    <NuxtLayout>
      <Navbar/>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>

body{
  background: #101423;
  color: white;
}

</style>
