/**
 * @name Export request object
 * @author SunSeekerX
 * @time 2019-12-06 10:15:04
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 15:37:42
 */

import createRequest from './request'

// default axios instance
const request = createRequest()
// socket axios instance
const socketService = createRequest({
  baseURL: process.env.VUE_APP_SOCKET_BASE_API
})

export { request, socketService }
