<script setup>
import Heading from '@/components/template/web/wishlist/Heading.vue'
import Wishlist from '@/components/template/web/wishlist/Wishlist.vue'
import { onMounted } from 'vue';
import { main } from '@/assets/js/main.js'
onMounted(async () => {
    main();
});
</script>

<template>
    <Heading />
    <Wishlist />
</template>
