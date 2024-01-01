<script setup>
import Heading from '@/components/template/web/cart/Heading.vue'
import Cart from '@/components/template/web/cart/Cart.vue'
import { onMounted, ref } from 'vue';
import { main } from '@/assets/js/main.js'
import Perloader from '@/components/template/web/Perloader.vue'
const showPerloader = ref(true);

onMounted(async () => {
    main();
    setTimeout(() => {
       showPerloader.value = false;
  }, 3000);
});
</script>

<template>
   <Perloader v-if="showPerloader" />
   <Heading />
   <Cart />
</template>
