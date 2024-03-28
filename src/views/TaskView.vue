<template>
  <h1 class="text-gray-900 mt-5 text-2xl font-semibold">Title</h1>
  <h1 class="text-gray-900 mt-5 font-semibold">description</h1>
  <div class="flex justify-center px-4 space-x-5">
    <button
      class="inline-block px-4 py-2 text-gray-900 hover:text-cyan-600"
      @click="showComments"
      :disabled="tab === 'comments'"
      :class="{ 'text-gray-600': tab === 'comments', 'hover:text-gray-600': tab === 'comments' }"
    >
      Comments
    </button>
    <button
      class="inline-block px-4 py-2 text-gray-900 hover:text-cyan-600"
      @click="showFiles"
      :disabled="tab === 'files'"
      :class="{ 'text-gray-600': tab === 'files', 'hover:text-gray-600': tab === 'files' }"
    >
      Files
    </button>
  </div>
  <div v-if="tab === 'comments'">
    <h1 class="text-gray-900 mt-5 font-semibold">Comment</h1>
  </div>
  <div v-if="tab === 'files'">
    <VFiles />
  </div>
</template>

<script lang="ts">
import VFiles from '@/components/VFiles.vue'

export default {
  components: {
    VFiles
  },
  data() {
    return {
      tab: 'comments'
    }
  },
  methods: {
    showComments() {
      this.tab = 'comments'
    },
    showFiles() {
      this.tab = 'files'
    }
  }
}
</script>
