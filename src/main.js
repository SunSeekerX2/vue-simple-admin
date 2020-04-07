/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-04-01 13:40:03
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 15:55:38
 */

/**
 * @name 引入依赖库
 */
import Vue from 'vue'
import 'normalize.css/normalize.css' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/**
 * @name 依赖设置
 */
Vue.config.productionTip = false

/**
 * @name 引入文件
 */
import '@/styles/index.scss' 
import App from './App'
import store from './store'
import router from './router'
import '@/icons' 
import '@/permission' 
import * as api from './apis'
import * as onError from './utils/on-error'

/**
 * @name 判断运行打包环境
 */
// const IS_PROD = ['production', 'prod', 'online'].includes(process.env.NODE_ENV)

/**
 * @name 挂载全局组件和安装插件
 */
Vue.use(ElementUI)

/**
 * @name 挂载原型属性
 */
Vue.prototype.$api = api
Vue.prototype.$onError = onError

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
