import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, 
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router

