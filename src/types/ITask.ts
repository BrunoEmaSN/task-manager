import type { IUser } from './IUser'

export interface ITask {
  id: number | undefined
  title: string
  description: string
  status: string
  startDate: string
  endDate: string
  user: IUser
  timeToComplete?: string
}
