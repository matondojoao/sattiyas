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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/loja',
      name: 'loja',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/sucesso',
      name: 'sucesso',
      component: () => import('../views/Invoice.vue')
    },
    {
      path: '/lista-de-desejos',
      name: 'lista-de-desejos',
      component: () => import('../views/WishlistView.vue')
    },
    {
      path: '/produto/:slug',
      name: 'produto',
      component: () => import('../views/ProductDetailsView.vue')
    }
  ]
})

export default router
