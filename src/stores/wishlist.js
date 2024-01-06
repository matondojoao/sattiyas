import { defineStore } from "pinia";
import http from '@/services/http.js'
import { userAuth } from "./auth";

export const useWishListStore = defineStore('wihslist', {
    state: () => {
        items: []
    },

    actions: {
        async fetchWishListItems() {
            try {
                const auth = userAuth();
                const response = await http.get('/wishlist', {
                    headers: {
                        'Authorization': 'Bearer ' + auth.token
                    }
                })
                this.items = response.data.data
            } catch (error) {
                console.error('Erro ao buscar lista de desejos:', error);
            }
        },

        async addProductToWishList(product_id) {
            try {
                const auth = userAuth();
                const product = { product_id: product_id };

                console.log(product);

                const response = await http.post('/wishlist', product, {
                    headers: {
                        'Authorization': 'Bearer ' + auth.token
                    }
                });

            } catch (error) {
                console.error('Erro ao adicionar produto à lista de desejos:', error);
            }
        },
        async removeProductToWishList(product_id) {
            try {
                const auth = userAuth();

                const response = await http.delete(`/wishlist/remove/${product_id}`, {
                    headers: {
                        'Authorization': 'Bearer ' + auth.token
                    }
                });
            } catch (error) {
                console.error('Erro ao remover produto à lista de desejos:', error);
            }
        }

    },

    getters: {
        getWishListItems() {
            return this.items;
        }
    }
})