/**
 * @name Handle error
 * @author SunSeekerX
 * @time 2019-11-27 15:18:44
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 15:57:45
 */
import { Notification } from 'element-ui'

// There is an unsolvable problem here so do not use "Notification" directly
const Notify = Notification

let timer = null
/**
 * @name 防抖通知
 * @param { Object } options 通知配置对象
 */
function NotifyFun(options) {
  if (timer) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
    }, 300)
    return
  }
  Notify(
    Object.assign(
      {
        title: '警告',
        type: 'warning'
      },
      options
    )
  )
  timer = setTimeout(() => {
    timer = null
  }, 300)
}

/**
 * @name Handle api request exception
 * @description when api request fail, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function onApiRequestException(e) {
  /**
   * 此处可以配置各种个性化的请求进入catch进行的处理
   * 主要用来配合${src/utils/request/request.js}封装的请求错误
   * 可以处理类似token失败重新登录、接口500，等等
   */
  console.error(e)
}

/**
 * @name Handle WebSocket exception
 * @description when WebSocket exception, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function onSocketException(e) {
  console.error(e)
  NotifyFun({
    title: '错误',
    message: 'WebSocket运行错误',
    type: 'error'
  })
}

/**
 * @name Handle application exception
 * @description when Application exception, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function onApplicationException(e) {
  console.error(e)
  NotifyFun({
    title: '错误',
    message: '程序运行错误',
    type: 'error'
  })
}

/**
 * @name Handle request fail
 * @description when the success form request result is not true, using this fun.
 */
function onRequestFail({ msg = '请求失败' }) {
  NotifyFun({
    message: msg
  })
}

export {
  // 防抖通知方法
  NotifyFun,
  // ajax请求catch用这个，用的最多的也是这个
  onApiRequestException,
  // 关于websocket可能连接出错用这个
  onSocketException,
  // 程序可能出错误可以用这个
  onApplicationException,
  // 请求返回结果的success为false可以用这个
  onRequestFail
}
