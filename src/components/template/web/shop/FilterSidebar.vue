<script setup>
import { ref } from "vue";
import { useCategoryStore } from "@/stores/categories.js";
import { useProductsStore } from "@/stores/products";
import { useBrandStore } from "@/stores/brands";
import { useSizeStore } from "@/stores/sizes";
import { useColorStore } from "@/stores/colors";
import { onMounted } from "vue";
import { main } from "@/assets/js/main.js";

const categories = ref([]);
const colors = ref([]);
const brands = ref([]);
const sizes = ref([]);
const selectedCategoryIds = ref([]);
const selectedSize = ref()
const fetchCategories = async () => {
  try {
    await useCategoryStore().fetchCategories();
    categories.value = useCategoryStore().categories;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
  }
};
const filterProductBySize = async (size) => {
  const sizesArray = Array.isArray(size) ? size : [size];
  await useProductsStore().fetchProducts({ sizes: sizesArray });
}

const filterProductByColor = async (color) => {
  const colorsArray = Array.isArray(color) ? color : [color];
  await useProductsStore().fetchProducts({ colors: colorsArray });
}

const filterProductByBrand = async (brand) => {
  await useProductsStore().fetchProducts({ brand: brand });
}

const fetchBrans = async () => {
  try {
    await useBrandStore().fetchBrands();
    brands.value = useBrandStore().brands;
  } catch (error) {
    console.error("Erro ao buscar marcas:", error);
  }
};

const fetchColors = async () => {
  try {
    await useColorStore().fetchColors();
    colors.value = useColorStore().colors;
  } catch (error) {
    console.error("Erro ao buscar cores:", error);
  }
};

const fetchSizes = async () => {
  try {
    await useSizeStore().fetchSizes();
    sizes.value = useSizeStore().sizes;
  } catch (error) {
    console.error("Erro ao buscar tamanhos:", error);
  }
};

const handleCheckboxChange = async (categoryId) => {
  selectedCategoryIds.value = selectedCategoryIds.value.includes(categoryId)
    ? selectedCategoryIds.value.filter((id) => id !== categoryId)
    : [...selectedCategoryIds.value, categoryId];

  if (selectedCategoryIds.value.length === 0) {
    await useProductsStore().fetchProducts();
  } else {
    await useProductsStore().fetchProducts({
      categories: selectedCategoryIds.value,
    });
  }
};

async function priceInit(data) {
  let min = 100;
  let max = 600;

  if ($.exists('#slider_range')) {
    $('#slider_range').slider({
      range: true,
      min: 0,
      max: 1000,
      values: [min, max],
      slide: function (event, ui) {

        min = ui.values[0];
        max = ui.values[1];

        console.log('Min:', min, 'Max:', max);

        updateUI(min, max);

        updateProductStore(min, max);
      },
    });
  }

  if ($.exists('#amount')) {
    $('#amount').val(
      'Preço:' +
      min +
      '.00 -' +
      max +
      '.00'
    );
  }
}

async function updateProductStore(min, max) {
  try {
    await useProductsStore().fetchProducts({ min_price: min, max_price: max });
  } catch (error) {
    console.error('Erro ao atualizar a loja de produtos:', error);
  }
}

function updateUI(min, max) {
  $('#amount').val('Preço: ' + min + '.00 - ' + max + '.00');
}



onMounted(async () => {
  priceInit();
  main();
  await fetchCategories();
  await fetchBrans();
  await fetchSizes();
  await fetchColors();
});
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
                <label>{{ subcategory.name }} ({{
                  subcategory.product_count
                }})</label>
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
        <li v-for="color in colors" :key="color.id">
          <div class="cs_color_filter">
            <input type="radio" name="color" @click="filterProductByColor(color.id)" />
            <span class="cs_color_filter_circle" :class="color.class"></span>
            <span class="cs_color_text">{{ color.name }}</span>
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
          <input type="radio" name="size" @click="filterProductBySize(size.id)" />
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
          <input type="radio" name="brand" @click="filterProductByBrand(brand.id)" />
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
              <span>4 ou Mais</span>
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
              <span>3 ou Mais</span>
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
              <span>2 ou Mais</span>
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
              <span>1 ou Mais</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>