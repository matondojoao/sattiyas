import { defineStore } from 'pinia';
import { computed } from 'vue'; 

import http from '@/services/http.js';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts({ name = '', min_price = '', max_price = '', categories = [],sizes=[],colors=[], brand = '', order_by = '' } = {}) {
      try {
        const params = new URLSearchParams();
        params.append('name', name);
        params.append('min_price', min_price);
        params.append('max_price', max_price);
        categories.forEach(category => params.append('categories[]', category));
        sizes.forEach(size => params.append('sizes[]', size));
        colors.forEach(color => params.append('colors[]', color));
        params.append('brand', brand);
        params.append('order_by', order_by);

        const response = await http.get('/products', { params });
        this.products = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
  },

  getters: {
    getProducts() {
      return this.products;
    }
  }  
});
