<script setup>
import Hero from '@/components/template/web/home/Hero.vue'
import IconBoxes from '@/components/template/web/home/IconBoxes.vue'
import Category from '@/components/template/web/home/Category.vue'
import FeaturedItems from '@/components/template/web/home/FeaturedItems.vue'
import MovingTextSlider from '@/components/template/web/home/MovingTextSlider.vue'
import Collection from '@/components/template/web/home/Collection.vue'
import NewItemsStore from '@/components/template/web/home/NewItemsStore.vue'
import Partners from '@/components/template/web/home/Partners.vue'
import Testimonial from '@/components/template/web/home/Testimonial.vue'
import SecondCollection from '@/components/template/web/home/SecondCollection.vue'
import TopSellingAccessories from '@/components/template/web/home/TopSellingAccessories.vue'
import Newsletter from '@/components/template/web/home/Newsletter.vue'
import Instagram from '@/components/template/web/home/Instagram.vue'
import { onMounted, ref } from 'vue';
import {main} from '@/assets/js/main.js'
import Perloader from '@/components/template/web/Perloader.vue'

const showPerloader = ref(true);

onMounted(async () => {
  main();
  setTimeout(() => {
       showPerloader.value = false;
  }, 3000);
});
</script>

<template>
  <Perloader v-if="showPerloader" />
  <Hero />
  <IconBoxes />
  <Category />
  <FeaturedItems />
  <MovingTextSlider />
  <Collection />
  <NewItemsStore />
  <Partners />
  <Testimonial />
  <SecondCollection />
  <TopSellingAccessories />
  <Newsletter />
  <Instagram />
</template>
