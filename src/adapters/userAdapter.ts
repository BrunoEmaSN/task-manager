import type { UserFirltersClient } from '@/types/User'

export const createUserFilterAdapter = (filter: UserFirltersClient) => {
  let data = '?'

  if (filter.name) {
    data += `name[like]=${filter.name}&`
  }

  if (filter.email) {
    data += `email[like]=${filter.email}&`
  }

  if (filter.rol && filter.rol !== 'all') {
    data += `rol=[eq]=${filter.rol}&`
  }

  if (data === '?') {
    data = ''
  }

  return data
}
