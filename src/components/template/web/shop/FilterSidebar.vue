<script setup>
import { ref } from 'vue';
import { useCategoryStore } from '@/stores/categories.js';
import { useProductsStore } from '@/stores/products';
import { useBrandStore } from '@/stores/brands';
import { useSizeStore } from '@/stores/sizes';
import { onMounted } from 'vue';
import {main} from '@/assets/js/main.js';

const categories = ref([]);
const brands = ref([]);
const sizes = ref([]);
const selectedCategoryIds = ref([]);

const fetchCategories = async () => {
  try {
    await useCategoryStore().fetchCategories();
    categories.value = useCategoryStore().categories;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  }
};

const fetchBrans = async () =>{
    try {
        await useBrandStore().fetchBrands();
        brands.value = useBrandStore().brands
    } catch (error) {
        console.error('Erro ao buscar marcas:', error);
    }
}

const fetchSizes = async () =>{
    try {
        await useSizeStore().fetchSizes();
        sizes.value = useSizeStore().sizes
    } catch (error) {
        console.error('Erro ao buscar tamanhos:', error);
    }
}

const handleCheckboxChange = async (categoryId) => {

  selectedCategoryIds.value = selectedCategoryIds.value.includes(categoryId)
    ? selectedCategoryIds.value.filter(id => id !== categoryId)
    : [...selectedCategoryIds.value, categoryId];

  if (selectedCategoryIds.value.length === 0) {
    await useProductsStore().fetchProducts();
  } else {
    await useProductsStore().fetchProducts({ categories: selectedCategoryIds.value });
  }
};

onMounted(async()=>{
    main();
    await fetchCategories();
    await fetchBrans();
    await fetchSizes()
})


</script>


<template>
    <div class="cs_filter_sidebar_in">
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Categorias <span></span>
            </h3>
            <ul class="cs_filter_category cs_mp0">
                <li v-for="category in categories" :key="category.id">
                    <div class="cs_custom_check">
                        <input type="checkbox" :checked="selectedCategoryIds.includes(category.id)"
                            @change="() => handleCheckboxChange(category.id)" />
                        <label>{{ category.name }} ({{ category.product_count }})</label>
                    </div>
                    <ul>
                        <li v-for="subcategory in category.subcategories" :key="subcategory.id">
                            <div class="cs_custom_check">
                                <input type="checkbox" :checked="selectedCategoryIds.includes(subcategory.id)"
                                    @change="() => handleCheckboxChange(subcategory.id)" />
                                <label>{{ subcategory.name }} ({{ subcategory.product_count }})</label>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Preço <span></span>
            </h3>
            <div class="cs_range_slider_wrap">
                <div id="slider_range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                    <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                </div>
                <div class="cs_amount_wrap">
                    <input type="text" id="amount" readonly />
                </div>
            </div>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Cor <span></span>
            </h3>
            <ul class="cs_color_filter_list cs_mp0">
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_accent_bg"></span>
                        <span class="cs_color_text">Red</span>
                    </div>
                </li>
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_secondary_bg"></span>
                        <span class="cs_color_text">Gray</span>
                    </div>
                </li>
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_primary_bg"></span>
                        <span class="cs_color_text">Black</span>
                    </div>
                </li>
                <li>
                    <div class="cs_color_filter">
                        <input type="radio" name="color" />
                        <span class="cs_color_filter_circle cs_white_bg"></span>
                        <span class="cs_color_text">White</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Tamanho <span></span>
            </h3>
            <ul class="cs_size_filter_list cs_mp0">
                <li v-for="size in sizes" :key="size.id">
                    <input type="radio" name="size" />
                    <span>{{ size.name }}</span>
                </li>
            </ul>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Marca <span></span>
            </h3>
            <ul class="cs_brand_filter_list cs_mp0">
                <li v-for="brand in brands" :key="brand.id">
                    <input type="radio" name="brand" />
                    <span>{{ brand.name }}</span>
                </li>
            </ul>
        </div>
        <div class="cs_filter_widget">
            <h3 class="cs_filter_widget_title cs_medium cs_fs_18">
                Avaliação dos Clientes <span></span>
            </h3>
            <ul class="cs_review_filter cs_mp0">
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="5">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>5</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="4">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>4 & Up</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="3">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>3 & Up</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="2">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>2 & Up</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div class="cs_custom_check">
                        <input type="checkbox" />
                        <label>
                            <span class="cs_rating_container">
                                <span class="cs_rating cs_size_sm" data-rating="1">
                                    <span class="cs_rating_percentage"></span>
                                </span>
                            </span>
                            <span>1 & Up</span>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>