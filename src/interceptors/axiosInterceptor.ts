import axios, { type InternalAxiosRequestConfig } from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  config.baseURL = import.meta.env.VITE_API_URL
  config.headers['Content-Type'] = 'application/json'
  return config
})

export default axiosInstance
