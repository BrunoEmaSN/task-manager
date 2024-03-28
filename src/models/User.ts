import type { IUser } from '@/types/IUser'

export default class User implements IUser {
  readonly id: number | undefined
  readonly name: string
  readonly email: string
  readonly address: string
  readonly rol: string
  readonly birthDate: string

  constructor(
    id: number | undefined,
    name: string,
    email: string,
    rol: string,
    address: string,
    birthDate: string
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.rol = rol
    this.address = address
    this.birthDate = birthDate
  }
}
