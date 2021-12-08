import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage'
import CatalogPage from '../pages/CatalogPage'
import ProductPage from '../pages/ProductCardPage'
import CheckoutPage from '../pages/СheckoutPage'
import ShipmentInfoPage from '../pages/ShipmentInfoPage'
import CooperationInfoPage from '../pages/CooperationInfoPage'
import PaymentInfoPage from '../pages/PaymentInfoPage'
import GuaranteeInfoPage from '../pages/GuaranteeInfoPage'
import Error404Page from '../pages/Error404Page'

const routes = [
  {
    path: '/',
    name: 'Home',

    component: HomePage,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage,
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
  },
  {
    path: '/shipment-info',
    name: 'ShipmentInfoPage',
    component: ShipmentInfoPage,
  },
  {
    path: '/cooperation-info',
    name: 'CooperationInfoPage',
    component: CooperationInfoPage,
  },
  {
    path: '/payment-info',
    name: 'PaymentInfoPage',
    component: PaymentInfoPage,
  }, 
  {
    path: '/guarantee-info',
    name: 'GuaranteeInfoPage',
    component: GuaranteeInfoPage,
  },
  {
    path: '/error-404',
    name: 'Error404Page',
    component: Error404Page,
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


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters['auth/isGuest']) {
//       store.dispatch('auth/loadUser').then(() => {
//         if(store.getters['auth/isGuest']) {
//           next({
//             path: '/login',
//           })
//         } else {
//           next()
//         }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
