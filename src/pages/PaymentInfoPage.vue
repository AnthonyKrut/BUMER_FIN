<template>
  <section class="payment redactor-content">
    <div class="container">
      <h2>
        Оплата
      </h2>
      <div class="infopage-wrapper">
        <TermsNav />
        <article>
          <h3>
            способ оплаты
          </h3>
          <h4>
            Доставка до отделения Новой Почты по Украине.
          </h4>
          <p>
            Самый популярный способ доставки - Новая Почта. Срок отправки со склада – от 1 до 3-х рабочих дней. Срок доставки от 1 до 3-х дней (в зависимости от вашего города).
          </p>
          <h4>
            Адресная доставка курьером Новой Почты по Украине.
          </h4>
          <p>
            Вы можете заказать адресную доставку курьером Новой Почты к двери вашего дома или работы. Срок отправки со склада – от 1 до 3-х рабочих дней. Срок доставки от 1 до 4-х дней (в зависимости от вашего месторасположения).
          </p>
        </article>
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

<style lang="scss" scoped>

.payment {
  min-height: 70vh;
}

</style>