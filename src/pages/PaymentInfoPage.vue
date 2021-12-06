<template>
  <section class="payment">
    <h2 class="infopage-title">
      Оплата
    </h2>
    <div class="container">
      <TermsNav />
      <article class="infopage-article">
        <h3 class="infopage-text-capital">
          способ оплаты
        </h3>
        <h3 class="infopage-subtitle">
          Доставка до отделения Новой Почты по Украине.
        </h3>
        <p class="infopage-text">
          Самый популярный способ доставки - Новая Почта. Срок отправки со склада – от 1 до 3-х рабочих дней. Срок доставки от 1 до 3-х дней (в зависимости от вашего города).
        </p>
        <h3 class="infopage-subtitle">
          Адресная доставка курьером Новой Почты по Украине.
        </h3>
        <p class="infopage-text">
          Вы можете заказать адресную доставку курьером Новой Почты к двери вашего дома или работы. Срок отправки со склада – от 1 до 3-х рабочих дней. Срок доставки от 1 до 4-х дней (в зависимости от вашего месторасположения).
        </p>
      </article>
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

.payment {
  min-height: 70vh;
}

.container {
  display: flex;
}

</style>