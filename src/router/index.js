import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import {userAuth} from '@/stores/auth.js'

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
      component: () => import('../views/WishlistView.vue'),
      meta:{
        auth:true
      }
    },
    {
      path: '/produto/:slug',
      name: 'produto',
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta?.auth) {
    const auth = userAuth();

    if (auth.token) {
      try {
        const isAuthenticated = await auth.checkToken();

        if (isAuthenticated.data.authenticated === true) {
          next();
        } else {
          next({ name: 'login' });
        }
      } catch (error) {
        console.error('Erro ao verificar o token:', error);
        next({ name: 'login' });
      }
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router
