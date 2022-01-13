<template>
  <section class="shipment">
    <div class="container">
      <h1>
        {{ $t('common.shipping') }}
      </h1>
      <div class="redactor-content">
        <TermsNav />
        <article v-html="$t('staticpages.shipment_text')" />
      </div>
    </div>
  </section>
</template>

<script>
import TermsNav from '../components/common/TermsNav.vue'

export default {
  name: 'ShipmentInfoPage',
  components: {
    TermsNav,
  },
}
</script>