import { defineStore } from "pinia";
import http from '@/services/http.js'

export const useColorStore =  defineStore('colors',{
    state: () => ({
        colors: [],
      }),

    actions:{
        async fetchColors(){
           try {
               const response = await http.get('/colors')
               this.colors = response.data.data
           } catch (error) {
               console.error('Erro ao buscar marcas:', error);
           }
        }
    }
})