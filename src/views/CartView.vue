<script setup>
import Heading from '@/components/template/web/cart/Heading.vue'
import Cart from '@/components/template/web/cart/Cart.vue'
import { onMounted } from 'vue';
import { main } from '@/assets/js/main.js'
onMounted(async () => {
    main();
});
</script>

<template>
    <div>
        <Heading />
        <Cart />
    </div>
</template>
