<template>
  <section class="shipment">
    <div class="container">
      <h1>
        {{ $t('common.shipping') }}
      </h1>
      <div class="redactor-content">
        <TermsNav />
        <article>
          <h3>
            {{ $t('staticpages.shipment_title') }}
          </h3>
          <h4>
            {{ $t('staticpages.shipment_subtitle_1') }}
          </h4>
          <p>
            {{ $t('staticpages.shipment_text_1') }}
          </p>
          <h4>
            {{ $t('staticpages.shipment_subtitle_2') }}
          </h4>
          <p>
            {{ $t('staticpages.shipment_text_2') }}
          </p>
        </article>
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

<style lang="scss" scoped>
</style>
