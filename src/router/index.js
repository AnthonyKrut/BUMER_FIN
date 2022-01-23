import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage'
import CatalogPage from '../pages/CatalogPage'
import ProductPage from '../pages/ProductPage'
import CheckoutPage from '../pages/СheckoutPage'
import ShipmentInfoPage from '../pages/ShipmentInfoPage'
import CooperationInfoPage from '../pages/CooperationInfoPage'
import PaymentInfoPage from '../pages/PaymentInfoPage'
import GuaranteeInfoPage from '../pages/GuaranteeInfoPage'
import Error404Page from '../pages/Error404Page'
import PrivacyPolicyInfoPage from '../pages/PrivacyPolicyInfoPage'
import PublicOfferInfoPage from '../pages/PublicOfferInfoPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title_ru: 'Главная',
      title_ua: 'Головна',
    },
  },
  {
    path: '/catalog/:id',
    name: 'Catalog',
    component: CatalogPage,
    meta: {
      title_ru: 'Каталог',
      title_ua: 'Каталог',
    },
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductPage,
    meta: {
      title_ru: 'Товар',
      title_ua: 'Товар',
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
    meta: {
      title_ru: 'Оформить заказ',
      title_ua: 'Оформити замовлення',
    },
  },
  {
    path: '/shipment-info',
    name: 'ShipmentInfoPage',
    component: ShipmentInfoPage,
    meta: {
      title_ru: 'Доставка',
      title_ua: 'Доставка',
    },
  },
  {
    path: '/cooperation-info',
    name: 'CooperationInfoPage',
    component: CooperationInfoPage,
    meta: {
      title_ru: 'Сотрудничество',
      title_ua: 'Співробітництво ',
    },
  },
  {
    path: '/payment-info',
    name: 'PaymentInfoPage',
    component: PaymentInfoPage,
    meta: {
      title_ru: 'Оплата',
      title_ua: 'Оплата',
    },
  },
  {
    path: '/guarantee-info',
    name: 'GuaranteeInfoPage',
    component: GuaranteeInfoPage,
    meta: {
      title_ru: 'Гарантия',
      title_ua: 'Гарантія',
    },
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyInfo',
    component: PrivacyPolicyInfoPage,
    meta: {
      title_ru: 'Политика конфиденциальности',
      title_ua: 'Політика конфіденційності',
    },
  },
  {
    path: '/public-offer',
    name: 'PublicOfferInfo',
    component: PublicOfferInfoPage,
    meta: {
      title_ru: 'Договор публичной оферты',
      title_ua: 'Договор публічної оферти',
    },
  },
  {
    path: '*',
    component: Error404Page,
    meta: {
      title_ru: '404',
      title_ua: '404',
    },
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)

  next()
})

export default router
