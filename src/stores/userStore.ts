import { defineStore } from 'pinia'
import type { IUser } from '../types/IUser'
import { createUser, deleteUser, findAllUser, findUser, updateUser } from '@/services/userService'
import { toast } from 'vue3-toastify'
import { toastConfig } from '@/constants/toastConfig'
import type { UserFirltersClient } from '../types/User'
import { formattedUser } from '@/interceptors/userInterceptor'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {} as IUser,
      users: [] as IUser[]
    }
  },
  actions: {
    addOrSelectedUser(newUser: IUser) {
      this.user = newUser
    },
    cleanUserSelected() {
      this.user = {} as IUser
    },
    async findUsers(filters: UserFirltersClient) {
      const result = await findAllUser(filters)
      if (result) {
        this.users = result
      } else {
        toast.error('❌ Sorry, could not load users', toastConfig)
      }
    },
    async findOneUser(id: number) {
      const result = await findUser(id)
      if (result) {
        this.user = formattedUser(result) as IUser
      } else {
        toast.error('❌ Sorry, could not load users', toastConfig)
      }
    },
    async addNewUser(userData: IUser) {
      const result = await createUser(userData)
      if (result) {
        this.users.push(userData)
        toast.success('✅ User save', toastConfig)
      } else {
        toast.error('❌ Sorry, data could not be saved', toastConfig)
      }
    },
    async editUser(userData: IUser) {
      const result = await updateUser(userData)
      if (result) {
        const prevUser = this.users.find((u) => u.id === userData.id)
        if (prevUser) {
          this.users = [...this.users, userData]
        }
        this.users = this.users.sort((a, b) => a.id! - b.id!)
        toast.success('✅ User update', toastConfig)
      } else {
        toast.error('❌ Sorry, data could not be updated', toastConfig)
      }
    },
    async removeUser(id: number) {
      const result = await deleteUser(id)
      if (result) {
        const newUsersArray = this.users.filter((u) => u.id !== id)
        this.users = newUsersArray
        toast.success('✅ User delete', toastConfig)
      } else {
        toast.error('❌ Sorry, data could not be deleted', toastConfig)
      }
    }
  },
  getters: {
    getUsers(): IUser[] {
      return this.users
    }
  }
})
