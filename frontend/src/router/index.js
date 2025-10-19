import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import Login from '@/pages/Login.vue'
import SimpleLayout from '@/components/layouts/SimpleLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // ignore this if DefaultLayout is used
    // meta: {
    //   layout: DefaultLayout,
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      layout: SimpleLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
