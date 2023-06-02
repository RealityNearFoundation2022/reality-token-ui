import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/description',
      name: '/description',
      component: () => import('../sections/DescriptionSection.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../sections/AboutSection.vue')
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('../sections/PurchaseSection.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../sections/ContactSection.vue')
    }
  ]
})

export default router
