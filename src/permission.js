/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-04-01 13:40:03
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 16:39:09
 */
import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
