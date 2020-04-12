/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-04-07 17:00:35
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-12 22:41:08
 */

module.exports = {
  base: '/doc/',
  title: 'vue-simple-admin',
  description: '王彬的前端技术文档',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        // Don't forget to install moment yourself
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    '@vuepress/active-header-links',
    '@vuepress/nprogress'
  ]
}
