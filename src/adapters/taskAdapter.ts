import type {
  PaginationClient,
  PaginationServe,
  TaskClient,
  TaskFiltersClient,
  TaskServe
} from '@/types/Task'

export const createTaskFilterAdapter = (filters: TaskFiltersClient) => {
  let params = '?include_user=true&'

  if (filters.title) {
    params += `title[like]=${filters.title}&`
  }

  if (filters.status && filters.status !== 'all') {
    params += `status[eq]=${filters.status}&`
  }

  if (filters.startDate) {
    params += `start_date[gte]=${filters.startDate}&`
  }

  if (filters.endDate) {
    params += `end_date[lte]=${filters.endDate}&`
  }

  if (filters.userId) {
    params += `user_id[eq]=${filters.userId}`
  }

  return params
}

export const createTasksServeAdapter = (tasksServe: TaskServe[]) => {
  const data: TaskClient[] = tasksServe.map((task) => ({
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    startDate: task.start_date,
    endDate: task.end_date,
    user: {
      id: task.user?.id,
      name: task.user?.name,
      email: task.user?.email,
      address: task.user?.address,
      rol: task.user?.rol,
      birthDate: task.user?.birth_date
    },
    timeToComplete: task.time_to_complete
  }))

  return data
}

export const createPaginationServeAdapter = (paginationServe: PaginationServe) => {
  const data: PaginationClient = {
    currentPage: paginationServe.current_page,
    firtsPage: paginationServe.from,
    lastPage: paginationServe.last_page,
    perPage: paginationServe.per_page,
    totalPage: paginationServe.total
  }

  return data
}
