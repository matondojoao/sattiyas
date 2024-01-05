<script setup>
import { onMounted, ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Perloader from '@/components/template/web/Perloader.vue';
import http from '@/services/http.js'
import { main } from '@/assets/js/main.js'
import { userAuth } from '@/stores/auth';

const auth = userAuth();
const showPerloader = ref(true);
const isDataLoaded = ref();
const isUserAuthenticated = ref(false)
const route = useRoute();
const slug = ref(route.params.slug);
const product = ref(null)
const relatedProducts = ref([])
const comment = ref()

watchEffect(() => {
   if (isDataLoaded.value) {
      main();
   }
});

const fechProduct = async () => {
   try {
      const response = await http.get(`/product/${slug.value}`)
      product.value = response.data.data.product
      relatedProducts.value = response.data.data.relatedProducts
      isDataLoaded.value = true
   } catch (error) {
      console.error('Erro ao buscar produto:', error);
   }
}

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

async function avaliateProduct() {

   try {

      const avaliation = {
         product_id: product.value.id,
         comment: comment.value,
         rating: 3
      }

      const tokenAuth = 'Bearer ' + auth.token;
      const data = await http.post('/product/review', avaliation, {
         headers: {
            'Authorization': tokenAuth
         }
      });
      comment.value = ''
      fechProduct()


   } catch (error) {
      console.error('Erro ao verificar o token:', error);
   }
}


onMounted(async () => {
   main();
   fechProduct();
   checkAuthentication();
   setTimeout(() => {
      showPerloader.value = false;
   }, 3000);
});

const formattedCategories = computed(() => {
   if (product.value) {
      return product.value.categories.map(category => category.name).join(', ');
   }
});

const formattedColors = computed(() => {
   if (product.value) {
      return product.value.colors.map(color => color.name).join(', ');
   }
});

const formattedSizes = computed(() => {
   if (product.value) {
      return product.value.sizes.map(size => size.name).join(', ');
   }
});

const formatarData = (timestampString) => {
   try {
      const data = new Date(timestampString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return new Intl.DateTimeFormat('pt-BR', options).format(data);
   } catch (error) {
      console.error('Erro ao formatar data:', error);
      return '';
   }
};

</script>

<template>
   <Perloader v-if="showPerloader" />
   <div class="cs_height_140 cs_height_lg_80"></div>
   <section>
      <div class="cs_height_35 cs_height_lg_35"></div>
      <div class="container">
         <nav aria-label="breadcrumb">
            <ol class="cs_single_product_breadcrumb breadcrumb">
               <li class="breadcrumb-item"><a href="#">Início</a></li>
               <li class="breadcrumb-item"><a href="#">Loja</a></li>
               <li class="breadcrumb-item"><a href="#">{{ product?.categories[0]?.name }}</a></li>
               <li class="breadcrumb-item active">{{ product?.name }}</li>
            </ol>

         </nav>
         <div class="row">
            <div class="col-xl-7">
               <div class="row" v-if="product">
                  <div class="col-3">
                     <div class="cs_single_product_nav slick-slider">
                        <div class="cs_single_product_thumb_mini" v-for="image in product?.images" :key="image?.id">
                           <img :src="image?.image_path">
                        </div>
                     </div>
                  </div>
                  <div class="col-9">
                     <div class="cs_single_product_thumb slick-slider">
                        <div class="cs_single_product_thumb_item" v-for="image in product?.images" :key="image.id">
                           <img :src="image?.image_path" alt="Thumb">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-5">
               <div class="cs_single_product_details">
                  <h2 class="cs_fs_37 cs_semibold">{{ product?.name }}</h2>
                  <div class="cs_single_product_review">
                     <div class="cs_rating_container">
                        <div class="cs_rating cs_size_sm" data-rating="5">
                           <div class="cs_rating_percentage"></div>
                        </div>
                     </div>
                     <span>(5)</span>
                     <span>Estoque: <span class="cs_accent_color">{{ product?.stock?.stock_units }} em
                           estoque</span></span>
                  </div>
                  <h4 class="cs_single_product_price cs_fs_21 cs_primary_color cs_semibold">Preço: {{
                     product?.regular_price }}</h4>
                  <hr>
                  <div class="cs_single_product_details_text">
                     <p class="mb-0">{{ product?.body }}</p>
                  </div>
                  <div class="cs_single_product_size">
                     <h4 class="cs_fs_16 cs_medium">Tamanho</h4>
                     <ul class="cs_size_filter_list cs_mp0">
                        <li v-for="size in product?.sizes" :key="size.id">
                           <input type="radio" name="size">
                           <span>{{ size.name }}</span>
                        </li>
                     </ul>
                  </div>
                  <div class="cs_single_product_color">
                     <h4 class="cs_fs_16 cs_medium">Cor</h4>
                     <ul class="cs_color_filter_list cs_type_1 cs_mp0">
                        <li v-for="color in product?.colors" :key="color.id">
                           <div class="cs_color_filter">
                              <input type="radio" name="color">
                              <span class="cs_color_filter_circle" :class="color.class"></span>
                              <span class="cs_color_text">{{ color.name }}</span>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div class="cs_action_btns">
                     <div class="cs_quantity">
                        <button class="cs_quantity_btn cs_increment"><i class="fa-solid fa-angle-up"></i></button>
                        <span class="cs_quantity_input">1</span>
                        <button class="cs_quantity_btn cs_decrement"><i class="fa-solid fa-angle-down"></i></button>
                     </div>
                     <a href="#" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Adicionar ao Carrinho</a>
                     <button class="cs_heart_btn"><i class="fa-regular fa-heart"></i></button>
                  </div>
                  <ul class="cs_single_product_info">
                     <li class="cs_fs_16 cs_normal">
                        <b class="cs_medium">SKU: </b>{{ product?.sku }}
                     </li>
                     <li class="cs_fs_16 cs_normal">
                        <b class="cs_medium">Categorias: </b> {{ formattedCategories }}
                     </li>
                     <li class="cs_fs_16 cs_normal">
                        <b class="cs_medium">Marca: </b>{{ product?.brand?.name }}
                     </li>
                  </ul>

               </div>
            </div>
         </div>
         <div class="cs_height_70 cs_height_lg_60"></div>
         <hr>
         <div class="cs_product_meta_info">
            <ul class="cs_tab_links cs_style_2 cs_product_tab cs_fs_21 cs_primary_color cs_semibold cs_mp0">
               <li><a href="#tab_1">Descrição</a></li>
               <li><a href="#tab_2">Informações adicionais</a></li>
               <li class="active"><a href="#tab_4">Avaliação ({{ product?.reviews?.length }})</a></li>

            </ul>
            <div class="cs_tabs">
               <div class="cs_tab" id="tab_1">
                  {{ product?.description }}
               </div>
               <div class="cs_tab" id="tab_2">
                  <table class="m-0">
                     <tbody>
                        <tr>
                           <td>Cor</td>
                           <td>{{ formattedColors }}</td>
                        </tr>
                        <tr>
                           <td>Tamanho</td>
                           <td>{{ formattedSizes }}</td>
                        </tr>
                     </tbody>
                  </table>

                  <hr>
               </div>
               <div class="cs_tab active" id="tab_4">
                  <ul class="cs_client_review_list cs_mp0">
                     <li>
                        <div class="cs_client_review" v-for="review in product?.reviews">
                           <div class="cs_review_media">
                              <div class="cs_review_media_thumb">
                                 <img :src="review.user.photo_path" alt="Avatar" v-if="review.user.photo_path">
                                 <img src="@/assets/img/avatar.png" alt="Avatar" v-else>
                              </div>
                              <div class="cs_review_media_right">
                                 <div class="cs_rating_container">
                                    <div class="cs_rating cs_size_sm" :data-rating="review.rating">
                                       <div class="cs_rating_percentage"></div>
                                    </div>
                                 </div>
                                 <p class="mb-0 cs_primary_color cs_semibold">{{ review.user.name }}</p>
                              </div>
                              <p class="cs_review_posted_by">{{ formatarData(review.created_at) }}</p>
                           </div>
                           <p class="cs_review_text">{{ review.comment }}</p>
                        </div>
                     </li>
                  </ul>

                  <div v-if="isUserAuthenticated">
                     <p class="m-0">Campos obrigatórios estão marcados com *</p>
                     <div class="cs_height_20 cs_height_lg_20"></div>
                     <div class="cs_input_rating_wrap">
                        <p>Sua avaliação *</p>
                        <div class="cs_input_rating cs_accent_color" data-rating="0">
                           <i class="fa-regular fa-star"></i>
                           <i class="fa-regular fa-star"></i>
                           <i class="fa-regular fa-star"></i>
                           <i class="fa-regular fa-star"></i>
                           <i class="fa-regular fa-star"></i>
                        </div>
                     </div>
                     <div class="cs_height_20 cs_height_lg_22"></div>
                     <form @submit.prevent="avaliateProduct" class="row cs_review_form cs_gap_y_24">
                        <div class="col-lg-12">
                           <textarea rows="3" class="cs_form_field" placeholder="Escreva sua avaliação *"
                              v-model="comment"></textarea>
                        </div>
                        <div class="col-lg-12">
                           <div class="form_check">
                              <input class="form-check-input" type="checkbox">
                              <label class="form-check-label m-0">
                                 Ao usar este formulário, você concorda com o armazenamento e manuseio dos seus dados por
                                 este
                                 site. *
                              </label>
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <button class="cs_btn cs_style_1 cs_fs_16 cs_medium" type="submit">Enviar agora</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <div class="cs_height_134 cs_height_lg_80" v-if="relatedProducts.length == 0"></div>
   <section class="cs_slider container-fluid position-relative" v-if="relatedProducts.length > 0">
      <div class="cs_height_120 cs_height_lg_70"></div>
      <div class="container">
         <div class="cs_section_heading cs_style_1">
            <div class="cs_section_heading_in">
               <h2 class="cs_section_title cs_fs_50 cs_bold cs_fs_48 cs_semibold mb-0">Produtos Relacionados</h2>
            </div>
            <div class="cs_slider_arrows cs_style_2">
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
      <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600"
         data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="3"
         data-lg-slides="3" :data-add-slides="relatedProducts.length">
         <div class="cs_slider_wrapper">
            <div class="slick_slide_in" v-for="relatedProduct in relatedProducts" :key="relatedProduct.id">
               <div class="cs_product cs_style_1">
                  <div class="cs_product_thumb position-relative">
                     <img :src="relatedProduct.images[0].image_path" :alt="relatedProduct.name">
                     <div class="cs_cart_badge position-absolute">
                        <a href="wishlist.html" class="cs_cart_icon cs_accent_bg cs_white_color">
                           <i class="fa-regular fa-heart"></i>
                        </a>
                        <RouterLink :to="{ name: 'produto', params: { slug: relatedProduct.slug } }"
                           class="cs_cart_icon cs_accent_bg cs_white_color">
                           <i class="fa-regular fa-eye"></i>
                        </RouterLink>
                     </div>
                     <a href="cart.html"
                        class="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute">Adicionar ao
                        Carrinho</a>
                  </div>
                  <div class="cs_product_info text-center">
                     <h3 class="cs_product_title cs_fs_21 cs_medium">
                        <RouterLink :to="{ name: 'produto', params: { slug: relatedProduct.slug } }">{{ relatedProduct.name
                        }}</RouterLink>
                     </h3>
                     <p class="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">{{ relatedProduct.regular_price }}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="cs_height_134 cs_height_lg_80"></div>
   </section>
   <hr>
</template>
