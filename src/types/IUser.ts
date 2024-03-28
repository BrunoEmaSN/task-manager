import type { ITask } from './ITask'

export interface IUser {
  id: number | undefined
  name: string
  email: string
  address: string
  rol: string
  birthDate: string
  tasks?: ITask[]
}
