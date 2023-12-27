<script setup>
import Hero from '@/components/template/web/home/Hero.vue'
import IconBoxes from '@/components/template/web/home/IconBoxes.vue'
import Category from '@/components/template/web/home/Category.vue'
import FeaturedItems from '@/components/template/web/home/FeaturedItems.vue'
import MovingTextSlider from '@/components/template/web/home/MovingTextSlider.vue'
import Collection from '@/components/template/web/home/Collection.vue'
import { onMounted } from 'vue';
import {main} from '@/assets/js/main.js'

onMounted(() => {
  main();
});
</script>

<template>
  <Hero />
  <IconBoxes />
  <Category />
  <FeaturedItems />
  <MovingTextSlider />
  <Collection />
</template>
