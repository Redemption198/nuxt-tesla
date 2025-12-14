// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/fonts",
  ],

  image: {
    domains: ["tesla-cdn.thron.com"],
  },

  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "local", // Self-hosted
        weights: [400, 500],
        // Download from Google Fonts and place in public/fonts/
        src: "/fonts/montserrat",
      },
    ],
  },

  compatibilityDate: "2025-12-14",
});
