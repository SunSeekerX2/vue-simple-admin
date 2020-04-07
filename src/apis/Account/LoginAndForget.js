/**
 * @name 账号》用户登录及忘记密码模块
 * @author SunSeekerX
 * @time 2019-07-31 14:33:41
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 15:38:20
 */

import { request } from '@/utils/request/index.js'

export default {
  // 账号>登录
  userLogin: ({
    source,
    country,
    username,
    password,
    loginCode,
    loginToken,
    geetest_challenge,
    geetest_seccode,
    geetest_validate,
    authType,
    verifyCode,
    googleCode
  }) => {
    return request({
      url: '/user/login',
      method: 'post',
      data: {
        source, // 登录设备（电脑：pc）
        country, // 手机号国家（中国为+86）
        username, // 手机号国家（中国为+86）
        password, // 手机号国家（中国为+86）
        loginCode, // 图片验证码
        loginToken, // 用户登录时的唯一标识
        // 极验
        geetest_challenge,
        geetest_seccode,
        geetest_validate,
        authType,
        verifyCode,
        googleCode
      }
    })
  }
}
