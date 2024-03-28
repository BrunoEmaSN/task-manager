<template>
  <div class="border border-gray-700 rounded-lg overflow-hidden">
    <table class="table-auto w-full text-left">
      <thead class="bg-cyan-800 text-white">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          <th>Time to Complete</th>
          <th>Assigned</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="h-ful text-gray-950 font-medium">
        <tr v-for="task in taskStore.tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.status }}</td>
          <td>{{ task.timeToComplete }}</td>
          <td>{{ task.user.name }}</td>
          <td>
            <button class="text-cyan-700 font-extrabold">
              <EllipsisVerticalIcon class="w-6 h-6 text-gray-900 hover:text-cyan-800" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <TablePagination
      :totalPages="1"
      :perPage="1"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
      :maxVisibleButtons="5"
    />
  </div>
</template>
<script lang="ts">
import { EllipsisVerticalIcon } from '@heroicons/vue/16/solid'
import TablePagination from './TablePagination.vue'
import { useTaskStore } from '@/stores/taskStore'
import type { TaskFiltersClient } from '@/types/Task'
import { ref } from 'vue'

export default {
  setup() {
    const taskStore = useTaskStore()
    const filters = ref<TaskFiltersClient>({
      userId: 0,
      title: '',
      status: 'all',
      startDate: '',
      endDate: ''
    })

    taskStore.findTasks(filters.value)
    return {
      taskStore,
      filters
    }
  },
  components: {
    EllipsisVerticalIcon,
    TablePagination
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    onPageChange(page: number) {
      console.log(page)
      this.currentPage = page
    }
  }
}
</script>

<style scoped>
table tbody tr:nth-child(odd) {
  background: #f9f9f9;
}
table tbody tr:nth-child(even) {
  background: #e3ecf1;
}

th,
td {
  padding: 15px;
}
</style>
