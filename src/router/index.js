import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage'
import CatalogPage from '../pages/CatalogPage'
import ProductPage from '../pages/ProductCardPage'
import CheckoutPage from '../pages/СheckoutPage'

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
