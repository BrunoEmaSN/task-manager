<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="flex items-center justify-center space-x-2 py-5 px-4 bg-cyan-600 rounded-t-lg">
        <ChartBarSquareIcon class="w-8 h-8 text-white" />
        <span class="text-xl font-extrabold text-white">Task Manager</span>
      </div>
      <div class="bg-gray-100 p-5 rounded-b-lg">
        <h2 class="mt-2 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required="true"
              :value="email"
              @input="changeEmail($event)"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-cyan-600 hover:text-cyan-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required="true"
              :value="password"
              @input="changePassword($event)"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
        </div>

        <div class="mt-4">
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="loginMethods"
            :disabled="loading"
          >
            <ArrowPathIcon v-if="loading" class="w-6 h-6 animate-spin" />
            <p v-if="!loading" class="font-semibold">Login</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ArrowPathIcon, ChartBarSquareIcon } from '@heroicons/vue/16/solid'
import { mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useAuthStore)
  },
  components: {
    ChartBarSquareIcon,
    ArrowPathIcon
  },
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    changeEmail(event: Event) {
      this.email = (event.target as HTMLInputElement).value
    },
    changePassword(event: Event) {
      this.password = (event.target as HTMLInputElement).value
    },
    async loginMethods() {
      this.loading = true
      await this.authStore.loginUser(this.email, this.password)
      this.loading = false
    }
  }
}
</script>
