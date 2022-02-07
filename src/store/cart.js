import Vue from 'vue'

const _getCartItems = () => {
  const localStorageVal = localStorage.getItem('cart')
  if (!localStorageVal) return []
  return JSON.parse(localStorageVal)
}

const _getActiveSize = (product) => {
  return product.productInfo.find(size => size.isActive)?.size
}

const _addQuantity = (sizes, activeSize, quantity) => {
  return sizes.map(size => {
    if (size.size === activeSize) {
      size.quantityInOrder = size.quantityInOrder + quantity
    }
    return size
  })

}

const _isQuantityUnavailable = (product) => {
  return product.productInfo.some(size => {
    return size.quantityInOrder > size.quantity
  })
}

const _isProductExistsInCart = (product, cart) => {
  return cart.some(i => i.id === product.id)
}


export default {
  state: () => ({
    cart: _getCartItems()
  }),
  getters: {
    total() {
      return 5432
    },
    safe() {
      return 200
    },
  },
  mutations: {
    addToCart(state, payload) {
      let product = {...payload}

      const activeSize = _getActiveSize(product)
      if (!activeSize) return

      let sizes = []
      if(_isProductExistsInCart(product, state.cart)) {
        sizes = _addQuantity(state.cart.find(i => i.id === product.id).productInfo, activeSize, 1)
      } else {
        sizes = _addQuantity(product.productInfo, activeSize, 1)
      }

      if (_isQuantityUnavailable(product)) {
        Vue.swal('Ошибка', 'Такого количества данного товара нет на складе', 'error')
        return
      }

      if(_isProductExistsInCart(product, state.cart)) {
        state.cart.find(i => i.id === product.id).productInfo = sizes
      } else {
        product.productInfo = sizes
        state.cart.push(product)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    clearCart(state) {
      state.cart = []
      localStorage.removeItem('cart')
    },
  },
  actions: {},
  namespaced: true,
}
