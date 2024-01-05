<script setup>
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/template/web/Header.vue";
import Footer from "@/components/template/web/Footer.vue";
import ScrollUpButton from "@/components/template/web/ScrollUpButton.vue";
import { main } from "@/assets/js/main.js";
import ProductDetailsView from "@/views/ProductDetailsView.vue";

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
