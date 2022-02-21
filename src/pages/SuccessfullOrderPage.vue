<template>
  <section class="succesfull-order-page">
    <div class="container">
      <div class="succesfull-order-page__inner">
        <h1 class="succesfull-order-page__title">
          {{ $t('common.order_successfull_heading') }}
        </h1>
        <div class="redactor-content">
          <div v-html="$t('common.order_successfull_text')" />
        </div>
        <Btn to="Home">
          {{ $t('common.to_home') }}
        </Btn>
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '@/components/common/Btn'

export default {
  name: 'PrivacyPolicyInfoPage',
  components: {Btn},
}
</script>

<style lang="scss" scoped>

.succesfull-order-page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.succesfull-order-page__inner {
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
}

.succesfull-order-page__title {
  margin-bottom: 1.5em;
}

.redactor-content {
  text-align: center;
  display: block;
  margin-bottom: 50px;
  line-height: 1.6;
}
</style>
