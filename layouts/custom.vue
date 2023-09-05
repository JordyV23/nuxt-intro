<!-- Asi se crean los layouts personalizados -->
<template>
  <div class="customLayout">
    <Navbar class="bg-blue-500" />

    <div class="container m-4">
      <p>Layout personalizado</p>
      <slot />
    </div>
  </div>
</template>
