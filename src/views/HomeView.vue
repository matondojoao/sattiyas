<script setup>
import Hero from '@/components/template/web/home/Hero.vue'
import IconBoxes from '@/components/template/web/home/IconBoxes.vue'
import { onMounted } from 'vue';
import {main} from '@/assets/js/main.js'

onMounted(() => {
  main();
});
</script>

<template>
  <Hero />
  <IconBoxes />
</template>
