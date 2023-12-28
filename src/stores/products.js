import { defineStore } from 'pinia';
import http from '@/services/http.js';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      try {
        const response = await  http.get('/products');
        this.products = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
  },
});
