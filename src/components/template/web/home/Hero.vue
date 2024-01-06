<script setup>
   import imagePath1 from "@/assets/img/hero1.jpg"
   import imagePath2 from "@/assets/img/hero3.jpg"
   import imagePath3 from "@/assets/img/hero4.jpg"
</script>

<template>
   <div class="cs_height_140 cs_height_lg_80"></div>
   <section class="cs_slider position-relative">
    <div class="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="800" data-center="0" data-slides-per-view="1" data-fade-slide="0">
      <div class="cs_slider_wrapper">
        <div class="slick_slide_in">
          <div class="cs_hero cs_style_1">
            <div class="cs_hero_text">
              <h1 class="cs_heto_title cs_fs_67 cs_bold">Coleção de Inverno para Mulheres</h1>
              <p class="cs_heto_subtitle">Somos mais do que apenas um destino de compras online; somos sua porta de entrada pessoal para um mundo de moda, estilos inovadores e conveniência incomparável. Acreditamos que a moda é um reflexo da sua individualidade, e nossa missão é tornar cada experiência de compra conosco única.</p>
              <a href="shop.html" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Compre Agora</a>
            </div>
            <div class="cs_hero_thumb cs_bg_filed" :style="{ 'background-image': `url(${imagePath2})` }"></div>
          </div>
        </div>
        <div class="slick_slide_in">
          <div class="cs_hero cs_style_1">
            <div class="cs_hero_text">
              <h1 class="cs_heto_title cs_fs_67 cs_bold">Coleção de Camisetas para Mulheres</h1>
              <p class="cs_heto_subtitle">Somos mais do que apenas um destino de compras online; somos sua porta de entrada pessoal para um mundo de moda, estilos inovadores e conveniência incomparável. Acreditamos que a moda é um reflexo da sua individualidade, e nossa missão é tornar cada experiência de compra conosco única.</p>
              <a href="shop.html" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Compre Agora</a>
            </div>
            <div class="cs_hero_thumb cs_bg_filed" :style="{ 'background-image': `url(${imagePath1})` }"></div>
          </div>
        </div>
        <div class="slick_slide_in">
          <div class="cs_hero cs_style_1">
            <div class="cs_hero_text">
              <h1 class="cs_heto_title cs_fs_67 cs_bold">Coleção de Saias para Mulheres</h1>
              <p class="cs_heto_subtitle">Somos mais do que apenas um destino de compras online; somos sua porta de entrada pessoal para um mundo de moda, estilos inovadores e conveniência incomparável. Acreditamos que a moda é um reflexo da sua individualidade, e nossa missão é tornar cada experiência de compra conosco única.</p>
              <a href="shop.html" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Compre Agora</a>
            </div>
            <div class="cs_hero_thumb cs_bg_filed" :style="{ 'background-image': `url(${imagePath3})` }">
            </div>
          </div>
        </div>
      </div>
      <div class="cs_pagination cs_style_1"></div>
    </div>
  </section>
</template>
