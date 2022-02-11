import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/Information',
    name: 'Information',
    component: () => import('../views/pages/Information.vue')
  },
  {
    path: '/sms',
    name: 'sms',
    component: () => import('../views/pages/sms.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/pages/login.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
