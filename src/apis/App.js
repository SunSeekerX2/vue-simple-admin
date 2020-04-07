/**
 * @name App.js
 * @author SunSeekerX
 * @time 2019-09-27 09:24:27
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 15:40:09
 */

import { request } from '@/utils/request/index.js'

export default {
  // app 》 获取app初始化信息
  getConfig: () => {
    return request({
      url: '/user/getConfig',
      method: 'get'
    })
  },

  test: () => {
    return request({
      url: 'http://dev.entry.bandex.lvyii.com/exchange/exchange/decimalDetails?langCode=zh_CN&_t=1586245158',
      method: 'get'
    })
  }
}
