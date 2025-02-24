<script setup lang="ts">
import Task from '@/components/TaskItem.vue'
import { useTask } from './composables/useTask'

const { submitTask, deleteTask, getTaskEdit, task, tasks, isActiveTaskEdit } = useTask()
</script>

<template>
  <header>
    <h1>Todo List</h1>
  </header>

  <main>
    <form @submit.prevent="submitTask">
      <input v-model="task" placeholder="create task" />
      <button>{{ isActiveTaskEdit }}</button>
    </form>

    <ul>
      <Task
        v-for="(taskItem, index) in tasks"
        :key="index"
        :task="taskItem"
        :delete-task="deleteTask"
        :index="index"
        @editEvent="getTaskEdit(index)"
      />
    </ul>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}

form {
  width: 400px;
  display: flex;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
}

input {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
  padding: 10px;
  width: 100%;
}

input:focus {
  outline: none;
}

button {
  background-color: #00ff8c;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  padding: 0 10px;
  cursor: pointer;
}

button:hover {
  background-color: #13cc79;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 0;
  overflow-y: auto;
  height: 50vh;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
