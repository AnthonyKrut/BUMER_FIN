<template>
  <section class="payment">
    <div class="container">
      <h1>
        {{ $t('common.payment') }}
      </h1>
      <div class="redactor-content">
        <TermsNav />
        <article>
          <h3>
            {{ $t('staticpages.payment_title') }}
          </h3>
          <h4>
            {{ $t('staticpages.payment_subtitle_1') }}
          </h4>
          <p>
            {{ $t('staticpages.payment_text_1') }}
          </p>
          <p>
            {{ $t('staticpages.payment_text_2') }}
          </p>
          <h4>
            {{ $t('staticpages.payment_subtitle_2') }}
          </h4>
          <p>
            {{ $t('staticpages.payment_text_3') }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import TermsNav from '../components/common/TermsNav.vue'

export default {
  name: 'PaymentInfoPage',
  components: {
      TermsNav,
  },
}
</script>

<style lang="scss" scoped>
</style>
