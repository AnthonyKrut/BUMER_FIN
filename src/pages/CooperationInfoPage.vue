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
            {{ $t('staticpages.cooperation_subtitle_1') }}
          </h4>
          <h4>
            {{ $t('staticpages.cooperation_subtitle_2') }}
          </h4>
          <p>
            {{ $t('staticpages.cooperation_text_1') }}
          </p>
          <p>
            {{ $t('staticpages.cooperation_text_2') }}
          </p>
          <h4>
            {{ $t('staticpages.cooperation_subtitle_3') }}
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

</style>
