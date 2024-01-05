<script setup>
import { useWishListStore } from '@/stores/wishlist';
import { onMounted, ref, watchEffect } from 'vue';
import { main } from '@/assets/js/main.js';

const items = ref([]);

const fetchWishListItems = async () => {
  try {
     await useWishListStore().fetchWishListItems();
     items.value = useWishListStore().getWishListItems;
  } catch (error) {
    console.error('Erro ao buscar lista de desejos:', error);
  }
};

onMounted(async () => {
  await fetchWishListItems();
  main();
});

</script>

<template>
  <div class="container">
    <div class="table-responsive">
      <table class="cs_cart_table cs_size1">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Status de Estoque</th>
            <th>Remover</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>
              <div class="cs_cart_table_media">
                <img src="" alt="Thumb">
                <h3>Camiseta masculina de algodão preto puro</h3>
              </div>
            </td>
            <td>300.00</td>
            <td>Em estoque</td>
            <td class="text-center">
              <button class="cs_cart-table-close"><i class="fa-solid fa-xmark"></i></button>
            </td>
            <td class="text-end"><a href="cart.html" class="cs_btn cs_style_1 cs_type_1 cs_fs_16 cs_medium">Adicionar ao
                Carrinho</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="cs_height_140 cs_height_lg_80"></div>
<hr></template>