/**
 * @name Axios request module
 * @author SunSeekerX
 * @time 2019-08-13 10:29:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 15:42:06
 */

import axios from 'axios'

import store from '@/store'

/**
 * @name Create request object
 * @param { Object } options options for axios.create
 * @returns { Object } request obj
 */
export default function createRequest(options) {
  // create an axios instance
  const instance = axios.create(
    Object.assign(
      {
        baseURL: process.env.VUE_APP_BASE_API,
        withCredentials: false,
        timeout: 15000
      },
      options
    )
  )

  // Request interceptor
  instance.interceptors.request.use(
    config => {
      if (store.state.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['X-Token'] = store.state.token
      }
      return config
    },
    error => Promise.reject(error)
  )

  // Response interceptor
  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
  )

  // Return instance
  return instance
}
