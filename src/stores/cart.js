import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCart',{
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  }),

  actions: {
    addToCart(product_id, product_name, product_image, price, quantity) {
      const existingProductIndex = this.cartItems.findIndex(item => item.product_id === product_id);
      if (existingProductIndex !== -1) {
        this.cartItems[existingProductIndex].quantity += quantity;
      } else {
        this.cartItems.push({
          product_id,
          product_name,
          product_image,
          quantity,
          price,
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

      console.log('Produto adicionado ao carrinho com sucesso');
    },

    removeFromCart(product_id) {
      const updatedCartItems = this.cartItems.filter(item => item.product_id !== product_id);
      this.cartItems = updatedCartItems;

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    },

    updateQuantity(product_id, newQuantity) {
      const updatedCartItems = this.cartItems.map(item => {
        if (item.product_id === product_id) {
          item.quantity = newQuantity;
        }
        return item;
      });

      this.cartItems = updatedCartItems;
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    },
  },

  getters: {
    getCartItems() {
      return this.cartItems;
    },
    getTotalCart(){
        return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    }
  },
});
