import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios'
import authUtil from '@/features/auth/auth.utils'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
})

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = authUtil.getAccessToken()

    if (!config.headers) config.headers = new AxiosHeaders()

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
