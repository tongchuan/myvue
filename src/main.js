// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import less from 'less'
import Antd from 'ant-design-vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

Vue.use(less)
Vue.use(Antd)
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// setTimeout(() => {
//   store.commit('increment')
//   console.log(store.state.count)
//   return null
// }, 100)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
