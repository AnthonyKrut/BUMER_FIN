<template>
  <section class="privacy-policy">
    <div class="container">
      <h1 class="privacy-policy__title">
        {{ $t('common.privacy_policy') }}
      </h1>
      <div class="redactor-content">
        <article v-html="$t('privacy.text')" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrivacyPolicyInfoPage',
}
</script>

<style lang="scss" scoped>

.privacy-policy__title {
  margin-bottom: 1.5em;
}

.redactor-content {
  justify-content: center;
}
</style>
