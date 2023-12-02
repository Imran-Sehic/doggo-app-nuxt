// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  routeRules: {
    // Static page generated on-demand once
    "/about": { static: true },
    "/error": { static: true },
  },
  modules: ["@vue-macros/nuxt"],
});
