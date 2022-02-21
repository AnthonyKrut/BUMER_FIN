import Vue from 'vue'
import i18n from './../i18n.bootstrap'

const _getCartItems = () => {
  const localStorageVal = localStorage.getItem('cart')
  if (!localStorageVal) return []
  return JSON.parse(localStorageVal)
}

const _getActiveSize = (product) => {
  return product.productInfo.find(size => size.isActive)?.size
}

const _addQuantity = (sizes, activeSize, quantity) => {
  return sizes.map(origin => {
    const size = {...origin}
    if (size.size === activeSize) {
      size.quantityInOrder = size.quantityInOrder + quantity
    }
    return {...size}
  })
}

const _setQuantity = (sizes, activeSize, quantity) => {
  return sizes.map(origin => {
    const size = {...origin}
    if (size.size === activeSize) {
      size.quantityInOrder = quantity
    }
    return {...size}
  })
}

const _isQuantityUnavailable = (sizes) => {
  return sizes.some(size => {
    return size.quantityInOrder > size.quantity
  })
}

const _isProductExistsInCart = (product, cart) => {
  return cart.some(i => i.id === product.id)
}


export default {
  state: () => ({
    cart: _getCartItems(),
  }),
  getters: {
    cartCount(state, getters) {
      return state.cart.reduce((acc, item) => {
        return acc += getters.cartItemCount(item)
      }, 0)
    },

    cartItemCount() {
      return (cartItem) => {
        return cartItem.productInfo.reduce((sizeAcc, sizeItem) => {
          return sizeAcc += sizeItem.quantityInOrder
        }, 0)
      }
    },

    total(state, getters) {
      return state.cart.reduce((acc, cartItem) => {
        return acc += getters.cartItemCount(cartItem) * getters.cartItemFinalPrice(cartItem)
      }, 0)
    },

    cartItemFinalPrice() {
      return (product) => {
        return product.salePrice || product.price
      }
    },

    cartItemPriceDelta() {
      return (product) => {
        if(!product.salePrice) return 0
        return product.price - product.salePrice
      }
    },

    safe(state, getters) {
      return state.cart.reduce((acc, cartItem) => {
        return acc += getters.cartItemCount(cartItem) * getters.cartItemPriceDelta(cartItem)
      }, 0)
    },

    orderProducts(state) {
      const result = []
      state.cart.forEach(product => {
        const sizes = product.productInfo.filter(size => size.quantityInOrder > 0)
        sizes.forEach(size => {
          result.push({
            productId:	product.id,
            size:	size.size,
            colorId:	product.color.id,
            quantity:	size.quantityInOrder,
          })
        })
      })
      return result
    },
  },
  mutations: {
    addToCart(state, payload) {
      let product = {...payload}

      const activeSize = _getActiveSize(product)

      if(_isProductExistsInCart(product, state.cart)) {
        product = {...state.cart.find(i => i.id === product.id)}
      }

      product.productInfo = _addQuantity(product.productInfo, activeSize, 1)

      if (_isQuantityUnavailable(product.productInfo)) {
        Vue.swal(i18n.t('common.error'), i18n.t('cart.to_many_products'), 'error')
        return
      }

      if(_isProductExistsInCart(product, state.cart)) {
        state.cart = state.cart.map(cartItem => cartItem.id === product.id ? product : cartItem)
      } else {
        state.cart.push(product)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    changeQuantity(state, {product, size, quantity}) {
      const quantityAvailable = product.productInfo.find(i => i.size === size)?.quantity

      if (quantity > quantityAvailable) {
        Vue.swal(i18n.t('common.error'), i18n.t('cart.to_many_products'), 'error')
        return
      }

      product.productInfo = _setQuantity(product.productInfo, size, quantity)

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    deleteFromCart(state, productId) {
      console.log(productId)
      state.cart = state.cart.filter(item => item.id !== productId)

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
