<script setup lang="ts">
import { ref } from 'vue'
import Task from '@/components/Task.vue'

const task = ref('')
const tasks = ref<string[]>([])
const editingIndex = ref<number | null>(null)
const editedTask = ref('')

const setTask = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  task.value = target.value
}

// Enable editing mode for a task
const startEditing = (index: number) => {
  editingIndex.value = index
  editedTask.value = tasks.value[index]
}

// Save edited task
const saveTask = (index: number) => {
  if (editedTask.value.trim() !== '') {
    tasks.value[index] = editedTask.value
  }
  editingIndex.value = null
}

const submitTask = () => {
  if (task.value.trim().length == 0) {
    alert('task void')

    return
  }

  const isTaskRepeat = tasks.value.find((item) => item == task.value.trim())

  if (isTaskRepeat) {
    alert('task repeat')
    task.value = ''
    return
  }

  tasks.value.push(task.value)
  task.value = ''
}

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <header>
    <h1>Todo List</h1>
  </header>

  <main>
    <form @submit.prevent="submitTask">
      <input v-model="task" placeholder="create task" />
      <button>GO</button>
    </form>

    <ul>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :deleteTask="deleteTask"
        :index="index"
        :startEditing="startEditing"
        :saveTask="saveTask"
        :editingIndex="editingIndex"
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
