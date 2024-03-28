import type { UserClient, UserServe } from '@/types/User'

export const formattedUser = (user: UserServe) => {
  const data: UserClient = {
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
    rol: user.rol,
    birthDate: user.birth_date,
    tasks: user.tasks.map((u) => ({
      id: u.id,
      title: u.title,
      description: u.description,
      status: u.status,
      startDate: u.start_date,
      endDate: u.end_date
    }))
  }

  return data
}
