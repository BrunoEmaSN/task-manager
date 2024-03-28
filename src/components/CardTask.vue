<template>
  <div
    class="flex justify-between rounded-lg border border-zinc-800 bg-midnight p-3 transition-all hover:shadow-lg"
    :class="{
      'bg-gray-800': status === STATUS.PENDING,
      'bg-yellow-600': status === STATUS.PROGRESS,
      'bg-red-700': status === STATUS.BLOCKED,
      'bg-green-800': status === STATUS.DONE
    }"
  >
    <div className="w-full">
      <div className="flex justify-end items-center">
        <p class="text-xl text-gray-100">
          {{ formatStatus }}
        </p>
      </div>
      <p className="mb-2 text-gray-200">Title: {{ title }}</p>
      <p className="text-gray-300">Description: {{ description }}</p>
      <p className="text-gray-300">Started: {{ startDate || '-' }}</p>
      <p className="text-gray-300">Finished: {{ endDate || '-' }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import STATUS from '../constants/status'

export default {
  props: {
    status: String,
    title: String,
    description: String,
    startDate: null,
    endDate: null
  },
  data() {
    return {
      STATUS
    }
  },
  computed: {
    formatStatus() {
      const newStatus = this.status?.replace('_', ' ')?.toUpperCase()
      return newStatus || 'pending'
    }
  }
}
</script>
