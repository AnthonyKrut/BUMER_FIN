<template>
  <section class="guarantee">
    <div class="container">
      <h1>
        {{ $t('common.guaranty') }}
      </h1>
      <div class="redactor-content">
        <TermsNav />
        <article>
          <h4>
            {{ $t('staticpages.guarantee_subtitle') }}
          </h4>
          <p>
            &#10134;{{ $t('staticpages.guarantee_text_1') }}
          </p>
          <p>
            {{ $t('staticpages.guarantee_text_2') }}
          </p>
          <p>
            &#10134;{{ $t('staticpages.guarantee_text_3') }}
          </p>
          <p>
            &#10134;{{ $t('staticpages.guarantee_text_4') }}
          </p>
          <p>
            &#10071;{{ $t('staticpages.guarantee_text_5') }}
          </p>
          <p>
            {{ $t('staticpages.guarantee_text_6') }}
          </p>
          <p>
            {{ $t('staticpages.guarantee_text_7') }}
          </p>
          <p>
            &#10134;{{ $t('staticpages.guarantee_text_8') }}
          </p>
          <p>
            {{ $t('staticpages.guarantee_text_9') }}
          </p>
        </article>
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

<style lang="scss" scoped>
</style>
