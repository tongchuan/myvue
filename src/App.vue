<template>
  <a-locale-provider :locale="locale">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>

<style lang="less">
html,body{
  background: #eee
}
</style>
