<template>
  <section class="cooperation">
    <div class="container">
      <h1>
        {{ $t('common.cooperation') }}
      </h1>
      <div class="redactor-content">
        <TermsNav />
        <article>
          <h4>
            Есть свой офлайн или онлайн магазин?
          </h4>
          <h4>
            Мы всегда готовы сотрудничать с вами!
          </h4>
          <p>
            Чтобы получить оптовый прайс на все наши коллекции - свяжитесь с менеджером позвонив по номеру указному в контактах.
          </p>
          <p>
            Мы являемся производителями, поэтому у нас самые низкие цены, качественный товар, и самые ходовые модели!
          </p>
          <h4>
            Контакты
          </h4>
          <address>
            <ul>
              <li>
                <SvgImage name="phone" />
                <a href="tel:+380633733988">063 373 39 88</a>
              </li>
              <li>
                <SvgImage name="phone" />
                <a href="tel:+380932200377">093 220 03 77</a>
              </li>
              <li>
                <SvgImage name="letter" />
                <a href="mailto:bumer.shoes@gmail.com">bumer.shoes@gmail.com</a>
              </li>
            </ul>
          </address>
        </article>
      </div>
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

</style>
