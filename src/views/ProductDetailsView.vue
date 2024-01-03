<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Perloader from '@/components/template/web/Perloader.vue';
import http from '@/services/http.js'
import { main } from '@/assets/js/main.js'

const showPerloader = ref(true);

const route = useRoute();
const slug = ref(route.params.slug);
const product = ref(null)
const relatedProducts = ref([])

const fechProduct = async () =>{
   try {
      const response = await http.get(`/product/${slug.value}`)
      product.value=response.data.data.product
      relatedProducts.value=response.data.data.relatedProducts
      console.log(product.value)
   } catch (error) {
      console.error('Erro ao buscar produto:', error);
   }
}
onMounted(async () => {
   main();
   fechProduct();
   setTimeout(() => {
      showPerloader.value = false;
   }, 3000);
});
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
               <div class="row">
                  <div class="col-3">
                     <div class="cs_single_product_nav slick-slider">
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb1.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb2.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb3.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb4.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb1.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb2.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb3.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_mini">
                           <img src="@/assets/img/thumb4.png" alt="Thumb">
                        </div>
                     </div>
                  </div>
                  <div class="col-9">
                     <div class="cs_single_product_thumb slick-slider">
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb1_lg.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb2_lg.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb3_lg.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb4_lg.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb1_lg.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb2_lg.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb3_lg.png" alt="Thumb">
                        </div>
                        <div class="cs_single_product_thumb_item">
                           <img src="@/assets/img/thumb4_lg.png" alt="Thumb">
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
                     <span>Estoque: <span class="cs_accent_color">{{ product?.stock?.stock_units }} em estoque</span></span>
                  </div>
                  <h4 class="cs_single_product_price cs_fs_21 cs_primary_color cs_semibold">Preço: {{ product?.regular_price }}</h4>
                  <hr>
                  <div class="cs_single_product_details_text">
                     <p class="mb-0">{{ product?.body }}</p>
                  </div>
                  <div class="cs_single_product_size">
                     <h4 class="cs_fs_16 cs_medium">Size</h4>
                     <ul class="cs_size_filter_list cs_mp0">
                        <li>
                           <input type="radio" name="size">
                           <span>S</span>
                        </li>
                        <li>
                           <input type="radio" name="size">
                           <span>M</span>
                        </li>
                        <li>
                           <input type="radio" name="size">
                           <span>L</span>
                        </li>
                        <li>
                           <input type="radio" name="size">
                           <span>XL</span>
                        </li>
                     </ul>
                  </div>
                  <div class="cs_single_product_color ">
                     <h4 class="cs_fs_16 cs_medium">Color</h4>
                     <ul class="cs_color_filter_list cs_type_1 cs_mp0">
                        <li>
                           <div class="cs_color_filter">
                              <input type="radio" name="color">
                              <span class="cs_color_filter_circle cs_accent_bg"></span>
                              <span class="cs_color_text">Red</span>
                           </div>
                        </li>
                        <li>
                           <div class="cs_color_filter">
                              <input type="radio" name="color">
                              <span class="cs_color_filter_circle cs_secondary_bg"></span>
                              <span class="cs_color_text">Gray</span>
                           </div>
                        </li>
                        <li>
                           <div class="cs_color_filter">
                              <input type="radio" name="color">
                              <span class="cs_color_filter_circle cs_primary_bg"></span>
                              <span class="cs_color_text">Black</span>
                           </div>
                        </li>
                        <li>
                           <div class="cs_color_filter">
                              <input type="radio" name="color">
                              <span class="cs_color_filter_circle cs_white_bg"></span>
                              <span class="cs_color_text">White</span>
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
                     <a href="#" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Add to Cart</a>
                     <button class="cs_heart_btn"><i class="fa-regular fa-heart"></i></button>
                  </div>
                  <ul class="cs_single_product_info">
                     <li class="cs_fs_16 cs_normal">
                        <b class="cs_medium">SKU: </b>0215552
                     </li>
                     <li class="cs_fs_16 cs_normal">
                        <b class="cs_medium">Categories: </b>T-Shirt
                     </li>
                     <li class="cs_fs_16 cs_normal">
                        <b class="cs_medium">Tags: </b>Men, T-Shirt, Clothing
                     </li>
                     <li class="cs_fs_16 cs_normal">
                        <b class="cs_medium">Brand: </b>Levine
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
                 {{ product.description }}
               </div>
               <div class="cs_tab" id="tab_2">
                  <table class="m-0">
                     <tbody>
                        <tr>
                           <td>Color</td>
                           <td>Blue, Gray, Green, Red, Yellow</td>
                        </tr>
                        <tr>
                           <td>Size</td>
                           <td>Large, Medium, Small</td>
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
                              <p class="cs_review_posted_by">{{ review.created_at }}</p>
                           </div>
                           <p class="cs_review_text">{{ review.comment }}</p>
                        </div>
                     </li>
                  </ul>
                  <p class="m-0">Seu endereço de e-mail não será publicado. Campos obrigatórios estão marcados com *</p>
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
                  <form class="row cs_review_form cs_gap_y_24">
                     <div class="col-lg-12">
                        <textarea rows="3" class="cs_form_field" placeholder="Escreva sua avaliação *"></textarea>
                     </div>
                     <div class="col-lg-6">
                        <input type="text" class="cs_form_field" placeholder="Seu nome *">
                     </div>
                     <div class="col-lg-6">
                        <input type="text" class="cs_form_field" placeholder="Seu e-mail *">
                     </div>
                     <div class="col-lg-12">
                        <div class="form_check">
                           <input class="form-check-input" type="checkbox">
                           <label class="form-check-label m-0">
                              Ao usar este formulário, você concorda com o armazenamento e manuseio dos seus dados por este site. *
                           </label>
                        </div>
                     </div>
                     <div class="col-lg-12">
                        <button class="cs_btn cs_style_1 cs_fs_16 cs_medium" type="submit">Enviar agora</button>
                     </div>
                  </form>

               </div>
            </div>
            <!-- .cs_tabs -->
         </div>
      </div>
</section></template>
