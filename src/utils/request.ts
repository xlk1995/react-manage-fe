import axios from 'axios'
import { message } from 'antd'
import {
  showLoading,
  hideLoading
} from '@/components/loading'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 8000,
  timeoutErrorMessage: '请求超时, 请稍后重试'
})

// 请求拦截器

instance.interceptors.request.use(
  config => {
    showLoading()
    if (import.meta.env.VITE_MOCK === 'true') {
      config.baseURL = import.meta.env.VITE_MOCK_URL
    }
    const token = localStorage.getItem('token')
    if (token) {
      // add token
      config.headers.Authorization = 'Bear ' + token
    }
    return { ...config }
  },
  error => {
    hideLoading()
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data = response.data
    if (data.code === 500001) {
      // logout
      localStorage.removeItem('token')
      location.href = '/'
    } else if (data.code === 0) {
      message.error(data.msg)
      return Promise.reject(data.msg)
    }
    hideLoading()
    return data.data
  },
  error => {
    hideLoading()
    return Promise.reject(error)
  }
)

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params })
  },

  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params)
  }
}
