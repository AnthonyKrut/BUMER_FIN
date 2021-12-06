<template>
  <section class="cooperation">
    <h2 class="infopage-title">
      Сотрудничество
    </h2>
    <div class="container">
      <TermsNav />
      <article class="infopage-article">
        <h3 class="infopage-subtitle">
          Есть свой офлайн или онлайн магазин?
        </h3>
        <h3 class="infopage-subtitle">
          Мы всегда готовы сотрудничать с вами!
        </h3>
        <p class="infopage-text">
          Чтобы получить оптовый прайс на все наши коллекции - свяжитесь с менеджером позвонив по номеру указному в контактах.
        </p>    
        <p class="infopage-text">
          Мы являемся производителями, поэтому у нас самые низкие цены, качественный товар, и самые ходовые модели!
        </p>
        <h3 class="infopage-subtitle">
          Контакты
        </h3>
        <p class="infopage-text infopage-text-telnumbers infopage-text-nomargin">
          <SvgImage class="infopage-text__icon" name="phone" />
          <span class="infopage-text__telnumber">+38 (096) 123-4567</span>   
          <span class="infopage-text__telnumber">+38 (096) 123-4567</span>
        </p>
        <p class="infopage-text infopage-text-telnumbers">
          <SvgImage class="infopage-text__icon" name="phone" />
          <span class="infopage-text__telnumber">+38 (099) 123-4567</span>
          <span class="infopage-text__telnumber">+38 (099) 123-4567</span>
        </p>
        <p class="infopage-text">
          <SvgImage class="infopage-text__icon" name="letter" />
          <span class="infopage-text__mail">bumer.shoes@gmail.com</span>
        </p>    
      </article>
    </div>
  </section>
</template>

<script>
import TermsNav from '../components/common/TermsNav.vue'
import SvgImage from '../components/common/SvgImage.vue'

export default {
    name: 'CooperationInfoPage',
    components: {
        TermsNav,
        SvgImage,
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.cooperation {
  min-height: 70vh;
}

.container {
  display: flex;
}

</style>
