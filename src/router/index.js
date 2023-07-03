import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefault from '../components/layouts/LayoutDefault.vue'
import DashboardView from '../views/DashboardView.vue'
import TransactionsView from '../views/TransactionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      component: LayoutDefault,
      children: [
        {
          path: '/',
          component: DashboardView
        },
        {
          path: '/transactions',
          component: TransactionsView
        }
      ]
      
    },
  ]
})

export default router
