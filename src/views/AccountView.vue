<template>
  <h1 class="text-gray-900 my-5 text-2xl font-semibold">Account</h1>
  <div
    class="flex justify-between rounded-lg border border-zinc-800 bg-midnight p-3 transition-all hover:shadow-lg"
  >
    <div className="w-full">
      <p class="text-xl text-gray-800">Name: {{ getName() }}</p>
      <p className="text-xl text-gray-600">Rol: {{ getRol() }}</p>
      <p className="text-xl text-gray-600">Email: {{ getEmail() }}</p>
    </div>
  </div>

  <div class="flex justify-end mt-5">
    <button
      class="space-x-2 rounded-md bg-gray-600 px-5 py-3 mb-4 text-md font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 flex justify-center"
      @click="logoutUser"
      :disabled="loading"
    >
      <ArrowPathIcon v-if="loading" class="w-6 h-6 animate-spin" />
      <p v-if="!loading">Logout</p>
      <ArrowLeftStartOnRectangleIcon v-if="!loading" class="w-6 h-6" />
    </button>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ArrowLeftStartOnRectangleIcon, ArrowPathIcon } from '@heroicons/vue/16/solid'
import { mapStores } from 'pinia'

export default {
  data() {
    return {
      loading: false
    }
  },
  components: {
    ArrowLeftStartOnRectangleIcon,
    ArrowPathIcon
  },
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
    getName() {
      return this.authStore.getName
    },
    getRol() {
      return this.authStore.getRol
    },
    getEmail() {
      return this.authStore.getEmail
    },
    async logoutUser() {
      this.loading = true
      await this.authStore.logoutUser()
      this.loading = false
    }
  }
}
</script>
