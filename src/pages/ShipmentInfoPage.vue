<template>
  <section class="shipment">
    <h2 class="infopage-title">Доставкa</h2>
    <div class="container">
      <TermsNav />
      <article class="infopage-article">
        <p class="infopage-text-capital">
          Заказы на сумму от 3 999 ГРН доставляются бесплатно.
        </p>
        <h3 class="infopage-subtitle">
          Наличными при получении (наложенный платеж)
        </h3>
        <p class="infopage-text">
          Оплата заказа наложенным платежом в отделении Новой Почты, после
          осмотра посылки на соответствие Вашего заказа. Обращаем внимание, что
          при наложенном платеже вам необходимо будет оплатить комиссию
          транспортной компании.
        </p>
        <p class="infopage-text">
          Если сумма заказа превышает 5000 грн, для получения заказа необходимо
          предъявить паспорт для верификации и идентификации. Это касается
          операций как в наличной форме, так и с использованием банковской
          платежной карты.
        </p>
        <h3 class="infopage-subtitle">
          Оплата по реквизитам на карту ПриватБанка
        </h3>
        <p class="infopage-text">
          Во время оформления заказа, вы можете выбрать «Реквизиты для оплаты на
          карту ПриватБанка» и у вас на странице появятся реквизиты карты. В
          этом случае вы не переплачиваете за наложенный платеж по тарифам Новой
          Почты. В случае если вам что-то не подойдет – вы можете сделать Обмен
          или возврат
        </p>
      </article>
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

.shipment {
  min-height: 70vh;
}

.container {
  display: flex;
}
</style>
