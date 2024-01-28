<script setup>
const error = useError()
function handleError() {
  clearError({
    redirect:
        "/",
  })
}
</script>

<template>
  <NuxtLayout>
    <UContainer>
      <div class="flex flex-col min-h-[40vh] h-full items-center justify-center space-y-4">
        <h1 class="text-3xl font-bold">
          {{ error.statusCode }}
        </h1>
        <p>{{ error.statusMessage }}.</p>
      </div>
    </UContainer>
  </NuxtLayout>
</template>
