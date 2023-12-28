import { defineStore } from 'pinia';
import http from '@/services/http.js';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),

  getters: {
    getProducts(){
        return this.products
    }
  },

  actions: {
    async fetchProducts() {
      try {
        const response = await  http.get('/products');
        this.products = response.data.data;
        console.log(this.products)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
  },
});
