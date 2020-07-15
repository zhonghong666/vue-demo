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
      component: () => import('@/views/page/home/index.vue')
    },
    {
      path: '/500',
      name: 'error_500',
      component: () => import('@/views/page/errorPage/500.vue')
    },
    {
      path: '/401',
      name: 'error_401',
      component: () => import('@/views/page/errorPage/401.vue')
    },
    {
      path: '*',
      name: 'error_404',
      component: () => import('@/views/page/errorPage/404.vue')
    }
  ]
})

export default router

