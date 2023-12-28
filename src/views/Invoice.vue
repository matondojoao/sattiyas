<script setup>
import Heading from '@/components/template/web/invoice/Heading.vue'
import Success from '@/components/template/web/invoice/Success.vue'
import { onMounted } from 'vue';
import { main } from '@/assets/js/main.js'
onMounted(async () => {
    main();
});
</script>

<template>
    <Heading />
    <Success />
</template>
