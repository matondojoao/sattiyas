<script setup>
import newsletterimage from '@/assets/img/newsletter.jpg'
</script>
<template>
    <section>
        <div class="cs_height_134 cs_height_lg_80"></div>
        <div class="container">
            <div class="cs_newsletter cs_style_1 cs_radius_15 cs_bg_filed">
                <div class="cs_newsletter_thumb cs_bg_filed" :data-src="newsletterimage"></div>
                <div class="cs_newsletter_shape"></div>
                <div class="cs_newsletter_text ms-auto">
                    <h2 class="cs_newsletter_title cs_fs_50 cs_bold cs_white_color">Inscreva-se na newsletter</h2>
                    <p class="cs_newsletter_subtitle cs_white_color">Junte-se à revolução de estilo e assine nossa loja de
                        moda</p>
                    <form class="cs_newsletter_form">
                        <input type="text" placeholder="Digite seu endereço de e-mail ..." class="cs_form_field">
                        <button type="submit" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Inscrever-se</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="cs_height_140 cs_height_lg_80"></div>
    </section>
</template>