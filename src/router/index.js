import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import CatalogPage from '../pages/CatalogPage.vue'
import ProductPage from '../pages/ProductCardPage.vue'

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
