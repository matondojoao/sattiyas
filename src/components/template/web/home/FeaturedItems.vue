<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { main } from '@/assets/js/main.js';
import http from '@/services/http.js';

const accessories = ref([]);
const dresses = ref([]);
const tshirts = ref([]);
const isDressesLoaded = ref(false);
const isAccessoriesLoaded = ref(false);
const isTshirtsLoaded = ref(false);

const fetchDresses = async () => {
    try {
        const dressesresponse = await http.get('/products?categories[]=a3a40277-09d1-4764-88a1-49a6b78a4925');
        dresses.value = dressesresponse.data.data;
        isDressesLoaded.value = true;
    } catch (error) {
        console.error('Erro ao buscar vestidos:', error);
    }
};

const fetchTshirts = async () => {
    try {
        const tshirtresponse = await http.get('/products?categories[]=1dc5aca1-2574-4c53-afee-b0a83b8fa690');
        tshirts.value = tshirtresponse.data.data;
        isTshirtsLoaded.value = true;
    } catch (error) {
        console.error('Erro ao buscar camisetas:', error);
    }
};

const fetchAccessories = async () => {
    try {
        const accessoriesresponse = await http.get('/products?categories[]=174a942f-b996-43a9-9ae6-e2121a684c4c');
        accessories.value = accessoriesresponse.data.data;
        isAccessoriesLoaded.value = true;
    } catch (error) {
        console.error('Erro ao buscar acessórios:', error);
    }
};

onMounted(async () => {
    await fetchDresses();
    await fetchAccessories();
    await fetchTshirts();
});

watchEffect(() => {
    if (isDressesLoaded.value && isAccessoriesLoaded.value && isTshirtsLoaded.value) {
        main();
    }
});
</script>
<template>
    <section>
        <div class="cs_height_120 cs_height_lg_70"></div>
        <div class="container">
            <h2 class="cs_section_title cs_fs_50 cs_bold mb-0 text-center">Itens em Destaque</h2>
            <div class="cs_height_63 cs_height_lg_35"></div>
            <ul class="cs_tab_links cs_style_1 cs_mp0">
                <li class="active"><a href="#tab_dresses" class="cs_fs_16 cs_medium">Vestidos</a></li>
                <li><a href="#tab_tshirts" class="cs_fs_16 cs_medium">Camisetas</a></li>
                <li><a href="#tab_accessories" class="cs_fs_16 cs_medium">Acessórios</a></li>
            </ul>
        </div>
        <div class="container-fluid" >
            <div class="cs_tabs">
                <div class="cs_tab active" id="tab_dresses" v-if="isDressesLoaded && dresses.length > 0">
                    <div class="cs_slider position-relative cs_hover_arrow">
                        <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
                            data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="2"
                            data-lg-slides="3" data-add-slides="4">
                            <div class="cs_slider_wrapper">
                                <div class="slick_slide_in" v-for="dress in dresses" :key="dress.id">
                                    <div class="cs_product cs_style_1">
                                        <div class="cs_product_thumb position-relative">
                                            <img :src="dress?.images[0].image_path" :alt="dress.name">
                                            <div class="cs_cart_badge position-absolute">
                                                <a href="wishlist.html" class="cs_cart_icon cs_accent_bg cs_white_color">
                                                    <i class="fa-regular fa-heart"></i>
                                                </a>
                                                <RouterLink :to="{ name: 'produto', params: { slug: dress.slug } }"
                                                    class="cs_cart_icon cs_accent_bg cs_white_color">
                                                    <i class="fa-regular fa-eye"></i>
                                                </RouterLink>
                                            </div>
                                            <a href="cart.html"
                                                class="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute">Adicionar
                                                ao
                                                Carrinho</a>
                                        </div>
                                        <div class="cs_product_info text-center">
                                            <h3 class="cs_product_title cs_fs_21 cs_medium">
                                                <RouterLink :to="{ name: 'produto', params: { slug: dress.slug } }">{{
                                                    dress.name }}</RouterLink>
                                            </h3>
                                            <p class="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">{{
                                                dress.regular_price }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cs_slider_arrows cs_style_3 cs_hide_mobile">
                            <div class="cs_left_arrow cs_slider_arrow cs_accent_color">
                                <span>
                                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                            <div class="cs_right_arrow cs_slider_arrow cs_accent_color">
                                <span>
                                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="cs_pagination cs_style_2 cs_hide_desktop"></div>
                    </div>
                </div>
                <div class="cs_tab" id="tab_tshirts" v-if="isTshirtsLoaded && tshirts.length > 0">
                    <div class="cs_slider position-relative cs_hover_arrow">
                        <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
                            data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="2"
                            data-lg-slides="3" data-add-slides="4">
                            <div class="cs_slider_wrapper">
                                <div class="slick_slide_in" v-for="tshirt in tshirts" :key="tshirt.id">
                                    <div class="cs_product cs_style_1">
                                        <div class="cs_product_thumb position-relative">
                                            <img :src="tshirt?.images[0].image_path" :alt="tshirt.name">
                                            <div class="cs_cart_badge position-absolute">
                                                <a href="wishlist.html" class="cs_cart_icon cs_accent_bg cs_white_color">
                                                    <i class="fa-regular fa-heart"></i>
                                                </a>
                                                <RouterLink :to="{ name: 'produto', params: { slug: tshirt.slug } }"
                                                    class="cs_cart_icon cs_accent_bg cs_white_color">
                                                    <i class="fa-regular fa-eye"></i>
                                                </RouterLink>
                                            </div>
                                            <a href="cart.html"
                                                class="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute">Adicionar
                                                ao
                                                Carrinho</a>
                                        </div>
                                        <div class="cs_product_info text-center">
                                            <h3 class="cs_product_title cs_fs_21 cs_medium">
                                                <RouterLink :to="{ name: 'produto', params: { slug: tshirt.slug } }">{{
                                                    tshirt.name }}</RouterLink>
                                            </h3>
                                            <p class="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">{{
                                                tshirt.regular_price }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cs_slider_arrows cs_style_3 cs_hide_mobile">
                            <div class="cs_left_arrow cs_slider_arrow cs_accent_color">
                                <span>
                                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                            <div class="cs_right_arrow cs_slider_arrow cs_accent_color">
                                <span>
                                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="cs_pagination cs_style_2 cs_hide_desktop"></div>
                    </div>
                </div>
                <div class="cs_tab" id="tab_accessories" v-if="isAccessoriesLoaded && accessories.length > 0">
                    <div class="cs_slider position-relative cs_hover_arrow">
                        <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
                            data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="2"
                            data-lg-slides="3" data-add-slides="4">
                            <div class="cs_slider_wrapper">
                                <div class="slick_slide_in" v-for="accessory in accessories" :key="accessory.id">
                                    <div class="cs_product cs_style_1">
                                        <div class="cs_product_thumb position-relative">
                                            <img :src="accessory.images[0].image_path" :alt="accessory.name">
                                            <div class="cs_cart_badge position-absolute">
                                                <a href="wishlist.html" class="cs_cart_icon cs_accent_bg cs_white_color">
                                                    <i class="fa-regular fa-heart"></i>
                                                </a>
                                                <RouterLink :to="{ name: 'produto', params: { slug: accessory.slug } }"
                                                    class="cs_cart_icon cs_accent_bg cs_white_color">
                                                    <i class="fa-regular fa-eye"></i>
                                                </RouterLink>
                                            </div>
                                            <a href="cart.html"
                                                class="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute">Adicionar
                                                ao
                                                Carrinho</a>
                                        </div>
                                        <div class="cs_product_info text-center">
                                            <h3 class="cs_product_title cs_fs_21 cs_medium">
                                                <RouterLink :to="{ name: 'produto', params: { slug: accessory.slug } }">{{
                                                    accessory.name }}</RouterLink>
                                            </h3>
                                            <p class="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">{{
                                                accessory.regular_price }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cs_slider_arrows cs_style_3 cs_hide_mobile">
                                <div class="cs_left_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg width="36" height="16" viewBox="0 0 36 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="cs_right_arrow cs_slider_arrow cs_accent_color">
                                    <span>
                                        <svg width="36" height="16" viewBox="0 0 36 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="cs_pagination cs_style_2 cs_hide_desktop"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="cs_height_135 cs_height_lg_80"></div>
</section></template>