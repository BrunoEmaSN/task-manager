import { createUserFilterAdapter } from '@/adapters/userAdapter'
import axiosInstance from '@/interceptors/axiosInterceptor'
import type { IUser } from '@/types/IUser'
import type { UserFirltersClient } from '@/types/User'

export const findAllUser = async (filters: UserFirltersClient) => {
  try {
    const params = createUserFilterAdapter(filters)
    const url = '/users' + params
    const result = await axiosInstance.get(url)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}

export const findUser = async (id: number) => {
  try {
    const url = '/users/' + id
    const result = await axiosInstance.get(url)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}

export const createUser = async (newUser: IUser) => {
  try {
    const result = await axiosInstance.post('/users', newUser)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (user: IUser) => {
  try {
    const url = '/users/' + user.id
    const result = await axiosInstance.put(url, user)
    const { data } = result.data

    if (data) {
      return data
    }

    return null
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (id: number) => {
  try {
    const url = '/users/' + id
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
