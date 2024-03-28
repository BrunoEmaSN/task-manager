<template>
  <div class="relative flex min-h-screen w-screen">
    <!-- sidebar -->
    <div
      class="flex flex-wrap absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out z-20"
      :class="{ 'adsolute -translate-x-0': showSidebar }"
    >
      <div class="bg-cyan-700 text-gray-100 w-64 space-y-2 relative">
        <div class="flex items-center space-x-2 py-5 px-4 bg-cyan-900">
          <ChartBarSquareIcon class="w-8 h-8 text-white" />
          <span class="text-xl font-extrabold text-white">Task Manager</span>
        </div>
        <nav class="px-2 py-1">
          <LinkItems />
        </nav>
        <MadeBy />
      </div>
      <div class="py-4 px-3" :class="{ hidden: !showSidebar }">
        <button
          @click="showSidebar = !showSidebar"
          class="text-cyan-700 font-extrabold transition duration-300 ease-in-out"
        >
          <XMarkIcon class="w-8 h-8 text-white" />
        </button>
      </div>
    </div>

    <!-- content -->
    <div class="flex-1 bg-slate-100">
      <div
        class="fixed inset-0 z-10 bg-gray-700 opacity-30 md:hidden transition duration-300 ease-in-out"
        :class="{ hidden: !showSidebar }"
      ></div>
      <header class="bg-gray-900">
        <div class="flex flex-wrap items-center space-x-2 py-3 px-4">
          <div>
            <button
              @click="showSidebar = !showSidebar"
              class="text-cyan-700 font-extrabold transition duration-200 ease-in-out md:invisible"
            >
              <Bars3Icon class="w-6 h-6 text-white" />
            </button>
          </div>
          <div class="flex flex-1 justify-end items-center px-4 space-x-5">
            <div class="text-gray-400">Hello, {{ getName() }}</div>
            <nav>
              <RouterLink
                to="/account"
                class="flex items-center py-3 px-4 rounded hover:text-cyan-800 transition duration-200 hover:bg-transparent"
              >
                <UserCircleIcon class="w-6 h-6 text-white" />
              </RouterLink>
            </nav>
          </div>
        </div>
      </header>
      <div class="px-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import LinkItems from './LinkItems.vue'
import MadeBy from './MadeBy.vue'
import { Bars3Icon, ChartBarSquareIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/16/solid'
import { mapStores } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default {
  computed: {
    ...mapStores(useAuthStore)
  },
  components: {
    LinkItems,
    MadeBy,
    Bars3Icon,
    ChartBarSquareIcon,
    UserCircleIcon,
    XMarkIcon
  },
  setup() {
    const showSidebar = ref(false)

    return {
      showSidebar
    }
  },
  methods: {
    getName() {
      return this.authStore.getName
    }
  }
}
</script>
