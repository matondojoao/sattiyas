<script setup>
  import { RouterLink } from "vue-router";
  import { computed, onMounted } from "vue";
  import { useShoppingCartStore  } from '@/stores/cart';

  const shoppingCartStore = useShoppingCartStore();
  
onMounted(async () => {
});

  const items = computed(()=>{
    return shoppingCartStore.getCartItems
  });

</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="table-responsive">
            <table class="cs_cart_table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.product_id">
                  <td>
                    <div class="cs_cart_table_media">
                      <img :src="item.product_image" alt="Thumb">
                      <h3>{{ item.product_name }}</h3>
                    </div>
                  </td>
                  <td>{{ item.price }}</td>
                  <td>
                    <div class="cs_quantity">
                      <button class="cs_quantity_btn cs_increment"><i class="fa-solid fa-angle-up"></i></button>
                      <span class="cs_quantity_input">{{ item.quantity }}</span>
                      <button class="cs_quantity_btn cs_decrement"><i class="fa-solid fa-angle-down"></i></button>
                    </div>
                  </td>
                  <td>{{ item.quantity * item.regular_price}}</td>
                  <td class="text-center">
                    <button class="cs_cart-table-close"><i class="fa-solid fa-xmark"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="cs_height_30 cs_height_lg_30"></div>
        </div>
        <div class="col-xl-4">
          <div class="cs_shop-side-spacing">
            <div class="cs_shop-card">
              <h2 class="cs_fs_21 cs_medium">Código de Cupom</h2>
              <form action="#" class="cs_coupon-doce-form">
                <input type="text" placeholder="Código do Cupom">
                <button class="cs_product_btn cs_color1 cs_semi_bold">Aplicar</button>
              </form>
              <div class="cs_height_30 cs_height_lg_30"></div>
              <h2 class="cs_fs_21 cs_medium">Total do Carrinho</h2>
              <table class="cs_medium">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td class="text-end">$605.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td class="text-end">$605.00</td>
                  </tr>
                </tbody>
              </table>
              <div class="cs_height_30 cs_height_lg_30"></div>
              <RouterLink :to="{name:'checkout'}" class="cs_btn cs_style_1 cs_fs_16 cs_medium w-100">Prosseguir para o Checkout</RouterLink>
            </div>
            <div class="cs_height_30 cs_height_lg_30"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="cs_height_110 cs_height_lg_50"></div>
    <hr>
  </template>
  