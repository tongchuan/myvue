// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import less from 'less'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import 'antd/dist/antd.css'
import './less/default.less'
Vue.config.productionTip = false

Vue.use(less)

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
