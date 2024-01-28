<script setup>
const links = [
  { name: "Home", path: "/" },
  { name: "API Demo", path: "/demo" },
]
</script>

<template>
  <UContainer class="w-full py-8">
    <header class="flex w-full items-center justify-between">
      <NuxtLink to="/" class="text-lg tracking-wide uppercase font-bold flex items-center">
        TailVue <UBadge color="primary" variant="subtle" class="ml-1.5">
          Nuxt
        </UBadge>
      </NuxtLink>
      <div class="flex items-center space-x-6">
        <ULink v-for="link in links" :key="link.path" :to="link.path" active-class="text-primary" inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <UButton color="primary" variant="ghost">
            {{ link.name }}
          </UButton>
        </ULink>

        <AppColorMode />
      </div>
    </header>
  </UContainer>
</template>
