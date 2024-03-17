import axios from 'axios'
import { message } from 'antd'
import {
  showLoading,
  hideLoading
} from '@/components/loading'

const instance = axios.create({
  baseURL: '/api',
  timeout: 8000,
  timeoutErrorMessage: '请求超时, 请稍后重试'
})

// 请求拦截器

instance.interceptors.request.use(
  config => {
    showLoading()
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
  get(url: string, params: any) {
    return instance.get(url, { params })
  },

  post(url: string, params: any) {
    return instance.post(url, params)
  }
}
