import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/pages/Component.vue')
  },
  {
    path: '/documents',
    name: 'Documents',
    component: () => import('../views/pages/Document.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
