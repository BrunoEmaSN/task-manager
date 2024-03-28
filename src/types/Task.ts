import type { UserClient, UserServe } from './User'

export type TaskClient = {
  id: number | undefined
  title: string
  description: string
  status: string
  startDate: string
  endDate: string
  user: UserClient
  timeToComplete: string
}

export type TaskServe = {
  id: number | undefined
  title: string
  description: string
  status: string
  start_date: string
  end_date: string
  user: UserServe
  time_to_complete: string
}

export type TaskClientOne = {
  id: number | undefined
  title: string
  description: string
  status: string
  startDate: string
  endDate: string
}

export type TaskServeOne = {
  id: number | undefined
  title: string
  description: string
  status: string
  start_date: string
  end_date: string
}

export type TaskFiltersClient = {
  userId?: number | undefined
  title?: string
  status?: string
  startDate?: string
  endDate?: string
}

export type PaginationServe = {
  current_page: number
  from: number
  last_page: number
  per_page: number
  total: number
}

export type PaginationClient = {
  currentPage: number
  firtsPage: number
  lastPage: number
  perPage: number
  totalPage: number
}
