import type { TaskClientOne, TaskServeOne } from './Task'

export type UserClient = {
  id: number | undefined
  name: string
  email: string
  address: string
  rol: string
  birthDate: string
  tasks: TaskClientOne[]
}

export type UserServe = {
  id: number | undefined
  name: string
  email: string
  address: string
  rol: string
  birth_date: string
  tasks: TaskServeOne[]
}

export type UserClientOne = {
  id: number | undefined
  name: string
  email: string
  address: string
  rol: string
  birthDate: string
}

export type UserServeOne = {
  id: number | undefined
  name: string
  email: string
  address: string
  rol: string
  birth_date: string
}

export type UserFirltersClient = {
  id?: number
  name?: string
  rol?: string
  email?: string
}
