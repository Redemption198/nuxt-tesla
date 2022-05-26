import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@vueuse/nuxt"],

  css: ["@/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],
});
