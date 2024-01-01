<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/template/web/Header.vue'
import Footer from '@/components/template/web/Footer.vue'
import ScrollUpButton from '@/components/template/web/ScrollUpButton.vue'
import { main } from '@/assets/js/main.js'

onMounted(async () => {
  main();
});
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
    <ScrollUpButton />
  </div>
</template>
