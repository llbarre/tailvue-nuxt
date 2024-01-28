<script setup>

</script>

<template>
  <UContainer class="w-full py-8">
    <header class="flex w-full items-center justify-between">
      <NuxtLink to="/">
        TailVue + Nuxt
      </NuxtLink>
      <div class="flex items-center space-x-4">
        <ULink
          to="/"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Home
        </ULink>
        <ULink
          to="/about"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          About
        </ULink>
        <AppColorMode />
      </div>
    </header>
  </UContainer>
</template>

<style lang="scss" scoped>

</style>
