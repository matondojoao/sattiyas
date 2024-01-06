<script setup>
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/template/web/Header.vue";
import Footer from "@/components/template/web/Footer.vue";
import ScrollUpButton from "@/components/template/web/ScrollUpButton.vue";
import { main } from "@/assets/js/main.js";
import '@/assets/js/jquery.slick.min.js'
onMounted(async () => {
  main();
});
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
    <ScrollUpButton />
  </div>
</template>

<style>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/fontawesome.min.css';
@import '@/assets/css/slick.css';
@import '@/assets/css/jquery-ui.min.css';
@import '@/assets/css/animated-headline.css';
@import '@/assets/css/style.css';
</style>



