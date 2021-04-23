import Vue from 'vue'
import Vuex from 'vuex'
import userModules from '@/store/modules/userModules'
import productModules from '@/store/modules/productModules'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: userModules,
    product: productModules
  }
})

export default store
