<template>
  <h1 v-if="!taskStore.tasks.length" class="text-gray-900 my-5 text-2xl font-semibold">
    Without Tasks
  </h1>
  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <CardTask
      v-for="task in taskStore.tasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :startDate="task.startDate"
      :endDate="task.endDate"
      :status="task.status"
    />
  </div>
</template>
<script lang="ts">
import CardTask from '@/components/CardTask.vue'
import { useAuthStore } from '@/stores/auth'
import { useTaskStore } from '@/stores/taskStore'

export default {
  setup() {
    const authStore = useAuthStore()
    const taskStore = useTaskStore()
    taskStore.findTasks({ userId: authStore.id })

    return {
      taskStore
    }
  },
  components: {
    CardTask
  }
}
</script>
