<script setup>
import Hero from '@/components/template/web/home/Hero.vue'
import { onMounted } from 'vue';
import {main} from '@/assets/js/main.js'

onMounted(() => {
  main();
});
</script>

<template>
  <Hero />
</template>
