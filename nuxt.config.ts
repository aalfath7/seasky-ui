// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/seasky-ui/" : "/",
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Questrial",
        provider: "goggle",
      },
    ],
  },
});
