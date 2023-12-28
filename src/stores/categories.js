import { defineStore } from "pinia";
import http from '@/services/http.js';

export const useCategoryStore = defineStore('categories',{
    state: () => ({
        categories: [],
      }),
    
      actions: {
        async fetchCategories() {
          try {
            const response = await  http.get('/categories');
            this.categories = response.data.data;
            console.log(this.categories)
          } catch (error) {
            console.error('Erro ao buscar categorias:', error);
          }
        },
      },
})