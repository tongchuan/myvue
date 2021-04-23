import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
