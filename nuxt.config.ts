// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@vueuse/nuxt"],

  image: {
    domains: ["tesla-cdn.thron.com"],
  }
});
