//Los plugins en NUXT son un tipo de funciones globales
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      showMessage: (msg: string) => console.log(msg),
    },
  };
});
