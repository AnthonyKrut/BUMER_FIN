<template>
  <nav class="terms-nav">
    <router-link class="terms-nav__item" :to="{ name: '' }">
      Доставка
    </router-link>
    <router-link class="terms-nav__item" :to="{ name: '' }">
      Оплата
    </router-link>
    <router-link class="terms-nav__item" :to="{ name: '' }">
      Гарантия
    </router-link>
    <router-link class="terms-nav__item" :to="{ name: '' }">
      Сотрудничество
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TermsNav',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
</style>
