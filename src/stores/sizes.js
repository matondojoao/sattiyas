import { defineStore } from "pinia";
import http from '@/services/http'

export const useSizeStore= defineStore('sizes', {
    state: () => ({
       sizes:[]
    }),

    actions:{
        async fetchSizes(){
            try {
                const response = await http.get('sizes')
                this.sizes = response.data.data
            } catch (error) {
                console.error('Erro ao buscar tamanhos:', error);
            }
        }
    }
})