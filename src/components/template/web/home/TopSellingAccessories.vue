<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { main } from '@/assets/js/main.js';
import http from '@/services/http.js';
import { useShoppingCartStore } from '@/stores/cart';
import { userAuth } from '@/stores/auth';

const products = ref([]);
const isDataLoaded = ref(false);
const isUserAuthenticated = ref(false)
const shoppingCartStore = useShoppingCartStore()
const auth = userAuth();
async function checkAuthentication() {

try {

   const tokenAuth = 'Bearer ' + auth.token;
   const data = await http.get('/auth/verify', {
      headers: {
         'Authorization': tokenAuth
      }
   });

   if (data.data.authenticated == true) {
      isUserAuthenticated.value = true;
   } else {
      isUserAuthenticated.value = false;
   }
} catch (error) {
   console.error('Erro ao verificar o token:', error);
}

}
const fetchProducts = async () => {
  try {
    const response = await http.get('/products?categories[]=174a942f-b996-43a9-9ae6-e2121a684c4c')
    products.value = response.data.data
    isDataLoaded.value = true;
  } catch (error) {
    console.error('Erro ao buscar acessorios:', error);
  }
};

function addToCart(product_id, product_name, product_image, regular_price, sale_price, quantity) {
    let price = sale_price || regular_price;
    shoppingCartStore.addToCart(product_id, product_name, product_image, price, quantity);
}

onMounted(async () => {
  await fetchProducts();
});

watchEffect(() => {
  if (isDataLoaded.value) {
    main();
  }
});
</script>

<template>
  <section class="cs_slider position-relative" v-if="products.length > 0">
    <div class="container">
      <div class="cs_section_heading cs_style_1">
        <div class="cs_section_heading_in">
          <h2 class="cs_section_title cs_fs_50 cs_bold mb-0">Acessórios mais vendidos</h2>
        </div>
        <div class="cs_slider_arrows cs_style_2 cs_hide_mobile">
          <div class="cs_left_arrow cs_slider_arrow cs_accent_color">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div class="cs_right_arrow cs_slider_arrow cs_accent_color">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div class="cs_height_63 cs_height_lg_35"></div>
    </div>
    <div class="container-fluid">
      <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
        data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lg-slides="3"
        data-add-slides="4">
        <div class="cs_slider_wrapper">
          <div class="slick_slide_in" v-for="product in products" :key="product.id">
            <div class="cs_product cs_style_1">
              <div class="cs_product_thumb position-relative">
                <img :src="product.images[0].image_path" :alt="product.name">
                <div class="cs_cart_badge position-absolute">
                  <a v-if="isUserAuthenticated" href="wishlist.html" class="cs_cart_icon cs_accent_bg cs_white_color">
                    <i class="fa-regular fa-heart"></i>
                  </a>
                  <RouterLink :to="{ name: 'produto', params: { slug: product.slug } }"
                    class="cs_cart_icon cs_accent_bg cs_white_color">
                    <i class="fa-regular fa-eye"></i>
                  </RouterLink>
                </div>
                <a style="cursor: pointer;" @click="addToCart(product.id,product.name,product.images[0].image_path,product.regular_price,product.sale_price,1 )"
                  class="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute">Adicionar ao
                  Carrinho</a>
              </div>
              <div class="cs_product_info text-center">
                <h3 class="cs_product_title cs_fs_21 cs_medium">
                  <RouterLink :to="{ name: 'produto', params: { slug: product.slug } }">{{ product.name }}</RouterLink>
                </h3>
                <p class="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">{{ product.regular_price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cs_pagination cs_style_2 cs_hide_desktop"></div>
    </div>
  </section>
</template>