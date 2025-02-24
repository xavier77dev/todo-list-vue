<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  task: string
  deleteTask: (index: number) => void
  index: number
}>()

const emit = defineEmits(['editEvent'])

const sendIndexTask = (index: number) => {
  emit('editEvent', index)
}
</script>

<template>
  <li>
    <p>{{ props.task }}</p>
    <div class="btns">
      <button class="editBtn" @click="sendIndexTask(props.index)">
        <img src="../assets/edit.svg" alt="icon edit" />
      </button>

      <button @click="deleteTask(props.index)">
        <img src="../assets/delete.svg" alt="icon delete" />
      </button>
    </div>
  </li>
</template>

<style scoped>
li {
  color: black;
  width: 100%;

  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
}

.btns {
  display: flex;
  gap: 2px;
}

button,
.editBtn {
  border: none;
  background: none;
  width: 34px;
  height: 100%;
  cursor: pointer;
}

button:hover {
  background-color: red;
  border-radius: 10px;
}

.editBtn img {
  width: auto;
  height: 100%;
}

.editBtn:hover {
  background-color: blue;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
