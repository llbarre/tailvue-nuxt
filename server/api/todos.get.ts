import type { Todos } from "@/types/todos"

export default defineEventHandler(async (_event) => {
  try {
    const todos: Todos = await $fetch<Todos>("https://dummyjson.com/todos")

    return todos.todos
  }
  catch (error) {
    console.error("Error fetching todos:", error)
    throw createError({ statusCode: 500, statusText: "Error fetching todos" })
  }
})
