import axios from 'axios'
import store from '@/store'
import auth from './auth'

const service = axios.create({
  baseURL: null,
  timeout: 1000
})

service.interceptors.request.use((config) => {
  if (store.getters.skipAuth) {
    return config
  }
  if (auth.getAuthToken()) {
    config.headers.Authorization = `Bearer ${auth.getAuthToken()}`
  }
  return config
}, (error) => {
  Promise.reject(error)
})

export default service
