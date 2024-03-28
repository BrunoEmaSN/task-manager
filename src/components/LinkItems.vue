<template>
  <RouterLink
    to="/"
    class="flex items-center py-4 px-4 rounded hover:bg-cyan-800 transition duration-200 space-x-3"
  >
    <HomeIcon class="w-6 h-6 text-white" />
    <span class="text-white"> Home </span>
  </RouterLink>
  <RouterLink
    to="/tasks"
    class="flex items-center py-3 px-4 rounded hover:bg-cyan-800 transition duration-200 space-x-3"
  >
    <ClipboardIcon class="w-6 h-6 text-white" />
    <span class="text-white"> Tasks </span>
  </RouterLink>
  <RouterLink
    v-if="isSuperAdmin()"
    to="/users"
    class="flex items-center py-3 px-4 rounded hover:bg-cyan-800 transition duration-200 space-x-3"
  >
    <UsersIcon class="w-6 h-6 text-white" />
    <span class="text-white"> Users </span>
  </RouterLink>
  <RouterLink
    v-if="isSuperAdmin()"
    to="/reports"
    class="flex items-center py-3 px-4 rounded hover:bg-cyan-800 transition duration-200 space-x-3"
  >
    <ChartPieIcon class="w-6 h-6 text-white" />
    <span class="text-white"> Reports </span>
  </RouterLink>
</template>
<script lang="ts">
import ROLES from '../constants/roles'
import { useAuthStore } from '../stores/auth'
import { ChartPieIcon, ClipboardIcon, HomeIcon, UsersIcon } from '@heroicons/vue/16/solid'
import { mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useAuthStore)
  },
  components: {
    ChartPieIcon,
    ClipboardIcon,
    HomeIcon,
    UsersIcon
  },
  methods: {
    isSuperAdmin() {
      return this.authStore.getRol === ROLES.SUPERADMIN
    }
  }
}
</script>
