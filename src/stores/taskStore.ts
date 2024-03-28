import { toastConfig } from '@/constants/toastConfig'
import { createTask, deleteTask, findAllTasks, updateTask } from '@/services/taskService'
import type { ITask } from '@/types/ITask'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import type { TaskFiltersClient } from '../types/Task'
import { createPaginationServeAdapter, createTasksServeAdapter } from '@/adapters/taskAdapter'

export const useTaskStore = defineStore('task', {
  state: () => {
    return {
      task: {} as ITask,
      tasks: [] as ITask[],
      currentPage: 1,
      totalPage: 1,
      perPage: 15,
      firstPage: 1,
      lastPage: 1
    }
  },
  actions: {
    addOrSelectedTask(newTask: ITask) {
      this.task = newTask
    },
    cleanUserSelected() {
      this.task = {} as ITask
    },
    async findTasks(filters: TaskFiltersClient) {
      const result = await findAllTasks(filters)
      if (result) {
        const tasks = createTasksServeAdapter(result?.data)
        const pagination = createPaginationServeAdapter(result?.meta)
        this.tasks = tasks as ITask[]
        this.currentPage = pagination.currentPage
        this.totalPage = pagination.totalPage
        this.perPage = pagination.perPage
        this.firstPage = pagination.firtsPage
        this.lastPage = pagination.lastPage
      } else {
        toast.error('❌ Sorry, could not load tasks', toastConfig)
      }
    },
    async addNewTask(taskData: ITask) {
      const result = await createTask(taskData)
      if (result) {
        this.tasks.push(taskData)
        toast.success('✅ Task save', toastConfig)
      } else {
        toast.error('❌ Sorry, data could not be saved', toastConfig)
      }
    },
    async editTask(taskData: ITask) {
      const result = await updateTask(taskData)
      if (result) {
        const prevTask = this.tasks.find((t) => t.id === taskData.id)
        if (prevTask) {
          this.tasks = [...this.tasks, taskData]
        }
        this.tasks = this.tasks.sort((a, b) => a.id! - b.id!)
        toast.success('✅ Task update', toastConfig)
      } else {
        toast.error('❌ Sorry, data could not be updated', toastConfig)
      }
    },
    async removeTask(id: number) {
      const result = await deleteTask(id)
      if (result) {
        const newTasksArray = this.tasks.filter((t) => t.id !== id)
        this.tasks = newTasksArray
        toast.success('✅ Task delete', toastConfig)
      } else {
        toast.error('❌ Sorry, data could not be deleted', toastConfig)
      }
    }
  },
  getters: {
    getTasks(): ITask[] {
      return this.tasks
    }
  }
})
