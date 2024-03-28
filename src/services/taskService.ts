import { createTaskFilterAdapter } from '@/adapters/taskAdapter'
import axiosInstance from '@/interceptors/axiosInterceptor'
import type { ITask } from '@/types/ITask'
import type { TaskFiltersClient } from '@/types/Task'

export const findAllTasks = async (filters: TaskFiltersClient) => {
  try {
    const params = createTaskFilterAdapter(filters)
    const url = '/tasks' + params
    const result = await axiosInstance.get(url)
    const data = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}

export const createTask = async (newTask: ITask) => {
  try {
    const result = await axiosInstance.post('/tasks', newTask)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}

export const updateTask = async (task: ITask) => {
  try {
    const url = '/tasks/' + task.id
    const result = await axiosInstance.put(url, task)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}

export const deleteTask = async (id: number) => {
  try {
    const url = '/tasks/' + id
    const result = await axiosInstance.delete(url)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}
