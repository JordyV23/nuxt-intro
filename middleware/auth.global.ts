export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (to.path === "/events/profile") {
    if (!isLoggedIn) {
      // Evitar redireccionar a /login si ya estamos en /login
      if (from.path !== "/login") {
        return navigateTo(to.fullPath);
      }
    }
    return navigateTo("/login");
  }
});
