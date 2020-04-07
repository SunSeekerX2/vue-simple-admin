<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2020-04-07 15:58:34
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-04-07 16:48:08
 -->
<template>
  <div class="app-container">
    <h1>测试页面</h1>
    <p>这个页面用来测试这个项目脚手架的一些功能是否符合预期</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  async mounted() {
    try {
      const res = await this.$api.App.test()
      console.log(res)
      this.$onError.onRequestFail({ msg: 'hahaha' })
    } catch (error) {
      this.$onError.onApiRequestException(error)
    }
  }
}
</script>

<style></style>
