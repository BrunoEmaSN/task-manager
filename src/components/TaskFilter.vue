<template>
  <div class="grid grid-cols-1 gap-x-6 sm:grid-cols-4 lg:grid-cols-5 items-end">
    <TextField label="Title" name="title" type="text" :value="title" />
    <VSelect label="Satus" name="status" :options="allStatus" :value="status" />
    <VSelect label="Assigned" name="user" :options="users" :value="userId" />
    <VButton @click="filterTasks" text="Filter" name="button" classStyle="w-full lg:w-40" />
  </div>
  <button
    class="rounded-md bg-cyan-600 px-5 py-3 mb-4 text-md font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 w-full flex justify-center"
  >
    <PlusIcon class="w-6 h-6" />
  </button>
</template>

<script lang="ts">
import TextField from './TextField.vue'
import VSelect from './VSelect.vue'
import STATUS from '../constants/status'
import VButton from './VButton.vue'
import { PlusIcon } from '@heroicons/vue/16/solid'

export default {
  props: ['title', 'status', 'userId', 'filter'],
  emits: ['update:title', 'update:status', 'update:userId'],
  components: {
    TextField,
    VSelect,
    VButton,
    PlusIcon
  },
  data() {
    return {
      allStatus: [
        {
          id: 'all',
          title: 'All',
          value: ''
        },
        {
          id: STATUS.PENDING,
          title: 'Pending',
          value: STATUS.PENDING
        },
        {
          id: STATUS.PROGRESS,
          title: 'In Progress',
          value: STATUS.PROGRESS
        },
        {
          id: STATUS.BLOCKED,
          title: 'Blocked',
          value: STATUS.BLOCKED
        },
        {
          id: STATUS.DONE,
          title: 'Done',
          value: STATUS.DONE
        }
      ],
      users: [
        {
          id: 0,
          title: 'All',
          value: 0
        },
        {
          id: 1,
          title: 'Bruno Sanchez',
          value: 1
        },
        {
          id: 2,
          title: 'Rebeca Martinez',
          value: 2
        }
      ]
    }
  },
  methods: {
    async filterTasks() {
      this.filterTasks()
    }
  }
}
</script>
