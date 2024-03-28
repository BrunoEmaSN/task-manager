<template>
  <h1 class="text-gray-900 mt-5 text-2xl font-semibold">Tasks</h1>
  <TasksTable />
</template>

<script lang="ts">
import TasksTable from '@/components/TasksTable.vue'

export default {
  components: {
    TasksTable
  }
}
</script>
