import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 8000,
  timeoutErrorMessage: '请求超时, 请稍后重试'
})

// 请求拦截器

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      // add token
      config.headers.Authorization = 'Bear ' + token
    }
    return { ...config }
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    console.log(response, '======')
    const data = response.data
    console.log(data, '666')

    if (data.code === 500001) {
      // logout
      localStorage.removeItem('token')
      location.href = '/'
    } else if (data.code === 0) {
      return Promise.reject(data.msg)
    }
    console.log(data.data, '555')

    return data.data
  },
  error => {
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
