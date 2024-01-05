import { defineStore } from "pinia";
import http from '@/services/http.js'
import { userAuth } from "./auth";

export const useWishListStore = defineStore('wihslist',{
    state: () =>{
      items:[]
    },

    actions:{
        async fetchWishListItems(){
            try {
                const auth = userAuth();
                const response = await http.get('/wishlist',{
                    headers: {
                        'Authorization': 'Bearer ' + auth.token
                    }
                })
                this.items = response.data.data
            } catch (error) {
                console.error('Erro ao buscar lista de desejos:', error);
            }
        },

        async addProductToWishList(product_id){

            try {
                const product = {
                    product_id: product_id
                }
                const auth = userAuth();
                const response = await http.post('/wishlist/add/',product, {
                    headers: {
                        'Authorization': 'Bearer ' + auth.token
                    }
                })
                console.log(response.data)
            } catch (error) {
                console.error('Erro ao adicionar ao carrinho:', error);
            }
        }
    },

    getters: {
        getWishListItems() {
          return this.items;
        }
      }  
})