import { formattedToken } from '@/interceptors/authInterceptor'
import type { IAuth } from '@/types/IAuth'
import axios from 'axios'

export const login = async (user: IAuth) => {
  try {
    const url = import.meta.env.VITE_API_URL + '/login'
    const result = await axios.post(url, user)
    const data = result.data
    let token = ''
    if (data) {
      token = formattedToken(data)
      localStorage.setItem('token', token)

      return {
        id: data?.id,
        rol: data?.rol,
        name: data?.name,
        email: data?.email
      }
    }

    return false
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    localStorage.removeItem('token')
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
