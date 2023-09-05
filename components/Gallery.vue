<template>
  <div class="container mx-auto">
    <h2 class="py-4 text-3xl font-bold text-center text-indigo-600">
      Vue 3 Gallery Using Tailwind CSS Grid
    </h2>
    <div class="lg:gap-2 lg:grid lg:grid-cols-3">
      <div class="w-full rounded" v-for="image in images" :key="image.id">
        <img :src="image.photo" alt="image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          photo:
            "https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg",
        },
        {
          id: 2,
          photo:
            "https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg",
        },
      ],
    };
  },
};
</script>
