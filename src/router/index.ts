import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import TasksView from '@/views/TasksView.vue'
import UsersView from '@/views/UsersView.vue'
import ReportsView from '@/views/ReportsView.vue'
import AccountView from '@/views/AccountView.vue'
import LoginView from '@/views/LoginView.vue'
import TaskView from '@/views/TaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          alias: '/home',
          name: 'home',
          component: DashboardView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/tasks',
          name: 'tasks',
          component: TasksView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/task',
          name: 'task',
          component: TaskView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/users',
          name: 'users',
          component: UsersView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/reports',
          name: 'reports',
          component: ReportsView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/account',
          name: 'account',
          component: AccountView,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (token) {
      next()
      return
    } else {
      next('/login')
    }
  } else {
    if (token) {
      next('/')
    }
    next()
  }
})

export default router
