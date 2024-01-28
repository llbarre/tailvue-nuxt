// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui", // https://ui.nuxt.com/
    "@vueuse/nuxt", // https://nuxt.com/modules/vueuse
    "@nuxtjs/seo", // https://nuxtseo.com/nuxt-seo/getting-started/what-is-nuxt-seo
  ],
  site: {
    url: "https://tailvue-nuxt.netlify.app",
    name: "Tailvue Nuxt",
    description: "Tailwind CSS + Vue.js + Nuxt.js",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
})
