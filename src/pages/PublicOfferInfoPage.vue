<template>
  <section class="public-offer">
    <div class="container">
      <h1 class="public-offer__title">
        {{ $t('common.public_offer') }}
      </h1>
      <div class="redactor-content">
        <article v-html="$t('publicoffer.text')" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PublicOfferInfoPage',
}
</script>

<style lang="scss" scoped>

.public-offer__title {
  margin-bottom: 1.5em;
}

.redactor-content {
  justify-content: center;
}
</style>
