// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
