<script setup>
useHead({
  title: "TailVue - Nuxt",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", href: "/favicon.png" },
  ],
  htmlAttrs: {
    lang: "en",
  },
})

useSeoMeta({
  description: "TailVue - Nuxt combines the best of Vue + Nuxt and Nuxt UI.",
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
