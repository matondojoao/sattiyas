import { defineStore } from "pinia";
import http from '@/services/http.js'

export const useBrandStore =  defineStore('brands',{
    state: () => ({
        brands: [],
      }),

    actions:{
        async fetchBrands(){
           try {
               const response = await http.get('/brands')
               this.brands = response.data.data
               console.log(response.data)
           } catch (error) {
               console.error('Erro ao buscar marcas:', error);
           }
        }
    }
})