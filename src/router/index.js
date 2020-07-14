import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, 
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home')
    },
    {
      path: '/404',
      name: 'error_404',
      component: () => import('@/views/errorPage/404')
    }
  ]
})

export default router

