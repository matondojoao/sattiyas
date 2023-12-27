<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import Header from '@/components/template/web/Header.vue'
import Footer from '@/components/template/web/Footer.vue'
import ScrollUpButton from '@/components/template/web/ScrollUpButton.vue'
import {main} from '@/assets/js/main.js'

onMounted(() => {
  main();
});

</script>

<template>
   <Header />
   <RouterView />
   <Footer />
   <ScrollUpButton />
</template>
