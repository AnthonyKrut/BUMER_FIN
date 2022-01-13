<template>
  <section class="payment">
    <div class="container">
      <h1>
        {{ $t('common.payment') }}
      </h1>
      <div class="redactor-content">
        <TermsNav />
        <article v-html="$t('staticpages.payment_text')" />
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