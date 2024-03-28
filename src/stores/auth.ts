import { toastConfig } from '@/constants/toastConfig'
import router from '@/router'
import { login, logout } from '@/services/authService'
import type { IAuth } from '@/types/IAuth'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    id: 0,
    rol: '',
    name: '',
    email: ''
  }),
  actions: {
    async loginUser(email: string, password: string) {
      const credential: IAuth = {
        email,
        password
      }
      const result = await login(credential)
      if (result) {
        this.id = result.id
        this.rol = result.rol
        this.name = result.name
        this.email = result.email
        router.push('/home')
        toast.success('✅ Login', toastConfig)
      } else {
        toast.error('❌ Sorry, could not login', toastConfig)
      }
    },
    async logoutUser() {
      const result = await logout()
      if (result) {
        router.push('/login')
        toast.success('✅ Logout', toastConfig)
      } else {
        toast.error('❌ Sorry, could not logout', toastConfig)
      }
    }
  },
  getters: {
    getRol(): string {
      return this.rol
    },
    getName(): string {
      return this.name
    },
    getEmail(): string {
      return this.email
    }
  },
  persist: true
})
