import { computed, ref } from 'vue'

export const useTask = () => {
  const task = ref('')
  const tasks = ref<string[]>([])
  const taskEditIndex = ref('')

  const submitTask = () => {
    if (taskEditIndex.value.trim().length > 0) {
      const newTasks = tasks.value.map((item, i) =>
        i === Number(taskEditIndex.value) ? task.value : item,
      )
      console.log(task.value)
      tasks.value = newTasks
      taskEditIndex.value = ''
    } else {
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
    }
    task.value = ''
  }

  const deleteTask = (index: number) => {
    tasks.value.splice(index, 1)
  }

  const getTaskEdit = (index: number) => {
    taskEditIndex.value = index.toString()
    task.value = tasks.value[index]
  }

  const isActiveTaskEdit = computed(() => {
    return taskEditIndex.value.length > 0 ? 'Edit' : 'Create'
  })

  return {
    submitTask,
    deleteTask,
    getTaskEdit,
    task,
    tasks,
    isActiveTaskEdit,
  }
}
