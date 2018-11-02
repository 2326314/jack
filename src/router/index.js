import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/views/cont'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav
    }
  ]
})
