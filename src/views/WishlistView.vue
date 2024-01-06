<script setup>
import Heading from '@/components/template/web/wishlist/Heading.vue'
import Wishlist from '@/components/template/web/wishlist/Wishlist.vue'
import { onMounted, ref } from 'vue';
import { main } from '@/assets/js/main.js'
import Perloader from '@/components/template/web/Perloader.vue'

const showPerloader = ref(true);

onMounted(async () => {
    main();
    setTimeout(() => {
       showPerloader.value = false;
  }, 2000);
});
</script>

<template>
    <Perloader v-if="showPerloader" />
    <Heading />
    <Wishlist />
</template>
