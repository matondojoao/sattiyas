import { defineStore } from 'pinia';
import http from '@/services/http.js';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),

    getters: {
        getItems() {
            return this.items
        }
    },

    actions: {
        async addProductToCart({ product, quantity = 1 }) {
            const cartItem = { product, quantity };
    
            try {
                const response = await http.post('/cart/add', cartItem);
                console.log(response.data);
    
                await this.fetchItems();
            } catch (error) {
                console.error('Erro ao adicionar produto ao carrinho:', error);
            }
        },
    
        async fetchItems() {
            try {
                const response = await http.get('/cart');
                this.items = response.data;
                console.log(this.items);
            } catch (error) {
                console.error('Erro ao buscar produtos no carrinho:', error);
            }
        },
    },
    
});
