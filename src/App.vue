<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import Header from '@/components/template/web/Nav/Header.vue'
import {main} from '@/assets/js/main.js'

onMounted(() => {
  main();
});

</script>

<template>
   <Header />
  <RouterView />
</template>

<style scoped>

</style>
