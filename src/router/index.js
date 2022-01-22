import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {  path: '/',  name: 'Login', component: () => import('../views/Login')},
  {  path: '/Dashboard', name: 'Dashboard',component: () => import( '../views/Dashboard') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
