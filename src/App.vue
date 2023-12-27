<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/template/web/Header.vue'
import Footer from '@/components/template/web/Footer.vue'
import ScrollUpButton from '@/components/template/web/ScrollUpButton.vue'
import Perloader from './components/template/web/Perloader.vue'
import { main } from '@/assets/js/main.js'

const showPerloader = ref(true);

onMounted(async () => {
  main();
  setTimeout(() => {
    showPerloader.value = false;
  }, 3000);
});
</script>

<template>
  <div>
    <Perloader v-if="showPerloader" />
    <Header />
    <RouterView />
    <Footer />
    <ScrollUpButton />
  </div>
</template>
