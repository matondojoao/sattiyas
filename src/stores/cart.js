import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore('shoppingCart', {
    state: () => ({
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
    }),

    actions: {
        addToCart(product_id,product_name, product_image,regular_price,quantity) {
            const existingProductIndex = this.cartItems.findIndex(item => item.product_id === product_id);
            if (existingProductIndex !== -1) {
                this.cartItems[existingProductIndex].quantity += quantity;
            } else {
                this.cartItems.push({
                    product_id,
                    product_name,
                    product_image,
                    quantity,
                    regular_price
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

            console.log("Produto adicionado ao carrinho com sucesso")
        }
    },

    getters: {
        getCartItems() {
            return this.cartItems
        }
    },
});