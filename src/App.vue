<template>
  <ConfigProvider :locale="zhCN">
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <router-view/>
    </div>
  </ConfigProvider>
</template>

<script>
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
export default {
  name: 'App',
  components: {
    ConfigProvider
  },
  data () {
    return zhCN
  }
}
</script>

<style lang="less">
html,body{
  background: #eee
}
</style>
