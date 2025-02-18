<script setup lang="ts">
const props = defineProps<{
  task: string
  deleteTask: (index: number) => void
  index: number
  startEditing: (index: number) => void
  saveTask: (index: number) => void
  editingIndex: number | null
}>()
</script>

<template>
  <li>
    <input v-if="editingIndex == index" />
    <p>{{ task }}</p>
    <div class="btns">
      <button class="editBtn" @click="">
        <img src="../assets/edit.svg" alt="icon edit" />
      </button>

      <button @click="deleteTask(index)">
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
