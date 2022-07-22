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
    component: () => import('../views/pages/Document.vue'),
    children: [
      { path: '', name: 'document-default', redirect: {name: 'introduce'}},
      {
        path: 'introduce',
        name: 'introduce',
        component: () => import('../views/pages/doc-pages/Introduce.vue')
      },
      {
        path: 'install',
        name: 'install',
        component: () => import('../views/pages/doc-pages/Install.vue')
      }
    ]
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
