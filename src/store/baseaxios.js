import axios from 'axios'
import Config from '@/store/config'

const instance = axios.create({
  baseURL: Config.baseURL
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('request loadding....')
  return config
}, function (error) {
  // 对请求错误做些什么
  // return Promise.reject(error);
  console.log('loadding....', error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('response loadding....')
  return response
}, function (error) {
  // 对响应错误做点什么
  console.log('loadding....error', error)
  // return Promise.reject(error);
})

export default instance
