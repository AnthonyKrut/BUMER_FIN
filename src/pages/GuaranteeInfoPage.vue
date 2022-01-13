<template>
  <section class="guarantee">
    <div class="container">
      <h1>
        {{ $t('common.guaranty') }}
      </h1>
      <div class="redactor-content">
        <TermsNav />
        <article v-html="$t('staticpages.guarantee_text')" />
      </div>
    </div>
  </section>
</template>

<script>
import TermsNav from '../components/common/TermsNav.vue'

export default {
    name: 'GuaranteeInfoPage',
    components: {
        TermsNav,
    },
}
</script>