<script setup>
   import card1image from '@/assets/img/card2.jpg'
</script>
<template>
   <section>
    <div class="cs_height_140 cs_height_lg_80"></div>
    <div class="cs_card cs_style_2">
      <div class="container">
        <div class="row cs_gap_y_30 align-items-center">
          <div class="col-lg-6">
            <div class="cs_card_info">
              <h2 class="cs_card_title cs_fs_50 cs_bold">Explore a mais recente coleção exclusiva de artesanato</h2>
              <p class="cs_card_subtitle">Acreditamos que a moda de inverno deve ser funcional e fabulosa. Nossa <br> Coleção de Moda Inverno reflete nosso compromisso com qualidade, conforto e <br> estilo. Abrace a estação com confiança.</p>
              <a href="shop.html" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Compre Agora</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cs_card_thumb cs_bg_filed" :data-src="card1image"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="cs_height_120 cs_height_lg_70"></div>
</section>

</template>