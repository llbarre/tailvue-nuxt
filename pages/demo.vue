<script setup lang="ts">
// uses the current route
import type { Todo } from "@/types/todos"

defineOgImageComponent("NuxtSeo", {
  title: "Nuxt Middleware Demo",
  description: "A demo using Nuxt Middleware and https://dummyjson.com/todos",
})

const links = useBreadcrumbItems()

const todos = ref<Todo[]>([])

const { data: fetchedTodos, pending } = await useFetch<Todo[]>("/api/todos")

if (fetchedTodos.value)
  todos.value = fetchedTodos.value
</script>

<template>
  <UContainer class="py-8">
    <UBreadcrumb :links="links" class="pb-8" />
    <h1 class="pb-4">
      My Todos ({{ pending ? "Loading..." : todos.length }})
    </h1>
    <ClientOnly>
      <ul class="divide-y divide-gray-800">
        <li v-for="todo in todos" :key="todo.id" class="py-3">
          <UCheckbox v-model="todo.completed" :label="todo.todo" />
        </li>
      </ul>
    </ClientOnly>
  </UContainer>
</template>
