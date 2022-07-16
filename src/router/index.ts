import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('../views/pages/Component.vue'),
    children: [
      { path: '' , name: 'components-default', redirect: { name: 'input' } },
      {
        path: 'input',
        name: 'input',
        component: () => import('../views/pages/com-pages/Input.vue')
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('../views/pages/com-pages/Button.vue')
      }
    ]
  },
  {
    path: '/documents',
    name: 'documents',
    component: () => import('../views/pages/Document.vue')
  },

  /** 默认路由重定向 */
  {
    path: '/',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
